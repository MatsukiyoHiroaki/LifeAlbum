/**
 * Album Components module.
 *
 * @module LifeAlbum.components.album
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum.components.album', [])
    .controller('AlbumController', AlbumController);

  AlbumController.$inject = [];

  /**
   * AlbumController
   *
   * @class AlbumController
   * @constructor
   */
  function AlbumController() {
    console.log('AlbumController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AlbumController.prototype.activate = function() {
    console.log('AlbumController activate Method');
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
