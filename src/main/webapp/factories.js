var factories = angular.module('factories', []);
factories.factory('studInfFac', function () {
    var studentsInfo = {};
    studentsInfo.allCourses = [
        {courseId: 1000, courseName: "Basic Programming"},
        {courseId: 1001, courseName: "Advanced Programming"},
        {courseId: 1003, courseName: "DataBase Intro"}];
    studentsInfo.students = [];
    studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
    studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
    studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
    studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});

    return studentsInfo;
});

//this is how I would try and retireve my data without actually knowing the back-end!
factories.factory('dataWithRest', function ($http) {

    var studentsInfo = {};

    $http.get("api/someClassPath!")
            .success(function (data, status, headers, config) {
                studentsInfo.lists = data;
            }).error(function () {
        //some error
    });


    return studentsInfo;
});