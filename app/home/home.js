'use strict';

angular.module('vegapie.home', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
  	url: 'home',
  	templateUrl: 'home/home.tpl.html'
  });
 });