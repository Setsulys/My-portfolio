import { Component } from '@angular/core';
import { Language } from './languages/language';

@Component({
  selector: 'app-landing-page',
  imports: [Language],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
