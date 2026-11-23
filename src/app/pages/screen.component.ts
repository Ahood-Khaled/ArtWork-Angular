
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ArtvistaService } from '../services/artvista.service';
import { interval, Subscription } from 'rxjs';
import { AuthService, UserService } from '../services/api.services';
import { Artwork, User } from '../models/models';
import { Component, OnDestroy, OnInit, inject, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  template: `
<div class="page-wrap" [class.wide]="currentPage==='home' || currentPage==='galleries' || currentPage==='favorites' || currentPage==='orders' || currentPage==='auctions'">
  @switch (currentPage) {

    @case ('home') {
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">THE ART OF DISCOVERY</p>
          <h1>Digital Art Gallery &<br>Live Auction</h1>
          <p class="hero-sub">Discover. Collect. Own.</p>
          <a class="btn gold" routerLink="/galleries">Explore Art <span>→</span></a>
        </div>
        <div class="hero-art">
          <div class="art-frame frame-one"></div>
          <div class="art-frame frame-two"></div>
          <div class="art-frame frame-three"></div>
        </div>
      </section>

      <section class="collection-panel">
        <div class="section-head">
          <h2>Featured Collections</h2>
          <a routerLink="/galleries">View All →</a>
        </div>
        <div class="collection-grid">
          <a class="collection-card grad-one" routerLink="/galleries/1"><span>Contemporary Art</span></a>
          <a class="collection-card grad-two" routerLink="/galleries/2"><span>Nature's Beauty</span></a>
          <a class="collection-card grad-three" routerLink="/galleries/3"><span>Abstract Magic</span></a>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Featured Artworks</h2>
          <a routerLink="/galleries">Explore all →</a>
        </div>
        <div class="art-grid">
          @for (art of arts.slice(0,3); track art.id) {
            <article class="art-card">
              <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'">
                <span class="art-label">{{art.status}}</span>
              </a>
              <div class="art-info">
                <a [routerLink]="['/artworks',art.id]" class="art-title">{{art.title}}</a>
                <span>{{art.artistName}}</span>
                <strong>{{art.saleType==='Auction' ? '$'+(art.currentPrice ?? 0) : '$'+(art.fixedPrice ?? 0)}}</strong>
              </div>
            </article>
          }
        </div>
      </section>
    }

    @case ('login') {
      <div class="auth-layout">
        <div class="auth-art">
          <div class="brand-mark large">A</div>
          <h2>ArtVista</h2>
          <p>Digital Art Gallery</p>
          <span>Step into the world<br>of fine art</span>
        </div>
        <div class="auth-form">
          <h1>Welcome Back</h1>
          <p class="muted">Sign in to your account</p>
          <form [formGroup]="loginForm" (ngSubmit)="login()">
            <label>Email Address</label>
            <input formControlName="email" type="email" placeholder="Email Address">
            <small *ngIf="loginForm.controls.email.touched && loginForm.controls.email.invalid">Enter a valid email address.</small>
            <label>Password</label>
            <input formControlName="password" type="password" placeholder="Password">
            <small *ngIf="loginForm.controls.password.touched && loginForm.controls.password.invalid">Password is required.</small>
            <button class="btn gold full" type="submit">Login</button>
          </form>
          <div class="or"><span></span>or<span></span></div>
          <a class="btn outline full" routerLink="/register">Create an Account</a>
          <p class="form-note">Sign in with your registered ArtVista account.</p>
        </div>
      </div>
    }

    @case ('register') {
      <div class="auth-layout">
        <div class="auth-art register-art"><div class="soft-orb"></div></div>
        <div class="auth-form">
          <h1>Create Your Account</h1>
          <p class="muted">Join our art community</p>
          <form [formGroup]="registerForm" (ngSubmit)="register()">
            <div class="role-switch">
              <button type="button" [class.selected]="registerForm.value.role==='Collector'" (click)="registerForm.patchValue({role:'Collector'})">Collector</button>
              <button type="button" [class.selected]="registerForm.value.role==='Artist'" (click)="registerForm.patchValue({role:'Artist'})">Artist</button>
            </div>
            <input formControlName="fullName" placeholder="Full Name">
            <input formControlName="email" type="email" placeholder="Email Address">
            <input formControlName="password" type="password" placeholder="Password">
            <button class="btn gold full" type="submit">Register</button>
          </form>
          <p class="form-note">Already have an account? <a routerLink="/login">Login</a></p>
        </div>
      </div>
    }

    @case ('galleries') {
      <div class="page-heading">
        <div><h1>Our Galleries</h1><p>Explore curated art exhibitions</p></div>
        <input class="search-input" [(ngModel)]="searchTerm" placeholder="Search galleries...">
      </div>
      <div class="gallery-grid">
        @for (gallery of filteredGalleries; track gallery.id) {
          <a class="gallery-card" [routerLink]="['/galleries',gallery.id]">
            <div class="gallery-cover" [ngClass]="'grad-'+(gallery.id===1?'one':gallery.id===2?'two':'three')"></div>
            <div class="gallery-card-foot"><h3>{{gallery.title}}</h3><span>→</span></div>
          </a>
        }
      </div>
    }

    @case ('gallery-details') {
      <a class="back-link" routerLink="/galleries">← Back to Galleries</a>
      <section class="gallery-detail">
        <div class="gallery-detail-cover" [ngClass]="'grad-'+(selectedGallery.id===1?'one':selectedGallery.id===2?'two':'three')"></div>
        <div>
          <h1>{{selectedGallery.title}} Exhibition</h1>
          <p>{{selectedGallery.story}}</p>
          <div class="meta">▧ {{galleryArts.length}} Artworks <span>Created by: <b>{{service.currentUser.fullName}}</b></span></div>
        </div>
      </section>
      <div class="section-head"><h2>Gallery Artworks</h2><a routerLink="/artist">Edit Gallery (owner)</a></div>
      <div class="art-grid six">
        @for (art of galleryArts; track art.id) {
          <article class="art-card">
            <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
            <div class="art-info"><a [routerLink]="['/artworks',art.id]" class="art-title">{{art.title}}</a></div>
          </article>
        }
      </div>
    }

    @case ('artwork-details') {
      <section class="detail-card">
        <div class="detail-image" [style.background-image]="'url(' + selectedArtwork.imageUrl + ' )'"></div>
        <div class="detail-copy">
          <button class="heart" (click)="toggleFavorite(selectedArtwork.id)">{{isFavorite(selectedArtwork.id)?'♥':'♡'}}</button>
          <h1>{{selectedArtwork.title}}</h1>
          <p>By <b>{{selectedArtwork.artistName}}</b></p>
          <div class="meta">◷ {{selectedArtwork.year}} <span>◉ {{selectedArtwork.medium}}</span><span>□ {{selectedArtwork.dimensions}}</span></div>
          <span class="status-pill">{{selectedArtwork.status}}</span>
          <p class="story">{{selectedArtwork.story}}</p>
          <h2 class="price">&#36;{{(selectedArtwork.saleType==='Auction' ? (selectedArtwork.currentPrice ?? 0) : (selectedArtwork.fixedPrice ?? 0)) | number}}</h2>
          <div class="button-row">
            <button class="btn outline" (click)="toggleFavorite(selectedArtwork.id)">{{isFavorite(selectedArtwork.id)?'♥ Favorited':'♡ Add to Favorites'}}</button>
            @if (selectedArtwork.saleType === 'Fixed' && selectedArtwork.status === 'Available') {
              <button class="btn gold" (click)="buyNow(selectedArtwork.id)">Buy Now</button>
            } @else if (selectedArtwork.saleType === 'Auction') {
              <a class="btn gold" routerLink="/auctions">Go to Live Auction</a>
            }
          </div>
          <a class="btn navy" [routerLink]="['/galleries',selectedArtwork.galleryId]">View Gallery</a>
        </div>
      </section>
    }

    @case ('auctions') {
      <div class="page-heading"><div><h1>Live Auction</h1><p>Place your bid and be part of the excitement!</p></div></div>
      <section class="auction-layout">
        <div class="auction-art" [style.background-image]="'url(' + auctionArtwork.imageUrl + ' )'"></div>
        <div class="auction-middle">
          <div class="countdown">
            <b>Auction Ends In</b>
            <div class="timer">
              <span>{{countdown.days}}<small>Days</small></span>
              <span>{{countdown.hours}}<small>Hours</small></span>
              <span>{{countdown.minutes}}<small>Min</small></span>
              <span>{{countdown.seconds}}<small>Sec</small></span>
            </div>
          </div>
          <p class="muted center">Current Price</p>
          <h2 class="auction-price">&#36;{{(auctionArtwork.currentPrice ?? 0) | number}}</h2>
          <p class="center muted">🏆 Highest Bidder</p>
          <p class="center"><b>{{highestBidder}}</b></p>
          <input type="number" [(ngModel)]="bidAmount" placeholder="$ Enter your bid amount">
          <div class="quick-bids">
            <button type="button" (click)="quickBid(100)">+100</button>
            <button type="button" (click)="quickBid(500)">+500</button>
            <button type="button" (click)="quickBid(1000)">+1000</button>
          </div>
          <button class="btn gold full" type="button" (click)="submitBid()">Place Bid</button>
          <p class="feedback">{{bidMessage}}</p>
        </div>
        <div class="bid-history">
          <div class="section-head"><h3>Bid History</h3><span>Highest first</span></div>
          @for (bid of auctionBids; track bid.id) {
            <div class="bid-row">
              <span class="mini-avatar">{{bid.bidderName.slice(0,2).toUpperCase()}}</span>
              <div>{{bid.bidderName}}<small>{{bid.createdAt | date:'h:mm a'}}</small></div>
              <b>&#36;{{bid.amount | number}}</b>
            </div>
          }
        </div>
      </section>
    }

    @case ('favorites') {
      <div class="page-heading"><div><h1>My Favorites</h1><p>Your favorite artworks</p></div><a routerLink="/galleries">View All →</a></div>
      <div class="art-grid">
        @for (art of favoriteArts; track art.id) {
          <article class="art-card">
            <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
            <div class="art-info">
              <a [routerLink]="['/artworks',art.id]" class="art-title">{{art.title}}</a>
              <div class="price-line">
                &#36;{{(art.saleType==='Auction' ? (art.currentPrice ?? 0) : (art.fixedPrice ?? 0)) | number}}
                <button class="heart" (click)="toggleFavorite(art.id)">♥</button>
              </div>
            </div>
          </article>
        }
      </div>
    }

    @case ('orders') {
      <div class="page-heading"><div><h1>My Orders</h1><p>Track your purchases and orders</p></div></div>
      <div class="table-card">
        <table>
          <thead><tr><th>Artwork</th><th>Order Type</th><th>Final Price</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            @for (order of service.orders; track order.id) {
              <tr>
                <td><span class="table-art"></span><b>{{order.artworkTitle}}</b></td>
                <td>{{order.orderType==='AuctionWin'?'Auction Win':'Direct Buy'}}</td>
                <td><b>&#36;{{order.finalPrice | number}}</b></td>
                <td><span class="status-pill" [class.complete]="order.status==='Completed'">{{order.status}}</span></td>
                <td>{{order.createdAt | date:'MMM d, y'}}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

    @case ('artist') {
      <div class="artist-layout">
        <aside class="artist-sidebar">
          <div class="avatar big">{{service.currentUser.fullName.slice(0,2).toUpperCase()}}</div>
          <h3>{{service.currentUser.fullName}}</h3><p>{{service.currentUser.role}}</p>
          <a class="side-active">▧ My Artworks</a>
          <a routerLink="/galleries">▤ My Galleries</a>
          <a routerLink="/orders">◷ My Auctions</a>
          <a routerLink="/profile">♙ Profile</a>
          <a routerLink="/login">⇥ Logout</a>
        </aside>
        <section class="artist-content">
          <div class="page-heading"><h1>My Artworks</h1><a class="btn gold" routerLink="/artworks/new">＋ Add Artwork</a></div>
          <div class="art-grid">
            @for (art of myArtworks; track art.id) {
              <article class="art-card">
                <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
                <div class="art-info">
                  <a class="art-title" [routerLink]="['/artworks',art.id]">{{art.title}}</a>
                  <div class="card-actions"><a routerLink="/artworks/new">✎</a><button type="button" (click)="deleteArtwork(art.id)">♜</button></div>
                </div>
              </article>
            }
          </div>
        </section>
      </div>
    }

    @case ('add-artwork') {
      <div class="artist-layout">
        <aside class="artist-sidebar">
          <div class="avatar big">{{service.currentUser.fullName.slice(0,2).toUpperCase()}}</div>
          <h3>{{service.currentUser.fullName}}</h3><p>{{service.currentUser.role}}</p>
          <a routerLink="/artist">▧ My Artworks</a>
          <a routerLink="/galleries">▤ My Galleries</a>
          <a routerLink="/orders">◷ My Auctions</a>
          <a routerLink="/profile">♙ Profile</a>
          <a routerLink="/login">⇥ Logout</a>
        </aside>
        <section class="artist-content">
          <h1>Add New Artwork</h1>
          <form [formGroup]="artworkForm" (ngSubmit)="saveArtwork()" class="artwork-form">
            <div>
              <label>Title *</label><input formControlName="title" placeholder="Enter artwork title">
              <label>Description</label><textarea formControlName="story" placeholder="Describe your artwork..."></textarea>
              <label>Upload Image</label>
              <label class="upload-box">⇧<b>Upload Image</b><small>({{selectedFileName || 'Click to browse'}})</small><input type="file" accept="image/*" (change)="onFileSelected($event)"></label>
            </div>
            <div class="form-panel">
              <h3>Artwork Details</h3>
              <div class="two-fields">
                <div><label>Year</label><input type="number" formControlName="year"></div>
                <div><label>Medium</label><input formControlName="medium"></div>
              </div>
              <label>Dimensions</label><input formControlName="dimensions">
              <label>Sale Type</label>
              <select formControlName="saleType"><option value="Fixed">Fixed Price</option><option value="Auction">Auction</option></select>
              <label>{{artworkForm.value.saleType==='Auction'?'Starting Price':'Fixed Price'}}</label>
              <input type="number" formControlName="price">
              <button class="btn gold full" type="submit">Save Artwork</button>
            </div>
          </form>
        </section>
      </div>
    }

    @case ('profile') {
      <section class="profile-layout">
        <div class="profile-card">
          <div class="avatar profile-avatar">
            {{(currentUser?.fullName ?? '').slice(0,2).toUpperCase()}}
          </div>

          <h2>{{currentUser?.fullName ?? 'Loading...'}}</h2>
          <p>{{currentUser?.role ?? ''}}</p>
          <p class="bio">{{currentUser?.bio ?? ''}}</p>

          <button class="btn gold" type="button"
            [disabled]="!currentUser"
            (click)="openProfileEdit()">
            ✎ Edit Profile
          </button>
        </div>

        <div class="profile-main">
          <div class="tabs">
            <button class="tab-active">My Artworks</button>
            <a routerLink="/galleries">My Galleries</a>
            <a routerLink="/orders">My Orders</a>
          </div>

          <div class="art-grid">
            @for (art of myArtworks.slice(0,3); track art.id) {
              <article class="art-card">
                <a [routerLink]="['/artworks',art.id]"
                  class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
                <div class="art-info">
                  <a class="art-title" [routerLink]="['/artworks',art.id]">{{art.title}}</a>
                </div>
              </article>
            }
          </div>

          @if(profileEditing) {
            <form [formGroup]="profileForm" class="profile-edit"
              (ngSubmit)="saveProfile()">
              <h3>Edit Profile</h3>
              <label>Full Name</label>
              <input formControlName="fullName">
              <label>Bio</label>
              <textarea formControlName="bio"></textarea>
              <button class="btn gold" type="submit">Save Changes</button>
            </form>
          }
        </div>
      </section>
    }
  }
</div>
`
})
export class ScreenComponent implements OnInit, OnDestroy {

