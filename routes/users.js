var express = require('express');
var router = express.Router();
const db_admin = require('../db_admin');

/* GET users listing. */
router.get('/:type/:time', function(req, res, next) {
  var type = req.params.type;
  var time = req.params.time;
  console.log(type);
  var db = db_admin.database();
  var ref = db.ref("stockdata");
  var snapshot_obj;
  ref.once("value", function(snapshot) {
    snapshot_obj = snapshot.val()['quote'][0];
    res.send(snapshot_obj[type][time].toString());
    // for(obj in snapshot_obj){
    //   console.log(snapshot_obj[obj]);
    // }
  });


});

module.exports = router;
