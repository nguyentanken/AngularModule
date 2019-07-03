import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemSanphamComponent } from './item-sanpham/item-sanpham.component';
import { ListSmartphoneComponent } from './list-smartphone/list-smartphone.component';
import { ListLaptopComponent } from './list-laptop/list-laptop.component';
import { PROMOTIONComponent } from './promotion/promotion.component';
import { BaitapModuleComponent } from './baitap-module.component';

@NgModule({
  declarations: [HeaderComponentComponent, CarouselComponent, ItemSanphamComponent, ListSmartphoneComponent, ListLaptopComponent, PROMOTIONComponent, BaitapModuleComponent],
  exports: [BaitapModuleComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModuleModule { }
