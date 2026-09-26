import { Component } from '@angular/core';
import { ExperiencesComponent } from './experiences-component/experiences-component'
import { AboutMeComponent } from './about-me-component/about-me-component'
import { FormationsComponent } from './formations-component/formations-component'
import { ContactComponent } from './contact-component/contact-component'

@Component({
  selector: 'app-home-page-component',
  imports: [ExperiencesComponent, FormationsComponent, AboutMeComponent, ContactComponent],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.scss',
})
export class HomePageComponent {}
