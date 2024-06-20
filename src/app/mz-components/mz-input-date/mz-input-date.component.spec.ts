import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputDateComponent } from './mz-input-date.component';

describe('MzInputDateComponent', () => {
  let component: MzInputDateComponent;
  let fixture: ComponentFixture<MzInputDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputDateComponent]
    });
    fixture = TestBed.createComponent(MzInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
