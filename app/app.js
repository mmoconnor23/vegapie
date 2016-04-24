'use strict';

// Declare app level module which depends on views, and components
angular.module('vegapie', [
  'vegapie.home',
  'vegapie.recipes',
  'vegapie.about',
  'ui.router',
  'ui.bootstrap'
])
.run( [ '$state', function( $state ) {
	$state.transitionTo( 'home' );
}])
.config( [ '$urlRouterProvider', function( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( 'home' );
}]);
