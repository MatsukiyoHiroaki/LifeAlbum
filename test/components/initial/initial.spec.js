(function() {
  'use strict';

  describe('Controller: InitialController', function() {

    beforeEach(module('LifeAlbum.components.initial'));

    var InitialController;

    beforeEach(inject(function($controller) {
      InitialController = $controller('InitialController');
    }));

    describe('InitialController', function() {
      it('Test Case', function() {
        InitialController.activate();
      });
    });
  });
})();
