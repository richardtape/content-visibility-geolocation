(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/goober/dist/goober.esm.js":
/*!************************************************!*\
  !*** ./node_modules/goober/dist/goober.esm.js ***!
  \************************************************/
/*! exports provided: css, extractCss, glob, keyframes, setup, styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractCss", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glob", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return m; });
let e={data:""},t=t=>{if("undefined"!=typeof window){let e=t?t.querySelector("#_goober"):window._goober;return e||(e=(t||document.head).appendChild(document.createElement("style")),e.innerHTML=" ",e.id="_goober"),e.firstChild}return t||e},r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,n=(e,t)=>{let r,l="",a="",o="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?n(s,c):c+"{"+n(s,"k"==c[1]?"":t)+"}":n(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":o+=n.p?n.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),s):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+s+";"}return o[0]?(r=t?t+"{"+o+"}":o,l+r+a):l+a},o={},c=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c(e[r]):e[r]);return t},s=(e,t,r,s,i)=>{let p="object"==typeof e?c(e):e,u=o[p]||(o[p]="go"+p.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));if(!o[u]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);o[u]=n(i?{["@keyframes "+u]:t}:t,r?"":"."+u)}return((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(o[u],t,s),u},i=(e,t,r)=>e.reduce((e,l,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":n(e,""):e}return e+l+(null==o?"":o)},"");function p(e){let r=this||{},l=e.call?e(r.p):e;return s(l.unshift?l.raw?i(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t(r.target),r.g,r.o,r.k)}let u,d,f,g=p.bind({g:1}),b=p.bind({k:1});function h(e,t,r,l){n.p=t,u=e,d=r,f=l}function m(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:d&&d()},c),r.o=/ *go\d+/g.test(s),c.className=p.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=c.as||e;return f&&i[0]&&f(c),u(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-multi-select-component/dist/react-multi-select-component.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-multi-select-component/dist/react-multi-select-component.esm.js ***!
  \********************************************************************************************/
/*! exports provided: default, Dropdown, SelectItem, SelectPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return SelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPanel", function() { return SelectPanel; });
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defaultStrings = {
  selectSomeItems: "Select...",
  allItemsAreSelected: "All items are selected.",
  selectAll: "Select All",
  search: "Search",
  clearSearch: "Clear Search",
  clearSelected: "Clear Selected"
};
var defaultProps = {
  value: [],
  focusSearchOnOpen: true,
  hasSelectAll: true,
  className: "multi-select",
  debounceDuration: 300,
  options: []
};
var MultiSelectContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
var MultiSelectProvider = function MultiSelectProvider(_ref) {
  var props = _ref.props,
      children = _ref.children;

  var t = function t(key) {
    var _props$overrideString;

    return ((_props$overrideString = props.overrideStrings) == null ? void 0 : _props$overrideString[key]) || defaultStrings[key];
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MultiSelectContext.Provider, {
    value: _extends({
      t: t
    }, defaultProps, props)
  }, children);
};
var useMultiSelect = function useMultiSelect() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MultiSelectContext);
};

/**
 * combines classNames in a friendly way
 *
 * @param {*} classes
 */
var cn = function cn() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.join(" ");
};

var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(null, args);
    }, wait);
  };
};

/**
 * Filters React Select options and sorts by similarity to a search filter.
 * Handles partial matches, eg. searching for "Waberg High" will find "Raoul
 * Wallenberg Traditional High School". Case insensitive. Ignores
 * non-alphanumeric characters.
 *
 * @param  options  An unfiltered list of Options.
 * @param? filter  A string to compare against Option labels.
 * @param? substitutions  Strings with multiple spellings or variations that we
 *           expect to match, eg. accented characters or abbreviated words.
 *
 * @return A filtered and sorted array of Options.
 */
