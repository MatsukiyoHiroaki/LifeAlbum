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
      'LifeAlbum.components.camera',
      'LifeAlbum.components.menu',
      'LifeAlbum.components.initial',
      'LifeAlbum.components.watchmenu',
      'LifeAlbum.components.calendar',
      'LifeAlbum.components.album',
      'LifeAlbum.components.slideshow',
      'LifeAlbum.components.login'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/login'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/camera', component: 'camera'},
    {path: '/menu', component: 'menu'},
    {path: '/initial', component: 'initial'},
    {path: '/watchmenu', component: 'watchmenu'},
    {path: '/calendar', component: 'calendar'},
    {path: '/album', component: 'album'},
    {path: '/slideshow', component: 'slideshow'},
    {path: '/login',    component: 'login'}
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
