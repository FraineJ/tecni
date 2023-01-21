import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCourseComponent } from './layout-course.component';

describe('LayoutCourseComponent', () => {
  let component: LayoutCourseComponent;
  let fixture: ComponentFixture<LayoutCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