  readonly service = inject(ArtvistaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private userService = inject(UserService);
  private cdr = inject(ChangeDetectorRef);

  currentUser: User | null = null;
  currentPage = 'home';
  searchTerm = '';
  bidAmount = 3300;
  bidMessage = '';
  profileEditing = false;
  selectedFileName = '';
  private selectedImageFile: File | null = null;
  galleryId = 1;
  artworkId = 1;
  clockTick = 0;

  private loadProfile(): void {
    console.log('Loading profile...');

    this.userService.getMe().subscribe({
      next: (user: any) => {
        console.log('PROFILE DATA:', user);

        const roleNames = ['Collector', 'Artist', 'Admin'];

        this.currentUser = {
          ...user,
          id: user.userId ?? user.id,
          role: typeof user.role === 'number'
            ? roleNames[user.role - 1]
            : user.role
        };

        this.service.currentUser = this.currentUser!; this.profileForm.patchValue({
          fullName: user.fullName ?? '',
          bio: user.bio ?? ''
        });

        this.service.loadUserData();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('PROFILE LOADING ERROR:', err);
      }
    });
  }
  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  registerForm = this.fb.nonNullable.group({
    role: ['Collector'],
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  artworkForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    story: ['', Validators.required],
    year: [2025],
    medium: ['Oil on Canvas'],
    dimensions: ['80 × 100 cm'],
    saleType: ['Fixed'],
    price: [2500]
  });

  // يبدأ النموذج فارغًا، ثم تُحمّل بيانات المستخدم من API
  profileForm = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    bio: ['']
  });

  private clockSub?: Subscription;

  ngOnInit(): void {
    this.service.loadCatalog();
    this.clockSub = interval(1000).subscribe(() => this.clockTick++);

    // Update the displayed page when Angular route data changes.
    this.route.data.subscribe(data => {
      this.currentPage = data['screen'] as string;
      console.log('CURRENT SCREEN:', this.currentPage);

      // Load the signed-in user's profile whenever navigation reaches /profile.
      // ScreenComponent is reused between routes, so ngOnInit alone is not enough.
      if (this.currentPage === 'profile') {
        this.loadProfile();
      }

      if (this.currentPage === 'auctions') {
        setTimeout(() => {
          if (this.auctionArtwork?.id) {
            this.service.loadBids(this.auctionArtwork.id);
          }
        }, 0);
      }
    });

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')) || 1;

      if (this.currentPage === 'gallery-details') {
        this.galleryId = id;
      }

      if (this.currentPage === 'artwork-details') {
        this.artworkId = id;
      }
    });

  }

  ngOnDestroy(): void {
    this.clockSub?.unsubscribe();
  }

  openProfileEdit(): void {
    if (!this.currentUser) return;

    this.profileForm.patchValue({
      fullName: this.currentUser.fullName,
      bio: this.currentUser.bio ?? ''
    });

    this.profileEditing = true;
  }

  get arts(): Artwork[] {
    return this.service.artworks;
  }

  get filteredGalleries() {
    return this.service.galleries.filter(g =>
      g.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get selectedGallery() {
    return this.service.getGallery(this.galleryId);
  }

  get galleryArts() {
    return this.service.getGalleryArtworks(this.galleryId);
  }

  get selectedArtwork() {
    return this.service.getArtwork(this.artworkId);
  }

  get favoriteArts() {
    const ids = this.service.favoriteIds$.value;
    return this.arts.filter(a => ids.includes(a.id));
  }

  get myArtworks() {
    return this.arts.filter(a => a.artistId === this.service.currentUser.id);
  }

  get auctionArtwork() {
    return this.arts.find(a =>
      a.saleType === 'Auction' && a.status === 'InAuction'
    ) ?? this.arts[1] ?? this.service.getArtwork(0);
  }

  get auctionBids() {
    return this.service.getBidsForArtwork(this.auctionArtwork.id);
  }

  get highestBidder() {
    return this.auctionBids[0]?.bidderName ?? 'No bids yet';
  }

  get isFavorite() {
    return (id: number) => this.service.favoriteIds$.value.includes(id);
  }

  get countdown() {
    const end = new Date(this.auctionArtwork.auctionEndTime ?? Date.now()).getTime();
    const diff = Math.max(0, end - Date.now());

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff % 86400000 / 3600000),
      minutes: Math.floor(diff % 3600000 / 60000),
      seconds: Math.floor(diff % 60000 / 1000)
    };
  }

  toggleFavorite(id: number): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.service.toggleFavorite(id).subscribe({
      error: err => { console.error(err); alert(err.error || 'Favorite update failed.'); }
    });
  }

  quickBid(amount: number): void {
    this.bidAmount = (this.auctionArtwork.currentPrice ?? 0) + amount;
  }

  submitBid(): void {
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }
    this.service.placeBid(this.auctionArtwork.id, Number(this.bidAmount)).subscribe({
      next: () => {
        this.bidMessage = 'Your bid has been placed successfully.';
        this.service.loadCatalog();
        this.service.loadBids(this.auctionArtwork.id);
      },
      error: err => { console.error(err); this.bidMessage = err.error || 'Bid could not be placed.'; }
    });
  }

  buyNow(artworkId: number): void {
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }
    this.service.buyDirectly(artworkId).subscribe({
      next: () => this.router.navigate(['/orders']),
      error: err => { console.error(err); alert(err.error || 'Purchase failed.'); }
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    this.auth.login(email, password).subscribe({
      next: () => {
        this.userService.getMe().subscribe({
          next: (user: any) => {
            const roleNames = ['Collector', 'Artist', 'Admin'];
            this.currentUser = {
              ...user,
              id: user.userId ?? user.id,
              role: typeof user.role === 'number' ? roleNames[user.role - 1] : user.role
            };
            this.service.currentUser = this.currentUser!; this.service.loadUserData();
            this.router.navigate(['/']);
          },
          error: (profileError: any) => {
            console.error('Login succeeded, but profile loading failed:', profileError);
            this.router.navigate(['/']);
          }
        });
      },
      error: (err) => {
        console.error('Login failed:', err);
        const detail = typeof err.error === 'string'
          ? err.error
          : (err.error?.title || err.message || 'Unknown network/API error');
        alert(`Login failed (${err.status || 'network'}): ${detail}`);
      }
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const data = this.registerForm.getRawValue();

    this.auth.register(data).subscribe({
      next: () => {
        alert('Registration successful. Please login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again.');
      }
    });
  }

  saveArtwork(): void {
    if (this.artworkForm.invalid) {
      this.artworkForm.markAllAsTouched();
      return;
    }
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }

    const v = this.artworkForm.getRawValue();
    const isAuction = v.saleType === 'Auction';
    this.service.addArtwork({
      title: v.title,
      story: v.story,
      year: Number(v.year),
      medium: v.medium,
      dimensions: v.dimensions,
      saleType: v.saleType as 'Fixed' | 'Auction',
      fixedPrice: isAuction ? undefined : Number(v.price),
      startingPrice: isAuction ? Number(v.price) : undefined,
      auctionEndTime: isAuction ? new Date(Date.now() + 86400000).toISOString() : undefined
    }, this.selectedImageFile).subscribe({
      next: () => { alert('Artwork saved to the database.'); this.router.navigate(['/artist']); },
      error: err => { console.error(err); alert(err.error || 'Could not save artwork. Check that you own a gallery and that the API is running.'); }
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedImageFile = file;
    this.selectedFileName = file?.name ?? '';
  }

  deleteArtwork(id: number): void {
    if (!confirm('Delete this artwork?')) return;
    this.service.deleteArtwork(id).subscribe({
      next: () => alert('Artwork deleted from the database.'),
      error: err => { console.error(err); alert(err.error || 'Could not delete artwork.'); }
    });
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const updatedData = this.profileForm.getRawValue();

    if (!this.currentUser) return;
    this.userService.update(this.currentUser.id, {
      fullName: updatedData.fullName,
      email: this.currentUser.email,
      bio: updatedData.bio,
      profileImageUrl: this.currentUser.profileImageUrl
    }).subscribe({
      next: () => {
        this.currentUser = { ...this.currentUser!, ...updatedData };
        this.service.currentUser = this.currentUser!;
        this.profileEditing = false;
        alert('Profile updated in the database.');
      },
      error: err => { console.error(err); alert(err.error || 'Profile update failed.'); }
    });
  }
}
