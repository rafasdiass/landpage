import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() contactClick = new EventEmitter();
  @Output() homeClick = new EventEmitter();
  @Output() aboutClick = new EventEmitter();
  @Output() servicesClick = new EventEmitter();

  constructor(private router: Router, private sanitizer: DomSanitizer ) { }

  onContactClick(): void {
    console.log('Contact clicked');
    this.contactClick.emit();
  }

  onHomeClick(): void {
    console.log('Home clicked');
    this.homeClick.emit();
  }

  onAboutClick(): void {
    console.log('About clicked');
    this.aboutClick.emit();
  }

  onServicesClick(): void {
    console.log('Services clicked');
    this.servicesClick.emit();
  }
  getLogoUrl() {
    const imagePath = 'src/assets/img/logo.png'; // Caminho da imagem relativo ao diretório de assets
    return this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }
  

}