function filterOptions(options, filter, substitutions) {
  // If the filter is blank, return the full list of Options.
  if (!filter) {
    return options;
  }

  var cleanFilter = cleanUpText(filter, substitutions);
  return options // Filter out undefined or null Options.
  .filter(function (_ref) {
    var label = _ref.label,
        value = _ref.value;
    return label != null && value != null;
  }) // Create a {score, Option} pair for each Option based on its label's
  // similarity to the filter text.
  .map(function (option) {
    return {
      option: option,
      score: typeaheadSimilarity(cleanUpText(option.label, substitutions), cleanFilter)
    };
  }) // Only include matches of the entire substring, with a slight
  // affordance for transposition or extra characters.
  .filter(function (pair) {
    return pair.score >= cleanFilter.length - 2;
  }) // Sort 'em by order of their score.
  .sort(function (a, b) {
    return b.score - a.score;
  }) // …and grab the original Options back from their pairs.
  .map(function (pair) {
    return pair.option;
  });
}
/**
 * Scores the similarity between two strings by returning the length of the
 * longest common subsequence. Intended for comparing strings of different
 * lengths; eg. when matching a typeahead search input with a school name.

 * Meant for use in an instant search box where results are being fetched
 * as a user is typing.
 *
 * @param  a  The longer string (though, we flip them if it's shorter).
 * @param  b  The shorter string, eg. a typeahead search input.
 *
 * @return The length of the longest common subsequence. Higher scores indicate
 *           closer matches.
 */

function typeaheadSimilarity(a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var table = [];

  if (!aLength || !bLength) {
    return 0;
  } // Ensure `a` isn't shorter than `b`.


  if (aLength < bLength) {
    var _ref2 = [b, a];
    a = _ref2[0];
    b = _ref2[1];
  } // Early exit if `a` includes `b`; these will be scored higher than any
  // other options with the same `b` (filter string), with a preference for
  // shorter `a` strings (option labels).


  if (a.indexOf(b) !== -1) {
    return bLength + 1 / aLength;
  } // Initialize the table axes:
  //
  //    0 0 0 0 ... bLength
  //    0
  //    0
  //
  //   ...
  //
  // aLength
  //


  for (var x = 0; x <= aLength; ++x) {
    table[x] = [0];
  }

  for (var y = 0; y <= bLength; ++y) {
    table[0][y] = 0;
  } // Populate the rest of the table with a dynamic programming algorithm.


  for (var _x = 1; _x <= aLength; ++_x) {
    for (var _y = 1; _y <= bLength; ++_y) {
      table[_x][_y] = a[_x - 1] === b[_y - 1] ? 1 + table[_x - 1][_y - 1] : Math.max(table[_x][_y - 1], table[_x - 1][_y]);
    }
  }

  return table[aLength][bLength];
}
/**
 * Apply string substitutions, remove non-alphanumeric characters, and convert
 * all letters to uppercase.
 *
 * eg. 'Scoil Bhríde Primary School' may become 'SCOILBHRIDEPRIMARYSCHOOL'.
 *
 * @param  input  An unsanitized input string.
 * @param  substitutions  Strings with multiple spellings or variations that we
 *          expect to match, for example accented characters or abbreviated
 *          words.
 *
 * @return The sanitized text.
 */

function cleanUpText(input, substitutions) {
  if (!input) {
    return "";
  } // Uppercase and remove all non-alphanumeric, non-accented characters.
  // Also remove underscores.


  input = input.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g, "");

  if (!substitutions) {
    return input;
  }

  var safeSubstitutions = substitutions; // For Flow.
  // Replace all strings in `safeSubstitutions` with their standardized
  // counterparts.

  return Object.keys(safeSubstitutions).reduce(function (output, substitution) {
    var unsubbed = new RegExp(substitution, "g");
    return output.replace(unsubbed, safeSubstitutions[substitution]);
  }, input);
}

var Cross = function Cross() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: "dropdown-search-clear-icon gray"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
};

