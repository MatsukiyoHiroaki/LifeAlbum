(function() {
  'use strict';

  describe('Controller: MenuController', function() {

    beforeEach(module('LifeAlbum.components.menu'));

    var MenuController;

    beforeEach(inject(function($controller) {
      MenuController = $controller('MenuController');
    }));

    describe('MenuController', function() {
      it('Test Case', function() {
        MenuController.activate();
      });
    });
  });
})();
