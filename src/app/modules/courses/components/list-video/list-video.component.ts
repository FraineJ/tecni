import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListVideoComponent implements OnInit {

  @Input() data: any;
  @Output() currentItem = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }

  visitTo(data: any){
    console.log("data ", data);

    this.currentItem.emit(data);
  }
}
