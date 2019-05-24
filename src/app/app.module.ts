import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component'
import {FormsModule} from "@angular/forms"
import {CommonService} from "./commonservice"
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddproductComponent } from './addproduct/addproduct.component'
import {DiscountPipe} from "./discount.pipe"
import {EnlargeDirective} from "./mydirective"
@NgModule({
  declarations: [
     EnlargeDirective, AppComponent,DiscountPipe,SignupComponent, LoginComponent, NavbarComponent, ProductComponent, MainComponent, CartComponent, ProductdetailComponent, AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [MainComponent]
})
export class AppModule { }
