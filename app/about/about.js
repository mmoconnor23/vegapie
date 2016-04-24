'use strict';

angular.module('vegapie.about', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'about', {
  	url: 'about',
  	templateUrl: 'about/about.tpl.html'
  });
 });