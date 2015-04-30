var app = angular.module('sitabook', []);

app.controller('customize', ['$scope', function($scope) {
	$scope.machine=15800;
	$scope.cpu=6000;
	$scope.ram=2000;
	$scope.sata1=3100;
}]);