import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, CartService, OrderService } from '@app/_services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  cartData;

  constructor(
    private cartService: CartService,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cartService.getCartsById(this.accountService.userValue.id).subscribe(cartData => {
      this.cartData = cartData;
      ;
    })
  }


  onCheckout() {
    this.router.navigateByUrl('/payment');
 }

}
