(function() {
  'use strict';

  describe('Controller: CalendarController', function() {

    beforeEach(module('LifeAlbum.components.calendar'));

    var CalendarController;

    beforeEach(inject(function($controller) {
      CalendarController = $controller('CalendarController');
    }));

    describe('CalendarController', function() {
      it('Test Case', function() {
        CalendarController.activate();
      });
    });
  });
})();
