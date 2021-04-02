import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { ProductService } from '../_services/product.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.less']
})
export class UploadProductComponent implements OnInit {
  loading = false;
  uploadForm: FormGroup;
  files: File[] = [];
  image_url: String;
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
      price: ['', Validators.required]
    })
  }


  imageUploadTrigger() {
    return new Promise<void>((resolve, reject) => {
      if(this.files[0]){
        const file_data = this.files[0];
        const data = new FormData();
        data.append('file', file_data);
        data.append('upload_preset', 'farmi_preset');
        data.append('cloud_name', 'farmi');

        this.productService.uploadImage(data).subscribe((response) => {
            console.log(`url : ${response.secure_url}\npublic_id:${response.public_id}`);
            this.image_url = response.secure_url
            resolve();
        }, (error) => {
          console.log(error);
        });
      }

    })
    };


  async onSubmit() {
    this.loading = true;
    await this.imageUploadTrigger();
    this.productService.postProducts(
      {
        ...this.uploadForm.value,
        productOwnerId: this.accountService.userValue.id,
        productOwnerName: this.accountService.userValue.firstName,
        productImageUrl: this.image_url
      }
    )
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Product Added Successful', { keepAfterRouteChange: false });
            this.loading = false;
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }

  onSelectDropZone(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  };

  onRemoveDropZone(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  };


}
