import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY > 0;
  }
}
