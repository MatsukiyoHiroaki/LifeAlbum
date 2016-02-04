!function(){"use strict";function a(a){console.log("AboutController Constructor"),this.GruntfilesService=a}angular.module("LifeAlbum.components.about",["LifeAlbum.service.gruntfiles"]).controller("AboutController",a),a.$inject=["GruntfilesService"],a.prototype.activate=function(){console.log("AboutController Method activate"),b=this;var a=this.GruntfilesService.query().$promise;a.then(c)["catch"](d)};var b,c=function(a){b.list=a},d=function(a){b.error=a}}(),function(){"use strict";function a(){console.log("CalendarController Constructor")}angular.module("LifeAlbum.components.calendar",[]).controller("CalendarController",a),a.$inject=[],a.prototype.activate=function(){console.log("CalendarController activate Method"),b=this};var b}(),function(){"use strict";function a(){console.log("CameraController Constructor")}function b(a,b){return console.log("CameraDirective Constructor"),{restrict:"A",link:function(b,c,d){var e=a(d.fileModel);c.bind("change",function(){b.$apply(function(){e.assign(b,c[0].files[0])})})}}}var c=angular.module("LifeAlbum.components.camera",["firebase"]);c.controller("CameraController",a),c.directive("fileModel",b),a.$inject=["$firebaseArray"],b.$inject=["$parse"],a.prototype.activate=function(a,b){console.log("CameraController activate Method"),d=this;var c=new window.Firebase("https://fiery-torch-4495.firebaseio.com/");b.messages=a(c),b.$watch("imageFile",function(a){if(b.imageFileSrc=void 0,a&&a.type.match("image.*")){var c=a,d=new FileReader;d.onload=function(){b.$apply(function(){b.imageFileSrc=d.result})},d.readAsDataURL(a),b.onclick=function(){console.log(c),b.messages.$add({img:d.result,coment:b.teikei.name,code:b.teikei.code})}}}),b.events=[{name:"出産",code:1},{name:"お宮参り",code:2},{name:"一カ月検診",code:3}],b.teikei=b.events[0]};var d}(),function(){"use strict";function a(){console.log("ContactController Constructor")}angular.module("LifeAlbum.components.contact",[]).controller("ContactController",a),a.$inject=[],a.prototype.activate=function(){console.log("ContactController activate Method"),b=this,b.case1=20,c()};var b,c=function(){b.case2=10}}(),function(){"use strict";function a(){console.log("HomeController Constructor")}angular.module("LifeAlbum.components.home",[]).controller("HomeController",a),a.$inject=[],a.prototype.activate=function(){console.log("HomeController activate Method")}}(),function(){"use strict";function a(){console.log("InitialController Constructor")}angular.module("LifeAlbum.components.initial",[]).controller("InitialController",a),a.$inject=[],a.prototype.activate=function(){console.log("InitialController activate Method"),b=this};var b}(),function(){"use strict";function a(){console.log("LoginController Constructor")}angular.module("LifeAlbum.components.login",[]).controller("LoginController",a),a.$inject=[],a.prototype.activate=function(){console.log("LoginController activate Method"),b=this};var b}(),function(){"use strict";function a(){console.log("MenuController Constructor")}angular.module("LifeAlbum.components.menu",[]).controller("MenuController",a),a.$inject=[],a.prototype.activate=function(){console.log("MenuController activate Method"),b=this};var b}(),function(){"use strict";function a(a){a.html5Mode(!0)}angular.module("LifeAlbum.config",[]).config(a),a.$inject=["$locationProvider"]}(),function(){"use strict";function a(a){var b=a("/api/gruntfiles",{query:{transformResponse:function(a){return angular.fromJson(a)}}});return b}angular.module("LifeAlbum.service.gruntfiles",["ngResource"]).factory("GruntfilesService",a),a.$inject=["$resource"]}(),function(){"use strict";function a(){}angular.module("LifeAlbum",["ngNewRouter","LifeAlbum.config","LifeAlbum.components.home","LifeAlbum.components.about","LifeAlbum.components.contact","LifeAlbum.components.camera"]).controller("AppController",a),a.$routeConfig=[{path:"/",redirectTo:"/camera"},{path:"/home",component:"home"},{path:"/about",component:"about"},{path:"/contact",component:"contact"},{path:"/camera",component:"camera"}],a.$inject=[]}();