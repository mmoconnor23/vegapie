class RecipesCtrl {
	constructor(recipeData,
							$state) {
	  'ngInject';

		this.$state = $state;
		this.categories = recipeData.getCategories();

		recipeData.getRecipes().then((recipes) => {
			this.allRecipes = _.cloneDeep(recipes);
			this.recipes = this.allRecipes;
		});
	}

	//TODO: persist state of checkboxes in service and re-initialize when setting view

	filterByCategory(category) {
		console.log(this.selectedCategories);
	}

	filterVegetarian() {
		if (this.isVegetarian) {
			this.recipes = _.filter(this.allRecipes, {isVegetarian: true});
		} else {
			this.recipes = this.allRecipes;
		}
	}

	switchViewTo(id){
		this.$state.go('^.viewRecipe', {recipeId: id});
	}
}

angular
	.module('vegapie')
	.controller('recipesCtrl', RecipesCtrl);
