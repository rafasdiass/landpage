import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() contactClick = new EventEmitter();
  @Output() homeClick = new EventEmitter();

  constructor(private router: Router) { }

  onContactClick(): void {
    console.log('Contact clicked');
    this.contactClick.emit();
  }

  onHomeClick(): void {
    console.log('Home clicked');
    this.homeClick.emit();
  }
}
