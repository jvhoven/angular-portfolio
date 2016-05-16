import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { Project, ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    templateUrl: './templates/list.template.html'
})
export class ProjectListComponent implements OnActivate {
    projects: Project[];
    private currSegment: RouteSegment;
    private selectedId: number;
    private errorMessage: string;    
    
    constructor(
        private service: ProjectService,
        private router: Router
    ) {}
    
    isSelected(project: Project) { return project.id === this.selectedId; }
    
    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        this.service.getProjects().subscribe(projects => this.projects = projects, error => this.errorMessage = <any>error);
    }
    
    onSelect(project: Project) {
        //console.log(project.id);
        this.router.navigate(['/project', project.id]);
    }
}
