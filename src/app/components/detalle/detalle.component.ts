import { DataLocalService } from './../../services/data-local.service';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle, Cast } from './../../interfaces/interfaces';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  Pelicula: PeliculaDetalle;
  oculto: 150;
  estrella = 'star-outline';

  Actores: Cast[] = [];

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  constructor( private movieService: MoviesService,
               private modalCtrl: ModalController,
               private dataLocalService: DataLocalService ) { }


  // async ngOnInit() {
  ngOnInit() {
    this.oculto = 150;

    // existe pelicula es asyncrono, asi q el metodo debe ser async para esperarlo
    // o lo trabajo como una promesa normal
    // const exist = await this.dataLocalService.existePelicula(this.id);
    this.dataLocalService.existePelicula(this.id).then(
      existe => {
       this.estrella = (existe) ? 'star' : 'star-outline';
    });

    this.movieService.getPeliculaDetalle(this.id)
        .subscribe( resp => {
          // console.log('Detalle', resp);
          this.Pelicula = resp;
        });

    this.movieService.getActorePelicula(this.id)
        .subscribe( resp => {
          // console.log('Actores', resp);
          this.Actores = resp.cast;
        });
  }


  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const exist = this.dataLocalService.guardarPelicula( this.Pelicula );
    this.estrella = (exist) ? 'star' : 'star-outline';
  }

}
