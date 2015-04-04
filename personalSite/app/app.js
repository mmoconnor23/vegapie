'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', [
  'mySite.home',
  'mySite.projects',
  'mySite.about',
  'mySite.version',
  'ui.router',
  'ngMaterial'
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
