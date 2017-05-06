(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["evolve-js"] = factory();
	else
		root["evolve-js"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sounds = exports.Elements = exports.Create = undefined;
	
	var _createEs6Js = __webpack_require__(2);
	
	var _createEs6Js2 = _interopRequireDefault(_createEs6Js);
	
	var _Elements = __webpack_require__(14);
	
	var _Elements2 = _interopRequireDefault(_Elements);
	
	var _Sounds = __webpack_require__(16);
	
	var _Sounds2 = _interopRequireDefault(_Sounds);
	
	var _release = __webpack_require__(10);
	
	var _release2 = _interopRequireDefault(_release);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var status = {
	  initialized: true,
	  version: _release2.default.version,
	  build: _release2.default.build
	};
	
	console.log('EvolveJS initialized', status);
	
	var evolve = {
	  Create: _createEs6Js2.default,
	  Elements: _Elements2.default,
	  Sounds: _Sounds2.default,
	  status: status
	};
	
	exports.default = evolve;
	exports.Create = _createEs6Js2.default;
	exports.Elements = _Elements2.default;
	exports.Sounds = _Sounds2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs an Element instance
	 * @class Element
	 * @classdesc Element Class
	 //* @extends Container
	 * @param {Object} options the options object to be merged with defaults
	 * @type {Element}
	 * @public
	 */
	var Element = function (_Easel$Container) {
	  _inherits(Element, _Easel$Container);
	
	  function Element() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Element);
	
	    var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));
	
	    _this.initDefaults();
	    _this.initSettings(options);
	
	    _this.initData();
	
	    _this.drawElement();
	
	    _this.bindEvents();
	
	    _this.init();
	    return _this;
	  }
	
	  /**
	   * initializes default settings for Element instance
	   * @memberOf Element
	   * @method initDefaults
	   * @instance
	   * @param {Object} defaults the defaults object for Element instance
	   */
	
	
	  _createClass(Element, [{
	    key: 'initDefaults',
	    value: function initDefaults(defaults) {
	      this.inherit({
	        debug: {
	          fill: 'rgba(0,0,0,0.4)',
	          stroke: {
	            size: 1,
	            color: '#f00'
	          },
	          regPoint: {
	            radius: 3,
	            fill: '#f00'
	          }
	        },
	        defaults: {
	          debug: false,
	          parent: null,
	          position: {
	            x: 0,
	            y: 0
	          },
	          scale: {
	            x: 1,
	            y: 1
	          },
	          size: {
	            width: 0,
	            height: 0
	          },
	          cache: false,
	          mask: false,
	          fill: 'rgba(255,255,255,0.001)',
	          stroke: {
	            size: 0,
	            radius: 0,
	            color: 'rgba(0,0,0,0.001)'
	          },
	          shadow: false,
	          align: null,
	          regPoint: false,
	          events: {}
	        }.inherit(defaults)
	      });
	    }
	
	    /**
	     * initializes settings object for the Element instance
	     * @memberOf Element
	     * @method initSettings
	     * @instance
	     * @param {Object} options the options object to be merged with defaults
	     */
	
	  }, {
	    key: 'initSettings',
	    value: function initSettings(options) {
	      this.inherit({
	        settings: this.defaults.inherit(true, options)
	      });
	
	      !!this.settings.debug && this.settings.inherit(this.debug);
	    }
	
	    /**
	     * initializes data object for the Element instance
	     * @memberOf Element
	     * @method initData
	     * @instance
	     */
	
	  }, {
	    key: 'initData',
	    value: function initData() {
	      this.data = {};
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.setScale(this.settings.scale);
	
	      if (this.settings.parent) {
	        this.settings.parent.addChild(this);
	      }
	
	      this.setComputedBounds(this.settings.size);
	      this.setReg();
	    }
	  }, {
	    key: 'drawBackgroundElements',
	    value: function drawBackgroundElements() {
	      this.background = _ElementHelpers2.default.createRect.apply(_ElementHelpers2.default, [this.settings.pick(['fill', 'stroke'])].concat(_toConsumableArray(this.bounds)));
	      this.addChild(this.background);
	    }
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      //TODO:
	    }
	  }, {
	    key: 'drawBehaviorElements',
	    value: function drawBehaviorElements() {
	      this.setMask(this.settings.mask);
	      this.setShadow(this.settings.shadow);
	      this.setCache(this.settings.cache);
	    }
	  }, {
	    key: 'drawOverlayElements',
	    value: function drawOverlayElements() {
	      if (!!this.settings.regPoint) {
	        this.regPoint = _ElementHelpers2.default.createCircle.apply(_ElementHelpers2.default, [this.settings.regPoint].concat(_toConsumableArray(this.bounds)));
	        this.addChild(this.regPoint);
	
	        _ElementHelpers2.default.align(this.regPoint, null, 'center middle', false);
	      }
	    }
	  }, {
	    key: 'postDrawElements',
	    value: function postDrawElements() {
	      if (!!this.settings.align) {
	        this.align(null, this.settings.align);
	      } else {
	        this.setPosition(this.settings.position);
	      }
	    }
	
	    /**
	     * draws all graphic elements of the Element instance
	     * @memberOf Element
	     * @method draw
	     * @instance
	     */
	
	  }, {
	    key: 'drawElement',
	    value: function drawElement() {
	      this.preDrawElements();
	
	      this.drawBackgroundElements();
	      this.drawElements();
	      this.drawBehaviorElements();
	      this.drawOverlayElements();
	
	      this.postDrawElements();
	    }
	
	    /**
	     * sets to center/middle the regPoint of the Element instance
	     * @memberOf Element
	     * @method setReg
	     * @instance
	     */
	
	  }, {
	    key: 'setReg',
	    value: function setReg() {
	      this.inherit({
	        regX: this.settings.size.width * 0.5 * this.settings.scale.x,
	        regY: this.settings.size.height * 0.5 * this.settings.scale.y
	      });
	
	      return this;
	    }
	
	    /**
	     * sets or updates the position of the Element instance
	     * @memberOf Element
	     * @method setPosition
	     * @instance
	     * @param {Object} [positionOptions=null] can contain x and y or only one or them
	     * @param {Number} [positionOptions.x=0] the x position
	     * @param {Number} [positionOptions.y=0] the y position
	     * @param {Boolean} [override=false] specify to override actual Element position
	     * @param {Boolean} [force=true] ...
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setPosition',
	    value: function setPosition() {
	      var positionOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	      if (!!positionOptions) {
	        if (force) {
	          this.settings.position = positionOptions;
	        } else {
	          this.settings.position.inherit(positionOptions);
	        }
	      }
	
	      if (!!this.settings.position) {
	        if (!!this.settings.position.x) {
	          if (!!override) {
	            this.x = this.settings.position.x;
	          } else {
	            this.x += this.settings.position.x;
	          }
	        }
	
	        if (!!this.settings.position.y) {
	          if (!!override) {
	            this.y = this.settings.position.y;
	          } else {
	            this.y += this.settings.position.y;
	          }
	        }
	      }
	
	      return this;
	    }
	
	    /**
	     * sets or updates the scaling of the Element instance
	     * @memberOf Element
	     * @method setScale
	     * @instance
	     * @param {Object|Number} scaleOptions can be an object with x and y couple or only a number to be used for both
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setScale',
	    value: function setScale() {
	      var scaleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!scaleOptions) {
	        if (force) {
	          this.settings.scale = scaleOptions;
	        } else {
	          this.settings.scale.inherit(scaleOptions);
	        }
	      }
	
	      if (!!this.settings.scale) {
	        var scale = {
	          scaleX: 1,
	          scaleY: 1
	        };
	
	        if (Number.isNumber(this.settings.scale)) {
	          scale.inherit({
	            scaleX: this.settings.scale,
	            scaleY: this.settings.scale
	          });
	        } else if (Object.isObject(this.settings.scale)) {
	          scale.inherit({
	            scaleX: this.settings.scale.x,
	            scaleY: this.settings.scale.y
	          });
	        }
	
	        this.inherit(scale);
	      }
	
	      return this;
	    }
	
	    /**
	     * sets or updates the bounds of the Element instance
	     * @memberOf Element
	     * @method setComputedBounds
	     * @instance
	     * @param {Object|Number} boundsOptions ...
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setComputedBounds',
	    value: function setComputedBounds() {
	      var boundsOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!boundsOptions) {
	        if (force) {
	          this.settings.size = boundsOptions;
	        } else {
	          this.settings.size.inherit(boundsOptions);
	        }
	      }
	
	      if (!this.bounds && !!this.settings.size) {
	        if (String.isPercentage(this.settings.size) || Number.isNumber(this.settings.size)) {
	          this.settings.size = {
	            width: this.settings.size,
	            height: this.settings.size
	          };
	        }
	
	        if (String.isPercentage(this.settings.size.width) && !!this.parent) {
	          this.settings.size.width = this.parent.getComputedBounds().width * this.settings.size.width.parsePercentage();
	        }
	
	        if (String.isPercentage(this.settings.size.height) && !!this.parent) {
	          this.settings.size.height = this.parent.getComputedBounds().height * this.settings.size.height.parsePercentage();
	        }
	
	        this.bounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];
	        this.setBounds.apply(this, _toConsumableArray(this.bounds));
	      }
	
	      return this;
	    }
	
	    /**
	     * sets or updates the Mask of the Element instance
	     * @memberOf Element
	     * @method setMask
	     * @instance
	     * @param {Object|Shadow} maskOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (EaselJS)
	     * @param {Boolean} force ....
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setMask',
	    value: function setMask() {
	      var maskOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!maskOptions) {
	        if (force) {
	          this.settings.mask = maskOptions;
	        } else {
	          this.settings.mask.inherit(maskOptions);
	        }
	      }
	
	      if (!!this.settings.mask) {
	        this.maskShape = this.settings.mask;
	
	        if (!(this.settings.mask instanceof _createEs6Js.Easel.Shape) && !(this.settings.mask instanceof _createEs6Js.Easel.DisplayObject)) {
	          this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x, this.settings.size.height * this.settings.scale.y];
	
	          if (Object.isObject(this.settings.mask)) {
	            this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask.scale, this.settings.size.height * this.settings.scale.y * this.settings.mask.scale];
	            this.maskShape = _ElementHelpers2.default.createRect.apply(_ElementHelpers2.default, [this.settings.mask.pick(['fill', 'stroke'])].concat(_toConsumableArray(this.maskBounds)));
	          } else if (Number.isNumber(this.settings.mask)) {
	            this.maskBounds = [0, 0, this.settings.size.width * this.settings.scale.x * this.settings.mask, this.settings.size.height * this.settings.scale.y * this.settings.mask];
	            this.maskShape = _ElementHelpers2.default.createRect.apply(_ElementHelpers2.default, [this.settings.pick(['fill', 'stroke'])].concat(_toConsumableArray(this.maskBounds)));
	          }
	
	          this.maskShape.inherit({
	            x: this.bounds[2] * 0.5 - this.maskBounds[2] * 0.5,
	            y: this.bounds[3] * 0.5 - this.maskBounds[3] * 0.5
	          });
	        }
	
	        if (!!this.settings.debug) {
	          this.addChild(this.maskShape);
	        }
	
	        this.mask = this.maskShape;
	      }
	
	      return this;
	    }
	
	    /**
	     * sets or updates the Shadow of the Element instance
	     * @memberOf Element
	     * @method setShadow
	     * @instance
	     * @param {Object|Shadow} shadowOptions can be an object with {color, x, y, blur}<br>or directly an instance of Shadow (EaselJS)
	     * @param {Boolean} force ....
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setShadow',
	    value: function setShadow() {
	      var shadowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!shadowOptions) {
	        if (force) {
	          this.settings.shadow = shadowOptions;
	        } else {
	          this.settings.shadow.inherit(shadowOptions);
	        }
	
	        if (!!this.settings.shadow) {
	          var shadow = null;
	
	          if (Object.isObject(this.settings.shadow)) {
	            var shadowSettings = [this.settings.shadow.color, this.settings.shadow.x, this.settings.shadow.y, this.settings.shadow.blur];
	
	            shadow = new (Function.prototype.bind.apply(_createEs6Js.Easel.Shadow, [null].concat(shadowSettings)))();
	          } else if (this.settings.shadow instanceof _createEs6Js.Easel.Shadow) {
	            shadow = this.settings.shadow;
	          }
	
	          this.inherit({
	            shadow: shadow
	          });
	        }
	      } else {
	        this.settings.shadow = null;
	
	        this.inherit({
	          shadow: null
	        });
	      }
	
	      return this;
	    }
	
	    /**
	     * sets or updates the Cache of the Element instance
	     * @memberOf Element
	     * @method setCache
	     * @instance
	     * @param {Object|Shadow} cacheOptions ..
	     * @param {Boolean} force ....
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setCache',
	    value: function setCache() {
	      var cacheOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!cacheOptions) {
	        if (force) {
	          this.settings.cache = cacheOptions;
	        } else {
	          this.settings.cache.inherit(cacheOptions);
	        }
	
	        if (!!this.settings.cache) {
	          this.cache.apply(this, [this.bounds.x - 5, this.bounds.y - 5, this.getComputedBounds().width, this.getComputedBounds().height]);
	        }
	      }
	
	      return this;
	    }
	
	    /**
	     * Aligns the Element instance, based on it's parent bounds or specified parentElement bounds and mode parameter
	     * @memberOf Element
	     * @method align
	     * @instance
	     * @param {Object|null} parentElement if null, it considers the actual Element instance parent, otherwise it aligns in base of the specified parentElement
	     * @param {String} mode can be a set of one or two strings (blank separated) in any order, for horizontalModes (left, center, right), for verticalModes (top, middle, bottom)
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'align',
	    value: function align() {
	      var parentElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left top';
	
	      if (!parentElement) {
	        parentElement = this.parent;
	      }
	
	      var parentBounds = parentElement.getBounds();
	      var bounds = this.getBounds();
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      var position = {
	        x: 0,
	        y: 0
	      };
	
	      if (horizontalModes.contains(modes)) {
	        if (modes.contains('left')) {
	          position.inherit({
	            x: bounds.width * 0.5
	          });
	        } else if (modes.contains('center')) {
	          position.inherit({
	            x: parentBounds.width * 0.5
	          });
	        } else if (modes.contains('right')) {
	          position.inherit({
	            x: parentBounds.width - bounds.width * 0.5
	          });
	        }
	      }
	
	      if (verticalModes.contains(modes)) {
	        if (modes.contains('top')) {
	          position.inherit({
	            y: bounds.height * 0.5
	          });
	        } else if (modes.contains('middle')) {
	          position.inherit({
	            y: parentBounds.height * 0.5
	          });
	        } else if (modes.contains('bottom')) {
	          position.inherit({
	            y: parentBounds.height - bounds.height * 0.5
	          });
	        }
	      }
	
	      this.settings.inherit({
	        position: position
	      });
	
	      this.setPosition(null, true);
	
	      return this;
	    }
	
	    /**
	     * returns the actual computed bounds of the Element instance, including scale factor and top, right, bottom, left coordinates
	     * @memberOf Element
	     * @method getComputedBounds
	     * @instance
	     * @return {Object} the actual Element instance computed bounds object<br>
	     * <pre>
	     *   {
	     *     {
	     *       top: number,
	     *       right: number,
	     *       bottom: number,
	     *       left: number,
	     *       x: number,
	     *       y: number,
	     *       width: number,
	     *       height: number
	     *     }
	     *   }
	     * </pre>
	     */
	
	  }, {
	    key: 'getComputedBounds',
	    value: function getComputedBounds() {
	      var bounds = this.getBounds();
	
	      return {
	        top: this.y - bounds.height * 0.5 * this.settings.scale.y,
	        right: this.x + bounds.width * 0.5 * this.settings.scale.x,
	        bottom: this.y + bounds.height * 0.5 * this.settings.scale.y,
	        left: this.x - bounds.width * 0.5 * this.settings.scale.x,
	        x: this.x,
	        y: this.y,
	        width: bounds.width * this.settings.scale.x,
	        height: bounds.height * this.settings.scale.y
	      };
	    }
	
	    /**
	     * binds all events specified in the settings object for the Element instance, it supports all EaselJS classes events (eg. click, mouseover, etc...)
	     * @memberOf Element
	     * @method bindEvents
	     * @instance
	     */
	
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents() {
	      var _this2 = this;
	
	      if (!!this.settings.events) {
	        this.settings.events.each(function (value, key) {
	          if (Function.isFunction(value)) {
	            _this2.on(key, value);
	          }
	        });
	      }
	    }
	
	    /**
	     * empty init method, to be overriden in classes that extends Element, to use for all those initializations you might need after having rendered the Element
	     * @memberOf Element
	     * @method init
	     * @instance
	     */
	
	  }, {
	    key: 'init',
	    value: function init() {}
	  }]);
	
	  return Element;
	}(_createEs6Js.Easel.Container);
	
	exports.default = Element;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	!function(root,factory){ true?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports["create-es6-js"]=factory():root["create-es6-js"]=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sound=exports.Preload=exports.Tween=exports.Easel=void 0;var _Easel=__webpack_require__(3),_Easel2=_interopRequireDefault(_Easel),_Tween=__webpack_require__(6),_Tween2=_interopRequireDefault(_Tween),_Preload=__webpack_require__(4),_Preload2=_interopRequireDefault(_Preload),_Sound=__webpack_require__(5),_Sound2=_interopRequireDefault(_Sound),_release=__webpack_require__(2),_release2=_interopRequireDefault(_release),status={initialized:!0,modules:{EaselJS:{version:_Easel2.default.version,build:_Easel2.default.buildDate},TweenJS:{version:_Tween2.default.version,build:_Tween2.default.buildDate},PreloadJS:{version:_Preload2.default.version,build:_Preload2.default.buildDate},SoundJS:{version:_Sound2.default.version,build:_Sound2.default.buildDate}},version:_release2.default.version,build:_release2.default.build};console.log("Create JS ES6 initialized",status);var create={Easel:_Easel2.default,Tween:_Tween2.default,Preload:_Preload2.default,Sound:_Sound2.default,status:status};exports.default=create,exports.Easel=_Easel2.default,exports.Tween=_Tween2.default,exports.Preload=_Preload2.default,exports.Sound=_Sound2.default},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(module,global){var scope="undefined"==typeof window?this:window;scope.createjs=scope.createjs||{},createjs.extend=function(subclass,superclass){"use strict";function o(){this.constructor=subclass}return o.prototype=superclass.prototype,subclass.prototype=new o},createjs.promote=function(subclass,prefix){"use strict";var subP=subclass.prototype,supP=Object.getPrototypeOf&&Object.getPrototypeOf(subP)||subP.__proto__;if(supP){subP[(prefix+="_")+"constructor"]=supP.constructor;for(var n in supP)subP.hasOwnProperty(n)&&"function"==typeof supP[n]&&(subP[prefix+n]=supP[n])}return subclass},createjs.indexOf=function(array,searchElement){"use strict";for(var i=0,l=array.length;i<l;i++)if(searchElement===array[i])return i;return-1},function(){"use strict";function Event(type,bubbles,cancelable){this.type=type,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!bubbles,this.cancelable=!!cancelable,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var p=Event.prototype;p.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},p.stopPropagation=function(){this.propagationStopped=!0},p.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},p.remove=function(){this.removed=!0},p.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},p.set=function(props){for(var n in props)this[n]=props[n];return this},p.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var p=EventDispatcher.prototype;EventDispatcher.initialize=function(target){target.addEventListener=p.addEventListener,target.on=p.on,target.removeEventListener=target.off=p.removeEventListener,target.removeAllEventListeners=p.removeAllEventListeners,target.hasEventListener=p.hasEventListener,target.dispatchEvent=p.dispatchEvent,target._dispatchEvent=p._dispatchEvent,target.willTrigger=p.willTrigger},p.addEventListener=function(type,listener,useCapture){var listeners;listeners=useCapture?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var arr=listeners[type];return arr&&this.removeEventListener(type,listener,useCapture),arr=listeners[type],arr?arr.push(listener):listeners[type]=[listener],listener},p.on=function(type,listener,scope,once,data,useCapture){return listener.handleEvent&&(scope=scope||listener,listener=listener.handleEvent),scope=scope||this,this.addEventListener(type,function(evt){listener.call(scope,evt,data),once&&evt.remove()},useCapture)},p.removeEventListener=function(type,listener,useCapture){var listeners=useCapture?this._captureListeners:this._listeners;if(listeners){var arr=listeners[type];if(arr)for(var i=0,l=arr.length;i<l;i++)if(arr[i]==listener){1==l?delete listeners[type]:arr.splice(i,1);break}}},p.off=p.removeEventListener,p.removeAllEventListeners=function(type){type?(this._listeners&&delete this._listeners[type],this._captureListeners&&delete this._captureListeners[type]):this._listeners=this._captureListeners=null},p.dispatchEvent=function(eventObj,bubbles,cancelable){if("string"==typeof eventObj){var listeners=this._listeners;if(!(bubbles||listeners&&listeners[eventObj]))return!0;eventObj=new createjs.Event(eventObj,bubbles,cancelable)}else eventObj.target&&eventObj.clone&&(eventObj=eventObj.clone());try{eventObj.target=this}catch(e){}if(eventObj.bubbles&&this.parent){for(var top=this,list=[top];top.parent;)list.push(top=top.parent);var i,l=list.length;for(i=l-1;i>=0&&!eventObj.propagationStopped;i--)list[i]._dispatchEvent(eventObj,1+(0==i));for(i=1;i<l&&!eventObj.propagationStopped;i++)list[i]._dispatchEvent(eventObj,3)}else this._dispatchEvent(eventObj,2);return!eventObj.defaultPrevented},p.hasEventListener=function(type){var listeners=this._listeners,captureListeners=this._captureListeners;return!!(listeners&&listeners[type]||captureListeners&&captureListeners[type])},p.willTrigger=function(type){for(var o=this;o;){if(o.hasEventListener(type))return!0;o=o.parent}return!1},p.toString=function(){return"[EventDispatcher]"},p._dispatchEvent=function(eventObj,eventPhase){var l,listeners=1==eventPhase?this._captureListeners:this._listeners;if(eventObj&&listeners){var arr=listeners[eventObj.type];if(!arr||!(l=arr.length))return;try{eventObj.currentTarget=this}catch(e){}try{eventObj.eventPhase=eventPhase}catch(e){}eventObj.removed=!1,arr=arr.slice();for(var i=0;i<l&&!eventObj.immediatePropagationStopped;i++){var o=arr[i];o.handleEvent?o.handleEvent(eventObj):o(eventObj),eventObj.removed&&(this.off(eventObj.type,o,1==eventPhase),eventObj.removed=!1)}}},createjs.EventDispatcher=EventDispatcher}(),function(){"use strict";function Ticker(){throw"Ticker cannot be instantiated."}Ticker.RAF_SYNCHED="synched",Ticker.RAF="raf",Ticker.TIMEOUT="timeout",Ticker.useRAF=!1,Ticker.timingMode=null,Ticker.maxDelta=0,Ticker.paused=!1,Ticker.removeEventListener=null,Ticker.removeAllEventListeners=null,Ticker.dispatchEvent=null,Ticker.hasEventListener=null,Ticker._listeners=null,createjs.EventDispatcher.initialize(Ticker),Ticker._addEventListener=Ticker.addEventListener,Ticker.addEventListener=function(){return!Ticker._inited&&Ticker.init(),Ticker._addEventListener.apply(Ticker,arguments)},Ticker._inited=!1,Ticker._startTime=0,Ticker._pausedTime=0,Ticker._ticks=0,Ticker._pausedTicks=0,Ticker._interval=50,Ticker._lastTime=0,Ticker._times=null,Ticker._tickTimes=null,Ticker._timerId=null,Ticker._raf=!0,Ticker.setInterval=function(interval){Ticker._interval=interval,Ticker._inited&&Ticker._setupTick()},Ticker.getInterval=function(){return Ticker._interval},Ticker.setFPS=function(value){Ticker.setInterval(1e3/value)},Ticker.getFPS=function(){return 1e3/Ticker._interval};try{Object.defineProperties(Ticker,{interval:{get:Ticker.getInterval,set:Ticker.setInterval},framerate:{get:Ticker.getFPS,set:Ticker.setFPS}})}catch(e){console.log(e)}Ticker.init=function(){Ticker._inited||(Ticker._inited=!0,Ticker._times=[],Ticker._tickTimes=[],Ticker._startTime=Ticker._getTime(),Ticker._times.push(Ticker._lastTime=0),Ticker.interval=Ticker._interval)},Ticker.reset=function(){if(Ticker._raf){var f=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;f&&f(Ticker._timerId)}else clearTimeout(Ticker._timerId);Ticker.removeAllEventListeners("tick"),Ticker._timerId=Ticker._times=Ticker._tickTimes=null,Ticker._startTime=Ticker._lastTime=Ticker._ticks=Ticker._pausedTime=0,Ticker._inited=!1},Ticker.getMeasuredTickTime=function(ticks){var ttl=0,times=Ticker._tickTimes;if(!times||times.length<1)return-1;ticks=Math.min(times.length,ticks||0|Ticker.getFPS());for(var i=0;i<ticks;i++)ttl+=times[i];return ttl/ticks},Ticker.getMeasuredFPS=function(ticks){var times=Ticker._times;return!times||times.length<2?-1:(ticks=Math.min(times.length-1,ticks||0|Ticker.getFPS()),1e3/((times[0]-times[ticks])/ticks))},Ticker.setPaused=function(value){Ticker.paused=value},Ticker.getPaused=function(){return Ticker.paused},Ticker.getTime=function(runTime){return Ticker._startTime?Ticker._getTime()-(runTime?Ticker._pausedTime:0):-1},Ticker.getEventTime=function(runTime){return Ticker._startTime?(Ticker._lastTime||Ticker._startTime)-(runTime?Ticker._pausedTime:0):-1},Ticker.getTicks=function(pauseable){return Ticker._ticks-(pauseable?Ticker._pausedTicks:0)},Ticker._handleSynch=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._getTime()-Ticker._lastTime>=.97*(Ticker._interval-1)&&Ticker._tick()},Ticker._handleRAF=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._handleTimeout=function(){Ticker._timerId=null,Ticker._setupTick(),Ticker._tick()},Ticker._setupTick=function(){if(null==Ticker._timerId){var mode=Ticker.timingMode||Ticker.useRAF&&Ticker.RAF_SYNCHED;if(mode==Ticker.RAF_SYNCHED||mode==Ticker.RAF){var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(f)return Ticker._timerId=f(mode==Ticker.RAF?Ticker._handleRAF:Ticker._handleSynch),void(Ticker._raf=!0)}Ticker._raf=!1,Ticker._timerId=setTimeout(Ticker._handleTimeout,Ticker._interval)}},Ticker._tick=function(){var paused=Ticker.paused,time=Ticker._getTime(),elapsedTime=time-Ticker._lastTime;if(Ticker._lastTime=time,Ticker._ticks++,paused&&(Ticker._pausedTicks++,Ticker._pausedTime+=elapsedTime),Ticker.hasEventListener("tick")){var event=new createjs.Event("tick"),maxDelta=Ticker.maxDelta;event.delta=maxDelta&&elapsedTime>maxDelta?maxDelta:elapsedTime,event.paused=paused,event.time=time,event.runTime=time-Ticker._pausedTime,Ticker.dispatchEvent(event)}for(Ticker._tickTimes.unshift(Ticker._getTime()-time);Ticker._tickTimes.length>100;)Ticker._tickTimes.pop();for(Ticker._times.unshift(time);Ticker._times.length>100;)Ticker._times.pop()};var now=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);Ticker._getTime=function(){return(now&&now.call(performance)||(new Date).getTime())-Ticker._startTime},createjs.Ticker=Ticker}(),function(){"use strict";function UID(){throw"UID cannot be instantiated"}UID._nextID=0,UID.get=function(){return UID._nextID++},createjs.UID=UID}(),function(){"use strict";function MouseEvent(type,bubbles,cancelable,stageX,stageY,nativeEvent,pointerID,primary,rawX,rawY,relatedTarget){this.Event_constructor(type,bubbles,cancelable),this.stageX=stageX,this.stageY=stageY,this.rawX=null==rawX?stageX:rawX,this.rawY=null==rawY?stageY:rawY,this.nativeEvent=nativeEvent,this.pointerID=pointerID,this.primary=!!primary,this.relatedTarget=relatedTarget}var p=createjs.extend(MouseEvent,createjs.Event);p._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},p._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},p._get_isTouch=function(){return this.pointerID!==-1};try{Object.defineProperties(p,{localX:{get:p._get_localX},localY:{get:p._get_localY},isTouch:{get:p._get_isTouch}})}catch(e){}p.clone=function(){return new MouseEvent(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},p.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(MouseEvent,"Event")}(),function(){"use strict";function Matrix2D(a,b,c,d,tx,ty){this.setValues(a,b,c,d,tx,ty)}var p=Matrix2D.prototype;Matrix2D.DEG_TO_RAD=Math.PI/180,Matrix2D.identity=null,p.setValues=function(a,b,c,d,tx,ty){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=tx||0,this.ty=ty||0,this},p.append=function(a,b,c,d,tx,ty){var a1=this.a,b1=this.b,c1=this.c,d1=this.d;return 1==a&&0==b&&0==c&&1==d||(this.a=a1*a+c1*b,this.b=b1*a+d1*b,this.c=a1*c+c1*d,this.d=b1*c+d1*d),this.tx=a1*tx+c1*ty+this.tx,this.ty=b1*tx+d1*ty+this.ty,this},p.prepend=function(a,b,c,d,tx,ty){var a1=this.a,c1=this.c,tx1=this.tx;return this.a=a*a1+c*this.b,this.b=b*a1+d*this.b,this.c=a*c1+c*this.d,this.d=b*c1+d*this.d,this.tx=a*tx1+c*this.ty+tx,this.ty=b*tx1+d*this.ty+ty,this},p.appendMatrix=function(matrix){return this.append(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty)},p.prependMatrix=function(matrix){return this.prepend(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty)},p.appendTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){if(rotation%360)var r=rotation*Matrix2D.DEG_TO_RAD,cos=Math.cos(r),sin=Math.sin(r);else cos=1,sin=0;return skewX||skewY?(skewX*=Matrix2D.DEG_TO_RAD,skewY*=Matrix2D.DEG_TO_RAD,this.append(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),x,y),this.append(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,0,0)):this.append(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,x,y),(regX||regY)&&(this.tx-=regX*this.a+regY*this.c,this.ty-=regX*this.b+regY*this.d),this},p.prependTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){if(rotation%360)var r=rotation*Matrix2D.DEG_TO_RAD,cos=Math.cos(r),sin=Math.sin(r);else cos=1,sin=0;return(regX||regY)&&(this.tx-=regX,this.ty-=regY),skewX||skewY?(skewX*=Matrix2D.DEG_TO_RAD,skewY*=Matrix2D.DEG_TO_RAD,this.prepend(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,0,0),this.prepend(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),x,y)):this.prepend(cos*scaleX,sin*scaleX,-sin*scaleY,cos*scaleY,x,y),this},p.rotate=function(angle){angle*=Matrix2D.DEG_TO_RAD;var cos=Math.cos(angle),sin=Math.sin(angle),a1=this.a,b1=this.b;return this.a=a1*cos+this.c*sin,this.b=b1*cos+this.d*sin,this.c=-a1*sin+this.c*cos,this.d=-b1*sin+this.d*cos,this},p.skew=function(skewX,skewY){return skewX*=Matrix2D.DEG_TO_RAD,skewY*=Matrix2D.DEG_TO_RAD,this.append(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),0,0),this},p.scale=function(x,y){return this.a*=x,this.b*=x,this.c*=y,this.d*=y,this},p.translate=function(x,y){return this.tx+=this.a*x+this.c*y,this.ty+=this.b*x+this.d*y,this},p.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},p.invert=function(){var a1=this.a,b1=this.b,c1=this.c,d1=this.d,tx1=this.tx,n=a1*d1-b1*c1;return this.a=d1/n,this.b=-b1/n,this.c=-c1/n,this.d=a1/n,this.tx=(c1*this.ty-d1*tx1)/n,this.ty=-(a1*this.ty-b1*tx1)/n,this},p.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},p.equals=function(matrix){return this.tx===matrix.tx&&this.ty===matrix.ty&&this.a===matrix.a&&this.b===matrix.b&&this.c===matrix.c&&this.d===matrix.d},p.transformPoint=function(x,y,pt){return pt=pt||{},pt.x=x*this.a+y*this.c+this.tx,pt.y=x*this.b+y*this.d+this.ty,pt},p.decompose=function(target){null==target&&(target={}),target.x=this.tx,target.y=this.ty,target.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),target.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var skewX=Math.atan2(-this.c,this.d),skewY=Math.atan2(this.b,this.a),delta=Math.abs(1-skewX/skewY);return delta<1e-5?(target.rotation=skewY/Matrix2D.DEG_TO_RAD,this.a<0&&this.d>=0&&(target.rotation+=target.rotation<=0?180:-180),target.skewX=target.skewY=0):(target.skewX=skewX/Matrix2D.DEG_TO_RAD,target.skewY=skewY/Matrix2D.DEG_TO_RAD),target},p.copy=function(matrix){return this.setValues(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty)},p.clone=function(){return new Matrix2D(this.a,this.b,this.c,this.d,this.tx,this.ty)},p.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},Matrix2D.identity=new Matrix2D,createjs.Matrix2D=Matrix2D}(),function(){"use strict";function DisplayProps(visible,alpha,shadow,compositeOperation,matrix){this.setValues(visible,alpha,shadow,compositeOperation,matrix)}var p=DisplayProps.prototype;p.setValues=function(visible,alpha,shadow,compositeOperation,matrix){return this.visible=null==visible||!!visible,this.alpha=null==alpha?1:alpha,this.shadow=shadow,this.compositeOperation=compositeOperation,this.matrix=matrix||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},p.append=function(visible,alpha,shadow,compositeOperation,matrix){return this.alpha*=alpha,this.shadow=shadow||this.shadow,this.compositeOperation=compositeOperation||this.compositeOperation,this.visible=this.visible&&visible,matrix&&this.matrix.appendMatrix(matrix),this},p.prepend=function(visible,alpha,shadow,compositeOperation,matrix){return this.alpha*=alpha,this.shadow=this.shadow||shadow,this.compositeOperation=this.compositeOperation||compositeOperation,this.visible=this.visible&&visible,matrix&&this.matrix.prependMatrix(matrix),this},p.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},p.clone=function(){return new DisplayProps(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=DisplayProps}(),function(){"use strict";function Point(x,y){this.setValues(x,y)}var p=Point.prototype;p.setValues=function(x,y){return this.x=x||0,this.y=y||0,this},p.copy=function(point){return this.x=point.x,this.y=point.y,this},p.clone=function(){return new Point(this.x,this.y)},p.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=Point}(),function(){"use strict";function Rectangle(x,y,width,height){this.setValues(x,y,width,height)}var p=Rectangle.prototype;p.setValues=function(x,y,width,height){return this.x=x||0,this.y=y||0,this.width=width||0,this.height=height||0,this},p.extend=function(x,y,width,height){return width=width||0,height=height||0,x+width>this.x+this.width&&(this.width=x+width-this.x),y+height>this.y+this.height&&(this.height=y+height-this.y),x<this.x&&(this.width+=this.x-x,this.x=x),y<this.y&&(this.height+=this.y-y,this.y=y),this},p.pad=function(top,left,bottom,right){return this.x-=left,this.y-=top,this.width+=left+right,this.height+=top+bottom,this},p.copy=function(rectangle){return this.setValues(rectangle.x,rectangle.y,rectangle.width,rectangle.height)},p.contains=function(x,y,width,height){return width=width||0,height=height||0,x>=this.x&&x+width<=this.x+this.width&&y>=this.y&&y+height<=this.y+this.height},p.union=function(rect){return this.clone().extend(rect.x,rect.y,rect.width,rect.height)},p.intersection=function(rect){var x1=rect.x,y1=rect.y,x2=x1+rect.width,y2=y1+rect.height;return this.x>x1&&(x1=this.x),this.y>y1&&(y1=this.y),this.x+this.width<x2&&(x2=this.x+this.width),this.y+this.height<y2&&(y2=this.y+this.height),x2<=x1||y2<=y1?null:new Rectangle(x1,y1,x2-x1,y2-y1)},p.intersects=function(rect){return rect.x<=this.x+this.width&&this.x<=rect.x+rect.width&&rect.y<=this.y+this.height&&this.y<=rect.y+rect.height},p.isEmpty=function(){return this.width<=0||this.height<=0},p.clone=function(){return new Rectangle(this.x,this.y,this.width,this.height)},p.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=Rectangle}(),function(){"use strict";function ButtonHelper(target,outLabel,overLabel,downLabel,play,hitArea,hitLabel){target.addEventListener&&(this.target=target,this.overLabel=null==overLabel?"over":overLabel,this.outLabel=null==outLabel?"out":outLabel,this.downLabel=null==downLabel?"down":downLabel,this.play=play,this._isPressed=!1,this._isOver=!1,this._enabled=!1,target.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),hitArea&&(hitLabel&&(hitArea.actionsEnabled=!1,hitArea.gotoAndStop&&hitArea.gotoAndStop(hitLabel)),target.hitArea=hitArea))}var p=ButtonHelper.prototype;p.setEnabled=function(value){if(value!=this._enabled){var o=this.target;this._enabled=value,value?(o.cursor="pointer",o.addEventListener("rollover",this),o.addEventListener("rollout",this),o.addEventListener("mousedown",this),o.addEventListener("pressup",this),o._reset&&(o.__reset=o._reset,o._reset=this._reset)):(o.cursor=null,o.removeEventListener("rollover",this),o.removeEventListener("rollout",this),o.removeEventListener("mousedown",this),o.removeEventListener("pressup",this),o.__reset&&(o._reset=o.__reset,delete o.__reset))}},p.getEnabled=function(){return this._enabled};try{Object.defineProperties(p,{enabled:{get:p.getEnabled,set:p.setEnabled}})}catch(e){}p.toString=function(){return"[ButtonHelper]"},p.handleEvent=function(evt){var label,t=this.target,type=evt.type;"mousedown"==type?(this._isPressed=!0,label=this.downLabel):"pressup"==type?(this._isPressed=!1,label=this._isOver?this.overLabel:this.outLabel):"rollover"==type?(this._isOver=!0,label=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,label=this._isPressed?this.overLabel:this.outLabel),this.play?t.gotoAndPlay&&t.gotoAndPlay(label):t.gotoAndStop&&t.gotoAndStop(label)},p._reset=function(){var p=this.paused;this.__reset(),this.paused=p},createjs.ButtonHelper=ButtonHelper}(),function(){"use strict";function Shadow(color,offsetX,offsetY,blur){this.color=color||"black",this.offsetX=offsetX||0,this.offsetY=offsetY||0,this.blur=blur||0}var p=Shadow.prototype;Shadow.identity=new Shadow("transparent",0,0,0),p.toString=function(){return"[Shadow]"},p.clone=function(){return new Shadow(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=Shadow}(),function(){"use strict";function SpriteSheet(data){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(data)}var p=createjs.extend(SpriteSheet,createjs.EventDispatcher);p.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(p,{animations:{get:p.getAnimations}})}catch(e){}p.getNumFrames=function(animation){if(null==animation)return this._frames?this._frames.length:this._numFrames||0;var data=this._data[animation];return null==data?0:data.frames.length},p.getAnimation=function(name){return this._data[name]},p.getFrame=function(frameIndex){var frame;return this._frames&&(frame=this._frames[frameIndex])?frame:null},p.getFrameBounds=function(frameIndex,rectangle){var frame=this.getFrame(frameIndex);return frame?(rectangle||new createjs.Rectangle).setValues(-frame.regX,-frame.regY,frame.rect.width,frame.rect.height):null},p.toString=function(){return"[SpriteSheet]"},p.clone=function(){throw"SpriteSheet cannot be cloned."},p._parseData=function(data){var i,l,o,a;if(null!=data){if(this.framerate=data.framerate||0,data.images&&(l=data.images.length)>0)for(a=this._images=[],i=0;i<l;i++){var img=data.images[i];if("string"==typeof img){var src=img;img=document.createElement("img"),img.src=src}a.push(img),img.getContext||img.naturalWidth||(this._loadCount++,this.complete=!1,function(o,src){img.onload=function(){o._handleImageLoad(src)}}(this,src),function(o,src){img.onerror=function(){o._handleImageError(src)}}(this,src))}if(null==data.frames);else if(Array.isArray(data.frames))for(this._frames=[],a=data.frames,i=0,l=a.length;i<l;i++){var arr=a[i];this._frames.push({image:this._images[arr[4]?arr[4]:0],rect:new createjs.Rectangle(arr[0],arr[1],arr[2],arr[3]),regX:arr[5]||0,regY:arr[6]||0})}else o=data.frames,this._frameWidth=o.width,this._frameHeight=o.height,this._regX=o.regX||0,this._regY=o.regY||0,this._spacing=o.spacing||0,this._margin=o.margin||0,this._numFrames=o.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(o=data.animations)){this._data={};var name;for(name in o){var anim={name:name},obj=o[name];if("number"==typeof obj)a=anim.frames=[obj];else if(Array.isArray(obj))if(1==obj.length)anim.frames=[obj[0]];else for(anim.speed=obj[3],anim.next=obj[2],a=anim.frames=[],i=obj[0];i<=obj[1];i++)a.push(i);else{anim.speed=obj.speed,anim.next=obj.next;var frames=obj.frames;a=anim.frames="number"==typeof frames?[frames]:frames.slice(0)}anim.next!==!0&&void 0!==anim.next||(anim.next=name),(anim.next===!1||a.length<2&&anim.next==name)&&(anim.next=null),anim.speed||(anim.speed=1),this._animations.push(name),this._data[name]=anim}}}},p._handleImageLoad=function(src){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},p._handleImageError=function(src){var errorEvent=new createjs.Event("error");errorEvent.src=src,this.dispatchEvent(errorEvent),0==--this._loadCount&&this.dispatchEvent("complete")},p._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var maxFrames=this._numFrames||1e5,frameCount=0,frameWidth=this._frameWidth,frameHeight=this._frameHeight,spacing=this._spacing,margin=this._margin;imgLoop:for(var i=0,imgs=this._images;i<imgs.length;i++)for(var img=imgs[i],imgW=img.width,imgH=img.height,y=margin;y<=imgH-margin-frameHeight;){for(var x=margin;x<=imgW-margin-frameWidth;){if(frameCount>=maxFrames)break imgLoop;frameCount++,this._frames.push({image:img,rect:new createjs.Rectangle(x,y,frameWidth,frameHeight),regX:this._regX,regY:this._regY}),x+=frameWidth+spacing}y+=frameHeight+spacing}this._numFrames=frameCount}},createjs.SpriteSheet=createjs.promote(SpriteSheet,"EventDispatcher")}(),function(){"use strict";function Graphics(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var p=Graphics.prototype,G=Graphics;Graphics.getRGB=function(r,g,b,alpha){return null!=r&&null==b&&(alpha=g,b=255&r,g=r>>8&255,r=r>>16&255),null==alpha?"rgb("+r+","+g+","+b+")":"rgba("+r+","+g+","+b+","+alpha+")"},Graphics.getHSL=function(hue,saturation,lightness,alpha){return null==alpha?"hsl("+hue%360+","+saturation+"%,"+lightness+"%)":"hsla("+hue%360+","+saturation+"%,"+lightness+"%,"+alpha+")"},Graphics.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},Graphics.STROKE_CAPS_MAP=["butt","round","square"],Graphics.STROKE_JOINTS_MAP=["miter","round","bevel"];var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(Graphics._ctx=canvas.getContext("2d"),canvas.width=canvas.height=1),p.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(p,{instructions:{get:p.getInstructions}})}catch(e){}p.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},p.draw=function(ctx,data){this._updateInstructions();for(var instr=this._instructions,i=this._storeIndex,l=instr.length;i<l;i++)instr[i].exec(ctx,data)},p.drawAsPath=function(ctx){this._updateInstructions();for(var instr,instrs=this._instructions,i=this._storeIndex,l=instrs.length;i<l;i++)(instr=instrs[i]).path!==!1&&instr.exec(ctx)},p.moveTo=function(x,y){return this.append(new G.MoveTo(x,y),!0)},p.lineTo=function(x,y){return this.append(new G.LineTo(x,y))},p.arcTo=function(x1,y1,x2,y2,radius){return this.append(new G.ArcTo(x1,y1,x2,y2,radius))},p.arc=function(x,y,radius,startAngle,endAngle,anticlockwise){return this.append(new G.Arc(x,y,radius,startAngle,endAngle,anticlockwise))},p.quadraticCurveTo=function(cpx,cpy,x,y){return this.append(new G.QuadraticCurveTo(cpx,cpy,x,y))},p.bezierCurveTo=function(cp1x,cp1y,cp2x,cp2y,x,y){return this.append(new G.BezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y))},p.rect=function(x,y,w,h){return this.append(new G.Rect(x,y,w,h))},p.closePath=function(){return this._activeInstructions.length?this.append(new G.ClosePath):this},p.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},p.beginFill=function(color){return this._setFill(color?new G.Fill(color):null)},p.beginLinearGradientFill=function(colors,ratios,x0,y0,x1,y1){return this._setFill((new G.Fill).linearGradient(colors,ratios,x0,y0,x1,y1))},p.beginRadialGradientFill=function(colors,ratios,x0,y0,r0,x1,y1,r1){return this._setFill((new G.Fill).radialGradient(colors,ratios,x0,y0,r0,x1,y1,r1))},p.beginBitmapFill=function(image,repetition,matrix){return this._setFill(new G.Fill(null,matrix).bitmap(image,repetition))},p.endFill=function(){return this.beginFill()},p.setStrokeStyle=function(thickness,caps,joints,miterLimit,ignoreScale){return this._updateInstructions(!0),this._strokeStyle=this.command=new G.StrokeStyle(thickness,caps,joints,miterLimit,ignoreScale),this._stroke&&(this._stroke.ignoreScale=ignoreScale),this._strokeIgnoreScale=ignoreScale,this},p.setStrokeDash=function(segments,offset){return this._updateInstructions(!0),this._strokeDash=this.command=new G.StrokeDash(segments,offset),this},p.beginStroke=function(color){return this._setStroke(color?new G.Stroke(color):null)},p.beginLinearGradientStroke=function(colors,ratios,x0,y0,x1,y1){return this._setStroke((new G.Stroke).linearGradient(colors,ratios,x0,y0,x1,y1))},p.beginRadialGradientStroke=function(colors,ratios,x0,y0,r0,x1,y1,r1){return this._setStroke((new G.Stroke).radialGradient(colors,ratios,x0,y0,r0,x1,y1,r1))},p.beginBitmapStroke=function(image,repetition){return this._setStroke((new G.Stroke).bitmap(image,repetition))},p.endStroke=function(){return this.beginStroke()},p.curveTo=p.quadraticCurveTo,p.drawRect=p.rect,p.drawRoundRect=function(x,y,w,h,radius){return this.drawRoundRectComplex(x,y,w,h,radius,radius,radius,radius)},p.drawRoundRectComplex=function(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL){return this.append(new G.RoundRect(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL))},p.drawCircle=function(x,y,radius){return this.append(new G.Circle(x,y,radius))},p.drawEllipse=function(x,y,w,h){return this.append(new G.Ellipse(x,y,w,h))},p.drawPolyStar=function(x,y,radius,sides,pointSize,angle){return this.append(new G.PolyStar(x,y,radius,sides,pointSize,angle))},p.append=function(command,clean){return this._activeInstructions.push(command),this.command=command,clean||(this._dirty=!0),this},p.decodePath=function(str){for(var instructions=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],paramCount=[2,2,4,6,0],i=0,l=str.length,params=[],x=0,y=0,base64=Graphics.BASE_64;i<l;){var c=str.charAt(i),n=base64[c],fi=n>>3,f=instructions[fi];if(!f||3&n)throw"bad path data (@"+i+"): "+c;
	var pl=paramCount[fi];fi||(x=y=0),params.length=0,i++;for(var charCount=(n>>2&1)+2,p=0;p<pl;p++){var num=base64[str.charAt(i)],sign=num>>5?-1:1;num=(31&num)<<6|base64[str.charAt(i+1)],3==charCount&&(num=num<<6|base64[str.charAt(i+2)]),num=sign*num/10,p%2?x=num+=x:y=num+=y,params[p]=num,i+=charCount}f.apply(this,params)}return this},p.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},p.unstore=function(){return this._storeIndex=0,this},p.clone=function(){var o=new Graphics;return o.command=this.command,o._stroke=this._stroke,o._strokeStyle=this._strokeStyle,o._strokeDash=this._strokeDash,o._strokeIgnoreScale=this._strokeIgnoreScale,o._fill=this._fill,o._instructions=this._instructions.slice(),o._commitIndex=this._commitIndex,o._activeInstructions=this._activeInstructions.slice(),o._dirty=this._dirty,o._storeIndex=this._storeIndex,o},p.toString=function(){return"[Graphics]"},p.mt=p.moveTo,p.lt=p.lineTo,p.at=p.arcTo,p.bt=p.bezierCurveTo,p.qt=p.quadraticCurveTo,p.a=p.arc,p.r=p.rect,p.cp=p.closePath,p.c=p.clear,p.f=p.beginFill,p.lf=p.beginLinearGradientFill,p.rf=p.beginRadialGradientFill,p.bf=p.beginBitmapFill,p.ef=p.endFill,p.ss=p.setStrokeStyle,p.sd=p.setStrokeDash,p.s=p.beginStroke,p.ls=p.beginLinearGradientStroke,p.rs=p.beginRadialGradientStroke,p.bs=p.beginBitmapStroke,p.es=p.endStroke,p.dr=p.drawRect,p.rr=p.drawRoundRect,p.rc=p.drawRoundRectComplex,p.dc=p.drawCircle,p.de=p.drawEllipse,p.dp=p.drawPolyStar,p.p=p.decodePath,p._updateInstructions=function(commit){var instr=this._instructions,active=this._activeInstructions,commitIndex=this._commitIndex;if(this._dirty&&active.length){instr.length=commitIndex,instr.push(Graphics.beginCmd);var l=active.length,ll=instr.length;instr.length=ll+l;for(var i=0;i<l;i++)instr[i+ll]=active[i];this._fill&&instr.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,instr.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,instr.push(this._strokeStyle)),instr.push(this._stroke)),this._dirty=!1}commit&&(active.length=0,this._commitIndex=instr.length)},p._setFill=function(fill){return this._updateInstructions(!0),this.command=this._fill=fill,this},p._setStroke=function(stroke){return this._updateInstructions(!0),(this.command=this._stroke=stroke)&&(stroke.ignoreScale=this._strokeIgnoreScale),this},(G.LineTo=function(x,y){this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.lineTo(this.x,this.y)},(G.MoveTo=function(x,y){this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.moveTo(this.x,this.y)},(G.ArcTo=function(x1,y1,x2,y2,radius){this.x1=x1,this.y1=y1,this.x2=x2,this.y2=y2,this.radius=radius}).prototype.exec=function(ctx){ctx.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(G.Arc=function(x,y,radius,startAngle,endAngle,anticlockwise){this.x=x,this.y=y,this.radius=radius,this.startAngle=startAngle,this.endAngle=endAngle,this.anticlockwise=!!anticlockwise}).prototype.exec=function(ctx){ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(G.QuadraticCurveTo=function(cpx,cpy,x,y){this.cpx=cpx,this.cpy=cpy,this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(G.BezierCurveTo=function(cp1x,cp1y,cp2x,cp2y,x,y){this.cp1x=cp1x,this.cp1y=cp1y,this.cp2x=cp2x,this.cp2y=cp2y,this.x=x,this.y=y}).prototype.exec=function(ctx){ctx.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(G.Rect=function(x,y,w,h){this.x=x,this.y=y,this.w=w,this.h=h}).prototype.exec=function(ctx){ctx.rect(this.x,this.y,this.w,this.h)},(G.ClosePath=function(){}).prototype.exec=function(ctx){ctx.closePath()},(G.BeginPath=function(){}).prototype.exec=function(ctx){ctx.beginPath()},p=(G.Fill=function(style,matrix){this.style=style,this.matrix=matrix}).prototype,p.exec=function(ctx){if(this.style){ctx.fillStyle=this.style;var mtx=this.matrix;mtx&&(ctx.save(),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty)),ctx.fill(),mtx&&ctx.restore()}},p.linearGradient=function(colors,ratios,x0,y0,x1,y1){for(var o=this.style=Graphics._ctx.createLinearGradient(x0,y0,x1,y1),i=0,l=colors.length;i<l;i++)o.addColorStop(ratios[i],colors[i]);return o.props={colors:colors,ratios:ratios,x0:x0,y0:y0,x1:x1,y1:y1,type:"linear"},this},p.radialGradient=function(colors,ratios,x0,y0,r0,x1,y1,r1){for(var o=this.style=Graphics._ctx.createRadialGradient(x0,y0,r0,x1,y1,r1),i=0,l=colors.length;i<l;i++)o.addColorStop(ratios[i],colors[i]);return o.props={colors:colors,ratios:ratios,x0:x0,y0:y0,r0:r0,x1:x1,y1:y1,r1:r1,type:"radial"},this},p.bitmap=function(image,repetition){if(image.naturalWidth||image.getContext||image.readyState>=2){var o=this.style=Graphics._ctx.createPattern(image,repetition||"");o.props={image:image,repetition:repetition,type:"bitmap"}}return this},p.path=!1,p=(G.Stroke=function(style,ignoreScale){this.style=style,this.ignoreScale=ignoreScale}).prototype,p.exec=function(ctx){this.style&&(ctx.strokeStyle=this.style,this.ignoreScale&&(ctx.save(),ctx.setTransform(1,0,0,1,0,0)),ctx.stroke(),this.ignoreScale&&ctx.restore())},p.linearGradient=G.Fill.prototype.linearGradient,p.radialGradient=G.Fill.prototype.radialGradient,p.bitmap=G.Fill.prototype.bitmap,p.path=!1,p=(G.StrokeStyle=function(width,caps,joints,miterLimit,ignoreScale){this.width=width,this.caps=caps,this.joints=joints,this.miterLimit=miterLimit,this.ignoreScale=ignoreScale}).prototype,p.exec=function(ctx){ctx.lineWidth=null==this.width?"1":this.width,ctx.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:Graphics.STROKE_CAPS_MAP[this.caps],ctx.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:Graphics.STROKE_JOINTS_MAP[this.joints],ctx.miterLimit=null==this.miterLimit?"10":this.miterLimit,ctx.ignoreScale=null!=this.ignoreScale&&this.ignoreScale},p.path=!1,(G.StrokeDash=function(segments,offset){this.segments=segments,this.offset=offset||0}).prototype.exec=function(ctx){ctx.setLineDash&&(ctx.setLineDash(this.segments||G.StrokeDash.EMPTY_SEGMENTS),ctx.lineDashOffset=this.offset||0)},G.StrokeDash.EMPTY_SEGMENTS=[],(G.RoundRect=function(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL){this.x=x,this.y=y,this.w=w,this.h=h,this.radiusTL=radiusTL,this.radiusTR=radiusTR,this.radiusBR=radiusBR,this.radiusBL=radiusBL}).prototype.exec=function(ctx){var max=(w<h?w:h)/2,mTL=0,mTR=0,mBR=0,mBL=0,x=this.x,y=this.y,w=this.w,h=this.h,rTL=this.radiusTL,rTR=this.radiusTR,rBR=this.radiusBR,rBL=this.radiusBL;rTL<0&&(rTL*=mTL=-1),rTL>max&&(rTL=max),rTR<0&&(rTR*=mTR=-1),rTR>max&&(rTR=max),rBR<0&&(rBR*=mBR=-1),rBR>max&&(rBR=max),rBL<0&&(rBL*=mBL=-1),rBL>max&&(rBL=max),ctx.moveTo(x+w-rTR,y),ctx.arcTo(x+w+rTR*mTR,y-rTR*mTR,x+w,y+rTR,rTR),ctx.lineTo(x+w,y+h-rBR),ctx.arcTo(x+w+rBR*mBR,y+h+rBR*mBR,x+w-rBR,y+h,rBR),ctx.lineTo(x+rBL,y+h),ctx.arcTo(x-rBL*mBL,y+h+rBL*mBL,x,y+h-rBL,rBL),ctx.lineTo(x,y+rTL),ctx.arcTo(x-rTL*mTL,y-rTL*mTL,x+rTL,y,rTL),ctx.closePath()},(G.Circle=function(x,y,radius){this.x=x,this.y=y,this.radius=radius}).prototype.exec=function(ctx){ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)},(G.Ellipse=function(x,y,w,h){this.x=x,this.y=y,this.w=w,this.h=h}).prototype.exec=function(ctx){var x=this.x,y=this.y,w=this.w,h=this.h,k=.5522848,ox=w/2*k,oy=h/2*k,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;ctx.moveTo(x,ym),ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y),ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym),ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye),ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym)},(G.PolyStar=function(x,y,radius,sides,pointSize,angle){this.x=x,this.y=y,this.radius=radius,this.sides=sides,this.pointSize=pointSize,this.angle=angle}).prototype.exec=function(ctx){var x=this.x,y=this.y,radius=this.radius,angle=(this.angle||0)/180*Math.PI,sides=this.sides,ps=1-(this.pointSize||0),a=Math.PI/sides;ctx.moveTo(x+Math.cos(angle)*radius,y+Math.sin(angle)*radius);for(var i=0;i<sides;i++)angle+=a,1!=ps&&ctx.lineTo(x+Math.cos(angle)*radius*ps,y+Math.sin(angle)*radius*ps),angle+=a,ctx.lineTo(x+Math.cos(angle)*radius,y+Math.sin(angle)*radius);ctx.closePath()},Graphics.beginCmd=new G.BeginPath,createjs.Graphics=Graphics}(),function(){"use strict";function DisplayObject(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null}var p=createjs.extend(DisplayObject,createjs.EventDispatcher);DisplayObject._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],DisplayObject.suppressCrossDomainErrors=!1,DisplayObject._snapToPixelEnabled=!1;var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(DisplayObject._hitTestCanvas=canvas,DisplayObject._hitTestContext=canvas.getContext("2d"),canvas.width=canvas.height=1),DisplayObject._nextCacheID=1,p.getStage=function(){for(var o=this,_Stage=createjs.Stage;o.parent;)o=o.parent;return o instanceof _Stage?o:null};try{Object.defineProperties(p,{stage:{get:p.getStage}})}catch(e){}p.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},p.draw=function(ctx,ignoreCache){var cacheCanvas=this.cacheCanvas;if(ignoreCache||!cacheCanvas)return!1;var scale=this._cacheScale;return ctx.drawImage(cacheCanvas,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,cacheCanvas.width/scale,cacheCanvas.height/scale),!0},p.updateContext=function(ctx){var o=this,mask=o.mask,mtx=o._props.matrix;mask&&mask.graphics&&!mask.graphics.isEmpty()&&(mask.getMatrix(mtx),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty),mask.graphics.drawAsPath(ctx),ctx.clip(),mtx.invert(),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty)),this.getMatrix(mtx);var tx=mtx.tx,ty=mtx.ty;DisplayObject._snapToPixelEnabled&&o.snapToPixel&&(tx=tx+(tx<0?-.5:.5)|0,ty=ty+(ty<0?-.5:.5)|0),ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,tx,ty),ctx.globalAlpha*=o.alpha,o.compositeOperation&&(ctx.globalCompositeOperation=o.compositeOperation),o.shadow&&this._applyShadow(ctx,o.shadow)},p.cache=function(x,y,width,height,scale){scale=scale||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=width,this._cacheHeight=height,this._cacheOffsetX=x,this._cacheOffsetY=y,this._cacheScale=scale,this.updateCache()},p.updateCache=function(compositeOperation){var cacheCanvas=this.cacheCanvas;if(!cacheCanvas)throw"cache() must be called before updateCache()";var scale=this._cacheScale,offX=this._cacheOffsetX*scale,offY=this._cacheOffsetY*scale,w=this._cacheWidth,h=this._cacheHeight,ctx=cacheCanvas.getContext("2d"),fBounds=this._getFilterBounds();offX+=this._filterOffsetX=fBounds.x,offY+=this._filterOffsetY=fBounds.y,w=Math.ceil(w*scale)+fBounds.width,h=Math.ceil(h*scale)+fBounds.height,w!=cacheCanvas.width||h!=cacheCanvas.height?(cacheCanvas.width=w,cacheCanvas.height=h):compositeOperation||ctx.clearRect(0,0,w+1,h+1),ctx.save(),ctx.globalCompositeOperation=compositeOperation,ctx.setTransform(scale,0,0,scale,-offX,-offY),this.draw(ctx,!0),this._applyFilters(),ctx.restore(),this.cacheID=DisplayObject._nextCacheID++},p.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},p.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},p.localToGlobal=function(x,y,pt){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x,y,pt||new createjs.Point)},p.globalToLocal=function(x,y,pt){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x,y,pt||new createjs.Point)},p.localToLocal=function(x,y,target,pt){return pt=this.localToGlobal(x,y,pt),target.globalToLocal(pt.x,pt.y,pt)},p.setTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){return this.x=x||0,this.y=y||0,this.scaleX=null==scaleX?1:scaleX,this.scaleY=null==scaleY?1:scaleY,this.rotation=rotation||0,this.skewX=skewX||0,this.skewY=skewY||0,this.regX=regX||0,this.regY=regY||0,this},p.getMatrix=function(matrix){var o=this,mtx=matrix&&matrix.identity()||new createjs.Matrix2D;return o.transformMatrix?mtx.copy(o.transformMatrix):mtx.appendTransform(o.x,o.y,o.scaleX,o.scaleY,o.rotation,o.skewX,o.skewY,o.regX,o.regY)},p.getConcatenatedMatrix=function(matrix){for(var o=this,mtx=this.getMatrix(matrix);o=o.parent;)mtx.prependMatrix(o.getMatrix(o._props.matrix));return mtx},p.getConcatenatedDisplayProps=function(props){props=props?props.identity():new createjs.DisplayProps;var o=this,mtx=o.getMatrix(props.matrix);do props.prepend(o.visible,o.alpha,o.shadow,o.compositeOperation),o!=this&&mtx.prependMatrix(o.getMatrix(o._props.matrix));while(o=o.parent);return props},p.hitTest=function(x,y){var ctx=DisplayObject._hitTestContext;ctx.setTransform(1,0,0,1,-x,-y),this.draw(ctx);var hit=this._testHit(ctx);return ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,2,2),hit},p.set=function(props){for(var n in props)this[n]=props[n];return this},p.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var cacheCanvas=this.cacheCanvas;if(cacheCanvas){var scale=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,cacheCanvas.width/scale,cacheCanvas.height/scale)}return null},p.getTransformedBounds=function(){return this._getBounds()},p.setBounds=function(x,y,width,height){null==x&&(this._bounds=x),this._bounds=(this._bounds||new createjs.Rectangle).setValues(x,y,width,height)},p.clone=function(){return this._cloneProps(new DisplayObject)},p.toString=function(){return"[DisplayObject (name="+this.name+")]"},p._cloneProps=function(o){return o.alpha=this.alpha,o.mouseEnabled=this.mouseEnabled,o.tickEnabled=this.tickEnabled,o.name=this.name,o.regX=this.regX,o.regY=this.regY,o.rotation=this.rotation,o.scaleX=this.scaleX,o.scaleY=this.scaleY,o.shadow=this.shadow,o.skewX=this.skewX,o.skewY=this.skewY,o.visible=this.visible,o.x=this.x,o.y=this.y,o.compositeOperation=this.compositeOperation,o.snapToPixel=this.snapToPixel,o.filters=null==this.filters?null:this.filters.slice(0),o.mask=this.mask,o.hitArea=this.hitArea,o.cursor=this.cursor,o._bounds=this._bounds,o},p._applyShadow=function(ctx,shadow){shadow=shadow||Shadow.identity,ctx.shadowColor=shadow.color,ctx.shadowOffsetX=shadow.offsetX,ctx.shadowOffsetY=shadow.offsetY,ctx.shadowBlur=shadow.blur},p._tick=function(evtObj){var ls=this._listeners;ls&&ls.tick&&(evtObj.target=null,evtObj.propagationStopped=evtObj.immediatePropagationStopped=!1,this.dispatchEvent(evtObj))},p._testHit=function(ctx){try{var hit=ctx.getImageData(0,0,1,1).data[3]>1}catch(e){if(!DisplayObject.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return hit},p._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var l=this.filters.length,ctx=this.cacheCanvas.getContext("2d"),w=this.cacheCanvas.width,h=this.cacheCanvas.height,i=0;i<l;i++)this.filters[i].applyFilter(ctx,0,0,w,h)},p._getFilterBounds=function(rect){var l,filters=this.filters,bounds=this._rectangle.setValues(0,0,0,0);if(!filters||!(l=filters.length))return bounds;for(var i=0;i<l;i++){var f=this.filters[i];f.getBounds&&f.getBounds(bounds)}return bounds},p._getBounds=function(matrix,ignoreTransform){return this._transformBounds(this.getBounds(),matrix,ignoreTransform)},p._transformBounds=function(bounds,matrix,ignoreTransform){if(!bounds)return bounds;var x=bounds.x,y=bounds.y,width=bounds.width,height=bounds.height,mtx=this._props.matrix;mtx=ignoreTransform?mtx.identity():this.getMatrix(mtx),(x||y)&&mtx.appendTransform(0,0,1,1,0,0,0,-x,-y),matrix&&mtx.prependMatrix(matrix);var x_a=width*mtx.a,x_b=width*mtx.b,y_c=height*mtx.c,y_d=height*mtx.d,tx=mtx.tx,ty=mtx.ty,minX=tx,maxX=tx,minY=ty,maxY=ty;return(x=x_a+tx)<minX?minX=x:x>maxX&&(maxX=x),(x=x_a+y_c+tx)<minX?minX=x:x>maxX&&(maxX=x),(x=y_c+tx)<minX?minX=x:x>maxX&&(maxX=x),(y=x_b+ty)<minY?minY=y:y>maxY&&(maxY=y),(y=x_b+y_d+ty)<minY?minY=y:y>maxY&&(maxY=y),(y=y_d+ty)<minY?minY=y:y>maxY&&(maxY=y),bounds.setValues(minX,minY,maxX-minX,maxY-minY)},p._hasMouseEventListener=function(){for(var evts=DisplayObject._MOUSE_EVENTS,i=0,l=evts.length;i<l;i++)if(this.hasEventListener(evts[i]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(DisplayObject,"EventDispatcher")}(),function(){"use strict";function Container(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var p=createjs.extend(Container,createjs.DisplayObject);p.getNumChildren=function(){return this.children.length};try{Object.defineProperties(p,{numChildren:{get:p.getNumChildren}})}catch(e){}p.initialize=Container,p.isVisible=function(){var hasContent=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache))return!0;for(var list=this.children.slice(),i=0,l=list.length;i<l;i++){var child=list[i];child.isVisible()&&(ctx.save(),child.updateContext(ctx),child.draw(ctx),ctx.restore())}return!0},p.addChild=function(child){if(null==child)return child;var l=arguments.length;if(l>1){for(var i=0;i<l;i++)this.addChild(arguments[i]);return arguments[l-1]}return child.parent&&child.parent.removeChild(child),child.parent=this,this.children.push(child),child.dispatchEvent("added"),child},p.addChildAt=function(child,index){var l=arguments.length,indx=arguments[l-1];if(indx<0||indx>this.children.length)return arguments[l-2];if(l>2){for(var i=0;i<l-1;i++)this.addChildAt(arguments[i],indx+i);return arguments[l-2]}return child.parent&&child.parent.removeChild(child),child.parent=this,this.children.splice(index,0,child),child.dispatchEvent("added"),child},p.removeChild=function(child){var l=arguments.length;if(l>1){for(var good=!0,i=0;i<l;i++)good=good&&this.removeChild(arguments[i]);return good}return this.removeChildAt(createjs.indexOf(this.children,child))},p.removeChildAt=function(index){var l=arguments.length;if(l>1){for(var a=[],i=0;i<l;i++)a[i]=arguments[i];a.sort(function(a,b){return b-a});for(var good=!0,i=0;i<l;i++)good=good&&this.removeChildAt(a[i]);return good}if(index<0||index>this.children.length-1)return!1;var child=this.children[index];return child&&(child.parent=null),this.children.splice(index,1),child.dispatchEvent("removed"),!0},p.removeAllChildren=function(){for(var kids=this.children;kids.length;)this.removeChildAt(0)},p.getChildAt=function(index){return this.children[index]},p.getChildByName=function(name){for(var kids=this.children,i=0,l=kids.length;i<l;i++)if(kids[i].name==name)return kids[i];return null},p.sortChildren=function(sortFunction){this.children.sort(sortFunction)},p.getChildIndex=function(child){return createjs.indexOf(this.children,child)},p.swapChildrenAt=function(index1,index2){var kids=this.children,o1=kids[index1],o2=kids[index2];o1&&o2&&(kids[index1]=o2,kids[index2]=o1)},p.swapChildren=function(child1,child2){for(var index1,index2,kids=this.children,i=0,l=kids.length;i<l&&(kids[i]==child1&&(index1=i),kids[i]==child2&&(index2=i),null==index1||null==index2);i++);i!=l&&(kids[index1]=child2,kids[index2]=child1)},p.setChildIndex=function(child,index){var kids=this.children,l=kids.length;if(!(child.parent!=this||index<0||index>=l)){for(var i=0;i<l&&kids[i]!=child;i++);i!=l&&i!=index&&(kids.splice(i,1),kids.splice(index,0,child))}},p.contains=function(child){for(;child;){if(child==this)return!0;child=child.parent}return!1},p.hitTest=function(x,y){return null!=this.getObjectUnderPoint(x,y)},p.getObjectsUnderPoint=function(x,y,mode){var arr=[],pt=this.localToGlobal(x,y);return this._getObjectsUnderPoint(pt.x,pt.y,arr,mode>0,1==mode),arr},p.getObjectUnderPoint=function(x,y,mode){var pt=this.localToGlobal(x,y);return this._getObjectsUnderPoint(pt.x,pt.y,null,mode>0,1==mode)},p.getBounds=function(){return this._getBounds(null,!0)},p.getTransformedBounds=function(){return this._getBounds()},p.clone=function(recursive){var o=this._cloneProps(new Container);return recursive&&this._cloneChildren(o),o},p.toString=function(){return"[Container (name="+this.name+")]"},p._tick=function(evtObj){if(this.tickChildren)for(var i=this.children.length-1;i>=0;i--){var child=this.children[i];child.tickEnabled&&child._tick&&child._tick(evtObj)}this.DisplayObject__tick(evtObj)},p._cloneChildren=function(o){o.children.length&&o.removeAllChildren();for(var arr=o.children,i=0,l=this.children.length;i<l;i++){var clone=this.children[i].clone(!0);clone.parent=o,arr.push(clone)}},p._getObjectsUnderPoint=function(x,y,arr,mouse,activeListener,currentDepth){if(currentDepth=currentDepth||0,!currentDepth&&!this._testMask(this,x,y))return null;var mtx,ctx=createjs.DisplayObject._hitTestContext;activeListener=activeListener||mouse&&this._hasMouseEventListener();for(var children=this.children,l=children.length,i=l-1;i>=0;i--){var child=children[i],hitArea=child.hitArea;if(child.visible&&(hitArea||child.isVisible())&&(!mouse||child.mouseEnabled)&&(hitArea||this._testMask(child,x,y)))if(!hitArea&&child instanceof Container){var result=child._getObjectsUnderPoint(x,y,arr,mouse,activeListener,currentDepth+1);if(!arr&&result)return mouse&&!this.mouseChildren?this:result}else{if(mouse&&!activeListener&&!child._hasMouseEventListener())continue;var props=child.getConcatenatedDisplayProps(child._props);if(mtx=props.matrix,hitArea&&(mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix)),props.alpha=hitArea.alpha),ctx.globalAlpha=props.alpha,ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx-x,mtx.ty-y),(hitArea||child).draw(ctx),!this._testHit(ctx))continue;if(ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,2,2),!arr)return mouse&&!this.mouseChildren?this:child;arr.push(child)}}return null},p._testMask=function(target,x,y){var mask=target.mask;if(!mask||!mask.graphics||mask.graphics.isEmpty())return!0;var mtx=this._props.matrix,parent=target.parent;mtx=parent?parent.getConcatenatedMatrix(mtx):mtx.identity(),mtx=mask.getMatrix(mask._props.matrix).prependMatrix(mtx);var ctx=createjs.DisplayObject._hitTestContext;return ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx-x,mtx.ty-y),mask.graphics.drawAsPath(ctx),ctx.fillStyle="#000",ctx.fill(),!!this._testHit(ctx)&&(ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,2,2),!0)},p._getBounds=function(matrix,ignoreTransform){var bounds=this.DisplayObject_getBounds();if(bounds)return this._transformBounds(bounds,matrix,ignoreTransform);var mtx=this._props.matrix;mtx=ignoreTransform?mtx.identity():this.getMatrix(mtx),matrix&&mtx.prependMatrix(matrix);for(var l=this.children.length,rect=null,i=0;i<l;i++){var child=this.children[i];child.visible&&(bounds=child._getBounds(mtx))&&(rect?rect.extend(bounds.x,bounds.y,bounds.width,bounds.height):rect=bounds.clone())}return rect},createjs.Container=createjs.promote(Container,"DisplayObject")}(),function(){"use strict";function Stage(canvas){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof canvas?document.getElementById(canvas):canvas,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var p=createjs.extend(Stage,createjs.Container);p._get_nextStage=function(){return this._nextStage},p._set_nextStage=function(value){this._nextStage&&(this._nextStage._prevStage=null),value&&(value._prevStage=this),this._nextStage=value};try{Object.defineProperties(p,{nextStage:{get:p._get_nextStage,set:p._set_nextStage}})}catch(e){}p.update=function(props){if(this.canvas&&(this.tickOnUpdate&&this.tick(props),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var r=this.drawRect,ctx=this.canvas.getContext("2d");ctx.setTransform(1,0,0,1,0,0),this.autoClear&&(r?ctx.clearRect(r.x,r.y,r.width,r.height):ctx.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),ctx.save(),this.drawRect&&(ctx.beginPath(),ctx.rect(r.x,r.y,r.width,r.height),ctx.clip()),this.updateContext(ctx),this.draw(ctx,!1),ctx.restore(),this.dispatchEvent("drawend")}},p.tick=function(props){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var evtObj=new createjs.Event("tick");if(props)for(var n in props)props.hasOwnProperty(n)&&(evtObj[n]=props[n]);this._tick(evtObj),this.dispatchEvent("tickend")}},p.handleEvent=function(evt){"tick"==evt.type&&this.update(evt)},p.clear=function(){if(this.canvas){var ctx=this.canvas.getContext("2d");ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},p.toDataURL=function(backgroundColor,mimeType){var data,ctx=this.canvas.getContext("2d"),w=this.canvas.width,h=this.canvas.height;if(backgroundColor){data=ctx.getImageData(0,0,w,h);var compositeOperation=ctx.globalCompositeOperation;ctx.globalCompositeOperation="destination-over",ctx.fillStyle=backgroundColor,ctx.fillRect(0,0,w,h)}var dataURL=this.canvas.toDataURL(mimeType||"image/png");return backgroundColor&&(ctx.putImageData(data,0,0),ctx.globalCompositeOperation=compositeOperation),dataURL},p.enableMouseOver=function(frequency){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==frequency&&this._testMouseOver(!0)),null==frequency)frequency=20;else if(frequency<=0)return;var o=this;this._mouseOverIntervalID=setInterval(function(){o._testMouseOver()},1e3/Math.min(50,frequency))},p.enableDOMEvents=function(enable){null==enable&&(enable=!0);var n,o,ls=this._eventListeners;if(!enable&&ls){for(n in ls)o=ls[n],o.t.removeEventListener(n,o.f,!1);this._eventListeners=null}else if(enable&&!ls&&this.canvas){var t=window.addEventListener?window:document,_this=this;ls=this._eventListeners={},ls.mouseup={t:t,f:function(e){_this._handleMouseUp(e)}},ls.mousemove={t:t,f:function(e){_this._handleMouseMove(e)}},ls.dblclick={t:this.canvas,f:function(e){_this._handleDoubleClick(e)}},ls.mousedown={t:this.canvas,f:function(e){_this._handleMouseDown(e)}};for(n in ls)o=ls[n],o.t.addEventListener(n,o.f,!1)}},p.clone=function(){throw"Stage cannot be cloned."},p.toString=function(){return"[Stage (name="+this.name+")]"},p._getElementRect=function(e){var bounds;try{bounds=e.getBoundingClientRect()}catch(err){bounds={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}}var offX=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),offY=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),styles=window.getComputedStyle?getComputedStyle(e,null):e.currentStyle,padL=parseInt(styles.paddingLeft)+parseInt(styles.borderLeftWidth),padT=parseInt(styles.paddingTop)+parseInt(styles.borderTopWidth),padR=parseInt(styles.paddingRight)+parseInt(styles.borderRightWidth),padB=parseInt(styles.paddingBottom)+parseInt(styles.borderBottomWidth);return{left:bounds.left+offX+padL,right:bounds.right+offX-padR,top:bounds.top+offY+padT,bottom:bounds.bottom+offY-padB}},p._getPointerData=function(id){var data=this._pointerData[id];return data||(data=this._pointerData[id]={x:0,y:0}),data},p._handleMouseMove=function(e){e||(e=window.event),this._handlePointerMove(-1,e,e.pageX,e.pageY)},p._handlePointerMove=function(id,e,pageX,pageY,owner){if((!this._prevStage||void 0!==owner)&&this.canvas){var nextStage=this._nextStage,o=this._getPointerData(id),inBounds=o.inBounds;this._updatePointerPosition(id,e,pageX,pageY),(inBounds||o.inBounds||this.mouseMoveOutside)&&(id===-1&&o.inBounds==!inBounds&&this._dispatchMouseEvent(this,inBounds?"mouseleave":"mouseenter",!1,id,o,e),this._dispatchMouseEvent(this,"stagemousemove",!1,id,o,e),this._dispatchMouseEvent(o.target,"pressmove",!0,id,o,e)),nextStage&&nextStage._handlePointerMove(id,e,pageX,pageY,null)}},p._updatePointerPosition=function(id,e,pageX,pageY){var rect=this._getElementRect(this.canvas);pageX-=rect.left,pageY-=rect.top;var w=this.canvas.width,h=this.canvas.height;pageX/=(rect.right-rect.left)/w,pageY/=(rect.bottom-rect.top)/h;var o=this._getPointerData(id);(o.inBounds=pageX>=0&&pageY>=0&&pageX<=w-1&&pageY<=h-1)?(o.x=pageX,o.y=pageY):this.mouseMoveOutside&&(o.x=pageX<0?0:pageX>w-1?w-1:pageX,o.y=pageY<0?0:pageY>h-1?h-1:pageY),o.posEvtObj=e,o.rawX=pageX,o.rawY=pageY,id!==this._primaryPointerID&&id!==-1||(this.mouseX=o.x,this.mouseY=o.y,this.mouseInBounds=o.inBounds)},p._handleMouseUp=function(e){this._handlePointerUp(-1,e,!1)},p._handlePointerUp=function(id,e,clear,owner){var nextStage=this._nextStage,o=this._getPointerData(id);if(!this._prevStage||void 0!==owner){var target=null,oTarget=o.target;owner||!oTarget&&!nextStage||(target=this._getObjectsUnderPoint(o.x,o.y,null,!0)),o.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,id,o,e,target),o.down=!1),target==oTarget&&this._dispatchMouseEvent(oTarget,"click",!0,id,o,e),this._dispatchMouseEvent(oTarget,"pressup",!0,id,o,e),clear?(id==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[id]):o.target=null,nextStage&&nextStage._handlePointerUp(id,e,clear,owner||target&&this)}},p._handleMouseDown=function(e){this._handlePointerDown(-1,e,e.pageX,e.pageY)},p._handlePointerDown=function(id,e,pageX,pageY,owner){this.preventSelection&&e.preventDefault(),null!=this._primaryPointerID&&id!==-1||(this._primaryPointerID=id),null!=pageY&&this._updatePointerPosition(id,e,pageX,pageY);var target=null,nextStage=this._nextStage,o=this._getPointerData(id);owner||(target=o.target=this._getObjectsUnderPoint(o.x,o.y,null,!0)),o.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,id,o,e,target),o.down=!0),this._dispatchMouseEvent(target,"mousedown",!0,id,o,e),nextStage&&nextStage._handlePointerDown(id,e,pageX,pageY,owner||target&&this)},p._testMouseOver=function(clear,owner,eventTarget){if(!this._prevStage||void 0!==owner){var nextStage=this._nextStage;if(!this._mouseOverIntervalID)return void(nextStage&&nextStage._testMouseOver(clear,owner,eventTarget));var o=this._getPointerData(-1);if(o&&(clear||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var t,i,l,e=o.posEvtObj,isEventTarget=eventTarget||e&&e.target==this.canvas,target=null,common=-1,cursor="";!owner&&(clear||this.mouseInBounds&&isEventTarget)&&(target=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var oldList=this._mouseOverTarget||[],oldTarget=oldList[oldList.length-1],list=this._mouseOverTarget=[];for(t=target;t;)list.unshift(t),cursor||(cursor=t.cursor),t=t.parent;for(this.canvas.style.cursor=cursor,!owner&&eventTarget&&(eventTarget.canvas.style.cursor=cursor),i=0,l=list.length;i<l&&list[i]==oldList[i];i++)common=i;for(oldTarget!=target&&this._dispatchMouseEvent(oldTarget,"mouseout",!0,-1,o,e,target),i=oldList.length-1;i>common;i--)this._dispatchMouseEvent(oldList[i],"rollout",!1,-1,o,e,target);for(i=list.length-1;i>common;i--)this._dispatchMouseEvent(list[i],"rollover",!1,-1,o,e,oldTarget);oldTarget!=target&&this._dispatchMouseEvent(target,"mouseover",!0,-1,o,e,oldTarget),
	nextStage&&nextStage._testMouseOver(clear,owner||target&&this,eventTarget||isEventTarget&&this)}}},p._handleDoubleClick=function(e,owner){var target=null,nextStage=this._nextStage,o=this._getPointerData(-1);owner||(target=this._getObjectsUnderPoint(o.x,o.y,null,!0),this._dispatchMouseEvent(target,"dblclick",!0,-1,o,e)),nextStage&&nextStage._handleDoubleClick(e,owner||target&&this)},p._dispatchMouseEvent=function(target,type,bubbles,pointerId,o,nativeEvent,relatedTarget){if(target&&(bubbles||target.hasEventListener(type))){var evt=new createjs.MouseEvent(type,bubbles,!1,o.x,o.y,nativeEvent,pointerId,pointerId===this._primaryPointerID||pointerId===-1,o.rawX,o.rawY,relatedTarget);target.dispatchEvent(evt)}},createjs.Stage=createjs.promote(Stage,"Container")}(),function(){function Bitmap(imageOrUri){this.DisplayObject_constructor(),"string"==typeof imageOrUri?(this.image=document.createElement("img"),this.image.src=imageOrUri):this.image=imageOrUri,this.sourceRect=null}var p=createjs.extend(Bitmap,createjs.DisplayObject);p.initialize=Bitmap,p.isVisible=function(){var image=this.image,hasContent=this.cacheCanvas||image&&(image.naturalWidth||image.getContext||image.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache)||!this.image)return!0;var img=this.image,rect=this.sourceRect;if(rect){var x1=rect.x,y1=rect.y,x2=x1+rect.width,y2=y1+rect.height,x=0,y=0,w=img.width,h=img.height;x1<0&&(x-=x1,x1=0),x2>w&&(x2=w),y1<0&&(y-=y1,y1=0),y2>h&&(y2=h),ctx.drawImage(img,x1,y1,x2-x1,y2-y1,x,y,x2-x1,y2-y1)}else ctx.drawImage(img,0,0);return!0},p.getBounds=function(){var rect=this.DisplayObject_getBounds();if(rect)return rect;var image=this.image,o=this.sourceRect||image,hasContent=image&&(image.naturalWidth||image.getContext||image.readyState>=2);return hasContent?this._rectangle.setValues(0,0,o.width,o.height):null},p.clone=function(){var o=new Bitmap(this.image);return this.sourceRect&&(o.sourceRect=this.sourceRect.clone()),this._cloneProps(o),o},p.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(Bitmap,"DisplayObject")}(),function(){"use strict";function Sprite(spriteSheet,frameOrAnimation){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=spriteSheet,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=frameOrAnimation&&this.gotoAndPlay(frameOrAnimation)}var p=createjs.extend(Sprite,createjs.DisplayObject);p.initialize=Sprite,p.isVisible=function(){var hasContent=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache))return!0;this._normalizeFrame();var o=this.spriteSheet.getFrame(0|this._currentFrame);if(!o)return!1;var rect=o.rect;return rect.width&&rect.height&&ctx.drawImage(o.image,rect.x,rect.y,rect.width,rect.height,-o.regX,-o.regY,rect.width,rect.height),!0},p.play=function(){this.paused=!1},p.stop=function(){this.paused=!0},p.gotoAndPlay=function(frameOrAnimation){this.paused=!1,this._skipAdvance=!0,this._goto(frameOrAnimation)},p.gotoAndStop=function(frameOrAnimation){this.paused=!0,this._goto(frameOrAnimation)},p.advance=function(time){var fps=this.framerate||this.spriteSheet.framerate,t=fps&&null!=time?time/(1e3/fps):1;this._normalizeFrame(t)},p.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},p.clone=function(){return this._cloneProps(new Sprite(this.spriteSheet))},p.toString=function(){return"[Sprite (name="+this.name+")]"},p._cloneProps=function(o){return this.DisplayObject__cloneProps(o),o.currentFrame=this.currentFrame,o.currentAnimation=this.currentAnimation,o.paused=this.paused,o.currentAnimationFrame=this.currentAnimationFrame,o.framerate=this.framerate,o._animation=this._animation,o._currentFrame=this._currentFrame,o._skipAdvance=this._skipAdvance,o},p._tick=function(evtObj){this.paused||(this._skipAdvance||this.advance(evtObj&&evtObj.delta),this._skipAdvance=!1),this.DisplayObject__tick(evtObj)},p._normalizeFrame=function(frameDelta){frameDelta=frameDelta||0;var l,animation=this._animation,paused=this.paused,frame=this._currentFrame;if(animation){var speed=animation.speed||1,animFrame=this.currentAnimationFrame;if(l=animation.frames.length,animFrame+frameDelta*speed>=l){var next=animation.next;if(this._dispatchAnimationEnd(animation,frame,paused,next,l-1))return;if(next)return this._goto(next,frameDelta-(l-animFrame)/speed);this.paused=!0,animFrame=animation.frames.length-1}else animFrame+=frameDelta*speed;this.currentAnimationFrame=animFrame,this._currentFrame=animation.frames[0|animFrame]}else if(frame=this._currentFrame+=frameDelta,l=this.spriteSheet.getNumFrames(),frame>=l&&l>0&&!this._dispatchAnimationEnd(animation,frame,paused,l-1)&&(this._currentFrame-=l)>=l)return this._normalizeFrame();frame=0|this._currentFrame,this.currentFrame!=frame&&(this.currentFrame=frame,this.dispatchEvent("change"))},p._dispatchAnimationEnd=function(animation,frame,paused,next,end){var name=animation?animation.name:null;if(this.hasEventListener("animationend")){var evt=new createjs.Event("animationend");evt.name=name,evt.next=next,this.dispatchEvent(evt)}var changed=this._animation!=animation||this._currentFrame!=frame;return changed||paused||!this.paused||(this.currentAnimationFrame=end,changed=!0),changed},p._goto=function(frameOrAnimation,frame){if(this.currentAnimationFrame=0,isNaN(frameOrAnimation)){var data=this.spriteSheet.getAnimation(frameOrAnimation);data&&(this._animation=data,this.currentAnimation=frameOrAnimation,this._normalizeFrame(frame))}else this.currentAnimation=this._animation=null,this._currentFrame=frameOrAnimation,this._normalizeFrame()},createjs.Sprite=createjs.promote(Sprite,"DisplayObject")}(),function(){"use strict";function Shape(graphics){this.DisplayObject_constructor(),this.graphics=graphics?graphics:new createjs.Graphics}var p=createjs.extend(Shape,createjs.DisplayObject);p.isVisible=function(){var hasContent=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){return!!this.DisplayObject_draw(ctx,ignoreCache)||(this.graphics.draw(ctx,this),!0)},p.clone=function(recursive){var g=recursive&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new Shape(g))},p.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(Shape,"DisplayObject")}(),function(){"use strict";function Text(text,font,color){this.DisplayObject_constructor(),this.text=text,this.font=font,this.color=color,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var p=createjs.extend(Text,createjs.DisplayObject),canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(Text._workingContext=canvas.getContext("2d"),canvas.width=canvas.height=1),Text.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},Text.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},p.isVisible=function(){var hasContent=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&hasContent)},p.draw=function(ctx,ignoreCache){if(this.DisplayObject_draw(ctx,ignoreCache))return!0;var col=this.color||"#000";return this.outline?(ctx.strokeStyle=col,ctx.lineWidth=1*this.outline):ctx.fillStyle=col,this._drawText(this._prepContext(ctx)),!0},p.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},p.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},p.getMeasuredHeight=function(){return this._drawText(null,{}).height},p.getBounds=function(){var rect=this.DisplayObject_getBounds();if(rect)return rect;if(null==this.text||""===this.text)return null;var o=this._drawText(null,{}),w=this.maxWidth&&this.maxWidth<o.width?this.maxWidth:o.width,x=w*Text.H_OFFSETS[this.textAlign||"left"],lineHeight=this.lineHeight||this.getMeasuredLineHeight(),y=lineHeight*Text.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(x,y,w,o.height)},p.getMetrics=function(){var o={lines:[]};return o.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),o.vOffset=o.lineHeight*Text.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,o,o.lines)},p.clone=function(){return this._cloneProps(new Text(this.text,this.font,this.color))},p.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},p._cloneProps=function(o){return this.DisplayObject__cloneProps(o),o.textAlign=this.textAlign,o.textBaseline=this.textBaseline,o.maxWidth=this.maxWidth,o.outline=this.outline,o.lineHeight=this.lineHeight,o.lineWidth=this.lineWidth,o},p._prepContext=function(ctx){return ctx.font=this.font||"10px sans-serif",ctx.textAlign=this.textAlign||"left",ctx.textBaseline=this.textBaseline||"top",ctx},p._drawText=function(ctx,o,lines){var paint=!!ctx;paint||(ctx=Text._workingContext,ctx.save(),this._prepContext(ctx));for(var lineHeight=this.lineHeight||this.getMeasuredLineHeight(),maxW=0,count=0,hardLines=String(this.text).split(/(?:\r\n|\r|\n)/),i=0,l=hardLines.length;i<l;i++){var str=hardLines[i],w=null;if(null!=this.lineWidth&&(w=ctx.measureText(str).width)>this.lineWidth){var words=str.split(/(\s)/);str=words[0],w=ctx.measureText(str).width;for(var j=1,jl=words.length;j<jl;j+=2){var wordW=ctx.measureText(words[j]+words[j+1]).width;w+wordW>this.lineWidth?(paint&&this._drawTextLine(ctx,str,count*lineHeight),lines&&lines.push(str),w>maxW&&(maxW=w),str=words[j+1],w=ctx.measureText(str).width,count++):(str+=words[j]+words[j+1],w+=wordW)}}paint&&this._drawTextLine(ctx,str,count*lineHeight),lines&&lines.push(str),o&&null==w&&(w=ctx.measureText(str).width),w>maxW&&(maxW=w),count++}return o&&(o.width=maxW,o.height=count*lineHeight),paint||ctx.restore(),o},p._drawTextLine=function(ctx,text,y){this.outline?ctx.strokeText(text,0,y,this.maxWidth||65535):ctx.fillText(text,0,y,this.maxWidth||65535)},p._getMeasuredWidth=function(text){var ctx=Text._workingContext;ctx.save();var w=this._prepContext(ctx).measureText(text).width;return ctx.restore(),w},createjs.Text=createjs.promote(Text,"DisplayObject")}(),function(){"use strict";function BitmapText(text,spriteSheet){this.Container_constructor(),this.text=text||"",this.spriteSheet=spriteSheet,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var p=createjs.extend(BitmapText,createjs.Container);BitmapText.maxPoolSize=100,BitmapText._spritePool=[],p.draw=function(ctx,ignoreCache){this.DisplayObject_draw(ctx,ignoreCache)||(this._updateText(),this.Container_draw(ctx,ignoreCache))},p.getBounds=function(){return this._updateText(),this.Container_getBounds()},p.isVisible=function(){var hasContent=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&hasContent)},p.clone=function(){return this._cloneProps(new BitmapText(this.text,this.spriteSheet))},p.addChild=p.addChildAt=p.removeChild=p.removeChildAt=p.removeAllChildren=function(){},p._cloneProps=function(o){return this.Container__cloneProps(o),o.lineHeight=this.lineHeight,o.letterSpacing=this.letterSpacing,o.spaceWidth=this.spaceWidth,o},p._getFrameIndex=function(character,spriteSheet){var c,o=spriteSheet.getAnimation(character);return o||(character!=(c=character.toUpperCase())||character!=(c=character.toLowerCase())||(c=null),c&&(o=spriteSheet.getAnimation(c))),o&&o.frames[0]},p._getFrame=function(character,spriteSheet){var index=this._getFrameIndex(character,spriteSheet);return null==index?index:spriteSheet.getFrame(index)},p._getLineHeight=function(ss){var frame=this._getFrame("1",ss)||this._getFrame("T",ss)||this._getFrame("L",ss)||ss.getFrame(0);return frame?frame.rect.height:1},p._getSpaceWidth=function(ss){var frame=this._getFrame("1",ss)||this._getFrame("l",ss)||this._getFrame("e",ss)||this._getFrame("a",ss)||ss.getFrame(0);return frame?frame.rect.width:1},p._updateText=function(){var sprite,x=0,y=0,o=this._oldProps,change=!1,spaceW=this.spaceWidth,lineH=this.lineHeight,ss=this.spriteSheet,pool=BitmapText._spritePool,kids=this.children,childIndex=0,numKids=kids.length;for(var n in o)o[n]!=this[n]&&(o[n]=this[n],change=!0);if(change){var hasSpace=!!this._getFrame(" ",ss);hasSpace||spaceW||(spaceW=this._getSpaceWidth(ss)),lineH||(lineH=this._getLineHeight(ss));for(var i=0,l=this.text.length;i<l;i++){var character=this.text.charAt(i);if(" "!=character||hasSpace)if("\n"!=character&&"\r"!=character){var index=this._getFrameIndex(character,ss);null!=index&&(childIndex<numKids?sprite=kids[childIndex]:(kids.push(sprite=pool.length?pool.pop():new createjs.Sprite),sprite.parent=this,numKids++),sprite.spriteSheet=ss,sprite.gotoAndStop(index),sprite.x=x,sprite.y=y,childIndex++,x+=sprite.getBounds().width+this.letterSpacing)}else"\r"==character&&"\n"==this.text.charAt(i+1)&&i++,x=0,y+=lineH;else x+=spaceW}for(;numKids>childIndex;)pool.push(sprite=kids.pop()),sprite.parent=null,numKids--;pool.length>BitmapText.maxPoolSize&&(pool.length=BitmapText.maxPoolSize)}},createjs.BitmapText=createjs.promote(BitmapText,"Container")}(),function(){"use strict";function MovieClip(mode,startPosition,loop,labels){this.Container_constructor(),!MovieClip.inited&&MovieClip.init(),this.mode=mode||MovieClip.INDEPENDENT,this.startPosition=startPosition||0,this.loop=loop,this.currentFrame=0,this.timeline=new createjs.Timeline(null,labels,{paused:!0,position:startPosition,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function MovieClipPlugin(){throw"MovieClipPlugin cannot be instantiated."}var p=createjs.extend(MovieClip,createjs.Container);MovieClip.INDEPENDENT="independent",MovieClip.SINGLE_FRAME="single",MovieClip.SYNCHED="synched",MovieClip.inited=!1,MovieClip.init=function(){MovieClip.inited||(MovieClipPlugin.install(),MovieClip.inited=!0)},p.getLabels=function(){return this.timeline.getLabels()},p.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},p.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(p,{labels:{get:p.getLabels},currentLabel:{get:p.getCurrentLabel},totalFrames:{get:p.getDuration},duration:{get:p.getDuration}})}catch(e){}p.initialize=MovieClip,p.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},p.draw=function(ctx,ignoreCache){return!!this.DisplayObject_draw(ctx,ignoreCache)||(this._updateTimeline(),this.Container_draw(ctx,ignoreCache),!0)},p.play=function(){this.paused=!1},p.stop=function(){this.paused=!0},p.gotoAndPlay=function(positionOrLabel){this.paused=!1,this._goto(positionOrLabel)},p.gotoAndStop=function(positionOrLabel){this.paused=!0,this._goto(positionOrLabel)},p.advance=function(time){var independent=MovieClip.INDEPENDENT;if(this.mode==independent){for(var o=this,fps=o.framerate;(o=o.parent)&&null==fps;)o.mode==independent&&(fps=o._framerate);this._framerate=fps;var t=null!=fps&&fps!=-1&&null!=time?time/(1e3/fps)+this._t:1,frames=0|t;for(this._t=t-frames;!this.paused&&frames--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},p.clone=function(){throw"MovieClip cannot be cloned."},p.toString=function(){return"[MovieClip (name="+this.name+")]"},p._tick=function(evtObj){this.advance(evtObj&&evtObj.delta),this.Container__tick(evtObj)},p._goto=function(positionOrLabel){var pos=this.timeline.resolve(positionOrLabel);null!=pos&&(this._prevPos==-1&&(this._prevPos=NaN),this._prevPosition=pos,this._t=0,this._updateTimeline())},p._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},p._updateTimeline=function(){var tl=this.timeline,synched=this.mode!=MovieClip.INDEPENDENT;tl.loop=null==this.loop||this.loop;var pos=synched?this.startPosition+(this.mode==MovieClip.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,mode=synched||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=tl._calcPosition(pos),tl.setPosition(pos,mode),this._prevPosition=tl._prevPosition,this._prevPos!=tl._prevPos){this.currentFrame=this._prevPos=tl._prevPos;for(var n in this._managed)this._managed[n]=1;for(var tweens=tl._tweens,i=0,l=tweens.length;i<l;i++){var tween=tweens[i],target=tween._target;if(target!=this&&!tween.passive){var offset=tween._stepPosition;target instanceof createjs.DisplayObject?this._addManagedChild(target,offset):this._setState(target.state,offset)}}var kids=this.children;for(i=kids.length-1;i>=0;i--){var id=kids[i].id;1==this._managed[id]&&(this.removeChildAt(i),delete this._managed[id])}}},p._setState=function(state,offset){if(state)for(var i=state.length-1;i>=0;i--){var o=state[i],target=o.t,props=o.p;for(var n in props)target[n]=props[n];this._addManagedChild(target,offset)}},p._addManagedChild=function(child,offset){child._off||(this.addChildAt(child,0),child instanceof MovieClip&&(child._synchOffset=offset,child.mode==MovieClip.INDEPENDENT&&child.autoReset&&!this._managed[child.id]&&child._reset()),this._managed[child.id]=2)},p._getBounds=function(matrix,ignoreTransform){var bounds=this.DisplayObject_getBounds();return bounds||(this._updateTimeline(),this.frameBounds&&(bounds=this._rectangle.copy(this.frameBounds[this.currentFrame]))),bounds?this._transformBounds(bounds,matrix,ignoreTransform):this.Container__getBounds(matrix,ignoreTransform)},createjs.MovieClip=createjs.promote(MovieClip,"Container"),MovieClipPlugin.priority=100,MovieClipPlugin.install=function(){createjs.Tween.installPlugin(MovieClipPlugin,["startPosition"])},MovieClipPlugin.init=function(tween,prop,value){return value},MovieClipPlugin.step=function(){},MovieClipPlugin.tween=function(tween,prop,value,startValues,endValues,ratio,wait,end){return tween.target instanceof MovieClip?1==ratio?endValues[prop]:startValues[prop]:value}}(),function(){"use strict";function SpriteSheetUtils(){throw"SpriteSheetUtils cannot be instantiated"}var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.getContext&&(SpriteSheetUtils._workingCanvas=canvas,SpriteSheetUtils._workingContext=canvas.getContext("2d"),canvas.width=canvas.height=1),SpriteSheetUtils.addFlippedFrames=function(spriteSheet,horizontal,vertical,both){if(horizontal||vertical||both){var count=0;horizontal&&SpriteSheetUtils._flip(spriteSheet,++count,!0,!1),vertical&&SpriteSheetUtils._flip(spriteSheet,++count,!1,!0),both&&SpriteSheetUtils._flip(spriteSheet,++count,!0,!0)}},SpriteSheetUtils.extractFrame=function(spriteSheet,frameOrAnimation){isNaN(frameOrAnimation)&&(frameOrAnimation=spriteSheet.getAnimation(frameOrAnimation).frames[0]);var data=spriteSheet.getFrame(frameOrAnimation);if(!data)return null;var r=data.rect,canvas=SpriteSheetUtils._workingCanvas;canvas.width=r.width,canvas.height=r.height,SpriteSheetUtils._workingContext.drawImage(data.image,r.x,r.y,r.width,r.height,0,0,r.width,r.height);var img=document.createElement("img");return img.src=canvas.toDataURL("image/png"),img},SpriteSheetUtils.mergeAlpha=function(rgbImage,alphaImage,canvas){canvas||(canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),canvas.width=Math.max(alphaImage.width,rgbImage.width),canvas.height=Math.max(alphaImage.height,rgbImage.height);var ctx=canvas.getContext("2d");return ctx.save(),ctx.drawImage(rgbImage,0,0),ctx.globalCompositeOperation="destination-in",ctx.drawImage(alphaImage,0,0),ctx.restore(),canvas},SpriteSheetUtils._flip=function(spriteSheet,count,h,v){for(var imgs=spriteSheet._images,canvas=SpriteSheetUtils._workingCanvas,ctx=SpriteSheetUtils._workingContext,il=imgs.length/count,i=0;i<il;i++){var src=imgs[i];src.__tmp=i,ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,canvas.width+1,canvas.height+1),canvas.width=src.width,canvas.height=src.height,ctx.setTransform(h?-1:1,0,0,v?-1:1,h?src.width:0,v?src.height:0),ctx.drawImage(src,0,0);var img=document.createElement("img");img.src=canvas.toDataURL("image/png"),img.width=src.width,img.height=src.height,imgs.push(img)}var frames=spriteSheet._frames,fl=frames.length/count;for(i=0;i<fl;i++){src=frames[i];var rect=src.rect.clone();img=imgs[src.image.__tmp+il*count];var frame={image:img,rect:rect,regX:src.regX,regY:src.regY};h&&(rect.x=img.width-rect.x-rect.width,frame.regX=rect.width-src.regX),v&&(rect.y=img.height-rect.y-rect.height,frame.regY=rect.height-src.regY),frames.push(frame)}var sfx="_"+(h?"h":"")+(v?"v":""),names=spriteSheet._animations,data=spriteSheet._data,al=names.length/count;for(i=0;i<al;i++){var name=names[i];src=data[name];var anim={name:name+sfx,speed:src.speed,next:src.next,frames:[]};src.next&&(anim.next+=sfx),frames=src.frames;for(var j=0,l=frames.length;j<l;j++)anim.frames.push(frames[j]+fl*count);data[anim.name]=anim,names.push(anim.name)}},createjs.SpriteSheetUtils=SpriteSheetUtils}(),function(){"use strict";function SpriteSheetBuilder(framerate){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this.framerate=framerate||0,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var p=createjs.extend(SpriteSheetBuilder,createjs.EventDispatcher);SpriteSheetBuilder.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",SpriteSheetBuilder.ERR_RUNNING="a build is already running",p.addFrame=function(source,sourceRect,scale,setupFunction,setupData){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;var rect=sourceRect||source.bounds||source.nominalBounds;return!rect&&source.getBounds&&(rect=source.getBounds()),rect?(scale=scale||1,this._frames.push({source:source,sourceRect:rect,scale:scale,funct:setupFunction,data:setupData,index:this._frames.length,height:rect.height*scale})-1):null},p.addAnimation=function(name,frames,next,speed){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;this._animations[name]={frames:frames,next:next,speed:speed}},p.addMovieClip=function(source,sourceRect,scale,setupFunction,setupData,labelFunction){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;var rects=source.frameBounds,rect=sourceRect||source.bounds||source.nominalBounds;if(!rect&&source.getBounds&&(rect=source.getBounds()),rect||rects){var i,l,baseFrameIndex=this._frames.length,duration=source.timeline.duration;for(i=0;i<duration;i++){var r=rects&&rects[i]?rects[i]:rect;this.addFrame(source,r,scale,this._setupMovieClipFrame,{i:i,f:setupFunction,d:setupData})}var labels=source.timeline._labels,lbls=[];for(var n in labels)lbls.push({index:labels[n],label:n});if(lbls.length)for(lbls.sort(function(a,b){return a.index-b.index}),i=0,l=lbls.length;i<l;i++){for(var label=lbls[i].label,start=baseFrameIndex+lbls[i].index,end=baseFrameIndex+(i==l-1?duration:lbls[i+1].index),frames=[],j=start;j<end;j++)frames.push(j);labelFunction&&!(label=labelFunction(label,source,start,end))||this.addAnimation(label,frames,!0)}}},p.build=function(){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},p.buildAsync=function(timeSlice){if(this._data)throw SpriteSheetBuilder.ERR_RUNNING;this.timeSlice=timeSlice,this._startBuild();var _this=this;this._timerID=setTimeout(function(){_this._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},p.stopAsync=function(){clearTimeout(this._timerID),this._data=null},p.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},p.toString=function(){return"[SpriteSheetBuilder]"},p._startBuild=function(){var pad=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var dataFrames=[];this._data={images:[],frames:dataFrames,framerate:this.framerate,animations:this._animations};var frames=this._frames.slice();if(frames.sort(function(a,b){return a.height<=b.height?-1:1}),frames[frames.length-1].height+2*pad>this.maxHeight)throw SpriteSheetBuilder.ERR_DIMENSIONS;for(var y=0,x=0,img=0;frames.length;){var o=this._fillRow(frames,y,img,dataFrames,pad);if(o.w>x&&(x=o.w),y+=o.h,!o.h||!frames.length){var canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");canvas.width=this._getSize(x,this.maxWidth),canvas.height=this._getSize(y,this.maxHeight),this._data.images[img]=canvas,o.h||(x=y=0,img++)}}},p._setupMovieClipFrame=function(source,data){var ae=source.actionsEnabled;source.actionsEnabled=!1,source.gotoAndStop(data.i),source.actionsEnabled=ae,data.f&&data.f(source,data.d,data.i)},p._getSize=function(size,max){for(var pow=4;Math.pow(2,++pow)<size;);return Math.min(max,Math.pow(2,pow))},p._fillRow=function(frames,y,img,dataFrames,pad){var w=this.maxWidth,maxH=this.maxHeight;y+=pad;for(var h=maxH-y,x=pad,height=0,i=frames.length-1;i>=0;i--){var frame=frames[i],sc=this._scale*frame.scale,rect=frame.sourceRect,source=frame.source,rx=Math.floor(sc*rect.x-pad),ry=Math.floor(sc*rect.y-pad),rh=Math.ceil(sc*rect.height+2*pad),rw=Math.ceil(sc*rect.width+2*pad);if(rw>w)throw SpriteSheetBuilder.ERR_DIMENSIONS;rh>h||x+rw>w||(frame.img=img,frame.rect=new createjs.Rectangle(x,y,rw,rh),height=height||rh,frames.splice(i,1),dataFrames[frame.index]=[x,y,rw,rh,img,Math.round(-rx+sc*source.regX-pad),Math.round(-ry+sc*source.regY-pad)],x+=rw)}return{w:x,h:height}},p._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},p._run=function(){for(var ts=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),t=(new Date).getTime()+ts,complete=!1;t>(new Date).getTime();)if(!this._drawNext()){complete=!0;break}if(complete)this._endBuild();else{var _this=this;this._timerID=setTimeout(function(){_this._run()},50-ts)}var p=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var evt=new createjs.Event("progress");evt.progress=p,this.dispatchEvent(evt)}},p._drawNext=function(){var frame=this._frames[this._index],sc=frame.scale*this._scale,rect=frame.rect,sourceRect=frame.sourceRect,canvas=this._data.images[frame.img],ctx=canvas.getContext("2d");return frame.funct&&frame.funct(frame.source,frame.data),ctx.save(),ctx.beginPath(),ctx.rect(rect.x,rect.y,rect.width,rect.height),ctx.clip(),ctx.translate(Math.ceil(rect.x-sourceRect.x*sc),Math.ceil(rect.y-sourceRect.y*sc)),ctx.scale(sc,sc),frame.source.draw(ctx),ctx.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(SpriteSheetBuilder,"EventDispatcher")}(),function(){"use strict";function DOMElement(htmlElement){this.DisplayObject_constructor(),"string"==typeof htmlElement&&(htmlElement=document.getElementById(htmlElement)),this.mouseEnabled=!1;var style=htmlElement.style;style.position="absolute",style.transformOrigin=style.WebkitTransformOrigin=style.msTransformOrigin=style.MozTransformOrigin=style.OTransformOrigin="0% 0%",this.htmlElement=htmlElement,this._oldProps=null}var p=createjs.extend(DOMElement,createjs.DisplayObject);p.isVisible=function(){return null!=this.htmlElement},p.draw=function(ctx,ignoreCache){return!0},p.cache=function(){},p.uncache=function(){},p.updateCache=function(){},p.hitTest=function(){},p.localToGlobal=function(){},p.globalToLocal=function(){},p.localToLocal=function(){},p.clone=function(){throw"DOMElement cannot be cloned."},p.toString=function(){return"[DOMElement (name="+this.name+")]"},p._tick=function(evtObj){var stage=this.getStage();stage&&stage.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(evtObj)},p._handleDrawEnd=function(evt){var o=this.htmlElement;if(o){var style=o.style,props=this.getConcatenatedDisplayProps(this._props),mtx=props.matrix,visibility=props.visible?"visible":"hidden";if(visibility!=style.visibility&&(style.visibility=visibility),props.visible){var oldProps=this._oldProps,oldMtx=oldProps&&oldProps.matrix,n=1e4;if(!oldMtx||!oldMtx.equals(mtx)){var str="matrix("+(mtx.a*n|0)/n+","+(mtx.b*n|0)/n+","+(mtx.c*n|0)/n+","+(mtx.d*n|0)/n+","+(mtx.tx+.5|0);style.transform=style.WebkitTransform=style.OTransform=style.msTransform=str+","+(mtx.ty+.5|0)+")",style.MozTransform=str+"px,"+(mtx.ty+.5|0)+"px)",oldProps||(oldProps=this._oldProps=new createjs.DisplayProps(!0,NaN)),oldProps.matrix.copy(mtx)}oldProps.alpha!=props.alpha&&(style.opacity=""+(props.alpha*n|0)/n,oldProps.alpha=props.alpha)}}},createjs.DOMElement=createjs.promote(DOMElement,"DisplayObject")}(),function(){"use strict";function Filter(){}var p=Filter.prototype;p.getBounds=function(rect){return rect},p.applyFilter=function(ctx,x,y,width,height,targetCtx,targetX,targetY){targetCtx=targetCtx||ctx,null==targetX&&(targetX=x),null==targetY&&(targetY=y);try{var imageData=ctx.getImageData(x,y,width,height)}catch(e){return!1}return!!this._applyFilter(imageData)&&(targetCtx.putImageData(imageData,targetX,targetY),!0)},p.toString=function(){return"[Filter]"},p.clone=function(){return new Filter},p._applyFilter=function(imageData){return!0},createjs.Filter=Filter}(),function(){"use strict";function BlurFilter(blurX,blurY,quality){(isNaN(blurX)||blurX<0)&&(blurX=0),(isNaN(blurY)||blurY<0)&&(blurY=0),(isNaN(quality)||quality<1)&&(quality=1),this.blurX=0|blurX,this.blurY=0|blurY,this.quality=0|quality}var p=createjs.extend(BlurFilter,createjs.Filter);BlurFilter.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],BlurFilter.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],p.getBounds=function(rect){var x=0|this.blurX,y=0|this.blurY;if(x<=0&&y<=0)return rect;var q=Math.pow(this.quality,.2);return(rect||new createjs.Rectangle).pad(x*q+1,y*q+1,x*q+1,y*q+1)},p.clone=function(){return new BlurFilter(this.blurX,this.blurY,this.quality)},p.toString=function(){return"[BlurFilter]"},p._applyFilter=function(imageData){var radiusX=this.blurX>>1;if(isNaN(radiusX)||radiusX<0)return!1;
	var radiusY=this.blurY>>1;if(isNaN(radiusY)||radiusY<0)return!1;if(0==radiusX&&0==radiusY)return!1;var iterations=this.quality;(isNaN(iterations)||iterations<1)&&(iterations=1),iterations|=0,iterations>3&&(iterations=3),iterations<1&&(iterations=1);var px=imageData.data,x=0,y=0,i=0,p=0,yp=0,yi=0,yw=0,r=0,g=0,b=0,a=0,pr=0,pg=0,pb=0,pa=0,divx=radiusX+radiusX+1|0,divy=radiusY+radiusY+1|0,w=0|imageData.width,h=0|imageData.height,w1=w-1|0,h1=h-1|0,rxp1=radiusX+1|0,ryp1=radiusY+1|0,ssx={r:0,b:0,g:0,a:0},sx=ssx;for(i=1;i<divx;i++)sx=sx.n={r:0,b:0,g:0,a:0};sx.n=ssx;var ssy={r:0,b:0,g:0,a:0},sy=ssy;for(i=1;i<divy;i++)sy=sy.n={r:0,b:0,g:0,a:0};sy.n=ssy;for(var si=null,mtx=0|BlurFilter.MUL_TABLE[radiusX],stx=0|BlurFilter.SHG_TABLE[radiusX],mty=0|BlurFilter.MUL_TABLE[radiusY],sty=0|BlurFilter.SHG_TABLE[radiusY];iterations-- >0;){yw=yi=0;var ms=mtx,ss=stx;for(y=h;--y>-1;){for(r=rxp1*(pr=px[0|yi]),g=rxp1*(pg=px[yi+1|0]),b=rxp1*(pb=px[yi+2|0]),a=rxp1*(pa=px[yi+3|0]),sx=ssx,i=rxp1;--i>-1;)sx.r=pr,sx.g=pg,sx.b=pb,sx.a=pa,sx=sx.n;for(i=1;i<rxp1;i++)p=yi+((w1<i?w1:i)<<2)|0,r+=sx.r=px[p],g+=sx.g=px[p+1],b+=sx.b=px[p+2],a+=sx.a=px[p+3],sx=sx.n;for(si=ssx,x=0;x<w;x++)px[yi++]=r*ms>>>ss,px[yi++]=g*ms>>>ss,px[yi++]=b*ms>>>ss,px[yi++]=a*ms>>>ss,p=yw+((p=x+radiusX+1)<w1?p:w1)<<2,r-=si.r-(si.r=px[p]),g-=si.g-(si.g=px[p+1]),b-=si.b-(si.b=px[p+2]),a-=si.a-(si.a=px[p+3]),si=si.n;yw+=w}for(ms=mty,ss=sty,x=0;x<w;x++){for(yi=x<<2|0,r=ryp1*(pr=px[yi])|0,g=ryp1*(pg=px[yi+1|0])|0,b=ryp1*(pb=px[yi+2|0])|0,a=ryp1*(pa=px[yi+3|0])|0,sy=ssy,i=0;i<ryp1;i++)sy.r=pr,sy.g=pg,sy.b=pb,sy.a=pa,sy=sy.n;for(yp=w,i=1;i<=radiusY;i++)yi=yp+x<<2,r+=sy.r=px[yi],g+=sy.g=px[yi+1],b+=sy.b=px[yi+2],a+=sy.a=px[yi+3],sy=sy.n,i<h1&&(yp+=w);if(yi=x,si=ssy,iterations>0)for(y=0;y<h;y++)p=yi<<2,px[p+3]=pa=a*ms>>>ss,pa>0?(px[p]=r*ms>>>ss,px[p+1]=g*ms>>>ss,px[p+2]=b*ms>>>ss):px[p]=px[p+1]=px[p+2]=0,p=x+((p=y+ryp1)<h1?p:h1)*w<<2,r-=si.r-(si.r=px[p]),g-=si.g-(si.g=px[p+1]),b-=si.b-(si.b=px[p+2]),a-=si.a-(si.a=px[p+3]),si=si.n,yi+=w;else for(y=0;y<h;y++)p=yi<<2,px[p+3]=pa=a*ms>>>ss,pa>0?(pa=255/pa,px[p]=(r*ms>>>ss)*pa,px[p+1]=(g*ms>>>ss)*pa,px[p+2]=(b*ms>>>ss)*pa):px[p]=px[p+1]=px[p+2]=0,p=x+((p=y+ryp1)<h1?p:h1)*w<<2,r-=si.r-(si.r=px[p]),g-=si.g-(si.g=px[p+1]),b-=si.b-(si.b=px[p+2]),a-=si.a-(si.a=px[p+3]),si=si.n,yi+=w}}return!0},createjs.BlurFilter=createjs.promote(BlurFilter,"Filter")}(),function(){"use strict";function AlphaMapFilter(alphaMap){this.alphaMap=alphaMap,this._alphaMap=null,this._mapData=null}var p=createjs.extend(AlphaMapFilter,createjs.Filter);p.clone=function(){var o=new AlphaMapFilter(this.alphaMap);return o._alphaMap=this._alphaMap,o._mapData=this._mapData,o},p.toString=function(){return"[AlphaMapFilter]"},p._applyFilter=function(imageData){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var data=imageData.data,map=this._mapData,i=0,l=data.length;i<l;i+=4)data[i+3]=map[i]||0;return!0},p._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var ctx,map=this._alphaMap=this.alphaMap,canvas=map;map instanceof HTMLCanvasElement?ctx=canvas.getContext("2d"):(canvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),canvas.width=map.width,canvas.height=map.height,ctx=canvas.getContext("2d"),ctx.drawImage(map,0,0));try{var imgData=ctx.getImageData(0,0,map.width,map.height)}catch(e){return!1}return this._mapData=imgData.data,!0},createjs.AlphaMapFilter=createjs.promote(AlphaMapFilter,"Filter")}(),function(){"use strict";function AlphaMaskFilter(mask){this.mask=mask}var p=createjs.extend(AlphaMaskFilter,createjs.Filter);p.applyFilter=function(ctx,x,y,width,height,targetCtx,targetX,targetY){return!this.mask||(targetCtx=targetCtx||ctx,null==targetX&&(targetX=x),null==targetY&&(targetY=y),targetCtx.save(),ctx==targetCtx&&(targetCtx.globalCompositeOperation="destination-in",targetCtx.drawImage(this.mask,targetX,targetY),targetCtx.restore(),!0))},p.clone=function(){return new AlphaMaskFilter(this.mask)},p.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(AlphaMaskFilter,"Filter")}(),function(){"use strict";function ColorFilter(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset){this.redMultiplier=null!=redMultiplier?redMultiplier:1,this.greenMultiplier=null!=greenMultiplier?greenMultiplier:1,this.blueMultiplier=null!=blueMultiplier?blueMultiplier:1,this.alphaMultiplier=null!=alphaMultiplier?alphaMultiplier:1,this.redOffset=redOffset||0,this.greenOffset=greenOffset||0,this.blueOffset=blueOffset||0,this.alphaOffset=alphaOffset||0}var p=createjs.extend(ColorFilter,createjs.Filter);p.toString=function(){return"[ColorFilter]"},p.clone=function(){return new ColorFilter(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},p._applyFilter=function(imageData){for(var data=imageData.data,l=data.length,i=0;i<l;i+=4)data[i]=data[i]*this.redMultiplier+this.redOffset,data[i+1]=data[i+1]*this.greenMultiplier+this.greenOffset,data[i+2]=data[i+2]*this.blueMultiplier+this.blueOffset,data[i+3]=data[i+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(ColorFilter,"Filter")}(),function(){"use strict";function ColorMatrix(brightness,contrast,saturation,hue){this.setColor(brightness,contrast,saturation,hue)}var p=ColorMatrix.prototype;ColorMatrix.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],ColorMatrix.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],ColorMatrix.LENGTH=ColorMatrix.IDENTITY_MATRIX.length,p.setColor=function(brightness,contrast,saturation,hue){return this.reset().adjustColor(brightness,contrast,saturation,hue)},p.reset=function(){return this.copy(ColorMatrix.IDENTITY_MATRIX)},p.adjustColor=function(brightness,contrast,saturation,hue){return this.adjustHue(hue),this.adjustContrast(contrast),this.adjustBrightness(brightness),this.adjustSaturation(saturation)},p.adjustBrightness=function(value){return 0==value||isNaN(value)?this:(value=this._cleanValue(value,255),this._multiplyMatrix([1,0,0,0,value,0,1,0,0,value,0,0,1,0,value,0,0,0,1,0,0,0,0,0,1]),this)},p.adjustContrast=function(value){if(0==value||isNaN(value))return this;value=this._cleanValue(value,100);var x;return value<0?x=127+value/100*127:(x=value%1,x=0==x?ColorMatrix.DELTA_INDEX[value]:ColorMatrix.DELTA_INDEX[value<<0]*(1-x)+ColorMatrix.DELTA_INDEX[(value<<0)+1]*x,x=127*x+127),this._multiplyMatrix([x/127,0,0,0,.5*(127-x),0,x/127,0,0,.5*(127-x),0,0,x/127,0,.5*(127-x),0,0,0,1,0,0,0,0,0,1]),this},p.adjustSaturation=function(value){if(0==value||isNaN(value))return this;value=this._cleanValue(value,100);var x=1+(value>0?3*value/100:value/100),lumR=.3086,lumG=.6094,lumB=.082;return this._multiplyMatrix([lumR*(1-x)+x,lumG*(1-x),lumB*(1-x),0,0,lumR*(1-x),lumG*(1-x)+x,lumB*(1-x),0,0,lumR*(1-x),lumG*(1-x),lumB*(1-x)+x,0,0,0,0,0,1,0,0,0,0,0,1]),this},p.adjustHue=function(value){if(0==value||isNaN(value))return this;value=this._cleanValue(value,180)/180*Math.PI;var cosVal=Math.cos(value),sinVal=Math.sin(value),lumR=.213,lumG=.715,lumB=.072;return this._multiplyMatrix([lumR+cosVal*(1-lumR)+sinVal*-lumR,lumG+cosVal*-lumG+sinVal*-lumG,lumB+cosVal*-lumB+sinVal*(1-lumB),0,0,lumR+cosVal*-lumR+.143*sinVal,lumG+cosVal*(1-lumG)+.14*sinVal,lumB+cosVal*-lumB+sinVal*-.283,0,0,lumR+cosVal*-lumR+sinVal*-(1-lumR),lumG+cosVal*-lumG+sinVal*lumG,lumB+cosVal*(1-lumB)+sinVal*lumB,0,0,0,0,0,1,0,0,0,0,0,1]),this},p.concat=function(matrix){return matrix=this._fixMatrix(matrix),matrix.length!=ColorMatrix.LENGTH?this:(this._multiplyMatrix(matrix),this)},p.clone=function(){return(new ColorMatrix).copy(this)},p.toArray=function(){for(var arr=[],i=0,l=ColorMatrix.LENGTH;i<l;i++)arr[i]=this[i];return arr},p.copy=function(matrix){for(var l=ColorMatrix.LENGTH,i=0;i<l;i++)this[i]=matrix[i];return this},p.toString=function(){return"[ColorMatrix]"},p._multiplyMatrix=function(matrix){var i,j,k,col=[];for(i=0;i<5;i++){for(j=0;j<5;j++)col[j]=this[j+5*i];for(j=0;j<5;j++){var val=0;for(k=0;k<5;k++)val+=matrix[j+5*k]*col[k];this[j+5*i]=val}}},p._cleanValue=function(value,limit){return Math.min(limit,Math.max(-limit,value))},p._fixMatrix=function(matrix){return matrix instanceof ColorMatrix&&(matrix=matrix.toArray()),matrix.length<ColorMatrix.LENGTH?matrix=matrix.slice(0,matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length,ColorMatrix.LENGTH)):matrix.length>ColorMatrix.LENGTH&&(matrix=matrix.slice(0,ColorMatrix.LENGTH)),matrix},createjs.ColorMatrix=ColorMatrix}(),function(){"use strict";function ColorMatrixFilter(matrix){this.matrix=matrix}var p=createjs.extend(ColorMatrixFilter,createjs.Filter);p.toString=function(){return"[ColorMatrixFilter]"},p.clone=function(){return new ColorMatrixFilter(this.matrix)},p._applyFilter=function(imageData){for(var r,g,b,a,data=imageData.data,l=data.length,mtx=this.matrix,m0=mtx[0],m1=mtx[1],m2=mtx[2],m3=mtx[3],m4=mtx[4],m5=mtx[5],m6=mtx[6],m7=mtx[7],m8=mtx[8],m9=mtx[9],m10=mtx[10],m11=mtx[11],m12=mtx[12],m13=mtx[13],m14=mtx[14],m15=mtx[15],m16=mtx[16],m17=mtx[17],m18=mtx[18],m19=mtx[19],i=0;i<l;i+=4)r=data[i],g=data[i+1],b=data[i+2],a=data[i+3],data[i]=r*m0+g*m1+b*m2+a*m3+m4,data[i+1]=r*m5+g*m6+b*m7+a*m8+m9,data[i+2]=r*m10+g*m11+b*m12+a*m13+m14,data[i+3]=r*m15+g*m16+b*m17+a*m18+m19;return!0},createjs.ColorMatrixFilter=createjs.promote(ColorMatrixFilter,"Filter")}(),function(){"use strict";function Touch(){throw"Touch cannot be instantiated"}Touch.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},Touch.enable=function(stage,singleTouch,allowDefault){return!!(stage&&stage.canvas&&Touch.isSupported())&&(!!stage.__touch||(stage.__touch={pointers:{},multitouch:!singleTouch,preventDefault:!allowDefault,count:0},"ontouchstart"in window?Touch._IOS_enable(stage):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&Touch._IE_enable(stage),!0))},Touch.disable=function(stage){stage&&("ontouchstart"in window?Touch._IOS_disable(stage):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&Touch._IE_disable(stage),delete stage.__touch)},Touch._IOS_enable=function(stage){var canvas=stage.canvas,f=stage.__touch.f=function(e){Touch._IOS_handleEvent(stage,e)};canvas.addEventListener("touchstart",f,!1),canvas.addEventListener("touchmove",f,!1),canvas.addEventListener("touchend",f,!1),canvas.addEventListener("touchcancel",f,!1)},Touch._IOS_disable=function(stage){var canvas=stage.canvas;if(canvas){var f=stage.__touch.f;canvas.removeEventListener("touchstart",f,!1),canvas.removeEventListener("touchmove",f,!1),canvas.removeEventListener("touchend",f,!1),canvas.removeEventListener("touchcancel",f,!1)}},Touch._IOS_handleEvent=function(stage,e){if(stage){stage.__touch.preventDefault&&e.preventDefault&&e.preventDefault();for(var touches=e.changedTouches,type=e.type,i=0,l=touches.length;i<l;i++){var touch=touches[i],id=touch.identifier;touch.target==stage.canvas&&("touchstart"==type?this._handleStart(stage,id,e,touch.pageX,touch.pageY):"touchmove"==type?this._handleMove(stage,id,e,touch.pageX,touch.pageY):"touchend"!=type&&"touchcancel"!=type||this._handleEnd(stage,id,e))}}},Touch._IE_enable=function(stage){var canvas=stage.canvas,f=stage.__touch.f=function(e){Touch._IE_handleEvent(stage,e)};void 0===window.navigator.pointerEnabled?(canvas.addEventListener("MSPointerDown",f,!1),window.addEventListener("MSPointerMove",f,!1),window.addEventListener("MSPointerUp",f,!1),window.addEventListener("MSPointerCancel",f,!1),stage.__touch.preventDefault&&(canvas.style.msTouchAction="none")):(canvas.addEventListener("pointerdown",f,!1),window.addEventListener("pointermove",f,!1),window.addEventListener("pointerup",f,!1),window.addEventListener("pointercancel",f,!1),stage.__touch.preventDefault&&(canvas.style.touchAction="none")),stage.__touch.activeIDs={}},Touch._IE_disable=function(stage){var f=stage.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",f,!1),window.removeEventListener("MSPointerUp",f,!1),window.removeEventListener("MSPointerCancel",f,!1),stage.canvas&&stage.canvas.removeEventListener("MSPointerDown",f,!1)):(window.removeEventListener("pointermove",f,!1),window.removeEventListener("pointerup",f,!1),window.removeEventListener("pointercancel",f,!1),stage.canvas&&stage.canvas.removeEventListener("pointerdown",f,!1))},Touch._IE_handleEvent=function(stage,e){if(stage){stage.__touch.preventDefault&&e.preventDefault&&e.preventDefault();var type=e.type,id=e.pointerId,ids=stage.__touch.activeIDs;if("MSPointerDown"==type||"pointerdown"==type){if(e.srcElement!=stage.canvas)return;ids[id]=!0,this._handleStart(stage,id,e,e.pageX,e.pageY)}else ids[id]&&("MSPointerMove"==type||"pointermove"==type?this._handleMove(stage,id,e,e.pageX,e.pageY):"MSPointerUp"!=type&&"MSPointerCancel"!=type&&"pointerup"!=type&&"pointercancel"!=type||(delete ids[id],this._handleEnd(stage,id,e)))}},Touch._handleStart=function(stage,id,e,x,y){var props=stage.__touch;if(props.multitouch||!props.count){var ids=props.pointers;ids[id]||(ids[id]=!0,props.count++,stage._handlePointerDown(id,e,x,y))}},Touch._handleMove=function(stage,id,e,x,y){stage.__touch.pointers[id]&&stage._handlePointerMove(id,e,x,y)},Touch._handleEnd=function(stage,id,e){var props=stage.__touch,ids=props.pointers;ids[id]&&(props.count--,stage._handlePointerUp(id,e,!0),delete ids[id])},createjs.Touch=Touch}(),function(createjs){"use strict";var s=createjs.EaselJS=createjs.EaselJS||{};s.version="0.8.2",s.buildDate="Sat, 12 Nov 2016 06:45:03 GMT"}(scope.createjs),function(createjs){"use strict";var s=createjs.PreloadJS=createjs.PreloadJS||{};s.version="0.6.2",s.buildDate="Sat, 12 Nov 2016 06:45:00 GMT"}(scope.createjs),function(){"use strict";createjs.proxy=function(method,scope){var aArgs=Array.prototype.slice.call(arguments,2);return function(){return method.apply(scope,Array.prototype.slice.call(arguments,0).concat(aArgs))}}}(),function(){"use strict";function ErrorEvent(title,message,data){this.Event_constructor("error"),this.title=title,this.message=message,this.data=data}var p=createjs.extend(ErrorEvent,createjs.Event);p.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(ErrorEvent,"Event")}(),function(scope){"use strict";function ProgressEvent(loaded,total){this.Event_constructor("progress"),this.loaded=loaded,this.total=null==total?1:total,this.progress=0==total?0:this.loaded/this.total}var p=createjs.extend(ProgressEvent,createjs.Event);p.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(ProgressEvent,"Event")}(window),function(){function runInContext(context,exports){function has(name){if(has[name]!==undef)return has[name];var isSupported;if("bug-string-char-index"==name)isSupported="a"!="a"[0];else if("json"==name)isSupported=has("json-stringify")&&has("json-parse");else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==name){var stringify=exports.stringify,stringifySupported="function"==typeof stringify&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported="0"===stringify(0)&&"0"===stringify(new Number)&&'""'==stringify(new String)&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&"1"===stringify(value)&&"[1]"==stringify([value])&&"[null]"==stringify([undef])&&"null"==stringify(null)&&"[null,null,null]"==stringify([undef,getClass,null])&&stringify({a:[value,!0,!1,null,"\0\b\n\f\r\t"]})==serialized&&"1"===stringify(null,value)&&"[\n 1,\n 2\n]"==stringify([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==stringify(new Date(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==stringify(new Date(864e13))&&'"-000001-01-01T00:00:00.000Z"'==stringify(new Date(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==stringify(new Date(-1))}catch(exception){stringifySupported=!1}}isSupported=stringifySupported}if("json-parse"==name){var parse=exports.parse;if("function"==typeof parse)try{if(0===parse("0")&&!parse(!1)){value=parse(serialized);var parseSupported=5==value.a.length&&1===value.a[0];if(parseSupported){try{parseSupported=!parse('"\t"')}catch(exception){}if(parseSupported)try{parseSupported=1!==parse("01")}catch(exception){}if(parseSupported)try{parseSupported=1!==parse("1.")}catch(exception){}}}}catch(exception){parseSupported=!1}isSupported=parseSupported}}return has[name]=!!isSupported}context||(context=root.Object()),exports||(exports=root.Object());var Number=context.Number||root.Number,String=context.String||root.String,Object=context.Object||root.Object,Date=context.Date||root.Date,SyntaxError=context.SyntaxError||root.SyntaxError,TypeError=context.TypeError||root.TypeError,Math=context.Math||root.Math,nativeJSON=context.JSON||root.JSON;"object"==typeof nativeJSON&&nativeJSON&&(exports.stringify=nativeJSON.stringify,exports.parse=nativeJSON.parse);var isProperty,forEach,undef,objectProto=Object.prototype,getClass=objectProto.toString,isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&0===isExtended.getUTCMonth()&&1===isExtended.getUTCDate()&&10==isExtended.getUTCHours()&&37==isExtended.getUTCMinutes()&&6==isExtended.getUTCSeconds()&&708==isExtended.getUTCMilliseconds()}catch(exception){}if(!has("json")){var functionClass="[object Function]",dateClass="[object Date]",numberClass="[object Number]",stringClass="[object String]",arrayClass="[object Array]",booleanClass="[object Boolean]",charIndexBuggy=has("bug-string-char-index");if(!isExtended)var floor=Math.floor,Months=[0,31,59,90,120,151,181,212,243,273,304,334],getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)};if((isProperty=objectProto.hasOwnProperty)||(isProperty=function(property){var constructor,members={};return(members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass?isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);return this.__proto__=original,result}:(constructor=members.constructor,isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}),members=null,isProperty.call(this,property)}),forEach=function(object,callback){var Properties,members,property,size=0;(Properties=function(){this.valueOf=0}).prototype.valueOf=0,members=new Properties;for(property in members)isProperty.call(members,property)&&size++;return Properties=members=null,size?forEach=2==size?function(object,callback){var property,members={},isFunction=getClass.call(object)==functionClass;for(property in object)isFunction&&"prototype"==property||isProperty.call(members,property)||!(members[property]=1)||!isProperty.call(object,property)||callback(property)}:function(object,callback){var property,isConstructor,isFunction=getClass.call(object)==functionClass;for(property in object)isFunction&&"prototype"==property||!isProperty.call(object,property)||(isConstructor="constructor"===property)||callback(property);(isConstructor||isProperty.call(object,property="constructor"))&&callback(property)}:(members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],forEach=function(object,callback){var property,length,isFunction=getClass.call(object)==functionClass,hasProperty=!isFunction&&"function"!=typeof object.constructor&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object)isFunction&&"prototype"==property||!hasProperty.call(object,property)||callback(property);for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}),forEach(object,callback)},!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},leadingZeroes="000000",toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)},unicodePrefix="\\u00",quote=function(value){for(var result='"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10,symbols=useCharIndex&&(charIndexBuggy?value.split(""):value);index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'"'},serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if("object"==typeof value&&value)if(className=getClass.call(value),className!=dateClass||isProperty.call(value,"toJSON"))"function"==typeof value.toJSON&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,"toJSON"))&&(value=value.toJSON(property));else if(value>-1/0&&value<1/0){if(getDay){for(date=floor(value/864e5),year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month),time=(value%864e5+864e5)%864e5,hours=floor(time/36e5)%24,minutes=floor(time/6e4)%60,seconds=floor(time/1e3)%60,milliseconds=time%1e3}else year=value.getUTCFullYear(),month=value.getUTCMonth(),date=value.getUTCDate(),hours=value.getUTCHours(),minutes=value.getUTCMinutes(),seconds=value.getUTCSeconds(),milliseconds=value.getUTCMilliseconds();value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z"}else value=null;if(callback&&(value=callback.call(object,property,value)),null===value)return"null";if(className=getClass.call(value),className==booleanClass)return""+value;if(className==numberClass)return value>-1/0&&value<1/0?""+value:"null";if(className==stringClass)return quote(""+value);if("object"==typeof value){for(length=stack.length;length--;)if(stack[length]===value)throw TypeError();if(stack.push(value),results=[],prefix=indentation,indentation+=whitespace,className==arrayClass){for(index=0,length=value.length;index<length;index++)element=serialize(index,value,callback,properties,whitespace,indentation,stack),results.push(element===undef?"null":element);result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]"}else forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);element!==undef&&results.push(quote(property)+":"+(whitespace?" ":"")+element)}),result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}";return stack.pop(),result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter)if((className=getClass.call(filter))==functionClass)callback=filter;else if(className==arrayClass){properties={};for(var value,index=0,length=filter.length;index<length;value=filter[index++],className=getClass.call(value),(className==stringClass||className==numberClass)&&(properties[value]=1));}if(width)if((className=getClass.call(width))==numberClass){if((width-=width%1)>0)for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}else className==stringClass&&(whitespace=width.length<=10?width:width.slice(0,10));return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[])}}if(!has("json-parse")){var Index,Source,fromCharCode=String.fromCharCode,Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},abort=function(){throw Index=Source=null,SyntaxError()},lex=function(){for(var value,begin,position,isSigned,charCode,source=Source,length=source.length;Index<length;)switch(charCode=source.charCodeAt(Index)){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:return value=charIndexBuggy?source.charAt(Index):source[Index],Index++,value;case 34:for(value="@",Index++;Index<length;)if(charCode=source.charCodeAt(Index),charCode<32)abort();else if(92==charCode)switch(charCode=source.charCodeAt(++Index)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode],Index++;break;case 117:for(begin=++Index,position=Index+4;Index<position;Index++)charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70||abort();value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort()}else{if(34==charCode)break;for(charCode=source.charCodeAt(Index),begin=Index;charCode>=32&&92!=charCode&&34!=charCode;)charCode=source.charCodeAt(++Index);value+=source.slice(begin,Index)}if(34==source.charCodeAt(Index))return Index++,value;abort();default:if(begin=Index,45==charCode&&(isSigned=!0,charCode=source.charCodeAt(++Index)),charCode>=48&&charCode<=57){for(48==charCode&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)&&abort(),isSigned=!1;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(46==source.charCodeAt(Index)){for(position=++Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);position==Index&&abort(),Index=position}if(charCode=source.charCodeAt(Index),101==charCode||69==charCode){for(charCode=source.charCodeAt(++Index),43!=charCode&&45!=charCode||Index++,position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);position==Index&&abort(),Index=position}return+source.slice(begin,Index)}if(isSigned&&abort(),"true"==source.slice(Index,Index+4))return Index+=4,!0;if("false"==source.slice(Index,Index+5))return Index+=5,!1;if("null"==source.slice(Index,Index+4))return Index+=4,null;abort()}return"$"},get=function(value){var results,hasMembers;if("$"==value&&abort(),"string"==typeof value){if("@"==(charIndexBuggy?value.charAt(0):value[0]))return value.slice(1);if("["==value){for(results=[];value=lex(),"]"!=value;hasMembers||(hasMembers=!0))hasMembers&&(","==value?(value=lex(),"]"==value&&abort()):abort()),","==value&&abort(),results.push(get(value));return results}if("{"==value){for(results={};value=lex(),"}"!=value;hasMembers||(hasMembers=!0))hasMembers&&(","==value?(value=lex(),"}"==value&&abort()):abort()),","!=value&&"string"==typeof value&&"@"==(charIndexBuggy?value.charAt(0):value[0])&&":"==lex()||abort(),results[value.slice(1)]=get(lex());return results}abort()}return value},update=function(source,property,callback){var element=walk(source,property,callback);element===undef?delete source[property]:source[property]=element},walk=function(source,property,callback){var length,value=source[property];if("object"==typeof value&&value)if(getClass.call(value)==arrayClass)for(length=value.length;length--;)update(value,length,callback);else forEach(value,function(property){update(value,property,callback)});return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;return Index=0,Source=""+source,result=get(lex()),"$"!=lex()&&abort(),Index=Source=null,callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result}}}return exports.runInContext=runInContext,exports}var isLoader=__webpack_require__(7),objectTypes={function:!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports,root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!freeGlobal||freeGlobal.global!==freeGlobal&&freeGlobal.window!==freeGlobal&&freeGlobal.self!==freeGlobal||(root=freeGlobal),freeExports&&!isLoader)runInContext(root,freeExports);else{var nativeJSON=root.JSON,previousJSON=root.JSON3,isRestored=!1,JSON3=runInContext(root,root.JSON3={noConflict:function(){return isRestored||(isRestored=!0,root.JSON=nativeJSON,root.JSON3=previousJSON,nativeJSON=previousJSON=null),JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}isLoader&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return JSON3}.call(exports,__webpack_require__,exports,module),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}.call(this),function(){var s={};s.a=function(){return s.el("a")},s.svg=function(){return s.el("svg")},s.object=function(){return s.el("object")},s.image=function(){return s.el("image")},s.img=function(){return s.el("img")},s.style=function(){return s.el("style")},s.link=function(){return s.el("link")},s.script=function(){return s.el("script")},s.audio=function(){return s.el("audio")},s.video=function(){return s.el("video")},s.text=function(value){return document.createTextNode(value)},s.el=function(name){return document.createElement(name)},createjs.Elements=s}(),function(){var s={};s.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,s.RELATIVE_PATT=/^[.\/]*?\//i,s.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i,s.parseURI=function(path){var info={absolute:!1,relative:!1,protocol:null,hostname:null,port:null,pathname:null,search:null,hash:null,host:null};if(null==path)return info;var parser=createjs.Elements.a();parser.href=path;for(var n in info)n in parser&&(info[n]=parser[n]);var queryIndex=path.indexOf("?");queryIndex>-1&&(path=path.substr(0,queryIndex));var match;return s.ABSOLUTE_PATT.test(path)?info.absolute=!0:s.RELATIVE_PATT.test(path)&&(info.relative=!0),(match=path.match(s.EXTENSION_PATT))&&(info.extension=match[1].toLowerCase()),info},s.formatQueryString=function(data,query){if(null==data)throw new Error("You must specify data.");var params=[];for(var n in data)params.push(n+"="+escape(data[n]));return query&&(params=params.concat(query)),params.join("&")},s.buildURI=function(src,data){if(null==data)return src;var query=[],idx=src.indexOf("?");if(idx!=-1){var q=src.slice(idx+1);query=query.concat(q.split("&"))}return idx!=-1?src.slice(0,idx)+"?"+this.formatQueryString(data,query):src+"?"+this.formatQueryString(data,query)},s.isCrossDomain=function(item){var target=createjs.Elements.a();target.href=item.src;var host=createjs.Elements.a();host.href=location.href;var crossdomain=""!=target.hostname&&(target.port!=host.port||target.protocol!=host.protocol||target.hostname!=host.hostname);return crossdomain},s.isLocal=function(item){var target=createjs.Elements.a();return target.href=item.src,""==target.hostname&&"file:"==target.protocol},createjs.URLUtils=s}(),function(){var s={};s.appendToHead=function(el){s.getHead().appendChild(el)},s.appendToBody=function(el){s.getBody().appendChild(el)},s.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},s.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},s.removeChild=function(el){el.parent&&el.parent.removeChild(el)},s.isImageTag=function(item){return item instanceof HTMLImageElement;
	},s.isAudioTag=function(item){return!!window.HTMLAudioElement&&item instanceof HTMLAudioElement},s.isVideoTag=function(item){return!!window.HTMLVideoElement&&item instanceof HTMLVideoElement},createjs.DomUtils=s}(),function(){var s={};s.parseXML=function(text){var xml=null;try{if(window.DOMParser){var parser=new DOMParser;xml=parser.parseFromString(text,"text/xml")}}catch(e){}if(!xml)try{xml=new ActiveXObject("Microsoft.XMLDOM"),xml.async=!1,xml.loadXML(text)}catch(e){xml=null}return xml},s.parseJSON=function(value){if(null==value)return null;try{return JSON.parse(value)}catch(e){throw e}},createjs.DataUtils=s}(),function(){var s={};s.BINARY="binary",s.CSS="css",s.IMAGE="image",s.JAVASCRIPT="javascript",s.JSON="json",s.JSONP="jsonp",s.MANIFEST="manifest",s.SOUND="sound",s.VIDEO="video",s.SPRITESHEET="spritesheet",s.SVG="svg",s.TEXT="text",s.XML="xml",createjs.Types=s}(),function(){var s={};s.POST="POST",s.GET="GET",createjs.Methods=s}(),function(){"use strict";function LoadItem(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=s.LOAD_TIMEOUT_DEFAULT}var p=LoadItem.prototype={},s=LoadItem;s.LOAD_TIMEOUT_DEFAULT=8e3,s.create=function(value){if("string"==typeof value){var item=new LoadItem;return item.src=value,item}if(value instanceof s)return value;if(value instanceof Object&&value.src)return null==value.loadTimeout&&(value.loadTimeout=s.LOAD_TIMEOUT_DEFAULT),value;throw new Error("Type not recognized.")},p.set=function(props){for(var n in props)this[n]=props[n];return this},createjs.LoadItem=s}(),function(){var s={};s.isBinary=function(type){switch(type){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},s.isText=function(type){switch(type){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},s.getTypeByExtension=function(extension){if(null==extension)return createjs.AbstractLoader.TEXT;switch(extension.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=s}(),function(){"use strict";function AbstractLoader(loadItem,preferXHR,type){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=type,this.resultFormatter=null,loadItem?this._item=createjs.LoadItem.create(loadItem):this._item=null,this._preferXHR=preferXHR,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var p=createjs.extend(AbstractLoader,createjs.EventDispatcher),s=AbstractLoader;s.POST=createjs.Methods.POST,s.GET=createjs.Methods.GET,s.BINARY=createjs.Types.BINARY,s.CSS=createjs.Types.CSS,s.IMAGE=createjs.Types.IMAGE,s.JAVASCRIPT=createjs.Types.JAVASCRIPT,s.JSON=createjs.Types.JSON,s.JSONP=createjs.Types.JSONP,s.MANIFEST="manifest",s.SOUND=createjs.Types.SOUND,s.VIDEO=createjs.Types.VIDEO,s.SPRITESHEET=createjs.Types.SPRITESHEET,s.SVG=createjs.Types.SVG,s.TEXT=createjs.Types.TEXT,s.XML=createjs.Types.XML,p.getItem=function(){return this._item},p.getResult=function(raw){return raw?this._rawResult:this._result},p.getTag=function(){return this._tag},p.setTag=function(tag){this._tag=tag},p.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var evt=new createjs.Event("initialize");evt.loader=this._request,this.dispatchEvent(evt),this._request.load()},p.cancel=function(){this.canceled=!0,this.destroy()},p.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},p.getLoadedItems=function(){return this._loadedItems},p._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},p._createTag=function(src){return null},p._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},p._sendProgress=function(value){if(!this._isCanceled()){var event=null;"number"==typeof value?(this.progress=value,event=new createjs.ProgressEvent(this.progress)):(event=value,this.progress=value.loaded/value.total,event.progress=this.progress,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(event)}},p._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var event=new createjs.Event("complete");event.rawResult=this._rawResult,null!=this._result&&(event.result=this._result),this.dispatchEvent(event)}},p._sendError=function(event){!this._isCanceled()&&this.hasEventListener("error")&&(null==event&&(event=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(event))},p._isCanceled=function(){return!(null!=window.createjs&&!this.canceled)},p.resultFormatter=null,p.handleEvent=function(event){switch(event.type){case"complete":this._rawResult=event.target._response;var result=this.resultFormatter&&this.resultFormatter(this);result instanceof Function?result.call(this,createjs.proxy(this._resultFormatSuccess,this),createjs.proxy(this._resultFormatFailed,this)):(this._result=result||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(event);break;case"error":this._sendError(event);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_"+event.type.toUpperCase()+"_ERROR"))}},p._resultFormatSuccess=function(result){this._result=result,this._sendComplete()},p._resultFormatFailed=function(event){this._sendError(event)},p.buildPath=function(src,data){return createjs.URLUtils.buildURI(src,data)},p.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(AbstractLoader,"EventDispatcher")}(),function(){"use strict";function AbstractMediaLoader(loadItem,preferXHR,type){this.AbstractLoader_constructor(loadItem,preferXHR,type),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.on("initialize",this._updateXHR,this)}var p=createjs.extend(AbstractMediaLoader,createjs.AbstractLoader);p.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},p._createTag=function(){},p._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},p._updateXHR=function(event){event.loader.setResponseType&&event.loader.setResponseType("blob")},p._formatResult=function(loader){if(this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR){var URL=window.URL||window.webkitURL,result=loader.getResult(!0);loader.getTag().src=URL.createObjectURL(result)}return loader.getTag()},createjs.AbstractMediaLoader=createjs.promote(AbstractMediaLoader,"AbstractLoader")}(),function(){"use strict";var AbstractRequest=function(item){this._item=item},p=createjs.extend(AbstractRequest,createjs.EventDispatcher);p.load=function(){},p.destroy=function(){},p.cancel=function(){},createjs.AbstractRequest=createjs.promote(AbstractRequest,"EventDispatcher")}(),function(){"use strict";function TagRequest(loadItem,tag,srcAttribute){this.AbstractRequest_constructor(loadItem),this._tag=tag,this._tagSrcAttribute=srcAttribute,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var p=createjs.extend(TagRequest,createjs.AbstractRequest);p.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var evt=new createjs.Event("initialize");evt.loader=this._tag,this.dispatchEvent(evt),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(createjs.DomUtils.appendToBody(this._tag),this._addedToDOM=!0)},p.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},p._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var tag=this._tag;"loaded"!=tag.readyState&&"complete"!=tag.readyState||this._handleTagComplete()},p._handleError=function(){this._clean(),this.dispatchEvent("error")},p._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},p._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},p._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},p._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},p._showTag=function(){this._tag.style.visibility=this._startTagVisibility},p._handleStalled=function(){},createjs.TagRequest=createjs.promote(TagRequest,"AbstractRequest")}(),function(){"use strict";function MediaTagRequest(loadItem,tag,srcAttribute){this.AbstractRequest_constructor(loadItem),this._tag=tag,this._tagSrcAttribute=srcAttribute,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var p=createjs.extend(MediaTagRequest,createjs.TagRequest);p.load=function(){var sc=createjs.proxy(this._handleStalled,this);this._stalledCallback=sc;var pc=createjs.proxy(this._handleProgress,this);this._handleProgress=pc,this._tag.addEventListener("stalled",sc),this._tag.addEventListener("progress",pc),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},p._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var tag=this._tag;"loaded"!=tag.readyState&&"complete"!=tag.readyState||this._handleTagComplete()},p._handleStalled=function(){},p._handleProgress=function(event){if(event&&!(event.loaded>0&&0==event.total)){var newEvent=new createjs.ProgressEvent(event.loaded,event.total);this.dispatchEvent(newEvent)}},p._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(MediaTagRequest,"TagRequest")}(),function(){"use strict";function XHRRequest(item){this.AbstractRequest_constructor(item),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(item)}var p=createjs.extend(XHRRequest,createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],p.getResult=function(raw){return raw&&this._rawResponse?this._rawResponse:this._response},p.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},p.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values?this._request.send(createjs.URLUtils.formatQueryString(this._item.values)):this._request.send()}catch(error){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,error))}},p.setResponseType=function(type){"blob"===type&&(type=window.URL?"blob":"arraybuffer",this._responseType=type),this._request.responseType=type},p.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},p.getResponseHeader=function(header){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(header):null},p._handleProgress=function(event){if(event&&!(event.loaded>0&&0==event.total)){var newEvent=new createjs.ProgressEvent(event.loaded,event.total);this.dispatchEvent(newEvent)}},p._handleLoadStart=function(event){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},p._handleAbort=function(event){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,event))},p._handleError=function(event){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(event.message))},p._handleReadyStateChange=function(event){4==this._request.readyState&&this._handleLoad()},p._handleLoad=function(event){if(!this.loaded){this.loaded=!0;var error=this._checkError();if(error)return void this._handleError(error);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(e){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===e.name&&window.BlobBuilder){var builder=new BlobBuilder;builder.append(this._response),this._response=builder.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},p._handleTimeout=function(event){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,event))},p._checkError=function(){var status=parseInt(this._request.status);return status>=400&&status<=599?new Error(status):null},p._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(e){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(e){}return null},p._createXHR=function(item){var crossdomain=createjs.URLUtils.isCrossDomain(item),headers={},req=null;if(window.XMLHttpRequest)req=new XMLHttpRequest,crossdomain&&void 0===req.withCredentials&&window.XDomainRequest&&(req=new XDomainRequest);else{for(var i=0,l=s.ACTIVEX_VERSIONS.length;i<l;i++){var axVersion=s.ACTIVEX_VERSIONS[i];try{req=new ActiveXObject(axVersion);break}catch(e){}}if(null==req)return!1}null==item.mimeType&&createjs.RequestUtils.isText(item.type)&&(item.mimeType="text/plain; charset=utf-8"),item.mimeType&&req.overrideMimeType&&req.overrideMimeType(item.mimeType),this._xhrLevel="string"==typeof req.responseType?2:1;var src=null;if(src=item.method==createjs.AbstractLoader.GET?createjs.URLUtils.buildURI(item.src,item.values):item.src,req.open(item.method||createjs.AbstractLoader.GET,src,!0),crossdomain&&req instanceof XMLHttpRequest&&1==this._xhrLevel&&(headers.Origin=location.origin),item.values&&item.method==createjs.AbstractLoader.POST&&(headers["Content-Type"]="application/x-www-form-urlencoded"),crossdomain||headers["X-Requested-With"]||(headers["X-Requested-With"]="XMLHttpRequest"),item.headers)for(var n in item.headers)headers[n]=item.headers[n];for(n in headers)req.setRequestHeader(n,headers[n]);return req instanceof XMLHttpRequest&&void 0!==item.withCredentials&&(req.withCredentials=item.withCredentials),this._request=req,!0},p._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},p.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(XHRRequest,"AbstractRequest")}(),function(){"use strict";function LoadQueue(preferXHR,basePath,crossOrigin){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(preferXHR,basePath,crossOrigin)}var p=createjs.extend(LoadQueue,createjs.AbstractLoader),s=LoadQueue;p.init=function(preferXHR,basePath,crossOrigin){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(preferXHR),this._paused=!1,this._basePath=basePath,this._crossOrigin=crossOrigin,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=NaN},s.loadTimeout=8e3,s.LOAD_TIMEOUT=0,s.BINARY=createjs.AbstractLoader.BINARY,s.CSS=createjs.AbstractLoader.CSS,s.IMAGE=createjs.AbstractLoader.IMAGE,s.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,s.JSON=createjs.AbstractLoader.JSON,s.JSONP=createjs.AbstractLoader.JSONP,s.MANIFEST=createjs.AbstractLoader.MANIFEST,s.SOUND=createjs.AbstractLoader.SOUND,s.VIDEO=createjs.AbstractLoader.VIDEO,s.SVG=createjs.AbstractLoader.SVG,s.TEXT=createjs.AbstractLoader.TEXT,s.XML=createjs.AbstractLoader.XML,s.POST=createjs.AbstractLoader.POST,s.GET=createjs.AbstractLoader.GET,p.registerLoader=function(loader){if(!loader||!loader.canLoadItem)throw new Error("loader is of an incorrect type.");if(this._availableLoaders.indexOf(loader)!=-1)throw new Error("loader already exists.");this._availableLoaders.unshift(loader)},p.unregisterLoader=function(loader){var idx=this._availableLoaders.indexOf(loader);idx!=-1&&idx<this._defaultLoaderLength-1&&this._availableLoaders.splice(idx,1)},p.setUseXHR=function(value){return this.setPreferXHR(value)},p.setPreferXHR=function(value){return this.preferXHR=0!=value&&null!=window.XMLHttpRequest,this.preferXHR},p.removeAll=function(){this.remove()},p.remove=function(idsOrUrls){var args=null;if(idsOrUrls&&!Array.isArray(idsOrUrls))args=[idsOrUrls];else if(idsOrUrls)args=idsOrUrls;else if(arguments.length>0)return;var itemsWereRemoved=!1;if(args){for(;args.length;){var item=args.pop(),r=this.getResult(item);for(i=this._loadQueue.length-1;i>=0;i--)if(loadItem=this._loadQueue[i].getItem(),loadItem.id==item||loadItem.src==item){this._loadQueue.splice(i,1)[0].cancel();break}for(i=this._loadQueueBackup.length-1;i>=0;i--)if(loadItem=this._loadQueueBackup[i].getItem(),loadItem.id==item||loadItem.src==item){this._loadQueueBackup.splice(i,1)[0].cancel();break}if(r)this._disposeItem(this.getItem(item));else for(var i=this._currentLoads.length-1;i>=0;i--){var loadItem=this._currentLoads[i].getItem();if(loadItem.id==item||loadItem.src==item){this._currentLoads.splice(i,1)[0].cancel(),itemsWereRemoved=!0;break}}}itemsWereRemoved&&this._loadNext()}else{this.close();for(var n in this._loadItemsById)this._disposeItem(this._loadItemsById[n]);this.init(this.preferXHR,this._basePath)}},p.reset=function(){this.close();for(var n in this._loadItemsById)this._disposeItem(this._loadItemsById[n]);for(var a=[],i=0,l=this._loadQueueBackup.length;i<l;i++)a.push(this._loadQueueBackup[i].getItem());this.loadManifest(a,!1)},p.installPlugin=function(plugin){if(null!=plugin&&null!=plugin.getPreloadHandlers){this._plugins.push(plugin);var map=plugin.getPreloadHandlers();if(map.scope=plugin,null!=map.types)for(var i=0,l=map.types.length;i<l;i++)this._typeCallbacks[map.types[i]]=map;if(null!=map.extensions)for(i=0,l=map.extensions.length;i<l;i++)this._extensionCallbacks[map.extensions[i]]=map}},p.setMaxConnections=function(value){this._maxConnections=value,!this._paused&&this._loadQueue.length>0&&this._loadNext()},p.loadFile=function(file,loadNow,basePath){if(null==file){var event=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(event)}this._addItem(file,null,basePath),loadNow!==!1?this.setPaused(!1):this.setPaused(!0)},p.loadManifest=function(manifest,loadNow,basePath){var fileList=null,path=null;if(Array.isArray(manifest)){if(0==manifest.length){var event=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(event)}fileList=manifest}else if("string"==typeof manifest)fileList=[{src:manifest,type:s.MANIFEST}];else{if("object"!=typeof manifest){var event=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(event)}if(void 0!==manifest.src){if(null==manifest.type)manifest.type=s.MANIFEST;else if(manifest.type!=s.MANIFEST){var event=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(event)}fileList=[manifest]}else void 0!==manifest.manifest&&(fileList=manifest.manifest,path=manifest.path)}for(var i=0,l=fileList.length;i<l;i++)this._addItem(fileList[i],path,basePath);loadNow!==!1?this.setPaused(!1):this.setPaused(!0)},p.load=function(){this.setPaused(!1)},p.getItem=function(value){return this._loadItemsById[value]||this._loadItemsBySrc[value]},p.getResult=function(value,rawResult){var item=this._loadItemsById[value]||this._loadItemsBySrc[value];if(null==item)return null;var id=item.id;return rawResult&&this._loadedRawResults[id]?this._loadedRawResults[id]:this._loadedResults[id]},p.getItems=function(loaded){var arr=[];for(var n in this._loadItemsById){var item=this._loadItemsById[n],result=this.getResult(n);loaded===!0&&null==result||arr.push({item:item,result:result,rawResult:this.getResult(n,!0)})}return arr},p.setPaused=function(value){this._paused=value,this._paused||this._loadNext()},p.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=NaN},p._addItem=function(value,path,basePath){var item=this._createLoadItem(value,path,basePath);if(null!=item){var loader=this._createLoader(item);null!=loader&&("plugins"in loader&&(loader.plugins=this._plugins),item._loader=loader,this._loadQueue.push(loader),this._loadQueueBackup.push(loader),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&item.type==createjs.LoadQueue.JAVASCRIPT||item.maintainOrder===!0)&&(this._scriptOrder.push(item),this._loadedScripts.push(null)))}},p._createLoadItem=function(value,path,basePath){var item=createjs.LoadItem.create(value);if(null==item)return null;var bp="",useBasePath=basePath||this._basePath;if(item.src instanceof Object){if(!item.type)return null;if(path){bp=path;var pathMatch=createjs.URLUtils.parseURI(path);null==useBasePath||pathMatch.absolute||pathMatch.relative||(bp=useBasePath+bp)}else null!=useBasePath&&(bp=useBasePath)}else{var match=createjs.URLUtils.parseURI(item.src);match.extension&&(item.ext=match.extension),null==item.type&&(item.type=createjs.RequestUtils.getTypeByExtension(item.ext));var autoId=item.src;if(!match.absolute&&!match.relative)if(path){bp=path;var pathMatch=createjs.URLUtils.parseURI(path);autoId=path+autoId,null==useBasePath||pathMatch.absolute||pathMatch.relative||(bp=useBasePath+bp)}else null!=useBasePath&&(bp=useBasePath);item.src=bp+item.src}item.path=bp,void 0!==item.id&&null!==item.id&&""!==item.id||(item.id=autoId);var customHandler=this._typeCallbacks[item.type]||this._extensionCallbacks[item.ext];if(customHandler){var result=customHandler.callback.call(customHandler.scope,item,this);if(result===!1)return null;result===!0||null!=result&&(item._loader=result),match=createjs.URLUtils.parseURI(item.src),null!=match.extension&&(item.ext=match.extension)}return this._loadItemsById[item.id]=item,this._loadItemsBySrc[item.src]=item,null==item.crossOrigin&&(item.crossOrigin=this._crossOrigin),item},p._createLoader=function(item){if(null!=item._loader)return item._loader;for(var preferXHR=this.preferXHR,i=0;i<this._availableLoaders.length;i++){var loader=this._availableLoaders[i];if(loader&&loader.canLoadItem(item))return new loader(item,preferXHR)}return null},p._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var i=0;i<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);i++){var loader=this._loadQueue[i];this._canStartLoad(loader)&&(this._loadQueue.splice(i,1),i--,this._loadItem(loader))}}},p._loadItem=function(loader){loader.on("fileload",this._handleFileLoad,this),loader.on("progress",this._handleProgress,this),loader.on("complete",this._handleFileComplete,this),loader.on("error",this._handleError,this),loader.on("fileerror",this._handleFileError,this),this._currentLoads.push(loader),this._sendFileStart(loader.getItem()),loader.load()},p._handleFileLoad=function(event){event.target=null,this.dispatchEvent(event)},p._handleFileError=function(event){var newEvent=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,event.item);this._sendError(newEvent)},p._handleError=function(event){var loader=event.target;this._numItemsLoaded++,this._finishOrderedItem(loader,!0),this._updateProgress();var newEvent=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,loader.getItem());this._sendError(newEvent),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(loader),this._cleanLoadItem(loader),this._loadNext())},p._handleFileComplete=function(event){var loader=event.target,item=loader.getItem(),result=loader.getResult();this._loadedResults[item.id]=result;var rawResult=loader.getResult(!0);null!=rawResult&&rawResult!==result&&(this._loadedRawResults[item.id]=rawResult),this._saveLoadedItems(loader),this._removeLoadItem(loader),this._finishOrderedItem(loader)||this._processFinishedLoad(item,loader),this._cleanLoadItem(loader)},p._saveLoadedItems=function(loader){var list=loader.getLoadedItems();if(null!==list)for(var i=0;i<list.length;i++){var item=list[i].item;this._loadItemsBySrc[item.src]=item,this._loadItemsById[item.id]=item,this._loadedResults[item.id]=list[i].result,this._loadedRawResults[item.id]=list[i].rawResult}},p._finishOrderedItem=function(loader,loadFailed){var item=loader.getItem();if(this.maintainScriptOrder&&item.type==createjs.LoadQueue.JAVASCRIPT||item.maintainOrder){loader instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var index=createjs.indexOf(this._scriptOrder,item);return index!=-1&&(this._loadedScripts[index]=loadFailed===!0||item,this._checkScriptLoadOrder(),!0)}return!1},p._checkScriptLoadOrder=function(){for(var l=this._loadedScripts.length,i=0;i<l;i++){var item=this._loadedScripts[i];if(null===item)break;if(item!==!0){var loadItem=this._loadedResults[item.id];item.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(loadItem);var loader=item._loader;this._processFinishedLoad(item,loader),this._loadedScripts[i]=!0}}},p._processFinishedLoad=function(item,loader){if(this._numItemsLoaded++,!this.maintainScriptOrder&&item.type==createjs.LoadQueue.JAVASCRIPT){var tag=loader.getTag();createjs.DomUtils.appendToHead(tag)}this._updateProgress(),this._sendFileComplete(item,loader),this._loadNext()},p._canStartLoad=function(loader){if(!this.maintainScriptOrder||loader.preferXHR)return!0;var item=loader.getItem();if(item.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var index=this._scriptOrder.indexOf(item),i=0;i<index;){var checkItem=this._loadedScripts[i];if(null==checkItem)return!1;i++}return this._currentlyLoadingScript=!0,!0},p._removeLoadItem=function(loader){for(var l=this._currentLoads.length,i=0;i<l;i++)if(this._currentLoads[i]==loader){this._currentLoads.splice(i,1);break}},p._cleanLoadItem=function(loader){var item=loader.getItem();item&&delete item._loader},p._handleProgress=function(event){var loader=event.target;this._sendFileProgress(loader.getItem(),loader.progress),this._updateProgress()},p._updateProgress=function(){var loaded=this._numItemsLoaded/this._numItems,remaining=this._numItems-this._numItemsLoaded;if(remaining>0){for(var chunk=0,i=0,l=this._currentLoads.length;i<l;i++)chunk+=this._currentLoads[i].progress;loaded+=chunk/remaining*(remaining/this._numItems)}this._lastProgress!=loaded&&(this._sendProgress(loaded),this._lastProgress=loaded)},p._disposeItem=function(item){delete this._loadedResults[item.id],delete this._loadedRawResults[item.id],delete this._loadItemsById[item.id],delete this._loadItemsBySrc[item.src]},p._sendFileProgress=function(item,progress){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var event=new createjs.Event("fileprogress");event.progress=progress,event.loaded=progress,event.total=1,event.item=item,this.dispatchEvent(event)}},p._sendFileComplete=function(item,loader){if(!this._isCanceled()&&!this._paused){var event=new createjs.Event("fileload");event.loader=loader,event.item=item,event.result=this._loadedResults[item.id],event.rawResult=this._loadedRawResults[item.id],item.completeHandler&&item.completeHandler(event),this.hasEventListener("fileload")&&this.dispatchEvent(event);
	}},p._sendFileStart=function(item){var event=new createjs.Event("filestart");event.item=item,this.hasEventListener("filestart")&&this.dispatchEvent(event)},p.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(LoadQueue,"AbstractLoader")}(),function(){"use strict";function TextLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.TEXT)}var s=(createjs.extend(TextLoader,createjs.AbstractLoader),TextLoader);s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(TextLoader,"AbstractLoader")}(),function(){"use strict";function BinaryLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var p=createjs.extend(BinaryLoader,createjs.AbstractLoader),s=BinaryLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.BINARY},p._updateXHR=function(event){event.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(BinaryLoader,"AbstractLoader")}(),function(){"use strict";function CSSLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",preferXHR?this._tag=createjs.Elements.style():this._tag=createjs.Elements.link(),this._tag.rel="stylesheet",this._tag.type="text/css"}var p=createjs.extend(CSSLoader,createjs.AbstractLoader),s=CSSLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.CSS},p._formatResult=function(loader){if(this._preferXHR){var tag=loader.getTag();if(tag.styleSheet)tag.styleSheet.cssText=loader.getResult(!0);else{var textNode=createjs.Elements.text(loader.getResult(!0));tag.appendChild(textNode)}}else tag=this._tag;return createjs.DomUtils.appendToHead(tag),tag},createjs.CSSLoader=createjs.promote(CSSLoader,"AbstractLoader")}(),function(){"use strict";function ImageLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.DomUtils.isImageTag(loadItem)?this._tag=loadItem:createjs.DomUtils.isImageTag(loadItem.src)?this._tag=loadItem.src:createjs.DomUtils.isImageTag(loadItem.tag)&&(this._tag=loadItem.tag),null!=this._tag?this._preferXHR=!1:this._tag=createjs.Elements.img(),this.on("initialize",this._updateXHR,this)}var p=createjs.extend(ImageLoader,createjs.AbstractLoader),s=ImageLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.IMAGE},p.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var crossOrigin=this._item.crossOrigin;1==crossOrigin&&(crossOrigin="Anonymous"),null==crossOrigin||createjs.URLUtils.isLocal(this._item)||(this._tag.crossOrigin=crossOrigin),this.AbstractLoader_load()},p._updateXHR=function(event){event.loader.mimeType="text/plain; charset=x-user-defined-binary",event.loader.setResponseType&&event.loader.setResponseType("blob")},p._formatResult=function(loader){return this._formatImage},p._formatImage=function(successCallback,errorCallback){var tag=this._tag,URL=window.URL||window.webkitURL;if(this._preferXHR)if(URL){var objURL=URL.createObjectURL(this.getResult(!0));tag.src=objURL,tag.addEventListener("load",this._cleanUpURL,!1),tag.addEventListener("error",this._cleanUpURL,!1)}else tag.src=this._item.src;else;tag.complete?successCallback(tag):(tag.onload=createjs.proxy(function(){successCallback(this._tag)},this),tag.onerror=createjs.proxy(function(){errorCallback(this._tag)},this))},p._cleanUpURL=function(event){var URL=window.URL||window.webkitURL;URL.revokeObjectURL(event.target.src)},createjs.ImageLoader=createjs.promote(ImageLoader,"AbstractLoader")}(),function(){"use strict";function JavaScriptLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(createjs.Elements.script())}var p=createjs.extend(JavaScriptLoader,createjs.AbstractLoader),s=JavaScriptLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.JAVASCRIPT},p._formatResult=function(loader){var tag=loader.getTag();return this._preferXHR&&(tag.text=loader.getResult(!0)),tag},createjs.JavaScriptLoader=createjs.promote(JavaScriptLoader,"AbstractLoader")}(),function(){"use strict";function JSONLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var p=createjs.extend(JSONLoader,createjs.AbstractLoader),s=JSONLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.JSON},p._formatResult=function(loader){var json=null;try{json=createjs.DataUtils.parseJSON(loader.getResult(!0))}catch(e){var event=new createjs.ErrorEvent("JSON_FORMAT",null,e);return this._sendError(event),e}return json},createjs.JSONLoader=createjs.promote(JSONLoader,"AbstractLoader")}(),function(){"use strict";function JSONPLoader(loadItem){this.AbstractLoader_constructor(loadItem,!1,createjs.AbstractLoader.JSONP),this.setTag(createjs.Elements.script()),this.getTag().type="text/javascript"}var p=createjs.extend(JSONPLoader,createjs.AbstractLoader),s=JSONPLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.JSONP},p.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},p.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),createjs.DomUtils.appendToBody(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},p._handleLoad=function(data){this._result=this._rawResult=data,this._sendComplete(),this._dispose()},p._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},p._dispose=function(){createjs.DomUtils.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(JSONPLoader,"AbstractLoader")}(),function(){"use strict";function ManifestLoader(loadItem){this.AbstractLoader_constructor(loadItem,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var p=createjs.extend(ManifestLoader,createjs.AbstractLoader),s=ManifestLoader;s.MANIFEST_PROGRESS=.25,s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.MANIFEST},p.load=function(){this.AbstractLoader_load()},p._createRequest=function(){var callback=this._item.callback;null!=callback?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},p.handleEvent=function(event){switch(event.type){case"complete":return this._rawResult=event.target.getResult(!0),this._result=event.target.getResult(),this._sendProgress(s.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return event.loaded*=s.MANIFEST_PROGRESS,this.progress=event.loaded/event.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(event)}this.AbstractLoader_handleEvent(event)},p.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},p._loadManifest=function(json){if(json&&json.manifest){var queue=this._manifestQueue=new createjs.LoadQueue;queue.on("fileload",this._handleManifestFileLoad,this),queue.on("progress",this._handleManifestProgress,this),queue.on("complete",this._handleManifestComplete,this,!0),queue.on("error",this._handleManifestError,this,!0);for(var i=0,l=this.plugins.length;i<l;i++)queue.installPlugin(this.plugins[i]);queue.loadManifest(json)}else this._sendComplete()},p._handleManifestFileLoad=function(event){event.target=null,this.dispatchEvent(event)},p._handleManifestComplete=function(event){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},p._handleManifestProgress=function(event){this.progress=event.progress*(1-s.MANIFEST_PROGRESS)+s.MANIFEST_PROGRESS,this._sendProgress(this.progress)},p._handleManifestError=function(event){var newEvent=new createjs.Event("fileerror");newEvent.item=event.data,this.dispatchEvent(newEvent)},createjs.ManifestLoader=createjs.promote(ManifestLoader,"AbstractLoader")}(),function(){"use strict";function SoundLoader(loadItem,preferXHR){this.AbstractMediaLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.SOUND),createjs.DomUtils.isAudioTag(loadItem)?this._tag=loadItem:createjs.DomUtils.isAudioTag(loadItem.src)?this._tag=loadItem:createjs.DomUtils.isAudioTag(loadItem.tag)&&(this._tag=createjs.DomUtils.isAudioTag(loadItem)?loadItem:loadItem.src),null!=this._tag&&(this._preferXHR=!1)}var p=createjs.extend(SoundLoader,createjs.AbstractMediaLoader),s=SoundLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.SOUND},p._createTag=function(src){var tag=createjs.Elements.audio();return tag.autoplay=!1,tag.preload="none",tag.src=src,tag},createjs.SoundLoader=createjs.promote(SoundLoader,"AbstractMediaLoader")}(),function(){"use strict";function VideoLoader(loadItem,preferXHR){this.AbstractMediaLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.VIDEO),createjs.DomUtils.isVideoTag(loadItem)||createjs.DomUtils.isVideoTag(loadItem.src)?(this.setTag(createjs.DomUtils.isVideoTag(loadItem)?loadItem:loadItem.src),this._preferXHR=!1):this.setTag(this._createTag())}var p=createjs.extend(VideoLoader,createjs.AbstractMediaLoader),s=VideoLoader;p._createTag=function(){return createjs.Elements.video()},s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(VideoLoader,"AbstractMediaLoader")}(),function(){"use strict";function SpriteSheetLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var p=createjs.extend(SpriteSheetLoader,createjs.AbstractLoader),s=SpriteSheetLoader;s.SPRITESHEET_PROGRESS=.25,s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.SPRITESHEET},p.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},p._createRequest=function(){var callback=this._item.callback;null!=callback?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},p.handleEvent=function(event){switch(event.type){case"complete":return this._rawResult=event.target.getResult(!0),this._result=event.target.getResult(),this._sendProgress(s.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return event.loaded*=s.SPRITESHEET_PROGRESS,this.progress=event.loaded/event.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(event)}this.AbstractLoader_handleEvent(event)},p._loadManifest=function(json){if(json&&json.images){var queue=this._manifestQueue=new createjs.LoadQueue(this._preferXHR,this._item.path,this._item.crossOrigin);queue.on("complete",this._handleManifestComplete,this,!0),queue.on("fileload",this._handleManifestFileLoad,this),queue.on("progress",this._handleManifestProgress,this),queue.on("error",this._handleManifestError,this,!0),queue.loadManifest(json.images)}},p._handleManifestFileLoad=function(event){var image=event.result;if(null!=image){var images=this.getResult().images,pos=images.indexOf(event.item.src);images[pos]=image}},p._handleManifestComplete=function(event){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},p._handleManifestProgress=function(event){this.progress=event.progress*(1-s.SPRITESHEET_PROGRESS)+s.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},p._handleManifestError=function(event){var newEvent=new createjs.Event("fileerror");newEvent.item=event.data,this.dispatchEvent(newEvent)},createjs.SpriteSheetLoader=createjs.promote(SpriteSheetLoader,"AbstractLoader")}(),function(){"use strict";function SVGLoader(loadItem,preferXHR){this.AbstractLoader_constructor(loadItem,preferXHR,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",preferXHR?this.setTag(createjs.Elements.svg()):(this.setTag(createjs.Elements.object()),this.getTag().type="image/svg+xml")}var p=createjs.extend(SVGLoader,createjs.AbstractLoader),s=SVGLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.SVG},p._formatResult=function(loader){var xml=createjs.DataUtils.parseXML(loader.getResult(!0)),tag=loader.getTag();return!this._preferXHR&&document.body.contains(tag)&&document.body.removeChild(tag),null!=xml.documentElement?(tag.appendChild(xml.documentElement),tag.style.visibility="visible",tag):xml},createjs.SVGLoader=createjs.promote(SVGLoader,"AbstractLoader")}(),function(){"use strict";function XMLLoader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var p=createjs.extend(XMLLoader,createjs.AbstractLoader),s=XMLLoader;s.canLoadItem=function(item){return item.type==createjs.AbstractLoader.XML},p._formatResult=function(loader){return createjs.DataUtils.parseXML(loader.getResult(!0))},createjs.XMLLoader=createjs.promote(XMLLoader,"AbstractLoader")}(),function(createjs){var s=createjs.SoundJS=createjs.SoundJS||{};s.version="0.6.2",s.buildDate="Sat, 12 Nov 2016 06:45:00 GMT"}(scope.createjs),createjs.indexOf=function(array,searchElement){"use strict";for(var i=0,l=array.length;i<l;i++)if(searchElement===array[i])return i;return-1},function(){"use strict";createjs.proxy=function(method,scope){var aArgs=Array.prototype.slice.call(arguments,2);return function(){return method.apply(scope,Array.prototype.slice.call(arguments,0).concat(aArgs))}}}(),function(){"use strict";function BrowserDetect(){throw"BrowserDetect cannot be instantiated"}var agent=BrowserDetect.agent=window.navigator.userAgent;BrowserDetect.isWindowPhone=agent.indexOf("IEMobile")>-1||agent.indexOf("Windows Phone")>-1,BrowserDetect.isFirefox=agent.indexOf("Firefox")>-1,BrowserDetect.isOpera=null!=window.opera,BrowserDetect.isChrome=agent.indexOf("Chrome")>-1,BrowserDetect.isIOS=(agent.indexOf("iPod")>-1||agent.indexOf("iPhone")>-1||agent.indexOf("iPad")>-1)&&!BrowserDetect.isWindowPhone,BrowserDetect.isAndroid=agent.indexOf("Android")>-1&&!BrowserDetect.isWindowPhone,BrowserDetect.isBlackberry=agent.indexOf("Blackberry")>-1,createjs.BrowserDetect=BrowserDetect}(),function(){"use strict";var PlayPropsConfig=function(){this.interrupt=null,this.delay=null,this.offset=null,this.loop=null,this.volume=null,this.pan=null,this.startTime=null,this.duration=null},p=PlayPropsConfig.prototype={},s=PlayPropsConfig;s.create=function(value){if(value instanceof s||value instanceof Object){var ppc=new createjs.PlayPropsConfig;return ppc.set(value),ppc}throw new Error("Type not recognized.")},p.set=function(props){for(var n in props)this[n]=props[n];return this},p.toString=function(){return"[PlayPropsConfig]"},createjs.PlayPropsConfig=s}(),function(){"use strict";function Sound(){throw"Sound cannot be instantiated"}function SoundChannel(src,max){this.init(src,max)}var s=Sound;s.INTERRUPT_ANY="any",s.INTERRUPT_EARLY="early",s.INTERRUPT_LATE="late",s.INTERRUPT_NONE="none",s.PLAY_INITED="playInited",s.PLAY_SUCCEEDED="playSucceeded",s.PLAY_INTERRUPTED="playInterrupted",s.PLAY_FINISHED="playFinished",s.PLAY_FAILED="playFailed",s.SUPPORTED_EXTENSIONS=["mp3","ogg","opus","mpeg","wav","m4a","mp4","aiff","wma","mid"],s.EXTENSION_MAP={m4a:"mp4"},s.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/,s.defaultInterruptBehavior=s.INTERRUPT_NONE,s.alternateExtensions=[],s.activePlugin=null,s._masterVolume=1,Object.defineProperty(s,"volume",{get:function(){return this._masterVolume},set:function(value){if(null==Number(value))return!1;if(value=Math.max(0,Math.min(1,value)),s._masterVolume=value,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterVolume(value)}}),s._masterMute=!1,Object.defineProperty(s,"muted",{get:function(){return this._masterMute},set:function(value){if(null==value)return!1;if(this._masterMute=value,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterMute(value);return!0}}),Object.defineProperty(s,"capabilities",{get:function(){return null==s.activePlugin?null:s.activePlugin._capabilities},set:function(value){return!1}}),s._pluginsRegistered=!1,s._lastID=0,s._instances=[],s._idHash={},s._preloadHash={},s._defaultPlayPropsHash={},s.addEventListener=null,s.removeEventListener=null,s.removeAllEventListeners=null,s.dispatchEvent=null,s.hasEventListener=null,s._listeners=null,createjs.EventDispatcher.initialize(s),s.getPreloadHandlers=function(){return{callback:createjs.proxy(s.initLoad,s),types:["sound"],extensions:s.SUPPORTED_EXTENSIONS}},s._handleLoadComplete=function(event){var src=event.target.getItem().src;if(s._preloadHash[src])for(var i=0,l=s._preloadHash[src].length;i<l;i++){var item=s._preloadHash[src][i];if(s._preloadHash[src][i]=!0,s.hasEventListener("fileload")){var event=new createjs.Event("fileload");event.src=item.src,event.id=item.id,event.data=item.data,event.sprite=item.sprite,s.dispatchEvent(event)}}},s._handleLoadError=function(event){var src=event.target.getItem().src;if(s._preloadHash[src])for(var i=0,l=s._preloadHash[src].length;i<l;i++){var item=s._preloadHash[src][i];if(s._preloadHash[src][i]=!1,s.hasEventListener("fileerror")){var event=new createjs.Event("fileerror");event.src=item.src,event.id=item.id,event.data=item.data,event.sprite=item.sprite,s.dispatchEvent(event)}}},s._registerPlugin=function(plugin){return!!plugin.isSupported()&&(s.activePlugin=new plugin,!0)},s.registerPlugins=function(plugins){s._pluginsRegistered=!0;for(var i=0,l=plugins.length;i<l;i++)if(s._registerPlugin(plugins[i]))return!0;return!1},s.initializeDefaultPlugins=function(){return null!=s.activePlugin||!s._pluginsRegistered&&!!s.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])},s.isReady=function(){return null!=s.activePlugin},s.getCapabilities=function(){return null==s.activePlugin?null:s.activePlugin._capabilities},s.getCapability=function(key){return null==s.activePlugin?null:s.activePlugin._capabilities[key]},s.initLoad=function(loadItem){return s._registerSound(loadItem)},s._registerSound=function(loadItem){if(!s.initializeDefaultPlugins())return!1;var details;if(loadItem.src instanceof Object?(details=s._parseSrc(loadItem.src),details.src=loadItem.path+details.src):details=s._parsePath(loadItem.src),null==details)return!1;loadItem.src=details.src,loadItem.type="sound";var data=loadItem.data,numChannels=null;if(null!=data&&(isNaN(data.channels)?isNaN(data)||(numChannels=parseInt(data)):numChannels=parseInt(data.channels),data.audioSprite))for(var sp,i=data.audioSprite.length;i--;)sp=data.audioSprite[i],s._idHash[sp.id]={src:loadItem.src,startTime:parseInt(sp.startTime),duration:parseInt(sp.duration)},sp.defaultPlayProps&&(s._defaultPlayPropsHash[sp.id]=createjs.PlayPropsConfig.create(sp.defaultPlayProps));null!=loadItem.id&&(s._idHash[loadItem.id]={src:loadItem.src});var loader=s.activePlugin.register(loadItem);return SoundChannel.create(loadItem.src,numChannels),null!=data&&isNaN(data)?loadItem.data.channels=numChannels||SoundChannel.maxPerChannel():loadItem.data=numChannels||SoundChannel.maxPerChannel(),loader.type&&(loadItem.type=loader.type),loadItem.defaultPlayProps&&(s._defaultPlayPropsHash[loadItem.src]=createjs.PlayPropsConfig.create(loadItem.defaultPlayProps)),loader},s.registerSound=function(src,id,data,basePath,defaultPlayProps){var loadItem={src:src,id:id,data:data,defaultPlayProps:defaultPlayProps};src instanceof Object&&src.src&&(basePath=id,loadItem=src),loadItem=createjs.LoadItem.create(loadItem),loadItem.path=basePath,null==basePath||loadItem.src instanceof Object||(loadItem.src=basePath+loadItem.src);var loader=s._registerSound(loadItem);if(!loader)return!1;if(s._preloadHash[loadItem.src]||(s._preloadHash[loadItem.src]=[]),s._preloadHash[loadItem.src].push(loadItem),1==s._preloadHash[loadItem.src].length)loader.on("complete",this._handleLoadComplete,this),loader.on("error",this._handleLoadError,this),s.activePlugin.preload(loader);else if(1==s._preloadHash[loadItem.src][0])return!0;return loadItem},s.registerSounds=function(sounds,basePath){var returnValues=[];sounds.path&&(basePath?basePath+=sounds.path:basePath=sounds.path,sounds=sounds.manifest);for(var i=0,l=sounds.length;i<l;i++)returnValues[i]=createjs.Sound.registerSound(sounds[i].src,sounds[i].id,sounds[i].data,basePath,sounds[i].defaultPlayProps);return returnValues},s.removeSound=function(src,basePath){if(null==s.activePlugin)return!1;src instanceof Object&&src.src&&(src=src.src);var details;if(src instanceof Object?details=s._parseSrc(src):(src=s._getSrcById(src).src,details=s._parsePath(src)),null==details)return!1;src=details.src,null!=basePath&&(src=basePath+src);for(var prop in s._idHash)s._idHash[prop].src==src&&delete s._idHash[prop];return SoundChannel.removeSrc(src),delete s._preloadHash[src],s.activePlugin.removeSound(src),!0},s.removeSounds=function(sounds,basePath){var returnValues=[];sounds.path&&(basePath?basePath+=sounds.path:basePath=sounds.path,sounds=sounds.manifest);for(var i=0,l=sounds.length;i<l;i++)returnValues[i]=createjs.Sound.removeSound(sounds[i].src,basePath);return returnValues},s.removeAllSounds=function(){s._idHash={},s._preloadHash={},SoundChannel.removeAll(),s.activePlugin&&s.activePlugin.removeAllSounds()},s.loadComplete=function(src){if(!s.isReady())return!1;var details=s._parsePath(src);return src=details?s._getSrcById(details.src).src:s._getSrcById(src).src,void 0!=s._preloadHash[src]&&1==s._preloadHash[src][0]},s._parsePath=function(value){"string"!=typeof value&&(value=value.toString());var match=value.match(s.FILE_PATTERN);if(null==match)return!1;for(var name=match[4],ext=match[5],c=s.capabilities,i=0;!c[ext];)if(ext=s.alternateExtensions[i++],i>s.alternateExtensions.length)return null;value=value.replace("."+match[5],"."+ext);var ret={name:name,src:value,extension:ext};return ret},s._parseSrc=function(value){var ret={name:void 0,src:void 0,extension:void 0},c=s.capabilities;for(var prop in value)if(value.hasOwnProperty(prop)&&c[prop]){ret.src=value[prop],ret.extension=prop;break}if(!ret.src)return!1;var i=ret.src.lastIndexOf("/");return i!=-1?ret.name=ret.src.slice(i+1):ret.name=ret.src,ret},s.play=function(src,interrupt,delay,offset,loop,volume,pan,startTime,duration){var playProps;playProps=interrupt instanceof Object||interrupt instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(interrupt):createjs.PlayPropsConfig.create({interrupt:interrupt,delay:delay,offset:offset,loop:loop,volume:volume,pan:pan,startTime:startTime,duration:duration});var instance=s.createInstance(src,playProps.startTime,playProps.duration),ok=s._playInstance(instance,playProps);return ok||instance._playFailed(),instance},s.createInstance=function(src,startTime,duration){if(!s.initializeDefaultPlugins())return new createjs.DefaultSoundInstance(src,startTime,duration);var defaultPlayProps=s._defaultPlayPropsHash[src];src=s._getSrcById(src);var details=s._parsePath(src.src),instance=null;return null!=details&&null!=details.src?(SoundChannel.create(details.src),null==startTime&&(startTime=src.startTime),instance=s.activePlugin.create(details.src,startTime,duration||src.duration),defaultPlayProps=defaultPlayProps||s._defaultPlayPropsHash[details.src],defaultPlayProps&&instance.applyPlayProps(defaultPlayProps)):instance=new createjs.DefaultSoundInstance(src,startTime,duration),instance.uniqueId=s._lastID++,instance},s.stop=function(){for(var instances=this._instances,i=instances.length;i--;)instances[i].stop()},s.setVolume=function(value){if(null==Number(value))return!1;if(value=Math.max(0,Math.min(1,value)),s._masterVolume=value,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterVolume(value)},s.getVolume=function(){return this._masterVolume},s.setMute=function(value){if(null==value)return!1;if(this._masterMute=value,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(value))for(var instances=this._instances,i=0,l=instances.length;i<l;i++)instances[i].setMasterMute(value);return!0},s.getMute=function(){return this._masterMute},s.setDefaultPlayProps=function(src,playProps){src=s._getSrcById(src),s._defaultPlayPropsHash[s._parsePath(src.src).src]=createjs.PlayPropsConfig.create(playProps)},s.getDefaultPlayProps=function(src){return src=s._getSrcById(src),s._defaultPlayPropsHash[s._parsePath(src.src).src]},s._playInstance=function(instance,playProps){var defaultPlayProps=s._defaultPlayPropsHash[instance.src]||{};if(null==playProps.interrupt&&(playProps.interrupt=defaultPlayProps.interrupt||s.defaultInterruptBehavior),null==playProps.delay&&(playProps.delay=defaultPlayProps.delay||0),null==playProps.offset&&(playProps.offset=instance.getPosition()),null==playProps.loop&&(playProps.loop=instance.loop),null==playProps.volume&&(playProps.volume=instance.volume),null==playProps.pan&&(playProps.pan=instance.pan),0==playProps.delay){var ok=s._beginPlaying(instance,playProps);if(!ok)return!1}else{var delayTimeoutId=setTimeout(function(){s._beginPlaying(instance,playProps)},playProps.delay);instance.delayTimeoutId=delayTimeoutId}return this._instances.push(instance),!0},s._beginPlaying=function(instance,playProps){if(!SoundChannel.add(instance,playProps.interrupt))return!1;var result=instance._beginPlaying(playProps);if(!result){var index=createjs.indexOf(this._instances,instance);return index>-1&&this._instances.splice(index,1),!1}return!0},s._getSrcById=function(value){return s._idHash[value]||{src:value}},s._playFinished=function(instance){SoundChannel.remove(instance);var index=createjs.indexOf(this._instances,instance);index>-1&&this._instances.splice(index,1)},createjs.Sound=Sound,SoundChannel.channels={},SoundChannel.create=function(src,max){var channel=SoundChannel.get(src);return null==channel&&(SoundChannel.channels[src]=new SoundChannel(src,max),!0)},SoundChannel.removeSrc=function(src){var channel=SoundChannel.get(src);return null!=channel&&(channel._removeAll(),delete SoundChannel.channels[src],!0)},SoundChannel.removeAll=function(){for(var channel in SoundChannel.channels)SoundChannel.channels[channel]._removeAll();SoundChannel.channels={}},SoundChannel.add=function(instance,interrupt){var channel=SoundChannel.get(instance.src);return null!=channel&&channel._add(instance,interrupt)},SoundChannel.remove=function(instance){var channel=SoundChannel.get(instance.src);return null!=channel&&(channel._remove(instance),!0)},SoundChannel.maxPerChannel=function(){return p.maxDefault},SoundChannel.get=function(src){return SoundChannel.channels[src]};var p=SoundChannel.prototype;p.constructor=SoundChannel,p.src=null,p.max=null,p.maxDefault=100,p.length=0,p.init=function(src,max){this.src=src,this.max=max||this.maxDefault,this.max==-1&&(this.max=this.maxDefault),this._instances=[]},p._get=function(index){return this._instances[index]},p._add=function(instance,interrupt){return!!this._getSlot(interrupt,instance)&&(this._instances.push(instance),this.length++,!0)},p._remove=function(instance){var index=createjs.indexOf(this._instances,instance);return index!=-1&&(this._instances.splice(index,1),this.length--,!0)},p._removeAll=function(){for(var i=this.length-1;i>=0;i--)this._instances[i].stop()},p._getSlot=function(interrupt,instance){var target,replacement;if(interrupt!=Sound.INTERRUPT_NONE&&(replacement=this._get(0),null==replacement))return!0;for(var i=0,l=this.max;i<l;i++){if(target=this._get(i),null==target)return!0;if(target.playState==Sound.PLAY_FINISHED||target.playState==Sound.PLAY_INTERRUPTED||target.playState==Sound.PLAY_FAILED){replacement=target;break}interrupt!=Sound.INTERRUPT_NONE&&(interrupt==Sound.INTERRUPT_EARLY&&target.getPosition()<replacement.getPosition()||interrupt==Sound.INTERRUPT_LATE&&target.getPosition()>replacement.getPosition())&&(replacement=target)}return null!=replacement&&(replacement._interrupt(),this._remove(replacement),!0)},p.toString=function(){return"[Sound SoundChannel]"}}(),function(){"use strict";var AbstractSoundInstance=function(src,startTime,duration,playbackResource){this.EventDispatcher_constructor(),this.src=src,this.uniqueId=-1,this.playState=null,this.delayTimeoutId=null,this._volume=1,Object.defineProperty(this,"volume",{get:this.getVolume,set:this.setVolume}),this._pan=0,Object.defineProperty(this,"pan",{get:this.getPan,set:this.setPan}),this._startTime=Math.max(0,startTime||0),Object.defineProperty(this,"startTime",{get:this.getStartTime,set:this.setStartTime}),this._duration=Math.max(0,duration||0),Object.defineProperty(this,"duration",{get:this.getDuration,set:this.setDuration}),this._playbackResource=null,Object.defineProperty(this,"playbackResource",{get:this.getPlaybackResource,set:this.setPlaybackResource}),playbackResource!==!1&&playbackResource!==!0&&this.setPlaybackResource(playbackResource),this._position=0,Object.defineProperty(this,"position",{get:this.getPosition,set:this.setPosition}),this._loop=0,Object.defineProperty(this,"loop",{get:this.getLoop,set:this.setLoop}),this._muted=!1,Object.defineProperty(this,"muted",{get:this.getMuted,set:this.setMuted}),this._paused=!1,Object.defineProperty(this,"paused",{get:this.getPaused,set:this.setPaused})},p=createjs.extend(AbstractSoundInstance,createjs.EventDispatcher);p.play=function(interrupt,delay,offset,loop,volume,pan){var playProps;return playProps=interrupt instanceof Object||interrupt instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(interrupt):createjs.PlayPropsConfig.create({interrupt:interrupt,delay:delay,offset:offset,loop:loop,volume:volume,pan:pan}),this.playState==createjs.Sound.PLAY_SUCCEEDED?(this.applyPlayProps(playProps),void(this._paused&&this.setPaused(!1))):(this._cleanUp(),createjs.Sound._playInstance(this,playProps),this)},p.stop=function(){return this._position=0,this._paused=!1,this._handleStop(),this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this},p.destroy=function(){this._cleanUp(),this.src=null,this.playbackResource=null,this.removeAllEventListeners()},p.applyPlayProps=function(playProps){return null!=playProps.offset&&this.setPosition(playProps.offset),null!=playProps.loop&&this.setLoop(playProps.loop),null!=playProps.volume&&this.setVolume(playProps.volume),null!=playProps.pan&&this.setPan(playProps.pan),null!=playProps.startTime&&(this.setStartTime(playProps.startTime),this.setDuration(playProps.duration)),this},p.toString=function(){return"[AbstractSoundInstance]"},p.getPaused=function(){return this._paused},p.setPaused=function(value){if(!(value!==!0&&value!==!1||this._paused==value||1==value&&this.playState!=createjs.Sound.PLAY_SUCCEEDED))return this._paused=value,value?this._pause():this._resume(),clearTimeout(this.delayTimeoutId),this},p.setVolume=function(value){return value==this._volume?this:(this._volume=Math.max(0,Math.min(1,value)),this._muted||this._updateVolume(),this)},p.getVolume=function(){return this._volume},p.setMuted=function(value){if(value===!0||value===!1)return this._muted=value,this._updateVolume(),this},p.getMuted=function(){return this._muted},p.setPan=function(value){return value==this._pan?this:(this._pan=Math.max(-1,Math.min(1,value)),this._updatePan(),
	this)},p.getPan=function(){return this._pan},p.getPosition=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||(this._position=this._calculateCurrentPosition()),this._position},p.setPosition=function(value){return this._position=Math.max(0,value),this.playState==createjs.Sound.PLAY_SUCCEEDED&&this._updatePosition(),this},p.getStartTime=function(){return this._startTime},p.setStartTime=function(value){return value==this._startTime?this:(this._startTime=Math.max(0,value||0),this._updateStartTime(),this)},p.getDuration=function(){return this._duration},p.setDuration=function(value){return value==this._duration?this:(this._duration=Math.max(0,value||0),this._updateDuration(),this)},p.setPlaybackResource=function(value){return this._playbackResource=value,0==this._duration&&this._setDurationFromSource(),this},p.getPlaybackResource=function(){return this._playbackResource},p.getLoop=function(){return this._loop},p.setLoop=function(value){null!=this._playbackResource&&(0!=this._loop&&0==value?this._removeLooping(value):0==this._loop&&0!=value&&this._addLooping(value)),this._loop=value},p._sendEvent=function(type){var event=new createjs.Event(type);this.dispatchEvent(event)},p._cleanUp=function(){clearTimeout(this.delayTimeoutId),this._handleCleanUp(),this._paused=!1,createjs.Sound._playFinished(this)},p._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._sendEvent("interrupted")},p._beginPlaying=function(playProps){return this.setPosition(playProps.offset),this.setLoop(playProps.loop),this.setVolume(playProps.volume),this.setPan(playProps.pan),null!=playProps.startTime&&(this.setStartTime(playProps.startTime),this.setDuration(playProps.duration)),null!=this._playbackResource&&this._position<this._duration?(this._paused=!1,this._handleSoundReady(),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._sendEvent("succeeded"),!0):(this._playFailed(),!1)},p._playFailed=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed")},p._handleSoundComplete=function(event){return this._position=0,0!=this._loop?(this._loop--,this._handleLoop(),void this._sendEvent("loop")):(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,void this._sendEvent("complete"))},p._handleSoundReady=function(){},p._updateVolume=function(){},p._updatePan=function(){},p._updateStartTime=function(){},p._updateDuration=function(){},p._setDurationFromSource=function(){},p._calculateCurrentPosition=function(){},p._updatePosition=function(){},p._removeLooping=function(value){},p._addLooping=function(value){},p._pause=function(){},p._resume=function(){},p._handleStop=function(){},p._handleCleanUp=function(){},p._handleLoop=function(){},createjs.AbstractSoundInstance=createjs.promote(AbstractSoundInstance,"EventDispatcher"),createjs.DefaultSoundInstance=createjs.AbstractSoundInstance}(),function(){"use strict";var AbstractPlugin=function(){this._capabilities=null,this._loaders={},this._audioSources={},this._soundInstances={},this._volume=1,this._loaderClass,this._soundInstanceClass},p=AbstractPlugin.prototype;AbstractPlugin._capabilities=null,AbstractPlugin.isSupported=function(){return!0},p.register=function(loadItem){var loader=this._loaders[loadItem.src];return loader&&!loader.canceled?this._loaders[loadItem.src]:(this._audioSources[loadItem.src]=!0,this._soundInstances[loadItem.src]=[],loader=new this._loaderClass(loadItem),loader.on("complete",this._handlePreloadComplete,this),this._loaders[loadItem.src]=loader,loader)},p.preload=function(loader){loader.on("error",this._handlePreloadError,this),loader.load()},p.isPreloadStarted=function(src){return null!=this._audioSources[src]},p.isPreloadComplete=function(src){return!(null==this._audioSources[src]||1==this._audioSources[src])},p.removeSound=function(src){if(this._soundInstances[src]){for(var i=this._soundInstances[src].length;i--;){var item=this._soundInstances[src][i];item.destroy()}delete this._soundInstances[src],delete this._audioSources[src],this._loaders[src]&&this._loaders[src].destroy(),delete this._loaders[src]}},p.removeAllSounds=function(){for(var key in this._audioSources)this.removeSound(key)},p.create=function(src,startTime,duration){this.isPreloadStarted(src)||this.preload(this.register(src));var si=new this._soundInstanceClass(src,startTime,duration,this._audioSources[src]);return this._soundInstances[src]&&this._soundInstances[src].push(si),si},p.setVolume=function(value){return this._volume=value,this._updateVolume(),!0},p.getVolume=function(){return this._volume},p.setMute=function(value){return this._updateVolume(),!0},p.toString=function(){return"[AbstractPlugin]"},p._handlePreloadComplete=function(event){var src=event.target.getItem().src;this._audioSources[src]=event.result;for(var i=0,l=this._soundInstances[src].length;i<l;i++){var item=this._soundInstances[src][i];item.setPlaybackResource(this._audioSources[src]),this._soundInstances[src]=null}},p._handlePreloadError=function(event){},p._updateVolume=function(){},createjs.AbstractPlugin=AbstractPlugin}(),function(){"use strict";function Loader(loadItem){this.AbstractLoader_constructor(loadItem,!0,createjs.AbstractLoader.SOUND)}var p=createjs.extend(Loader,createjs.AbstractLoader);Loader.context=null,p.toString=function(){return"[WebAudioLoader]"},p._createRequest=function(){this._request=new createjs.XHRRequest(this._item,!1),this._request.setResponseType("arraybuffer")},p._sendComplete=function(event){Loader.context.decodeAudioData(this._rawResult,createjs.proxy(this._handleAudioDecoded,this),createjs.proxy(this._sendError,this))},p._handleAudioDecoded=function(decodedAudio){this._result=decodedAudio,this.AbstractLoader__sendComplete()},createjs.WebAudioLoader=createjs.promote(Loader,"AbstractLoader")}(),function(){"use strict";function WebAudioSoundInstance(src,startTime,duration,playbackResource){this.AbstractSoundInstance_constructor(src,startTime,duration,playbackResource),this.gainNode=s.context.createGain(),this.panNode=s.context.createPanner(),this.panNode.panningModel=s._panningModel,this.panNode.connect(this.gainNode),this._updatePan(),this.sourceNode=null,this._soundCompleteTimeout=null,this._sourceNodeNext=null,this._playbackStartTime=0,this._endedHandler=createjs.proxy(this._handleSoundComplete,this)}var p=createjs.extend(WebAudioSoundInstance,createjs.AbstractSoundInstance),s=WebAudioSoundInstance;s.context=null,s._scratchBuffer=null,s.destinationNode=null,s._panningModel="equalpower",p.destroy=function(){this.AbstractSoundInstance_destroy(),this.panNode.disconnect(0),this.panNode=null,this.gainNode.disconnect(0),this.gainNode=null},p.toString=function(){return"[WebAudioSoundInstance]"},p._updatePan=function(){this.panNode.setPosition(this._pan,0,-.5)},p._removeLooping=function(value){this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)},p._addLooping=function(value){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},p._setDurationFromSource=function(){this._duration=1e3*this.playbackResource.duration},p._handleCleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout),this._playbackStartTime=0},p._cleanUpAudioNode=function(audioNode){if(audioNode){audioNode.stop(0),audioNode.disconnect(0);try{audioNode.buffer=s._scratchBuffer}catch(e){}audioNode=null}return audioNode},p._handleSoundReady=function(event){this.gainNode.connect(s.destinationNode);var dur=.001*this._duration,pos=.001*this._position;pos>dur&&(pos=dur),this.sourceNode=this._createAndPlayAudioNode(s.context.currentTime-dur,pos),this._playbackStartTime=this.sourceNode.startTime-pos,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(dur-pos)),0!=this._loop&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},p._createAndPlayAudioNode=function(startTime,offset){var audioNode=s.context.createBufferSource();audioNode.buffer=this.playbackResource,audioNode.connect(this.panNode);var dur=.001*this._duration;return audioNode.startTime=startTime+dur,audioNode.start(audioNode.startTime,offset+.001*this._startTime,dur-offset),audioNode},p._pause=function(){this._position=1e3*(s.context.currentTime-this._playbackStartTime),this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout)},p._resume=function(){this._handleSoundReady()},p._updateVolume=function(){var newVolume=this._muted?0:this._volume;newVolume!=this.gainNode.gain.value&&(this.gainNode.gain.value=newVolume)},p._calculateCurrentPosition=function(){return 1e3*(s.context.currentTime-this._playbackStartTime)},p._updatePosition=function(){this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout),this._paused||this._handleSoundReady()},p._handleLoop=function(){this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._playbackStartTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)},p._updateDuration=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._pause(),this._resume())},createjs.WebAudioSoundInstance=createjs.promote(WebAudioSoundInstance,"AbstractSoundInstance")}(),function(){"use strict";function WebAudioPlugin(){this.AbstractPlugin_constructor(),this._panningModel=s._panningModel,this.context=s.context,this.dynamicsCompressorNode=this.context.createDynamicsCompressor(),this.dynamicsCompressorNode.connect(this.context.destination),this.gainNode=this.context.createGain(),this.gainNode.connect(this.dynamicsCompressorNode),createjs.WebAudioSoundInstance.destinationNode=this.gainNode,this._capabilities=s._capabilities,this._loaderClass=createjs.WebAudioLoader,this._soundInstanceClass=createjs.WebAudioSoundInstance,this._addPropsToClasses()}var p=createjs.extend(WebAudioPlugin,createjs.AbstractPlugin),s=WebAudioPlugin;s._capabilities=null,s._panningModel="equalpower",s.context=null,s._scratchBuffer=null,s._unlocked=!1,s.isSupported=function(){var isMobilePhoneGap=createjs.BrowserDetect.isIOS||createjs.BrowserDetect.isAndroid||createjs.BrowserDetect.isBlackberry;return!("file:"==location.protocol&&!isMobilePhoneGap&&!this._isFileXHRSupported())&&(s._generateCapabilities(),null!=s.context)},s.playEmptySound=function(){if(null!=s.context){var source=s.context.createBufferSource();source.buffer=s._scratchBuffer,source.connect(s.context.destination),source.start(0,0,0)}},s._isFileXHRSupported=function(){var supported=!0,xhr=new XMLHttpRequest;try{xhr.open("GET","WebAudioPluginTest.fail",!1)}catch(error){return supported=!1}xhr.onerror=function(){supported=!1},xhr.onload=function(){supported=404==this.status||200==this.status||0==this.status&&""!=this.response};try{xhr.send()}catch(error){supported=!1}return supported},s._generateCapabilities=function(){if(null==s._capabilities){var t=document.createElement("audio");if(null==t.canPlayType)return null;if(null==s.context)if(window.AudioContext)s.context=new AudioContext;else{if(!window.webkitAudioContext)return null;s.context=new webkitAudioContext}null==s._scratchBuffer&&(s._scratchBuffer=s.context.createBuffer(1,1,22050)),s._compatibilitySetUp(),"ontouchstart"in window&&"running"!=s.context.state&&(s._unlock(),document.addEventListener("mousedown",s._unlock,!0),document.addEventListener("touchend",s._unlock,!0)),s._capabilities={panning:!0,volume:!0,tracks:-1};for(var supportedExtensions=createjs.Sound.SUPPORTED_EXTENSIONS,extensionMap=createjs.Sound.EXTENSION_MAP,i=0,l=supportedExtensions.length;i<l;i++){var ext=supportedExtensions[i],playType=extensionMap[ext]||ext;s._capabilities[ext]="no"!=t.canPlayType("audio/"+ext)&&""!=t.canPlayType("audio/"+ext)||"no"!=t.canPlayType("audio/"+playType)&&""!=t.canPlayType("audio/"+playType)}s.context.destination.numberOfChannels<2&&(s._capabilities.panning=!1)}},s._compatibilitySetUp=function(){if(s._panningModel="equalpower",!s.context.createGain){s.context.createGain=s.context.createGainNode;var audioNode=s.context.createBufferSource();audioNode.__proto__.start=audioNode.__proto__.noteGrainOn,audioNode.__proto__.stop=audioNode.__proto__.noteOff,s._panningModel=0}},s._unlock=function(){s._unlocked||(s.playEmptySound(),"running"==s.context.state&&(document.removeEventListener("mousedown",s._unlock,!0),document.removeEventListener("touchend",s._unlock,!0),s._unlocked=!0))},p.toString=function(){return"[WebAudioPlugin]"},p._addPropsToClasses=function(){var c=this._soundInstanceClass;c.context=this.context,c._scratchBuffer=s._scratchBuffer,c.destinationNode=this.gainNode,c._panningModel=this._panningModel,this._loaderClass.context=this.context},p._updateVolume=function(){var newVolume=createjs.Sound._masterMute?0:this._volume;newVolume!=this.gainNode.gain.value&&(this.gainNode.gain.value=newVolume)},createjs.WebAudioPlugin=createjs.promote(WebAudioPlugin,"AbstractPlugin")}(),function(){"use strict";function HTMLAudioTagPool(){throw"HTMLAudioTagPool cannot be instantiated"}function TagPool(src){this._tags=[]}var s=HTMLAudioTagPool;s._tags={},s._tagPool=new TagPool,s._tagUsed={},s.get=function(src){var t=s._tags[src];return null==t?(t=s._tags[src]=s._tagPool.get(),t.src=src):s._tagUsed[src]?(t=s._tagPool.get(),t.src=src):s._tagUsed[src]=!0,t},s.set=function(src,tag){tag==s._tags[src]?s._tagUsed[src]=!1:s._tagPool.set(tag)},s.remove=function(src){var tag=s._tags[src];return null!=tag&&(s._tagPool.set(tag),delete s._tags[src],delete s._tagUsed[src],!0)},s.getDuration=function(src){var t=s._tags[src];return null!=t&&t.duration?1e3*t.duration:0},createjs.HTMLAudioTagPool=HTMLAudioTagPool;var p=TagPool.prototype;p.constructor=TagPool,p.get=function(){var tag;return tag=0==this._tags.length?this._createTag():this._tags.pop(),null==tag.parentNode&&document.body.appendChild(tag),tag},p.set=function(tag){var index=createjs.indexOf(this._tags,tag);index==-1&&(this._tags.src=null,this._tags.push(tag))},p.toString=function(){return"[TagPool]"},p._createTag=function(){var tag=document.createElement("audio");return tag.autoplay=!1,tag.preload="none",tag}}(),function(){"use strict";function HTMLAudioSoundInstance(src,startTime,duration,playbackResource){this.AbstractSoundInstance_constructor(src,startTime,duration,playbackResource),this._audioSpriteStopTime=null,this._delayTimeoutId=null,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleTagReady,this),this._stalledHandler=createjs.proxy(this._playFailed,this),this._audioSpriteEndHandler=createjs.proxy(this._handleAudioSpriteLoop,this),this._loopHandler=createjs.proxy(this._handleSoundComplete,this),duration?this._audioSpriteStopTime=.001*(startTime+duration):this._duration=createjs.HTMLAudioTagPool.getDuration(this.src)}var p=createjs.extend(HTMLAudioSoundInstance,createjs.AbstractSoundInstance);p.setMasterVolume=function(value){this._updateVolume()},p.setMasterMute=function(isMuted){this._updateVolume()},p.toString=function(){return"[HTMLAudioSoundInstance]"},p._removeLooping=function(){null!=this._playbackResource&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},p._addLooping=function(){null==this._playbackResource||this._audioSpriteStopTime||(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)},p._handleCleanUp=function(){var tag=this._playbackResource;if(null!=tag){tag.pause(),tag.loop=!1,tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),tag.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1);try{tag.currentTime=this._startTime}catch(e){}createjs.HTMLAudioTagPool.set(this.src,tag),this._playbackResource=null}},p._beginPlaying=function(playProps){return this._playbackResource=createjs.HTMLAudioTagPool.get(this.src),this.AbstractSoundInstance__beginPlaying(playProps)},p._handleSoundReady=function(event){if(4!==this._playbackResource.readyState){var tag=this._playbackResource;return tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),tag.preload="auto",void tag.load()}this._updateVolume(),this._playbackResource.currentTime=.001*(this._startTime+this._position),this._audioSpriteStopTime?this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1):(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),0!=this._loop&&(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)),this._playbackResource.play()},p._handleTagReady=function(event){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),this._handleSoundReady()},p._pause=function(){this._playbackResource.pause()},p._resume=function(){this._playbackResource.play()},p._updateVolume=function(){if(null!=this._playbackResource){var newVolume=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;newVolume!=this._playbackResource.volume&&(this._playbackResource.volume=newVolume)}},p._calculateCurrentPosition=function(){return 1e3*this._playbackResource.currentTime-this._startTime},p._updatePosition=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1);try{this._playbackResource.currentTime=.001*(this._position+this._startTime)}catch(error){this._handleSetPositionSeek(null)}},p._handleSetPositionSeek=function(event){null!=this._playbackResource&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},p._handleAudioSpriteLoop=function(event){this._playbackResource.currentTime<=this._audioSpriteStopTime||(this._playbackResource.pause(),0==this._loop?this._handleSoundComplete(null):(this._position=0,this._loop--,this._playbackResource.currentTime=.001*this._startTime,this._paused||this._playbackResource.play(),this._sendEvent("loop")))},p._handleLoop=function(event){0==this._loop&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},p._updateStartTime=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},p._updateDuration=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},p._setDurationFromSource=function(){this._duration=createjs.HTMLAudioTagPool.getDuration(this.src),this._playbackResource=null},createjs.HTMLAudioSoundInstance=createjs.promote(HTMLAudioSoundInstance,"AbstractSoundInstance")}(),function(){"use strict";function HTMLAudioPlugin(){this.AbstractPlugin_constructor(),this.defaultNumChannels=2,this._capabilities=s._capabilities,this._loaderClass=createjs.SoundLoader,this._soundInstanceClass=createjs.HTMLAudioSoundInstance}var p=createjs.extend(HTMLAudioPlugin,createjs.AbstractPlugin),s=HTMLAudioPlugin;s.MAX_INSTANCES=30,s._AUDIO_READY="canplaythrough",s._AUDIO_ENDED="ended",s._AUDIO_SEEKED="seeked",s._AUDIO_STALLED="stalled",s._TIME_UPDATE="timeupdate",s._capabilities=null,s.isSupported=function(){return s._generateCapabilities(),null!=s._capabilities},s._generateCapabilities=function(){if(null==s._capabilities){var t=document.createElement("audio");if(null==t.canPlayType)return null;s._capabilities={panning:!1,volume:!0,tracks:-1};for(var supportedExtensions=createjs.Sound.SUPPORTED_EXTENSIONS,extensionMap=createjs.Sound.EXTENSION_MAP,i=0,l=supportedExtensions.length;i<l;i++){var ext=supportedExtensions[i],playType=extensionMap[ext]||ext;s._capabilities[ext]="no"!=t.canPlayType("audio/"+ext)&&""!=t.canPlayType("audio/"+ext)||"no"!=t.canPlayType("audio/"+playType)&&""!=t.canPlayType("audio/"+playType)}}},p.register=function(loadItem){var tag=createjs.HTMLAudioTagPool.get(loadItem.src),loader=this.AbstractPlugin_register(loadItem);return loader.setTag(tag),loader},p.removeSound=function(src){this.AbstractPlugin_removeSound(src),createjs.HTMLAudioTagPool.remove(src)},p.create=function(src,startTime,duration){var si=this.AbstractPlugin_create(src,startTime,duration);return si.setPlaybackResource(null),si},p.toString=function(){return"[HTMLAudioPlugin]"},p.setVolume=p.getVolume=p.setMute=null,createjs.HTMLAudioPlugin=createjs.promote(HTMLAudioPlugin,"AbstractPlugin")}(),function(){"use strict";function Tween(target,props,pluginData){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=pluginData||{},this.target=target,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=target,this._useTicks=!1,this._inited=!1,this._registered=!1,props&&(this._useTicks=props.useTicks,this.ignoreGlobalPause=props.ignoreGlobalPause,this.loop=props.loop,props.onChange&&this.addEventListener("change",props.onChange),props.override&&Tween.removeTweens(target)),props&&props.paused?this._paused=!0:createjs.Tween._register(this,!0),props&&null!=props.position&&this.setPosition(props.position,Tween.NONE)}var p=createjs.extend(Tween,createjs.EventDispatcher);Tween.NONE=0,Tween.LOOP=1,Tween.REVERSE=2,Tween.IGNORE={},Tween._tweens=[],Tween._plugins={},Tween.get=function(target,props,pluginData,override){return override&&Tween.removeTweens(target),new Tween(target,props,pluginData)},Tween.tick=function(delta,paused){for(var tweens=Tween._tweens.slice(),i=tweens.length-1;i>=0;i--){var tween=tweens[i];paused&&!tween.ignoreGlobalPause||tween._paused||tween.tick(tween._useTicks?1:delta)}},Tween.handleEvent=function(event){"tick"==event.type&&this.tick(event.delta,event.paused)},Tween.removeTweens=function(target){if(target.tweenjs_count){for(var tweens=Tween._tweens,i=tweens.length-1;i>=0;i--){var tween=tweens[i];tween._target==target&&(tween._paused=!0,tweens.splice(i,1))}target.tweenjs_count=0}},Tween.removeAllTweens=function(){for(var tweens=Tween._tweens,i=0,l=tweens.length;i<l;i++){var tween=tweens[i];tween._paused=!0,tween.target&&(tween.target.tweenjs_count=0)}tweens.length=0},Tween.hasActiveTweens=function(target){return target?null!=target.tweenjs_count&&!!target.tweenjs_count:Tween._tweens&&!!Tween._tweens.length},Tween.installPlugin=function(plugin,properties){var priority=plugin.priority;null==priority&&(plugin.priority=priority=0);for(var i=0,l=properties.length,p=Tween._plugins;i<l;i++){var n=properties[i];if(p[n]){for(var arr=p[n],j=0,jl=arr.length;j<jl&&!(priority<arr[j].priority);j++);p[n].splice(j,0,plugin)}else p[n]=[plugin]}},Tween._register=function(tween,value){var target=tween._target,tweens=Tween._tweens;if(value&&!tween._registered)target&&(target.tweenjs_count=target.tweenjs_count?target.tweenjs_count+1:1),tweens.push(tween),!Tween._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",Tween),Tween._inited=!0);else if(!value&&tween._registered){target&&target.tweenjs_count--;for(var i=tweens.length;i--;)if(tweens[i]==tween){tweens.splice(i,1);break}}tween._registered=value},p.wait=function(duration,passive){if(null==duration||duration<=0)return this;var o=this._cloneProps(this._curQueueProps);return this._addStep({d:duration,p0:o,e:this._linearEase,p1:o,v:passive})},p.to=function(props,duration,ease){return(isNaN(duration)||duration<0)&&(duration=0),this._addStep({d:duration||0,p0:this._cloneProps(this._curQueueProps),e:ease,p1:this._cloneProps(this._appendQueueProps(props))})},p.call=function(callback,params,scope){return this._addAction({f:callback,p:params?params:[this],o:scope?scope:this._target})},p.set=function(props,target){return this._addAction({f:this._set,o:this,p:[props,target?target:this._target]})},p.play=function(tween){return tween||(tween=this),this.call(tween.setPaused,[!1],tween)},p.pause=function(tween){return tween||(tween=this),this.call(tween.setPaused,[!0],tween)},p.setPosition=function(value,actionsMode){value<0&&(value=0),null==actionsMode&&(actionsMode=1);var t=value,end=!1;if(t>=this.duration&&(this.loop?t%=this.duration:(t=this.duration,end=!0)),t==this._prevPos)return end;var prevPos=this._prevPos;if(this.position=this._prevPos=t,this._prevPosition=value,this._target)if(end)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var i=0,l=this._steps.length;i<l&&!(this._steps[i].t>t);i++);var step=this._steps[i-1];this._updateTargetProps(step,(this._stepPosition=t-step.t)/step.d)}return 0!=actionsMode&&this._actions.length>0&&(this._useTicks?this._runActions(t,t):1==actionsMode&&t<prevPos?(prevPos!=this.duration&&this._runActions(prevPos,this.duration),this._runActions(0,t,!0)):this._runActions(prevPos,t)),end&&this.setPaused(!0),this.dispatchEvent("change"),end},p.tick=function(delta){this._paused||this.setPosition(this._prevPosition+delta)},p.setPaused=function(value){return this._paused===!!value?this:(this._paused=!!value,Tween._register(this,!value),this)},p.w=p.wait,p.t=p.to,p.c=p.call,p.s=p.set,p.toString=function(){return"[Tween]"},p.clone=function(){throw"Tween can not be cloned."},p._updateTargetProps=function(step,ratio){var p0,p1,v,v0,v1,arr;if(step||1!=ratio){if(this.passive=!!step.v,this.passive)return;step.e&&(ratio=step.e(ratio,0,1,1)),p0=step.p0,p1=step.p1}else this.passive=!1,p0=p1=this._curQueueProps;for(var n in this._initQueueProps){null==(v0=p0[n])&&(p0[n]=v0=this._initQueueProps[n]),null==(v1=p1[n])&&(p1[n]=v1=v0),v=v0==v1||0==ratio||1==ratio||"number"!=typeof v0?1==ratio?v1:v0:v0+(v1-v0)*ratio;var ignore=!1;if(arr=Tween._plugins[n])for(var i=0,l=arr.length;i<l;i++){var v2=arr[i].tween(this,n,v,p0,p1,ratio,!!step&&p0==p1,!step);v2==Tween.IGNORE?ignore=!0:v=v2}ignore||(this._target[n]=v)}},p._runActions=function(startPos,endPos,includeStart){var sPos=startPos,ePos=endPos,i=-1,j=this._actions.length,k=1;for(startPos>endPos&&(sPos=endPos,ePos=startPos,i=j,j=k=-1);(i+=k)!=j;){var action=this._actions[i],pos=action.t;(pos==ePos||pos>sPos&&pos<ePos||includeStart&&pos==startPos)&&action.f.apply(action.o,action.p)}},p._appendQueueProps=function(o){var arr,oldValue,i,l,injectProps;for(var n in o)if(void 0===this._initQueueProps[n]){if(oldValue=this._target[n],arr=Tween._plugins[n])for(i=0,l=arr.length;i<l;i++)oldValue=arr[i].init(this,n,oldValue);this._initQueueProps[n]=this._curQueueProps[n]=void 0===oldValue?null:oldValue}else oldValue=this._curQueueProps[n];for(var n in o){if(oldValue=this._curQueueProps[n],arr=Tween._plugins[n])for(injectProps=injectProps||{},i=0,l=arr.length;i<l;i++)arr[i].step&&arr[i].step(this,n,oldValue,o[n],injectProps);this._curQueueProps[n]=o[n]}return injectProps&&this._appendQueueProps(injectProps),this._curQueueProps},p._cloneProps=function(props){var o={};for(var n in props)o[n]=props[n];return o},p._addStep=function(o){return o.d>0&&(this._steps.push(o),o.t=this.duration,this.duration+=o.d),this},p._addAction=function(o){return o.t=this.duration,this._actions.push(o),this},p._set=function(props,o){for(var n in props)o[n]=props[n]},createjs.Tween=createjs.promote(Tween,"EventDispatcher")}(),function(){"use strict";function Timeline(tweens,labels,props){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,props&&(this._useTicks=props.useTicks,this.loop=props.loop,this.ignoreGlobalPause=props.ignoreGlobalPause,props.onChange&&this.addEventListener("change",props.onChange)),tweens&&this.addTween.apply(this,tweens),this.setLabels(labels),props&&props.paused?this._paused=!0:createjs.Tween._register(this,!0),props&&null!=props.position&&this.setPosition(props.position,createjs.Tween.NONE)}var p=createjs.extend(Timeline,createjs.EventDispatcher);p.addTween=function(tween){var l=arguments.length;if(l>1){for(var i=0;i<l;i++)this.addTween(arguments[i]);return arguments[0]}return 0==l?null:(this.removeTween(tween),this._tweens.push(tween),tween.setPaused(!0),tween._paused=!1,tween._useTicks=this._useTicks,tween.duration>this.duration&&(this.duration=tween.duration),this._prevPos>=0&&tween.setPosition(this._prevPos,createjs.Tween.NONE),tween)},p.removeTween=function(tween){var l=arguments.length;if(l>1){for(var good=!0,i=0;i<l;i++)good=good&&this.removeTween(arguments[i]);return good}if(0==l)return!1;for(var tweens=this._tweens,i=tweens.length;i--;)if(tweens[i]==tween)return tweens.splice(i,1),tween.duration>=this.duration&&this.updateDuration(),!0;return!1},p.addLabel=function(label,position){this._labels[label]=position;var list=this._labelList;if(list){for(var i=0,l=list.length;i<l&&!(position<list[i].position);i++);list.splice(i,0,{label:label,position:position})}},p.setLabels=function(o){this._labels=o?o:{}},p.getLabels=function(){var list=this._labelList;if(!list){list=this._labelList=[];var labels=this._labels;for(var n in labels)list.push({label:n,position:labels[n]});list.sort(function(a,b){return a.position-b.position})}return list},p.getCurrentLabel=function(){var labels=this.getLabels(),pos=this.position,l=labels.length;if(l){for(var i=0;i<l&&!(pos<labels[i].position);i++);return 0==i?null:labels[i-1].label}return null},p.gotoAndPlay=function(positionOrLabel){this.setPaused(!1),this._goto(positionOrLabel)},p.gotoAndStop=function(positionOrLabel){this.setPaused(!0),this._goto(positionOrLabel)},p.setPosition=function(value,actionsMode){var t=this._calcPosition(value),end=!this.loop&&value>=this.duration;if(t==this._prevPos)return end;this._prevPosition=value,this.position=this._prevPos=t;for(var i=0,l=this._tweens.length;i<l;i++)if(this._tweens[i].setPosition(t,actionsMode),t!=this._prevPos)return!1;return end&&this.setPaused(!0),this.dispatchEvent("change"),end},p.setPaused=function(value){this._paused=!!value,createjs.Tween._register(this,!value)},p.updateDuration=function(){this.duration=0;for(var i=0,l=this._tweens.length;i<l;i++){var tween=this._tweens[i];tween.duration>this.duration&&(this.duration=tween.duration)}},p.tick=function(delta){this.setPosition(this._prevPosition+delta)},p.resolve=function(positionOrLabel){var pos=Number(positionOrLabel);return isNaN(pos)&&(pos=this._labels[positionOrLabel]),
	pos},p.toString=function(){return"[Timeline]"},p.clone=function(){throw"Timeline can not be cloned."},p._goto=function(positionOrLabel){var pos=this.resolve(positionOrLabel);null!=pos&&this.setPosition(pos)},p._calcPosition=function(value){return value<0?0:value<this.duration?value:this.loop?value%this.duration:this.duration},createjs.Timeline=createjs.promote(Timeline,"EventDispatcher")}(),function(){"use strict";function Ease(){throw"Ease cannot be instantiated."}Ease.linear=function(t){return t},Ease.none=Ease.linear,Ease.get=function(amount){return amount<-1&&(amount=-1),amount>1&&(amount=1),function(t){return 0==amount?t:amount<0?t*(t*-amount+1+amount):t*((2-t)*amount+(1-amount))}},Ease.getPowIn=function(pow){return function(t){return Math.pow(t,pow)}},Ease.getPowOut=function(pow){return function(t){return 1-Math.pow(1-t,pow)}},Ease.getPowInOut=function(pow){return function(t){return(t*=2)<1?.5*Math.pow(t,pow):1-.5*Math.abs(Math.pow(2-t,pow))}},Ease.quadIn=Ease.getPowIn(2),Ease.quadOut=Ease.getPowOut(2),Ease.quadInOut=Ease.getPowInOut(2),Ease.cubicIn=Ease.getPowIn(3),Ease.cubicOut=Ease.getPowOut(3),Ease.cubicInOut=Ease.getPowInOut(3),Ease.quartIn=Ease.getPowIn(4),Ease.quartOut=Ease.getPowOut(4),Ease.quartInOut=Ease.getPowInOut(4),Ease.quintIn=Ease.getPowIn(5),Ease.quintOut=Ease.getPowOut(5),Ease.quintInOut=Ease.getPowInOut(5),Ease.sineIn=function(t){return 1-Math.cos(t*Math.PI/2)},Ease.sineOut=function(t){return Math.sin(t*Math.PI/2)},Ease.sineInOut=function(t){return-.5*(Math.cos(Math.PI*t)-1)},Ease.getBackIn=function(amount){return function(t){return t*t*((amount+1)*t-amount)}},Ease.backIn=Ease.getBackIn(1.7),Ease.getBackOut=function(amount){return function(t){return--t*t*((amount+1)*t+amount)+1}},Ease.backOut=Ease.getBackOut(1.7),Ease.getBackInOut=function(amount){return amount*=1.525,function(t){return(t*=2)<1?.5*(t*t*((amount+1)*t-amount)):.5*((t-=2)*t*((amount+1)*t+amount)+2)}},Ease.backInOut=Ease.getBackInOut(1.7),Ease.circIn=function(t){return-(Math.sqrt(1-t*t)-1)},Ease.circOut=function(t){return Math.sqrt(1- --t*t)},Ease.circInOut=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},Ease.bounceIn=function(t){return 1-Ease.bounceOut(1-t)},Ease.bounceOut=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},Ease.bounceInOut=function(t){return t<.5?.5*Ease.bounceIn(2*t):.5*Ease.bounceOut(2*t-1)+.5},Ease.getElasticIn=function(amplitude,period){var pi2=2*Math.PI;return function(t){if(0==t||1==t)return t;var s=period/pi2*Math.asin(1/amplitude);return-(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period))}},Ease.elasticIn=Ease.getElasticIn(1,.3),Ease.getElasticOut=function(amplitude,period){var pi2=2*Math.PI;return function(t){if(0==t||1==t)return t;var s=period/pi2*Math.asin(1/amplitude);return amplitude*Math.pow(2,-10*t)*Math.sin((t-s)*pi2/period)+1}},Ease.elasticOut=Ease.getElasticOut(1,.3),Ease.getElasticInOut=function(amplitude,period){var pi2=2*Math.PI;return function(t){var s=period/pi2*Math.asin(1/amplitude);return(t*=2)<1?-.5*(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period)):amplitude*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*pi2/period)*.5+1}},Ease.elasticInOut=Ease.getElasticInOut(1,.3*1.5),createjs.Ease=Ease}(),function(){"use strict";function MotionGuidePlugin(){throw"MotionGuidePlugin cannot be instantiated."}MotionGuidePlugin.priority=0,MotionGuidePlugin._rotOffS,MotionGuidePlugin._rotOffE,MotionGuidePlugin._rotNormS,MotionGuidePlugin._rotNormE,MotionGuidePlugin.install=function(){return createjs.Tween.installPlugin(MotionGuidePlugin,["guide","x","y","rotation"]),createjs.Tween.IGNORE},MotionGuidePlugin.init=function(tween,prop,value){var target=tween.target;return target.hasOwnProperty("x")||(target.x=0),target.hasOwnProperty("y")||(target.y=0),target.hasOwnProperty("rotation")||(target.rotation=0),"rotation"==prop&&(tween.__needsRot=!0),"guide"==prop?null:value},MotionGuidePlugin.step=function(tween,prop,startValue,endValue,injectProps){if("rotation"==prop&&(tween.__rotGlobalS=startValue,tween.__rotGlobalE=endValue,MotionGuidePlugin.testRotData(tween,injectProps)),"guide"!=prop)return endValue;var temp,data=endValue;data.hasOwnProperty("path")||(data.path=[]);var path=data.path;if(data.hasOwnProperty("end")||(data.end=1),data.hasOwnProperty("start")||(data.start=startValue&&startValue.hasOwnProperty("end")&&startValue.path===path?startValue.end:0),data.hasOwnProperty("_segments")&&data._length)return endValue;var l=path.length,accuracy=10;if(!(l>=6&&(l-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";data._segments=[],data._length=0;for(var i=2;i<l;i+=4){for(var tempX,tempY,sx=path[i-2],sy=path[i-1],cx=path[i+0],cy=path[i+1],ex=path[i+2],ey=path[i+3],oldX=sx,oldY=sy,total=0,sublines=[],j=1;j<=accuracy;j++){var t=j/accuracy,inv=1-t;tempX=inv*inv*sx+2*inv*t*cx+t*t*ex,tempY=inv*inv*sy+2*inv*t*cy+t*t*ey,total+=sublines[sublines.push(Math.sqrt((temp=tempX-oldX)*temp+(temp=tempY-oldY)*temp))-1],oldX=tempX,oldY=tempY}data._segments.push(total),data._segments.push(sublines),data._length+=total}temp=data.orient,data.orient=!0;var o={};return MotionGuidePlugin.calc(data,data.start,o),tween.__rotPathS=Number(o.rotation.toFixed(5)),MotionGuidePlugin.calc(data,data.end,o),tween.__rotPathE=Number(o.rotation.toFixed(5)),data.orient=!1,MotionGuidePlugin.calc(data,data.end,injectProps),data.orient=temp,data.orient?(tween.__guideData=data,MotionGuidePlugin.testRotData(tween,injectProps),endValue):endValue},MotionGuidePlugin.testRotData=function(tween,injectProps){if(void 0===tween.__rotGlobalS||void 0===tween.__rotGlobalE){if(tween.__needsRot)return;void 0!==tween._curQueueProps.rotation?tween.__rotGlobalS=tween.__rotGlobalE=tween._curQueueProps.rotation:tween.__rotGlobalS=tween.__rotGlobalE=injectProps.rotation=tween.target.rotation||0}if(void 0!==tween.__guideData){var data=tween.__guideData,rotGlobalD=tween.__rotGlobalE-tween.__rotGlobalS,rotPathD=tween.__rotPathE-tween.__rotPathS,rot=rotGlobalD-rotPathD;if("auto"==data.orient)rot>180?rot-=360:rot<-180&&(rot+=360);else if("cw"==data.orient){for(;rot<0;)rot+=360;0==rot&&rotGlobalD>0&&180!=rotGlobalD&&(rot+=360)}else if("ccw"==data.orient){for(rot=rotGlobalD-(rotPathD>180?360-rotPathD:rotPathD);rot>0;)rot-=360;0==rot&&rotGlobalD<0&&rotGlobalD!=-180&&(rot-=360)}data.rotDelta=rot,data.rotOffS=tween.__rotGlobalS-tween.__rotPathS,tween.__rotGlobalS=tween.__rotGlobalE=tween.__guideData=tween.__needsRot=void 0}},MotionGuidePlugin.tween=function(tween,prop,value,startValues,endValues,ratio,wait,end){var data=endValues.guide;if(void 0==data||data===startValues.guide)return value;if(data.lastRatio!=ratio){var t=(data.end-data.start)*(wait?data.end:ratio)+data.start;switch(MotionGuidePlugin.calc(data,t,tween.target),data.orient){case"cw":case"ccw":case"auto":tween.target.rotation+=data.rotOffS+data.rotDelta*ratio;break;case"fixed":default:tween.target.rotation+=data.rotOffS}data.lastRatio=ratio}return"rotation"!=prop||data.orient&&"false"!=data.orient?tween.target[prop]:value},MotionGuidePlugin.calc=function(data,ratio,target){if(void 0==data._segments)throw"Missing critical pre-calculated information, please file a bug";void 0==target&&(target={x:0,y:0,rotation:0});for(var seg=data._segments,path=data.path,pos=data._length*ratio,cap=seg.length-2,n=0;pos>seg[n]&&n<cap;)pos-=seg[n],n+=2;var sublines=seg[n+1],i=0;for(cap=sublines.length-1;pos>sublines[i]&&i<cap;)pos-=sublines[i],i++;var t=i/++cap+pos/(cap*sublines[i]);n=2*n+2;var inv=1-t;return target.x=inv*inv*path[n-2]+2*inv*t*path[n+0]+t*t*path[n+2],target.y=inv*inv*path[n-1]+2*inv*t*path[n+1]+t*t*path[n+3],data.orient&&(target.rotation=57.2957795*Math.atan2((path[n+1]-path[n-1])*inv+(path[n+3]-path[n+1])*t,(path[n+0]-path[n-2])*inv+(path[n+2]-path[n+0])*t)),target},createjs.MotionGuidePlugin=MotionGuidePlugin}(),function(createjs){"use strict";var s=createjs.TweenJS=createjs.TweenJS||{};s.version="0.6.2",s.buildDate="Sat, 12 Nov 2016 06:45:00 GMT"}(scope.createjs),module.exports=scope.createjs}).call(exports,__webpack_require__(8)(module),function(){return this}())},function(module,exports){"use strict";module.exports={version:"0.1.3",build:new Date}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),easel={AlphaMapFilter:_createjsBrowserify2.default.AlphaMapFilter,AlphaMaskFilter:_createjsBrowserify2.default.AlphaMaskFilter,Bitmap:_createjsBrowserify2.default.Bitmap,BitmapText:_createjsBrowserify2.default.BitmapText,BlurFilter:_createjsBrowserify2.default.BlurFilter,ButtonHelper:_createjsBrowserify2.default.ButtonHelper,ColorFilter:_createjsBrowserify2.default.ColorFilter,ColorMatrix:_createjsBrowserify2.default.ColorMatrix,ColorMatrixFilter:_createjsBrowserify2.default.ColorMatrixFilter,Container:_createjsBrowserify2.default.Container,DisplayObject:_createjsBrowserify2.default.DisplayObject,DisplayProps:_createjsBrowserify2.default.DisplayProps,DOMElement:_createjsBrowserify2.default.DOMElement,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,Filter:_createjsBrowserify2.default.Filter,Graphics:_createjsBrowserify2.default.Graphics,Matrix2D:_createjsBrowserify2.default.Matrix2D,MouseEvent:_createjsBrowserify2.default.MouseEvent,MovieClip:_createjsBrowserify2.default.MovieClip,MovieClipPlugin:_createjsBrowserify2.default.MovieClipPlugin,Point:_createjsBrowserify2.default.Point,Rectangle:_createjsBrowserify2.default.Rectangle,Shadow:_createjsBrowserify2.default.Shadow,Shape:_createjsBrowserify2.default.Shape,Sprite:_createjsBrowserify2.default.Sprite,SpriteContainer:_createjsBrowserify2.default.SpriteContainer,SpriteSheet:_createjsBrowserify2.default.SpriteSheet,SpriteSheetBuilder:_createjsBrowserify2.default.SpriteSheetBuilder,SpriteSheetUtils:_createjsBrowserify2.default.SpriteSheetUtils,SpriteStage:_createjsBrowserify2.default.SpriteStage,Stage:_createjsBrowserify2.default.Stage,Text:_createjsBrowserify2.default.Text,Ticker:_createjsBrowserify2.default.Ticker,Touch:_createjsBrowserify2.default.Touch,UID:_createjsBrowserify2.default.UID,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.EaselJS.buildDate),version:_createjsBrowserify2.default.EaselJS.version};exports.default=easel},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),preload={AbstractLoader:_createjsBrowserify2.default.AbstractLoader,AbstractMediaLoader:_createjsBrowserify2.default.AbstractMediaLoader,AbstractRequest:_createjsBrowserify2.default.AbstractRequest,BinaryLoader:_createjsBrowserify2.default.BinaryLoader,CSSLoader:_createjsBrowserify2.default.CSSLoader,DataUtils:_createjsBrowserify2.default.DataUtils,DomUtils:_createjsBrowserify2.default.DomUtils,ErrorEvent:_createjsBrowserify2.default.ErrorEvent,Event:_createjsBrowserify2.default.Event,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,ImageLoader:_createjsBrowserify2.default.ImageLoader,JavaScriptLoader:_createjsBrowserify2.default.JavaScriptLoader,JSONLoader:_createjsBrowserify2.default.JSONLoader,JSONPLoader:_createjsBrowserify2.default.JSONPLoader,LoadItem:_createjsBrowserify2.default.LoadItem,LoadQueue:_createjsBrowserify2.default.LoadQueue,ManifestLoader:_createjsBrowserify2.default.ManifestLoader,MediaTagRequest:_createjsBrowserify2.default.MediaTagRequest,ProgressEvent:_createjsBrowserify2.default.ProgressEvent,RequestUtils:_createjsBrowserify2.default.ProgressEvent,SamplePlugin:_createjsBrowserify2.default.SamplePlugin,SoundLoader:_createjsBrowserify2.default.SoundLoader,SpriteSheetLoader:_createjsBrowserify2.default.SpriteSheetLoader,SVGLoader:_createjsBrowserify2.default.SVGLoader,TagRequest:_createjsBrowserify2.default.TagRequest,TextLoader:_createjsBrowserify2.default.TextLoader,VideoLoader:_createjsBrowserify2.default.VideoLoader,XHRRequest:_createjsBrowserify2.default.XHRRequest,XMLLoader:_createjsBrowserify2.default.XMLLoader,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.PreloadJS.buildDate),version:_createjsBrowserify2.default.PreloadJS.version};exports.default=preload},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),sound={AbstractPlugin:_createjsBrowserify2.default.AbstractPlugin,AbstractSoundInstance:_createjsBrowserify2.default.AbstractSoundInstance,AudioSprite:_createjsBrowserify2.default.AudioSprite,CordovaAudioLoader:_createjsBrowserify2.default.CordovaAudioLoader,CordovaAudioPlugin:_createjsBrowserify2.default.CordovaAudioPlugin,CordovaAudioSoundInstance:_createjsBrowserify2.default.CordovaAudioSoundInstance,ErrorEvent:_createjsBrowserify2.default.ErrorEvent,Event:_createjsBrowserify2.default.Event,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,FlashAudioLoader:_createjsBrowserify2.default.FlashAudioLoader,FlashAudioPlugin:_createjsBrowserify2.default.FlashAudioPlugin,FlashAudioSoundInstance:_createjsBrowserify2.default.FlashAudioSoundInstance,HTMLAudioPlugin:_createjsBrowserify2.default.HTMLAudioPlugin,HTMLAudioSoundInstance:_createjsBrowserify2.default.HTMLAudioSoundInstance,HTMLAudioTagPool:_createjsBrowserify2.default.HTMLAudioTagPool,PlayPropsConfig:_createjsBrowserify2.default.PlayPropsConfig,Sound:_createjsBrowserify2.default.Sound,WebAudioLoader:_createjsBrowserify2.default.WebAudioLoader,WebAudioPlugin:_createjsBrowserify2.default.WebAudioPlugin,WebAudioSoundInstance:_createjsBrowserify2.default.WebAudioSoundInstance,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.SoundJS.buildDate),version:_createjsBrowserify2.default.SoundJS.version};exports.default=sound},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _createjsBrowserify=__webpack_require__(1),_createjsBrowserify2=_interopRequireDefault(_createjsBrowserify),tween={CSSPlugin:_createjsBrowserify2.default.CSSPlugin,Ease:_createjsBrowserify2.default.Ease,Event:_createjsBrowserify2.default.Event,EventDispatcher:_createjsBrowserify2.default.EventDispatcher,MotionGuidePlugin:_createjsBrowserify2.default.MotionGuidePlugin,SamplePlugin:_createjsBrowserify2.default.SamplePlugin,Ticker:_createjsBrowserify2.default.Ticker,Timeline:_createjsBrowserify2.default.Timeline,Tween:_createjsBrowserify2.default.Tween,extend:_createjsBrowserify2.default.extend,indexOf:_createjsBrowserify2.default.indexOf,promote:_createjsBrowserify2.default.promote,buildDate:new Date(_createjsBrowserify2.default.TweenJS.buildDate),version:_createjsBrowserify2.default.TweenJS.version};exports.default=tween},function(module,exports){(function(__webpack_amd_options__){module.exports=__webpack_amd_options__}).call(exports,{})},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children=[],module.webpackPolyfill=1),module}}])});
	//# sourceMappingURL=create-es6.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @class ElementHelpers
	 * @classdesc all the helpers we need to draw the elements
	 */
	var ElementHelpers = function () {
	  function ElementHelpers() {
	    _classCallCheck(this, ElementHelpers);
	  }
	
	  _createClass(ElementHelpers, null, [{
	    key: 'setBoxSize',
	
	
	    /**
	     * sets the box size of an EaselJS element
	     * @memberOf ElementHelpers
	     * @method setBoxSize
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {Number} width the width
	     * @param {Number} height the height
	     * @param {Boolean} css specity if you want to override also the css box size properties
	     * @return {Object|Container|Element}
	     */
	    value: function setBoxSize(element) {
	      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var css = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	      if (!!css) {
	        element.style.width = width + 'px';
	        element.style.height = height + 'px';
	      }
	
	      return element.inherit({
	        width: width,
	        height: height
	      });
	    }
	
	    /**
	     * sets the scale factor of an EaselJS element
	     * @memberOf ElementHelpers
	     * @method scale
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {Number|Object} scale the scale factor to be used for both scaleX and scaleY
	     * @return {Object|Container|Element}
	     */
	
	  }, {
	    key: 'scale',
	    value: function scale(element, _scale) {
	      return element.inherit({
	        scaleX: _scale,
	        scaleY: _scale
	      });
	    }
	
	    /**
	     * aligns the reg point or an element
	     * @memberOf ElementHelpers
	     * @method alignRegPoint
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul>
	     * @return {Object|Container|Element}
	     */
	
	  }, {
	    key: 'alignRegPoint',
	    value: function alignRegPoint(element) {
	      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left top';
	
	      var bounds = element.getBounds();
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      return element.inherit({
	        regX: horizontalModes.contains(modes) ? bounds.width * 0.5 : 0,
	        regY: verticalModes.contains(modes) ? bounds.height * 0.5 : 0
	      });
	    }
	
	    /**
	     * Aligns an element (horizontally, vertically or both) based on it's parent bounds.
	     * @memberOf ElementHelpers
	     * @method align
	     * @static
	     * @param {Object|Container|Element} element can be an Object, an EaselJS instance, a CreateJS Core Elements instance
	     * @param {null|Object|Container|Element} parent can be an Object, an EaselJS instance, a CreateJS Core Elements instance<br>
	     *   if null, it takes automatically the parent property of element parameter
	     * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul>
	     * @param {Boolean} regPoint enabled alignment also on registration point
	     * @param {null|String} regPointMode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul><br>
	     *   if null it considers mode parameter as fallback
	     * @return {Object|Container|Element}
	     */
	
	  }, {
	    key: 'align',
	    value: function align(element) {
	      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left top';
	      var regPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var regPointMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	      if (!parent) {
	        parent = element.parent;
	      }
	
	      var parentBounds = parent.getBounds();
	      var elementBounds = element.getBounds();
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      if (!!regPoint) {
	        this.alignRegPoint(element, regPointMode || mode);
	      }
	
	      var position = {
	        x: 0,
	        y: 0
	      };
	
	      if (horizontalModes.contains(modes)) {
	        if (modes.contains('center')) {
	          position.inherit({
	            x: parentBounds.width * 0.5 + (!!regPoint && !(element instanceof _createEs6Js.Easel.Bitmap) ? elementBounds.width * 0.5 : 0)
	          });
	        } else if (modes.contains('left')) {
	          position.inherit({
	            x: !!regPoint ? elementBounds.width * 0.5 : 0
	          });
	        } else if (modes.contains('right')) {
	          position.inherit({
	            x: parentBounds.width - elementBounds.width + (!!regPoint ? elementBounds.width * 0.5 : 0)
	          });
	        }
	      }
	
	      if (verticalModes.contains(modes)) {
	        if (modes.contains('middle')) {
	          position.inherit({
	            y: parentBounds.height * 0.5 + (!!regPoint && !(element instanceof _createEs6Js.Easel.Bitmap) ? elementBounds.width * 0.5 : 0)
	          });
	        } else if (modes.contains('top')) {
	          position.inherit({
	            y: !!regPoint ? elementBounds.height * 0.5 : 0
	          });
	        } else if (modes.contains('bottom')) {
	          position.inherit({
	            y: parentBounds.height - elementBounds.height
	          });
	        }
	      }
	
	      return element.inherit(position);
	    }
	
	    /**
	     * creates an EaselJS Container instance based on bounds parameters
	     * @memberOf ElementHelpers
	     * @method createContainer
	     * @statuc
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Container}
	     */
	
	  }, {
	    key: 'createContainer',
	    value: function createContainer() {
	      var container = new _createEs6Js.Easel.Container().inherit({
	        x: arguments.length <= 0 ? undefined : arguments[0],
	        y: arguments.length <= 1 ? undefined : arguments[1]
	      });
	
	      container.setBounds.apply(container, arguments);
	
	      return container;
	    }
	
	    /**
	     * creates an EaselJS Graphics instance
	     * @memberOf ElementHelpers
	     * @method createGraphics
	     * @static
	     * @param {Object} options the options can contain
	     * @param {String|Object} options.fill color for filling graphics<br>
	     * @param {Array} options.fill.colors colors to create a linear gradient fill
	     * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
	     * @param {Array} options.fill.points start & stop points to create a linear gradient fill
	     * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
	     * @param {Number} options.stroke.size the size
	     * @param {String} options.stroke.color the color
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Graphics}
	     */
	
	  }, {
	    key: 'createGraphics',
	    value: function createGraphics() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var defaults = {
	        fill: false,
	        stroke: false
	      };
	
	      var settings = defaults.inherit(true, options);
	
	      var graphics = new _createEs6Js.Easel.Graphics();
	
	      if (!!settings.fill) {
	        if (Object.isObject(settings.fill)) {
	          if (!!settings.fill.colors && !!settings.fill.ratios && !!settings.fill.points) {
	            graphics.beginLinearGradientFill.apply(graphics, [[].concat(_toConsumableArray(settings.fill.colors)), [].concat(_toConsumableArray(settings.fill.ratios))].concat(_toConsumableArray(settings.fill.points)));
	          }
	        } else {
	          graphics.beginFill(settings.fill);
	        }
	      }
	
	      if (!!settings.stroke) {
	        if (String.isString(settings.stroke)) {
	          settings.inherit({
	            stroke: {
	              size: 1,
	              color: settings.stroke
	            }
	          });
	        }
	
	        graphics.setStrokeStyle(settings.stroke.size);
	        graphics.beginStroke(settings.stroke.color);
	      }
	
	      return graphics;
	    }
	
	    /**
	     * creates an EaselJS Rect Shape instance
	     * @memberOf ElementHelpers
	     * @method createRect
	     * @static
	     * @param {Object} options the options can contain
	     * @param {String|Object} options.fill color for filling graphics<br>
	     * @param {Array} options.fill.colors colors to create a linear gradient fill
	     * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
	     * @param {Array} options.fill.points start & stop points to create a linear gradient fill
	     * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
	     * @param {Number} options.stroke.size the size
	     * @param {String} options.stroke.color the color
	     * @param {Boolean|Number|Array} options.stroke.radius
	     *   <br>if false it draws a rect
	     *   <br>if Number it draws a round rect
	     *   <br>if Array it draws a round rect complex (array has to respect the arguments sequence of drawRoundRectComplex method of EaselJS Graphics class
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Shape}
	     */
	
	  }, {
	    key: 'createRect',
	    value: function createRect() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      for (var _len = arguments.length, bounds = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        bounds[_key - 1] = arguments[_key];
	      }
	
	      var graphics = this.createGraphics.apply(this, [options].concat(bounds));
	
	      if (!!options.stroke.radius) {
	        if (Array.isArray(options.stroke.radius)) {
	          graphics.drawRoundRectComplex.apply(graphics, bounds.concat(_toConsumableArray(options.stroke.radius)));
	        } else if (Number.isNumber(options.stroke.radius)) {
	          graphics.drawRoundRect.apply(graphics, bounds.concat([options.stroke.radius]));
	        }
	      } else {
	        graphics.drawRect.apply(graphics, bounds);
	      }
	
	      graphics.endFill();
	      graphics.endStroke();
	
	      var rect = new _createEs6Js.Easel.Shape(graphics);
	      rect.setBounds.apply(rect, bounds);
	
	      return rect;
	    }
	
	    /**
	     * creates an EaselJS Circle Shape instance
	     * @memberOf ElementHelpers
	     * @method createCircle
	     * @static
	     * @param {Object} options the options can contain
	     * @param {String|Object} options.fill color for filling graphics
	     * @param {Array} options.fill.colors colors to create a linear gradient fill
	     * @param {Array} options.fill.ratios color ratios to create a linear gradient fill
	     * @param {Array} options.fill.points start & stop points to create a linear gradient fill
	     * @param {String|Object} options.stroke stroke options, if string it creates a stroke with size 1
	     * @param {Number} options.stroke.size the size
	     * @param {String} options.stroke.color the color
	     * @param {Number} options.radius the radius of the circle
	     * @param {Arguments} bounds the bounds parameter will be passed to setBounds method of EaselJS Container class<br>
	     *   so it has to be an array with this sequence<br>
	     *   <ul>
	     *     <li>{Number} x</li>
	     *     <li>{Number} y</li>
	     *     <li>{Number} width</li>
	     *     <li>{Number} height</li>
	     *   </ul>
	     * @return {Shape}
	     */
	
	  }, {
	    key: 'createCircle',
	    value: function createCircle() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var defaults = {
	        radius: 1
	      };
	
	      var settings = defaults.inherit(true, options);
	
	      for (var _len2 = arguments.length, bounds = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        bounds[_key2 - 1] = arguments[_key2];
	      }
	
	      var graphics = this.createGraphics.apply(this, [settings].concat(bounds));
	      graphics.drawCircle(0, 0, settings.radius);
	
	      var circle = new _createEs6Js.Easel.Shape(graphics);
	      circle.setBounds.apply(circle, bounds);
	
	      return circle;
	    }
	
	    /**
	     * creates an EaselJS Text instance
	     * @memberOf ElementHelpers
	     * @method createText
	     * @static
	     * @param {String} text the text to be rendered
	     * @param {String} font font options as expected by the EaselJS Text class
	     * @param {String} color the color of the text
	     * @return {Text}
	     */
	
	  }, {
	    key: 'createText',
	    value: function createText(text, font, color) {
	      return new _createEs6Js.Easel.Text(text, font, color);
	    }
	
	    /**
	     * creates an EaselJS Bitmap instance
	     * @memberOf ElementHelpers
	     * @method createImage
	     * @static
	     * @param {HTMLElement} image the preloaded DOM element representing the image
	     * @return {Bitmap}
	     */
	
	  }, {
	    key: 'createImage',
	    value: function createImage(image) {
	      return new _createEs6Js.Easel.Bitmap(image);
	    }
	
	    /**
	     * creates an EaselJS Sprite instance
	     * @memberOf ElementHelpers
	     * @method createSprite
	     * @static
	     * @param {HTMLElement} spritesheet the preloaded DOM element representing the sprite
	     * @return {Sprite}
	     */
	
	  }, {
	    key: 'createSprite',
	    value: function createSprite(spritesheet) {
	      return new _createEs6Js.Easel.Sprite(spritesheet);
	    }
	  }]);
	
	  return ElementHelpers;
	}();
	
	exports.default = ElementHelpers;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _TextElement2 = __webpack_require__(8);
	
	var _TextElement3 = _interopRequireDefault(_TextElement2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a LabelElement instance
	 * @class LabelElement
	 * @classdesc the LabelElement class extends TextElement, implementing padding, minWidth, etc etc ...
	 * @extend TextElement
	 * @public
	 * @param {Object} options the options to be merged with defaults settings
	 * @type {LabelElement}
	 */
	var LabelElement = function (_TextElement) {
	  _inherits(LabelElement, _TextElement);
	
	  function LabelElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, LabelElement);
	
	    return _possibleConstructorReturn(this, (LabelElement.__proto__ || Object.getPrototypeOf(LabelElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for Label Element
	   * @memberOf LabelElement
	   * @method initDefaults
	   * @instance
	   * @override
	   * @param {Object} defaults the defaults settings
	   */
	
	
	  _createClass(LabelElement, [{
	    key: 'initDefaults',
	    value: function initDefaults(defaults) {
	      _get(LabelElement.prototype.__proto__ || Object.getPrototypeOf(LabelElement.prototype), 'initDefaults', this).call(this, {
	        text: 'Label',
	        padding: 10,
	        minWidth: 0
	      }.inherit(defaults));
	    }
	
	    /**
	     * compute bounds before drawing all graphic elements of LabelElement instance
	     * @memberOf LabelElement
	     * @method computeBounds
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'computeBounds',
	    value: function computeBounds() {
	      _get(LabelElement.prototype.__proto__ || Object.getPrototypeOf(LabelElement.prototype), 'computeBounds', this).call(this);
	
	      if (!!this.settings.minWidth) {
	        if (String.isPercentage(this.settings.minWidth) && !!this.parent) {
	          this.settings.minWidth = this.parent.getComputedBounds().width * this.settings.minWidth.parsePercentage();
	        }
	
	        if (this.settings.size.width < this.settings.minWidth) {
	          this.settings.size.width = this.settings.minWidth;
	        }
	      }
	    }
	
	    /**
	     * centers the text inside LabelElement container
	     * @memberOf LabelElement
	     * @method centerText
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'centerText',
	    value: function centerText() {
	      if (!!this.settings.outline) {
	        this.textOutline.inherit({
	          x: this.settings.size.width * 0.5,
	          y: this.settings.size.height * 0.5
	        });
	      }
	
	      this.text.inherit({
	        x: this.settings.size.width * 0.5,
	        y: this.settings.size.height * 0.5
	      });
	    }
	
	    /**
	     * aligns the text inside the LabelElement container
	     * @memberOf LabelElement
	     * @method alignText
	     * @instance
	     * @override
	     * @param {String} mode can be a couple of word for horizontal or vertical align, in any order<br>
	     *   accepts the following modes<br>
	     *   <ul>
	     *     <li><b>Horizontal Modes</b>: left, center, right</li>
	     *     <li><b>Vertical Modes</b>: top, middle, bottom</li>
	     *   </ul>
	     * @return {LabelElement}
	     */
	
	  }, {
	    key: 'alignText',
	    value: function alignText() {
	      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'center middle';
	
	      var modes = mode.toArray(' ');
	      var horizontalModes = ['left', 'center', 'right'];
	      var verticalModes = ['top', 'middle', 'bottom'];
	
	      var textOptions = {
	        x: this.settings.size.width * 0.5,
	        y: this.settings.size.height * 0.5,
	        textAlign: 'center',
	        textBaseline: 'middle'
	      };
	
	      if (horizontalModes.contains(modes)) {
	        if (modes.contains('left')) {
	          textOptions.inherit({
	            x: 0,
	            textAlign: 'left'
	          });
	        } else if (modes.contains('right')) {
	          textOptions.inherit({
	            x: this.settings.size.width,
	            textAlign: 'right'
	          });
	        }
	      }
	
	      if (verticalModes.contains(modes)) {
	        if (modes.contains('top')) {
	          textOptions.inherit({
	            y: 0,
	            textBaseline: 'top'
	          });
	        } else if (modes.contains('bottom')) {
	          textOptions.inherit({
	            y: this.settings.size.height,
	            textBaseline: 'bottom'
	          });
	        }
	      }
	
	      if (!!this.settings.outline) {
	        this.textOutline.inherit(textOptions);
	      }
	
	      this.text.inherit(textOptions);
	
	      return this;
	    }
	  }]);
	
	  return LabelElement;
	}(_TextElement3.default);
	
	exports.default = LabelElement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _LabelElement2 = __webpack_require__(4);
	
	var _LabelElement3 = _interopRequireDefault(_LabelElement2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a ButtonElement instance
	 * @class ButtonElement
	 * @classdesc Button Element class, extending LabelElement with a click event handler
	 * @extends LabelElement
	 * @param {Object} options the options object to be merged with defaults
	 * @type {ButtonElement}
	 * @public
	 */
	var ButtonElement = function (_LabelElement) {
	  _inherits(ButtonElement, _LabelElement);
	
	  function ButtonElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ButtonElement);
	
	    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for Button Element
	   * @memberOf ButtonElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ButtonElement, [{
	    key: 'initDefaults',
	    value: function initDefaults(defaults) {
	      _get(ButtonElement.prototype.__proto__ || Object.getPrototypeOf(ButtonElement.prototype), 'initDefaults', this).call(this, {
	        text: 'Button',
	        stroke: {
	          size: 4,
	          radius: 5,
	          color: '#fff'
	        },
	        events: {
	          click: function click() {}
	        }
	      }.inherit(defaults));
	    }
	  }]);
	
	  return ButtonElement;
	}(_LabelElement3.default);
	
	exports.default = ButtonElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs an ImageElement instance
	 * @class ImageElement
	 * @classdesc ImageElement class, extending Element
	 * @extends Element
	 * @param {Object} options the options object to be merged with defaults
	 * @type {ImageElement}
	 * @public
	 */
	var ImageElement = function (_Element) {
	  _inherits(ImageElement, _Element);
	
	  function ImageElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ImageElement);
	
	    return _possibleConstructorReturn(this, (ImageElement.__proto__ || Object.getPrototypeOf(ImageElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for ImageElement
	   * @memberOf ImageElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ImageElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'initDefaults', this).call(this, {
	        image: null
	      });
	    }
	
	    /**
	     * sets or updates the scaling of the Element instance
	     * @memberOf Element
	     * @method setScale
	     * @instance
	     * @param {Object|Number} scaleOptions can be an object with x and y couple or only a number to be used for both
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setScale',
	    value: function setScale() {
	      var scaleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'setScale', this).call(this, scaleOptions, force);
	
	      this.image.inherit({
	        scaleX: this.scaleX,
	        scaleY: this.scaleY
	      });
	
	      return this;
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.image = _ElementHelpers2.default.createImage(this.settings.image);
	      this.imageBounds = this.image.getBounds();
	
	      if (!this.settings.size.force) {
	        this.settings.inherit({
	          size: {
	            width: this.imageBounds.width,
	            height: this.imageBounds.height
	          }
	        });
	      }
	
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'preDrawElements', this).call(this);
	    }
	
	    /**
	     * draws all graphic elements of the ImageElement instance
	     * @memberOf ImageElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      _get(ImageElement.prototype.__proto__ || Object.getPrototypeOf(ImageElement.prototype), 'drawElements', this).call(this);
	
	      this.addChild(this.image);
	      _ElementHelpers2.default.align(this.image, null, 'center middle', true);
	    }
	  }]);
	
	  return ImageElement;
	}(_Element3.default);
	
	exports.default = ImageElement;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ButtonElement2 = __webpack_require__(5);
	
	var _ButtonElement3 = _interopRequireDefault(_ButtonElement2);
	
	var _ImageElement = __webpack_require__(6);
	
	var _ImageElement2 = _interopRequireDefault(_ImageElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a ListItemElement instance
	 * @class ListItemElement
	 * @classdesc the ListItemElement extends ButtonElement allowing you to add a list item indicator and a text, with a click event handler
	 * @extend ButtonElement
	 * @param {Object} options the options object to be merged with defaults
	 * @type {ListItemElement}
	 * @public
	 */
	var ListItemElement = function (_ButtonElement) {
	  _inherits(ListItemElement, _ButtonElement);
	
	  function ListItemElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ListItemElement);
	
	    return _possibleConstructorReturn(this, (ListItemElement.__proto__ || Object.getPrototypeOf(ListItemElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for ListItemElement instance
	   * @memberOf ListItemElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ListItemElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(ListItemElement.prototype.__proto__ || Object.getPrototypeOf(ListItemElement.prototype), 'initDefaults', this).call(this, {
	        text: 'List Item',
	        indicator: false, // options for an ImageElement to use as listItem indicator
	        stroke: {
	          size: 0,
	          radius: 0,
	          color: 'transparent'
	        },
	        events: {
	          click: function click() {}
	        }
	      });
	    }
	
	    /**
	     * draws all graphic elements of the ListItemElement instance
	     * @memberOf ListItemElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      if (!!this.settings.indicator) {
	        this.indicator = new _ImageElement2.default(this.settings.indicator.inherit({
	          parent: this,
	          align: 'left middle'
	        })).setPosition({
	          x: 10
	        });
	
	        this.settings.lineHeight = this.indicator.getComputedBounds().height;
	      }
	
	      this.alignText('left middle');
	      this.setTextPosition({
	        x: this.indicator.getComputedBounds().right + 10
	      }, true);
	    }
	  }]);
	
	  return ListItemElement;
	}(_ButtonElement3.default);
	
	exports.default = ListItemElement;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createEs6Js = __webpack_require__(2);
	
	var _createEs6Js2 = _interopRequireDefault(_createEs6Js);
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a TextElement instance
	 * @class TextElement
	 * @classdesc extends Element Class adding an EaselJS Text instance inside of it
	 * @extend Element
	 * @public
	 * @param {Object} options the options to be merged with defaults settings
	 * @type {TextElement}
	 */
	var TextElement = function (_Element) {
	  _inherits(TextElement, _Element);
	
	  function TextElement() {
	    _classCallCheck(this, TextElement);
	
	    return _possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).apply(this, arguments));
	  }
	
	  _createClass(TextElement, [{
	    key: 'initDefaults',
	
	    /**
	     * initializes defaults settings for TextElement
	     * @memberOf TextElement
	     * @method initDefaults
	     * @instance
	     * @override
	     */
	    value: function initDefaults(defaults) {
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'initDefaults', this).call(this, {
	        text: 'Text Element',
	        font: '50px Arial',
	        color: '#000',
	        padding: 0,
	        lineHeight: false,
	        maxWidth: false,
	        shadow: false,
	        outline: false
	      }.inherit(defaults));
	    }
	
	    /**
	     * initializes the settings object for the TextElement instance
	     * @memberOf TextElement
	     * @method initSettings
	     * @instance
	     * @override
	     * @param {Object} options the options to be merged with the defaults settings
	     */
	
	  }, {
	    key: 'initSettings',
	    value: function initSettings(options) {
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'initSettings', this).call(this, options);
	
	      if (!this.settings.lineHeight) {
	        this.settings.lineHeight = Number.parse(this.settings.font);
	      }
	    }
	
	    /**
	     * computes the bounds based on specified text parameter
	     * @memberOf TextElement
	     * @method computeBounds
	     * @instance
	     */
	
	  }, {
	    key: 'computeBounds',
	    value: function computeBounds() {
	      this.textBounds = !!this.settings.outline ? this.textOutline.getBounds() : this.text.getBounds();
	
	      if (!!this.settings.padding) {
	        if (Array.isArray(this.settings.padding)) {
	          var horizontalPadding = this.settings.padding[0];
	          var verticalPadding = this.settings.padding[1];
	
	          if (horizontalPadding > 0) {
	            this.textBounds.inherit({
	              width: this.textBounds.width + horizontalPadding
	            });
	          }
	
	          if (verticalPadding > 0) {
	            this.textBounds.inherit({
	              height: this.textBounds.height + verticalPadding
	            });
	          }
	        } else if (Number.isNumber(this.settings.padding)) {
	          if (this.settings.padding > 0) {
	            this.textBounds.inherit({
	              width: this.textBounds.width + this.settings.padding,
	              height: this.textBounds.height + this.settings.padding
	            });
	          }
	        }
	      }
	
	      this.settings.inherit({
	        size: {
	          width: this.textBounds.width,
	          height: this.textBounds.height
	        }
	      });
	    }
	
	    /**
	     * centers the text inside the container
	     * @memberOf TextElement
	     * @method centerText
	     * @instance
	     */
	
	  }, {
	    key: 'centerText',
	    value: function centerText() {
	      if (!!this.settings.outline) {
	        this.textOutline.inherit({
	          x: this.settings.size.width * 0.5,
	          y: this.settings.lineHeight * 0.5
	        });
	      }
	
	      this.text.inherit({
	        x: this.settings.size.width * 0.5,
	        y: this.settings.lineHeight * 0.5
	      });
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      if (!!this.settings.outline) {
	        this.textOutline = _ElementHelpers2.default.createText(this.settings.text, this.settings.font, this.settings.outline.color).inherit({
	          textAlign: 'center',
	          textBaseline: 'middle',
	          lineHeight: this.settings.lineHeight || null,
	          lineWidth: this.settings.maxWidth || null,
	          outline: this.settings.outline.size,
	          shadow: !!this.settings.shadow ? new (Function.prototype.bind.apply(_createEs6Js2.default.Easel.Shadow, [null].concat(_toConsumableArray(this.settings.shadow))))() : null
	        });
	      }
	
	      this.text = _ElementHelpers2.default.createText(this.settings.text, this.settings.font, this.settings.color).inherit({
	        textAlign: 'center',
	        textBaseline: 'middle',
	        lineHeight: this.settings.lineHeight || null,
	        lineWidth: this.settings.maxWidth || null,
	        shadow: !!this.settings.shadow ? new (Function.prototype.bind.apply(_createEs6Js2.default.Easel.Shadow, [null].concat(_toConsumableArray(this.settings.shadow))))() : null
	      });
	
	      this.computeBounds();
	      this.centerText();
	
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'preDrawElements', this).call(this);
	    }
	
	    /**
	     * draws all graphic elements of the TextElement instance
	     * @memberOf TextElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'drawElements', this).call(this);
	
	      if (!!this.settings.outline) {
	        this.addChild(this.textOutline);
	        this.setChildIndex(this.textOutline, 1);
	      }
	
	      this.addChild(this.text);
	      this.setChildIndex(this.text, !!this.settings.outline ? 2 : 1);
	    }
	
	    /**
	     * sets or updates the position of the TextElement instance
	     * @memberOf TextElement
	     * @method setPosition
	     * @instance
	     * @override
	     * @param {Object} position can contain x and y or only one or them
	     * @param {Number} [position.x=0] the x position
	     * @param {Number} [position.y=0] the y position
	     * @param {Boolean} [override=false] specify to override actual TextElement position
	     * @return {TextElement} to make chainable the method
	     */
	
	  }, {
	    key: 'setTextPosition',
	    value: function setTextPosition() {
	      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };
	      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!!position.x) {
	        if (!!override) {
	          if (!!this.settings.outline) {
	            this.textOutline.x = position.x;
	          }
	
	          this.text.x = position.x;
	        } else {
	          if (!!this.settings.outline) {
	            this.textOutline.x += position.x;
	          }
	
	          this.text.x += position.x;
	        }
	      }
	
	      if (!!position.y) {
	        if (!!override) {
	          if (!!this.settings.outline) {
	            this.textOutline.y = position.y;
	          }
	
	          this.text.y = position.y;
	        } else {
	          if (!!this.settings.outline) {
	            this.textOutline.y += position.y;
	          }
	
	          this.text.y += position.y;
	        }
	      }
	
	      return this;
	    }
	
	    /**
	     * gets the actual text content
	     * @memberOf TextElement
	     * @method getText
	     * @instance
	     * @return {String}
	     */
	
	  }, {
	    key: 'getText',
	    value: function getText() {
	      return this.text.text;
	    }
	
	    /**
	     * sets the text content for the TextElement instance, considering also the textOutline
	     * @memberOf TextElement
	     * @method setText
	     * @instance
	     * @param {String} text the text content
	     * @return {TextElement} to make chainable the method
	     */
	
	  }, {
	    key: 'setText',
	    value: function setText(text) {
	      if (!!this.settings.outline) {
	        this.textOutline.text = text;
	      }
	
	      this.text.text = text;
	
	      return this;
	    }
	  }]);
	
	  return TextElement;
	}(_Element3.default);
	
	exports.default = TextElement;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SoundElement = function () {
	  function SoundElement(props) {
	    _classCallCheck(this, SoundElement);
	
	    this.defaults = {
	      interrupt: _createEs6Js.Sound.Sound.INTERRUPT_ANY,
	      loop: 0,
	      delay: 0,
	      offset: 0,
	      volume: 1,
	      pan: 0
	    };
	    this.props = props;
	    this.playSound();
	  }
	
	  _createClass(SoundElement, [{
	    key: 'playSound',
	    value: function playSound() {
	      var _this = this;
	
	      var filteredProps = Object.assign({}, this.props);
	      delete filteredProps.sound;
	      delete filteredProps.fadeIn;
	      delete filteredProps.fadeOut;
	      delete filteredProps.events;
	      var soundProps = Object.assign({}, this.defaults, filteredProps);
	
	      if (Object.isObject(this.props.fade) && (this.props.fade.type === 'FADE_IN' || this.props.fade.type === 'FADE_ALL')) {
	        soundProps.volume = 0;
	      }
	
	      this.instance = _createEs6Js.Sound.Sound.play(this.props.sound, soundProps);
	
	      var eventsDefined = !!this.props.events;
	
	      if (eventsDefined) {
	        this.props.events.each(function (value, key) {
	          if (Function.isFunction(value)) {
	            _this.instance.on(key, value);
	          }
	        });
	      }
	
	      return this.instance;
	    }
	  }]);
	
	  return SoundElement;
	}();
	
	exports.default = SoundElement;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	  version: '0.1.1',
	  build: new Date()
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	var _LabelElement = __webpack_require__(4);
	
	var _LabelElement2 = _interopRequireDefault(_LabelElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a BoxElement instance
	 * @class BoxElement
	 * @classdesc Box Element class, useful to create boxes with a title options (LabelElement)
	 * @extends Element
	 * @param {Object} options the options object to be merged with defaults
	 * @type {BoxElement}
	 * @public
	 */
	var BoxElement = function (_Element) {
	  _inherits(BoxElement, _Element);
	
	  function BoxElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, BoxElement);
	
	    return _possibleConstructorReturn(this, (BoxElement.__proto__ || Object.getPrototypeOf(BoxElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for Box Element
	   * @memberOf BoxElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(BoxElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(BoxElement.prototype.__proto__ || Object.getPrototypeOf(BoxElement.prototype), 'initDefaults', this).call(this, {
	        title: { // options for a LabelElement
	          text: 'Text Element',
	          font: '50px Arial',
	          color: '#000',
	          padding: 10,
	          lineHeight: 50,
	          maxWidth: false,
	          shadow: false,
	          outline: false,
	          stroke: false,
	          align: 'center top'
	        },
	        content: { // options for a Element
	          fill: 'transparent',
	          align: 'center bottom'
	        }
	      });
	    }
	
	    /**
	     * drawElements method implementation
	     * @memberOf BoxElement
	     * @method drawElements
	     * @instance
	     * @inheritdoc
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      if (!!this.settings.title) {
	        this.titleElement = new _LabelElement2.default(this.settings.title.inherit({
	          parent: this,
	          minWidth: this.settings.size.width
	        }));
	      }
	
	      this.contentElement = new _Element3.default(this.settings.content.inherit({
	        parent: this,
	        size: {
	          width: this.settings.size.width,
	          height: this.settings.size.height - (!!this.settings.title ? this.titleElement.getComputedBounds().height : 0)
	        }
	      }));
	    }
	
	    /**
	     * gets the title LabelElement instance
	     * @memberOf BoxElement
	     * @method getTitleElement
	     * @instance
	     * @return {LabelElement} the instance used to draw the title
	     */
	
	  }, {
	    key: 'getTitleElement',
	    value: function getTitleElement() {
	      return this.titleElement;
	    }
	
	    /**
	     * gets the content Element instance
	     * @memberOf BoxElement
	     * @method getContentElement
	     * @instance
	     * @return {Element} the instance used to draw the content element
	     */
	
	  }, {
	    key: 'getContentElement',
	    value: function getContentElement() {
	      return this.contentElement;
	    }
	  }]);
	
	  return BoxElement;
	}(_Element3.default);
	
	exports.default = BoxElement;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	var _ListItemElement = __webpack_require__(7);
	
	var _ListItemElement2 = _interopRequireDefault(_ListItemElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs a ListElement instance
	 * @class ListElement
	 * @classdesc the ListElement class allows to create a list of any type of elements
	 * @extend Element
	 * @public
	 * @param {Object} options the options to be merged with defaults settings
	 * @type {ListElement}
	 */
	var ListElement = function (_Element) {
	  _inherits(ListElement, _Element);
	
	  function ListElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ListElement);
	
	    return _possibleConstructorReturn(this, (ListElement.__proto__ || Object.getPrototypeOf(ListElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for List Element
	   * @memberOf ListElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(ListElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(ListElement.prototype.__proto__ || Object.getPrototypeOf(ListElement.prototype), 'initDefaults', this).call(this, {
	        items: [],
	        item: { // options for a ListItemElement to use as default listItem options
	          minWidth: '100%',
	          color: '#fff'
	        },
	        itemEvents: { // event handlers to use as default listItem event handlers
	          click: function click() {}
	        },
	        indicator: false, // options for an ImageElement to use as default listItem indicator
	        stroke: {
	          size: 0,
	          radius: 0,
	          color: 'transparent'
	        }
	      });
	    }
	
	    /**
	     * initializes data object for the ListElement instance
	     * @memberOf ListElement
	     * @method initData
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'initData',
	    value: function initData() {
	      this.items = [];
	    }
	
	    /**
	     * compute bounds before drawing all graphic elements of ListElement instance
	     * @memberOf ListElement
	     * @method computeBounds
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'computeBounds',
	    value: function computeBounds() {
	      if (!!this.settings.minWidth) {
	        if (this.settings.minWidth.isPercentage() && !!this.parent) {
	          this.settings.minWidth = this.parent.getComputedBounds().width * this.settings.minWidth.parsePercentage();
	        }
	
	        if (this.settings.size.width < this.settings.minWidth) {
	          this.settings.size.width = this.settings.minWidth;
	        }
	      }
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.computeBounds();
	
	      _get(ListElement.prototype.__proto__ || Object.getPrototypeOf(ListElement.prototype), 'preDrawElements', this).call(this);
	    }
	
	    /**
	     * draws all graphic elements of the ListElement instance, cycles the items, draw them and computes positions
	     * @memberOf ListElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      var _this2 = this;
	
	      _get(ListElement.prototype.__proto__ || Object.getPrototypeOf(ListElement.prototype), 'drawElements', this).call(this);
	
	      this.settings.path('items', []).each(function (item, i) {
	        var listItem = new _ListItemElement2.default(_this2.settings.item.inherit(true, {
	          indicator: _this2.settings.indicator,
	          events: _this2.settings.itemEvents
	        }, item, {
	          parent: _this2,
	          align: 'left top'
	        }));
	
	        _this2.items.push(listItem);
	
	        if (i > 0) {
	          listItem.setPosition({
	            y: _this2.items[i - 1].getComputedBounds().bottom
	          });
	        }
	      });
	    }
	  }]);
	
	  return ListElement;
	}(_Element3.default);
	
	exports.default = ListElement;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element2 = __webpack_require__(1);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * constructs an SpriteElement instance
	 * @class SpriteElement
	 * @classdesc SpriteElement class, extending Element
	 * @extends Element
	 * @param {Object} options the options object to be merged with defaults
	 * @type {SpriteElement}
	 * @public
	 */
	var SpriteElement = function (_Element) {
	  _inherits(SpriteElement, _Element);
	
	  function SpriteElement() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, SpriteElement);
	
	    return _possibleConstructorReturn(this, (SpriteElement.__proto__ || Object.getPrototypeOf(SpriteElement)).call(this, options));
	  }
	
	  /**
	   * Initialize default settings for SpriteElement
	   * @memberOf SpriteElement
	   * @method initDefaults
	   * @instance
	   * @override
	   */
	
	
	  _createClass(SpriteElement, [{
	    key: 'initDefaults',
	    value: function initDefaults() {
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'initDefaults', this).call(this, {
	        spritesheet: null
	      });
	    }
	
	    /**
	     * sets or updates the scaling of the Element instance
	     * @memberOf Element
	     * @method setScale
	     * @instance
	     * @param {Object|Number} scaleOptions can be an object with x and y couple or only a number to be used for both
	     * @return {Element} to make chainable the method
	     */
	
	  }, {
	    key: 'setScale',
	    value: function setScale() {
	      var scaleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'setScale', this).call(this, scaleOptions, force);
	
	      this.sprite.inherit({
	        scaleX: this.scaleX,
	        scaleY: this.scaleY
	      });
	
	      return this;
	    }
	  }, {
	    key: 'preDrawElements',
	    value: function preDrawElements() {
	      this.sprite = _ElementHelpers2.default.createSprite(this.settings.spritesheet);
	      this.spriteBounds = this.sprite.getBounds();
	
	      if (!this.settings.size.force) {
	        this.settings.inherit({
	          size: {
	            width: this.spriteBounds.width,
	            height: this.spriteBounds.height
	          }
	        });
	      }
	
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'preDrawElements', this).call(this);
	    }
	    /**
	     * draws all graphic elements of the SpriteElement instance
	     * @memberOf SpriteElement
	     * @method drawElements
	     * @instance
	     * @override
	     */
	
	  }, {
	    key: 'drawElements',
	    value: function drawElements() {
	      _get(SpriteElement.prototype.__proto__ || Object.getPrototypeOf(SpriteElement.prototype), 'drawElements', this).call(this);
	
	      this.addChild(this.sprite);
	      _ElementHelpers2.default.align(this.sprite, null, 'center middle', true);
	    }
	
	    /**
	     * animates the sprite
	     * @memberOf SpriteElement
	     * @method animate
	     * @instance
	     * @param {Object} options the animate options including<br>
	     * @param {String} options.animationName the animation name in the spritesheet json to start
	     * @param {Function}
	     * @return {SpriteElement}
	     */
	
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	      if (Object.isObject(options)) {
	        if (!!options.animationName) {
	          if (!!options.onAnimationEnd) {
	            if (Function.isFunction(options.onAnimationEnd)) {
	              this.sprite.on('animationend', options.onAnimationEnd);
	            }
	          }
	
	          this.sprite.gotoAndPlay(options.animationName);
	        }
	      }
	
	      return this;
	    }
	  }]);
	
	  return SpriteElement;
	}(_Element3.default);
	
	exports.default = SpriteElement;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ElementHelpers = __webpack_require__(3);
	
	var _ElementHelpers2 = _interopRequireDefault(_ElementHelpers);
	
	var _Element = __webpack_require__(1);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _TextElement = __webpack_require__(8);
	
	var _TextElement2 = _interopRequireDefault(_TextElement);
	
	var _LabelElement = __webpack_require__(4);
	
	var _LabelElement2 = _interopRequireDefault(_LabelElement);
	
	var _ButtonElement = __webpack_require__(5);
	
	var _ButtonElement2 = _interopRequireDefault(_ButtonElement);
	
	var _ListItemElement = __webpack_require__(7);
	
	var _ListItemElement2 = _interopRequireDefault(_ListItemElement);
	
	var _ListElement = __webpack_require__(12);
	
	var _ListElement2 = _interopRequireDefault(_ListElement);
	
	var _ImageElement = __webpack_require__(6);
	
	var _ImageElement2 = _interopRequireDefault(_ImageElement);
	
	var _SpriteElement = __webpack_require__(13);
	
	var _SpriteElement2 = _interopRequireDefault(_SpriteElement);
	
	var _BoxElement = __webpack_require__(11);
	
	var _BoxElement2 = _interopRequireDefault(_BoxElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module Elements
	 * @description The Elements module of CreateJS Core Framework
	 * @property {ElementHelpers} ElementHelpers all the helpers we need to draw the elements
	 * @property {Element} Element
	 * @property {TextElement} TextElement
	 * @property {LabelElement} LabelElement
	 * @property {ButtonElement} ButtonElement
	 * @property {ListItemElement} ListItemElement
	 * @property {ListElement} ListElement
	 * @property {ImageElement} ImageElement
	 * @property {SpriteElement} SpriteElement
	 * @property {BoxElement} BoxElement
	 */
	exports.default = {
	  ElementHelpers: _ElementHelpers2.default,
	  Element: _Element2.default,
	  TextElement: _TextElement2.default,
	  LabelElement: _LabelElement2.default,
	  ButtonElement: _ButtonElement2.default,
	  ListItemElement: _ListItemElement2.default,
	  ListElement: _ListElement2.default,
	  ImageElement: _ImageElement2.default,
	  SpriteElement: _SpriteElement2.default,
	  BoxElement: _BoxElement2.default
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createEs6Js = __webpack_require__(2);
	
	var _SoundElement = __webpack_require__(9);
	
	var _SoundElement2 = _interopRequireDefault(_SoundElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SoundManager = function () {
	  function SoundManager() {
	    _classCallCheck(this, SoundManager);
	
	    console.log('constructor exectued');
	  }
	
	  _createClass(SoundManager, null, [{
	    key: 'play',
	    value: function play(props) {
	      console.log('adding layer ', props);
	      var instance = new _SoundElement2.default(props);
	      SoundManager._instances = [];
	      _createEs6Js.Sound.Sound.Ticker.addEventListener('tick', SoundManager.handleSoundTick);
	      SoundManager.addLayer(instance);
	
	      instance.instance.on('complete', function () {
	        SoundManager.removeLayer(instance);
	      });
	
	      return instance;
	    }
	  }, {
	    key: 'addLayer',
	    value: function addLayer(instance) {
	      SoundManager._instances.push({
	        instance: instance,
	        playing: true
	      });
	    }
	  }, {
	    key: 'removeLayer',
	    value: function removeLayer(instance) {
	      SoundManager._instances.remove(instance);
	    }
	  }, {
	    key: 'handleSoundTick',
	    value: function handleSoundTick() {
	      if (SoundManager._instances.length > 0) {
	        var toFade = SoundManager._instances.findBy(function (o) {
	          return Object.isObject(o.instance.props.fade) && o.instance.props.fade.type;
	        });
	
	        toFade.each(function (i) {
	          if (!!i.instance) {
	            if (i.props.fade.type === 'FADE_IN' || i.props.fade.type === 'FADE_ALL') {
	              if (i.instance.position === 0) {
	                i.instance.volume = 0;
	              } else if (i.instance.position < i.props.fade.duration) {
	                i.instance.volume = 1 / i.props.fade.duration * i.instance.position;
	              }
	            }
	
	            if (i.props.fade.type === 'FADE_OUT' || i.props.fade.type === 'FADE_ALL') {
	              if (i.instance.position > i.instance.duration - i.props.fade.duration) {
	                var fadeOutStart = i.instance.duration - i.props.fade.duration;
	                var backPosition = i.instance.position - fadeOutStart;
	
	                i.instance.volume = 1 - 1 / i.props.fade.duration * backPosition;
	              }
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'mute',
	    value: function mute() {
	      _createEs6Js.Sound.Sound.muted = true;
	    }
	  }, {
	    key: 'unmute',
	    value: function unmute() {
	      _createEs6Js.Sound.Sound.muted = false;
	    }
	  }]);
	
	  return SoundManager;
	}();
	
	exports.default = SoundManager;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SoundElement = __webpack_require__(9);
	
	var _SoundElement2 = _interopRequireDefault(_SoundElement);
	
	var _SoundManager = __webpack_require__(15);
	
	var _SoundManager2 = _interopRequireDefault(_SoundManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  SoundManager: _SoundManager2.default,
	  SoundElement: _SoundElement2.default
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=evolve.js.map