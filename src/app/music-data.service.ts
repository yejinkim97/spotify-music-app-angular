import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';

import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  private favouritesList: Array<any> = [];

  constructor(
    private spotifyToken: SpotifyTokenService,
    private http: HttpClient
  ) {}

  getNewReleases(): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          'https://api.spotify.com/v1/browse/new-releases',
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  getArtistById(id: string): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          `https://api.spotify.com/v1/artists/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
   
  }

  getAlbumsByArtistId(id: string): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
    // return this.http.get<any>(
    //   `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`
    // );
  }

  getAlbumById(id: string): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          `https://api.spotify.com/v1/albums/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
   // return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`);
  }

  searchArtists(searchString: string): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          `https://api.spotify.com/v1/search/?q=${searchString}&type=artist&limit=50`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
    // return this.http.get<any>(
    //   `https://api.spotify.com/v1/search/?q=${searchString}&type=artist&limit=50`
    // );
  }

  addToFavourites(id: string) {
    if (id == null || !id || this.favouritesList.length >= 50) {
      return false;
    }
    this.favouritesList.push(id);
    return true;
  }

  removeFromFavourites(id: string): Observable<any> {
    var i = this.favouritesList.indexOf(id);
    this.favouritesList.splice(i, 1);
    return this.getFavourites();
  }

  getFavourites(): Observable<any> {
    var arr = this.favouritesList.join();
    if (this.favouritesList.length > 0) {
      return this.spotifyToken.getBearerToken().pipe(
        mergeMap((token) => {
          return this.http.get<any>(
            `https://api.spotify.com/v1/tracks?ids=${arr}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
        })
      );
      //return this.http.get<any>(`https://api.spotify.com/v1/tracks?ids=${arr}`);
    } else if (this.favouritesList.length <= 0) {
      return new Observable((o) => {
        o.next([]);
      });
    }
  }
}
