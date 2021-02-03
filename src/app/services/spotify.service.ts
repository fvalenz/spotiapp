import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Aplicacion de prueba - Spotify.Service');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCYTP-cP-ltnYvgRgPNb7WM8E2EdNu4fiDzXD8-VeXCjQiJChqa2Kog4DP6OnPBv1kZQGAybcvSGgaVHWs'
    });

    return this.http.get(url, {headers})
  }

  // Funcion que devuelve el todo el data en home.
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map((data: any)=> data.albums.items));
    // .pipe(map((data: any)=>{
    //   return data.albums.items;
    // }))
  }

  // Funcion que devuelve Artistas.
  getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe(map((data: any)=> data.artists.items));
    // .pipe(map((data: any)=>{
    //   return data.artists.items;
    // }))
  }

}
