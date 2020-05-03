import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSummaryComponent } from './exp-summary.component';

describe('ExpSummaryComponent', () => {
  let component: ExpSummaryComponent;
  let fixture: ComponentFixture<ExpSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
