import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  getProducts(){
    return this.http.get(this.url+'/products/');
  }

  postProducts(product){
    // console.log(product);
    return this.http.post(this.url+'/products/', product).subscribe(data => {
      console.log(data);
    })
  }


}
