(function() {
  'use strict';

  describe('Controller: WatchmenuController', function() {

    beforeEach(module('LifeAlbum.components.watchmenu'));

    var WatchmenuController;

    beforeEach(inject(function($controller) {
      WatchmenuController = $controller('WatchmenuController');
    }));

    describe('WatchmenuController', function() {
      it('Test Case', function() {
        WatchmenuController.activate();
      });
    });
  });
})();
