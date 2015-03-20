angular.module('snackReactorApp')

.controller('ResultsCtrl', function ($scope,CheckLoggedIn, $location) {
  //have to run checked in on each controller
  $scope.checkLogged = function () {
    CheckLoggedIn().then(function(result){
      if(!result.data){
        $location.path("/");
      }
    });
  }

  $scope.oneAtATime = true;
  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.jerry = {name:"Jerry's Shit"}

  $scope.items = [];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };


});