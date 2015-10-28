angular.module('meanSampleApp')
    .controller('ModalController', ['$scope', '$http', '$uibModalInstance', function($scope, $http, $uibModalInstance) {
        $scope.modalRegister = function() {
            $http({
                url: '/registerStore',
                method: 'POST',
                data: {
                    storeName: $scope.storeName,
                    storeTel : $scope.storeTel,
                    storeType: $scope.storeType,
                    storeSeen: $scope.storeSeen,
                    storeRate: $scope.storeRate
                }
            })
            .success(function(data) {
                $scope.modalInstance.dismiss();
                $scope.stores.push(data);
                console.log('データを登録しました');
            });
        };

        $scope.modalOkDelete = function() {
            $http({
                method: 'POST',
                url   : '/deleteStore',
                data  : {
                    storeName : $scope.stores[$scope.selectRowNo].storeName
                }
            })
            .success(function(data) {
                $scope.modalInstance.dismiss();
                $scope.stores.splice($scope.selectRowNo, 1);
                console.log('データを削除しました');
            });
        };

        $scope.modalUpdate = function() {
            $http({
                method: 'POST',
                url: '/updateStore',
                data: {
                    storeName: $scope.storeName,
                    storeTel:  $scope.storeTel,
                    storeType: $scope.storeType,
                    storeSeen: $scope.storeSeen,
                    storeRate: $scope.storeRate
                }
            })
            .success(function(data) {
                $scope.stores = data;
                $scope.modalInstance.dismiss();
            });
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };



    }]);
