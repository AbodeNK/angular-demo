import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctInputComponent } from './selct-input.component';

describe('SelctInputComponent', () => {
  let component: SelctInputComponent;
  let fixture: ComponentFixture<SelctInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelctInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
