'use strict';

angular.module('mySite.version', [
  'mySite.version.interpolate-filter',
  'mySite.version.version-directive'
])

.value('version', '0.1');
