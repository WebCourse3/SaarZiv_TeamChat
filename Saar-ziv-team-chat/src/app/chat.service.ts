import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService  {
  private url = 'http://localhost:3000';
  private socket ;
  sendMessage(message){
    let  loggedInUser;
    loggedInUser = JSON.parse(sessionStorage.getItem("currentUser"));
    let msgObj = {userName:loggedInUser.userName,message:message};
    this.socket.emit('add-message',msgObj);
  }
  getMessages(){

  }
  connectIo() {
    this.socket = io(this.url);
  }


}
