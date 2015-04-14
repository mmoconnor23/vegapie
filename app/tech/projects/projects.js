'use strict';

angular.module('mySite.tech', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'tech.projects', {
  	url: 'projects',
  	templateUrl: 'tech/projects/projects.tpl.html'
  });
 });

//.controller('techCtrl', [function() {
//
//}]);