var DefaultRenderer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  "& input,& span": {
    verticalAlign: "middle",
    margin: 0
  },
  span: {
    display: "inline-block",
    paddingLeft: "5px"
  },
  "&.disabled": {
    opacity: 0.5
  }
});

var DefaultItemRenderer = function DefaultItemRenderer(_ref) {
  var checked = _ref.checked,
      option = _ref.option,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(DefaultRenderer, "item-renderer", disabled && "disabled")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    onChange: onClick,
    checked: checked,
    tabIndex: -1,
    disabled: disabled
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, option.label));
};

/**
 * This component represents an individual item in the multi-select drop-down
 */
var ItemContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  boxSizing: "border-box",
  cursor: "pointer",
  display: "block",
  padding: "var(--rmsc-p)",
  outline: 0,
  "&:hover,&:focus": {
    background: "var(--rmsc-hover)"
  },
  "&.selected": {
    background: "var(--rmsc-selected)"
  }
});

var SelectItem = function SelectItem(_ref) {
  var _ref$itemRenderer = _ref.itemRenderer,
      ItemRenderer = _ref$itemRenderer === void 0 ? DefaultItemRenderer : _ref$itemRenderer,
      option = _ref.option,
      checked = _ref.checked,
      focused = _ref.focused,
      tabIndex = _ref.tabIndex,
      disabled = _ref.disabled,
      onSelectionChanged = _ref.onSelectionChanged,
      onClick = _ref.onClick;
  var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    updateFocus(); // eslint-disable-next-line
  }, [checked, focused]);

  var toggleChecked = function toggleChecked() {
    onSelectionChanged(!checked);
  };

  var handleClick = function handleClick(e) {
    toggleChecked();
    onClick(e);
  };

  var updateFocus = function updateFocus() {
    if (focused && !disabled && itemRef) {
      itemRef.current.focus();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.which) {
      case 13: // Enter

      case 32:
        // Space
        toggleChecked();
        break;

      default:
        return;
    }

    e.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: cn(ItemContainer, "select-item", checked && "selected"),
    role: "option",
    "aria-selected": checked,
    tabIndex: tabIndex,
    ref: itemRef,
    onKeyDown: handleKeyDown
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemRenderer, {
    option: option,
    checked: checked,
    onClick: handleClick,
    disabled: disabled
  }));
};

/**
 * This component represents an unadorned list of SelectItem (s).
 */
var SelectListUl = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  margin: 0,
  paddingLeft: 0,
  li: {
    listStyle: "none",
    margin: 0
  }
});
var skipIndex = 2;

var SelectList = function SelectList(_ref) {
  var options = _ref.options,
      focusIndex = _ref.focusIndex,
      _onClick = _ref.onClick;

  var _useMultiSelect = useMultiSelect(),
      disabled = _useMultiSelect.disabled,
      value = _useMultiSelect.value,
      onChange = _useMultiSelect.onChange,
      ItemRenderer = _useMultiSelect.ItemRenderer;

  var handleSelectionChanged = function handleSelectionChanged(option, checked) {
    if (disabled) {
      return;
    }

    onChange(checked ? [].concat(value, [option]) : value.filter(function (o) {
      return o.value !== option.value;
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: SelectListUl
  }, options.map(function (o, i) {
    var tabIndex = i + skipIndex;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: (o == null ? void 0 : o.key) || i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectItem, {
      focused: focusIndex === tabIndex,
      tabIndex: tabIndex,
      option: o,
      onSelectionChanged: function onSelectionChanged(c) {
        return handleSelectionChanged(o, c);
      },
      checked: value.find(function (s) {
        return s.value === o.value;
      }) ? true : false,
      onClick: function onClick(e) {
        return _onClick(e, tabIndex);
      },
      itemRenderer: ItemRenderer,
      disabled: o.disabled || disabled
    }));
  }));
};

/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
var FocusType;

