import { isUndefined } from 'util';

export class User{
  id:number;
  name:string;
  password:string;
  constructor(Name:string,Password:string,Id?:number){
    if(!isUndefined(Id)) {
      this.id = Id;
    }
    this.name= Name;
    this.password = Password;
  }
}
