import { Injectable } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UsersService} from './users.service';
import {Router } from '@angular/router';
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthenticationService {
  constructor(private userService:UsersService,private router:Router,private jwtHelper:JwtHelper) {
  }
  logIn(userName:string,password:string):void{
    this.userService.logOn(userName,password).
    subscribe((respond: Response) => {
      if(respond !== undefined){
        alert("Hello "+userName +" !");
        sessionStorage.setItem("currentUser",JSON.stringify(respond))
        this.router.navigate(["/chatroom"]);


      }else{
        alert("user does`nt exist")
      }
    });
  }
  isAuthenticated():boolean{
    const token = sessionStorage.getItem('currentUser')
    if(token !== null){
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }


}
