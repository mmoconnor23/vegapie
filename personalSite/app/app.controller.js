'use strict';

function appCtrl( appState ) {
	var vm = this;
	
	vm.myState = appState.getAppState();
	vm.selectedTabIndex = vm.myState.selectedTabIndex;

	vm.tabs = [
		{
			name: 'Home',
			link: 'home'
		},
		{
			name: 'About',
			link: 'about'
		},
		{
			name: 'Tech',
			link: 'tech'
		},
		{
			name: 'Current Work',
			link: 'current'
		}
	];

	vm.buttons = [
		{
			label: 'Github',
			href: 'http://github.com/mmoconnor23',
			icon: 'img/webicons-master/webicons/webicon-github.svg'
		},
		{
			label: 'Twitter',
			href: 'http://twitter.com/bissamissa',
			icon: 'img/webicons-master/webicons/webicon-twitter.svg'
		},
		{
			label: 'LinkedIn',
			href: 'http://www.linkedin.com/pub/melissa-o-connor/35/201/80/en',
			icon: 'img/webicons-master/webicons/webicon-linkedin.svg'
		},
		{
			label: 'Gmail',
			href: 'mailto:mmoconnor23@gmail.com',
			icon: 'img/webicons-master/webicons/webicon-mail.svg'
		}
	];

	vm.onTabSelected = function( tab ) {
		//console.log( tab );
		console.log( 'selected: ' + vm.selectedTabIndex );
	};

	vm.onTabDeselected = function( tab ) {
		//console.log( tab );
		console.log( 'deselected: ' + vm.selectedTabIndex );
	};
}

appCtrl.$inject = [ 'appState' ];

angular.module('mySite')
.controller( 'appCtrl', appCtrl );