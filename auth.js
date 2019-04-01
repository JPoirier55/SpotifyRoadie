var request = require('request');

var client_id = '8810f58de479449685e01bf4bf2c0b2a'; // Your client id
var client_secret = '9bbf61fb0928482b88d055d58154d046'; // Your secret

var token = null;
// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  // use the access token to access the Spotify Web API
  console.log(body);

  var options = {
    url: 'https://api.spotify.com/v1/users/jake.poirier55',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + body.access_token
    },
    json: true
  };
  request.get(options, function (error, response, body) {
        // Do more stuff with 'body' here
        console.log(body);
    }
  );
});
