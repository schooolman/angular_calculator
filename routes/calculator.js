var express = require('express');
var router = express.Router();

var results = "math things";

/* GET users listing. */
router.post('/', function(req, res, next) {

  results = req.body.nums;
  console.log(results);
  var expression = results[0];
  var mathOne = results[1];
  var mathTwo = results[2];
  var final = 0;

  if(expression == 0){
    final = mathOne + mathTwo;
  } else if(expression == 1) {
    final = mathOne - mathTwo;
  } else if(expression == 2) {
    final = mathOne * mathTwo;
  } else if(expression == 3) {
    final = mathOne / mathTwo;
  }

  console.log(final);
  //do math stuff here

  res.json(final);
});

module.exports = router;
