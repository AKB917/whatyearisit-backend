var express = require('express');
var router = express.Router();


/* GET users listing. */

router.get('/', (req, res)=> {
  const date = new Date().getFullYear();
  res.json({year : date.toString()})
})

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = router;
