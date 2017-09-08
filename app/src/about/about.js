'use strict';

angular.module('vegapie.about', ['ui.router'])
.config(( $stateProvider) => {
  $stateProvider.state('about', {
  	url: 'about',
  	templateUrl: 'src/about/about.tpl.html'
  });
 });