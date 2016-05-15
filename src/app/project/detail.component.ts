import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { Project, ProjectService } from './project.service';

@Component({
  moduleId: module.id,
  styleUrls: ['./templates/detail.template.css'],
  templateUrl: './templates/detail.template.html'
})
export class ProjectDetailComponent implements OnActivate {
  project: Project;
  private curSegment: RouteSegment;
  constructor(
    private service: ProjectService,
    private router: Router
  ) {}

  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;

    let id = +curr.getParam('id');
    this.service.getProject(id).then(project => {
      if (project) {
        this.project = project;
      }
    });
  }
  
  gotoProjects() {
    let projectId = this.project ? this.project.id : null;
    this.router.navigate(['/', {id: projectId}]);
  }
}
