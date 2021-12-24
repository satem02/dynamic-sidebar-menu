import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any = [
    {
      "text": "Order",
      "submenu": [
        {
          "text": "List",
          "url": "/order"
        },
        {
          "text": "Add",
          "url": "/order/add"
        },
        {
          "text": "Update",
          "url": "/order/update"
        }
      ]
    },
    {
      "text": "Order Statu",
      "submenu": [
        {
          "text": "List",
          "url": "/order-statu"
        },
        {
          "text": "Add",
          "url": "/order-statu/add"
        },
        {
          "text": "Update",
          "url": "/order-statu/update"
        }
      ]
    }
  ];

  ngOnInit(): void {

  }

}
