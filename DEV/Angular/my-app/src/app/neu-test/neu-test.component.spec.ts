import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuTestComponent } from './neu-test.component';

describe('NeuTestComponent', () => {
  let component: NeuTestComponent;
  let fixture: ComponentFixture<NeuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
