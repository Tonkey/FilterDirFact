var app = angular.module('examApp', ['directives', 'filters','factories'])
        .controller('ExamController', ['studInfFac',function (studInfFac) {
                this.studentsInfo = studInfFac;
}]);

  