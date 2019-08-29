import { Pelicula } from 'src/app/interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.5,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
