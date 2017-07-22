'use strict';

angular.module('vegapie.about', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'about', {
  	url: 'about',
  	templateUrl: 'src/about/about.tpl.html'
  });
 });