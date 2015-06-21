'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', [
  'mySite.home',
  'mySite.tech',
  'mySite.about',
  'ngMaterial',
  'ui.router'
])
.run( [ '$state', function( $state ) {
	$state.transitionTo( 'home' );
}])
.config( [ '$urlRouterProvider', function( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( 'home' );
}])
.config( [ '$mdThemingProvider', function( $mdThemingProvider ) {
	$mdThemingProvider.theme( 'default' )
		.primaryPalette( 'deep-purple' )
		.accentPalette( 'teal' );
}]);
