import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctFilterComponent } from './selct-filter.component';

describe('SelctFilterComponent', () => {
  let component: SelctFilterComponent;
  let fixture: ComponentFixture<SelctFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelctFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
