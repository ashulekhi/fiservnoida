import { Component } from '@angular/core';
import {CommonService} from "./commonservice"
import {HttpClient} from "@angular/common/http"

var apiurl = "https://ashuapi.herokuapp.com/api/allproducts"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

    
  constructor( private http : HttpClient ,private cs : CommonService){
    if(!this.cs.products){
      this.http.get(apiurl).subscribe((response)=>{
        console.log("response from api" ,response)
        this.products = response["data"];
        this.cs.products = response["data"]
      })
    }
    else{
      this.products = this.cs.products
    }
     
     }
     
  setData(){
    this.cs.name = "name assigned"
    console.log(">>>>",this.cs)
  }
  title = 'day1';
  products = []
}
