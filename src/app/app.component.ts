import { Component, OnInit } from '@angular/core';
import { Startup } from './startup';
import { Global } from './global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged = Global.isLogged();
  contentHeight = window.innerHeight + 'px';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    new Startup().run();
  }

  search(value: string) {
    if (!value.trim()) {
      return;
    }
    this.router.navigate(['/questions', { s: value }]);
  }
}
