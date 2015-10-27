angular.module('meanSampleApp')
    .controller('TodoController', ['$scope', function($scope) {
        $scope.member = 'syokiti';
        $scope.tasks = [
            {"body": "do task 1", "done": false},
            {"body": "do task 2", "done": false},
            {"body": "do task 3", "done": true},
            {"body": "do task 4", "done": false}
        ];
        $scope.addNew = function() {
            $scope.tasks.push({"body": $scope.addTaskBody, "done": false});
            $scope.addTaskBody = '';
        };
        $scope.getDoneCount = function() {
            var count = 0;

            angular.forEach($scope.tasks, function(task) {
                count += task.done ? 1 : 0;
            });

            return count;
        };
        $scope.deleteDone = function() {
            var oldTasks = $scope.tasks;
            $scope.tasks = [];
            angular.forEach(oldTasks, function(task) {
                if(!task.done) {
                    $scope.tasks.push(task);
                }
            console.log(oldTasks);
            console.log($scope.tasks);
            });
        };
        $scope.members = {
            name : 'takuya',
            age  : 25
        };
    }]);
