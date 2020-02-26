import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService, RegisterInfo } from '../../services/users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerSubmit() {
    // tslint:disable-next-line: forin
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
    if (this.registerForm.invalid) {
      return;
    }

    const register: RegisterInfo = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };

    if (register.password !== this.registerForm.get('confirm').value) {
      alert('两次密码不一致，请重新确认');
      return;
    }

    this.userService.register(register)
    .subscribe((resp) => {
      if (resp.isFault) {
        this.message.create('error', resp.message);
        return;
      }
      this.router.navigate(['/']);
    });
  }
}
