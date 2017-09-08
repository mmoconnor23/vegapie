class AddRecipeCtrl {
	constructor($http) {
		'ngInject';

		this.$http = $http;
		this.uniqueId = 0;
	}

	addRecipe(recipe) {
		console.log(recipe.contributor);
		this.isOpen = false;
		this.$http({
			method: 'POST',
			url: '/addrecipe',
			data: {
				contributor: recipe.contributor,
				title: recipe.title,
				ingredients: recipe.ingredients,
				steps: recipe.steps,
				description: recipe.description,
				category: recipe.category,
				id: (this.uniqueId++).toString(), //TODO: generate unique recipe id
			}
		}).then((response) => {
			console.log(response);
			if (response.status === 200) {
				toastr.success('Recipe posted');
			}
			//TODO: alert success, use a toast
		});
	};
}

angular
	.module('vegapie')
	.controller('addRecipeCtrl', AddRecipeCtrl);
