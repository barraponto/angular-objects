angular.module('Waitstaff', [])
.controller('WaitstaffCtrl', function($scope){
    $scope.subtotal = function(){
        var mp = $scope.mealprice||0;
        var tr = $scope.taxrate||0;
        return mp * (1+tr/100);
    };
    $scope.tip = function(){
        var tp = $scope.tiprate||0;
        return (tp/100)*$scope.subtotal();
    };
    $scope.total = function(){
        return $scope.subtotal() + $scope.tip();
    };
});
