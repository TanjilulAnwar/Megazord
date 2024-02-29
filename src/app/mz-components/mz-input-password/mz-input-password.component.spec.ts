import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputPasswordComponent } from './mz-input-password.component';

describe('MzInputPasswordComponent', () => {
  let component: MzInputPasswordComponent;
  let fixture: ComponentFixture<MzInputPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputPasswordComponent]
    });
    fixture = TestBed.createComponent(MzInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
