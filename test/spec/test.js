/* global describe, it, assert, sites */

(function (sites) {
  'use strict';

  describe('maybe a bit more context here', function () {
    it('should run here few assertions', function () {
      assert.equal(true, sites.length > 1);
      for (var i = 0; i < sites.length; i++) {
        var item = sites[i];
        assert.equal(true, typeof item.name === 'string');
        assert.equal(true, item.items.length >= 1);
        for (var j = 0; j < item.items[j]; j++) {
          var site = item.items[j];
          assert.equal(true, typeof site.name === 'string');
          assert.equal(true, typeof site.url === 'string');
          assert.equal(true, typeof site.favicon === 'string');
        }
      }
    });
  });
})(sites);
