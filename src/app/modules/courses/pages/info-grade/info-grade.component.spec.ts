import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGradeComponent } from './info-grade.component';

describe('InfoGradeComponent', () => {
  let component: InfoGradeComponent;
  let fixture: ComponentFixture<InfoGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
