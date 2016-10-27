angular.module('directives', [])
        .directive('gradeTable', function () {
        return{
        restrict: 'EA',
                template: [
                        '<div>' +
                        '<table>' +
                        '<tr>' +
                        '<th></th>' +
                        '<th>{{exam.studentsInfo.allCourses[0].courseName}}</th>' +
                        '<th>{{exam.studentsInfo.allCourses[1].courseName}}</th>' +
                        '<th>{{exam.studentsInfo.allCourses[2].courseName}}</th>' +
                        '<th>Average</th>' +
                        '</tr>' +
                        '<tr ng-repeat="student in exam.studentsInfo.students">' +
                        '<td>{{student.name}}</td>' +
                        '<td>{{student.grades[0].grade}}</td>' +
                        '<td>{{student.grades[1].grade}}</td>' +
                        '<td>{{student.grades[2].grade}}</td>' +
                        '<td>{{student.grades | average | number: 2}}</td>' +
                        '</tr>' +
                        '</table>' +
                        '</div>'
                ]
        };
    });
