import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService, CartService, OrderService } from '@app/_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {
  loading = false;
  cartData: any;
  public total=0;
  private value;
  uploadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private accountService: AccountService,
    private orderService: OrderService,
    private alertService: AlertService,
    private router:Router

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
    // debugger
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
    this.orderService.postOrder({
      buyedId: this.accountService.userValue.id,
      buyerName: this.accountService.userValue.firstName,
      orderDetails: JSON.stringify(this.cartData),
      total: this.total
    })
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Order Added Successful', { keepAfterRouteChange: false });
            this.loading = false;
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
    this.router.navigate(['/orders']);
  }


  }

