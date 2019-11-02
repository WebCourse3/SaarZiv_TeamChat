let userDb =require("./usersDb.js").UserDb;

class Controller{
  constructor(){
    this.userDb = userDb;
  }
  doesUserExists(inputUserName,InputUserPass){
    return userDb.find((user)=> ((inputUserName === user.name)&&(InputUserPass === user.password)))
  }
}
module.exports.ctrl = Controller;
