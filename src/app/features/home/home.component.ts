import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { environment } from '../../../environments/environment.prod';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RevealDirective, FontAwesomeModule, FormsModule],
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  linkedinUrl = environment.linkedinUrl;
  myEmail = environment.myEmail;

  userEmail: string = '';

  sendEmail() {
    if (!this.userEmail) {
      alert('Please enter a valid email.');
      return;
    }

    const subject = encodeURIComponent('Portfolio');
    const body = encodeURIComponent(
      `Hello,\n\nI am reaching out regarding your portfolio. I would like to get in touch and discuss potential opportunities or collaborations.\n\nBest regards,`
    );

    window.location.href = `mailto:${this.myEmail}?subject=${subject}&body=${body}&cc=${this.userEmail}`;

  }

}
