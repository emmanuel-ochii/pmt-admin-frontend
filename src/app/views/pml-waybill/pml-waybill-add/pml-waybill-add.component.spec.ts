import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmlWaybillAddComponent } from './pml-waybill-add.component';

describe('PmlWaybillAddComponent', () => {
  let component: PmlWaybillAddComponent;
  let fixture: ComponentFixture<PmlWaybillAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmlWaybillAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmlWaybillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
