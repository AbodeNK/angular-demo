import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebassTestComponent } from './firebass-test.component';

describe('FirebassTestComponent', () => {
  let component: FirebassTestComponent;
  let fixture: ComponentFixture<FirebassTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebassTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
