/**
 * Created by Training_h2a.09.20 on 11/4/2016.
 */
describe("Hello World Test",function () { //TestSuite
    beforeEach(module('TestApp'));

    var helloWorld,scope;
    beforeEach(inject(function ($rootScope,$controller) {
            scope = $rootScope.$new();
            helloWorld = $controller('HelloController',{
                $scope : scope
                });
        }));
   it("Test Hello World",function () {      //TestCase
        expect(scope.message).toEqual("Hello World");
   });
})