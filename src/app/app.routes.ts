import { Routes } from '@angular/router';
import { Home } from './pages/landing-page/home/home';
import { About } from './pages/landing-page/about/about';
import { Projects } from './pages/landing-page/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
];
