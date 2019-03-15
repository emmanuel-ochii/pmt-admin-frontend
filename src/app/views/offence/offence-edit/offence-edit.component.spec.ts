import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenceEditComponent } from './offence-edit.component';

describe('OffenceEditComponent', () => {
  let component: OffenceEditComponent;
  let fixture: ComponentFixture<OffenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
