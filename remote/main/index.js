System.register("chunks:///_virtual/main",["./PlaySound.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PlaySound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var e,r,t,n,i,u,a,c;return{setters:[function(o){e=o.applyDecoratedDescriptor,r=o.inheritsLoose,t=o.initializerDefineProperty,n=o.assertThisInitialized},function(o){i=o.cclegacy,u=o._decorator,a=o.AudioSource,c=o.Component}],execute:function(){var l,p,s,y,d;i._RF.push({},"1f8b21QIw5Nb56p0SogYyPg","PlaySound",void 0);var f=u.ccclass,S=u.property;o("PlaySound",(l=f("PlaySound"),p=S(a),l((d=e((y=function(o){function e(){for(var e,r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=o.call.apply(o,[this].concat(i))||this,t(e,"audioSource",d,n(e)),e}return r(e,o),e.prototype.playSound=function(){this.audioSource&&this.audioSource.play()},e}(c)).prototype,"audioSource",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=y))||s));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});