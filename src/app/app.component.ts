import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ProjectService } from './project/project.service';
import { AsideComponent } from './elements/aside.component'

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
    <menu></menu>
    <router-outlet></router-outlet>
  `,
  providers: [ProjectService],
  directives: [AsideComponent, ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
      //this.router.navigate(['/']);
  }

}
