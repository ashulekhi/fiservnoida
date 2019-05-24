import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component"
import {SignupComponent} from "./signup/signup.component"
import {LoginComponent} from "./login/login.component"
import {CartComponent} from "./cart/cart.component"
import {AddproductComponent} from "./addproduct/addproduct.component"
import {ProductdetailComponent} from "./productdetail/productdetail.component"



const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'product/:pid',component:ProductdetailComponent},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
