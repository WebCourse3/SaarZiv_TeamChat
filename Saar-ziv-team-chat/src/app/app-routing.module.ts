import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule,CanActivate} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import {AuthGuardService} from "./authguard.service";


const routes :Routes =[
  {path :'signup', component: SignupComponent},
  {path :'signin', component: SigninComponent},
  {
    path :'chatroom',
    component: ChatroomComponent,
    canActivate:[AuthGuardService]
  },
  {path:'**',redirectTo:""}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
