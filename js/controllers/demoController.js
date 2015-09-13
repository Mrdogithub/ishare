var demoController = angular.module('demoController', []);

demoController.controller('indexCtrl',['$scope',function($scope){

	$scope.testController = "controller works";

}]);