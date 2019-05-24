import { Component, OnInit } from '@angular/core';
import {CommonService} from "../commonservice"
import {ActivatedRoute} from "@angular/router"
import {HttpClient} from "@angular/common/http"



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productid
  product
  constructor(private cs : CommonService , private http : HttpClient,private route : ActivatedRoute) {
    console.log("current route details are" , this.route.snapshot.params.pid)
    this.productid = this.route.snapshot.params.pid
    var apiurl = "https://ashuapi.herokuapp.com/api/product/"+this.productid
    this.http.get(apiurl).subscribe((response)=>{
      this.product = response["data"]
    })
   }

   addToCart(){
    
    if(localStorage.authtoken){
      var product = {
        email:localStorage.email,
        productid:this.productid,
        product:{
            name:this.product.name,
            image:this.product.image,
            brand:this.product.brand,
            price:this.product.price
        }
      }
      this.http.post('https://ashuapi.herokuapp.com/api/addtocart',product)
      .subscribe((response)=>{
          console.log("response from addto cart api")
      },(error)=>{
       console.log("error from addto cart api")
     
      })
    }
    else{

    }

   }

  ngOnInit() {
  }

}
