import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldiFlowerComponent } from './haldi-flower.component';

describe('HaldiFlowerComponent', () => {
  let component: HaldiFlowerComponent;
  let fixture: ComponentFixture<HaldiFlowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaldiFlowerComponent]
    });
    fixture = TestBed.createComponent(HaldiFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
