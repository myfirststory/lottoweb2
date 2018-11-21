import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyUserComponent } from './add-money-user.component';

describe('AddMoneyUserComponent', () => {
  let component: AddMoneyUserComponent;
  let fixture: ComponentFixture<AddMoneyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoneyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
