angular.module('meanSampleApp')
  .controller('StoresController', ['$scope', '$http', function($scope, $http) {
      $scope.newFlg = false;
      $scope.stores = [];
      $http({
          method: 'GET',
          url: '/getStores'
      })
      .success(function(data) {
          $scope.stores = data;
      });

      //新規登録の表示/非表示
      $scope.showRegister = function() {
          $scope.title = '新規店舗登録';
          $scope.newFlg = $scope.newFlg ? false : true;
      };


      $scope.registerStore = function() {
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
              alert('登録完了しました。');
              $scope.stores.push(data);
              $scope.newFlg = false;
              $scope.store = {
                  storeName: '',
                  storeTel : '',
                  storeType: '',
                  storeSeen: '',
                  storeRate: ''
              };
          });
      };

      $scope.onDelete = function($index) {
          var alertResult = confirm('削除しますか？');
          if(alertResult) {
              $http({
                  method: 'POST',
                  url   : '/deleteStore',
                  data  : {
                      storeName : $scope.stores[$index].storeName
                  }
              })
              .success(function(data) {
                 console.log(data);
                 $scope.stores.splice($index, 1);
                 alert('データを削除しました。');
              });
          }
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
              alert('更新完了しました。');
          });
      };

  }]);
