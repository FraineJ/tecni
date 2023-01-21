import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() currentData: any;
  apiLoaded: boolean = false;
  items!: MenuItem[];
  activeItem!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'GUÍA',},
      {label: 'MATERIAL DIDÁCTICO', },

    ];

    this.activeItem = this.items[0];
     if (!this.apiLoaded) {
       // This code loads the IFrame Player API code asynchronously, according to the instructions at
       // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
       const tag = document.createElement('script');
       tag.src = 'https://www.youtube.com/iframe_api';
       document.body.appendChild(tag);
       this.apiLoaded = true;
     }
  }

}
