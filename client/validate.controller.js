angular.module('meanSampleApp')
  .controller('ValidateController', ['$scope', function($scope) {
    $scope.errors = [
        {type: 'required', message: '※入力必須の項目です'},
        {type: 'email', message: '※正しいメール形式で入力して下さい'}
      ];
  }]);
