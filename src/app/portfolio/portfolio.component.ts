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
        
        { src: 'dinner.png',  alt: 'Dinner Delivery Image1' },
        { src: 'dinner2.png', alt: 'Dinner Delivery Image2' },
        { src: 'dinner3.png', alt: 'Dinner Delivery Image3' },
        { src: 'dinner4.png', alt: 'Dinner Delivery Image4' }
      ]
    },
    {
      name: 'Carrossel 2',
      images: [
        { src: 'barber.png',  alt: 'Barber Manager Image1' },
        { src: 'barber2.png', alt: 'Barber Manager Image2' },
        { src: 'barber3.png', alt: 'Barber Manager Image3' },
        { src: 'barber4.png', alt: 'Barber Manager Image4' },
      ]
    },
    {
      name: 'Carrossel 3',
       images: [
       { src: 'clinic.png',   alt: 'Clinic Manager Image1' },
       { src: 'clinic2.png',  alt: 'Clinic Manager Image2' },
       { src: 'clinic3.png',  alt: 'Clinic Manager Image3' }
      ]
    },
    {
      name: 'Carrossel 4',
       images: [
       { src: 'lr.png',   alt: 'LR Image1' },
       { src: 'lr2.png',  alt: 'LR Image2' },
       { src: 'lr3.png',  alt: 'LR Image3' },
       { src: 'lr4.png',  alt: 'LR Image3' },
      ]
    },
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
    document.addEventListener('click', this.closeCarousel);
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
    this.activeCarousel = this.carousels[0]; // Redefine o carrossel ativo para o primeiro do array
    this.activeIndex = 0; // Redefine o índice para 0
    document.removeEventListener('click', this.closeCarousel); // Remove o evento de click
  }

}
