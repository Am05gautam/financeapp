import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpComponent } from './all-exp.component';

describe('AllExpComponent', () => {
  let component: AllExpComponent;
  let fixture: ComponentFixture<AllExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
