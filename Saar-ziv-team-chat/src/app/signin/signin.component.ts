import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UsersService} from '../users.service';
import {Router } from '@angular/router';
import {AuthenticationService} from "../authentication.service";



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SigninComponent implements OnInit {
  userName:string;
  password:string;
  //create a field for a logged on user
  constructor(private userService:UsersService,private router:Router,private authenticationService:AuthenticationService) { }
  logIn():void{
    this.authenticationService.logIn(this.userName,this.password);
  }


  ngOnInit() {
  }

}
