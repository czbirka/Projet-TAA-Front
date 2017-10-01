import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConnectFormComponent } from './user-connect-form.component';

describe('UserConnectFormComponent', () => {
  let component: UserConnectFormComponent;
  let fixture: ComponentFixture<UserConnectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConnectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConnectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
