export class Tag {
    constructor(public name: string) { }
}

export class Project {
    constructor(public id: number, public name: string, public image: string, public tags: Tag[]) { }
    setStyles() {
        let styles = {
            'background-image': 'url(' + this.image + ')'
        }
        return styles;
    }
}

const PROJECTS = [
    new Project(1, 'Outdoor Paradise', 'images/outdoorparadise.png', [new Tag('school'), new Tag('java')]),
    new Project(2, 'Pacman', 'images/pacman.png', [new Tag('school'), new Tag('java')]),
    new Project(3, 'IntoSport', 'images/intosport.png', [new Tag('school'), new Tag('java')]),
    new Project(4, 'Drone Project', 'images/drone.png', [new Tag('school'), new Tag('java')]),
    new Project(5, 'Fullhouse', 'images/fullhouse.png', [new Tag('school'), new Tag('java')]),
    new Project(6, 'Orbit', 'images/orbit.png', [new Tag('school'), new Tag('java')]),
    new Project(7, 'Telchat', 'images/telchat.png', [new Tag('school'), new Tag('java')]),
    new Project(8, 'Bacchus', 'images/bacchus.png', [new Tag('school'), new Tag('java')]),
    new Project(9, 'Fitness App', 'images/fitness.png', [new Tag('school'), new Tag('java')]),
    new Project(10, 'Fresh', 'images/fresh.png', [new Tag('school'), new Tag('java')]),
    new Project(11, 'Steam API', 'images/steam.png', [new Tag('school'), new Tag('java')]),
    new Project(12, 'Matrix', 'images/matrix.png', [new Tag('school'), new Tag('java')])
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