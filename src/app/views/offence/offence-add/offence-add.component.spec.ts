import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenceAddComponent } from './offence-add.component';

describe('OffenceAddComponent', () => {
  let component: OffenceAddComponent;
  let fixture: ComponentFixture<OffenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
