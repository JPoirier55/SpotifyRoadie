var admin = require("firebase-admin");

var serviceAccount = require("/home/jake/node_work/nodeapp-57a5c-firebase-adminsdk-no5qt-230ff6a3b3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodeapp-57a5c.firebaseio.com"
});

module.exports = admin;
