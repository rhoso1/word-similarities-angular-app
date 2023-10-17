import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  socialLinks = {
    linkedin: 'https://www.linkedin.com/in/ramiza-ho',
    instagram: 'https://www.instagram.com/ramizahoso/',
  };
}
