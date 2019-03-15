import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmlTransactionDetailComponent } from './pml-transaction-detail.component';

describe('PmlTransactionDetailComponent', () => {
  let component: PmlTransactionDetailComponent;
  let fixture: ComponentFixture<PmlTransactionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmlTransactionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmlTransactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
