function AddRecipeCtrl($http) {
	var _this = this;

	_this.name = '';

	_this.addRecipe = function() {
		$http({
			method: 'POST',
			url: '/addrecipe',
			data: {
				name: _this.name
			}
		}).then(function(response) {
			console.log(response);
		});
	};
}

AddRecipeCtrl.$inject = ['$http'];

angular
	.module('vegapie')
	.controller('addRecipeCtrl', AddRecipeCtrl);
