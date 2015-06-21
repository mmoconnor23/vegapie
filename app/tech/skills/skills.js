'use strict';

angular.module( 'mySite.tech' )

.config( function( $stateProvider ) {
  $stateProvider.state( 'tech.skills', {
  	url: '/skills',
  	templateUrl: 'tech/skills/skills.tpl.html',
  	controller: 'skillsCtrl',
  	controllerAs: 'ctrl'
  });
 });