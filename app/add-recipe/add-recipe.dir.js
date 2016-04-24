angular.module('vegapie')
.directive('addRecipe', function() {
	return {
		restrict: 'E',
		templateUrl: 'add-recipe/add-recipe.tpl.html',
		scope: {},
		controller: 'addRecipeCtrl',
		controllerAs: 'ctrl',
		bindToController: true
	};
});