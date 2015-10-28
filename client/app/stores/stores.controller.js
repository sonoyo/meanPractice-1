angular.module('meanSampleApp')
  .controller('StoresController', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {

    //Stores一覧初期表示
    $http({
      method: 'GET',
      url: '/getStores'
    })
    .success(function(data) {
      $scope.stores = data;
    });
    //モーダル関連
    $scope.showModalRegister = function() {
      $scope.modalTitle = '新規店舗登録';
      $scope.modalInstance = $uibModal.open({
          controller: 'StoresController',
          templateUrl: 'app/modal/modal.registerStore.html',
          scope: $scope,
          backdop: 'static'
      });
    };

    $scope.modalRegister = function() {
        $http({
            url: '/registerStore',
            method: 'POST',
            data: {
                storeName: $scope.store.storeName,
                storeTel : $scope.store.storeTel,
                storeType: $scope.store.storeType,
                storeSeen: $scope.store.storeSeen,
                storeRate: $scope.store.storeRate
            }
        })
        .success(function(data) {
            $scope.modalInstance.dismiss();
            $scope.stores.push(data);
        });
    };

    $scope.cancel = function() {
        $scope.modalInstance.dismiss();
    };

    $scope.showModalDelete = function($index) {
        $scope.modalInstance = $uibModal.open({
                                controller: 'StoresController',
                                templateUrl: 'app/modal/modal.showDelete.html',
                                scope: $scope,
                                backdrop: 'static'
                            });

        $scope.selectRowNo = $index;
    };

    $scope.modalOk = function() {
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

      $scope.onEdit = function($index) {
          $scope.title = '店舗情報更新';
          $scope.editFlg = !$scope.editFlg;
          var editStore = $scope.stores[$index];
          $scope.store = {
              storeName: editStore.storeName,
              storeTel : editStore.storeTel,
              storeType: editStore.storeType,
              storeSeen: editStore.storeSeen,
              storeRate: editStore.storeRate
          };
      };

      $scope.updateStore = function() {

          var updateStore = {
              storeName : $scope.store.storeName,
              storeTel : $scope.store.storeTel,
              storeType : $scope.store.storeType,
              storeSeen : $scope.store.storeSeen,
              storeRate : $scope.store.storeRate,
          };
          $http({
              url: '/updateStore',
              method: 'POST',
              data: updateStore
          })
          .success(function(data) {
              $scope.stores = data;
              $scope.store = {
                  storeName: '',
                  storeTel : '',
                  storeType: '',
                  storeSeen: '',
                  storeRate: ''
              };
              $scope.editFlg = false;
              console.log('データを更新しました。');
          });
      };

  }]);
