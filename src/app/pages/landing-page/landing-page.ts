import { Component } from '@angular/core';
import { Experiences } from './experiences/experiences'
import { Formations } from './formations/formations'

@Component({
  selector: 'app-landing-page',
  imports: [Experiences, Formations],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
