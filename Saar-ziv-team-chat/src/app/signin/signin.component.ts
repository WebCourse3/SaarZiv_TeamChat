import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UsersService} from '../users.service';
import {Router } from '@angular/router';



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
  constructor(private userService:UsersService,private router:Router) { }
  logIn():void{
    this.userService.logOn(this.userName,this.password).
    subscribe((respond) => {
      if(respond){
        alert("Hello "+this.userName +" !");
        this.router.navigate(["/chatroom"]);


      }else{
        alert("user does`nt exist")
      }
    });
  }


  ngOnInit() {
  }

}
