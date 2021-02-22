import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.url;

  constructor(
    private http:HttpClient
  ) { }

  getProducts(){
    return this.http.get(this.url);
  }

  postProducts(product){
    // console.log(product);
    return this.http.post(this.url, product).subscribe(data => {
      console.log(data);
    })
  }
}
