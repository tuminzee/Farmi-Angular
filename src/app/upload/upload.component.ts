import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  createForm() {
    this.uploadForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    })
  }




  constructor(private fb: FormBuilder, public productService: ProductService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.postProducts(this.uploadForm.value);
  }

}
