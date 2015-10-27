angular.module('meanSampleApp')
    .controller('SignUpController', ['$scope', '$http', function($scope, $http) {
      $scope.signUp = function() {
        $http({
          method: 'POST',
          url: '/signUp',
          data: {
            email: $scope.email,
            password: $scope.password
          }
        })
        .success(function(data) {
          console.log(data);
        });
      };
    }]);
