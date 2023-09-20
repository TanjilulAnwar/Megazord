import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairyLightsComponent } from './fairy-lights.component';

describe('FairyLightsComponent', () => {
  let component: FairyLightsComponent;
  let fixture: ComponentFixture<FairyLightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FairyLightsComponent]
    });
    fixture = TestBed.createComponent(FairyLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
