import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('contactSection', { static: true, read: ElementRef }) contactSection!: ElementRef;
  @ViewChild('homeSection', { static: true, read: ElementRef }) homeSection!: ElementRef;
  @ViewChild('aboutSection', { static: true, read: ElementRef }) aboutSection!: ElementRef;
  @ViewChild('servicesWorkSection', { static: true, read: ElementRef }) servicesWorkSection!: ElementRef;
  @ViewChild('portfolioWorkSection', { static: true, read: ElementRef }) portfolioWorkSection!: ElementRef;

  
  constructor() { }

  ngOnInit(): void { }

  scrollToContact(): void {
    console.log('Scrolling to contact');
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToHome(): void {
    console.log('Scrolling to home');
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout(): void {
    console.log('Scrolling to about');
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServicesWork(): void {
    console.log('Scrolling to services work');
    this.servicesWorkSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPortfolio(): void {
    console.log('Scrolling to services work');
    this.portfolioWorkSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
