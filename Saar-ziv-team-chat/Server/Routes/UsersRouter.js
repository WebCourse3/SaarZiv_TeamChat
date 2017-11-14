const express = require('express');
const Controller = require("../Controller.js").ctrl;
ctrl = new Controller();
const router = express.Router();




router.get("/",function (req,res) {
  res.send(ctrl.userDb);
});
router.post("/",function (req,res) {
  console.log("hi from server");
  let responseObj =  true;
  if(!(ctrl.doesUserExists(req.body.name,req.body.password))){
    responseObj = false;
  }
  res.send(responseObj);
});
module.exports = router;

