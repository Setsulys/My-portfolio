import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private http = inject(HttpClient);
  profile$: Observable<DeveloperProfile> = this.http.get('assets/data/profile.yaml', { responseType: 'text' })
    .pipe(
      map((rawText: string) => load(rawText) as DeveloperProfile)
    );
}
