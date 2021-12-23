import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderStatuComponent } from './order-statu.component';
import { AddOrderStatuComponent } from './components/add-order-statu/add-order-statu.component';
import { UpdateOrderStatuComponent } from './components/update-order-statu/update-order-statu.component';


const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: OrderStatuComponent }]
  },
  {
    path: 'add',
    children: [{ path: '', component: AddOrderStatuComponent }],
  },
  {
    path: 'update/:id',
    children: [{ path: '', component: UpdateOrderStatuComponent }],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderStatuRoutingModule { }
