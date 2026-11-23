import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { Artwork, Bid, Favorite, Gallery, Order, OrderStatus, User } from '../models/models';
import { environment } from '../../environments';
import { ArtworkService, BidService, FavoriteService, GalleryService, OrderService } from './api.services';

const apiRoot = environment.apiBaseUrl.replace(/\/api\/?$/, '');
const enumText = (value: any, names: string[]) => typeof value === 'number' ? (names[value - 1] ?? names[0]) : String(value ?? names[0]);

@Injectable({ providedIn: 'root' })
export class ArtvistaService {
  private artworkApi = inject(ArtworkService);
  private galleryApi = inject(GalleryService);
  private bidApi = inject(BidService);
  private orderApi = inject(OrderService);
  private favoriteApi = inject(FavoriteService);

  readonly demoMode = false;
  currentUser: User = { id: 0, fullName: 'Guest', email: '', bio: '', profileImageUrl: '', role: 'Collector' };
  galleries: Gallery[] = [];
  artworks: Artwork[] = [];
  bids: Bid[] = [];
  orders: Order[] = [];
  favorites: Favorite[] = [];

  private readonly artworksSubject = new BehaviorSubject<Artwork[]>([]);
  private readonly bidsSubject = new BehaviorSubject<Bid[]>([]);
  private readonly ordersSubject = new BehaviorSubject<Order[]>([]);
  readonly favoriteIds$ = new BehaviorSubject<number[]>([]);
  readonly artworks$ = this.artworksSubject.asObservable();
  readonly bids$ = this.bidsSubject.asObservable();
  readonly orders$ = this.ordersSubject.asObservable();

