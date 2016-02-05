(function() {
  'use strict';

  describe('Controller: SlideshowController', function() {

    beforeEach(module('LifeAlbum.components.slideshow'));

    var SlideshowController;

    beforeEach(inject(function($controller) {
      SlideshowController = $controller('SlideshowController');
    }));

    describe('SlideshowController', function() {
      it('Test Case', function() {
        SlideshowController.activate();
      });
    });
  });
})();
