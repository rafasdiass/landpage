import { Component } from '@angular/core';

interface Carousel {
  name: string;
  images: { src: string; alt: string; }[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  carousels: Carousel[] = [
    {
      name: 'Carrossel 1',
      images: [
        { src: 'dinner.png', alt: 'Dinner Delivery Image' },
        { src: 'dinner2.png', alt: 'Dinner Delivery Image2' },
        { src: 'dinner3.png', alt: 'Dinner Delivery Image3' },
        { src: 'dinner4.png', alt: 'Dinner Delivery Image4' }
      ]
    },
    {
      name: 'Carrossel 2',
      images: [
        { src: 'barber.png', alt: 'Barber Manager Image' },
        { src: 'barber2.png', alt: 'Barber Manager Image2' },
        { src: 'barber3.png', alt: 'Barber Manager Image3' }
      ]
    },
    {
      name: 'Carrossel 3',
       images: [
       { src: 'barber.png', alt: 'Dinner Delivery Image' },
       { src: 'barber2.png', alt: 'Barber Manager Image' },
       { src: 'barber3.png', alt: 'Clinic Manager Image' }
      ]
    }
  ];

  showCarousel = false;
  activeIndex = 0;
  activeCarousel: Carousel | undefined;
  activeCarouselImages: { src: string; alt: string; }[] = [];


  constructor() {
    this.activeCarousel = this.carousels[0]; // Definir o primeiro carrossel como ativo
  }

  expandCarousel(carousel: Carousel, image: { src: string; alt: string; }) {
    this.activeCarousel = carousel;
    this.activeCarouselImages = this.getActiveCarouselImages();
    this.activeIndex = this.activeCarouselImages.findIndex(img => img.src === image.src); // Definir o índice da imagem clicada
    this.showCarousel = true; // Definir como true para exibir o carrossel
  }
  
  
  
  
  getActiveCarouselImages() {
    return this.activeCarousel ? this.activeCarousel.images : [];
  }

  previousImage() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  nextImage() {
    if (this.activeIndex < this.getActiveCarouselImages().length - 1) {
      this.activeIndex++;
    }
  }

  closeCarousel() {
    this.showCarousel = false;
  }
}
