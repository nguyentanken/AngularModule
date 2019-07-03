import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROMOTIONComponent } from './promotion.component';

describe('PROMOTIONComponent', () => {
  let component: PROMOTIONComponent;
  let fixture: ComponentFixture<PROMOTIONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROMOTIONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROMOTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
