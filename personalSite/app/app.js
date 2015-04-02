'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', [
  'mySite.home',
  'mySite.resume',
  'mySite.about',
  'mySite.version',
  'ui.router'
])
.run( [ '$state', function( $state ) {
	$state.transitionTo( 'home' );
}])
.config( [ '$urlRouterProvider', function( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( 'home' );
}]);
