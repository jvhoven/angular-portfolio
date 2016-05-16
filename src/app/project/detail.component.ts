import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree, ROUTER_DIRECTIVES } from '@angular/router';
import { Project, ProjectService } from './project.service';

@Component({
  moduleId: module.id,
  styleUrls: ['./templates/detail.template.css'],
  templateUrl: './templates/detail.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ProjectDetailComponent implements OnActivate {
  public project: Project;
  private errorMessage : string;
  private curSegment: RouteSegment;
  constructor(
    private service: ProjectService,
    private router: Router
  ) {}

  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;

    let id = +curr.getParam('id');
    this.service.getProject(id)
      .subscribe(
        project => this.project = project, 
        error => this.errorMessage = <any>error
      );
  }
  
  gotoProjects() {
    let projectId = this.project ? this.project.id : null;
    this.router.navigate(['/', {id: projectId}]);
  }
}
