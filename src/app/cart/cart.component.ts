import { Component, OnInit } from '@angular/core';
import { AccountService, OrderService } from '@app/_services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  orders;

  constructor(
    private orderService: OrderService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.orderService.getOrdersById(this.accountService.userValue.id).subscribe(orders => {
      this.orders = orders;
    })
  }

}
