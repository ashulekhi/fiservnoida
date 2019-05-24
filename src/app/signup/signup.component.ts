import {Component} from '@angular/core'
import {HttpClient} from "@angular/common/http"
var apiurl = "https://ashuapi.herokuapp.com/api/register"

@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html'
})
export class SignupComponent{
   name
   email
   password
   constructor(private http : HttpClient){
   }
   signup(){
       var  body = {
           name:this.name,
           email:this.email,
           password:this.password 
       }
       this.http.post(apiurl, body).subscribe((response)=>{
        console.log("response from signup api" , response)
       },
    (error)=>{
        console.log("error from signupapi" , error)
    })
   }

}