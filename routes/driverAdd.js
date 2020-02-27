var express = require('express'),
    router = express.Router(),
    Driver = require('../models/driver.js'),
    TITLE = '设备添加';

router.get('/', function(req, res) {
  res.render('driverAdd',{title:TITLE});
});

router.post('/', function(req, res) {
  var drivername = req.body['drivername'],
      driverno = req.body['driverno'],
      remarks = req.body['remarks']    
    

  var driver = new Driver({
      drivername: drivername,
      driverno: driverno,
      remarks: remarks
  });

  //检查用户名是否已经存在
  driver.getDriverNumByName(driver.drivername, function (err, results) {        
             
      if (results != null && results[0]['num'] > 0) {
          err = '用户名已存在';
      }

      if (err) {
          res.locals.error = err;
          res.render('driverAdd', { title: TITLE });
          return;
      }

      driver.save(function (err,result) {
          if (err) {
              res.locals.error = err;
              res.render('driverAdd', { title: TITLE }); 
              return;            
          }        

          if(result.insertId > 0)
          {
              res.locals.success = '添加成功!' ;
          }
          else
          {
              res.locals.error = err;
          }
         
          res.redirect('/');
          });    
    });          
});

module.exports = router;