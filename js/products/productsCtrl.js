angular.module('miniRouting')
  .controller('productsCtrl', function($scope, $stateParams, productsService){
    $scope.test = "hello products"
    if ($stateParams.id === 'shoes') {
      $scope.productData = productsService.shoeData;
    } else if ($stateParams.id === 'socks') {
      $scope.productData = productsService.sockData;
    }
  })
