import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { ProductService } from '../_services/product.service';
import { first } from 'rxjs/operators';
import ObjectID from 'bson-objectid';


@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.less']
})
export class UploadProductComponent implements OnInit {
  loading = false;
  uploadForm: FormGroup;
  // newProductObj = {};

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private alertService: AlertService,
    private accountService: AccountService,
    ) {
    this.createForm();
   }

  ngOnInit(): void {
  }


  createForm() {
    this.uploadForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required],
      // stock: ['', Validators.required]
    })
  }




  onSubmit() {
    this.productService.postProducts(
      {
        ...this.uploadForm.value,
        productOwnerId: this.accountService.userValue.id,
        productOwnerName: this.accountService.userValue.firstName
      }
    )
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Product Added Successful', { keepAfterRouteChange: false });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }

}
