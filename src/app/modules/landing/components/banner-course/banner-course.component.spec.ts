import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCourseComponent } from './banner-course.component';

describe('BannerCourseComponent', () => {
  let component: BannerCourseComponent;
  let fixture: ComponentFixture<BannerCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
