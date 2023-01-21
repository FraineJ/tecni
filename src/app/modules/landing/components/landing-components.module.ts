import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeaturesComponent } from './card-features/card-features.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { BannerCourseComponent } from './banner-course/banner-course.component';


@NgModule({
  declarations: [CardFeaturesComponent, FooterComponent, HeaderComponent, BannerCourseComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ],
  exports:[
    CardFeaturesComponent,
    FooterComponent,
    HeaderComponent,
    BannerCourseComponent,

  ]
})
export class LandingComponentsModule { }
