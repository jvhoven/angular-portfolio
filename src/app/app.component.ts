import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ProjectListComponent } from './project/list.component';
import { ProjectDetailComponent } from './project/detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ProjectService } from './project/project.service';

@Component({
  moduleId: module.id,
  selector: 'main',
  template: `<router-outlet></router-outlet>`,
  providers: [ProjectService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/projects',  component: ProjectListComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/projects:id', component: ProjectDetailComponent }
])
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
      this.router.navigate(['/projects']);
  }

}
