import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

export class Project {
    constructor(public id: number, public name: string, public description: string, public image: string, public client: string, public date: string, public tags: string) { }
}

@Injectable()
export class ProjectService {
    constructor(private http: Http) {}
    
    _data;
    
    private projectsUrl = 'http://api.jeffreyvanhoven.nl/getProjects';
    private projectUrl = 'http://api.jeffreyvanhoven.nl/getProject/';
    
    get data() {
        return this._data;
    }
    
    getProjects() : Observable<Project[]> { 
        return this.http.get(this.projectsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getProject(id: number | string) : Observable<Project> {
        return this.http.get(this.projectUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        if(res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }
    
    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}