import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

import { CartComponent } from './cart/cart.component';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { HeaderComponent } from './common/header/header.component';
import { ProductsComponent } from './products/products.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        HeaderComponent,
        ProductsComponent,
        CartComponent,
        UploadProductComponent,
        CheckoutComponent,
        ComplaintComponent,
        GuideComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
