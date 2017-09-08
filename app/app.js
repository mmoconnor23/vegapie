'use strict';

// Declare app level module which depends on views, and components
angular.module('vegapie', [
  'vegapie.home',
  'vegapie.recipes',
  'vegapie.about',
  'ui.router',
  'ui.bootstrap'
])
.run(['$state', ($state) => {
  toastr.options.closeButton = true;
  toastr.options.progressBar = true;
  $state.transitionTo('recipes');
}])
.config(['$urlRouterProvider', ($urlRouterProvider) => $urlRouterProvider.otherwise('recipes')]);
