import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
  providers: [],
})
export class OrderComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  edit() {
    this.router.navigate(["order/update", 1]);
  }
}
