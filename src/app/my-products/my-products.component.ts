import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService, OrderService } from '@app/_services';
import { ProductService } from '@app/_services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.less']
})
export class MyProductsComponent implements OnInit {
  products: any;

  constructor(
    private productService: ProductService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.productService.getProductsById(this.accountService.userValue.id).subscribe(products => {
      this.products = products;
    })

  }


}
