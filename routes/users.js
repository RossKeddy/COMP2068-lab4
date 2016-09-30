var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  // load a users view instead
  var userList = ['Ross', 'Nick', 'Jennifer'];

  res.render('users', {
    title: 'Keddy Family',
    users: userList
  });
});

module.exports = router;