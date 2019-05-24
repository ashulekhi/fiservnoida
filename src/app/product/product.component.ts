import { Component, OnInit , Input } from '@angular/core';
import {CommonService} from "../commonservice"
import {Router} from "@angular/router"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  text = "adsbsagdhgashdg"
@Input() product
producturl
showProduct(){
  this.producturl = "/product/" + this.product.productid
  this.router.navigate([this.producturl])
  console.log("product selected is" , this.product)
  this.cs.productid = this.product.productid
  console.log("this cs serice" , this.cs)
}

  buy(){
    this.product.price = 326472
    
  }

  constructor(private cs : CommonService , private router : Router) { }

  ngOnInit() {
  }

}
