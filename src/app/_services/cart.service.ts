import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  getCarts(){
    return this.http.get(this.url+'/carts/');
  }

  postCart(cart){
    // console.log(product);
    return this.http.post(this.url+'/carts/', cart);
  }

  getCartsById(id){
    return this.http.get(this.url+`/carts/${id}/`);
  }

}
