export class Project {
    constructor(public id: number, public name: string, public image: string, ...tags: any[]) { }
    setStyles() {
        let styles = {
            'opacity': 1,
            'background-image': 'url(' + this.image + ')'
        }
        return styles;
    }
}

const PROJECTS = [
    new Project(1, 'Outdoor Paradise', 'images/outdoorparadise.png', 'school', 'database'),
    new Project(2, 'Pacman', 'images/pacman.png', 'school', 'java'),
    new Project(3, 'IntoSport', 'images/intosport.png', 'school', 'C#'),
    new Project(4, 'Drone Project', 'images/drone.png', 'school', 'C++'),
    new Project(5, 'Fullhouse', 'images/fullhouse.png', 'school', 'java'),
    new Project(6, 'Orbit', 'images/orbit.png', 'reactjs', 'javascript'),
    new Project(7, 'Telchat', 'images/telchat.png', 'nodejs', 'javascript'),
    new Project(8, 'Bacchus', 'images/bacchus.png', 'school', 'java', 'spring'),
    new Project(9, 'Fitness App', 'images/fitness.png', 'nodejs', 'javascript'),
    new Project(10, 'Fresh', 'images/fresh.png', 'mean', 'javascript'),
    new Project(11, 'Steam API', 'images/steam.png', 'php', 'api'),
    new Project(12, 'Matrix', 'images/matrix.png', 'javascript', 'uml')
];

let projectsPromise = Promise.resolve(PROJECTS);

import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
    getProjects() { return projectsPromise; }
    getProject(id: number | string) {
        return projectsPromise
            .then(projects => projects.filter(p => p.id === +id)[0]);
    }
}