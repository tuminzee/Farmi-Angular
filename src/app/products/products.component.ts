import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService, OrderService } from '@app/_services';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  products: any;
  quantity: number = 1;
  loading = false;
  order = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private orderService: OrderService,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      // console.log("data" + data);
      this.products = data;
      // console.log("products " + this.products);
    })

    // this.getAll();
  }

  // getAll(){
  //  for(var product in this.products){
  //     console.log(product);
  //  }
  // }

  onAddToCart(product){
    console.log({
      productName: product.name,
      productOwnerId: product.productOwnerId,
      productOwnerName: product.productOwnerName,
      productPrice: product.price,
      quantity: this.quantity,
      buyerId : this.accountService.userValue.id,
      buyerName: this.accountService.userValue.firstName,
      total : (this.quantity * product.price)
    });
    this.orderService.postOrder({
      productName: product.name,
      productOwnerId: product.productOwnerId,
      productOwnerName: product.productOwnerName,
      productPrice: product.price,
      quantity: this.quantity,
      buyerId : this.accountService.userValue.id,
      buyerName: this.accountService.userValue.firstName,
      total : (this.quantity * product.price)
    })
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Order Successful Added to Cart', { keepAfterRouteChange: true });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });




  }

//   {
//     "_id": "6066cd4b5e0e9203e4a770df",
//     "name": "Demo",
//     "desc": "Demo",
//     "price": 34,
//     "stock": 56,
//     "productOwnerId": "6065e06fcf458a0c40e55331",
//  :    "productOwnerName": "Farmer",
//     "createdAt": "2021-04-02T07:52:43.383Z",
//     "updatedAt": "2021-04-02T07:52:43.383Z",
//     "__v": 0
// }

  onBuyNow(product){
    this.orderService.postOrder({
      productName: product.name,
      productOwnerId: product.productOwnerId,
      productOwnerName: product.productOwnerName,
      productPrice: product.price,
      quantity: this.quantity,
      buyerId : this.accountService.userValue.id,
      buyerName: this.accountService.userValue.firstName,
      total : (this.quantity * product.price)
    })
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Order Successful Added to Cart', { keepAfterRouteChange: true });
            this.router.navigate(['../cart'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }



}
