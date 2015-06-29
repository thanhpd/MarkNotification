/**
 * Created by thanh.phan on 6/29/2015.
 */
function Course() {
    this.id = "";
    this.idCourse = "";
    this.courseName = "";
    this.credit = 0;
    this.lecturer = "";
}
//
//function Course(_id, _idCourse, _courseName, _credit, _lecturer) {
//    this.id = _id,
//    this.idCourse = _idCourse;
//    this.courseName = _courseName;
//    this.credit = _credit;
//    this.lecturer = _lecturer;
//}

Course.prototype.createCourse = function (_id, _idCourse, _courseName, _credit, _lecturer) {
    this.id = _id,
    this.idCourse = _idCourse,
    this.courseName = _courseName,
    this.credit = _credit,
    this.lecturer = _lecturer
};

Course.prototype.getIndexId = function() {
    return this.id;
};

Course.prototype.getCourseId = function() {
    return this.idCourse;
};

Course.prototype.getCourseName = function() {
    return this.courseName;
};

Course.prototype.getCourseCredit = function() {
    return this.credit;
};

Course.prototype.getCourseLecturer = function() {
    return this.lecturer;
};

module.exports = Course;