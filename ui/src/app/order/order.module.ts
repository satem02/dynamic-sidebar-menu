import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OrderComponent, AddOrderComponent, UpdateOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
