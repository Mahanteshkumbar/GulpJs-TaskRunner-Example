angular.module("MyApp",[])
.controller('BodyCtrl',function ($scope) {
	// body...
	$scope.message = "GulpJs and AngularJS Example";
	$scope.plug = [{"name":"gulp-jshint"},{"name":"gulp-htmlmin"},{"name":"gulp-concat"}]	
});