import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArtvistaService } from './services/artvista.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
<header class="topbar">
  <a class="brand" routerLink="/"><span class="brand-mark">A</span><span>ArtVista</span></a>
  <nav class="main-nav">
    <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
    <a routerLink="/galleries" routerLinkActive="active">Galleries</a>
    <a routerLink="/artworks/1" routerLinkActive="active">Artworks</a>
    <a routerLink="/auctions" routerLinkActive="active">Auctions</a>
    @if (service.currentUser.role === 'Artist' || service.currentUser.role === 'Admin') {
      <a routerLink="/artist" routerLinkActive="active">Artist</a>
    }
    <a routerLink="/profile" routerLinkActive="active">Profile</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
  </nav>
  <div class="top-actions">
    <a routerLink="/galleries" aria-label="Search">⌕</a>
    <a routerLink="/profile" class="avatar">{{ initials }}</a>
  </div>
</header>
<main><router-outlet /></main>
<footer class="footer">© {{ currentYear }} ArtVista · Discover. Collect. Own.</footer>
`
})
export class AppComponent {
  readonly service = inject(ArtvistaService);
  readonly currentYear = new Date().getFullYear();

  get initials(): string {
    return this.service.currentUser.fullName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0].toUpperCase())
      .join('') || 'U';
  }
}