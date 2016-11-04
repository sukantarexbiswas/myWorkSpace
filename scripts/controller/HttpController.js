/**
 * Created by Training_h2a.09.20 on 11/4/2016.
 */
var app = angular.module("FilterApp");
app.controller("TestController",function ($scope,TestFactory) {
    $scope.sendRequest = function () {
        TestFactory.getDetails().then(function (response) {
            $scope.resData=response;
        });

    };
});