'use strict';

angular.module( 'mySite.tech' )

.config( function( $stateProvider ) {
  $stateProvider.state( 'tech.projects', {
  	url: '/projects',
  	templateUrl: 'tech/projects/projects.tpl.html'
  });
 });
