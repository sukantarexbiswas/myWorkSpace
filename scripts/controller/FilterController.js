/**
 * Created by Training_h2a.09.20 on 11/3/2016.
 */
var app = angular.module("FilterApp");
app.controller("FilterController",function ($scope) {
    $scope.now = new Date();
    $scope.numbers = [101,102,103,104];
    $scope.users = [
        {id:101, name:"Sukanta" ,age:20, city:"Kolkata"},
        {id:102, name:"Indra" ,age:21, city:"Delhi"},
        {id:103, name:"Anuj" ,age:22, city:"Mumbai"},
        {id:104, name:"Rahul" ,age:23, city:"Chennai"}
    ];
});


app.controller("FormCtrl",function ($scope) {
    $scope.response="";
    $scope.cities=['Pune','Kolkata','Delhi'];
    $scope.handelRequest = function () {
        $scope.response = "Form data received";
    };
});


