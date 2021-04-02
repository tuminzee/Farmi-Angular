import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


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
    return this.http.post(this.url+'/products/', product);
  }


  getProductsById(id){
    return this.http.get(this.url+`/products/${id}/`);
  }

  uploadImage(vals): Observable<any> {
    let data = vals;
    return this.http.post(
      'https://api.cloudinary.com/v1_1/farmi/image/upload',
      data
    );
  }

}
