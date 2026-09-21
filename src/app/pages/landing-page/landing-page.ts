import { Component } from '@angular/core';
import { Experiences } from './experiences/experiences'
import { About } from './about/about'
import { Formations } from './formations/formations'
import { Contact } from './../../features/contact/contact'
import { Home } from './home/home'

@Component({
  selector: 'app-landing-page',
  imports: [Experiences, Formations, About, Contact, Home],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
