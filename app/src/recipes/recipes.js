'use strict';

angular.module('vegapie.recipes', ['ui.router'])
.config(( $stateProvider) => {
  $stateProvider.state('recipes', {
  	url: '/recipes',
  	templateUrl: 'src/recipes/recipes.tpl.html',
  	controller: 'recipesCtrl as ctrl'
  });
});