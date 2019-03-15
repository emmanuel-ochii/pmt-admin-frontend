import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmlWaybillDetailComponent } from './pml-waybill-detail.component';

describe('PmlWaybillDetailComponent', () => {
  let component: PmlWaybillDetailComponent;
  let fixture: ComponentFixture<PmlWaybillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmlWaybillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmlWaybillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
