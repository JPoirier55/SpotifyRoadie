var express = require('express');
var request = require('request');
var router = express.Router();
var auth = require('./auth2');

/* GET home page. */
router.get('/', function(req, res, next) {
  let refresh_token = auth.readTokens()['refresh_token'];
  let access_token = auth.readTokens()['access_token'];
  console.log(access_token);

  var options = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    },
    json: true
  };
  request.get(options, function (error, response, body) {
    console.log(body);
    var logged_in = false;
    if(body['error']){
      logged_in = false;
    }else{
      logged_in = true;
      }
    console.log(logged_in);
    res.render('index',
      { title: 'Spotify Roadie',
        refresh_token: refresh_token,
        logged_in: logged_in
      });
    }
  );
});

module.exports = router;
