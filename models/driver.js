var mysql = require('mysql');
var DB_NAME = 'nodesample';

var pool  = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root'
});

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});  

function Driver(driver){
    this.drivername = driver.drivername;
    this.driverno = driver.driverno;
    this.remarks = driver.remarks;
};
module.exports = Driver;


    
    //保存数据
Driver.prototype.save = function save(callback) {
 
    var driver = {
        drivername: this.drivername,
        driverno: this.driverno,
         remarks: this.remarks
    };
    pool.getConnection(function (err, connection) {
 
 		   var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });
        var insertUser_Sql = "INSERT INTO driveinfo(id,drivename,driveno,remarks) VALUES(0,?,?,?)";
 
        connection.query(insertUser_Sql, [driver.drivername, driver.driverno, driver.remarks], function (err, result) {
 
            connection.release();
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }
 
            console.log("invoked[save]");
            callback(err, result);
        });
    });
};
 
 
 
//根据用户名得到用户数量
Driver.prototype.getDriverNumByName = function getDriverNumByName(drivename, callback) {
 
    pool.getConnection(function (err, connection) {
    	   var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });
        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM driveinfo WHERE drivename = ?";
 
        connection.query(getUserNumByName_Sql, [drivename], function (err, result) {
 
            connection.release();
            if (err) {
                console.log("getDriverNumByName Error: " + err.message);
                return;
            }
 
 
 
            console.log("invoked[getDriverNumByName]");
            callback(err, result);
        });
    });
};


Driver.prototype.updateDriverInfoById = function updateDriverInfoById(drivename,driverno,remarks,id, callback) {
 
    pool.getConnection(function (err, connection) {
           var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });
        var updateDriverInfoById_Sql = "update driveinfo set drivename=?,driveno=?,remarks=? where id=?";
 
        connection.query(updateDriverInfoById_Sql, [drivename,driverno,remarks,id], function (err, result) {
 
            connection.release();
            if (err) {
                console.log("updateDriverInfoById Error: " + err.message);
                return;
            }
 
 
 
            console.log("invoked[updateDriverInfoById]");
            callback(err, result);
        });
    });
};
 
 
//  //删除用户记录
Driver.delDriverByDriverName = function delDriverByDriverName(drivename, callback) {
    pool.getConnection(function (err, connection) {
           var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });
        var delDriverByDriverName = "DELETE FROM driveinfo WHERE drivename = ?";
 
        connection.query(delDriverByDriverName, [drivename], function (err, result) {
 
            connection.release();
            if (err) {
                console.log("delDriverByDriverName Error: " + err.message);
                return;
            }
 
 
 
            console.log("invoked[delDriverByDriverName]");
            callback(err, result);
        });
    });
};
 
 
// //根据用户名得到用户信息
// User.getUserByUserName = function getUserNumByName(username, callback) {
//     pool.getConnection(function (err, connection) {
//     	   var useDbSql = "USE " + DB_NAME;
//     connection.query(useDbSql, function (err) {
//          if (err) {
//             console.log("USE Error: " + err.message);
//             return;
//          }
//          console.log('USE succeed');
//     });
//         var getUserByUserName_Sql = "SELECT * FROM userinfo WHERE username = ?";
 
//         connection.query(getUserByUserName_Sql, [username], function (err, result) {
 
//             connection.release();
//             if (err) {
//                 console.log("getUserByUserName Error: " + err.message);
//                 return;
//             }
 
 
 
//             console.log("invoked[getUserByUserName]");
//             callback(err, result);
//         });
//     });
// };

Driver.getDriverList= function getDriverList( callback) {
    pool.getConnection(function (err, connection) {
           var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });
        var getDriverList_Sql = "SELECT * FROM driveinfo";
 
        connection.query(getDriverList_Sql, function (err, result) {
 
            connection.release();
            if (err) {
                console.log("getDriverList Error: " + err.message);
                return;
            }
 
 
 
            
            callback(err, result);
        });
    });
};

    // //根据用户名得到用户数量
    // User.getUserNumByName = function getUserNumByName(username, callback) {

    //     var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userinfo WHERE username = ?";

    //     connection.query(getUserNumByName_Sql, [username], function (err, result) {
    //     	connection.release();
    //         if (err) {
    //             console.log("getUserNumByName Error: " + err.message);
    //             return;
    //         }

            

    //         console.log("invoked[getUserNumByName]");
    //         callback(err,result);                     
    //     });        
    // };

    // //根据用户名得到用户信息
    // User.getUserByUserName = function getUserNumByName(username, callback) {

    //     var getUserByUserName_Sql = "SELECT * FROM userinfo WHERE username = ?";

    //     connection.query(getUserByUserName_Sql, [username], function (err, result) {
    //     	 connection.release();
    //         if (err) {
    //             console.log("getUserByUserName Error: " + err.message);
    //             return;
    //         }

           

    //         console.log("invoked[getUserByUserName]");
    //         callback(err,result);                     
    //     });        
    // };
 
// });