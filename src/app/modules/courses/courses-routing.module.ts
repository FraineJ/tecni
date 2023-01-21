import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './pages/grade/grade.component';
import { InfoGradeComponent } from './pages/info-grade/info-grade.component';
import { LayoutCourseComponent } from './pages/layout-course/layout-course.component';

const routes: Routes = [

  {
    path: 'info',
    component: InfoGradeComponent,
    data: { title: 'Info del curso' },
  },
  {
    path: 'course',
    component: GradeComponent,
    data: { title: 'Curso' },
  },
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
