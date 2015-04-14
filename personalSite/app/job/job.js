'use strict';

angular.module('mySite.job', ['ui.router'])

.config( function( $stateProvider ) {
  $stateProvider.state( 'job', {
  	url: 'job',
  	templateUrl: 'job/job.tpl.html'
  });
 });

//.controller('jobCtrl', [function() {
//
//}]);