import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {User } from '../User';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {
  apiUrl  ="http://localhost:3000/";
  userObj:any;
  respond:string;
  constructor(private http: HttpClient) { }
//need to create connection between client and server.

  logOn(userName:string,Password:string):Observable<Object>{
    this.userObj = {name:userName,password:Password};
    //console.log(this.userObj.password);
    return this.http.post(this.apiUrl + "Users",this.userObj,httpOptions);
  }

}
