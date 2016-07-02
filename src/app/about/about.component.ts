import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    styleUrls: ['./templates/about.template.css'],
    templateUrl: './templates/about.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent { }
