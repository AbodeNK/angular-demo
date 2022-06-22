import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSttingComponent } from './user-stting.component';

describe('UserSttingComponent', () => {
  let component: UserSttingComponent;
  let fixture: ComponentFixture<UserSttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSttingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
