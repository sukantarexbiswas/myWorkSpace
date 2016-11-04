/**
 * Created by Training_h2a.09.20 on 11/2/2016.
 */

//Create a module using angular.module
var app = angular.module("ControllerApp",[]);

//Create a controller
    app.controller("Controller1",function ($scope) {
        $scope.message="This is my first controller";
        $scope.name = "";
        $scope.sayHello = function () {
        return "Hello "+$scope.name;
    };
});

app.controller("CalController",function ($scope) {
    $scope.num1="";
    $scope.num2="";
    $scope.calculate = function () {
        return $scope.num1+$scope.num2;
    };
});