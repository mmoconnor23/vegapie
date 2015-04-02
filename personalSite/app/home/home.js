'use strict';

angular.module('mySite.home', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
  	url: 'home',
  	templateUrl: 'home/home.tpl.html'
  });
 });

//.controller('homeCtrl', [function() {
//
//}]);