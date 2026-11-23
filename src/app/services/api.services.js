import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments';
import * as i0 from "@angular/core";
const api = environment.apiBaseUrl;
const TOKEN_KEY = 'artvista_token';
const ROLE_KEY = 'artvista_role';
export class UserService {
    http = inject(HttpClient);
    getAll() {
        return this.http.get(`${api}/User`);
    }
    getById(id) {
        return this.http.get(`${api}/User/${id}`);
    }
    update(id, data) {
        return this.http.put(`${api}/User/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${api}/User/${id}`);
    }
    getMe() {
        return this.http.get(`${api}/User/me`);
    }
    static ɵfac = function UserService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
export class GalleryService {
    http = inject(HttpClient);
    getAll() {
        return this.http.get(`${api}/Galleries`);
    }
    getById(id) {
        return this.http.get(`${api}/Galleries/${id}`);
    }
    getMine() {
        return this.http.get(`${api}/Galleries/mine`);
    }
    create(data) {
        return this.http.post(`${api}/Galleries`, data);
    }
    update(id, data) {
        return this.http.put(`${api}/Galleries/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${api}/Galleries/${id}`);
    }
    static ɵfac = function GalleryService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GalleryService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GalleryService, factory: GalleryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
export class ArtworkService {
    http = inject(HttpClient);
    getAll() {
        return this.http.get(`${api}/Artworks`);
    }
    getById(id) {
        return this.http.get(`${api}/Artworks/${id}`);
    }
    getMine() {
        return this.http.get(`${api}/Artworks/mine`);
    }
    uploadImage(file) {
        const form = new FormData();
        form.append('file', file);
        return this.http.post(`${api}/Artworks/upload-image`, form);
    }
    create(data) {
        return this.http.post(`${api}/Artworks`, data);
    }
    update(id, data) {
        return this.http.put(`${api}/Artworks/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${api}/Artworks/${id}`);
    }
    static ɵfac = function ArtworkService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ArtworkService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ArtworkService, factory: ArtworkService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArtworkService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
export class BidService {
    http = inject(HttpClient);
    getByArtwork(id) {
        return this.http.get(`${api}/Bid/artwork/${id}`);
    }
    create(data) {
        return this.http.post(`${api}/Bid`, data);
    }
    static ɵfac = function BidService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BidService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BidService, factory: BidService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BidService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
export class OrderService {
    http = inject(HttpClient);
    getMyOrders() {
        return this.http.get(`${api}/Order/mine`);
    }
    getAll() {
        return this.http.get(`${api}/Order`);
    }
    getById(id) {
        return this.http.get(`${api}/Order/${id}`);
    }
    create(data) {
        return this.http.post(`${api}/Order`, data);
    }
    update(id, status) {
        return this.http.put(`${api}/Order/${id}`, { status });
    }
    delete(id) {
        return this.http.delete(`${api}/Order/${id}`);
    }
    static ɵfac = function OrderService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrderService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
export class FavoriteService {
    http = inject(HttpClient);
    getMine() {
        return this.http.get(`${api}/Favorite/mine`);
    }
    add(artworkId) {
        return this.http.post(`${api}/Favorite/${artworkId}`, {});
    }
    remove(artworkId) {
        return this.http.delete(`${api}/Favorite/${artworkId}`);
    }
    static ɵfac = function FavoriteService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FavoriteService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FavoriteService, factory: FavoriteService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoriteService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
export class AuthService {
    http = inject(HttpClient);
    login(email, password) {
        return this.http.post(`${api}/Auth/login`, { email, password }).pipe(tap(res => {
            if (res?.token) {
                localStorage.setItem(TOKEN_KEY, res.token);
            }
        }));
    }
    register(data) {
        return this.http.post(`${api}/Auth/register`, data);
    }
    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(ROLE_KEY);
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    getRole() {
        const token = this.getToken();
        if (!token)
            return null;
        try {
            const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
            const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
                ?? payload['role'];
            if (role === 'Artist' ||
                role === 'Collector' ||
                role === 'Admin') {
                return role;
            }
            return null;
        }
        catch {
            return null;
        }
    }
    isLoggedIn() {
        return !!this.getToken();
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
