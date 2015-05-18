'use strict';

angular.module( 'mySite.tech' )

.config( function( $stateProvider ) {
  $stateProvider.state( 'tech.coursework', {
  	url: '/coursework',
  	templateUrl: 'tech/coursework/coursework.tpl.html',
  	controller: 'courseworkCtrl',
  	controllerAs: 'ctrl'
  });
 });