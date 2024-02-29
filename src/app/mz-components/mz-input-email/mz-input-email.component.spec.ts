import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzInputEmailComponent } from './mz-input-email.component';

describe('MzInputEmailComponent', () => {
  let component: MzInputEmailComponent;
  let fixture: ComponentFixture<MzInputEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzInputEmailComponent]
    });
    fixture = TestBed.createComponent(MzInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
