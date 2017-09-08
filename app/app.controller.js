'use strict';

class AppCtrl {
	constructor() {
		'ngInject';

		this.tabs = [
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

		this.active = 1; //Recipes tab
	}
}

angular.module('vegapie')
			 .controller( 'appCtrl', AppCtrl );