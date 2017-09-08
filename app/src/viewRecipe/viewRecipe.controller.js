class ViewRecipesCtrl {
	constructor(recipeData, 
							$stateParams) {
		'ngInject';

		//TODO: why does this get called 3 times??
		//wait for this before continuing
		recipeData.getRecipeById($stateParams.recipeId).then((recipe) => {
			this.recipe = recipe;
			console.log(this.recipe);
		});
	}
}

angular
	.module('vegapie')
	.controller('viewRecipesCtrl', ViewRecipesCtrl);
