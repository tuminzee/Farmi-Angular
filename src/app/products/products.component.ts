import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService, CartService } from '@app/_services';
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
  cart = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      // console.log("data" + data);
      this.products = data;
      // console.log("products " + this.products);
    })
  }

  // getAll(){
  //  for(var product in this.products){
  //     console.log(product);
  //  }
  // }

  onAddToCart(product){
    this.cartService.postCart({
      productName: product.name,
      productOwnerId: product.productOwnerId,
      productImageUrl: product.productImageUrl,
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
            this.alertService.success('Cart Successful Added to Cart', { keepAfterRouteChange: true });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }


  onBuyNow(product){
    this.cartService.postCart({
      productName: product.name,
      productOwnerId: product.productOwnerId,
      productOwnerName: product.productOwnerName,
      productImageUrl: product.productImageUrl,
      productPrice: product.price,
      quantity: this.quantity,
      buyerId : this.accountService.userValue.id,
      buyerName: this.accountService.userValue.firstName,
      total : (this.quantity * product.price)
    })
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Cart Successful Added to Cart', { keepAfterRouteChange: true });
            this.router.navigate(['../cart'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }



}
