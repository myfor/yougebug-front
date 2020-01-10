import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './pages/page404.component';

const ROUTES: Routes = [
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then(mod => mod.QuestionsModule),
    data: { preload: true }
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'ask',
    loadChildren: () => import('./ask/ask.module').then(mod => mod.AskModule)
  },
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: '404', component: Page404Component, pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
