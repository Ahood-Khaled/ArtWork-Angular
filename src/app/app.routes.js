import { ScreenComponent } from './pages/screen.component';
import { roleGuard } from './core/role.guard';
export const routes = [
    { path: '', component: ScreenComponent, data: { screen: 'home', title: 'Welcome / Home' } },
    { path: 'login', component: ScreenComponent, data: { screen: 'login', title: 'Login' } },
    { path: 'register', component: ScreenComponent, data: { screen: 'register', title: 'Register' } },
    { path: 'galleries', component: ScreenComponent, data: { screen: 'galleries', title: 'Galleries' } },
    { path: 'galleries/:id', component: ScreenComponent, data: { screen: 'gallery-details', title: 'Gallery Details' } },
    { path: 'artworks/new', component: ScreenComponent, canActivate: [roleGuard], data: { screen: 'add-artwork', title: 'Add / Edit Artwork', roles: ['Artist', 'Admin'] } },
    { path: 'artworks/:id', component: ScreenComponent, data: { screen: 'artwork-details', title: 'Artwork Details' } },
    { path: 'auctions', component: ScreenComponent, data: { screen: 'auctions', title: 'Live Auctions' } },
    { path: 'favorites', component: ScreenComponent, data: { screen: 'favorites', title: 'Favorites' } },
    { path: 'orders', component: ScreenComponent, data: { screen: 'orders', title: 'My Orders' } },
    { path: 'artist', component: ScreenComponent, canActivate: [roleGuard], data: { screen: 'artist', title: 'Artist Dashboard', roles: ['Artist', 'Admin'] } },
    { path: 'profile', component: ScreenComponent, data: { screen: 'profile', title: 'Profile' } },
    { path: '**', redirectTo: '' }
];
