import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ChatService} from "../chat.service";
import * as io from 'socket.io-client';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatroomComponent implements OnInit {
  chatRoom:string;
  message:string;
  messages:any
  /*private url = 'http://localhost:3000';
  private socket = io(this.url);*/
  constructor(private chatService:ChatService) { }

  sendMessage():void{
    this.getLastMessage();
    this.chatService.sendMessage(this.message);
    this.message='';

  }
  getMessages():void{
    this.chatService.getMessages().subscribe((data) => this.messages = data );
  }
  getLastMessage(){
    this.chatService.getLastMessage().subscribe((lastMsg)=>{this.messages.push(lastMsg);console.log(this.messages)});
  }
  /*getMessages():void{
    this.socket.on('getMessages',(messages) => {this.messages = messages});
  }*/
  /*getMessages():void{
    this.chatService.getMessages().subscribe((Messages) => this.messages = Messages);
  }
  getLastMessage():void{
    this.chatService.getLastMessage().subscribe((lastMessage) => this.messages.push(lastMessage));
  }*/

  ngOnInit() {
    this.getMessages();
  }

}
