'use strict';

function appCtrl( appState ) {
	var vm = this;

	vm.tabs = [
		{
			title: 'Home',
			route: 'home'
		},
		{
			title: 'Recipes',
			route: 'recipes'
		},
		{
			title: 'About',
			route: 'about'
		}
	];
}

appCtrl.$inject = [];

angular.module('vegapie')
.controller( 'appCtrl', appCtrl );