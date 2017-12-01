import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import * as io from 'socket.io-client';
import {observable} from "rxjs/symbol/observable";
interface Message {
  userName:string;
  message:string;
}
@Injectable()
export class ChatService  {

  private url = 'http://localhost:3000';
  private socket = io(this.url);
  messages:any;
  constructor(private http:HttpClient){}
  getMessages():any{
    let observable = new Observable(observer =>{
      this.socket.on('getMessages',(messages) => {observer.next(messages)});
    });
    return observable;
  }
  sendMessage(message){
    let  loggedInUser;
    loggedInUser = JSON.parse(sessionStorage.getItem("currentUser"));
    let msgObj = {userName:loggedInUser.userName,message:message};
    this.socket.emit('add-message',msgObj);
  }
  getLastMessage(){
    let observable = Observable.create((obs) => {
      this.socket.on("lastMessage",(lastMessage)=>{obs.next(lastMessage)});
    });
    return observable;
  }


  /*getMessages():Observable<Message[]>{
    this.socket = io(this.url);
    return this.http.get<Message[]>(this.url+"/messages");
  }*/
  /*getLastMessage():Message{
    return this.socket.on('get-last-message',(lastMessage) => lastMessage);
  }*/
  /*getLastMessage():Observable<Message>{
    return this.http.get<Message>(this.url+"/lastMessage");
  }*/



}
