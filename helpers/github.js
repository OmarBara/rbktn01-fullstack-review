const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username,cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

   request(options , function(err, res){
    let json = JSON.parse(res.body);
    cb(json)
    // console.log(json)
    // var id =json[0].id
    // // var username = json[0].username
    // var  name =json[0].name
    // var  url =json[0].owner.url
  });

}

module.exports.getReposByUsername = getReposByUsername;