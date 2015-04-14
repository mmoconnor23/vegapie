'use strict';

angular.module('mySite.tech', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'tech', {
  	url: 'tech',
  	templateUrl: 'tech/tech.tpl.html',
  	controller: 'techCtrl',
  	controllerAs: 'techCtrl'
  });
 });
