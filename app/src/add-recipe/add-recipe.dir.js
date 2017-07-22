angular.module('vegapie')
.directive('addRecipe', function() {
	return {
		restrict: 'E',
		templateUrl: 'src/add-recipe/add-recipe.tpl.html',
		scope: {},
		controller: 'addRecipeCtrl as ctrl',
		bindToController: true
	};
});