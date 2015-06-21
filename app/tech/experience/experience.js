'use strict';

angular.module( 'mySite.tech' )

.config( function( $stateProvider ) {
  $stateProvider.state( 'tech.experience', {
  	url: '/experience',
  	templateUrl: 'tech/experience/experience.tpl.html',
  	controller: 'experienceCtrl',
  	controllerAs: 'ctrl'
  });
 });