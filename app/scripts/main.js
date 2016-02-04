/**
 * This is LifeAlbum module.
 *
 * @module LifeAlbum
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum', [
      'ngNewRouter',
      'LifeAlbum.config',
      'LifeAlbum.components.home',
      'LifeAlbum.components.about',
      'LifeAlbum.components.contact',
      'LifeAlbum.components.camera'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/camera'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/camera', component: 'camera'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main LifeAlbum
   * @constructor
   */
  function AppController () {}
})();
