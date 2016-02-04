/**
 * Initial Components module.
 *
 * @module LifeAlbum.components.initial
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum.components.initial', [])
    .controller('InitialController', InitialController);

  InitialController.$inject = [];

  /**
   * InitialController
   *
   * @class InitialController
   * @constructor
   */
  function InitialController() {
    console.log('InitialController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  InitialController.prototype.activate = function() {
    console.log('InitialController activate Method');
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
