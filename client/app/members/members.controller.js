angular.module('meanSampleApp')
  .controller('MembersController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
          $scope.id = $stateParams.id;
          $scope.members = [
              {name: '田添', age:21, gender:'男'},
              {name: 'おに', age:21, gender:'男'}
          ];

          $scope.onShow = function() {
              $scope.show = $scope.show ? false : true;
          };

          $scope.registerMember = function() {
              var newMember = {
                  name: $scope.name,
                  age : $scope.age,
                  gender: $scope.gender
              };
              $scope.members.push(newMember);
              console.log($scope.members);

          };
  }]);
