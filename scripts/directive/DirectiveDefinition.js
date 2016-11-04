/**
 * Created by Training_h2a.09.20 on 11/4/2016.
 */
var app = angular.module("FilterApp");
app.directive('myFirstDirective',function () {
   return {
       //Return directive definition from this constructor
       restrict : 'E',
       template : "<p> This is my first directive</p>"
   }
});

app.directive('displayUser',function () {
    return {
        //Return directive definition from this constructor
        restrict : 'E',
        template : "<p><h3> Name : {{user.Name}} <br> Age : {{user.Age}}</h3></p>"
    }
});

app.controller('UserController',function ($scope) {
    $scope.user = {
        "Name" : "Sukanta",
        "Age"  : 24
    }
});