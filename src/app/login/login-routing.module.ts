import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const loginRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
