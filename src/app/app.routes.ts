import { provideRouter, RouterConfig } from '@angular/router';
import { ProjectListComponent } from './project/list.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { ProjectDetailComponent } from './project/detail.component'

export const routes: RouterConfig = [
  { path: '',  component: ProjectListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
