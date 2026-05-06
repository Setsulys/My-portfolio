import { Component } from '@angular/core';
import { Languages } from './languages/languages';
import { Experiences } from './experiences/experiences'

@Component({
  selector: 'app-landing-page',
  imports: [Languages, Experiences],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
