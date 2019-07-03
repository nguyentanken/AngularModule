import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSanphamComponent } from './item-sanpham.component';

describe('ItemSanphamComponent', () => {
  let component: ItemSanphamComponent;
  let fixture: ComponentFixture<ItemSanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
