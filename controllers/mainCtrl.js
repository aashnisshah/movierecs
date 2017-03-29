angularApp.controller('MainCtrl', [
	'$firebaseObject',
	'$http',
	'$scope',
	function($firebaseObject, $http, $scope){
		/* secrets */
		$scope.api_key = "cae5ca8313d252a8b38a677777fcbcd5";

		/* firebase */
		var firebase = new Firebase("https://movies-84898.firebaseio.com/movies");
		var syncObject = $firebaseObject(firebase);
		syncObject.$bindTo($scope, "movies");

		$scope.search = function(movie) {
			console.log("Begin querying for " + movie.name);

			var queryString = "https://api.themoviedb.org/3/search/movie?api_key=" + $scope.api_key + "&language=en-US&query=" + movie.name + "";
			$http.get(queryString)
				.then(
					function(response) {
						$scope.details = response.data;
						console.log($scope.details);
				});

		}
	}
]);