import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

var apiUrl = "https://ashuapi.herokuapp.com/api/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  password
  errorMessage = null
  constructor(private http : HttpClient, private router : Router) { }

  login(){
    console.log("details in inputs", this.email, this.password)
    var data = {
      email:this.email,
      password: this.password
    }
    this.http.post(apiUrl, data).subscribe((response)=>{
      console.log("Response after posting data through API", response)
      if(response["token"]){
        localStorage.setItem("authtoken", response["token"])
        localStorage.setItem("email",response["email"])
        this.router.navigate(["/"])
      }else{
        this.errorMessage = "Invalid Login"
      }  
    }, (error)=>{

    });
  }

  ngOnInit() {
  }

}
