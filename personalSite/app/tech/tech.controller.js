'use strict';

function techCtrl() {
	var vm = this;

	vm.techTabs = [
		{
			label: 'Coursework',
			tpl: 'tech/coursework/coursework.tpl.html'
		},
		{
			label: 'Skills',
			tpl: 'tech/skills/skills.tpl.html'
		},
		{
			label: 'Projects',
			tpl: 'tech/projects/projects.tpl.html'
		}
	];

	vm.onButtonPress = function( shortcut ) {
		appState.setSelectedTabIndex( shortcut.tabIndex );
	}
}

techCtrl.$inject = [];

angular.module( 'mySite.tech' )
.controller( 'techCtrl', techCtrl );