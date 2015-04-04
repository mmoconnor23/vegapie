'use strict';

angular.module('mySite.projects', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'projects', {
  	url: 'projects',
  	templateUrl: 'projects/projects.tpl.html'
  });
 });

//.controller('projectsCtrl', [function() {
//
//}]);