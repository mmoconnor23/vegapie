'use strict';

function homeCtrl( appState ) {
	var vm = this;

	vm.shortcuts = [
		{
			name: 'About »',
			header: 'About Me',
			icon: 'img/Star_empty_font_awesome.svg',
			description: 'Learn more about me.',
			link: 'about',
			tabIndex: 1
		},
		{
			name: 'Tech »',
			header: 'My Technical Background',
			icon: 'img/Laptop_font_awesome.svg',
			description: 'Past projects I\'ve worked on',
			link: 'tech',
			tabIndex: 2
		},
		{
			name: 'Job Experience »',
			header: 'My Technical Work Experience',
			icon: 'img/Building_font_awesome.svg',
			description: 'The real-world technical experience I\'ve had',
			link: 'job',
			tabIndex: 3
		}
	];

	vm.onButtonPress = function( shortcut ) {
		appState.setSelectedTabIndex( shortcut.tabIndex );
	}
}

homeCtrl.$inject = [ 'appState' ];

angular.module( 'mySite.home' )
.controller( 'homeCtrl', homeCtrl );