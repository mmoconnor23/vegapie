function RecipesCtrl(recipeData, $state) {
	var _this = this;
	var allRecipes;

	_this.categories = recipeData.getCategories();

	recipeData.getRecipes().then(function(recipes) {
		allRecipes = _.cloneDeep(recipes);
		_this.recipes = allRecipes;
	});

	//TODO: persist state of checkboxes in service and re-initialize when setting view

	_this.filterByCategory = function(category) {
		console.log(_this.selectedCategories);
	};

	_this.filterVegetarian = function() {
		if (_this.isVegetarian) {
			_this.recipes = _.filter(allRecipes, {isVegetarian: true});
		} else {
			_this.recipes = allRecipes;
		}
	};

	_this.switchViewTo = (id) => {
		$state.go('^.viewRecipe', {recipeId: id});
	};
}

RecipesCtrl.$inject = [
	'recipeData', 
	'$state',
];

angular
	.module('vegapie')
	.controller('recipesCtrl', RecipesCtrl);
