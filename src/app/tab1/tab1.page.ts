import { Pelicula } from './../interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];


  constructor( private moviesService: MoviesService) {}

  ngOnInit() {
    // Features
    this.moviesService.getFeatures()
        .subscribe( resp => {
          this.peliculasRecientes = resp.results;
        });

    // Popular
    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    // Popular
    this.moviesService.getPopular()
      .subscribe( resp => {
        const arrTemp = [...this.populares, ...resp.results]; // fix porque el pipe pares no es async
        this.populares = arrTemp;
      });
  }

}
