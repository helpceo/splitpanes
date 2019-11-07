(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["splitpanes"] = factory();
	else
		root["splitpanes"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04c4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e90c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04c4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/splitpanes/splitpanes.vue?vue&type=script&lang=js&
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ var splitpanesvue_type_script_lang_js_ = ({
  name: "splitpanes",
  props: {
    horizontal: {
      type: Boolean,
      required: false,
      default: false
    },
    pushOtherPanes: {
      type: Boolean,
      required: false,
      default: true
    },
    dblClickSplitter: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function data() {
    return {
      container: null,
      panes: [],
      touch: {
        mouseDown: false,
        dragging: false,
        activeSplitter: null
      },
      splitterTaps: {
        // Used to detect double click on touch devices.
        splitter: null,
        timeoutId: null
      }
    };
  },
  watch: {
    panes: {
      // Every time a pane is updated, update the panes accordingly.
      deep: true,
      immediate: false,
      handler: function handler() {
        this.updatePanesStyle();
      }
    },
    direction: function direction() {
      this.updatePanesStyle();
    },
    dblClickSplitter: function dblClickSplitter(enable) {
      var _this = this;

      var splitters = _toConsumableArray(this.container.querySelectorAll(".splitpanes__splitter"));

      if (enable) {
        splitters.forEach(function (splitter, index) {
          splitter.ondblclick = function (event) {
            return _this.onSplitterDblClick(event, index);
          };
        });
      } else {
        splitters.forEach(function (splitter) {
          splitter.ondblclick = undefined;
        });
      }
    }
  },
  methods: {
    updatePanesStyle: function updatePanesStyle() {
      var _this2 = this;

      // Using `this.$children` here rather than `this.$slots.default` because the latter is sometimes not initialized yet (eg. when this method is called
      // whereas the component is not mounted yet).
      var children = this.$children;
      this.panes.forEach(function (pane) {
        children[pane.index].update(_defineProperty({}, _this2.horizontal ? "height" : "width", "".concat(pane.size, "%")));
      });
    },
    bindEvents: function bindEvents() {
      document.addEventListener("mousemove", this.onMouseMove, {
        passive: false
      });
      document.addEventListener("mouseup", this.onMouseUp); // Passive: false to prevent scrolling while touch dragging.

      if ("ontouchstart" in window) {
        document.addEventListener("touchmove", this.onMouseMove, {
          passive: false
        });
        document.addEventListener("touchend", this.onMouseUp);
      }
    },
    unbindEvents: function unbindEvents() {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);

      if ("ontouchstart" in window) {
        document.removeEventListener("touchmove", this.onMouseMove);
        document.removeEventListener("touchend", this.onMouseUp);
      }
    },
    onMouseDown: function onMouseDown(event, splitterIndex) {
      this.bindEvents();
      this.touch.mouseDown = true;
      this.touch.activeSplitter = splitterIndex;
    },
    onMouseMove: function onMouseMove(event) {
      if (this.touch.mouseDown) {
        // Prevent scrolling while touch dragging (only works with an active event, eg. passive: false).
        event.preventDefault();
        this.touch.dragging = true;
        this.calculatePanesSize(this.getCurrentMouseDrag(event));
        this.$emit("resize", this.panes.map(function (pane) {
          return {
            min: pane.min,
            max: pane.max,
            size: pane.size
          };
        }));
      }
    },
    onMouseUp: function onMouseUp() {
      var _this3 = this;

      if (this.touch.dragging) {
        this.$emit("resized", this.panes.map(function (pane) {
          return {
            min: pane.min,
            max: pane.max,
            size: pane.size
          };
        }));
      }

      this.touch.mouseDown = false; // Keep dragging flag until click event is finished (click happens immediately after mouseup)
      // in order to prevent emitting `splitter-click` event if splitter was dragged.

      setTimeout(function () {
        _this3.touch.dragging = false;

        _this3.unbindEvents();
      }, 100);
    },
    // If touch device, detect double tap manually (2 taps separated by less than 500ms).
    onSplitterClick: function onSplitterClick(event, splitterIndex) {
      var _this4 = this;

      if ("ontouchstart" in window) {
        event.preventDefault();

        if (this.splitterTaps.splitter === splitterIndex) {
          clearTimeout(this.spltterTaps.timeoutId);
          this.splitterTaps.timeoutId = null;
          this.onSplitterDblClick(event, splitterIndex);
        } else {
          this.splitterTaps.splitter = splitterIndex;
          this.splitterTaps.timeoutId = setTimeout(function () {
            _this4.splitterTaps.splitter = null;
          }, 500);
        }
      }

      if (!this.touch.dragging) {
        this.$emit("splitter-click", this.panes[splitterIndex]);
      }
    },
    // On splitter dbl click or dbl tap maximize this pane.
    onSplitterDblClick: function onSplitterDblClick(event, splitterIndex) {
      var totalMinSizes = 0;
      this.panes = this.panes.map(function (pane, i) {
        pane.size = i === splitterIndex ? pane.max : pane.min;

        if (i !== splitterIndex) {
          totalMinSizes += pane.min;
        }

        return pane;
      });
      this.panes[splitterIndex].size -= totalMinSizes;
      this.$emit("pane-maximize", this.panes[splitterIndex]);
    },
    onPaneClick: function onPaneClick(event, paneIndex) {
      this.$emit("pane-click", this.panes[paneIndex]);
    },
    // Get the cursor position relative to the splitpane container.
    getCurrentMouseDrag: function getCurrentMouseDrag(event) {
      var rect = this.container.getBoundingClientRect();

      var _ref = "ontouchstart" in window && event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    },
    // Returns the drag percentage of the splitter relative to the 2 panes it's inbetween.
    // if the sum of size of the 2 cells is 60%, the dragPercentage range will be 0 to 100% of this 60%.
    getCurrentDragPercentage: function getCurrentDragPercentage(drag) {
      drag = drag[this.horizontal ? "y" : "x"]; // In the code bellow 'size' refers to 'width' for vertical and 'height' for horizontal layout.

      var containerSize = this.container[this.horizontal ? "clientHeight" : "clientWidth"];
      return drag * 100 / containerSize;
    },
    calculatePanesSize: function calculatePanesSize(drag) {
      var splitterIndex = this.touch.activeSplitter;
      var sums = {
        prevPanesSize: this.sumPrevPanesSize(splitterIndex),
        nextPanesSize: this.sumNextPanesSize(splitterIndex),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      };
      var minDrag = 0 + (this.pushOtherPanes ? 0 : sums.prevPanesSize);
      var maxDrag = 100 - (this.pushOtherPanes ? 0 : sums.nextPanesSize);
      var dragPercentage = Math.max(Math.min(this.getCurrentDragPercentage(drag), maxDrag), minDrag); // If not pushing other panes, panes to resize are right before and right after splitter.

      var panesToResize = [splitterIndex, splitterIndex + 1];
      var paneBefore = this.panes[panesToResize[0]] || null;
      var paneAfter = this.panes[panesToResize[1]] || null;
      var paneBeforeMaxReached = paneBefore.max < 100 && dragPercentage >= paneBefore.max + sums.prevPanesSize;
      var paneAfterMaxReached = paneAfter.max < 100 && dragPercentage <= 100 - (paneAfter.max + this.sumNextPanesSize(splitterIndex + 1)); // Prevent dragging beyond pane max.

      if (paneBeforeMaxReached || paneAfterMaxReached) {
        if (paneBeforeMaxReached) {
          paneBefore.size = paneBefore.max;
          paneAfter.size = Math.max(100 - paneBefore.max - sums.prevPanesSize - sums.nextPanesSize, 0);
        } else {
          paneBefore.size = Math.max(100 - paneAfter.max - sums.prevPanesSize - this.sumNextPanesSize(splitterIndex + 1), 0);
          paneAfter.size = paneAfter.max;
        }

        return;
      } // When pushOtherPanes = true, find the closest expanded pane on each side of the splitter.


      if (this.pushOtherPanes) {
        var vars = this.doPushOtherPanes(sums, dragPercentage);

        if (!vars) {
          return; // Prevent other calculation.
        }

        sums = vars.sums;
        panesToResize = vars.panesToResize;
        paneBefore = this.panes[panesToResize[0]] || null;
        paneAfter = this.panes[panesToResize[1]] || null;
      }

      if (paneBefore !== null) {
        paneBefore.size = Math.min(Math.max(dragPercentage - sums.prevPanesSize - sums.prevReachedMinPanes, paneBefore.min), paneBefore.max);
      }

      if (paneAfter !== null) {
        paneAfter.size = Math.min(Math.max(100 - dragPercentage - sums.nextPanesSize - sums.nextReachedMinPanes, paneAfter.min), paneAfter.max);
      }
    },
    doPushOtherPanes: function doPushOtherPanes(sums, dragPercentage) {
      var _this5 = this;

      var splitterIndex = this.touch.activeSplitter;
      var panesToResize = [splitterIndex, splitterIndex + 1]; // Pushing Down.
      // Going smaller than the current pane min size: take the previous expanded pane.

      if (dragPercentage < sums.prevPanesSize + this.panes[panesToResize[0]].min) {
        panesToResize[0] = this.findPrevExpandedPane(splitterIndex).index;
        sums.prevReachedMinPanes = 0; // If pushing a n-2 or less pane, from splitter, then make sure all in between is at min size.

        if (panesToResize[0] < splitterIndex) {
          this.panes.forEach(function (pane, i) {
            if (i > panesToResize[0] && i <= splitterIndex) {
              pane.size = pane.min;
              sums.prevReachedMinPanes += pane.min;
            }
          });
        }

        sums.prevPanesSize = this.sumPrevPanesSize(panesToResize[0]); // If nothing else to push down, cancel dragging.

        if (panesToResize[0] === undefined) {
          sums.prevReachedMinPanes = 0;
          this.panes[0].size = this.panes[0].min;
          this.panes.forEach(function (pane, i) {
            if (i > 0 && i <= splitterIndex) {
              pane.size = pane.min;
              sums.prevReachedMinPanes += pane.min;
            }
          });
          this.panes[panesToResize[1]].size = 100 - sums.prevReachedMinPanes - this.panes[0].min - sums.prevPanesSize - sums.nextPanesSize;
          return null;
        }
      } // Pushing Up.
      // Pushing up beyond min size is reached: take the next expanded pane.


      if (dragPercentage > 100 - sums.nextPanesSize - this.panes[panesToResize[1]].min) {
        panesToResize[1] = this.findNextExpandedPane(splitterIndex).index;
        sums.nextReachedMinPanes = 0; // If pushing a n+2 or more pane, from splitter, then make sure all in between is at min size.

        if (panesToResize[1] > splitterIndex + 1) {
          this.panes.forEach(function (pane, i) {
            if (i > splitterIndex && i < panesToResize[1]) {
              pane.size = pane.min;
              sums.nextReachedMinPanes += pane.min;
            }
          });
        }

        sums.nextPanesSize = this.sumNextPanesSize(panesToResize[1] - 1); // If nothing else to push up, cancel dragging.

        if (panesToResize[1] === undefined) {
          sums.nextReachedMinPanes = 0;
          this.panes[this.panes.length - 1].size = this.panes[this.panes.length - 1].min;
          this.panes.forEach(function (pane, i) {
            if (i < _this5.panes.length - 1 && i >= splitterIndex + 1) {
              pane.size = pane.min;
              sums.nextReachedMinPanes += pane.min;
            }
          });
          this.panes[panesToResize[0]].size = 100 - sums.prevPanesSize - sums.nextReachedMinPanes - this.panes[this.panes.length - 1].min - sums.nextPanesSize;
          return null;
        }
      }

      return {
        sums: sums,
        panesToResize: panesToResize
      };
    },
    sumPrevPanesSize: function sumPrevPanesSize(splitterIndex) {
      return this.panes.reduce(function (total, pane, i) {
        return total + (i < splitterIndex ? pane.size : 0);
      }, 0);
    },
    sumNextPanesSize: function sumNextPanesSize(splitterIndex) {
      return this.panes.reduce(function (total, pane, i) {
        return total + (i > splitterIndex + 1 ? pane.size : 0);
      }, 0);
    },
    // Return the previous pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findPrevExpandedPane: function findPrevExpandedPane(splitterIndex) {
      var pane = _toConsumableArray(this.panes).reverse().find(function (p) {
        return p.index < splitterIndex && p.size > p.min;
      });

      return pane || {};
    },
    // Return the next pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findNextExpandedPane: function findNextExpandedPane(splitterIndex) {
      var pane = this.panes.find(function (p) {
        return p.index > splitterIndex + 1 && p.size > p.min;
      });
      return pane || {};
    },
    // Called when the component is mounted and updated: update the panes and splitter as needed.
    update: function update() {
      var _this6 = this;

      var lastIsPane = false;
      var nbPanes = 0;
      var setPanesSizesToDefault = false; // Loop through children: some panes and splitters may have been reused by Vue.js recycling mechanism.

      _toConsumableArray(this.container.children).forEach(function (child) {
        if (child.classList.contains("splitpanes__pane")) {
          // Pane
          var paneIndex = nbPanes;

          if (lastIsPane) {
            // The previous child is a pane: we need to create a new splitter in between.
            var splitterIndex = paneIndex - 1;
            var elm = document.createElement("div");
            elm.classList.add("splitpanes__splitter");
            elm.setAttribute("data-splitpanes-index", splitterIndex);

            elm.onmousedown = function (event) {
              return _this6.onMouseDown(event, splitterIndex);
            };

            if (typeof window !== "undefined" && "ontouchstart" in window) {
              elm.ontouchstart = function (event) {
                return _this6.onMouseDown(event, splitterIndex);
              };
            }

            elm.onclick = function (event) {
              return _this6.onSplitterClick(event, splitterIndex + 1);
            };

            if (_this6.dblClickSplitter) {
              elm.ondblclick = function (event) {
                return _this6.onSplitterDblClick(event, splitterIndex + 1);
              };
            }

            Object.defineProperty(child, "before", {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function before() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();
                argArr.forEach(function (argItem) {
                  var isNode = argItem instanceof Node;
                  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });
                this.parentNode.insertBefore(docFrag, this);
              }
            });
            child.before(elm);
          }

          lastIsPane = true;
          nbPanes++;

          if (child.getAttribute("data-splitpanes-index") === paneIndex.toString()) {
            // The pane has been recycled and is at the correct position: nothing to change.
            return;
          } // Otherwise, update the pane information.


          child.setAttribute("id", "pane_".concat(paneIndex));
          child.setAttribute("data-splitpanes-index", paneIndex);

          child.onclick = function (event) {
            return _this6.onPaneClick(event, paneIndex);
          }; // Get pane size.


          var vm = _this6.$children[paneIndex];
          var size = 0;

          if (!setPanesSizesToDefault) {
            if (typeof vm.size === "undefined") {
              // No 'size' prop set, the size will be set to "100 / nbPanes" after this loop since we don't know yet how many panes there are.
              setPanesSizesToDefault = true;
            } else {
              // The size is given in prop.
              size = Number.parseFloat(vm.size);
            }
          } // Update `this.panes` with the new pane information.


          _this6.$set(_this6.panes, paneIndex, {
            index: paneIndex,
            min: typeof vm.minSize === "undefined" ? 0 : Number.parseFloat(vm.minSize),
            max: typeof vm.maxSize === "undefined" ? 100 : Number.parseFloat(vm.maxSize),
            size: size
          });
        } else {
          // Splitter
          if (!lastIsPane) {
            // The previous child is already a splitter, so we need to remove this one.
            child.onmousedown = undefined;
            child.onclick = undefined;
            child.ondblclick = undefined;
            child.remove();
            return;
          }

          lastIsPane = false;

          var _splitterIndex = nbPanes - 1;

          if (child.hasAttribute("data-splitpanes-index")) {
            if (child.getAttribute("data-splitpanes-index") === _splitterIndex.toString()) {
              // The splitter is at the correct position: nothing to change.
              return;
            } // Otherwise, we'll need to update its information, so let's start by erasing the old ones.


            child.onmousedown = undefined;
            child.onclick = undefined;
            child.ondblclick = undefined;
          } // Update the splitter information.


          child.setAttribute("data-splitpanes-index", _splitterIndex);

          child.onmousedown = function (event) {
            return _this6.onMouseDown(event, _splitterIndex);
          };

          child.onclick = function (event) {
            return _this6.onSplitterClick(event, _splitterIndex);
          };

          if (_this6.dblClickSplitter) {
            child.ondblclick = function (event) {
              return _this6.onSplitterDblClick(event, _splitterIndex);
            };
          }
        }
      }); // Remove the trailing splitter if any.


      _toConsumableArray(this.container.children).reverse().some(function (child) {
        if (child.classList.contains("splitpanes__pane")) {
          return true;
        }

        if (child.classList.contains("splitpanes__splitter")) {
          child.onmousedown = undefined;
          child.onclick = undefined;
          child.ondblclick = undefined;
          child.remove();
          return true;
        }

        return false;
      });

      if (this.panes.length > nbPanes) {
        // There are less panes than before, so we need to remove the unused ones from `this.panes`.
        this.panes.splice(nbPanes, this.panes.length - nbPanes + 1);
      }

      if (setPanesSizesToDefault) {
        // If some panes have no `size` prop set, then we compute and set their default size.
        var size = 100 / this.panes.length;
        this.panes.forEach(function (pane) {
          pane.size = size;
        });
      }
    },
    // Called by pane component on programmatic resize.
    requestUpdate: function requestUpdate(_ref2) {
      var target = _ref2.target,
          args = _objectWithoutProperties(_ref2, ["target"]);

      var index = target.$el.getAttribute("data-splitpanes-index");
      var pane = this.panes[index];
      Object.entries(args).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        pane[key] = value;
      });
    }
  },
  updated: function updated() {
    this.update();
  },
  mounted: function mounted() {
    this.container = this.$refs.container;
    this.update();
    this.$emit("ready");
  },
  render: function render(h) {
    return h("div", {
      ref: "container",
      class: ["splitpanes", "splitpanes--".concat(this.horizontal ? "horizontal" : "vertical"), {
        "splitpanes--dragging": this.touch.dragging
      }]
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/splitpanes/splitpanes.vue?vue&type=script&lang=js&
 /* harmony default export */ var splitpanes_splitpanesvue_type_script_lang_js_ = (splitpanesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/splitpanes/splitpanes.vue?vue&type=style&index=0&lang=scss&
var splitpanesvue_type_style_index_0_lang_scss_ = __webpack_require__("e90c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/splitpanes/splitpanes.vue
var render, staticRenderFns





/* normalize component */

var component = normalizeComponent(
  splitpanes_splitpanesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var splitpanes = (component.exports);
// CONCATENATED MODULE: ./src/components/splitpanes/pane.js
/* harmony default export */ var pane = ({
  'name': 'pane',
  'props': {
    'size': {
      'type': [Number, String],
      'required': false,
      'default': undefined
    },
    'minSize': {
      'type': [Number, String],
      'required': false,
      'default': 0
    },
    'maxSize': {
      'type': [Number, String],
      'required': false,
      'default': 100
    }
  },
  'data': function data() {
    return {
      'style': {}
    };
  },
  'computed': {
    sizeNumber: function sizeNumber() {
      return parseFloat(this.size);
    },
    minSizeNumber: function minSizeNumber() {
      return parseFloat(this.minSize);
    },
    maxSizeNumber: function maxSizeNumber() {
      return parseFloat(this.maxSize);
    }
  },
  'watch': {
    sizeNumber: function sizeNumber(size) {
      this.$parent.requestUpdate({
        'target': this,
        size: size
      });
    },
    minSizeNumber: function minSizeNumber(min) {
      this.$parent.requestUpdate({
        'target': this,
        min: min
      });
    },
    maxSizeNumber: function maxSizeNumber(max) {
      this.$parent.requestUpdate({
        'target': this,
        max: max
      });
    }
  },
  'methods': {
    update: function update(style) {
      this.style = style;
    }
  },
  render: function render(h) {
    return h('div', {
      'class': ['splitpanes__pane'],
      'style': this.style
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/splitpanes/index.js



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Splitpanes */__webpack_require__.d(__webpack_exports__, "Splitpanes", function() { return splitpanes; });
/* concated harmony reexport Pane */__webpack_require__.d(__webpack_exports__, "Pane", function() { return pane; });




/***/ })

/******/ });
});
//# sourceMappingURL=splitpanes.umd.js.map