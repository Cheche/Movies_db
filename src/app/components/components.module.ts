import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
  ],
  exports: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
