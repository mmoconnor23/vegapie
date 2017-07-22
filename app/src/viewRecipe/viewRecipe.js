'use strict';

angular.module('vegapie.recipes')
.config( function( $stateProvider ) {
  $stateProvider.state( 'viewRecipe', {
  	url: '/viewRecipe/:recipeId',
  	templateUrl: 'src/viewRecipe/viewRecipe.tpl.html',
  	controller: 'viewRecipesCtrl as ctrl'
  });
});