import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalaReverseComponent } from './mandala-reverse.component';

describe('MandalaReverseComponent', () => {
  let component: MandalaReverseComponent;
  let fixture: ComponentFixture<MandalaReverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandalaReverseComponent]
    });
    fixture = TestBed.createComponent(MandalaReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
