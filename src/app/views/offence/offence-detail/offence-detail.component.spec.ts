import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenceDetailComponent } from './offence-detail.component';

describe('OffenceDetailComponent', () => {
  let component: OffenceDetailComponent;
  let fixture: ComponentFixture<OffenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
