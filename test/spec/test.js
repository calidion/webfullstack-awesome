/*global assert:true*/
/*eslint no-undef: 2*/
(function (assert) {
  'use strict';

  describe('Full stack web developer\'s sites guidance', function () {
    it('should run a few assertions here', function () {
      console.log(window);
      var sites = window.sites;
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
})(assert);
