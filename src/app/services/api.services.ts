
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {
  Artwork,
  Bid,
  Favorite,
  Gallery,
  Order,
  User,
  UserRole
} from '../models/models';
import { environment } from '../../environments';

const api = environment.apiBaseUrl;
const TOKEN_KEY = 'artvista_token';
const ROLE_KEY = 'artvista_role';

export interface AuthResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${api}/User`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${api}/User/${id}`);
  }

  update(id: number, data: Partial<User>): Observable<void> {
    return this.http.put<void>(`${api}/User/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${api}/User/${id}`);
  }
  getMe(): Observable<User> {
    return this.http.get<User>(`${api}/User/me`);
  }
}

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private http = inject(HttpClient);

  getAll(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${api}/Galleries`);
  }

  getById(id: number): Observable<Gallery> {
    return this.http.get<Gallery>(`${api}/Galleries/${id}`);
  }

  getMine(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/Galleries/mine`);
  }

  create(data: Partial<Gallery>): Observable<Gallery> {
    return this.http.post<Gallery>(`${api}/Galleries`, data);
  }

  update(id: number, data: Partial<Gallery>): Observable<Gallery> {
    return this.http.put<Gallery>(`${api}/Galleries/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${api}/Galleries/${id}`);
  }
}

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  private http = inject(HttpClient);

  getAll(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${api}/Artworks`);
  }

  getById(id: number): Observable<Artwork> {
    return this.http.get<Artwork>(`${api}/Artworks/${id}`);
  }

  getMine(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${api}/Artworks/mine`);
  }

  uploadImage(file: File): Observable<{ imageUrl: string }> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ imageUrl: string }>(`${api}/Artworks/upload-image`, form);
  }

  create(data: Partial<Artwork>): Observable<Artwork> {
    return this.http.post<Artwork>(`${api}/Artworks`, data);
  }

  update(id: number, data: Partial<Artwork>): Observable<Artwork> {
    return this.http.put<Artwork>(`${api}/Artworks/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${api}/Artworks/${id}`);
  }
}

@Injectable({ providedIn: 'root' })
export class BidService {
  private http = inject(HttpClient);

  getByArtwork(id: number): Observable<Bid[]> {
    return this.http.get<Bid[]>(`${api}/Bid/artwork/${id}`);
  }

  create(data: Partial<Bid>): Observable<Bid> {
    return this.http.post<Bid>(`${api}/Bid`, data);
  }
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private http = inject(HttpClient);

  getMyOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${api}/Order/mine`);
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${api}/Order`);
  }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${api}/Order/${id}`);
  }

  create(data: Partial<Order>): Observable<Order> {
    return this.http.post<Order>(`${api}/Order`, data);
  }

  update(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${api}/Order/${id}`, { status });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${api}/Order/${id}`);
  }
}

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private http = inject(HttpClient);

  getMine(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${api}/Favorite/mine`);
  }

  add(artworkId: number): Observable<Favorite> {
    return this.http.post<Favorite>(`${api}/Favorite/${artworkId}`, {});
  }

  remove(artworkId: number): Observable<void> {
    return this.http.delete<void>(`${api}/Favorite/${artworkId}`);
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${api}/Auth/login`,
      { email, password }
    ).pipe(
      tap(res => {
        if (res?.token) {
          localStorage.setItem(TOKEN_KEY, res.token);
        }
      })
    );
  }

  register(data: unknown): Observable<unknown> {
    return this.http.post(`${api}/Auth/register`, data);
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  getRole(): UserRole | null {
    const token = this.getToken();

    if (!token) return null;

    try {
      const payload = JSON.parse(
        atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
      );

      const role =
        payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        ?? payload['role'];

      if (
        role === 'Artist' ||
        role === 'Collector' ||
        role === 'Admin'
      ) {
        return role;
      }

      return null;
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
