var express = require('express'),
    router = express.Router(),
    Driver = require('../models/driver.js'),
    TITLE = '设备修改';

// router.get('/', function(req, res) {
//   res.render('driverEdit',{title:TITLE});
// });

router.get('/:DriveName/:DriveNo/:Remarks/:id', function(req, res) {
            // var id=req.params.id;
            var drivername=req.params.DriveName;
             var driverno=req.params.DriveNo;
             var remarks=req.params.Remarks;
              var id = req.params.id;
            var driver=new Driver({
               drivername:drivername,
               driverno:driverno,
               remarks:remarks

            })
            
            res.render('driverEdit',{title:"修改",driver:driver,id:id});
  
});

router.post('/:drivername/:driverno/:remarks/:id', function(req, res) {
  var drivername = req.body['drivername'],
      driverno = req.body['driverno'],
      remarks = req.body['remarks'],
      id = req.body['id'] 
    

  var driver = new Driver({
      drivername: drivername,
      driverno: driverno,
      remarks: remarks
  });

  

  driver.updateDriverInfoById(drivername,driverno,remarks,id,function (err, results) {        
             
     

      if (err) {
          res.locals.error = err;
          console.log("修改失败");
          return;
      }
 res.redirect('/');
      });
    
});

module.exports = router;