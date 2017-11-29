const express = require('express');
const app = express();
const path = require('path');
const UsersRouter = require("./Routes/UsersRouter");
const staticPath = "C:\\Users\\user\\WebstormProjects\\SaarZiv_TeamChat\\Saar-ziv-team-chat\\dist";
const bodyParser = require('body-parser');
const cors = require("cors");
const http = require('http').Server(app);
const io = require('socket.io')(http);
let messagesDb = require('./messagesDb').messagesDb;

app.use(express.static(staticPath));
app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use("/Users",UsersRouter);

io.on('connection',function (socket) {
  console.log('a user connected.');
  //io.emit('some event', { for: 'everyone' });
  /*socket.on("get-messages",function (messagesDb) {
    io.emit("get-messages",messagesDb);
  });*/
  socket.on('add-message',(msgObj) => {
    messagesDb.push(msgObj);
  });


  //socket.emit("get-last-message",messagesDb[(messagesDb.length -1)])


});


app.get('/', function (req, res) {
  res.sendFile(path.join(staticPath,'index.html'));
});

app.get('/messages', function (req, res) {
  res.send(messagesDb);
});
app.get('/lastMessage', function (req, res) {
  res.send(messagesDb[(messagesDb.length -1)]);
});



http.listen(3000,function() {
  console.log('Server started on port 3000');
});
