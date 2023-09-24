import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalimaComponent } from './walima.component';

describe('WalimaComponent', () => {
  let component: WalimaComponent;
  let fixture: ComponentFixture<WalimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalimaComponent]
    });
    fixture = TestBed.createComponent(WalimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
