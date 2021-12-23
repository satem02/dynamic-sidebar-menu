import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-order-statu',
  templateUrl: './order-statu.component.html',
  styleUrls: ['./order-statu.component.css']
})
export class OrderStatuComponent implements OnInit {
  
  constructor(private router: Router) {}
  ngOnInit(): void {}

  edit() {
    this.router.navigate(["order-statu/update", 1]);
  }
}
