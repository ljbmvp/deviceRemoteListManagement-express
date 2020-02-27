var express = require('express'),
 Driver = require('../models/driver.js'),
    router = express.Router();

router.get('/', function(req, res) {
  if(req.cookies.islogin)
  { 
         console.log('cookies:' + req.cookies.islogin);
       req.session.username = req.cookies.islogin;
  }  

  if(req.session.username)
  {    
          console.log('session:' + req.session.username);
        res.locals.username = req.session.username;      
  }
  else
  {
        res.redirect('/login');
        return;    
  }

  Driver.getDriverList( function (err, results) {                            
        
        if(results == '')
        {
            res.locals.error = '列表为空！';
             res.render('index',{title:'主页',results:[]});
             return;
        }
          res.locals.results=results;
          res.render('index',{title:'主页'});
         // res.json({results});
    });  

  // res.render('index',{title:'主页'});
});


// router.get('/userList', function(req,res) {
//       User.getUserList( function (err, results) {                            
        
//         if(results == '')
//         {
//             res.locals.error = '列表为空！';
//              res.render('login',{title:TITLE_LOGIN});
//              return;
//         }

//          res.json(
//             {
//                 results

//             });
//     });  

         
// });

module.exports = router;
