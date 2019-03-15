import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmlTransactionEditComponent } from './pml-transaction-edit.component';

describe('PmlTransactionEditComponent', () => {
  let component: PmlTransactionEditComponent;
  let fixture: ComponentFixture<PmlTransactionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmlTransactionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmlTransactionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
