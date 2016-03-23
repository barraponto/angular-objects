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

    $scope.tips = [];
    $scope.validation = function() {
        return $scope.mealprice > 0;
    };
    $scope.onSubmit = function(e) {
        if ($scope.validation()) {
            $scope.tips.push($scope.tip());
            $scope.mealprice = 0;
        }
        console.log($scope.tips);
        e.preventDefault();
    };
    $scope.tiptotal = function() {
        return $scope.tips.reduce(function(a,b){ return a+b; }, 0);
    };
    $scope.mealcount = function() {
        return $scope.tips.length;
    };
    $scope.averagetip = function() {
        if ($scope.mealcount()) {
            return $scope.tiptotal() / $scope.mealcount();
        } else {
            return 0;
        }
    };
    $scope.onReset = function(e) {
         $scope.tips = [];
    };
});
