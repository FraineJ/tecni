import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCourseComponent } from './pages/layout-course/layout-course.component';
import { CourseRoutingModule } from './courses-routing.module';
import { GradeComponent } from './pages/grade/grade.component';
import { ComponentCourseModule } from './components/components-course.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfoGradeComponent } from './pages/info-grade/info-grade.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { LandingComponentsModule } from '../landing/components/landing-components.module';


@NgModule({
  declarations: [
    LayoutCourseComponent,
    GradeComponent,
    InfoGradeComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ComponentCourseModule,
    ComponentsModule,
    PrimeNgModule,
    LandingComponentsModule


  ],
  exports: [
    LayoutCourseComponent,
    GradeComponent,
    InfoGradeComponent,

  ]
})
export class CoursesModule { }
