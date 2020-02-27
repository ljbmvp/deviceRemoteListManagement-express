var express = require('express'),
    router = express.Router();
 
   

router.get('/', function(req, res) {
   
   res.locals.username = "";
   req.session.username ="";  
    res.redirect('/');
        return;   
});

module.exports = router;