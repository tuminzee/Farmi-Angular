import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      // console.log("data" + data);
      this.products = data;
      // console.log("products " + this.products);
    })

    this.getAll();
  }

  getAll(){
   for(var product in this.products){
      console.log(product);
   }
  }

}
