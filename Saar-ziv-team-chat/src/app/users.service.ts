import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  apiUrl  ="http://localhost:3000/";
  constructor(private http: HttpClient) { }
//need to create connection between client and server.
  logOn(userName:string,Password:string):void{
    //body = {name:userName,password:Password};
    //this.http.post(this.apiUrl + "/Users",data,)

  }
}