(function (FocusType) {
  FocusType[FocusType["SEARCH"] = -1] = "SEARCH";
  FocusType[FocusType["NONE"] = 1] = "NONE";
})(FocusType || (FocusType = {}));

var SelectSearchContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  width: "100%",
  position: "relative",
  borderBottom: "1px solid var(--rmsc-border)",
  input: {
    height: "var(--rmsc-h)",
    padding: "0 var(--rmsc-p)",
    width: "100%",
    outline: 0,
    border: 0
  }
});
var SearchClearButton = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  cursor: "pointer",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  background: "none",
  border: 0,
  padding: "0 calc(var(--rmsc-p)/2)",
  "[hidden]": {
    display: "none"
  }
});

var SelectPanel = function SelectPanel() {
  var _useMultiSelect = useMultiSelect(),
      t = _useMultiSelect.t,
      onChange = _useMultiSelect.onChange,
      options = _useMultiSelect.options,
      value = _useMultiSelect.value,
      customFilterOptions = _useMultiSelect.filterOptions,
      selectAllLabel = _useMultiSelect.selectAllLabel,
      ItemRenderer = _useMultiSelect.ItemRenderer,
      disabled = _useMultiSelect.disabled,
      disableSearch = _useMultiSelect.disableSearch,
      focusSearchOnOpen = _useMultiSelect.focusSearchOnOpen,
      hasSelectAll = _useMultiSelect.hasSelectAll,
      ClearIcon = _useMultiSelect.ClearIcon,
      debounceDuration = _useMultiSelect.debounceDuration;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchTextForFilter = _useState2[0],
      setSearchTextForFilter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(focusSearchOnOpen && !disableSearch ? FocusType.SEARCH : FocusType.NONE),
      focusIndex = _useState3[0],
      setFocusIndex = _useState3[1];

  var debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(debounce(function (query) {
    return setSearchTextForFilter(query);
  }, debounceDuration), []);
  var selectAllOption = {
    label: selectAllLabel || t("selectAll"),
    value: ""
  };

  var selectAllValues = function selectAllValues(checked) {
    var filteredValues = filteredOptions().filter(function (o) {
      return !o.disabled;
    }).map(function (o) {
      return o.value;
    });

    if (checked) {
      var selectedValues = value.map(function (o) {
        return o.value;
      });
      var finalSelectedValues = [].concat(selectedValues, filteredValues);
      return options.filter(function (o) {
        return finalSelectedValues.includes(o.value);
      });
    }

    return value.filter(function (o) {
      return !filteredValues.includes(o.value);
    });
  };

  var selectAllChanged = function selectAllChanged(checked) {
    var newOptions = selectAllValues(checked);
    onChange(newOptions);
  };

  var handleSearchChange = function handleSearchChange(e) {
    debouncedSearch(e.target.value);
    setSearchText(e.target.value);
    setFocusIndex(FocusType.SEARCH);
  };

  var handleClear = function handleClear() {
    setSearchTextForFilter("");
    setSearchText("");
  };

  var handleItemClicked = function handleItemClicked(index) {
    return setFocusIndex(index);
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.which) {
      case 38:
        // Up Arrow
        if (e.altKey) {
          return;
        }

        updateFocus(-1);
        break;

      case 40:
        // Down Arrow
        if (e.altKey) {
          return;
        }

        updateFocus(1);
        break;

      default:
        return;
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleSearchFocus = function handleSearchFocus() {
    setFocusIndex(FocusType.SEARCH);
  };

  var filteredOptions = function filteredOptions() {
    return customFilterOptions ? customFilterOptions(options, searchTextForFilter) : filterOptions(options, searchTextForFilter);
  };

  var updateFocus = function updateFocus(offset) {
    var newFocus = focusIndex + offset;
    newFocus = Math.max(1, newFocus);
    newFocus = Math.min(newFocus, options.length + 1);
    setFocusIndex(newFocus);
  };

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var filteredOptionsList = filteredOptions().filter(function (o) {
      return !o.disabled;
    });
    return [filteredOptionsList.every(function (o) {
      return value.findIndex(function (v) {
        return v.value === o.value;
      }) !== -1;
    }), filteredOptionsList.length !== 0]; // eslint-disable-next-line
  }, [searchText, value]),
      isAllOptionSelected = _useMemo[0],
      hasSelectableOptions = _useMemo[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-panel",
    role: "listbox",
    onKeyDown: handleKeyDown
  }, !disableSearch && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: SelectSearchContainer
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoFocus: focusSearchOnOpen,
    placeholder: t("search"),
    type: "text",
    "aria-describedby": t("search"),
    onKeyDown: function onKeyDown(e) {
      return e.stopPropagation();
    },
    onChange: handleSearchChange,
    onFocus: handleSearchFocus,
    value: searchText
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: cn(SearchClearButton, "search-clear-button"),
    hidden: !searchText,
    onClick: handleClear,
    "aria-label": t("clearSearch")
  }, ClearIcon || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cross, null))), hasSelectAll && hasSelectableOptions && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectItem, {
    focused: focusIndex === 1,
    tabIndex: 1,
    checked: isAllOptionSelected,
    option: selectAllOption,
    onSelectionChanged: selectAllChanged,
    onClick: function onClick() {
      return handleItemClicked(1);
    },
    itemRenderer: ItemRenderer,
    disabled: disabled
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectList, {
    options: filteredOptions(),
    focusIndex: focusIndex,
    onClick: function onClick(_e, index) {
      return handleItemClicked(index);
    }
  }));
};

