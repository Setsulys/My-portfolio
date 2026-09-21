import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { load } from 'js-yaml';

export interface FormationItem{
  school: string;
  type: string;
  image: string;
  location: string;
  date: string;
  diploma: string;
  description: string[];
}

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './formations.html',
  styleUrls: ['./formations.scss']
})

export class Formations {
  private http = inject(HttpClient)
  formations$: Observable<FormationItem[]>= this.http.get('assets/data/formations.yaml',{responseType:'text'})
  .pipe(
    map((rawText:string)=>load(rawText) as FormationItem[])
    );
}
