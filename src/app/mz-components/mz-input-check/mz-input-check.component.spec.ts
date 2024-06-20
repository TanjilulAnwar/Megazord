import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputCheckComponent } from './mz-input-check.component';

describe('MzInputCheckComponent', () => {
  let component: MzInputCheckComponent;
  let fixture: ComponentFixture<MzInputCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputCheckComponent]
    });
    fixture = TestBed.createComponent(MzInputCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
