import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, CartService } from '@app/_services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {
  cartData: any;
  public total=0;
  private value;
  uploadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private accountService: AccountService,

  ) {
    this.createForm();
   }

  ngOnInit(): void {
    this.cartService.getCartsById(this.accountService.userValue.id).subscribe(cartData => {
      this.cartData = cartData;
      this.findsum(cartData);
    });
  }

  findsum(data){
    debugger
    this.value=data
    console.log(this.value);
    for(let j=0;j<data.length;j++){
          console.log(this.value[j])
        this.total+= this.value[j].quantity * this.value[j].productPrice;
        console.log(this.total)
    }
  }


  createForm() {
    this.uploadForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    })
  }

  onSubmit(){
    console.log(this.uploadForm.value);
  }

}
