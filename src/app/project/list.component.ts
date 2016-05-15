import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { Project, ProjectService } from './project.service';

@Component({
    selector: 'app',
    template: `
        <div class="project" *ngFor="let project of projects"
            [class.selected]="isSelected(project)"
            (click)="onSelect(project)"
            [ngStyle]="project.setStyles()">
            <h2 class="title">{{project.name}}</h2>
        </div>
    `
})
export class ProjectListComponent implements OnActivate {
    projects: Project[];
    private currSegment: RouteSegment;
    private selectedId: number;    
    
    constructor(
        private service: ProjectService,
        private router: Router
    ) {}
    
    isSelected(project: Project) { return project.id === this.selectedId; }
    
    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        this.service.getProjects().then(projects => this.projects = projects);
    }
    
    onSelect(project: Project) {
        //console.log(project.id);
        this.router.navigate(['/project', project.id]);
    }
}
