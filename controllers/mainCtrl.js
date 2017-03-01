angularApp.controller('MainCtrl', [
	'$firebaseObject',
	'$scope',
	function($firebaseObject, $scope){
		/* firebase */
		var firebase = new Firebase("https://movies-84898.firebaseio.com/movies");
		var syncObject = $firebaseObject(firebase);
		syncObject.$bindTo($scope, "movies");
	}
]);