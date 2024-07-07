import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzTableComponent } from './mz-table.component';

describe('MzTableComponent', () => {
  let component: MzTableComponent;
  let fixture: ComponentFixture<MzTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzTableComponent]
    });
    fixture = TestBed.createComponent(MzTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
