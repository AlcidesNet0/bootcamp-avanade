import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesMonthComponent } from './schedules-month.component';

describe('SchedulesMonthComponent', () => {
  let component: SchedulesMonthComponent;
  let fixture: ComponentFixture<SchedulesMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulesMonthComponent]
    });
    fixture = TestBed.createComponent(SchedulesMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
