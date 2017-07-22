'use strict';

function appState( $state ) {
	//$state.transitionTo( 'home' );
	var myState = {
		tabIndex: 0
	};

	function getAppState() {
		return myState;
	}

	function setSelectedTabIndex( index ) {
		myState.tabIndex = index;
	}

	return {
		getAppState: getAppState,
		setSelectedTabIndex: setSelectedTabIndex
	}
}

angular.module( 'mySite' )
.service( 'appState', appState );