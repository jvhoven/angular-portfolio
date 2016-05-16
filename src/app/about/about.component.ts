import { Component, OnInit } from '@angular/core';
import { OnActivate, RouteSegment, RouteTree } from '@angular/router';

@Component({
    selector: 'app',
    template: `
        <h1>Hello about!</h1>
    `
})
export class AboutComponent implements OnActivate {
    private currSegment: RouteSegment;
    constructor() {}

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
    }
}
