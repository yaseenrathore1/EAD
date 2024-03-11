import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {



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
