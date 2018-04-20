import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExptsComponent } from './expts.component';

describe('ExptsComponent', () => {
  let component: ExptsComponent;
  let fixture: ComponentFixture<ExptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
