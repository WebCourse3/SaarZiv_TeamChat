import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import * as io from 'socket.io-client';
interface Message {
  userName:string;
  message:string;
}
@Injectable()
export class ChatService  {

  private url = 'http://localhost:3000';
  private socket ;
  //test:any;
  constructor(private http:HttpClient){}
  /*getMessages():string{
    this.socket = io(this.url);
    this.socket.on('some event',(data) => this.test = data);
    return this.test;
  }*/
  getMessages():Observable<Message[]>{
    this.socket = io(this.url);
    return this.http.get<Message[]>(this.url+"/messages");
  }
  sendMessage(message) :void{
    let  loggedInUser;
    loggedInUser = JSON.parse(sessionStorage.getItem("currentUser"));
    let msgObj = {userName:loggedInUser.userName,message:message};
    this.socket.emit('add-message',msgObj);
  }
  /*getLastMessage():Message{
    return this.socket.on('get-last-message',(lastMessage) => lastMessage);
  }*/
  getLastMessage():Observable<Message>{
    return this.http.get<Message>(this.url+"/lastMessage");
  }



}
