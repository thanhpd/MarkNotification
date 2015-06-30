/**
 * Created by thanh.phan on 6/29/2015.
 */
Course = require('./course');

function CourseList() {
    this.myList = [];
}

CourseList.prototype.addCourseByCourse = function(_course) {
    this.myList.push(_course);
};

CourseList.prototype.addCourseByValue = function(_id, _idCourse, _courseName, _credit, _lecturer) {
    var c = new Course();
    c.createCourse(_id, _idCourse, _courseName, _credit, _lecturer);
    this.myList.push(c);
};

CourseList.prototype.getCourseList = function() {
    return this.myList;
};

module.exports = CourseList;