import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/landing-page/about/about';
import { Projects } from './pages/landing-page/projects/projects';
import { Contact } from './features/contact/contact';
import { Home } from './pages/landing-page/home/home';
import { Experiences } from './pages/landing-page/experiences/experiences';
import { Formations } from './pages/landing-page/formations/formations';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'home',component: Home},
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'experiences', component: Experiences},
  { path: 'formation', component: Formations},
  { path: 'contact', component: Contact },
];
