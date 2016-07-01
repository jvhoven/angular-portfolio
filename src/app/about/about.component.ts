import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    styleUrls: ['./templates/about.template.css'],
    templateUrl: './templates/about.template.html'
})
export class AboutComponent {
    constructor(private router: Router) {}

    goToProjects() {
      this.router.navigate(['/']);
    }
}
