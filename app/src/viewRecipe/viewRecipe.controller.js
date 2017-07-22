function ViewRecipesCtrl(recipeData, $stateParams) {
	var _this = this;

	//TODO: why does this get called 3 times??
	//wait for this before continuing
	recipeData.getRecipeById($stateParams.recipeId).then((recipe) => {
		_this.recipe = recipe;
		console.log(_this.recipe);
	});
}

ViewRecipesCtrl.$inject = [
	'recipeData',
	'$stateParams',
];

angular
	.module('vegapie')
	.controller('viewRecipesCtrl', ViewRecipesCtrl);
