/**
 * Created by Training_h2a.09.20 on 11/4/2016.
 */
var app = angular.module("FilterApp");
app.factory("TestFactory",function ($http) {
    var obj;
    obj = {
                getDetails : function ()
                {
                    var promise = $http.get("test.dat").then(
                        function (response) {//Success callback
                            return "Data - "+response.data +" Status - "+response.status + " TextStatus - "+response.statusText;
                        },
                        function (response) {//Failure callback
                            return "Data - "+response.data +" Status - "+response.status + " TextStatus - "+response.statusText;
                        })
                    return promise;
                }
          }
          return obj;
});