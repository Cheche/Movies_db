import { environment } from 'src/environments/environment';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private popularesPage = 0;

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string) {
    query = URL + query;

    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );
  }


  getFeatures() {
    const hoy = new  Date();
    const ultimoDia = new  Date( hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString: string;

    if (mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes.toString();
    }

    const ini = `${ hoy.getFullYear() }-${ mesString }-01`;
    const fin = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDia }`;

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ ini }&primary_release_date.lte=${ fin }`);
  }


  getPopular() {
    this.popularesPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>( query );
  }


  getPeliculaDetalle( id: string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActorePelicula( id: string ) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

}
