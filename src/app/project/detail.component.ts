import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectService } from './project.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  styleUrls: ['./templates/detail.template.css'],
  templateUrl: './templates/detail.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  public project: Project;
  private errorMessage : string;
  private sub : any;
  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getProject(id)
      .subscribe(
        project => this.project = project,
        error => this.errorMessage = <any>error
      );
    });
  }

  goToProjects() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
