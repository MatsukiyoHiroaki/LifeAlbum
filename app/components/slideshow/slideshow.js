/**
 * Slideshow Components module.
 *
 * @module LifeAlbum.components.slideshow
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum.components.slideshow', [])
    .controller('SlideshowController', SlideshowController);

  SlideshowController.$inject = [];

  /**
   * SlideshowController
   *
   * @class SlideshowController
   * @constructor
   */
  function SlideshowController() {
    console.log('SlideshowController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  SlideshowController.prototype.activate = function() {
    console.log('SlideshowController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
