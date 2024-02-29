import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputTextareaComponent } from './mz-input-textarea.component';

describe('MzInputTextareaComponent', () => {
  let component: MzInputTextareaComponent;
  let fixture: ComponentFixture<MzInputTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputTextareaComponent]
    });
    fixture = TestBed.createComponent(MzInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
