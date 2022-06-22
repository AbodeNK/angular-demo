import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseManageOrderComponent } from './use-manage-order.component';

describe('UseManageOrderComponent', () => {
  let component: UseManageOrderComponent;
  let fixture: ComponentFixture<UseManageOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseManageOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseManageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
