/**
 * Created by thanh.phan on 6/29/2015.
 */
var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();
var Course = require("./course");
var CourseList = require("./courselist");

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

                for(var i = 0; i < rows.length; i++) {
                    myList.addCourseByValue(rows[i].id, rows[i].idCourse, rows[i].courseName, rows[i].credit, rows[i].lecturer);
                }
                //var _jsonString = a.body;
                //var _obj = json.parse(_jsonString);
            }
        });

        connection.on('error', function(err){
            res.json({"code": 100, "status": "Error while connecting to database"});
            return;
        });
    });
}

exports.handle_database = handle_database;

app.get("/",function(req,res){-
    handle_database(req,res);
});

app.listen(3000);