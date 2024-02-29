import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputButtonComponent } from './mz-input-button.component';

describe('MzInputButtonComponent', () => {
  let component: MzInputButtonComponent;
  let fixture: ComponentFixture<MzInputButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputButtonComponent]
    });
    fixture = TestBed.createComponent(MzInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
