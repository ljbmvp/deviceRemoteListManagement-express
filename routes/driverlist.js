var express = require('express'),
    router = express.Router(),
    Driver = require('../models/driver.js');





// router.get('/', function(req, res) {
//     var userName = req.body['txtUserName'],
//         userPwd = req.body['txtUserPwd'],
//         isRem = req.body['chbRem'],
//         md5 = crypto.createHash('md5');
       
//     User.getUserByUserName(userName, function (err, results) {                            
        
//         if(results == '')
//         {
            // res.locals.error = '用户不存在';
            //  res.render('login',{title:TITLE_LOGIN});
//              return;
//         }

//          userPwd = md5.update(userPwd).digest('hex');
//          if(results[0].UserName != userName || results[0].UserPass != userPwd)
//          {
//              res.locals.error = '用户名或密码有误';
//              res.render('login',{title:TITLE_LOGIN});
//              console.log(1);
//              return;
//          }
//          else
//          {
//              if(isRem)
//              {
//                 res.cookie('islogin', userName, { maxAge: 60000 });                 
//              }

//              res.locals.username = userName;
//              req.session.username = res.locals.username;  
//              console.log(req.session.username);                        
//              res.redirect('/');
//              return;
//          }     
//     });              
// });

router.get('/', function(req, res) {


  Driver.getDriverList( function (err, results) {                            
        
        if(results == '')
        {
          
             console.log("列表为空！");
            //  res.locals.error = '列表为空';
            // res.render('index',{title:'主页'});
             return;
        }
          
           res.json({ results});
    });  

});

router.get('/delete/:driverName', function(req, res) {
            var drivername=req.params.driverName;

      Driver.delDriverByDriverName(drivername, function (err, results) {                            
        
         res.locals.results=results;
          // res.render('index',{title:'主页'});
          res.redirect('/');
    }); 
});

// router.get('/edit/:DriveName/:DriveNo/:Remarks', function(req, res) {
//             // var id=req.params.id;
//             var drivername=req.params.DriveName;
//              var driverno=req.params.DriveNo;
//              var remarks=req.params.Remarks;
//             var driver=new Driver({
//                drivername:drivername,
//                driverno:driverno,
//                remarks:remarks

//             })
            
//             res.render('driverEdit',{title:"修改",driver:driver});
  
// });

module.exports = router;
