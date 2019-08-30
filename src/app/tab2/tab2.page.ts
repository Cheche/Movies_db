import { DetalleComponent } from './../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  textoBuscar = '';
  peliculas: Pelicula[] = [];
  buscando = false;

  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella' ];

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController ) {}

  buscar( event ) {
    const search: string = event.detail.value;

    if (search.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;
    this.moviesService.buscarPeliculas(search)
        .subscribe( resp => {
          // tslint:disable-next-line: no-string-literal
          this.peliculas = resp['results'];
          this.buscando = false;
        });
  }

  async modalDetalles( id: string ) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id }
    });

    modal.present();
  }

}
