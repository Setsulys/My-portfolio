import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // <-- L'import manquant est ici
import { load } from 'js-yaml';


interface DeveloperProfile {
  name: string;
  title: string;
  location: string;
  experienceYears: number;
  skills: string[];
  hobbies: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})

export class About implements OnInit {
  // Correction ici : pas de '!' quand on initialise directement avec inject()
  private http = inject(HttpClient);

  profile?: DeveloperProfile;

  ngOnInit(): void {
    this.http.get('assets/data/profile.yaml', { responseType: 'text' })
      .subscribe({
        next: (rawText: string) => {
          try {
            this.profile = load(rawText) as DeveloperProfile;
          } catch (yamlError) {
            console.error('Échec du parsing YAML :', yamlError);
          }
        },
        error: (httpError: HttpErrorResponse) => {
          console.error('Erreur HTTP brute :', httpError);
        }
      });
  }
}
