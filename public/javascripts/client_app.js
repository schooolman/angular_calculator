var app = angular.module('calculatorApp', []);

app.controller("MainController", ["$scope", "$http", function($scope, $http){

    $scope.mathFirstValue = 0;
    $scope.mathSecondValue = 0;
    $scope.sendData = [];

    $scope.mathExpression = 0;

    //$scope.addButton = false;
    //$scope.subtractButton = false;
    //$scope.multiplyButton = false;
    //$scope.divisionButton = false;


    $scope.submit = function (){

        //console.log($scope.mathFirstValue + $scope.mathSecondValue);
        console.log("EQUALS!!!");
        $scope.sendData.push($scope.mathFirstValue);
        $scope.sendData.push($scope.mathSecondValue);
        var data = {nums: $scope.sendData};


        //$http({
        //    method: 'POST',
        //    url: '/calculator'
        //})

        $http.post('/calculator', data).then(function (newdata){
                console.log("calculator route");
                console.log(newdata);
            }
        );

        console.log($scope.sendData);

    };

    $scope.calculationAdd = function(){
        $scope.mathExpression = 0;
        console.log($scope.addButton);
        $scope.sendData.push($scope.mathExpression);

    };

    $scope.calculationSubtract = function(){
        $scope.mathExpression = 1;
        console.log($scope.subtractButton);
        $scope.sendData.push($scope.mathExpression);

    };

    $scope.calculationMultiply = function(){
        $scope.mathExpression = 2;
        console.log($scope.multiplyButton);
        $scope.sendData.push($scope.mathExpression);
    };

    $scope.calculationDivide = function(){
        $scope.mathExpression = 3;
        console.log($scope.divisionButton);
        $scope.sendData.push($scope.mathExpression);
    };



}]);