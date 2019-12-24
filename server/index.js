const express = require('express');
const bodyParser = require('body-parser')
const api = require('../helpers/github')
// const helper = require('../helpers/github.js');
const Db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //chek if username exist in DB
  var username = req.body.Data
  if(db.find(username)){
    //if yessend to react to Display
    res.send(db.find(username))
  }

    var mydata;
   //if not make new API request,
   var data = api.getReposByUsername(username, function(dat){
    res.send(data)
    mydata = dat;
   })
    //save it in DB
    console.log(mydata)
    // Db.save(data)
    //display

  // console.log(data)


  res.statusCode = 200
  res.end()
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

