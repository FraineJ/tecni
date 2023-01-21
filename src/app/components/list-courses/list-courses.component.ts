import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  value: number = 23;
  ngOnInit(): void {
  }

  toCourse(){
    this.router.navigate(['/info']);
  }
}
