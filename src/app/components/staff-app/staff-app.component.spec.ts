import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAppComponent } from './staff-app.component';

describe('StaffAppComponent', () => {
  let component: StaffAppComponent;
  let fixture: ComponentFixture<StaffAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffAppComponent]
    });
    fixture = TestBed.createComponent(StaffAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
