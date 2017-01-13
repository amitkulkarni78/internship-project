var app = angular.module("APP",[]);

app.controller("MainCtrl",function($scope,$http){

	$scope.imagelist = [];

	 $http.get("json/imagelist.json").then(function(response){
	 	$scope.imagelist = response.data;
	 	console.log($scope.imagelist);
	 });
});
