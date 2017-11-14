import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
const routes :Routes =[
  {path :'signup', component: SignupComponent},
  {path :'signin', component: SigninComponent},
  {path :'chatroom', component: ChatroomComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
