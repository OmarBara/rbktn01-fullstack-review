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
  username:  String, // String is shorthand for {type: String}
  name:  String,
  url: String,


});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var Repos = new Repo({ name: username });
}

module.exports.save = save;