import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <router-outlet></router-outlet>
        <h1>Test</h1>
    `
})
export class ProjectListComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
