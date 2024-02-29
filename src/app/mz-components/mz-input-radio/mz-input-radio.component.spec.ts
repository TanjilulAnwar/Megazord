import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputRadioComponent } from './mz-input-radio.component';

describe('MzInputRadioComponent', () => {
  let component: MzInputRadioComponent;
  let fixture: ComponentFixture<MzInputRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputRadioComponent]
    });
    fixture = TestBed.createComponent(MzInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
