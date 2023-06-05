import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio.component';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    CarouselComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent]
})
export class PortfolioModule { }
