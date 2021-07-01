var express = require('express');
var router = express.Router();
// const conn = require('../dao/conn');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    name: 'zhangsan',
    msg: '用户名可以使用'
});
});

router.get('/getuser', (req, res, next) => {
  res.send('getuser');
  console.log(req.query);
});


module.exports = router;
