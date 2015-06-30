/**
 * Created by thanh.phan on 6/29/2015.
 */
var mysql     =    require('mysql');
var CourseList = require('./courselist');

var myList = new CourseList();

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'iamXcod94',
    database: 'mark',
    debug: false
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
                //res.json(rows);
                for (var i = 0; i < rows.length; i++) {
                    myList.addCourseByValue(rows[i].id, rows[i].idcourse, rows[i].coursename, rows[i].credit, rows[i].lecturer);
                }
                //var a = JSON.stringify(rows);
                //console.log(a);
                //console.log(myList);
                console.log(rows);
                return rows;
            }
        });

        connection.on('error', function(err){
            res.json({"code": 100, "status": "Error while connecting to database"});
            return;
        });
    });
}

module.exports = handle_database;