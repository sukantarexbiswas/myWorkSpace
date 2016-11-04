/**
 * Created by Training_h2a.09.20 on 11/3/2016.
 */
var app = angular.module("FilterApp",['ui.router']);
app.filter("myFilter",function () {

    return function (data,sIndex,lIndex) {
        // Data Formatting logic comes here
        return data.substring(sIndex,lIndex);
    }
});

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.
    state("home",{url:'/home', templateUrl : "views/home.html", controller:"HomeController"}).
        state("home.list",{url:'/home', template : "This is list -"+"<ul> <li ng-repeat=l in list>{{l}}</li></ul>"}).
        state("home.para",{url:'/home', template : "This is paragraph"}).
            state("about",{url:'/about', templateUrl : "views/aboutus.html",controller:"AboutController"}).
                state("contact",{url:'/contact',
                                views:{
                                    '':{
                                        templateUrl : "views/contact.html",
                                        controller:"ContactController"
                                        },
                                    'view1@contact':{template:"<b> View1 @ contact</b>"},
                                    'view2@contact':{template:"<b> View2 @ contact</b>"}
                                }
    });
});

app.controller("HomeController",function ($scope) {
    $scope.list=["Hello","World"];
});
app.controller("ContactController",function ($scope) {});
app.controller("AboutController",function ($scope) {});