var Arrow = function Arrow(_ref) {
  var expanded = _ref.expanded;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: "dropdown-heading-dropdown-arrow gray"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: expanded ? "M18 15 12 9 6 15" : "M6 9L12 15 18 9"
  }));
};

var DropdownHeader = function DropdownHeader() {
  var _useMultiSelect = useMultiSelect(),
      t = _useMultiSelect.t,
      value = _useMultiSelect.value,
      options = _useMultiSelect.options,
      valueRenderer = _useMultiSelect.valueRenderer;

  var noneSelected = value.length === 0;
  var allSelected = value.length === options.length;
  var customText = valueRenderer && valueRenderer(value, options);

  var getSelectedText = function getSelectedText() {
    return value.map(function (s) {
      return s.label;
    }).join(", ");
  };

  return noneSelected ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "gray"
  }, customText || t("selectSomeItems")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, customText || (allSelected ? t("allItemsAreSelected") : getSelectedText()));
};

var Spinner = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  animation: "rotate 2s linear infinite",
  "& .path": {
    stroke: "var(--rmsc-border)",
    strokeWidth: "4px",
    strokeLinecap: "round",
    animation: "dash 1.5s ease-in-out infinite"
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  "@keyframes dash": {
    "0%": {
      strokeDasharray: "1,150",
      strokeDashoffset: 0
    },
    "50%": {
      strokeDasharray: "90,150",
      strokeDashoffset: "-35"
    },
    "100%": {
      strokeDasharray: "90,150",
      strokeDashoffset: "-124"
    }
  }
});
var Loading = function Loading(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      width: size,
      marginRight: "0.2rem"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: size,
    height: size,
    className: Spinner,
    viewBox: "0 0 50 50",
    style: {
      display: "inline",
      verticalAlign: "middle"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    className: "path"
  })));
};

