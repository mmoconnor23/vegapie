'use strict';

angular.module('vegapie.home', ['ui.router'])
.config(($stateProvider) => {
  $stateProvider.state('home', {
  	url: 'home',
  	templateUrl: 'src/home/home.tpl.html'
  });
 });