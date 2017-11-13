const express = require('express');
const app = express();
const path = require('path');
const UsersRouter = require("./Routes/UsersRouter");
const staticPath = "C:\\Users\\Jbt\\WebstormProjects\\SaarZiv_TeamChat\\Saar-ziv-team-chat\\dist";
const bodyParser = require('body-parser');

app.use(express.static(staticPath));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use("/Users",UsersRouter);




app.get('/*', function (req, res) {
  res.sendFile(path.join(staticPath,'index.html'));
});


app.listen(3000,function() {
  console.log('Server started on port 3000');
});
