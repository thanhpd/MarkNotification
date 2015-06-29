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
    this.myList.push(new Course(_id, _idCourse, _courseName, _credit, _lecturer));
};

CourseList.prototype.getCourseList = function() {
    return this.myList;
};

module.exports = CourseList;