/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
var PanelContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  position: "absolute",
  zIndex: 1,
  top: "100%",
  width: "100%",
  paddingTop: "8px",
  ".panel-content": {
    maxHeight: "300px",
    overflowY: "auto",
    borderRadius: "var(--rmsc-radius)",
    background: "var(--rmsc-bg)",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1)"
  }
});
var DropdownContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  position: "relative",
  outline: 0,
  backgroundColor: "var(--rmsc-bg)",
  border: "1px solid var(--rmsc-border)",
  borderRadius: "var(--rmsc-radius)",
  "&:focus-within": {
    boxShadow: "var(--rmsc-main) 0 0 0 1px",
    borderColor: "var(--rmsc-main)"
  }
});
var DropdownHeading = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  position: "relative",
  padding: "0 var(--rmsc-p)",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "var(--rmsc-h)",
  cursor: "default",
  outline: 0,
  ".dropdown-heading-value": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1
  }
});
var ClearSelectedButton = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  cursor: "pointer",
  background: "none",
  border: 0,
  padding: 0,
  display: "flex"
});

var Dropdown = function Dropdown() {
  var _useMultiSelect = useMultiSelect(),
      t = _useMultiSelect.t,
      onMenuToggle = _useMultiSelect.onMenuToggle,
      ArrowRenderer = _useMultiSelect.ArrowRenderer,
      shouldToggleOnHover = _useMultiSelect.shouldToggleOnHover,
      isLoading = _useMultiSelect.isLoading,
      disabled = _useMultiSelect.disabled,
      onChange = _useMultiSelect.onChange,
      labelledBy = _useMultiSelect.labelledBy,
      value = _useMultiSelect.value,
      isOpen = _useMultiSelect.isOpen,
      defaultIsOpen = _useMultiSelect.defaultIsOpen,
      ClearSelectedIcon = _useMultiSelect.ClearSelectedIcon;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isInternalExpand = _useState[0],
      setIsInternalExpand = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultIsOpen),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFocus = _useState3[0],
      setHasFocus = _useState3[1];

  var FinalArrow = ArrowRenderer || Arrow;
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  /* eslint-disable react-hooks/exhaustive-deps */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (defaultIsOpen === undefined && typeof isOpen === "boolean") {
      setIsInternalExpand(false);
      setExpanded(isOpen);
    }
  }, [isOpen]);

  var handleKeyDown = function handleKeyDown(e) {
    var _wrapper$current;

    if (isInternalExpand) {
      switch (e.which) {
        case 27: // Escape

        case 38:
          // Up Arrow
          setExpanded(false);
          wrapper == null ? void 0 : (_wrapper$current = wrapper.current) == null ? void 0 : _wrapper$current.focus();
          break;

        case 32: // Space

        case 13: // Enter Key

        case 40:
          // Down Arrow
          setExpanded(true);
          break;

        default:
          return;
      }
    }

    e.preventDefault();
  };

  var handleHover = function handleHover(iexpanded) {
    isInternalExpand && shouldToggleOnHover && setExpanded(iexpanded);
  };

  var handleFocus = function handleFocus() {
    return !hasFocus && setHasFocus(true);
  };

  var handleBlur = function handleBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false);
      setExpanded(false);
    }
  };

  var handleMouseEnter = function handleMouseEnter() {
    return handleHover(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    return handleHover(false);
  };

  var toggleExpanded = function toggleExpanded() {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded);
  };

  var handleClearSelected = function handleClearSelected(e) {
    e.stopPropagation();
    onChange([]);
    isInternalExpand && setExpanded(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    tabIndex: 0,
    className: cn(DropdownContainer, "dropdown-container"),
    "aria-labelledby": labelledBy,
    "aria-expanded": expanded,
    "aria-readonly": true,
    "aria-disabled": disabled,
    ref: wrapper,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(DropdownHeading, "dropdown-heading"),
    onClick: toggleExpanded
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dropdown-heading-value"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownHeader, null)), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null), value.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: cn(ClearSelectedButton, "clear-selected-button"),
    onClick: handleClearSelected,
    disabled: disabled,
    "aria-label": t("clearSelected")
  }, ClearSelectedIcon || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cross, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalArrow, {
    expanded: expanded
  })), expanded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(PanelContainer, "dropdown-content")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "panel-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectPanel, null))));
};

