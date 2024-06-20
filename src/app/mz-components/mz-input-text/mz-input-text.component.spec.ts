import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputTextComponent } from './mz-input-text.component';

describe('MzInputTextComponent', () => {
  let component: MzInputTextComponent;
  let fixture: ComponentFixture<MzInputTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputTextComponent]
    });
    fixture = TestBed.createComponent(MzInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
