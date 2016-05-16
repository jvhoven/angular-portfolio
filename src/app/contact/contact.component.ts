import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

@Component({
    selector: 'app',
    template: `
        <h1>Hello contact!</h1>
    `
})
export class ContactComponent implements OnActivate {
    private currSegment: RouteSegment;
    constructor() {}

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
    }
}
