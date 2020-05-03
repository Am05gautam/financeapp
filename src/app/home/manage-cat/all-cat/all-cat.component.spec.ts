import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatComponent } from './all-cat.component';

describe('AllCatComponent', () => {
  let component: AllCatComponent;
  let fixture: ComponentFixture<AllCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
