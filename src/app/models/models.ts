export type UserRole = 'Artist' | 'Collector' | 'Admin';
export type SaleType = 'Fixed' | 'Auction';
export type ArtworkStatus = 'Available' | 'InAuction' | 'Sold';
export type OrderType = 'DirectBuy' | 'AuctionWin';
export type OrderStatus = 'Pending' | 'Completed' | 'Cancelled';

export interface User {
  id: number;
  fullName: string;
  email: string;
  passwordHash?: string;
  bio: string;
  profileImageUrl: string;
  role: UserRole;
}

export interface Gallery {
  id: number;
  title: string;
  story: string;
  coverImageUrl: string;
  createdAt: string;
  artistId: number;
  artistName?: string;
  artworksCount?: number;
}

export interface Artwork {
  id: number;
  title: string;
  story: string;
  year: number;
  medium: string;
  dimensions: string;
  imageUrl: string;
  saleType: SaleType;
  fixedPrice?: number;
  startingPrice?: number;
  currentPrice?: number;
  auctionEndTime?: string;
  status: ArtworkStatus;
  galleryId: number;
  galleryTitle?: string;
  artistId: number;
  artistName: string;
  currentHighestBidder?: string;
  currentHighestBidderId?: number;
}

export interface Bid {
  id: number;
  amount: number;
  createdAt: string;
  artworkId: number;
  bidderId: number;
  bidderName: string;
}

export interface Order {
  id: number;
  finalPrice: number;
  orderType: OrderType;
  status: OrderStatus;
  createdAt: string;
  artworkId: number;
  artworkTitle: string;
  buyerId: number;
  buyerName?: string;
}

export interface Favorite {
  id: number;
  createdAt: string;
  userId: number;
  artworkId: number;
  note?: string;
  artwork?: Artwork;
}