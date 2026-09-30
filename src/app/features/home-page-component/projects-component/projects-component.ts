import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { load } from 'js-yaml';

export interface ProjectItem {
  title: string;
  context: string;
  status: string;
  date: string;
  image: string;
  technologies: string[];
  links: GitItem[];
  description: string[];
}

export interface GitItem{
  type: string;
  name: string;
  icon: string;
  color: string;
  url: string;
}

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
  private http = inject(HttpClient)
  projects$: Observable<ProjectItem[]>= this.http.get('assets/data/projects.yaml',{responseType:'text'})
  .pipe(
    map((rawText:string)=>load(rawText) as any[]),
    map((rawProjects: any[]) =>{
        return rawProjects.map((project: any) => ({
              ...project,
              description: project.description ?? [],
              links: (project.links ?? []).map((url: string) => this.getGitItem(url))
        })) as ProjectItem[]
      })
    );

  isOver(status: string): boolean{
    return status.toLowerCase() === 'terminé'
  }

  getProjectName(url:string):string{
    if(!url) return '';
    const parts = url.replace(/\$/,'').split('/');
    const name = parts[parts.length -1];
    return name.replace(/\.git$/,'');
  }


  getGitItem(url:string):GitItem{
    if(!url) return { type: '', name: '', icon:'',color:'', url: '' };
    const isGithub = url.includes('github.com');
    return {
      type: isGithub ? 'github' : 'gitlab',
      name: this.getProjectName(url),
      icon: isGithub? 'bi bi-github': 'bi bi-gitlab',
      color: isGithub? 'black': 'orange',
      url: url
      }
    }

}

