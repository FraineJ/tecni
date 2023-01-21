import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoGradeComponent } from '../courses/pages/info-grade/info-grade.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutLandingComponent } from './pages/layout-landing/layout-landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Inicio' },
      },
      {
        path: 'info',
        component: InfoGradeComponent,
        data: { title: 'Inicio' },
      },


    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  { path: '**', redirectTo: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
