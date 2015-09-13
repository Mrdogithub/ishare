var route = angular.module('myApp',['ngRoute','demoController','demoDirectives']);
route.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'template/index.html',
			controller:'indexCtrl'
		})
}])
