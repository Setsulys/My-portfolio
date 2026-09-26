import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { load } from 'js-yaml';

interface SocialNetwork{
  logo:string;
  link:string;
  }

export interface ContactItem{
  github:SocialNetwork;
  linkedin:SocialNetwork;
  mail:SocialNetwork;
  }

@Component({
  selector: 'app-contact-component',
  imports: [CommonModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  private http = inject(HttpClient)
  contacts$: Observable<ContactItem>= this.http.get('assets/data/contact.yaml',{responseType:'text'})
  .pipe(
    map((rawText:string)=>load(rawText) as ContactItem)
    );
  }
