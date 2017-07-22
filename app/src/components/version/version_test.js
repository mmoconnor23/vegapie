'use strict';

describe('mySite.version module', function() {
  beforeEach(module('mySite.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
