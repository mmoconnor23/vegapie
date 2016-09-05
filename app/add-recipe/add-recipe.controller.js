function AddRecipeCtrl($http) {
	var _this = this;

	_this.addRecipe = function() {
		console.log(_this.contributor);
		$http({
			method: 'POST',
			url: '/addrecipe',
			data: {
				contributor: _this.contributor,
				title: _this.title,
				ingredients: _this.ingredients,
				steps: _this.steps,
				description: _this.description,
				category: _this.category,
			}
		}).then(function(response) {
			console.log(response);
			//TODO: alert success
		});
	};
}

AddRecipeCtrl.$inject = ['$http'];

angular
	.module('vegapie')
	.controller('addRecipeCtrl', AddRecipeCtrl);
