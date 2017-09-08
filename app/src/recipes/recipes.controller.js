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

	//TODO: if any of the filters get applied, need to rerun the others...
	filterByCategory(category) {
		let selectedCategories = _.chain(this.selectedCategories)
			.pickBy((state) => state)
			.keys()
			.value();

		let currentRecipes = _.filter(this.recipes, {isVegetarian: true});

		// if (!selectedCategories.length) {
		// 	this.recipes = this.allRecipes;
		// } else {
			this.recipes = _.filter(this.recipes, (recipe) => {
				return _.every(selectedCategories, (category) => {
					return recipe.categories.includes(category);
				})
			});
		// }
	}

	filterVegetarian() {
		if (this.isVegetarian) {
			this.recipes = _.filter(this.recipes, {isVegetarian: true});
		} else {
			this.recipes = this.filterByCategory;
		}
	}

	searchRecipes() {
		if (!this.searchText.length) {
			this.recipes = this.allRecipes;
		} else {
			this.recipes = _.filter(this.recipes, (recipe) => {
				return recipe.title.toLowerCase().includes(this.searchText.toLowerCase());
			});
		}
	}

	switchViewTo(id){
		this.$state.go('^.viewRecipe', {recipeId: id});
	}
}

angular
	.module('vegapie')
	.controller('recipesCtrl', RecipesCtrl);
