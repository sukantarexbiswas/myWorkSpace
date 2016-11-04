/**
 * Created by Training_h2a.09.20 on 11/4/2016.
 */
var app = angular.module("FilterApp");
app.service("CalcService",function () {
   this.addNumber = function (num1,num2) {
       return num1+num2;
   }
    this.subNumber = function (num1,num2) {
        return num1-num2;
    }
    this.mulNumber = function (num1,num2) {
        return num1*num2;
    }
    this.divNumber = function (num1,num2) {
        return num1/num2;
    }
    // Service returns nothing
});

app.service("CalcFactory",function () {
    var factoryObj= {
        addNumber : function (num1, num2) {
        return num1 + num2;
    },
    subNumber : function (num1, num2) {
        return num1 - num2;
    },
    mulNumber : function (num1, num2) {
        return num1 * num2;
    },
    divNumber : function (num1, num2) {
        return num1 / num2;
    }
}
        //Factory returns a object
return factoryObj;
});


