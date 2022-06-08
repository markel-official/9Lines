/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


function openMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.addClass('is-menu-opened');
    $('.header__menu').removeClass('is-hidden');
    setImmediate(function () {
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
    });
    setTimeout(function () {
      $('.header__menu').addClass('is-active');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 100);
  });
}

function closeMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.removeClass('is-menu-opened');
    $('.header__menu').removeClass('is-active');
    setTimeout(function () {
      $('.header__menu').addClass('is-hidden');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 500);
  });
}

function toggleMenu(event) {
  event.preventDefault();
  event.stopPropagation();

  if ($(event.currentTarget).hasClass('is-active')) {
    $(event.currentTarget).removeClass('is-active');
    closeMenu();
  } else {
    $(event.currentTarget).addClass('is-active');
    openMenu();
  }
}

function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header = $('.header');
  $('.js-burger').on('click.header', toggleMenu);
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.on('click.header', function (e) {
    var $container = $('.header__menu');

    if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  }).on('keyup.header', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  });
}

function destroy() {
  $('.js-burger').off('.header');
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.off('.header');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy,
  openMenu: openMenu,
  closeMenu: closeMenu
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);


if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);

vars.isMobile = function () {
  return innerWidth <= 1024;
};

vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};

vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};

vars.winWidth = window.innerWidth;
/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/

vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};
/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/


vars.setCookie = function (name, value, days) {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }

  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};
/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/


vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};
/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/


vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};

var dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/

vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;

  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }

  var scrollLocks = dataScrollLocks;

  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);

    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};
/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/


vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};

var scrollDiv;
/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/

vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;

  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/


function hasHoverSupport() {
  var hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}
/**
* Переопределение доступности ховера
*/


function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");
/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/ScrollTrigger.js */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var sharer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sharer.js */ "./node_modules/sharer.js/sharer.js");
/* harmony import */ var sharer_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sharer_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_13__);





 // import preloader from './components/preloader';



Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__["ieFix"])();
Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__["vhFix"])();
_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_7__["default"].init();
_components_header__WEBPACK_IMPORTED_MODULE_5__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_6__["default"].init();



gsap__WEBPACK_IMPORTED_MODULE_9__["default"].registerPlugin(gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/**
 * Sizes
*/

var sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
/**
*  Root - using it to set variables via JS
**/

var ROOT = document.querySelector(':root');
var rootStyles = getComputedStyle(ROOT); // Debounce function - apply to frequently fired events

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/**
*  LERP
// Stands for linear interpolation between provided values - in order to "damp" transition 
//      and make it more smooth
**/
//


function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
/**
*   This function creates temporary canvas to read data from the image
*   and use it on the canvas which displays our WebGL animation
*   @param {Image} Image which we are going to place on a canvas
*   @returns {Array} Array which contains array of coordinates as a first element and array of colors as a second element
**/
//


function initTemporaryCanvas(img) {
  var size = null;

  if (sizes.width < 650) {
    size = 75;
  } else {
    size = 100;
  }

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;
  canvas.classList.add('tempcanvas');
  document.body.appendChild(canvas);
  var imageCoords = [];
  var imageCoordsColors = [];
  var data = null; // img.onload = function () {
  // }

  ctx.clearRect(0, 0, size, size);
  ctx.drawImage(img, 0, 0, size, size);
  data = ctx.getImageData(0, 0, size, size);
  data = data.data; // Traverse all data from array
  // Pick red, green and blue colors and point's coordinate data 

  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      var red = data[(size * y + x) * 4];
      var green = data[(size * y + x) * 4 + 1];
      var blue = data[(size * y + x) * 4 + 2];
      var alpha = data[(size * y + x) * 4 + 3]; // console.log(red, green, blue, alpha)

      if (alpha > 0) {
        imageCoords.push([4 * (x - size / 2), 4 * (size / 2 - y)]);
        imageCoordsColors.push([red, green, blue]);
      }
    }
  }

  var resultArr = [];
  resultArr.push(imageCoords);
  resultArr.push(imageCoordsColors);
  return resultArr;
}
/**
*  Initialize canvas with Three.js
**/
//


var camera, scene, renderer, geometry, mainCanvas;

