import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems
  constructor(private http : HttpClient) {
    this.http.post("https://ashuapi.herokuapp.com/api/cart",{
      email:localStorage.email
    }).subscribe((response)=>{
      console.log("response from cart api" , response)
      this.cartitems = response["data"]
    },(error)=>{
      console.log("error from cart api" , error)
      
    })
   }

  ngOnInit() {
  }

}
