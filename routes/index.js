var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'CampWast-Home'}
  );
});

router.get('/baju-celana', function(req,res,next) {
  res.render('baju',
    {title: "CampWast-Baju"}
);  
});


module.exports = router;
