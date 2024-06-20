import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputSelectComponent } from './mz-input-select.component';

describe('MzInputSelectComponent', () => {
  let component: MzInputSelectComponent;
  let fixture: ComponentFixture<MzInputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputSelectComponent]
    });
    fixture = TestBed.createComponent(MzInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
