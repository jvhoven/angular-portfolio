import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    templateUrl: './templates/list.template.html'
})
export class ProjectListComponent implements OnInit, OnDestroy {
    projects: Project[];
    private selectedId: number;
    private errorMessage: string;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private service: ProjectService,
        private router: Router
    ) {}

    isSelected(project: Project) { return project.id === this.selectedId; }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        let id = +params['id']
        this.service.getProjects().subscribe(projects => this.projects = projects, error => this.errorMessage = <any>error);
      })
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    onSelect(project: Project) {
        //console.log(project.id);
        this.router.navigate(['/project', project.id]);
    }
}
