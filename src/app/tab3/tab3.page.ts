import { MoviesService } from './../services/movies.service';
import { DataLocalService } from './../services/data-local.service';
import { PeliculaDetalle, Genre } from './../interfaces/interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoGenero: any[] = []; // [{genero:'Acción', pelis: [{}, {}, {}]}, {genero:'Drama', pelis: [{}, {}, {}]}, {...} ]

  constructor( private dataLocalService: DataLocalService,
               private moviesServices: MoviesService ) {}


  async ionViewWillEnter() {
    this.peliculas = await this.dataLocalService.cargarFavoritos();
    this.generos = await this.moviesServices.cargarGeneros();
    this.pelisPorGenero( this.generos, this.peliculas );
  }

  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[] ) {
    // example
    // {
    //   genero:'Acción',
    //   pelis: []
    // }

    this.favoritoGenero = [];

    generos.forEach( genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
                                  return peli.genres.find( genre => genero.id === genre.id );
                                })
      });
    });
    console.log(this.favoritoGenero);
  }

}
