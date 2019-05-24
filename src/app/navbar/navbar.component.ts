import { Component, OnInit } from '@angular/core';
import {CommonService} from "../commonservice"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isuserloggedin
  nameinnavbar

  logout(){
    localStorage.clear()
    this.isuserloggedin = false
  }

  ngDoCheck(){
    this.isuserloggedin = localStorage.authtoken
  }

  size="100cm"
  constructor(private cs1 : CommonService ) {
      this.isuserloggedin=localStorage.getItem('authtoken')
      setTimeout(()=>{
        this.size = "200cm"
      },5000)
   }

   getData(){
     this.nameinnavbar = this.cs1.name
   }

  ngOnInit() {
  }

}
