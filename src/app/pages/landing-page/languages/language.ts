import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './language.html',
  styleUrls: ['./language.scss']
})

export class Language {
  images = [
    'assets/images/FR-flag.png',
    'assets/images/GB-flag.png',
    'assets/images/JP-flag.png',
    'assets/images/KH-flag.png',
  ];
}
