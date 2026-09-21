import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { load } from 'js-yaml';

export interface ExperienceItem {
  title: string;
  status: string;
  date: string;
  image: string;
  technologies: string[];
  description: string[];
}
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss']
})

export class Experiences {
  private http = inject(HttpClient)
  experiences$: Observable<ExperienceItem[]>= this.http.get('assets/data/experiences.yaml',{responseType:'text'})
  .pipe(
    map((rawText:string)=>load(rawText) as ExperienceItem[])
    );
}
