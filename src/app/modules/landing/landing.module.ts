import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLandingComponent } from './pages/layout-landing/layout-landing.component';
import { LandingComponentsModule } from './components/landing-components.module';
import { LandingRoutingModule } from './landing-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [LayoutLandingComponent, BlogComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LandingComponentsModule,
    LandingRoutingModule,
    PrimeNgModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LayoutLandingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class LandingModule { }
