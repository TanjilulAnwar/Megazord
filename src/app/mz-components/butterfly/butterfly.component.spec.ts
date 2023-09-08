import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyComponent } from './butterfly.component';

describe('ButterflyComponent', () => {
  let component: ButterflyComponent;
  let fixture: ComponentFixture<ButterflyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButterflyComponent]
    });
    fixture = TestBed.createComponent(ButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