  private imageUrl(value: string | null | undefined): string {
    if (!value) return '';
    if (/^https?:\/\//i.test(value) || value.startsWith('data:')) return value;
    return `${apiRoot}${value.startsWith('/') ? value : '/' + value}`;
  }

  private mapArtwork(a: any): Artwork {
    return {
      id: a.artworkId ?? a.id,
      title: a.title,
      story: a.story,
      year: a.year,
      medium: a.medium,
      dimensions: a.dimensions,
      imageUrl: this.imageUrl(a.imageUrl),
      saleType: enumText(a.saleType, ['Fixed', 'Auction']) as any,
      fixedPrice: a.fixedPrice ?? undefined,
      startingPrice: a.startingPrice ?? undefined,
      currentPrice: a.currentPrice ?? undefined,
      auctionEndTime: a.auctionEndTime ?? undefined,
      status: enumText(a.status, ['Available', 'InAuction', 'Sold']) as any,
      galleryId: a.galleryId,
      artistId: a.artistId,
      artistName: a.artistName ?? `Artist #${a.artistId}`
    };
  }

  private mapGallery(g: any): Gallery {
    return {
      id: g.galleryId ?? g.id,
      title: g.title,
      story: g.story,
      coverImageUrl: this.imageUrl(g.coverImageUrl),
      createdAt: g.createdAt,
      artistId: g.artistId,
      artistName: g.artistName
    };
  }

  loadCatalog(): void {
    forkJoin({
      artworks: this.artworkApi.getAll().pipe(catchError(err => { console.error('Load artworks failed', err); return of([]); })),
      galleries: this.galleryApi.getAll().pipe(catchError(err => { console.error('Load galleries failed', err); return of([]); }))
    }).subscribe(({ artworks, galleries }) => {
      this.artworks = artworks.map(a => this.mapArtwork(a));
      this.galleries = galleries.map(g => this.mapGallery(g));
      this.artworksSubject.next([...this.artworks]);
    });
  }

  loadUserData(): void {
    this.loadFavorites();
    this.orderApi.getMyOrders().pipe(catchError(err => { console.error('Load orders failed', err); return of([]); }))
      .subscribe(rows => {
        this.orders = rows.map((o: any) => ({
          id: o.orderId ?? o.id, finalPrice: o.finalPrice,
          orderType: enumText(o.orderType, ['DirectBuy', 'AuctionWin']) as any,
          status: enumText(o.status, ['Pending', 'Completed', 'Cancelled']) as any,
          createdAt: o.createdAt, artworkId: o.artworkId,
          artworkTitle: this.artworks.find(a => a.id === o.artworkId)?.title ?? `Artwork #${o.artworkId}`,
          buyerId: o.buyerId
        }));
        this.ordersSubject.next([...this.orders]);
      });
  }

  loadFavorites(): void {
    this.favoriteApi.getMine().pipe(catchError(err => { console.error('Load favorites failed', err); return of([]); }))
      .subscribe(rows => {
        this.favorites = rows.map((f: any) => ({ id: f.artworkId, userId: f.userId, artworkId: f.artworkId, createdAt: f.createdAt }));
        this.favoriteIds$.next(this.favorites.map(f => f.artworkId));
      });
  }

  loadBids(artworkId: number): void {
    this.bidApi.getByArtwork(artworkId).pipe(catchError(err => { console.error('Load bids failed', err); return of([]); }))
      .subscribe(rows => {
        const mapped = rows.map((b: any) => ({ id: b.bidId ?? b.id, amount: b.amount, createdAt: b.createdAt, artworkId: b.artworkId, bidderId: b.bidderId, bidderName: b.bidderName ?? `Bidder #${b.bidderId}` }));
        this.bids = [...this.bids.filter(b => b.artworkId !== artworkId), ...mapped];
        this.bidsSubject.next([...this.bids]);
      });
  }

  getArtwork(id: number): Artwork {
    return this.artworks.find(a => a.id === id) ?? this.artworks[0] ?? ({ id: 0, title: '', story: '', year: new Date().getFullYear(), medium: '', dimensions: '', imageUrl: '', saleType: 'Fixed', status: 'Available', galleryId: 0, artistId: 0, artistName: '' } as Artwork);
  }
  getGallery(id: number): Gallery {
    return this.galleries.find(g => g.id === id) ?? this.galleries[0] ?? ({ id: 0, title: '', story: '', coverImageUrl: '', createdAt: '', artistId: 0 } as Gallery);
  }
  getGalleryArtworks(id: number): Artwork[] { return this.artworks.filter(a => a.galleryId === id); }
  getBidsForArtwork(id: number): Bid[] { return this.bids.filter(b => b.artworkId === id).sort((a,b) => b.amount-a.amount); }

  toggleFavorite(id: number): Observable<unknown> {
    const exists = this.favoriteIds$.value.includes(id);
    const request: Observable<any> = exists ? this.favoriteApi.remove(id) : this.favoriteApi.add(id);
    return new Observable(observer => request.subscribe({
      next: (value: any) => { this.loadFavorites(); observer.next(value); },
      error: (error: any) => observer.error(error),
      complete: () => observer.complete()
    }));
  }

  placeBid(artworkId: number, amount: number): Observable<any> {
    return this.bidApi.create({ artworkId, amount }).pipe(tap(() => this.loadBids(artworkId)));
  }

  buyDirectly(artworkId: number): Observable<any> {
    return this.orderApi.create({ artworkId, orderType: 'DirectBuy' as any }).pipe(tap(() => {
      this.loadCatalog(); this.loadUserData();
    }));
  }

  addArtwork(value: Partial<Artwork>, file?: File | null): Observable<any> {
    const upload$ = file ? this.artworkApi.uploadImage(file).pipe(map(x => x.imageUrl)) : of('/images/artworks/01-golden-tree.png');
    return this.galleryApi.getMine().pipe(
      switchMap(galleries => {
        if (galleries.length) return of(galleries[0].galleryId ?? galleries[0].id);
        return this.galleryApi.create({ title: 'My Artworks', story: 'A collection of my artworks', coverImageUrl: '/images/artworks/01-golden-tree.png' } as any).pipe(map((g: any) => g.galleryId ?? g.id));
      }),
      switchMap(galleryId => upload$.pipe(map(imageUrl => ({ galleryId, imageUrl })))),
      switchMap(({ galleryId, imageUrl }) => this.artworkApi.create({
        title: value.title, story: value.story || '', year: value.year,
        medium: value.medium, dimensions: value.dimensions, imageUrl,
        saleType: value.saleType, fixedPrice: value.saleType === 'Fixed' ? value.fixedPrice : null,
        startingPrice: value.saleType === 'Auction' ? value.startingPrice : null,
        auctionEndTime: value.auctionEndTime, galleryId
      } as any)),
      tap(() => this.loadCatalog())
    );
  }

  deleteArtwork(id: number): Observable<void> {
    return this.artworkApi.delete(id).pipe(tap(() => this.loadCatalog()));
  }
}
