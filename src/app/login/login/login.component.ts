import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, LoginInfo } from '../../services/users/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Global } from '../../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLogging = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginSubmit() {
    this.isLogging = true;

    // tslint:disable-next-line: forin
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (this.loginForm.invalid) {
      return;
    }

    const loginInfo: LoginInfo = {
      account: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    this.userService.login(loginInfo).subscribe((resp) => {
      if (resp.isFault) {
        this.message.create('error', resp.message);
        this.isLogging = false;
        return;
      }
      Global.setCurrentUser(resp.data);
      location.href = '/';
    });

  }
}
