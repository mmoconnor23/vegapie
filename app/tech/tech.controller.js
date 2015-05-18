'use strict';

function techCtrl( $state ) {
	var vm = this;

	$state.transitionTo( 'tech.coursework' );

	vm.techTabs = [
		{
			label: 'Coursework',
			link: 'tech.coursework'
		},
		{
			label: 'Skills',
			link: 'tech.skills'
		},
		{
			label: 'Projects',
			link: 'tech.projects'
		}
	];

	vm.onButtonPress = function( shortcut ) {
		appState.setSelectedTabIndex( shortcut.tabIndex );
	}
}

techCtrl.$inject = [ '$state' ];

angular.module( 'mySite.tech' )
.controller( 'techCtrl', techCtrl );