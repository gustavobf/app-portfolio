import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ScrollService } from '../../../core/services/scroll.service';
import { SCROLL_TIMES } from '../../../core/constants';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  linkedinUrl = environment.linkedinUrl;

  constructor(private scrollService: ScrollService) { }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId, SCROLL_TIMES.DEFAULT)
  }

}
