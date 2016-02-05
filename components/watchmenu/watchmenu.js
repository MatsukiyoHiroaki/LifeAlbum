/**
 * Watchmenu Components module.
 *
 * @module LifeAlbum.components.watchmenu
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum.components.watchmenu', [])
    .controller('WatchmenuController', WatchmenuController);

  WatchmenuController.$inject = [];

  /**
   * WatchmenuController
   *
   * @class WatchmenuController
   * @constructor
   */
  function WatchmenuController() {
    console.log('WatchmenuController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  WatchmenuController.prototype.activate = function() {
    console.log('WatchmenuController activate Method');
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
