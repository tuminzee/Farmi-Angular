import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  getOrders(){
    return this.http.get(this.url+'/orders/');
  }

  postOrder(order){
    // console.log(product);
    return this.http.post(this.url+'/orders/', order);
  }

  getOrdersById(id){
    return this.http.get(this.url+`/orders/${id}/`);
  }

}
