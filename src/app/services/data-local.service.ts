import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController
             ) {

  this.cargarFavoritos();
  }

  guardarPelicula( pelicula: PeliculaDetalle ) {
    // prevent duplicated
    let exist = false;
    let msg = '';

    // this.peliculas.find()...
    for ( const p of this.peliculas ) {
      if ( p.id === pelicula.id ) {
        exist = true;
        break;
      }
    }

    if (exist) {
      this.peliculas = this.peliculas.filter( p => p.id !== pelicula.id);
      msg = 'Removido de favoritos';
    } else {
      this.peliculas.push( pelicula );
      msg = 'Agregada a favoritos';
    }

    this.presentToast( msg );
    this.storage.set('peliculas', this.peliculas);
    return !exist; // si existe la borro. si no existe la agrego.
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });

    toast.present();
  }


  // retorno una promesa
  // notar que si 'peliculas' no existe retorna null...
  // entonces fuerzo un []
  async cargarFavoritos() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id ) {
    id = Number(id); // transform to number

    await this.cargarFavoritos(); // espero a que cargue async
    const exist = this.peliculas.find(p => p.id === id ); // retorna objeto
    return (exist) ? true : false; // operador Ternario
  }

}
