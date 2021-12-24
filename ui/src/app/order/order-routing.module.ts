import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { OrderComponent } from './order.component';


const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: OrderComponent }]
  },
  {
    path: 'add',
    children: [{ path: '', component: AddOrderComponent }],
  },
  {
    path: 'update',
    children: [{ path: '', component: UpdateOrderComponent }],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderRoutingModule { }
