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
  constructor(private chatService:ChatService) { }

  sendMessage():void{
    this.chatService.sendMessage(this.message);
    this.message='';
  }
  ngOnInit() {

  }

}
