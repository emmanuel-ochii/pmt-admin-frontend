import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmlTransactionAddComponent } from './pml-transaction-add.component';

describe('PmlTransactionAddComponent', () => {
  let component: PmlTransactionAddComponent;
  let fixture: ComponentFixture<PmlTransactionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmlTransactionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmlTransactionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
