import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmlWaybillEditComponent } from './pml-waybill-edit.component';

describe('PmlWaybillEditComponent', () => {
  let component: PmlWaybillEditComponent;
  let fixture: ComponentFixture<PmlWaybillEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmlWaybillEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmlWaybillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
