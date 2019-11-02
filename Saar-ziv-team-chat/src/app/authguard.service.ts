import { Injectable } from '@angular/core';
import {CanActivate,Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authenticationService:AuthenticationService,private router:Router) { }
  canActivate():boolean{
    if(!this.authenticationService.isAuthenticated()){
      this.router.navigate(['signin']);
      alert("you must logon in order to enter the chat room :)");
      return false;
    }
    return true;
  }
}
