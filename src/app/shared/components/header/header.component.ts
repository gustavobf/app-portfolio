import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES, SCROLL_TIMES } from '../../../core/constants';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  routes = ROUTES;

  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId, SCROLL_TIMES.DEFAULT)
  }

}
