'use strict';

angular.module('mySite.about', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'about', {
  	url: '/about',
  	templateUrl: 'about/about.tpl.html'
  });
 });

//.controller('aboutCtrl', [function() {
//
//}]);