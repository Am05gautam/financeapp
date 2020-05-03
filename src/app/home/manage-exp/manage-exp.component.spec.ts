import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExpComponent } from './manage-exp.component';

describe('ManageExpComponent', () => {
  let component: ManageExpComponent;
  let fixture: ComponentFixture<ManageExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
