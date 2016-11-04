
var app = angular.module("ControllerApp",[]);

//Create a controller
app.controller("CalController",function ($scope) {

    $scope.list=[1,2,3];
    $scope.num1="";
    $scope.num2="";
    $scope.calculate = function () {
        return parseInt($scope.num1+$scope.num2);
    };
});