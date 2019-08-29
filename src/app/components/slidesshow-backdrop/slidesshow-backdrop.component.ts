import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slidesshow-backdrop',
  templateUrl: './slidesshow-backdrop.component.html',
  styleUrls: ['./slidesshow-backdrop.component.scss'],
})
export class SlidesshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