function initThreeJS() {
  var imageInput = document.getElementById('footer-image');
  var footerImgData = initTemporaryCanvas(imageInput);
  mainCanvas = document.querySelector('canvas.webgl');
  scene = new three__WEBPACK_IMPORTED_MODULE_11__["Scene"]();
  /**
   * Renderer
   */

  renderer = new three__WEBPACK_IMPORTED_MODULE_11__["WebGLRenderer"]({
    canvas: mainCanvas,
    alpha: true
  });

  if (sizes.width < 650) {
    renderer.setSize(300, 170);
  } else {
    renderer.setSize(500, 300);
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera = new three__WEBPACK_IMPORTED_MODULE_11__["PerspectiveCamera"](85, window.innerWidth / window.innerHeight, 1, 700);

  if (sizes.width < 650) {
    camera.position.z = 350;
  } else {
    camera.position.z = 300;
  }

  var texture = new three__WEBPACK_IMPORTED_MODULE_11__["TextureLoader"]().load("./images/particle.png");
  var material = new three__WEBPACK_IMPORTED_MODULE_11__["PointsMaterial"]({
    size: 5,
    color: new three__WEBPACK_IMPORTED_MODULE_11__["Color"]("#fff"),
    vertexColors: three__WEBPACK_IMPORTED_MODULE_11__["VertexColors"],
    map: texture,
    transparent: true,
    alphaMap: texture
  });
  material.vertexColors = true;
  geometry = new three__WEBPACK_IMPORTED_MODULE_11__["Geometry"]();
  footerImgData[0].forEach(function (el, index) {
    geometry.vertices.push(new three__WEBPACK_IMPORTED_MODULE_11__["Vector3"](el[0], el[1], Math.random() * 60));
  });
  footerImgData[1].forEach(function (el, index) {
    geometry.colors.push(new three__WEBPACK_IMPORTED_MODULE_11__["Color"]("rgb(".concat(el[0], ",").concat(el[1], ",").concat(el[2], ")")));
  });
  var pointCloud = new three__WEBPACK_IMPORTED_MODULE_11__["Points"](geometry, material);
  scene.add(pointCloud);
  camera.lookAt(pointCloud.position);
  scene.add(camera); // Cursor

  var cursor = {
    x: 0,
    y: 0
  };
  window.addEventListener('mousemove', function (event) {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = -(event.clientY / sizes.height - 0.5);
  });
  var animationCounter = 0;

  var animate = function animate() {
    // Update camera
    camera.position.x = cursor.x * 200;
    camera.position.y = cursor.y * 200;
    camera.lookAt(pointCloud.position); // Render

    renderer.render(scene, camera);

    if (geometry.vertices) {
      geometry.vertices.forEach(function (particle, index) {
        particle.x = particle.x + Math.cos(animationCounter / 10 + index) / 15;
        particle.y = particle.y + Math.sin(animationCounter / 10 + index) / 15;
      });
    }

    geometry.verticesNeedUpdate = true;
    animationCounter++; // Call animate again on the next frame

    window.requestAnimationFrame(animate);
  };

  animate();
}

(function () {
  /**
   * SMOOTH SCROLL
   * and
   * GSAP ANIMATION
  **/
  // Register GSAP Plugins
  var maximumScroll = 0;
  var scrollDistance = 0;
  var scrollProgress = 0;
  var smoothScrollContainer = document.getElementById('scroll-container');
  var locoScroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_8__["default"]({
    el: smoothScrollContainer,
    smooth: true,
    mobile: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  }); // tell ScrollTrigger to use these proxy methods for the "#scroll-container" element since Locomotive Scroll is hijacking things

  gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"].scrollerProxy("#scroll-container", {
    scrollTop: function scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed"
  });
  locoScroll.on("scroll", function (args) {
    gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"].update;
    scrollDistance = Number(args.scroll.y);
    maximumScroll = Number(args.limit.y);
    scrollProgress = (scrollDistance / maximumScroll * 100).toFixed(0);
    handleHeader();
    updateProgress();
  });
  /**
  *  Handle header scroll 
  **/
  // Add modificator to header when scroll more than 200px from top

  var headerElement = document.querySelector('.header');

  function handleHeader() {
    if (headerElement) {
      if (scrollDistance > 200) {
        headerElement.classList.add("header--active");
      } else {
        headerElement.classList.remove("header--active");
      }
    }
  }

  if (headerElement) {
    /**
    *  Handle header menu
    **/
    //
    var menuElement = headerElement.querySelector('.js-menu');
    var openMenuBtn = headerElement.querySelector('.js-open-menu');
    var closeMenuBtn = headerElement.querySelector('.js-close-menu');

    if (openMenuBtn) {
      openMenuBtn.addEventListener('click', function () {
        menuElement.classList.add('menu--open');
      });
    }

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', function () {
        menuElement.classList.remove('menu--open');
      });
    }
  }
  /**
  *  Handle locomotive scroll 
  * Apparently locomotive scroll just has been updated and their removed "data-scroll-to"
  * functionality. 
  * So I had to create this little script
  **/
  //


  var anchorLinksArr = document.querySelectorAll('.js-target-pointer');

  if (anchorLinksArr) {
    anchorLinksArr.forEach(function (anchorLink) {
      anchorLink.addEventListener('click', function (e) {
        var anchorParentEl = anchorLink.closest('.menu-list__item');

        if (anchorParentEl) {
          anchorParentEl.classList.add('menu-list__item--active');
        }

        anchorLinksArr.forEach(function (linkToCompare) {
          if (linkToCompare != anchorLink) {
            var linkToCompareParentEl = linkToCompare.closest('.menu-list__item');

            if (linkToCompareParentEl) {
              linkToCompareParentEl.classList.remove('menu-list__item--active');
            }
          }
        }); // e.preventDefault();

        var targetBlock = anchorLink.getAttribute('data-target-to');
        var targetEl = document.getElementById(targetBlock);

        if (targetEl) {
          locoScroll.scrollTo(targetEl);

          var _menuElement = anchorLink.closest('.js-menu');

          if (_menuElement) {
            setTimeout(function () {
              _menuElement.classList.remove('menu--open');
            }, 800);
          }
        }
      });
    });
  }
  /**
  *  Update progress
  **/
  // If we reached the bottom of the website then
  // add "--full" modificator to a progress-tracker


  var progressTrackerEl = document.querySelector('.progress-tracker');
  var progressTrackerOutput = progressTrackerEl.querySelector('.progress-tracker__progress-output');

  function updateProgress() {
    if (progressTrackerEl) {
      progressTrackerOutput.textContent = scrollProgress;

      if (scrollProgress >= 99) {
        progressTrackerEl.classList.add('progress-tracker--full');
      } else {
        progressTrackerEl.classList.remove('progress-tracker--full');
      }
    }
  }
  /**
  *  Handle intersection's SVGs
  * (since with provided SVG I couldn't use stroke-dashoffset/stroke-dasharray) technique to create
  * drawing effect (different SVG needed, you can check it yourself)
  **/
  //


  var intersectionSVGArr = document.querySelectorAll('.intersection-svg-wrapper');

  if (intersectionSVGArr) {
    intersectionSVGArr.forEach(function (intersectionEl) {
      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(intersectionEl, {
        scrollTrigger: {
          // Element | Screen
          trigger: intersectionEl,
          scroller: '#scroll-container',
          // duration: 1,
          start: 'center bottom-=100px',
          end: "bottom center",
          scrub: 0.5,
          toggleActions: "play pause resume reset",
          markers: false,
          onUpdate: function onUpdate(trigger) {
            intersectionEl.style.setProperty('--intersection-intro-scale', "".concat(100 - trigger.progress * 100, "%"));
          }
        }
      });
    });
  }

  function smoothPersonTransition() {
    var currentValue = lerp(personCurrentRotation, personPreviosValue, 0.5);
    ROOT.style.setProperty('--object-rotation', "".concat(currentValue, "deg"));
  }

  var personAnimationTween = null;
  var personCurrentRotation = 0;
  var personPreviosValue = parseInt(rootStyles.getPropertyValue('--object-rotation'));

  function initAboutAnimation() {
    // Activate pinnign and animation only on screens greater than 750px
    if (sizes.width > 750) {
      /**
      *  Handle person movement
      *  Added update function with lerp to gsap.tick in order to interpolate on every frame 
      *       instead of calculating it on every time scrollTrigger updates
      *       (In order to achieve smoother animation)
      **/
      //
      var personAnimationWrapper = document.querySelector('.about__col-animation');

      if (personAnimationWrapper) {
        var personEl = personAnimationWrapper.querySelector('.js-person');
        var trackerParentSize = parseInt(personAnimationWrapper.offsetHeight);
        var personElSize = parseInt(personEl.offsetHeight);
        var ROTATION = 360; // in degrees

        var _personAnimationTween = gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(personEl, {
          paused: true,
          scrollTrigger: {
            scroller: "#scroll-container",
            trigger: personAnimationWrapper,
            pin: personEl,
            pinSpacing: true,
            // markers: true,
            start: "top center",
            end: "top+=".concat(trackerParentSize - personElSize / 2, "px center"),
            // end: `top+=${trackerParentSize}px center`,
            scrub: 0.1,
            // start: `top top+=${trackerGap}px`,
            // end: `+=${trackerParentSize - roadmapColumnsGap - trackerElSize / 2}`,
            onUpdate: function onUpdate(trigger) {
              // console.log(trigger.progress)
              personCurrentRotation = ROTATION * trigger.progress;
            } // onUpdate: function() {
            //   console.log(this.progress()) // Goes from 0 to 1
            // },              
            // end: 'bottom',
            // endTrigger: trackerParent

          }
        });
      }

      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].ticker.add(smoothPersonTransition);
    }

    return personAnimationTween;
  }

  personAnimationTween = initAboutAnimation();

  function discardAboutAnimation(personAnimationTween) {
    if (personAnimationTween) {
      personAnimationTween.kill();
    }

    if (gsap__WEBPACK_IMPORTED_MODULE_9__["default"].ticker) {
      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].ticker.remove(smoothPersonTransition);
    }
  }
  /**
  *  Create three.js scene for footer
  * p.s. I know it was unnecessary but I just wanted to create something original instead of just 
  * putting boring image (which is not even SVG)
  **/
  // Let time for preloader to load and discard the timeinterval


  setTimeout(function () {
    initThreeJS();
  }, 3000);
  /**
  *  Handle sharing
  *  I'm using sharer.js library
  **/
  //  https://ellisonleao.github.io/sharer.js/#twitter	

  var url = window.location.href;
  var urlShare = window.location.href + 'share.php';
  var title = document.querySelector('.js-share-title').textContent.trim();
  var caption = document.querySelector('.js-share-subject').textContent.trim();
  $("meta[property='og:image']").attr('content', "".concat(url, "preview.jpg"));
  $("meta[property='og:url']").attr('content', "".concat(url)); // $(`meta[property=\\og:image]`).attr('content', `${url}preview.jpg`);
  // $(`meta[property=\\og:url]`).attr('content', `${url}`);
  // fb

  $('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook').attr('data-title', title); // vk

  $('#share-vk').attr('data-url', url).attr('data-sharer', 'vk').attr('data-title', title).attr('data-caption', caption); // telegram

  $('#share-tg').attr('data-url', url).attr('data-sharer', 'telegram').attr('data-title', title);
  /**
  *  Make a screenshot
  **/
  //
  //Prevent basic click behavior

  var previewImg = new Image();
  var previewImgString = '';
  var sharingButtons = document.querySelectorAll('.intro__social-icon');

  if (sharingButtons) {
    sharingButtons.forEach(function (shareBtn) {
      shareBtn.addEventListener('click', function (e) {
        e.preventDefault();
        html2canvas__WEBPACK_IMPORTED_MODULE_13___default()(document.querySelector("#intro")).then(function (canvas) {
          // // document.body.appendChild(canvas)
          // previewImgString = canvas.toDataURL('image/jpeg');
          // previewImg.href = previewImgString;
          // previewImg.src = `${url}preview.jpg`;
          previewImg.src = canvas.toDataURL("image/jpeg");
          previewImg.crossOrigin = "anonymous";
          saveToServer(previewImg);
        });
      });
    });
  }

  function saveToServer(image) {
    $("meta[property='og:image']").attr('content', "".concat(url, "preview.jpg"));
    $("meta[property='og:url']").attr('content', "".concat(url)); // $(`meta[property=\\og:image]`).attr('content', `${url}preview.jpg`);
    // $(`meta[property=\\og:url]`).attr('content', `${url}`);

    var formData = new FormData();
    formData.append('image', image);
    $.ajax({
      url: urlShare,
      type: "POST",
      data: formData,
      contentType: false,
      cache: false,
      processData: false,
      success: function success(data) {
        console.log(data);
      },
      error: function error(data) {
        console.log(data);
      }
    });
  } // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 


  gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"].addEventListener("refresh", function () {
    return locoScroll.update();
  }); // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.

  gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"].refresh();
  /**
  *  Add resize event listener
  **/
  // We are using debounce for functions which fires frequently

  window.addEventListener('resize', debounce(function (event) {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight; // Update camera
    // camera.aspect = sizes.width / sizes.height;
    // camera.aspect = canvasSizes.width / canvasSizes.height;
    // camera.updateProjectionMatrix();

    discardAboutAnimation(personAnimationTween);
    personAnimationTween = initAboutAnimation(); // Update renderer
    // renderer.setSize(sizes.width, sizes.height);
    // renderer.setSize(canvasSizes.width, canvasSizes.height);
    // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 

    gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"].addEventListener("refresh", function () {
      return locoScroll.update();
    }); // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.

    gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_10__["default"].refresh();
  }, 1500));
})();

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;
/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/

var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};
/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/


var trigger = function trigger(img) {
  observer.triggerLoad(img);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/js/components/header.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


/**
* Модуль "Плавный переход к якорю"
*/

var init = function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.on('click.anchor', '.js-to-anchor', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $(e.currentTarget).attr('href');
    var speed = $(e.currentTarget).data('speed') || 500;
    var offset = _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'fixed' || _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'absolute' ? -_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.outerHeight(true) : 0;
    _components_header__WEBPACK_IMPORTED_MODULE_0__["default"].closeMenu().then(function () {
      $('.js-burger').removeClass('is-active');
      _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTo($(id), speed, offset);
    });
  });
};

var destroy = function destroy() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.off('.anchor');
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_3__);
// import 'core-js/stable';



 // import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_3___default()(); // objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_3___default.a; // window.objectFitVideos = objectFitVideos;
// require('ninelines-ua-parser');

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/
var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    } // thanks IE8


    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    if ("now" in window.performance == false) {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })(); // forEach


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // closest


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map