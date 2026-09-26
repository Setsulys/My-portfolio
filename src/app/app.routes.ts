import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page-component/home-page-component';
import { AboutMeComponent } from './features/home-page-component/about-me-component/about-me-component';
import { ProjectsComponent } from './features/home-page-component/projects-component/projects-component';
import { ContactComponent } from './features/home-page-component/contact-component/contact-component';
import { ExperiencesComponent } from './features/home-page-component/experiences-component/experiences-component';
import { FormationsComponent } from './features/home-page-component/formations-component/formations-component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'formation', component: FormationsComponent},
  { path: 'contact', component: ContactComponent },
];
