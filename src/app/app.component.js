import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArtvistaService } from './services/artvista.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
function AppComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1, "Artist");
    i0.ɵɵelementEnd();
} }
export class AppComponent {
    service = inject(ArtvistaService);
    currentYear = new Date().getFullYear();
    get initials() {
        return this.service.currentUser.fullName
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part[0].toUpperCase())
            .join('') || 'U';
    }
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 5, consts: [[1, "topbar"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "main-nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/galleries", "routerLinkActive", "active"], ["routerLink", "/artworks/1", "routerLinkActive", "active"], ["routerLink", "/auctions", "routerLinkActive", "active"], ["routerLink", "/artist", "routerLinkActive", "active"], ["routerLink", "/profile", "routerLinkActive", "active"], ["routerLink", "/login", "routerLinkActive", "active"], [1, "top-actions"], ["routerLink", "/galleries", "aria-label", "Search"], ["routerLink", "/profile", 1, "avatar"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
            i0.ɵɵtext(3, "A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "ArtVista");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "nav", 3)(7, "a", 4);
            i0.ɵɵtext(8, "Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "a", 5);
            i0.ɵɵtext(10, "Galleries");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 6);
            i0.ɵɵtext(12, "Artworks");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 7);
            i0.ɵɵtext(14, "Auctions");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(15, AppComponent_Conditional_15_Template, 2, 0, "a", 8);
            i0.ɵɵelementStart(16, "a", 9);
            i0.ɵɵtext(17, "Profile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a", 10);
            i0.ɵɵtext(19, "Login");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 11)(21, "a", 12);
            i0.ɵɵtext(22, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "a", 13);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "main");
            i0.ɵɵelement(26, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "footer", 14);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(4, _c0));
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.service.currentUser.role === "Artist" || ctx.service.currentUser.role === "Admin" ? 15 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.initials);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("\u00A9 ", ctx.currentYear, " ArtVista \u00B7 Discover. Collect. Own.");
        } }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
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
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 32 }); })();
