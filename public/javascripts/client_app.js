var app = angular.module('calculatorApp', []);

app.controller("MainController", ["$scope", "$http", function($scope, $http){

    $scope.mathFirstValue = 0;
    $scope.mathSecondValue = 0;
    $scope.sendData = [];

    $scope.mathExpression = "";
    $scope.finalAnswer = 0;

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
                $scope.finalAnswer = newdata.data;
            }
        );
        $scope.sendData = [];

        console.log($scope.sendData);

    };

    $scope.calculationAdd = function(){
        $scope.mathExpression = "add";
        //console.log($scope.addButton);
        if($scope.sendData.length == 1){
            $scope.sendData.pop();
            $scope.sendData.push($scope.mathExpression);
        }else{
            $scope.sendData.push($scope.mathExpression);
        }

    };

    $scope.calculationSubtract = function(){
        $scope.mathExpression = "subtract";
        if($scope.sendData.length == 1){
            $scope.sendData.pop();
            $scope.sendData.push($scope.mathExpression);
        }else {
            console.log($scope.subtractButton);
            $scope.sendData.push($scope.mathExpression);
        }
    };

    $scope.calculationMultiply = function(){
        $scope.mathExpression = "multiply";
        console.log($scope.multiplyButton);
        if($scope.sendData.length == 1){
            $scope.sendData.pop();
            $scope.sendData.push($scope.mathExpression);
        }else {
            $scope.sendData.push($scope.mathExpression);
        }
    };

    $scope.calculationDivide = function(){
        $scope.mathExpression = "divide";
        console.log($scope.divisionButton);
        if($scope.sendData.length == 1){
            $scope.sendData.pop();
            $scope.sendData.push($scope.mathExpression);
        }else {
            $scope.sendData.push($scope.mathExpression);
        }
    };



}]);