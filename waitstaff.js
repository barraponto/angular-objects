angular.module('Waitstaff', [])
.controller('WaitstaffCtrl', function($scope){
    $scope.waiter = new Waiter();
    $scope.meal = new Meal();

    $scope.onSubmit = function(e) {
        $scope.waiter.addTip($scope.meal.tip());
        $scope.meal = new Meal();
    };
});
