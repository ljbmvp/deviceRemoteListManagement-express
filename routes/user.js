var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js');

router.get('/delete/:userName', function(req, res) {
			var username=req.params.userName;

      User.delUserByUserName(username, function (err, results) {                            
        
         res.locals.results=results;
          // res.render('index',{title:'主页'});
          res.redirect('/');
    }); 
});



// router.post('/', function(req, res) {
//     var userName = req.body['txtUserName'],
//         userPwd = req.body['txtUserPwd'],
//         isRem = req.body['chbRem'],
//         md5 = crypto.createHash('md5');
       
//     User.getUserByUserName(userName, function (err, results) {                            
        
//         if(results == '')
//         {
//             res.locals.error = '用户不存在';
//              res.render('login',{title:TITLE_LOGIN});
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

module.exports = router;
