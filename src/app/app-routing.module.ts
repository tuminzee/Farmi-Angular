import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { GuideComponent } from './guide/guide.component';

import { HomeComponent } from './home';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'upload', component: UploadProductComponent
    },
    {
      path: 'checkout', component: CheckoutComponent
    },
    {
      path: 'complaint', component: ComplaintComponent
    },
    {
      path: 'guide', component: GuideComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
