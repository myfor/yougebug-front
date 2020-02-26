import { Component, OnInit } from '@angular/core';
import { Startup } from './startup';
import { Global } from './global';
import { Router } from '@angular/router';
import { UserService } from './services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged = Global.isLogged();
  avatar = '';
  contentHeight = window.innerHeight + 'px';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    new Startup().run();
    if (this.isLogged) {
      const info = Global.getCurrentUser();
      this.avatar = info.avatar;
    }
  }

  search(value: string) {
    if (!value.trim()) {
      return;
    }
    this.router.navigate(['/questions', { s: value }]);
  }

  logout() {
    // this.userService.logout().subscribe(() => {
    Global.clearCurrentUser();
    location.reload();
    // });
  }
}
