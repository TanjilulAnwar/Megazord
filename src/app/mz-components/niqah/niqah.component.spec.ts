import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiqahComponent } from './niqah.component';

describe('NiqahComponent', () => {
  let component: NiqahComponent;
  let fixture: ComponentFixture<NiqahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiqahComponent]
    });
    fixture = TestBed.createComponent(NiqahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
