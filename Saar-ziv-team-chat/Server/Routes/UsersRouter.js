const express = require('express');
const Controller = require("../Controller.js").ctrl;
ctrl = new Controller();
const router = express.Router();




router.get("/",function (req,res) {
  res.send(ctrl.userDb);
});
router.post("/",function (req,res) {
  let user = ctrl.doesUserExists(req.body.name,req.body.password);
  let responseObj = false;
  if(user !== undefined) {
    responseObj = true;
    req.session.user = user;
  }
  res.send(responseObj);
  });
module.exports = router;

