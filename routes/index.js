var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'Express'}
  );
});

router.get('/baju-celana', function(req,res,next) {
  res.render('baju',
    {title: "Halaman Baju"}
);  
});


module.exports = router;
