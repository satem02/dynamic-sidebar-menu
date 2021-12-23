import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatuRoutingModule } from './order-statu-routing.module';

import { AddOrderStatuComponent } from './components/add-order-statu/add-order-statu.component';
import { UpdateOrderStatuComponent } from './components/update-order-statu/update-order-statu.component';
import { OrderStatuComponent } from './order-statu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderStatuComponent, AddOrderStatuComponent, UpdateOrderStatuComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderStatuRoutingModule
  ]
})
export class OrderStatuModule { }
