import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'menu',
  template: `
  <div class="hamburger">
      <div class="container">
        <span class="logo">Jeffrey van Hoven</span>
        <a href="javascript:void(0)" (click)="toggleMenu()"><i class="fa fa-bars"></i></a>
      </div>
      <ul class="mobile-nav">
        <li><a (click)="toggleMenu()" [routerLink]="['/']">Portfolio</a></li>
        <li><a (click)="toggleMenu()" [routerLink]="['/about']">About me</a></li>
      </ul>
  </div>
  <aside>
      <div class="inner">
          <span class="logo">
              JEFFREY<br />
              <span class="small">
                  VAN<br />
              </span>
              HOVEN
          </span>
          <hr />
          <small>
              Developer<br />
              Computer Science Student
          </small>
          <ul>
              <li>
                  <a [routerLink]="['/']">Portfolio</a>
              </li>
              <li>
                  <a [routerLink]="['/about']">About me</a>
              </li>
          </ul>
      </div>
      <a class="github" href="https://github.com/jvhoven"><img src="images/github.png" alt="github" /> Check me on github</a>
      <span class="copyright">
          <small>&copy Jeffrey van Hoven. All rights reserved.</small>
      </span>
  </aside>`,
  directives: [ROUTER_DIRECTIVES]
})
export class AsideComponent {
  mobileMenu: any
  constructor() {
    this.mobileMenu = false;
  }

  toggleMenu(event) {
    let mobileNav = document.getElementsByClassName("mobile-nav")[0]
    if(!this.mobileMenu) {
      mobileNav.className += ' active';
      this.mobileMenu = true;
    } else {
      mobileNav.className = 'mobile-nav';
      this.mobileMenu = false;
    }
  }
}