var MultiSelectBox = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  "--rmscMain": "#4285f4",
  "--rmscHover": "#f1f3f5",
  "--rmscSelected": "#e2e6ea",
  "--rmscBorder": "#ccc",
  "--rmscGray": "#aaa",
  "--rmscBg": "#fff",
  "--rmscP": "10px",
  "--rmscRadius": "4px",
  "--rmscH": "38px",
  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease"
  },
  ".gray": {
    color: "var(--rmsc-gray)"
  }
});

var MultiSelect = function MultiSelect(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MultiSelectProvider, {
    props: props
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(MultiSelectBox, props.className || "multi-select")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dropdown, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (MultiSelect);

//# sourceMappingURL=react-multi-select-component.esm.js.map


/***/ }),

/***/ "./src/controls/content-visibility-geolocation-multisitelect.js":
/*!**********************************************************************!*\
  !*** ./src/controls/content-visibility-geolocation-multisitelect.js ***!
  \**********************************************************************/
/*! exports provided: ContentVisibilityGeolocationMultiSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityGeolocationMultiSelect", function() { return ContentVisibilityGeolocationMultiSelect; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-select-component */ "./node_modules/react-multi-select-component/dist/react-multi-select-component.esm.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ContentVisibilityGeolocationMultiSelect = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withState"])({
  option: []
})(function (_ref) {
  var option = _ref.option,
      setState = _ref.setState,
      props = _ref.props,
      data = _ref.data,
      labelledBy = _ref.labelledBy,
      type = _ref.type;

  /**
   * onChange callback for the ContentVisibilityMultiSelect component. This handles setting the props and state for
   * this instance of the component.
   * 
   * @param {array} option current value of what is selected.
   */
  var onChange = function onChange(option) {
    // Set the state and props.
    setState({
      option: option
    });
    props.setAttributes({
      contentVisibilityRules: _objectSpread(_objectSpread({}, props.attributes.contentVisibilityRules), {}, {
        geolocation: _objectSpread(_objectSpread({}, props.attributes.contentVisibilityRules.geolocation), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, type, option))
      })
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "content-visibility-multi-select"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_multi_select_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: data,
    value: props.attributes.contentVisibilityRules.geolocation[type] || option,
    onChange: onChange,
    labelledBy: labelledBy,
    ItemRenderer: function ItemRenderer(_ref2) {
      var checked = _ref2.checked,
          option = _ref2.option,
          onClick = _ref2.onClick,
          disabled = _ref2.disabled;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "item-renderer content-visibility-multi-select-item ".concat(disabled && "disabled")
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
        type: "checkbox",
        onChange: onClick,
        checked: checked,
        tabIndex: -1,
        disabled: disabled
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, option.icon || "", " \xA0 ", option.label));
    } // isOpen={ true }

  }));
});

/***/ }),

/***/ "./src/controls/content-visibility-geolocation-panel-body.js":
/*!*******************************************************************!*\
  !*** ./src/controls/content-visibility-geolocation-panel-body.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_content_visibility_geolocation_multisitelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/content-visibility-geolocation-multisitelect */ "./src/controls/content-visibility-geolocation-multisitelect.js");
/* harmony import */ var _helpers_has_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/has-rules */ "./src/helpers/has-rules.js");






/**
 * PHP sends through a list of all the users on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */

function getCountries() {
  var countries = [];

  if (BlockVisibilityGeolocation.countries.length === 0) {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No countries found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }

  for (var country in BlockVisibilityGeolocation.countries) {
    countries.push({
      icon: BlockVisibilityGeolocation.countries[country].flag,
      label: BlockVisibilityGeolocation.countries[country].name,
      value: BlockVisibilityGeolocation.countries[country].code
    });
  }

  return countries;
} // end getCountries()


