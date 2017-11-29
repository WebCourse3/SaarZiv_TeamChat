import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ChatService} from "../chat.service";
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatroomComponent implements OnInit {
  chatRoom:string;
  message:string;
  messages:any;
  constructor(private chatService:ChatService) { }

  sendMessage():void{
    this.chatService.sendMessage(this.message);
    this.message='';
    this.getLastMessage();
  }
  /*getMessages():void{
    this.messages = this.chatService.getMessages();
  }*/
  getMessages():void{
    this.chatService.getMessages().subscribe((Messages) => this.messages = Messages);
  }
  getLastMessage():void{
    this.chatService.getLastMessage().subscribe((lastMessage) => this.messages.push(lastMessage));
  }

  ngOnInit() {
    this.getMessages();
  }

}
