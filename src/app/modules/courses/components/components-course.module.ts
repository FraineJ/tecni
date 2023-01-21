import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { BannerCourseComponent } from './banner-course/banner-course.component';


@NgModule({
  declarations: [ VideoPlayerComponent, ListVideoComponent, BannerCourseComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    PrimeNgModule
  ],
  exports: [
    VideoPlayerComponent,
    ListVideoComponent,
    BannerCourseComponent
  ]
})
export class ComponentCourseModule { }
