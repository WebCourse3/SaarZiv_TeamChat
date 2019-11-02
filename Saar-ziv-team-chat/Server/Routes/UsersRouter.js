const express = require('express');
const Controller = require("../Controller.js").ctrl;
ctrl = new Controller();
const router = express.Router();
const jwt = require('jsonwebtoken');




router.get("/",function (req,res) {
  res.send(ctrl.userDb);
});
router.post("/",function (req,res) {
  let user = ctrl.doesUserExists(req.body.name,req.body.password);
  let responseObj;
  if(user !== undefined) {
    responseObj =
      {_id: user._id, token: jwt.sign({sub: user._id}, "shhhhhh"),userName:user.name};
  }
  res.send(responseObj);
  });

module.exports = router;

