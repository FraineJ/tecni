import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCourseComponent } from './modules/courses/pages/layout-course/layout-course.component';
import { LayoutLandingComponent } from './modules/landing/pages/layout-landing/layout-landing.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLandingComponent,
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'cursos',
    component: LayoutCourseComponent,
    loadChildren: () => import('./modules/courses/courses.module').then((m) => m.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
