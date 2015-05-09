'use strict';

function aboutCtrl( appState ) {
	var vm = this;

	vm.aboutMe = [
		{
			picLocation: 'img/grad_pic.jpg',
			text: 'I graduated from Swarthmore College in June 2014 ' +
					'with a B.A. in computer science.',
			height: 168,
			width: 168
		},
		{
			picLocation: 'img/theta.jpg',
			text: 'I was a member of the Alpha Beta chapter of Kappa ' +
					'Alpha Theta while in college.',
			height: 225,
			width: 300
		},
		{
			picLocation: 'img/softball.jpg',
			text: 'I started travel softball around the age of 10 and ' +
					'continued playing through my senior year of ' +
					'college. I\'ll always be a princess pitcher.',
			height: 300,
			width: 269
		}
	];
}

homeCtrl.$inject = [ 'appState' ];

angular.module( 'mySite.about' )
.controller( 'aboutCtrl', aboutCtrl );