/**
 * Album Components module.
 *
 * @module LifeAlbum.components.album
 */
(function () {
  'use strict';

  angular
    .module('LifeAlbum.components.album', ['firebase'])
    .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['$firebaseArray'];

  /**
   * AlbumController
   *
   * @class AlbumController
   * @constructor
   */
  function AlbumController($firebaseArray) {
    console.log('AlbumController Constructor');
    this.$firebaseArray = $firebaseArray;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AlbumController.prototype.activate = function($firebaseArray, $scope) {
    console.log('AlbumController activate Method');
    vm = this;

    /*firebaseのインスタンス生成*/
    var ref = new Firebase('https://fiery-torch-4495.firebaseio.com/');
    $scope.messages = $firebaseArray(ref);

    /*fileAPIの写真データ取得*/
    $scope.$watch('imageFile', function(imageFile) {
      $scope.imageFileSrc = undefined;
      /*データがない場合*/
      if (!imageFile || !imageFile.type.match('image.*')) {
        console.log('no image');
        return;
      }
      /*写真情報格納*/
      var imagedata = imageFile;
      /*ファイルオブジェクト生成*/
      var reader = new FileReader();
      reader.onload = function() {
        $scope.$apply(function() {
          /*写真を表示*/
          $scope.imageFileSrc = reader.result;
        });
      };
      // reader.readAsDataURL(imageFile);
      // console.log(imageFile);
      // /*firebaseに写真登録*/
      // $scope.onclick = function() {
      //   $scope.messages.$add({
      //     'img': reader.result, /*写真*/
      //     'coment': $scope.coment
      //   });
      // };
    });

    /*tabs*/
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tab) {
      $scope.activeTab = tab;
    };
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
