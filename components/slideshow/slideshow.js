/**
 * Slideshow Components module.
 *
 * @module LifeAlbum.components.slideshow
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum.components.slideshow', ['firebase'])
    .controller('SlideshowController', SlideshowController);

  SlideshowController.$inject = ['$firebaseArray', '$rootScope'];

  /**
   * SlideshowController
   *
   * @class SlideshowController
   * @constructor
   */
  function SlideshowController($firebaseArray, $rootScope) {
    console.log('SlideshowController Constructor');
    this.$firebaseArray = $firebaseArray;
    this.$rootScope = $rootScope;
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
    var ref = new Firebase('https://fiery-torch-4495.firebaseio.com/');
    vm.messages = vm.$firebaseArray(ref);
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
