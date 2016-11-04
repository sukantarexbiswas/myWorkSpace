/**
 * Created by Training_h2a.09.20 on 11/2/2016.
 */

var app=angular.module("TableApp",[]);
app.controller("TableCtrl",function ($scope) {

    $scope.newEmp={};
    $scope.cities=['Kolkata','Delhi','Mumbai'];
    $scope.employee={};
    $scope.people = [
        {name:'Sukanta', age: 23, location: 'Kolkata'}
    ];

    $scope.addPerson = function(){
        var person = {
            name: $scope.name,
            age: $scope.age,
            title: $scope.location,
        };
        $scope.people.push(person);
    };

    $scope.removePerson = function(index){
        $scope.people.splice(index, 1);
    };
});
