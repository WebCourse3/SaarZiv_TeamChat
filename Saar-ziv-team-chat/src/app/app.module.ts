import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { SigninComponent } from './signin/signin.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { ChatroomComponent } from './chatroom/chatroom.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    SigninComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
