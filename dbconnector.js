/**
 * Created by thanh.phan on 6/29/2015.
 */
var mysql      = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'thanhpd1',
    password: '02121994',
    database: 'mark',
    debug: true
});

function handle_database(req,res) {
    pool.getConnection(function(err, connection){
        if(err) {
            connection.release();
            res.json({"code": 100, "status": "Error while connecting to database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from courselist", function(err, rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err){
            res.json({"code": 100, "status": "Error while connecting to database"});
            return;
        });
    });
}

exports.handle_database = handle_database;