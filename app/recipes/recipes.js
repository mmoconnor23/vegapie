'use strict';

angular.module('vegapie.recipes', ['ui.router'])
.config( function( $stateProvider ) {
  $stateProvider.state( 'recipes', {
  	url: '/recipes',
  	templateUrl: 'recipes/recipes.tpl.html',
  	controller: 'recipesCtrl as ctrl'
  });

  $stateProvider.state( 'recipes.detail', {
  	url: '/{recipeId}',
  	templateUrl: 'recipes/viewRecipe/viewRecipe.tpl.html',
  	controller: 'viewRecipesCtrl as ctrl'
  });
 });