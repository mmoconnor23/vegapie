'use strict';

angular.module('mySite.resume', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'resume', {
  	url: '/resume',
  	templateUrl: 'resume/resume.tpl.html'
  });
 });

//.controller('resumeCtrl', [function() {
//
//}]);