import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { environment } from '../../environments';
import { ArtworkService, BidService, FavoriteService, GalleryService, OrderService } from './api.services';
import * as i0 from "@angular/core";
const apiRoot = environment.apiBaseUrl.replace(/\/api\/?$/, '');
const enumText = (value, names) => typeof value === 'number' ? (names[value - 1] ?? names[0]) : String(value ?? names[0]);
export class ArtvistaService {
    artworkApi = inject(ArtworkService);
    galleryApi = inject(GalleryService);
    bidApi = inject(BidService);
    orderApi = inject(OrderService);
    favoriteApi = inject(FavoriteService);
    demoMode = false;
    currentUser = { id: 0, fullName: 'Guest', email: '', bio: '', profileImageUrl: '', role: 'Collector' };
    galleries = [];
    artworks = [];
    bids = [];
    orders = [];
    favorites = [];
    artworksSubject = new BehaviorSubject([]);
    bidsSubject = new BehaviorSubject([]);
    ordersSubject = new BehaviorSubject([]);
    favoriteIds$ = new BehaviorSubject([]);
    artworks$ = this.artworksSubject.asObservable();
    bids$ = this.bidsSubject.asObservable();
    orders$ = this.ordersSubject.asObservable();
    imageUrl(value) {
        if (!value)
            return '';
        if (/^https?:\/\//i.test(value) || value.startsWith('data:'))
            return value;
        return `${apiRoot}${value.startsWith('/') ? value : '/' + value}`;
    }
    mapArtwork(a) {
        return {
            id: a.artworkId ?? a.id,
            title: a.title,
            story: a.story,
            year: a.year,
            medium: a.medium,
            dimensions: a.dimensions,
            imageUrl: this.imageUrl(a.imageUrl),
            saleType: enumText(a.saleType, ['Fixed', 'Auction']),
            fixedPrice: a.fixedPrice ?? undefined,
            startingPrice: a.startingPrice ?? undefined,
            currentPrice: a.currentPrice ?? undefined,
            auctionEndTime: a.auctionEndTime ?? undefined,
            status: enumText(a.status, ['Available', 'InAuction', 'Sold']),
            galleryId: a.galleryId,
            artistId: a.artistId,
            artistName: a.artistName ?? `Artist #${a.artistId}`
        };
    }
    mapGallery(g) {
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
    loadCatalog() {
        forkJoin({
            artworks: this.artworkApi.getAll().pipe(catchError(err => { console.error('Load artworks failed', err); return of([]); })),
            galleries: this.galleryApi.getAll().pipe(catchError(err => { console.error('Load galleries failed', err); return of([]); }))
        }).subscribe(({ artworks, galleries }) => {
            this.artworks = artworks.map(a => this.mapArtwork(a));
            this.galleries = galleries.map(g => this.mapGallery(g));
            this.artworksSubject.next([...this.artworks]);
        });
    }
    loadUserData() {
        this.loadFavorites();
        this.orderApi.getMyOrders().pipe(catchError(err => { console.error('Load orders failed', err); return of([]); }))
            .subscribe(rows => {
            this.orders = rows.map((o) => ({
                id: o.orderId ?? o.id, finalPrice: o.finalPrice,
                orderType: enumText(o.orderType, ['DirectBuy', 'AuctionWin']),
                status: enumText(o.status, ['Pending', 'Completed', 'Cancelled']),
                createdAt: o.createdAt, artworkId: o.artworkId,
                artworkTitle: this.artworks.find(a => a.id === o.artworkId)?.title ?? `Artwork #${o.artworkId}`,
                buyerId: o.buyerId
            }));
            this.ordersSubject.next([...this.orders]);
        });
    }
    loadFavorites() {
        this.favoriteApi.getMine().pipe(catchError(err => { console.error('Load favorites failed', err); return of([]); }))
            .subscribe(rows => {
            this.favorites = rows.map((f) => ({ id: f.artworkId, userId: f.userId, artworkId: f.artworkId, createdAt: f.createdAt }));
            this.favoriteIds$.next(this.favorites.map(f => f.artworkId));
        });
    }
    loadBids(artworkId) {
        this.bidApi.getByArtwork(artworkId).pipe(catchError(err => { console.error('Load bids failed', err); return of([]); }))
            .subscribe(rows => {
            const mapped = rows.map((b) => ({ id: b.bidId ?? b.id, amount: b.amount, createdAt: b.createdAt, artworkId: b.artworkId, bidderId: b.bidderId, bidderName: b.bidderName ?? `Bidder #${b.bidderId}` }));
            this.bids = [...this.bids.filter(b => b.artworkId !== artworkId), ...mapped];
            this.bidsSubject.next([...this.bids]);
        });
    }
    getArtwork(id) {
        return this.artworks.find(a => a.id === id) ?? this.artworks[0] ?? { id: 0, title: '', story: '', year: new Date().getFullYear(), medium: '', dimensions: '', imageUrl: '', saleType: 'Fixed', status: 'Available', galleryId: 0, artistId: 0, artistName: '' };
    }
    getGallery(id) {
        return this.galleries.find(g => g.id === id) ?? this.galleries[0] ?? { id: 0, title: '', story: '', coverImageUrl: '', createdAt: '', artistId: 0 };
    }
    getGalleryArtworks(id) { return this.artworks.filter(a => a.galleryId === id); }
    getBidsForArtwork(id) { return this.bids.filter(b => b.artworkId === id).sort((a, b) => b.amount - a.amount); }
    toggleFavorite(id) {
        const exists = this.favoriteIds$.value.includes(id);
        const request = exists ? this.favoriteApi.remove(id) : this.favoriteApi.add(id);
        return new Observable(observer => request.subscribe({
            next: (value) => { this.loadFavorites(); observer.next(value); },
            error: (error) => observer.error(error),
            complete: () => observer.complete()
        }));
    }
    placeBid(artworkId, amount) {
        return this.bidApi.create({ artworkId, amount }).pipe(tap(() => this.loadBids(artworkId)));
    }
    buyDirectly(artworkId) {
        return this.orderApi.create({ artworkId, orderType: 'DirectBuy' }).pipe(tap(() => {
            this.loadCatalog();
            this.loadUserData();
        }));
    }
    addArtwork(value, file) {
        const upload$ = file ? this.artworkApi.uploadImage(file).pipe(map(x => x.imageUrl)) : of('/images/artworks/01-golden-tree.png');
        return this.galleryApi.getMine().pipe(switchMap(galleries => {
            if (galleries.length)
                return of(galleries[0].galleryId ?? galleries[0].id);
            return this.galleryApi.create({ title: 'My Artworks', story: 'A collection of my artworks', coverImageUrl: '/images/artworks/01-golden-tree.png' }).pipe(map((g) => g.galleryId ?? g.id));
        }), switchMap(galleryId => upload$.pipe(map(imageUrl => ({ galleryId, imageUrl })))), switchMap(({ galleryId, imageUrl }) => this.artworkApi.create({
            title: value.title, story: value.story || '', year: value.year,
            medium: value.medium, dimensions: value.dimensions, imageUrl,
            saleType: value.saleType, fixedPrice: value.saleType === 'Fixed' ? value.fixedPrice : null,
            startingPrice: value.saleType === 'Auction' ? value.startingPrice : null,
            auctionEndTime: value.auctionEndTime, galleryId
        })), tap(() => this.loadCatalog()));
    }
    deleteArtwork(id) {
        return this.artworkApi.delete(id).pipe(tap(() => this.loadCatalog()));
    }
    static ɵfac = function ArtvistaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ArtvistaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ArtvistaService, factory: ArtvistaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArtvistaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
