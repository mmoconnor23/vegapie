'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', [
  'mySite.resume',
  'mySite.about',
  'mySite.version',
  'ui.router'
])
.run( [ '$state', function( $state ) {
	$state.transitionTo( 'about' );
}])
.config( [ '$urlRouterProvider', function( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( 'about' );
}]);
