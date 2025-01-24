var express = require('express');
var router = express.Router();
const dd =new Date();

/* GET users listing. */

router.get('/year', (req, res)=> {
  const date = (dd.getFullYear());
  res.json({year : date.toString()})
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
