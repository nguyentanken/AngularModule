import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapModuleComponent } from './baitap-module.component';

describe('BaitapModuleComponent', () => {
  let component: BaitapModuleComponent;
  let fixture: ComponentFixture<BaitapModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
