import { Component, OnInit } from '@angular/core';
import { Redirect } from '../shared/redirect-to/redirect';

@Component({
  selector: 'app-root',
  template: `
    <h1>404</h1>
  `,
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  constructor(
    private redirect: Redirect
  ) {}

    ngOnInit() {
      this.redirect.redirectTo();
    }
}
