import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UploadComponent } from './upload/upload.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FarmerproductsComponent } from './farmerproducts/farmerproducts.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'upload', component: UploadComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'complaint', component: ComplaintComponent
  },
  {
    path: 'farmerproducts', component: FarmerproductsComponent
  },
  {
    path: 'guide', component: GuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
