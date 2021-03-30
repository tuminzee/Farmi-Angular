import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.less']
})
export class UploadProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  uploadForm: FormGroup;
  createForm() {
    this.uploadForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    })
  }




  onSubmit() {
    this.productService.postProducts(this.uploadForm.value);
  }

}
