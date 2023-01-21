import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSectionBannerComponent } from './principal-section-banner.component';

describe('PrincipalSectionBannerComponent', () => {
  let component: PrincipalSectionBannerComponent;
  let fixture: ComponentFixture<PrincipalSectionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalSectionBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
