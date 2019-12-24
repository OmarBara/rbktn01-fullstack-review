const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected')

});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: String,
  username:  String,
  name:  String,
  url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

var save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var repoData = []
  for (var i = 0; i < data.length; i++) {
    var repos = {};
    repos.id = data[0].id;
    repos.name = data[0].name;
    repos.owner = data[0].owner.login;
    repoData.push(repos)

  }
  // console.log(data)

   var Repos = new Repo(repos)
  Repos.save(function (err, Repo) {
    if (err) {
      console.log(err);
    } else {
      //saved
    }
  })
}
let find =(username)=>{
  return Repos.find({userName:userName})

}
module.exports.save = save;
module.exports.find = find;