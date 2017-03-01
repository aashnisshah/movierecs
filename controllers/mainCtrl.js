angularApp.controller('MainCtrl', [
	'$firebaseObject',
	'$scope',
	function($firebaseObject, $scope){
		$scope.heading = "Hello World";
		$scope.message = "This is me";

		/* firebase */
		var firebase = new Firebase("https://movies-84898.firebaseio.com/movies");
		$scope.movies = $firebaseObject(firebase);
	}
]);