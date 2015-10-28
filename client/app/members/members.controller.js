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

          $scope.data = {
              'type': 'BarChart',
              'data': {
                    //列の情報定義
                    'cols':[
                        {
                            id: 'month',
                            label: '月',
                            type : 'string'
                        },
                        {
                            id: 'fujimoto',
                            label: '藤本',
                            type: 'number'
                        },
                        {
                            id: 'kanaeda',
                            label: '金枝',
                            type: 'number'
                        },
                        {
                            id: 'horio',
                            label: '堀尾',
                            type: 'number'
                        },
                        {
                            id: 'hara',
                            label: '原',
                            type: 'number'
                        }
                    ],
                    'rows':[
                        {
                            'c':[
                                {
                                    'v':4,
                                    'f':'4月'
                                },
                                {
                                    'v':20,
                                    'f':'200万円'
                                },
                                {
                                    'v':5,
                                    'f':'50万円'
                                },
                                {
                                    'v':2,
                                    'f':'20万円'
                                },
                                {
                                    'v':1,
                                    'f':'10万円'
                                },
                            ]
                        },
                        {
                            'c':[
                                {
                                    'v':5,
                                    'f':'5月'
                                },
                                {
                                    'v':10,
                                    'f':'100万円'
                                },
                                {
                                    'v':5,
                                    'f':'50万円'
                                },
                                {
                                    'v':6,
                                    'f':'60万円'
                                },
                                {
                                    'v':1,
                                    'f':'10万円'
                                },
                            ]
                        },
                        {
                            'c':[
                                {
                                    'v':6,
                                    'f':'6月'
                                },
                                {
                                    'v':5,
                                    'f':'50万円'
                                },
                                {
                                    'v':10,
                                    'f':'100万円'
                                },
                                {
                                    'v':10,
                                    'f':'100万円'
                                },
                                {
                                    'v':3,
                                    'f':'30万円'
                                },
                            ]
                        }
                    ]},
              'options': {
                  'title': '売り上げランキング',
                  'isStacked': 'true',
                  'vAxis': {
                      'title': '売上月'
                  },
                  'hAxis': {
                      'title': '売上数',
                      'gridlines': {
                          'count': 10
                      }
                  }
              }
          };
  }]);
