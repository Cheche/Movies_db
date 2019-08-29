import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { IonicModule } from '@ionic/angular';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent
  ],
  exports: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
