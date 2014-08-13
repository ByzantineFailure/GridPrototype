angular.module('gridPrototype', [])
.controller('gridController', ['$scope', function($scope) {
	$scope.inputRows = 7;
	$scope.grid = function(gridSize) {
		var size = $scope.inputRows;

		var result = [];
		for(var i = 0; i < size; i++) {
			var currentRow = [];
			var value = "space-purple";
			if(i % 2 == 1) {
			       value = "space-pink";
			}
			for(var j = 0; j < size; j++) {
				var valueObj = { value: value, gridSquare: "(" + i "," + j + ")"};
				currentRow.push(valueObj);
				if((j + i) % 2 == 1) {
					value = "space-purple";
				} else {
					value = "space-pink";
				}
			}
			result.push(currentRow);
		}
		return result;
	};
	/*
	$scope.items = [
		[ { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 } ],
		[ { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 } ],
		[ { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 } ],
		[ { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 } ],
		[ { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 } ],
		[ { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 } ],
		[ { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 0 }, { value: 1 } ],
	];
	*/
}]);
