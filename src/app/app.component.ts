import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('contactSection', { static: true, read: ElementRef }) contactSection!: ElementRef;
  @ViewChild('homeSection', { static: true, read: ElementRef }) homeSection!: ElementRef;

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
}
