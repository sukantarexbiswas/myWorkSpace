/**
 * Created by Training_h2a.09.20 on 11/4/2016.
 */
var app = angular.module("FilterApp");
app.controller("CalController",function ($scope,CalcFactory) {
    $scope.add=0;
    $scope.sub=0;
    $scope.mul=0;
    $scope.div=0;
    $scope.calculate = function () {
        $scope.add=CalcFactory.addNumber($scope.num1,$scope.num2);
        $scope.sub=CalcFactory.subNumber($scope.num1,$scope.num2);
        $scope.mul=CalcFactory.mulNumber($scope.num1,$scope.num2);
        $scope.div=CalcFactory.divNumber($scope.num1,$scope.num2);
    }

});