function ContentVisibilityGeolocationBodyControl(_ref) {
  var instanceId = _ref.instanceId,
      props = _ref.props;
  var data = getCountries();
  var type = 'geolocation';
  var hasRulesClass = Object(_helpers_has_rules__WEBPACK_IMPORTED_MODULE_5__["default"])(props, type) ? ' has-active-rules' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Geolocation', 'content-visibility-geolocation'),
    initialOpen: false,
    className: "content-visibility-control-panel content-visibility-geolocation-controls" + hasRulesClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_content_visibility_geolocation_multisitelect__WEBPACK_IMPORTED_MODULE_4__["ContentVisibilityGeolocationMultiSelect"], {
    data: data,
    labelledBy: "Select Specific Users",
    props: props,
    type: type
  })), props.attributes.contentVisibility && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "geolocation-help-intro content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select one or more countries to whom this block will be ' + props.attributes.contentVisibility + '. If no countries are selected, this block will be ' + props.attributes.contentVisibility + ' regardless of a user\'s location.', 'content-visibility-geolocation')));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withInstanceId"])(ContentVisibilityGeolocationBodyControl));

/***/ }),

/***/ "./src/controls/content-visibility-geolocation.js":
/*!********************************************************!*\
  !*** ./src/controls/content-visibility-geolocation.js ***!
  \********************************************************/
/*! exports provided: ContentVisibilityGeolocationControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityGeolocationControl", function() { return ContentVisibilityGeolocationControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _content_visibility_geolocation_panel_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-visibility-geolocation-panel-body */ "./src/controls/content-visibility-geolocation-panel-body.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function ContentVisibilityGeolocationControl(data) {
  var _data = _objectSpread({}, data),
      props = _data.props;

  var rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  var contentVisibility = props.attributes.hasOwnProperty('contentVisibility');

  if (!rulesEnabled || !contentVisibility) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_content_visibility_geolocation_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
      props: props
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_content_visibility_geolocation_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
    props: props
  });
}
/**
 * Render the <ContentVisibilityGeolocationControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityGeolocationControl component.
 */

function ContentVisibilityGeolocationFill() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Fill"], {
    name: "content-visibility-extra-controls"
  }, function (fillProps) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ContentVisibilityGeolocationControl, {
      props: fillProps
    });
  });
} // Add our component to the Slot provided by BlockVisibilityControls


Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])('content-visibility-05-geolocation-fill', {
  render: ContentVisibilityGeolocationFill
}); // Register our visibility rule with the main plugin

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('contentVisibility.defaultContentVisibilityRules', 'content-visibility-geolocation/block-visibility-rules', registerContentVisibilityRule);

function registerContentVisibilityRule(defaultRules) {
  defaultRules.geolocation = {};
  return defaultRules;
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers/has-rules.js":
/*!**********************************!*\
  !*** ./src/helpers/has-rules.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Determine if the passed block props contain rules of the passed type.
 *
 * @param {object} props The currently selected block's props.
 * @param {string} type The type of the rules i.e. userAuthenticated or specialPage (or ones from add-ons).
 *
 * @return {bool} true if the passed props contain non-empty rules of the passed type. False otherwise.
 */

function hasRules(props, type) {
  if (!props.attributes.contentVisibilityRules) {
    return false;
  }

  if (!props.attributes.contentVisibilityRules[type]) {
    return false;
  } // Default to false. Passed through a filter later.


  var hasRules = false;

  switch (type) {
    case 'geolocation':
      if (props.attributes.contentVisibilityRules[type] && props.attributes.contentVisibilityRules[type][type] && props.attributes.contentVisibilityRules[type][type].length >= 1) {
        hasRules = true;
      }

      break;

    default:
      break;
  }

  return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('content-visibility-has-rules', hasRules, props, type);
} // end hasRules()


/* harmony default export */ __webpack_exports__["default"] = (hasRules);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls_content_visibility_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/content-visibility-geolocation */ "./src/controls/content-visibility-geolocation.js");




/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map