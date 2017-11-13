const express = require('express');
const Controller = require("../Controller.js").ctrl;
ctrl = new Controller();
const router = express.Router();




router.get("/",function (req,res) {
  res.send(ctrl.userDb);
});
router.post("/",function (req,res) {
  (!ctrl.doesUserExists(req.body.name,req.body.password))?res.send("user doesnt exist"):res.send("user exist !");
})
module.exports = router;

