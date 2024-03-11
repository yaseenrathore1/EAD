import { Component ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  calculateSlidesPerView(): number {
    // Adjust the breakpoint values and corresponding slidesPerView values as needed
    if (window.innerWidth >= 1200) {
      return 3;
    } else if (window.innerWidth >= 992) {
      return 2;
    } else {
      return 1;
    }
  }

}
