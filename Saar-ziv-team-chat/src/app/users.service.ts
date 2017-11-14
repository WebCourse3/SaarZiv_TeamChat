import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {
  apiUrl  ="http://localhost:3000/";
  userObj:any;
  constructor(private http: HttpClient) { }

  logOn(userName:string,Password:string):Observable<Object>{
    this.userObj = {name:userName,password:Password};
    return this.http.post(this.apiUrl + "Users",this.userObj,httpOptions);
  }


}
