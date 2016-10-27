angular.module('filters', [])
        .filter('average', function () {
            return function (array) {
                var returnVal = 0;
                var numbers = 0;

                for (var i = 0; i < array.length - 1; i++) {
                    this.val = Number(array[i].grade || 0);
                    if (val > 0) {
                        returnVal += val;
                        numbers++;
                    }
                }
                ;

                return returnVal / numbers;
            };
        });
