/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    margin: 0;
    height: 100%;
    scroll-behavior: smooth;
}

.main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 9fr;
}

.sidebar-component {
    grid-column: 1 / 2;
}

.navbar-component {
    grid-column: 1 / 3;
}

.content {
    grid-column: 2 / 3;
}

.sidebar-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.status-container {
    display: flex;
}

.status-circle {
    border: 1px solid black;
    background-color: white;
    height: 25px;
    width: 25px;
    border-radius: 100px;
}

/* FIX NAMING CONVENTION AND STUFF*/

.table {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
    width: 80vw;
}

.header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    color: white;
    background-color: rgb(33, 37, 41);
}

#library {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
}

.task-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-collapse: collapse;
    border-left: 2px solid rgba(33, 37, 41, 0.356);
    border-right: 2px solid rgba(33, 37, 41, 0.356);
    border-bottom: 2px solid rgba(33, 37, 41, 0.356);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,oBAAoB;AACxB;;AAEA,mCAAmC;;AAEnC;IACI,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;IACzB,8CAA8C;IAC9C,+CAA+C;IAC/C,gDAAgD;AACpD","sourcesContent":["html, body {\n    margin: 0;\n    height: 100%;\n    scroll-behavior: smooth;\n}\n\n.main {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n}\n\n.sidebar-component {\n    grid-column: 1 / 2;\n}\n\n.navbar-component {\n    grid-column: 1 / 3;\n}\n\n.content {\n    grid-column: 2 / 3;\n}\n\n.sidebar-links {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.status-container {\n    display: flex;\n}\n\n.status-circle {\n    border: 1px solid black;\n    background-color: white;\n    height: 25px;\n    width: 25px;\n    border-radius: 100px;\n}\n\n/* FIX NAMING CONVENTION AND STUFF*/\n\n.table {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 50px;\n    width: 80vw;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    place-items: center;\n    color: white;\n    background-color: rgb(33, 37, 41);\n}\n\n#library {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n}\n\n.task-row {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    place-items: center;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-collapse: collapse;\n    border-left: 2px solid rgba(33, 37, 41, 0.356);\n    border-right: 2px solid rgba(33, 37, 41, 0.356);\n    border-bottom: 2px solid rgba(33, 37, 41, 0.356);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/inputCard.js":
/*!*************************************!*\
  !*** ./src/components/inputCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputCard: () => (/* binding */ inputCard)
/* harmony export */ });
const inputCard = document.createElement('div');

inputCard.classList.add('input-card');

inputCard.innerHTML = `
<form id="add-task-form">
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Task name</label>
  <input type="text" class="form-control" id="task-name" aria-describedby="emailHelp">
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Task description</label>
  <input type="text" class="form-control" id="task-description">
</div>
<div class="mb-3">
  <label for="datePicker">Enter a due date</label>
  <input id="datePicker" class="form-control" type="date" />
</div>
<div class="mb-3">
  <label for="priorityPicker" class="form-label">Select a priority level</label>
  <select class="form-select" aria-label="Default select example" id="priorityPicker">
    <option selected> </option>
    <option value="1">Super important</option>
    <option value="2">Fairly important</option>
    <option value="3">Important</option>
    <option value="4">Not that important</option>
    <option value="4">No importance</option>
  </select>
</div>
</form>
<button class="btn btn-success" id="task-submit-btn">Add task</button>
<button class="btn btn-secondary" id="task-back-btn">Back</button>`;



/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
const sidebar = document.createElement('div');

sidebar.classList.add('sidebar-component');

sidebar.innerHTML = `
<div class="sidebar-links">
    <div class="sidebar-title-container"><h1 class="sidebar-title">checky.io</h1></div>
    <a href="">HOME</a>
    <a href="">PROJECTS</a>
    <a href="">NOTES</a>
    <a href="">UPCOMING</a>
</div>`



/***/ }),

/***/ "./src/components/taskList.js":
/*!************************************!*\
  !*** ./src/components/taskList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
const taskList = document.createElement('div');

taskList.classList.add('table');

taskList.innerHTML = `
<div class="header">
    <p>Book Name</p>
    <p>Book Author</p>
    <p>Pages</p>
    <p>Status</p>
    <p>Delete</p>
</div>
<div id="tasks-container"></div>`;



/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _objects_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/task.js */ "./src/objects/task.js");
/* harmony import */ var _storeTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeTask.js */ "./src/modules/storeTask.js");



function createTask(title, description, dueDate, priority, notes, tags, checklist, state) {

    if (dueDate == '') {
        dueDate = 'none';
    }

    if (priority == '') {
        priority = 'none';
    }

    if (notes == '') {
        notes = [];
    }

    if (tags == '') {
        tags = [];
    }

    if (checklist == '') {
        checklist = [];
    }

    state = false;

    let task = new _objects_task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority, notes, tags, checklist, state);
    (0,_storeTask_js__WEBPACK_IMPORTED_MODULE_1__.storeTask)(task);
}







/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _objects_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/storage */ "./src/objects/storage.js");
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask */ "./src/modules/renderTask.js");



function removeTask(index) {
    _objects_storage__WEBPACK_IMPORTED_MODULE_0__.storage.splice(index, 1);
    (0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
}



/***/ }),

/***/ "./src/modules/renderTask.js":
/*!***********************************!*\
  !*** ./src/modules/renderTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTask: () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _objects_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/storage */ "./src/objects/storage.js");
/* harmony import */ var _components_taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/taskList */ "./src/components/taskList.js");



function renderTask() {
    const taskContainerElement = document.querySelector('#tasks-container');
    taskContainerElement.innerHTML = '';
    for(let i = 0; i < _objects_storage__WEBPACK_IMPORTED_MODULE_0__.storage.length; i++) {
        const task = _objects_storage__WEBPACK_IMPORTED_MODULE_0__.storage[i];
        const tableItem = document.createElement('div');

        tableItem.classList = "task-row";
        tableItem.innerHTML = `
        <p>${task.title}</p>
        <p>${task.tags}</p>
        <p>${task.priority}</p>
        <p>${task.dueDate}</p>

        <button class="btn btn-outline-danger" id="task-remove-btn" onclick="removeTask(${i})">Remove</button>`;
            
        _components_taskList__WEBPACK_IMPORTED_MODULE_1__.taskList.appendChild(tableItem);
        taskContainerElement.appendChild(tableItem);
    }
}




/***/ }),

/***/ "./src/modules/storeTask.js":
/*!**********************************!*\
  !*** ./src/modules/storeTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeTask: () => (/* binding */ storeTask)
/* harmony export */ });
/* harmony import */ var _objects_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/storage.js */ "./src/objects/storage.js");


function storeTask(task) {
    _objects_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.push(task);
    /* eslint-disable */console.log(...oo_oo(`a59ab147_0`,_objects_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage));
}


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x2b92(){var _0x159d70=['logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','node','rootExpression','send','1693353097546','string','autoExpandLimit','webpack','28kuEixV','index','elapsed','value',\"/home/dualvm/.vscode/extensions/wallabyjs.console-ninja-0.0.206/node_modules\",':logPointId:','expressionsToEvaluate','depth','totalStrLength','next.js','onmessage','concat','astro','array','replace','127.0.0.1','positiveInfinity','_addLoadNode','unshift','pathToFileURL','_disposeWebsocket','_inBrowser','coverage','[object\\x20Date]','\\x20server','autoExpand','pop','_treeNodePropertiesBeforeFullValue','close','[object\\x20Set]','Boolean','3CHvNSU','count','_allowedToConnectOnSend','167014sDRIfg','Map','_attemptToReconnectShortly','_addProperty','substr',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Xubuntu\",\"10.0.2.15\"],'valueOf','hostname','','_WebSocketClass','_additionalMetadata','_treeNodePropertiesAfterFullValue','logger\\x20websocket\\x20error','hasOwnProperty','then','24873636uQPGIs','null','port','autoExpandPropertyCount','onerror','process','...','root_exp','nodeModules','_isMap','push','url','level','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','getPrototypeOf','_getOwnPropertyDescriptor','stringify','_isPrimitiveWrapperType','5973331MUuIKQ','RegExp','_isPrimitiveType','_propertyName','_webSocketErrorDocsLink','log','isExpressionToEvaluate','_capIfString','prototype','_property','onclose','function','method','host','351303WMBXFk','Number','POSITIVE_INFINITY','includes','[object\\x20Map]','object','_WebSocket','global','map','[object\\x20Array]','props','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','isArray','set','[object\\x20BigInt]','serialize','3503457vMikzN','_Symbol','_console_ninja_session','_objectToString','performance','perf_hooks','_setNodeExpandableState','_console_ninja','parent','_hasSetOnItsPath','HTMLAllCollection','Error','stack','nuxt','_connecting','_sendErrorMessage','_addObjectProperty','_setNodeExpressionPath','_type','_ws','join','remix','_sortProps','type','call','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','indexOf','_connectAttemptCount','1.0.0','_connected','expId','Buffer','split','_setNodeId','_connectToHostNow','_setNodeQueryPath','_numberRegExp','_blacklistedProperty','_isNegativeZero','path','NEGATIVE_INFINITY','_allowedToSend','allStrLength','time','_quotedRegExp','_setNodeLabel','_cleanNode','_p_name','Symbol','disabledTrace','data','reduceLimits','resolveGetters','current','onopen','_addFunctionsNode','date','capped','8kxNaFg','sortProps','_regExpToString','setter','_setNodePermissions','_isSet','_socket','message','WebSocket','console','autoExpandMaxDepth','versions','ws/index.js','11IrcXjq','autoExpandPreviousObjects','nan','parse','default','unref','1994484oyLmIH','getter','undefined','_maxConnectAttemptCount','_isUndefined','match','location','getWebSocketClass','number','_isArray','__es'+'Module','\\x20browser','hrtime','trace','timeStamp','length','getOwnPropertyNames','getOwnPropertyDescriptor','toString','_reconnectTimeout','enumerable','name','getOwnPropertySymbols','_undefined','6653190oPcqos','_processTreeNodeResult','_HTMLAllCollection','_p_','hits','forEach','get','negativeInfinity','error','Set','boolean','5dCBoWE','String','constructor','toLowerCase','now','stackTraceLimit','reload','warn','_getOwnPropertyNames','strLength','_hasMapOnItsPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','timeEnd','negativeZero','_consoleNinjaAllowedToStart','_getOwnPropertySymbols','cappedElements','unknown','symbol','bigint','catch'];_0x2b92=function(){return _0x159d70;};return _0x2b92();}var _0x5e3da9=_0x37f9;(function(_0x292773,_0x5e7298){var _0x3c4699=_0x37f9,_0x32e2b9=_0x292773();while(!![]){try{var _0x5e52e6=-parseInt(_0x3c4699(0x1e4))/0x1*(parseInt(_0x3c4699(0x1e7))/0x2)+-parseInt(_0x3c4699(0x216))/0x3*(parseInt(_0x3c4699(0x1c5))/0x4)+parseInt(_0x3c4699(0x1a8))/0x5*(-parseInt(_0x3c4699(0x185))/0x6)+parseInt(_0x3c4699(0x208))/0x7+-parseInt(_0x3c4699(0x172))/0x8*(parseInt(_0x3c4699(0x226))/0x9)+-parseInt(_0x3c4699(0x19d))/0xa+-parseInt(_0x3c4699(0x17f))/0xb*(-parseInt(_0x3c4699(0x1f6))/0xc);if(_0x5e52e6===_0x5e7298)break;else _0x32e2b9['push'](_0x32e2b9['shift']());}catch(_0x7ecf11){_0x32e2b9['push'](_0x32e2b9['shift']());}}}(_0x2b92,0x727a6));function _0x37f9(_0x24c107,_0x33c35a){var _0x2b9225=_0x2b92();return _0x37f9=function(_0x37f9cd,_0x47a93e){_0x37f9cd=_0x37f9cd-0x158;var _0x2b1f60=_0x2b9225[_0x37f9cd];return _0x2b1f60;},_0x37f9(_0x24c107,_0x33c35a);}var j=Object['create'],X=Object['defineProperty'],G=Object[_0x5e3da9(0x196)],ee=Object[_0x5e3da9(0x195)],te=Object[_0x5e3da9(0x204)],ne=Object[_0x5e3da9(0x210)][_0x5e3da9(0x1f4)],re=(_0x425da4,_0x47a46c,_0x3fa713,_0x266053)=>{var _0x1ebcdc=_0x5e3da9;if(_0x47a46c&&typeof _0x47a46c==_0x1ebcdc(0x21b)||typeof _0x47a46c==_0x1ebcdc(0x213)){for(let _0x24e69e of ee(_0x47a46c))!ne[_0x1ebcdc(0x23e)](_0x425da4,_0x24e69e)&&_0x24e69e!==_0x3fa713&&X(_0x425da4,_0x24e69e,{'get':()=>_0x47a46c[_0x24e69e],'enumerable':!(_0x266053=G(_0x47a46c,_0x24e69e))||_0x266053[_0x1ebcdc(0x199)]});}return _0x425da4;},x=(_0x486959,_0x335377,_0x1d5644)=>(_0x1d5644=_0x486959!=null?j(te(_0x486959)):{},re(_0x335377||!_0x486959||!_0x486959[_0x5e3da9(0x18f)]?X(_0x1d5644,_0x5e3da9(0x183),{'value':_0x486959,'enumerable':!0x0}):_0x1d5644,_0x486959)),q=class{constructor(_0x4fed03,_0x3c8a3b,_0x21d469,_0x49a943){var _0x512691=_0x5e3da9;this[_0x512691(0x21d)]=_0x4fed03,this[_0x512691(0x215)]=_0x3c8a3b,this[_0x512691(0x1f8)]=_0x21d469,this[_0x512691(0x1fe)]=_0x49a943,this[_0x512691(0x161)]=!0x0,this[_0x512691(0x1e6)]=!0x0,this[_0x512691(0x243)]=!0x1,this['_connecting']=!0x1,this[_0x512691(0x1da)]=!!this[_0x512691(0x21d)][_0x512691(0x17a)],this[_0x512691(0x1f0)]=null,this[_0x512691(0x241)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x512691(0x20c)]='https://tinyurl.com/37x8b79t',this[_0x512691(0x235)]=(this[_0x512691(0x1da)]?_0x512691(0x1b3):_0x512691(0x23f))+this[_0x512691(0x20c)];}async[_0x5e3da9(0x18c)](){var _0x468f95=_0x5e3da9;if(this['_WebSocketClass'])return this[_0x468f95(0x1f0)];let _0x488fe2;if(this[_0x468f95(0x1da)])_0x488fe2=this[_0x468f95(0x21d)][_0x468f95(0x17a)];else{if(this[_0x468f95(0x21d)]['process']?.[_0x468f95(0x21c)])_0x488fe2=this[_0x468f95(0x21d)][_0x468f95(0x1fb)]?.[_0x468f95(0x21c)];else try{let _0xf0242f=await import(_0x468f95(0x15f));_0x488fe2=(await import((await import(_0x468f95(0x201)))[_0x468f95(0x1d8)](_0xf0242f[_0x468f95(0x23a)](this[_0x468f95(0x1fe)],_0x468f95(0x17e)))[_0x468f95(0x197)]()))['default'];}catch{try{_0x488fe2=require(require(_0x468f95(0x15f))[_0x468f95(0x23a)](this[_0x468f95(0x1fe)],'ws'));}catch{throw new Error(_0x468f95(0x221));}}}return this[_0x468f95(0x1f0)]=_0x488fe2,_0x488fe2;}[_0x5e3da9(0x15a)](){var _0x1d6f4a=_0x5e3da9;this[_0x1d6f4a(0x234)]||this[_0x1d6f4a(0x243)]||this[_0x1d6f4a(0x241)]>=this[_0x1d6f4a(0x188)]||(this[_0x1d6f4a(0x1e6)]=!0x1,this[_0x1d6f4a(0x234)]=!0x0,this['_connectAttemptCount']++,this[_0x1d6f4a(0x239)]=new Promise((_0x64b5f6,_0x5ea568)=>{var _0xa3b288=_0x1d6f4a;this[_0xa3b288(0x18c)]()[_0xa3b288(0x1f5)](_0x15301=>{var _0x4d5852=_0xa3b288;let _0x575370=new _0x15301('ws://'+this[_0x4d5852(0x215)]+':'+this[_0x4d5852(0x1f8)]);_0x575370['onerror']=()=>{var _0x2cf804=_0x4d5852;this[_0x2cf804(0x161)]=!0x1,this['_disposeWebsocket'](_0x575370),this[_0x2cf804(0x1e9)](),_0x5ea568(new Error(_0x2cf804(0x1f3)));},_0x575370[_0x4d5852(0x16e)]=()=>{var _0x4b0985=_0x4d5852;this[_0x4b0985(0x1da)]||_0x575370[_0x4b0985(0x178)]&&_0x575370[_0x4b0985(0x178)][_0x4b0985(0x184)]&&_0x575370['_socket']['unref'](),_0x64b5f6(_0x575370);},_0x575370[_0x4d5852(0x212)]=()=>{var _0x141f0a=_0x4d5852;this[_0x141f0a(0x1e6)]=!0x0,this[_0x141f0a(0x1d9)](_0x575370),this['_attemptToReconnectShortly']();},_0x575370[_0x4d5852(0x1cf)]=_0x7ffc75=>{var _0x3c08b7=_0x4d5852;try{_0x7ffc75&&_0x7ffc75[_0x3c08b7(0x16a)]&&this[_0x3c08b7(0x1da)]&&JSON[_0x3c08b7(0x182)](_0x7ffc75['data'])[_0x3c08b7(0x214)]==='reload'&&this['global'][_0x3c08b7(0x18b)][_0x3c08b7(0x1ae)]();}catch{}};})['then'](_0x326bf9=>(this[_0xa3b288(0x243)]=!0x0,this[_0xa3b288(0x234)]=!0x1,this[_0xa3b288(0x1e6)]=!0x1,this[_0xa3b288(0x161)]=!0x0,this[_0xa3b288(0x241)]=0x0,_0x326bf9))[_0xa3b288(0x1bc)](_0x31cb0e=>(this[_0xa3b288(0x243)]=!0x1,this['_connecting']=!0x1,console['warn'](_0xa3b288(0x203)+this['_webSocketErrorDocsLink']),_0x5ea568(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x31cb0e&&_0x31cb0e['message'])))));}));}['_disposeWebsocket'](_0x44d641){var _0x4df6d4=_0x5e3da9;this['_connected']=!0x1,this[_0x4df6d4(0x234)]=!0x1;try{_0x44d641['onclose']=null,_0x44d641[_0x4df6d4(0x1fa)]=null,_0x44d641[_0x4df6d4(0x16e)]=null;}catch{}try{_0x44d641['readyState']<0x2&&_0x44d641[_0x4df6d4(0x1e1)]();}catch{}}[_0x5e3da9(0x1e9)](){var _0x115bc2=_0x5e3da9;clearTimeout(this[_0x115bc2(0x198)]),!(this['_connectAttemptCount']>=this[_0x115bc2(0x188)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5f2d08=_0x115bc2;this[_0x5f2d08(0x243)]||this['_connecting']||(this[_0x5f2d08(0x15a)](),this[_0x5f2d08(0x239)]?.[_0x5f2d08(0x1bc)](()=>this[_0x5f2d08(0x1e9)]()));},0x1f4),this['_reconnectTimeout'][_0x115bc2(0x184)]&&this['_reconnectTimeout'][_0x115bc2(0x184)]());}async[_0x5e3da9(0x1c0)](_0x52d6be){var _0x5a709f=_0x5e3da9;try{if(!this['_allowedToSend'])return;this[_0x5a709f(0x1e6)]&&this['_connectToHostNow'](),(await this[_0x5a709f(0x239)])[_0x5a709f(0x1c0)](JSON[_0x5a709f(0x206)](_0x52d6be));}catch(_0x26b704){console[_0x5a709f(0x1af)](this[_0x5a709f(0x235)]+':\\x20'+(_0x26b704&&_0x26b704[_0x5a709f(0x179)])),this[_0x5a709f(0x161)]=!0x1,this['_attemptToReconnectShortly']();}}};function J(_0x8b8f49,_0x21e714,_0x4ca853,_0x36cc23,_0x597c19){var _0x55d5b4=_0x5e3da9;let _0x56937a=_0x4ca853[_0x55d5b4(0x158)](',')[_0x55d5b4(0x21e)](_0x442107=>{var _0x5c3d9e=_0x55d5b4;try{_0x8b8f49[_0x5c3d9e(0x228)]||((_0x597c19===_0x5c3d9e(0x1ce)||_0x597c19===_0x5c3d9e(0x23b)||_0x597c19===_0x5c3d9e(0x1d1))&&(_0x597c19+=_0x8b8f49[_0x5c3d9e(0x1fb)]?.['versions']?.[_0x5c3d9e(0x1be)]?_0x5c3d9e(0x1dd):_0x5c3d9e(0x190)),_0x8b8f49['_console_ninja_session']={'id':+new Date(),'tool':_0x597c19});let _0x3c2ae1=new q(_0x8b8f49,_0x21e714,_0x442107,_0x36cc23);return _0x3c2ae1[_0x5c3d9e(0x1c0)]['bind'](_0x3c2ae1);}catch(_0x4fc74b){return console[_0x5c3d9e(0x1af)](_0x5c3d9e(0x1bd),_0x4fc74b&&_0x4fc74b[_0x5c3d9e(0x179)]),()=>{};}});return _0x5eb4c7=>_0x56937a[_0x55d5b4(0x1a2)](_0x49492a=>_0x49492a(_0x5eb4c7));}function R(_0x39cd6c){var _0xbf4a5a=_0x5e3da9;let _0x2b3df8=function(_0x17b529,_0x485a8c){return _0x485a8c-_0x17b529;},_0x1f162d;if(_0x39cd6c[_0xbf4a5a(0x22a)])_0x1f162d=function(){var _0x38bbb1=_0xbf4a5a;return _0x39cd6c['performance'][_0x38bbb1(0x1ac)]();};else{if(_0x39cd6c[_0xbf4a5a(0x1fb)]&&_0x39cd6c[_0xbf4a5a(0x1fb)]['hrtime'])_0x1f162d=function(){var _0x615d18=_0xbf4a5a;return _0x39cd6c[_0x615d18(0x1fb)][_0x615d18(0x191)]();},_0x2b3df8=function(_0x9988d7,_0x3fc477){return 0x3e8*(_0x3fc477[0x0]-_0x9988d7[0x0])+(_0x3fc477[0x1]-_0x9988d7[0x1])/0xf4240;};else try{let {performance:_0x3ffb0c}=require(_0xbf4a5a(0x22b));_0x1f162d=function(){var _0xf6d6d3=_0xbf4a5a;return _0x3ffb0c[_0xf6d6d3(0x1ac)]();};}catch{_0x1f162d=function(){return+new Date();};}}return{'elapsed':_0x2b3df8,'timeStamp':_0x1f162d,'now':()=>Date[_0xbf4a5a(0x1ac)]()};}function Y(_0x19a80e,_0x5a8e41,_0x5cee2b){var _0x4150bf=_0x5e3da9;if(_0x19a80e['_consoleNinjaAllowedToStart']!==void 0x0)return _0x19a80e['_consoleNinjaAllowedToStart'];let _0x34f504=_0x19a80e[_0x4150bf(0x1fb)]?.[_0x4150bf(0x17d)]?.[_0x4150bf(0x1be)];return _0x34f504&&_0x5cee2b===_0x4150bf(0x233)?_0x19a80e[_0x4150bf(0x1b6)]=!0x1:_0x19a80e[_0x4150bf(0x1b6)]=_0x34f504||!_0x5a8e41||_0x19a80e[_0x4150bf(0x18b)]?.[_0x4150bf(0x1ee)]&&_0x5a8e41[_0x4150bf(0x219)](_0x19a80e[_0x4150bf(0x18b)][_0x4150bf(0x1ee)]),_0x19a80e[_0x4150bf(0x1b6)];}function Q(_0x567390,_0x3c03a0,_0x3365fd,_0x2ff00e){var _0xb1f911=_0x5e3da9;_0x567390=_0x567390,_0x3c03a0=_0x3c03a0,_0x3365fd=_0x3365fd,_0x2ff00e=_0x2ff00e;let _0x5ded26=R(_0x567390),_0x4c845b=_0x5ded26[_0xb1f911(0x1c7)],_0x4e4d0c=_0x5ded26[_0xb1f911(0x193)];class _0x2030f6{constructor(){var _0x58efee=_0xb1f911;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x58efee(0x15c)]=/^(0|[1-9][0-9]*)$/,this[_0x58efee(0x164)]=/'([^\\\\']|\\\\')*'/,this[_0x58efee(0x19c)]=_0x567390[_0x58efee(0x187)],this[_0x58efee(0x19f)]=_0x567390['HTMLAllCollection'],this[_0x58efee(0x205)]=Object[_0x58efee(0x196)],this[_0x58efee(0x1b0)]=Object[_0x58efee(0x195)],this['_Symbol']=_0x567390[_0x58efee(0x168)],this[_0x58efee(0x174)]=RegExp['prototype'][_0x58efee(0x197)],this['_dateToString']=Date[_0x58efee(0x210)]['toString'];}[_0xb1f911(0x225)](_0x133a46,_0x16c559,_0x3459fa,_0x33cd5c){var _0x316499=_0xb1f911,_0x194cd8=this,_0x21c67e=_0x3459fa[_0x316499(0x1de)];function _0x3d4e27(_0x5b0780,_0x39d1b6,_0x15d2b8){var _0x441b40=_0x316499;_0x39d1b6[_0x441b40(0x23d)]=_0x441b40(0x1b9),_0x39d1b6[_0x441b40(0x1a5)]=_0x5b0780[_0x441b40(0x179)],_0x31cca5=_0x15d2b8['node'][_0x441b40(0x16d)],_0x15d2b8[_0x441b40(0x1be)][_0x441b40(0x16d)]=_0x39d1b6,_0x194cd8[_0x441b40(0x1e0)](_0x39d1b6,_0x15d2b8);}try{_0x3459fa[_0x316499(0x202)]++,_0x3459fa[_0x316499(0x1de)]&&_0x3459fa[_0x316499(0x180)][_0x316499(0x200)](_0x16c559);var _0x4317c1,_0x4bc3c4,_0xfa476b,_0x2ab4a2,_0x586716=[],_0x83ec74=[],_0x5d521f,_0x228ab1=this[_0x316499(0x238)](_0x16c559),_0x5e7cea=_0x228ab1===_0x316499(0x1d2),_0x52dc7a=!0x1,_0x415e5f=_0x228ab1==='function',_0xc2f167=this[_0x316499(0x20a)](_0x228ab1),_0x13720e=this['_isPrimitiveWrapperType'](_0x228ab1),_0x81a8fa=_0xc2f167||_0x13720e,_0x16bde7={},_0x2895e1=0x0,_0x2519e1=!0x1,_0x31cca5,_0x33bfef=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3459fa[_0x316499(0x1cc)]){if(_0x5e7cea){if(_0x4bc3c4=_0x16c559[_0x316499(0x194)],_0x4bc3c4>_0x3459fa['elements']){for(_0xfa476b=0x0,_0x2ab4a2=_0x3459fa['elements'],_0x4317c1=_0xfa476b;_0x4317c1<_0x2ab4a2;_0x4317c1++)_0x83ec74[_0x316499(0x200)](_0x194cd8[_0x316499(0x1ea)](_0x586716,_0x16c559,_0x228ab1,_0x4317c1,_0x3459fa));_0x133a46[_0x316499(0x1b8)]=!0x0;}else{for(_0xfa476b=0x0,_0x2ab4a2=_0x4bc3c4,_0x4317c1=_0xfa476b;_0x4317c1<_0x2ab4a2;_0x4317c1++)_0x83ec74[_0x316499(0x200)](_0x194cd8[_0x316499(0x1ea)](_0x586716,_0x16c559,_0x228ab1,_0x4317c1,_0x3459fa));}_0x3459fa[_0x316499(0x1f9)]+=_0x83ec74[_0x316499(0x194)];}if(!(_0x228ab1===_0x316499(0x1f7)||_0x228ab1===_0x316499(0x187))&&!_0xc2f167&&_0x228ab1!==_0x316499(0x1a9)&&_0x228ab1!==_0x316499(0x245)&&_0x228ab1!==_0x316499(0x1bb)){var _0x2adad8=_0x33cd5c[_0x316499(0x220)]||_0x3459fa[_0x316499(0x220)];if(this[_0x316499(0x177)](_0x16c559)?(_0x4317c1=0x0,_0x16c559[_0x316499(0x1a2)](function(_0xedf2fd){var _0x57e102=_0x316499;if(_0x2895e1++,_0x3459fa[_0x57e102(0x1f9)]++,_0x2895e1>_0x2adad8){_0x2519e1=!0x0;return;}if(!_0x3459fa[_0x57e102(0x20e)]&&_0x3459fa[_0x57e102(0x1de)]&&_0x3459fa[_0x57e102(0x1f9)]>_0x3459fa[_0x57e102(0x1c3)]){_0x2519e1=!0x0;return;}_0x83ec74[_0x57e102(0x200)](_0x194cd8[_0x57e102(0x1ea)](_0x586716,_0x16c559,'Set',_0x4317c1++,_0x3459fa,function(_0x488bb2){return function(){return _0x488bb2;};}(_0xedf2fd)));})):this['_isMap'](_0x16c559)&&_0x16c559[_0x316499(0x1a2)](function(_0x3ee0f3,_0x280af0){var _0x1eb72f=_0x316499;if(_0x2895e1++,_0x3459fa[_0x1eb72f(0x1f9)]++,_0x2895e1>_0x2adad8){_0x2519e1=!0x0;return;}if(!_0x3459fa[_0x1eb72f(0x20e)]&&_0x3459fa[_0x1eb72f(0x1de)]&&_0x3459fa[_0x1eb72f(0x1f9)]>_0x3459fa['autoExpandLimit']){_0x2519e1=!0x0;return;}var _0x2ea8f7=_0x280af0[_0x1eb72f(0x197)]();_0x2ea8f7[_0x1eb72f(0x194)]>0x64&&(_0x2ea8f7=_0x2ea8f7['slice'](0x0,0x64)+_0x1eb72f(0x1fc)),_0x83ec74[_0x1eb72f(0x200)](_0x194cd8[_0x1eb72f(0x1ea)](_0x586716,_0x16c559,_0x1eb72f(0x1e8),_0x2ea8f7,_0x3459fa,function(_0x3eb20b){return function(){return _0x3eb20b;};}(_0x3ee0f3)));}),!_0x52dc7a){try{for(_0x5d521f in _0x16c559)if(!(_0x5e7cea&&_0x33bfef['test'](_0x5d521f))&&!this[_0x316499(0x15d)](_0x16c559,_0x5d521f,_0x3459fa)){if(_0x2895e1++,_0x3459fa[_0x316499(0x1f9)]++,_0x2895e1>_0x2adad8){_0x2519e1=!0x0;break;}if(!_0x3459fa[_0x316499(0x20e)]&&_0x3459fa[_0x316499(0x1de)]&&_0x3459fa['autoExpandPropertyCount']>_0x3459fa[_0x316499(0x1c3)]){_0x2519e1=!0x0;break;}_0x83ec74[_0x316499(0x200)](_0x194cd8[_0x316499(0x236)](_0x586716,_0x16bde7,_0x16c559,_0x228ab1,_0x5d521f,_0x3459fa));}}catch{}if(_0x16bde7['_p_length']=!0x0,_0x415e5f&&(_0x16bde7[_0x316499(0x167)]=!0x0),!_0x2519e1){var _0x36aeb6=[][_0x316499(0x1d0)](this[_0x316499(0x1b0)](_0x16c559))[_0x316499(0x1d0)](this[_0x316499(0x1b7)](_0x16c559));for(_0x4317c1=0x0,_0x4bc3c4=_0x36aeb6[_0x316499(0x194)];_0x4317c1<_0x4bc3c4;_0x4317c1++)if(_0x5d521f=_0x36aeb6[_0x4317c1],!(_0x5e7cea&&_0x33bfef['test'](_0x5d521f[_0x316499(0x197)]()))&&!this[_0x316499(0x15d)](_0x16c559,_0x5d521f,_0x3459fa)&&!_0x16bde7[_0x316499(0x1a0)+_0x5d521f['toString']()]){if(_0x2895e1++,_0x3459fa[_0x316499(0x1f9)]++,_0x2895e1>_0x2adad8){_0x2519e1=!0x0;break;}if(!_0x3459fa[_0x316499(0x20e)]&&_0x3459fa[_0x316499(0x1de)]&&_0x3459fa[_0x316499(0x1f9)]>_0x3459fa[_0x316499(0x1c3)]){_0x2519e1=!0x0;break;}_0x83ec74[_0x316499(0x200)](_0x194cd8[_0x316499(0x236)](_0x586716,_0x16bde7,_0x16c559,_0x228ab1,_0x5d521f,_0x3459fa));}}}}}if(_0x133a46[_0x316499(0x23d)]=_0x228ab1,_0x81a8fa?(_0x133a46['value']=_0x16c559[_0x316499(0x1ed)](),this[_0x316499(0x20f)](_0x228ab1,_0x133a46,_0x3459fa,_0x33cd5c)):_0x228ab1===_0x316499(0x170)?_0x133a46['value']=this['_dateToString']['call'](_0x16c559):_0x228ab1==='bigint'?_0x133a46[_0x316499(0x1c8)]=_0x16c559['toString']():_0x228ab1===_0x316499(0x209)?_0x133a46['value']=this[_0x316499(0x174)]['call'](_0x16c559):_0x228ab1===_0x316499(0x1ba)&&this[_0x316499(0x227)]?_0x133a46['value']=this[_0x316499(0x227)][_0x316499(0x210)][_0x316499(0x197)][_0x316499(0x23e)](_0x16c559):!_0x3459fa[_0x316499(0x1cc)]&&!(_0x228ab1===_0x316499(0x1f7)||_0x228ab1===_0x316499(0x187))&&(delete _0x133a46[_0x316499(0x1c8)],_0x133a46[_0x316499(0x171)]=!0x0),_0x2519e1&&(_0x133a46['cappedProps']=!0x0),_0x31cca5=_0x3459fa[_0x316499(0x1be)]['current'],_0x3459fa['node'][_0x316499(0x16d)]=_0x133a46,this[_0x316499(0x1e0)](_0x133a46,_0x3459fa),_0x83ec74['length']){for(_0x4317c1=0x0,_0x4bc3c4=_0x83ec74[_0x316499(0x194)];_0x4317c1<_0x4bc3c4;_0x4317c1++)_0x83ec74[_0x4317c1](_0x4317c1);}_0x586716[_0x316499(0x194)]&&(_0x133a46['props']=_0x586716);}catch(_0xa0c52f){_0x3d4e27(_0xa0c52f,_0x133a46,_0x3459fa);}return this[_0x316499(0x1f1)](_0x16c559,_0x133a46),this['_treeNodePropertiesAfterFullValue'](_0x133a46,_0x3459fa),_0x3459fa[_0x316499(0x1be)][_0x316499(0x16d)]=_0x31cca5,_0x3459fa[_0x316499(0x202)]--,_0x3459fa[_0x316499(0x1de)]=_0x21c67e,_0x3459fa[_0x316499(0x1de)]&&_0x3459fa['autoExpandPreviousObjects'][_0x316499(0x1df)](),_0x133a46;}[_0xb1f911(0x1b7)](_0x56e9f5){var _0x5e84bd=_0xb1f911;return Object['getOwnPropertySymbols']?Object[_0x5e84bd(0x19b)](_0x56e9f5):[];}['_isSet'](_0x5bdd2f){var _0x4b4372=_0xb1f911;return!!(_0x5bdd2f&&_0x567390[_0x4b4372(0x1a6)]&&this[_0x4b4372(0x229)](_0x5bdd2f)===_0x4b4372(0x1e2)&&_0x5bdd2f[_0x4b4372(0x1a2)]);}[_0xb1f911(0x15d)](_0x1089cf,_0x59a994,_0x3ff24d){var _0x4960bc=_0xb1f911;return _0x3ff24d['noFunctions']?typeof _0x1089cf[_0x59a994]==_0x4960bc(0x213):!0x1;}[_0xb1f911(0x238)](_0x3a8113){var _0xbf7809=_0xb1f911,_0x14c96f='';return _0x14c96f=typeof _0x3a8113,_0x14c96f===_0xbf7809(0x21b)?this[_0xbf7809(0x229)](_0x3a8113)==='[object\\x20Array]'?_0x14c96f=_0xbf7809(0x1d2):this[_0xbf7809(0x229)](_0x3a8113)===_0xbf7809(0x1dc)?_0x14c96f=_0xbf7809(0x170):this[_0xbf7809(0x229)](_0x3a8113)===_0xbf7809(0x224)?_0x14c96f=_0xbf7809(0x1bb):_0x3a8113===null?_0x14c96f=_0xbf7809(0x1f7):_0x3a8113[_0xbf7809(0x1aa)]&&(_0x14c96f=_0x3a8113[_0xbf7809(0x1aa)][_0xbf7809(0x19a)]||_0x14c96f):_0x14c96f===_0xbf7809(0x187)&&this['_HTMLAllCollection']&&_0x3a8113 instanceof this[_0xbf7809(0x19f)]&&(_0x14c96f=_0xbf7809(0x230)),_0x14c96f;}[_0xb1f911(0x229)](_0x35c372){var _0x16104d=_0xb1f911;return Object['prototype'][_0x16104d(0x197)][_0x16104d(0x23e)](_0x35c372);}['_isPrimitiveType'](_0x470ad1){var _0x28ef5c=_0xb1f911;return _0x470ad1===_0x28ef5c(0x1a7)||_0x470ad1==='string'||_0x470ad1==='number';}[_0xb1f911(0x207)](_0xc7c9c4){var _0x2eb56c=_0xb1f911;return _0xc7c9c4===_0x2eb56c(0x1e3)||_0xc7c9c4==='String'||_0xc7c9c4===_0x2eb56c(0x217);}[_0xb1f911(0x1ea)](_0x33b7f4,_0x24a5f9,_0x473df1,_0x5f212a,_0x37b9b2,_0x214006){var _0x293175=this;return function(_0x36ba6){var _0x481d4a=_0x37f9,_0x34f1e2=_0x37b9b2[_0x481d4a(0x1be)][_0x481d4a(0x16d)],_0x3bda85=_0x37b9b2[_0x481d4a(0x1be)][_0x481d4a(0x1c6)],_0xca88b=_0x37b9b2[_0x481d4a(0x1be)][_0x481d4a(0x22e)];_0x37b9b2[_0x481d4a(0x1be)][_0x481d4a(0x22e)]=_0x34f1e2,_0x37b9b2[_0x481d4a(0x1be)][_0x481d4a(0x1c6)]=typeof _0x5f212a==_0x481d4a(0x18d)?_0x5f212a:_0x36ba6,_0x33b7f4[_0x481d4a(0x200)](_0x293175[_0x481d4a(0x211)](_0x24a5f9,_0x473df1,_0x5f212a,_0x37b9b2,_0x214006)),_0x37b9b2['node']['parent']=_0xca88b,_0x37b9b2[_0x481d4a(0x1be)][_0x481d4a(0x1c6)]=_0x3bda85;};}[_0xb1f911(0x236)](_0x44e00d,_0x36bc5f,_0x1a6719,_0x129098,_0x15995a,_0x39ca6d,_0x34f4b5){var _0x4decc3=_0xb1f911,_0x49f0d4=this;return _0x36bc5f[_0x4decc3(0x1a0)+_0x15995a[_0x4decc3(0x197)]()]=!0x0,function(_0x45b13d){var _0x493e1e=_0x4decc3,_0x3894c0=_0x39ca6d[_0x493e1e(0x1be)][_0x493e1e(0x16d)],_0x24fcb1=_0x39ca6d[_0x493e1e(0x1be)][_0x493e1e(0x1c6)],_0x1b8c9c=_0x39ca6d[_0x493e1e(0x1be)][_0x493e1e(0x22e)];_0x39ca6d['node']['parent']=_0x3894c0,_0x39ca6d[_0x493e1e(0x1be)][_0x493e1e(0x1c6)]=_0x45b13d,_0x44e00d['push'](_0x49f0d4[_0x493e1e(0x211)](_0x1a6719,_0x129098,_0x15995a,_0x39ca6d,_0x34f4b5)),_0x39ca6d[_0x493e1e(0x1be)][_0x493e1e(0x22e)]=_0x1b8c9c,_0x39ca6d[_0x493e1e(0x1be)][_0x493e1e(0x1c6)]=_0x24fcb1;};}[_0xb1f911(0x211)](_0x104679,_0x1a1b7f,_0x40baf1,_0x487d7b,_0x551fdd){var _0x5d6314=_0xb1f911,_0x1b42e9=this;_0x551fdd||(_0x551fdd=function(_0x4d7357,_0x111c8a){return _0x4d7357[_0x111c8a];});var _0x354501=_0x40baf1[_0x5d6314(0x197)](),_0x1a9187=_0x487d7b[_0x5d6314(0x1cb)]||{},_0x4fd4a6=_0x487d7b['depth'],_0x4f5a86=_0x487d7b[_0x5d6314(0x20e)];try{var _0xa03b2f=this[_0x5d6314(0x1ff)](_0x104679),_0x13e227=_0x354501;_0xa03b2f&&_0x13e227[0x0]==='\\x27'&&(_0x13e227=_0x13e227[_0x5d6314(0x1eb)](0x1,_0x13e227['length']-0x2));var _0x4b44e5=_0x487d7b[_0x5d6314(0x1cb)]=_0x1a9187[_0x5d6314(0x1a0)+_0x13e227];_0x4b44e5&&(_0x487d7b['depth']=_0x487d7b[_0x5d6314(0x1cc)]+0x1),_0x487d7b['isExpressionToEvaluate']=!!_0x4b44e5;var _0x14cfb8=typeof _0x40baf1==_0x5d6314(0x1ba),_0x1eb278={'name':_0x14cfb8||_0xa03b2f?_0x354501:this['_propertyName'](_0x354501)};if(_0x14cfb8&&(_0x1eb278[_0x5d6314(0x1ba)]=!0x0),!(_0x1a1b7f===_0x5d6314(0x1d2)||_0x1a1b7f===_0x5d6314(0x231))){var _0x1410db=this[_0x5d6314(0x205)](_0x104679,_0x40baf1);if(_0x1410db&&(_0x1410db[_0x5d6314(0x223)]&&(_0x1eb278[_0x5d6314(0x175)]=!0x0),_0x1410db[_0x5d6314(0x1a3)]&&!_0x4b44e5&&!_0x487d7b[_0x5d6314(0x16c)]))return _0x1eb278[_0x5d6314(0x186)]=!0x0,this['_processTreeNodeResult'](_0x1eb278,_0x487d7b),_0x1eb278;}var _0x4aa0bc;try{_0x4aa0bc=_0x551fdd(_0x104679,_0x40baf1);}catch(_0x115f7e){return _0x1eb278={'name':_0x354501,'type':_0x5d6314(0x1b9),'error':_0x115f7e[_0x5d6314(0x179)]},this['_processTreeNodeResult'](_0x1eb278,_0x487d7b),_0x1eb278;}var _0x313d2f=this[_0x5d6314(0x238)](_0x4aa0bc),_0x3bcfc4=this[_0x5d6314(0x20a)](_0x313d2f);if(_0x1eb278[_0x5d6314(0x23d)]=_0x313d2f,_0x3bcfc4)this[_0x5d6314(0x19e)](_0x1eb278,_0x487d7b,_0x4aa0bc,function(){var _0x3fb5a9=_0x5d6314;_0x1eb278[_0x3fb5a9(0x1c8)]=_0x4aa0bc['valueOf'](),!_0x4b44e5&&_0x1b42e9['_capIfString'](_0x313d2f,_0x1eb278,_0x487d7b,{});});else{var _0x1db0ab=_0x487d7b['autoExpand']&&_0x487d7b[_0x5d6314(0x202)]<_0x487d7b[_0x5d6314(0x17c)]&&_0x487d7b[_0x5d6314(0x180)][_0x5d6314(0x240)](_0x4aa0bc)<0x0&&_0x313d2f!==_0x5d6314(0x213)&&_0x487d7b[_0x5d6314(0x1f9)]<_0x487d7b[_0x5d6314(0x1c3)];_0x1db0ab||_0x487d7b[_0x5d6314(0x202)]<_0x4fd4a6||_0x4b44e5?(this[_0x5d6314(0x225)](_0x1eb278,_0x4aa0bc,_0x487d7b,_0x4b44e5||{}),this['_additionalMetadata'](_0x4aa0bc,_0x1eb278)):this[_0x5d6314(0x19e)](_0x1eb278,_0x487d7b,_0x4aa0bc,function(){var _0x5c84a2=_0x5d6314;_0x313d2f===_0x5c84a2(0x1f7)||_0x313d2f==='undefined'||(delete _0x1eb278[_0x5c84a2(0x1c8)],_0x1eb278[_0x5c84a2(0x171)]=!0x0);});}return _0x1eb278;}finally{_0x487d7b['expressionsToEvaluate']=_0x1a9187,_0x487d7b[_0x5d6314(0x1cc)]=_0x4fd4a6,_0x487d7b[_0x5d6314(0x20e)]=_0x4f5a86;}}[_0xb1f911(0x20f)](_0xf039ee,_0x53ba63,_0x34a804,_0x12aac6){var _0xab6395=_0xb1f911,_0x1131d8=_0x12aac6[_0xab6395(0x1b1)]||_0x34a804[_0xab6395(0x1b1)];if((_0xf039ee===_0xab6395(0x1c2)||_0xf039ee===_0xab6395(0x1a9))&&_0x53ba63['value']){let _0x173438=_0x53ba63['value'][_0xab6395(0x194)];_0x34a804[_0xab6395(0x162)]+=_0x173438,_0x34a804[_0xab6395(0x162)]>_0x34a804[_0xab6395(0x1cd)]?(_0x53ba63[_0xab6395(0x171)]='',delete _0x53ba63[_0xab6395(0x1c8)]):_0x173438>_0x1131d8&&(_0x53ba63[_0xab6395(0x171)]=_0x53ba63[_0xab6395(0x1c8)][_0xab6395(0x1eb)](0x0,_0x1131d8),delete _0x53ba63[_0xab6395(0x1c8)]);}}[_0xb1f911(0x1ff)](_0x24f416){var _0x2f10d3=_0xb1f911;return!!(_0x24f416&&_0x567390[_0x2f10d3(0x1e8)]&&this[_0x2f10d3(0x229)](_0x24f416)===_0x2f10d3(0x21a)&&_0x24f416[_0x2f10d3(0x1a2)]);}[_0xb1f911(0x20b)](_0x2d96b1){var _0x4a58a9=_0xb1f911;if(_0x2d96b1[_0x4a58a9(0x18a)](/^\\d+$/))return _0x2d96b1;var _0x24baec;try{_0x24baec=JSON[_0x4a58a9(0x206)](''+_0x2d96b1);}catch{_0x24baec='\\x22'+this[_0x4a58a9(0x229)](_0x2d96b1)+'\\x22';}return _0x24baec[_0x4a58a9(0x18a)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x24baec=_0x24baec['substr'](0x1,_0x24baec['length']-0x2):_0x24baec=_0x24baec[_0x4a58a9(0x1d3)](/'/g,'\\x5c\\x27')[_0x4a58a9(0x1d3)](/\\\\\"/g,'\\x22')[_0x4a58a9(0x1d3)](/(^\"|\"$)/g,'\\x27'),_0x24baec;}['_processTreeNodeResult'](_0x18ece6,_0x530036,_0xdcd7c0,_0x1c521a){var _0x107af6=_0xb1f911;this[_0x107af6(0x1e0)](_0x18ece6,_0x530036),_0x1c521a&&_0x1c521a(),this['_additionalMetadata'](_0xdcd7c0,_0x18ece6),this[_0x107af6(0x1f2)](_0x18ece6,_0x530036);}[_0xb1f911(0x1e0)](_0x1ef29a,_0x16c47a){var _0xc14d28=_0xb1f911;this['_setNodeId'](_0x1ef29a,_0x16c47a),this[_0xc14d28(0x15b)](_0x1ef29a,_0x16c47a),this[_0xc14d28(0x237)](_0x1ef29a,_0x16c47a),this[_0xc14d28(0x176)](_0x1ef29a,_0x16c47a);}['_setNodeId'](_0x25038a,_0x59cbd0){}['_setNodeQueryPath'](_0x4c442f,_0x9fdd00){}[_0xb1f911(0x165)](_0x32c53a,_0x1751d6){}[_0xb1f911(0x189)](_0x273b50){var _0x18c8ab=_0xb1f911;return _0x273b50===this[_0x18c8ab(0x19c)];}[_0xb1f911(0x1f2)](_0x49c7d5,_0x115699){var _0x11c3b5=_0xb1f911;this['_setNodeLabel'](_0x49c7d5,_0x115699),this[_0x11c3b5(0x22c)](_0x49c7d5),_0x115699[_0x11c3b5(0x173)]&&this[_0x11c3b5(0x23c)](_0x49c7d5),this[_0x11c3b5(0x16f)](_0x49c7d5,_0x115699),this[_0x11c3b5(0x1d6)](_0x49c7d5,_0x115699),this[_0x11c3b5(0x166)](_0x49c7d5);}['_additionalMetadata'](_0x4c44de,_0x56206c){var _0x551f2c=_0xb1f911;let _0x343de3;try{_0x567390['console']&&(_0x343de3=_0x567390[_0x551f2c(0x17b)][_0x551f2c(0x1a5)],_0x567390[_0x551f2c(0x17b)][_0x551f2c(0x1a5)]=function(){}),_0x4c44de&&typeof _0x4c44de[_0x551f2c(0x194)]=='number'&&(_0x56206c[_0x551f2c(0x194)]=_0x4c44de['length']);}catch{}finally{_0x343de3&&(_0x567390[_0x551f2c(0x17b)][_0x551f2c(0x1a5)]=_0x343de3);}if(_0x56206c[_0x551f2c(0x23d)]===_0x551f2c(0x18d)||_0x56206c[_0x551f2c(0x23d)]===_0x551f2c(0x217)){if(isNaN(_0x56206c[_0x551f2c(0x1c8)]))_0x56206c[_0x551f2c(0x181)]=!0x0,delete _0x56206c['value'];else switch(_0x56206c[_0x551f2c(0x1c8)]){case Number[_0x551f2c(0x218)]:_0x56206c[_0x551f2c(0x1d5)]=!0x0,delete _0x56206c[_0x551f2c(0x1c8)];break;case Number['NEGATIVE_INFINITY']:_0x56206c[_0x551f2c(0x1a4)]=!0x0,delete _0x56206c[_0x551f2c(0x1c8)];break;case 0x0:this[_0x551f2c(0x15e)](_0x56206c[_0x551f2c(0x1c8)])&&(_0x56206c[_0x551f2c(0x1b5)]=!0x0);break;}}else _0x56206c[_0x551f2c(0x23d)]==='function'&&typeof _0x4c44de[_0x551f2c(0x19a)]=='string'&&_0x4c44de['name']&&_0x56206c['name']&&_0x4c44de[_0x551f2c(0x19a)]!==_0x56206c[_0x551f2c(0x19a)]&&(_0x56206c['funcName']=_0x4c44de[_0x551f2c(0x19a)]);}[_0xb1f911(0x15e)](_0x1c548f){var _0x5007c3=_0xb1f911;return 0x1/_0x1c548f===Number[_0x5007c3(0x160)];}[_0xb1f911(0x23c)](_0xa6889c){var _0x1eb637=_0xb1f911;!_0xa6889c[_0x1eb637(0x220)]||!_0xa6889c[_0x1eb637(0x220)]['length']||_0xa6889c[_0x1eb637(0x23d)]==='array'||_0xa6889c[_0x1eb637(0x23d)]===_0x1eb637(0x1e8)||_0xa6889c['type']===_0x1eb637(0x1a6)||_0xa6889c[_0x1eb637(0x220)]['sort'](function(_0x2ae99d,_0xe70122){var _0x5a3afc=_0x1eb637,_0x1b05c8=_0x2ae99d[_0x5a3afc(0x19a)]['toLowerCase'](),_0x4e98d2=_0xe70122[_0x5a3afc(0x19a)][_0x5a3afc(0x1ab)]();return _0x1b05c8<_0x4e98d2?-0x1:_0x1b05c8>_0x4e98d2?0x1:0x0;});}[_0xb1f911(0x16f)](_0x5f0259,_0x1d6997){var _0x14580c=_0xb1f911;if(!(_0x1d6997['noFunctions']||!_0x5f0259['props']||!_0x5f0259['props'][_0x14580c(0x194)])){for(var _0x1d5d1a=[],_0x32aad4=[],_0x3394c4=0x0,_0x5796d8=_0x5f0259['props'][_0x14580c(0x194)];_0x3394c4<_0x5796d8;_0x3394c4++){var _0x3742e5=_0x5f0259[_0x14580c(0x220)][_0x3394c4];_0x3742e5['type']===_0x14580c(0x213)?_0x1d5d1a[_0x14580c(0x200)](_0x3742e5):_0x32aad4[_0x14580c(0x200)](_0x3742e5);}if(!(!_0x32aad4['length']||_0x1d5d1a['length']<=0x1)){_0x5f0259[_0x14580c(0x220)]=_0x32aad4;var _0x3eb596={'functionsNode':!0x0,'props':_0x1d5d1a};this[_0x14580c(0x159)](_0x3eb596,_0x1d6997),this[_0x14580c(0x165)](_0x3eb596,_0x1d6997),this[_0x14580c(0x22c)](_0x3eb596),this['_setNodePermissions'](_0x3eb596,_0x1d6997),_0x3eb596['id']+='\\x20f',_0x5f0259['props'][_0x14580c(0x1d7)](_0x3eb596);}}}['_addLoadNode'](_0x485a2c,_0x20c9af){}[_0xb1f911(0x22c)](_0x1823bd){}[_0xb1f911(0x18e)](_0x2fa127){var _0x1cb6f0=_0xb1f911;return Array[_0x1cb6f0(0x222)](_0x2fa127)||typeof _0x2fa127==_0x1cb6f0(0x21b)&&this['_objectToString'](_0x2fa127)===_0x1cb6f0(0x21f);}[_0xb1f911(0x176)](_0x33d96c,_0x298aa0){}[_0xb1f911(0x166)](_0x4bf357){var _0x15dc7f=_0xb1f911;delete _0x4bf357['_hasSymbolPropertyOnItsPath'],delete _0x4bf357[_0x15dc7f(0x22f)],delete _0x4bf357[_0x15dc7f(0x1b2)];}[_0xb1f911(0x237)](_0x53f2b4,_0xd10a){}}let _0x315eed=new _0x2030f6(),_0x2dcb61={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x2b5e84={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5e64d3(_0x5eba64,_0x5253d2,_0x426ae5,_0x244bbd,_0x51d42c,_0x559519){var _0x3677a2=_0xb1f911;let _0x34804,_0xd61c91;try{_0xd61c91=_0x4e4d0c(),_0x34804=_0x3365fd[_0x5253d2],!_0x34804||_0xd61c91-_0x34804['ts']>0x1f4&&_0x34804[_0x3677a2(0x1e5)]&&_0x34804[_0x3677a2(0x163)]/_0x34804[_0x3677a2(0x1e5)]<0x64?(_0x3365fd[_0x5253d2]=_0x34804={'count':0x0,'time':0x0,'ts':_0xd61c91},_0x3365fd['hits']={}):_0xd61c91-_0x3365fd[_0x3677a2(0x1a1)]['ts']>0x32&&_0x3365fd[_0x3677a2(0x1a1)][_0x3677a2(0x1e5)]&&_0x3365fd[_0x3677a2(0x1a1)]['time']/_0x3365fd['hits'][_0x3677a2(0x1e5)]<0x64&&(_0x3365fd[_0x3677a2(0x1a1)]={});let _0x283170=[],_0x211787=_0x34804[_0x3677a2(0x16b)]||_0x3365fd['hits'][_0x3677a2(0x16b)]?_0x2b5e84:_0x2dcb61,_0x559f4b=_0x21eeb5=>{var _0x414047=_0x3677a2;let _0x29dbc6={};return _0x29dbc6[_0x414047(0x220)]=_0x21eeb5[_0x414047(0x220)],_0x29dbc6['elements']=_0x21eeb5['elements'],_0x29dbc6['strLength']=_0x21eeb5[_0x414047(0x1b1)],_0x29dbc6[_0x414047(0x1cd)]=_0x21eeb5['totalStrLength'],_0x29dbc6[_0x414047(0x1c3)]=_0x21eeb5[_0x414047(0x1c3)],_0x29dbc6[_0x414047(0x17c)]=_0x21eeb5[_0x414047(0x17c)],_0x29dbc6[_0x414047(0x173)]=!0x1,_0x29dbc6['noFunctions']=!_0x3c03a0,_0x29dbc6['depth']=0x1,_0x29dbc6[_0x414047(0x202)]=0x0,_0x29dbc6[_0x414047(0x244)]='root_exp_id',_0x29dbc6[_0x414047(0x1bf)]=_0x414047(0x1fd),_0x29dbc6['autoExpand']=!0x0,_0x29dbc6[_0x414047(0x180)]=[],_0x29dbc6['autoExpandPropertyCount']=0x0,_0x29dbc6[_0x414047(0x16c)]=!0x0,_0x29dbc6[_0x414047(0x162)]=0x0,_0x29dbc6[_0x414047(0x1be)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x29dbc6;};for(var _0x5c64aa=0x0;_0x5c64aa<_0x51d42c[_0x3677a2(0x194)];_0x5c64aa++)_0x283170[_0x3677a2(0x200)](_0x315eed[_0x3677a2(0x225)]({'timeNode':_0x5eba64==='time'||void 0x0},_0x51d42c[_0x5c64aa],_0x559f4b(_0x211787),{}));if(_0x5eba64===_0x3677a2(0x192)){let _0x327c85=Error[_0x3677a2(0x1ad)];try{Error[_0x3677a2(0x1ad)]=0x1/0x0,_0x283170[_0x3677a2(0x200)](_0x315eed[_0x3677a2(0x225)]({'stackNode':!0x0},new Error()[_0x3677a2(0x232)],_0x559f4b(_0x211787),{'strLength':0x1/0x0}));}finally{Error[_0x3677a2(0x1ad)]=_0x327c85;}}return{'method':_0x3677a2(0x20d),'version':_0x2ff00e,'args':[{'ts':_0x426ae5,'session':_0x244bbd,'args':_0x283170,'id':_0x5253d2,'context':_0x559519}]};}catch(_0xf340d5){return{'method':_0x3677a2(0x20d),'version':_0x2ff00e,'args':[{'ts':_0x426ae5,'session':_0x244bbd,'args':[{'type':'unknown','error':_0xf340d5&&_0xf340d5[_0x3677a2(0x179)]}],'id':_0x5253d2,'context':_0x559519}]};}finally{try{if(_0x34804&&_0xd61c91){let _0x3d49d7=_0x4e4d0c();_0x34804['count']++,_0x34804[_0x3677a2(0x163)]+=_0x4c845b(_0xd61c91,_0x3d49d7),_0x34804['ts']=_0x3d49d7,_0x3365fd[_0x3677a2(0x1a1)]['count']++,_0x3365fd[_0x3677a2(0x1a1)]['time']+=_0x4c845b(_0xd61c91,_0x3d49d7),_0x3365fd[_0x3677a2(0x1a1)]['ts']=_0x3d49d7,(_0x34804[_0x3677a2(0x1e5)]>0x32||_0x34804[_0x3677a2(0x163)]>0x64)&&(_0x34804[_0x3677a2(0x16b)]=!0x0),(_0x3365fd['hits'][_0x3677a2(0x1e5)]>0x3e8||_0x3365fd[_0x3677a2(0x1a1)][_0x3677a2(0x163)]>0x12c)&&(_0x3365fd['hits'][_0x3677a2(0x16b)]=!0x0);}}catch{}}}return _0x5e64d3;}((_0x94bae4,_0x4df2fd,_0x23d460,_0x5c28b4,_0x322b60,_0x2b98b1,_0x405486,_0x371ac0,_0x58cbe2)=>{var _0xc21f1a=_0x5e3da9;if(_0x94bae4['_console_ninja'])return _0x94bae4[_0xc21f1a(0x22d)];if(!Y(_0x94bae4,_0x371ac0,_0x322b60))return _0x94bae4['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x94bae4['_console_ninja'];let _0x15783b=R(_0x94bae4),_0x5de424=_0x15783b[_0xc21f1a(0x1c7)],_0xe04fdb=_0x15783b[_0xc21f1a(0x193)],_0x2c9f45=_0x15783b[_0xc21f1a(0x1ac)],_0x162664={'hits':{},'ts':{}},_0x104432=Q(_0x94bae4,_0x58cbe2,_0x162664,_0x2b98b1),_0x5bbf60=_0x303056=>{_0x162664['ts'][_0x303056]=_0xe04fdb();},_0x604dd9=(_0x2fa10a,_0x2a5a67)=>{var _0x988ebc=_0xc21f1a;let _0x169736=_0x162664['ts'][_0x2a5a67];if(delete _0x162664['ts'][_0x2a5a67],_0x169736){let _0x5105de=_0x5de424(_0x169736,_0xe04fdb());_0x4ea192(_0x104432(_0x988ebc(0x163),_0x2fa10a,_0x2c9f45(),_0x391a9b,[_0x5105de],_0x2a5a67));}},_0x2431f5=_0x4ac706=>_0x4348d4=>{var _0x5ee3a2=_0xc21f1a;try{_0x5bbf60(_0x4348d4),_0x4ac706(_0x4348d4);}finally{_0x94bae4[_0x5ee3a2(0x17b)][_0x5ee3a2(0x163)]=_0x4ac706;}},_0x264c92=_0x5388ca=>_0x2daf11=>{var _0x246c2f=_0xc21f1a;try{let [_0x314534,_0x47149e]=_0x2daf11[_0x246c2f(0x158)](_0x246c2f(0x1ca));_0x604dd9(_0x47149e,_0x314534),_0x5388ca(_0x314534);}finally{_0x94bae4[_0x246c2f(0x17b)][_0x246c2f(0x1b4)]=_0x5388ca;}};_0x94bae4[_0xc21f1a(0x22d)]={'consoleLog':(_0x81c22b,_0x24f0d1)=>{var _0x9bacc0=_0xc21f1a;_0x94bae4[_0x9bacc0(0x17b)][_0x9bacc0(0x20d)]['name']!=='disabledLog'&&_0x4ea192(_0x104432(_0x9bacc0(0x20d),_0x81c22b,_0x2c9f45(),_0x391a9b,_0x24f0d1));},'consoleTrace':(_0x1511d6,_0x24f6ad)=>{var _0x408af0=_0xc21f1a;_0x94bae4[_0x408af0(0x17b)][_0x408af0(0x20d)]['name']!==_0x408af0(0x169)&&_0x4ea192(_0x104432('trace',_0x1511d6,_0x2c9f45(),_0x391a9b,_0x24f6ad));},'consoleTime':()=>{var _0x58d9d2=_0xc21f1a;_0x94bae4[_0x58d9d2(0x17b)][_0x58d9d2(0x163)]=_0x2431f5(_0x94bae4[_0x58d9d2(0x17b)]['time']);},'consoleTimeEnd':()=>{var _0x5e77c0=_0xc21f1a;_0x94bae4[_0x5e77c0(0x17b)]['timeEnd']=_0x264c92(_0x94bae4['console'][_0x5e77c0(0x1b4)]);},'autoLog':(_0x5af2be,_0x515d4f)=>{var _0x2d384d=_0xc21f1a;_0x4ea192(_0x104432(_0x2d384d(0x20d),_0x515d4f,_0x2c9f45(),_0x391a9b,[_0x5af2be]));},'autoLogMany':(_0x26288f,_0x410008)=>{var _0x2f1cd7=_0xc21f1a;_0x4ea192(_0x104432(_0x2f1cd7(0x20d),_0x26288f,_0x2c9f45(),_0x391a9b,_0x410008));},'autoTrace':(_0x43d651,_0x1e137f)=>{var _0x176a14=_0xc21f1a;_0x4ea192(_0x104432(_0x176a14(0x192),_0x1e137f,_0x2c9f45(),_0x391a9b,[_0x43d651]));},'autoTraceMany':(_0x1bf500,_0x2027d8)=>{_0x4ea192(_0x104432('trace',_0x1bf500,_0x2c9f45(),_0x391a9b,_0x2027d8));},'autoTime':(_0x253243,_0x429db8,_0x5916e2)=>{_0x5bbf60(_0x5916e2);},'autoTimeEnd':(_0x517258,_0x502a3d,_0x403a21)=>{_0x604dd9(_0x502a3d,_0x403a21);},'coverage':_0x4b9b41=>{var _0x385397=_0xc21f1a;_0x4ea192({'method':_0x385397(0x1db),'version':_0x2b98b1,'args':[{'id':_0x4b9b41}]});}};let _0x4ea192=J(_0x94bae4,_0x4df2fd,_0x23d460,_0x5c28b4,_0x322b60),_0x391a9b=_0x94bae4[_0xc21f1a(0x228)];return _0x94bae4['_console_ninja'];})(globalThis,_0x5e3da9(0x1d4),'37911',_0x5e3da9(0x1c9),_0x5e3da9(0x1c4),_0x5e3da9(0x242),_0x5e3da9(0x1c1),_0x5e3da9(0x1ec),_0x5e3da9(0x1ef));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/objects/storage.js":
/*!********************************!*\
  !*** ./src/objects/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const storage = [];



/***/ }),

/***/ "./src/objects/task.js":
/*!*****************************!*\
  !*** ./src/objects/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, notes, tags, checklist, state) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.tags = tags;
        this.checklist = checklist;
        this.state = state;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_inputCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inputCard */ "./src/components/inputCard.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_taskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/taskList */ "./src/components/taskList.js");
/* harmony import */ var _modules_renderTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderTask */ "./src/modules/renderTask.js");
/* harmony import */ var _modules_removeTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/removeTask */ "./src/modules/removeTask.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
//MODULE IMPORT SECTION









//DECLARATION SECTION

const main = document.querySelector('.main');

const content = document.createElement('div');
content.classList.add('content');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn', 'btn', 'btn-primary');
addTaskBtn.textContent = 'New task';

window.removeTask = _modules_removeTask__WEBPACK_IMPORTED_MODULE_5__.removeTask;

// APPPEND SECTION

main.appendChild(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.sidebar);
main.appendChild(content);
content.appendChild(addTaskBtn);
content.appendChild(_components_taskList__WEBPACK_IMPORTED_MODULE_3__.taskList);


// EVENT LISTENER SECTION

main.addEventListener('click', function(event){

    let targetElement = event.target;
    const submitBtnId = 'task-submit-btn';
    const backBtnId = 'task-back-btn';

    if (targetElement.id === submitBtnId) {
        const taskSubmitBtn = document.querySelector('#task-submit-btn');
        const taskNameText = document.querySelector('#task-name').value;
        const taskDescriptionText = document.querySelector('#task-description').value;
        const taskDatePicked = document.querySelector('#datePicker').value;
        const taskPriorityPicked = document.querySelector('#priorityPicker').value;
        const taskFormElement = document.querySelector('#add-task-form');

        taskSubmitBtn.addEventListener('click', (0,_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(taskNameText, taskDescriptionText, taskDatePicked, taskPriorityPicked, '', '', ''));
        taskSubmitBtn.addEventListener('click', _modules_renderTask__WEBPACK_IMPORTED_MODULE_4__.renderTask);

        taskFormElement.reset();
        _components_inputCard__WEBPACK_IMPORTED_MODULE_0__.inputCard.remove();
    }

    if (targetElement.id === backBtnId) {
        _components_inputCard__WEBPACK_IMPORTED_MODULE_0__.inputCard.remove();
    }

}, true);

addTaskBtn.addEventListener('click', function() {
    content.appendChild(_components_inputCard__WEBPACK_IMPORTED_MODULE_0__.inputCard);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVtRDtBQUNEO0FBQ0g7QUFDRTtBQUNDO0FBQ0E7QUFDOUI7O0FBRXBCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwyREFBVTs7QUFFOUI7O0FBRUEsaUJBQWlCLHdEQUFPO0FBQ3hCO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVE7OztBQUc1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELCtEQUFVO0FBQzFELGdEQUFnRCwyREFBVTs7QUFFMUQ7QUFDQSxRQUFRLDREQUFTO0FBQ2pCOztBQUVBO0FBQ0EsUUFBUSw0REFBUztBQUNqQjs7QUFFQSxDQUFDOztBQUVEO0FBQ0Esd0JBQXdCLDREQUFTO0FBQ2pDLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9pbnB1dENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLm1haW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xufVxuXG4uc2lkZWJhci1jb21wb25lbnQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLm5hdmJhci1jb21wb25lbnQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuLmNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuLnNpZGViYXItbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3RhdHVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0YXR1cy1jaXJjbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLyogRklYIE5BTUlORyBDT05WRU5USU9OIEFORCBTVFVGRiovXG5cbi50YWJsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogNTBweDtcbiAgICB3aWR0aDogODB2dztcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcbn1cblxuI2xpYnJhcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xufVxuXG4udGFzay1yb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgzMywgMzcsIDQxLCAwLjM1Nik7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgzMywgMzcsIDQxLCAwLjM1Nik7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMzMsIDM3LCA0MSwgMC4zNTYpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUEsbUNBQW1DOztBQUVuQztJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QywrQ0FBK0M7SUFDL0MsZ0RBQWdEO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnI7XFxufVxcblxcbi5zaWRlYmFyLWNvbXBvbmVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLm5hdmJhci1jb21wb25lbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc2lkZWJhci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc3RhdHVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGF0dXMtY2lyY2xlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLyogRklYIE5BTUlORyBDT05WRU5USU9OIEFORCBTVFVGRiovXFxuXFxuLnRhYmxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xcbiAgICB3aWR0aDogODB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzNywgNDEpO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi50YXNrLXJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgzMywgMzcsIDQxLCAwLjM1Nik7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMzMsIDM3LCA0MSwgMC4zNTYpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgzMywgMzcsIDQxLCAwLjM1Nik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbnB1dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuaW5wdXRDYXJkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNhcmQnKTtcblxuaW5wdXRDYXJkLmlubmVySFRNTCA9IGBcbjxmb3JtIGlkPVwiYWRkLXRhc2stZm9ybVwiPlxuPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlRhc2sgbmFtZTwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0YXNrLW5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5UYXNrIGRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRhc2stZGVzY3JpcHRpb25cIj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsIGZvcj1cImRhdGVQaWNrZXJcIj5FbnRlciBhIGR1ZSBkYXRlPC9sYWJlbD5cbiAgPGlucHV0IGlkPVwiZGF0ZVBpY2tlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImRhdGVcIiAvPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWItM1wiPlxuICA8bGFiZWwgZm9yPVwicHJpb3JpdHlQaWNrZXJcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5TZWxlY3QgYSBwcmlvcml0eSBsZXZlbDwvbGFiZWw+XG4gIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCIgaWQ9XCJwcmlvcml0eVBpY2tlclwiPlxuICAgIDxvcHRpb24gc2VsZWN0ZWQ+IDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+U3VwZXIgaW1wb3J0YW50PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5GYWlybHkgaW1wb3J0YW50PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5JbXBvcnRhbnQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPk5vdCB0aGF0IGltcG9ydGFudDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+Tm8gaW1wb3J0YW5jZTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvZGl2PlxuPC9mb3JtPlxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGlkPVwidGFzay1zdWJtaXQtYnRuXCI+QWRkIHRhc2s8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGlkPVwidGFzay1iYWNrLWJ0blwiPkJhY2s8L2J1dHRvbj5gO1xuXG5leHBvcnQge2lucHV0Q2FyZH07IiwiY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29tcG9uZW50Jyk7XG5cbnNpZGViYXIuaW5uZXJIVE1MID0gYFxuPGRpdiBjbGFzcz1cInNpZGViYXItbGlua3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci10aXRsZS1jb250YWluZXJcIj48aDEgY2xhc3M9XCJzaWRlYmFyLXRpdGxlXCI+Y2hlY2t5LmlvPC9oMT48L2Rpdj5cbiAgICA8YSBocmVmPVwiXCI+SE9NRTwvYT5cbiAgICA8YSBocmVmPVwiXCI+UFJPSkVDVFM8L2E+XG4gICAgPGEgaHJlZj1cIlwiPk5PVEVTPC9hPlxuICAgIDxhIGhyZWY9XCJcIj5VUENPTUlORzwvYT5cbjwvZGl2PmBcblxuZXhwb3J0IHsgc2lkZWJhciB9OyIsImNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3RhYmxlJyk7XG5cbnRhc2tMaXN0LmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8cD5Cb29rIE5hbWU8L3A+XG4gICAgPHA+Qm9vayBBdXRob3I8L3A+XG4gICAgPHA+UGFnZXM8L3A+XG4gICAgPHA+U3RhdHVzPC9wPlxuICAgIDxwPkRlbGV0ZTwvcD5cbjwvZGl2PlxuPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PmA7XG5cbmV4cG9ydCB7dGFza0xpc3R9OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vb2JqZWN0cy90YXNrLmpzXCI7XG5pbXBvcnQgeyBzdG9yZVRhc2sgfSBmcm9tIFwiLi9zdG9yZVRhc2suanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgdGFncywgY2hlY2tsaXN0LCBzdGF0ZSkge1xuXG4gICAgaWYgKGR1ZURhdGUgPT0gJycpIHtcbiAgICAgICAgZHVlRGF0ZSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAocHJpb3JpdHkgPT0gJycpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKG5vdGVzID09ICcnKSB7XG4gICAgICAgIG5vdGVzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRhZ3MgPT0gJycpIHtcbiAgICAgICAgdGFncyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChjaGVja2xpc3QgPT0gJycpIHtcbiAgICAgICAgY2hlY2tsaXN0ID0gW107XG4gICAgfVxuXG4gICAgc3RhdGUgPSBmYWxzZTtcblxuICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHRhZ3MsIGNoZWNrbGlzdCwgc3RhdGUpO1xuICAgIHN0b3JlVGFzayh0YXNrKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xuXG5cblxuIiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9vYmplY3RzL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHJlbmRlclRhc2sgfSBmcm9tIFwiLi9yZW5kZXJUYXNrXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICBzdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmVuZGVyVGFzaygpO1xufVxuXG5leHBvcnQgeyByZW1vdmVUYXNrIH07IiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9vYmplY3RzL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFza0xpc3RcIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFzaygpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1jb250YWluZXInKTtcbiAgICB0YXNrQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gc3RvcmFnZVtpXTtcbiAgICAgICAgY29uc3QgdGFibGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFibGVJdGVtLmNsYXNzTGlzdCA9IFwidGFzay1yb3dcIjtcbiAgICAgICAgdGFibGVJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+JHt0YXNrLnRpdGxlfTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLnRhZ3N9PC9wPlxuICAgICAgICA8cD4ke3Rhc2sucHJpb3JpdHl9PC9wPlxuICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L3A+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIiBpZD1cInRhc2stcmVtb3ZlLWJ0blwiIG9uY2xpY2s9XCJyZW1vdmVUYXNrKCR7aX0pXCI+UmVtb3ZlPC9idXR0b24+YDtcbiAgICAgICAgICAgIFxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YWJsZUl0ZW0pO1xuICAgICAgICB0YXNrQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZUl0ZW0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyVGFzayB9O1xuIiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL29iamVjdHMvc3RvcmFnZS5qcyc7XG5cbmZ1bmN0aW9uIHN0b3JlVGFzayh0YXNrKSB7XG4gICAgc3RvcmFnZS5wdXNoKHRhc2spO1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGE1OWFiMTQ3XzBgLHN0b3JhZ2UpKTtcbn1cblxuZXhwb3J0IHsgc3RvcmVUYXNrIH07XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7ZnVuY3Rpb24gXzB4MmI5Migpe3ZhciBfMHgxNTlkNzA9Wydsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ25vZGUnLCdyb290RXhwcmVzc2lvbicsJ3NlbmQnLCcxNjkzMzUzMDk3NTQ2Jywnc3RyaW5nJywnYXV0b0V4cGFuZExpbWl0Jywnd2VicGFjaycsJzI4a3VFaXhWJywnaW5kZXgnLCdlbGFwc2VkJywndmFsdWUnLFxcXCIvaG9tZS9kdWFsdm0vLnZzY29kZS9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4yMDYvbm9kZV9tb2R1bGVzXFxcIiwnOmxvZ1BvaW50SWQ6JywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnZGVwdGgnLCd0b3RhbFN0ckxlbmd0aCcsJ25leHQuanMnLCdvbm1lc3NhZ2UnLCdjb25jYXQnLCdhc3RybycsJ2FycmF5JywncmVwbGFjZScsJzEyNy4wLjAuMScsJ3Bvc2l0aXZlSW5maW5pdHknLCdfYWRkTG9hZE5vZGUnLCd1bnNoaWZ0JywncGF0aFRvRmlsZVVSTCcsJ19kaXNwb3NlV2Vic29ja2V0JywnX2luQnJvd3NlcicsJ2NvdmVyYWdlJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ1xcXFx4MjBzZXJ2ZXInLCdhdXRvRXhwYW5kJywncG9wJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ2Nsb3NlJywnW29iamVjdFxcXFx4MjBTZXRdJywnQm9vbGVhbicsJzNDSHZOU1UnLCdjb3VudCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnMTY3MDE0c0RSSWZnJywnTWFwJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdfYWRkUHJvcGVydHknLCdzdWJzdHInLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiWHVidW50dVxcXCIsXFxcIjEwLjAuMi4xNVxcXCJdLCd2YWx1ZU9mJywnaG9zdG5hbWUnLCcnLCdfV2ViU29ja2V0Q2xhc3MnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ2hhc093blByb3BlcnR5JywndGhlbicsJzI0ODczNjM2dVFQR0lzJywnbnVsbCcsJ3BvcnQnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ29uZXJyb3InLCdwcm9jZXNzJywnLi4uJywncm9vdF9leHAnLCdub2RlTW9kdWxlcycsJ19pc01hcCcsJ3B1c2gnLCd1cmwnLCdsZXZlbCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnZ2V0UHJvdG90eXBlT2YnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnc3RyaW5naWZ5JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCc1OTczMzMxTVV1SUtRJywnUmVnRXhwJywnX2lzUHJpbWl0aXZlVHlwZScsJ19wcm9wZXJ0eU5hbWUnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ2xvZycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdfY2FwSWZTdHJpbmcnLCdwcm90b3R5cGUnLCdfcHJvcGVydHknLCdvbmNsb3NlJywnZnVuY3Rpb24nLCdtZXRob2QnLCdob3N0JywnMzUxMzAzV01CWEZrJywnTnVtYmVyJywnUE9TSVRJVkVfSU5GSU5JVFknLCdpbmNsdWRlcycsJ1tvYmplY3RcXFxceDIwTWFwXScsJ29iamVjdCcsJ19XZWJTb2NrZXQnLCdnbG9iYWwnLCdtYXAnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3Byb3BzJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnaXNBcnJheScsJ3NldCcsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ3NlcmlhbGl6ZScsJzM1MDM0NTd2TWlrek4nLCdfU3ltYm9sJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ19vYmplY3RUb1N0cmluZycsJ3BlcmZvcm1hbmNlJywncGVyZl9ob29rcycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX2NvbnNvbGVfbmluamEnLCdwYXJlbnQnLCdfaGFzU2V0T25JdHNQYXRoJywnSFRNTEFsbENvbGxlY3Rpb24nLCdFcnJvcicsJ3N0YWNrJywnbnV4dCcsJ19jb25uZWN0aW5nJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX3R5cGUnLCdfd3MnLCdqb2luJywncmVtaXgnLCdfc29ydFByb3BzJywndHlwZScsJ2NhbGwnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2luZGV4T2YnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJzEuMC4wJywnX2Nvbm5lY3RlZCcsJ2V4cElkJywnQnVmZmVyJywnc3BsaXQnLCdfc2V0Tm9kZUlkJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ19udW1iZXJSZWdFeHAnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19pc05lZ2F0aXZlWmVybycsJ3BhdGgnLCdORUdBVElWRV9JTkZJTklUWScsJ19hbGxvd2VkVG9TZW5kJywnYWxsU3RyTGVuZ3RoJywndGltZScsJ19xdW90ZWRSZWdFeHAnLCdfc2V0Tm9kZUxhYmVsJywnX2NsZWFuTm9kZScsJ19wX25hbWUnLCdTeW1ib2wnLCdkaXNhYmxlZFRyYWNlJywnZGF0YScsJ3JlZHVjZUxpbWl0cycsJ3Jlc29sdmVHZXR0ZXJzJywnY3VycmVudCcsJ29ub3BlbicsJ19hZGRGdW5jdGlvbnNOb2RlJywnZGF0ZScsJ2NhcHBlZCcsJzhreE5hRmcnLCdzb3J0UHJvcHMnLCdfcmVnRXhwVG9TdHJpbmcnLCdzZXR0ZXInLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2lzU2V0JywnX3NvY2tldCcsJ21lc3NhZ2UnLCdXZWJTb2NrZXQnLCdjb25zb2xlJywnYXV0b0V4cGFuZE1heERlcHRoJywndmVyc2lvbnMnLCd3cy9pbmRleC5qcycsJzExSXJjWGpxJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ25hbicsJ3BhcnNlJywnZGVmYXVsdCcsJ3VucmVmJywnMTk5NDQ4NG95TG1JSCcsJ2dldHRlcicsJ3VuZGVmaW5lZCcsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2lzVW5kZWZpbmVkJywnbWF0Y2gnLCdsb2NhdGlvbicsJ2dldFdlYlNvY2tldENsYXNzJywnbnVtYmVyJywnX2lzQXJyYXknLCdfX2VzJysnTW9kdWxlJywnXFxcXHgyMGJyb3dzZXInLCdocnRpbWUnLCd0cmFjZScsJ3RpbWVTdGFtcCcsJ2xlbmd0aCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCd0b1N0cmluZycsJ19yZWNvbm5lY3RUaW1lb3V0JywnZW51bWVyYWJsZScsJ25hbWUnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfdW5kZWZpbmVkJywnNjY1MzE5MG9QY3FvcycsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdfcF8nLCdoaXRzJywnZm9yRWFjaCcsJ2dldCcsJ25lZ2F0aXZlSW5maW5pdHknLCdlcnJvcicsJ1NldCcsJ2Jvb2xlYW4nLCc1ZENCb1dFJywnU3RyaW5nJywnY29uc3RydWN0b3InLCd0b0xvd2VyQ2FzZScsJ25vdycsJ3N0YWNrVHJhY2VMaW1pdCcsJ3JlbG9hZCcsJ3dhcm4nLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ3N0ckxlbmd0aCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ3RpbWVFbmQnLCduZWdhdGl2ZVplcm8nLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnY2FwcGVkRWxlbWVudHMnLCd1bmtub3duJywnc3ltYm9sJywnYmlnaW50JywnY2F0Y2gnXTtfMHgyYjkyPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDE1OWQ3MDt9O3JldHVybiBfMHgyYjkyKCk7fXZhciBfMHg1ZTNkYTk9XzB4MzdmOTsoZnVuY3Rpb24oXzB4MjkyNzczLF8weDVlNzI5OCl7dmFyIF8weDNjNDY5OT1fMHgzN2Y5LF8weDMyZTJiOT1fMHgyOTI3NzMoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDVlNTJlNj0tcGFyc2VJbnQoXzB4M2M0Njk5KDB4MWU0KSkvMHgxKihwYXJzZUludChfMHgzYzQ2OTkoMHgxZTcpKS8weDIpKy1wYXJzZUludChfMHgzYzQ2OTkoMHgyMTYpKS8weDMqKHBhcnNlSW50KF8weDNjNDY5OSgweDFjNSkpLzB4NCkrcGFyc2VJbnQoXzB4M2M0Njk5KDB4MWE4KSkvMHg1KigtcGFyc2VJbnQoXzB4M2M0Njk5KDB4MTg1KSkvMHg2KStwYXJzZUludChfMHgzYzQ2OTkoMHgyMDgpKS8weDcrLXBhcnNlSW50KF8weDNjNDY5OSgweDE3MikpLzB4OCoocGFyc2VJbnQoXzB4M2M0Njk5KDB4MjI2KSkvMHg5KSstcGFyc2VJbnQoXzB4M2M0Njk5KDB4MTlkKSkvMHhhKy1wYXJzZUludChfMHgzYzQ2OTkoMHgxN2YpKS8weGIqKC1wYXJzZUludChfMHgzYzQ2OTkoMHgxZjYpKS8weGMpO2lmKF8weDVlNTJlNj09PV8weDVlNzI5OClicmVhaztlbHNlIF8weDMyZTJiOVsncHVzaCddKF8weDMyZTJiOVsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4N2VjZjExKXtfMHgzMmUyYjlbJ3B1c2gnXShfMHgzMmUyYjlbJ3NoaWZ0J10oKSk7fX19KF8weDJiOTIsMHg3MjdhNikpO2Z1bmN0aW9uIF8weDM3ZjkoXzB4MjRjMTA3LF8weDMzYzM1YSl7dmFyIF8weDJiOTIyNT1fMHgyYjkyKCk7cmV0dXJuIF8weDM3Zjk9ZnVuY3Rpb24oXzB4MzdmOWNkLF8weDQ3YTkzZSl7XzB4MzdmOWNkPV8weDM3ZjljZC0weDE1ODt2YXIgXzB4MmIxZjYwPV8weDJiOTIyNVtfMHgzN2Y5Y2RdO3JldHVybiBfMHgyYjFmNjA7fSxfMHgzN2Y5KF8weDI0YzEwNyxfMHgzM2MzNWEpO312YXIgaj1PYmplY3RbJ2NyZWF0ZSddLFg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0W18weDVlM2RhOSgweDE5NildLGVlPU9iamVjdFtfMHg1ZTNkYTkoMHgxOTUpXSx0ZT1PYmplY3RbXzB4NWUzZGE5KDB4MjA0KV0sbmU9T2JqZWN0W18weDVlM2RhOSgweDIxMCldW18weDVlM2RhOSgweDFmNCldLHJlPShfMHg0MjVkYTQsXzB4NDdhNDZjLF8weDNmYTcxMyxfMHgyNjYwNTMpPT57dmFyIF8weDFlYmNkYz1fMHg1ZTNkYTk7aWYoXzB4NDdhNDZjJiZ0eXBlb2YgXzB4NDdhNDZjPT1fMHgxZWJjZGMoMHgyMWIpfHx0eXBlb2YgXzB4NDdhNDZjPT1fMHgxZWJjZGMoMHgyMTMpKXtmb3IobGV0IF8weDI0ZTY5ZSBvZiBlZShfMHg0N2E0NmMpKSFuZVtfMHgxZWJjZGMoMHgyM2UpXShfMHg0MjVkYTQsXzB4MjRlNjllKSYmXzB4MjRlNjllIT09XzB4M2ZhNzEzJiZYKF8weDQyNWRhNCxfMHgyNGU2OWUseydnZXQnOigpPT5fMHg0N2E0NmNbXzB4MjRlNjllXSwnZW51bWVyYWJsZSc6IShfMHgyNjYwNTM9RyhfMHg0N2E0NmMsXzB4MjRlNjllKSl8fF8weDI2NjA1M1tfMHgxZWJjZGMoMHgxOTkpXX0pO31yZXR1cm4gXzB4NDI1ZGE0O30seD0oXzB4NDg2OTU5LF8weDMzNTM3NyxfMHgxZDU2NDQpPT4oXzB4MWQ1NjQ0PV8weDQ4Njk1OSE9bnVsbD9qKHRlKF8weDQ4Njk1OSkpOnt9LHJlKF8weDMzNTM3N3x8IV8weDQ4Njk1OXx8IV8weDQ4Njk1OVtfMHg1ZTNkYTkoMHgxOGYpXT9YKF8weDFkNTY0NCxfMHg1ZTNkYTkoMHgxODMpLHsndmFsdWUnOl8weDQ4Njk1OSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDFkNTY0NCxfMHg0ODY5NTkpKSxxPWNsYXNze2NvbnN0cnVjdG9yKF8weDRmZWQwMyxfMHgzYzhhM2IsXzB4MjFkNDY5LF8weDQ5YTk0Myl7dmFyIF8weDUxMjY5MT1fMHg1ZTNkYTk7dGhpc1tfMHg1MTI2OTEoMHgyMWQpXT1fMHg0ZmVkMDMsdGhpc1tfMHg1MTI2OTEoMHgyMTUpXT1fMHgzYzhhM2IsdGhpc1tfMHg1MTI2OTEoMHgxZjgpXT1fMHgyMWQ0NjksdGhpc1tfMHg1MTI2OTEoMHgxZmUpXT1fMHg0OWE5NDMsdGhpc1tfMHg1MTI2OTEoMHgxNjEpXT0hMHgwLHRoaXNbXzB4NTEyNjkxKDB4MWU2KV09ITB4MCx0aGlzW18weDUxMjY5MSgweDI0MyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4NTEyNjkxKDB4MWRhKV09ISF0aGlzW18weDUxMjY5MSgweDIxZCldW18weDUxMjY5MSgweDE3YSldLHRoaXNbXzB4NTEyNjkxKDB4MWYwKV09bnVsbCx0aGlzW18weDUxMjY5MSgweDI0MSldPTB4MCx0aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddPTB4MTQsdGhpc1tfMHg1MTI2OTEoMHgyMGMpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1tfMHg1MTI2OTEoMHgyMzUpXT0odGhpc1tfMHg1MTI2OTEoMHgxZGEpXT9fMHg1MTI2OTEoMHgxYjMpOl8weDUxMjY5MSgweDIzZikpK3RoaXNbXzB4NTEyNjkxKDB4MjBjKV07fWFzeW5jW18weDVlM2RhOSgweDE4YyldKCl7dmFyIF8weDQ2OGY5NT1fMHg1ZTNkYTk7aWYodGhpc1snX1dlYlNvY2tldENsYXNzJ10pcmV0dXJuIHRoaXNbXzB4NDY4Zjk1KDB4MWYwKV07bGV0IF8weDQ4OGZlMjtpZih0aGlzW18weDQ2OGY5NSgweDFkYSldKV8weDQ4OGZlMj10aGlzW18weDQ2OGY5NSgweDIxZCldW18weDQ2OGY5NSgweDE3YSldO2Vsc2V7aWYodGhpc1tfMHg0NjhmOTUoMHgyMWQpXVsncHJvY2VzcyddPy5bXzB4NDY4Zjk1KDB4MjFjKV0pXzB4NDg4ZmUyPXRoaXNbXzB4NDY4Zjk1KDB4MjFkKV1bXzB4NDY4Zjk1KDB4MWZiKV0/LltfMHg0NjhmOTUoMHgyMWMpXTtlbHNlIHRyeXtsZXQgXzB4ZjAyNDJmPWF3YWl0IGltcG9ydChfMHg0NjhmOTUoMHgxNWYpKTtfMHg0ODhmZTI9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDQ2OGY5NSgweDIwMSkpKVtfMHg0NjhmOTUoMHgxZDgpXShfMHhmMDI0MmZbXzB4NDY4Zjk1KDB4MjNhKV0odGhpc1tfMHg0NjhmOTUoMHgxZmUpXSxfMHg0NjhmOTUoMHgxN2UpKSlbXzB4NDY4Zjk1KDB4MTk3KV0oKSkpWydkZWZhdWx0J107fWNhdGNoe3RyeXtfMHg0ODhmZTI9cmVxdWlyZShyZXF1aXJlKF8weDQ2OGY5NSgweDE1ZikpW18weDQ2OGY5NSgweDIzYSldKHRoaXNbXzB4NDY4Zjk1KDB4MWZlKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4NDY4Zjk1KDB4MjIxKSk7fX19cmV0dXJuIHRoaXNbXzB4NDY4Zjk1KDB4MWYwKV09XzB4NDg4ZmUyLF8weDQ4OGZlMjt9W18weDVlM2RhOSgweDE1YSldKCl7dmFyIF8weDFkNmY0YT1fMHg1ZTNkYTk7dGhpc1tfMHgxZDZmNGEoMHgyMzQpXXx8dGhpc1tfMHgxZDZmNGEoMHgyNDMpXXx8dGhpc1tfMHgxZDZmNGEoMHgyNDEpXT49dGhpc1tfMHgxZDZmNGEoMHgxODgpXXx8KHRoaXNbXzB4MWQ2ZjRhKDB4MWU2KV09ITB4MSx0aGlzW18weDFkNmY0YSgweDIzNCldPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4MWQ2ZjRhKDB4MjM5KV09bmV3IFByb21pc2UoKF8weDY0YjVmNixfMHg1ZWE1NjgpPT57dmFyIF8weGEzYjI4OD1fMHgxZDZmNGE7dGhpc1tfMHhhM2IyODgoMHgxOGMpXSgpW18weGEzYjI4OCgweDFmNSldKF8weDE1MzAxPT57dmFyIF8weDRkNTg1Mj1fMHhhM2IyODg7bGV0IF8weDU3NTM3MD1uZXcgXzB4MTUzMDEoJ3dzOi8vJyt0aGlzW18weDRkNTg1MigweDIxNSldKyc6Jyt0aGlzW18weDRkNTg1MigweDFmOCldKTtfMHg1NzUzNzBbJ29uZXJyb3InXT0oKT0+e3ZhciBfMHgyY2Y4MDQ9XzB4NGQ1ODUyO3RoaXNbXzB4MmNmODA0KDB4MTYxKV09ITB4MSx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDU3NTM3MCksdGhpc1tfMHgyY2Y4MDQoMHgxZTkpXSgpLF8weDVlYTU2OChuZXcgRXJyb3IoXzB4MmNmODA0KDB4MWYzKSkpO30sXzB4NTc1MzcwW18weDRkNTg1MigweDE2ZSldPSgpPT57dmFyIF8weDRiMDk4NT1fMHg0ZDU4NTI7dGhpc1tfMHg0YjA5ODUoMHgxZGEpXXx8XzB4NTc1MzcwW18weDRiMDk4NSgweDE3OCldJiZfMHg1NzUzNzBbXzB4NGIwOTg1KDB4MTc4KV1bXzB4NGIwOTg1KDB4MTg0KV0mJl8weDU3NTM3MFsnX3NvY2tldCddWyd1bnJlZiddKCksXzB4NjRiNWY2KF8weDU3NTM3MCk7fSxfMHg1NzUzNzBbXzB4NGQ1ODUyKDB4MjEyKV09KCk9Pnt2YXIgXzB4MTQxZjBhPV8weDRkNTg1Mjt0aGlzW18weDE0MWYwYSgweDFlNildPSEweDAsdGhpc1tfMHgxNDFmMGEoMHgxZDkpXShfMHg1NzUzNzApLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDU3NTM3MFtfMHg0ZDU4NTIoMHgxY2YpXT1fMHg3ZmZjNzU9Pnt2YXIgXzB4M2MwOGI3PV8weDRkNTg1Mjt0cnl7XzB4N2ZmYzc1JiZfMHg3ZmZjNzVbXzB4M2MwOGI3KDB4MTZhKV0mJnRoaXNbXzB4M2MwOGI3KDB4MWRhKV0mJkpTT05bXzB4M2MwOGI3KDB4MTgyKV0oXzB4N2ZmYzc1WydkYXRhJ10pW18weDNjMDhiNygweDIxNCldPT09J3JlbG9hZCcmJnRoaXNbJ2dsb2JhbCddW18weDNjMDhiNygweDE4YildW18weDNjMDhiNygweDFhZSldKCk7fWNhdGNoe319O30pWyd0aGVuJ10oXzB4MzI2YmY5PT4odGhpc1tfMHhhM2IyODgoMHgyNDMpXT0hMHgwLHRoaXNbXzB4YTNiMjg4KDB4MjM0KV09ITB4MSx0aGlzW18weGEzYjI4OCgweDFlNildPSEweDEsdGhpc1tfMHhhM2IyODgoMHgxNjEpXT0hMHgwLHRoaXNbXzB4YTNiMjg4KDB4MjQxKV09MHgwLF8weDMyNmJmOSkpW18weGEzYjI4OCgweDFiYyldKF8weDMxY2IwZT0+KHRoaXNbXzB4YTNiMjg4KDB4MjQzKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVsnd2FybiddKF8weGEzYjI4OCgweDIwMykrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXSksXzB4NWVhNTY4KG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJysoXzB4MzFjYjBlJiZfMHgzMWNiMGVbJ21lc3NhZ2UnXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDQ0ZDY0MSl7dmFyIF8weDRkZjZkND1fMHg1ZTNkYTk7dGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHg0ZGY2ZDQoMHgyMzQpXT0hMHgxO3RyeXtfMHg0NGQ2NDFbJ29uY2xvc2UnXT1udWxsLF8weDQ0ZDY0MVtfMHg0ZGY2ZDQoMHgxZmEpXT1udWxsLF8weDQ0ZDY0MVtfMHg0ZGY2ZDQoMHgxNmUpXT1udWxsO31jYXRjaHt9dHJ5e18weDQ0ZDY0MVsncmVhZHlTdGF0ZSddPDB4MiYmXzB4NDRkNjQxW18weDRkZjZkNCgweDFlMSldKCk7fWNhdGNoe319W18weDVlM2RhOSgweDFlOSldKCl7dmFyIF8weDExNWJjMj1fMHg1ZTNkYTk7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MTE1YmMyKDB4MTk4KV0pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHgxMTViYzIoMHgxODgpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NWYyZDA4PV8weDExNWJjMjt0aGlzW18weDVmMmQwOCgweDI0MyldfHx0aGlzWydfY29ubmVjdGluZyddfHwodGhpc1tfMHg1ZjJkMDgoMHgxNWEpXSgpLHRoaXNbXzB4NWYyZDA4KDB4MjM5KV0/LltfMHg1ZjJkMDgoMHgxYmMpXSgoKT0+dGhpc1tfMHg1ZjJkMDgoMHgxZTkpXSgpKSk7fSwweDFmNCksdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHgxMTViYzIoMHgxODQpXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHgxMTViYzIoMHgxODQpXSgpKTt9YXN5bmNbXzB4NWUzZGE5KDB4MWMwKV0oXzB4NTJkNmJlKXt2YXIgXzB4NWE3MDlmPV8weDVlM2RhOTt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbXzB4NWE3MDlmKDB4MWU2KV0mJnRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSwoYXdhaXQgdGhpc1tfMHg1YTcwOWYoMHgyMzkpXSlbXzB4NWE3MDlmKDB4MWMwKV0oSlNPTltfMHg1YTcwOWYoMHgyMDYpXShfMHg1MmQ2YmUpKTt9Y2F0Y2goXzB4MjZiNzA0KXtjb25zb2xlW18weDVhNzA5ZigweDFhZildKHRoaXNbXzB4NWE3MDlmKDB4MjM1KV0rJzpcXFxceDIwJysoXzB4MjZiNzA0JiZfMHgyNmI3MDRbXzB4NWE3MDlmKDB4MTc5KV0pKSx0aGlzW18weDVhNzA5ZigweDE2MSldPSEweDEsdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO319fTtmdW5jdGlvbiBKKF8weDhiOGY0OSxfMHgyMWU3MTQsXzB4NGNhODUzLF8weDM2Y2MyMyxfMHg1OTdjMTkpe3ZhciBfMHg1NWQ1YjQ9XzB4NWUzZGE5O2xldCBfMHg1NjkzN2E9XzB4NGNhODUzW18weDU1ZDViNCgweDE1OCldKCcsJylbXzB4NTVkNWI0KDB4MjFlKV0oXzB4NDQyMTA3PT57dmFyIF8weDVjM2Q5ZT1fMHg1NWQ1YjQ7dHJ5e18weDhiOGY0OVtfMHg1YzNkOWUoMHgyMjgpXXx8KChfMHg1OTdjMTk9PT1fMHg1YzNkOWUoMHgxY2UpfHxfMHg1OTdjMTk9PT1fMHg1YzNkOWUoMHgyM2IpfHxfMHg1OTdjMTk9PT1fMHg1YzNkOWUoMHgxZDEpKSYmKF8weDU5N2MxOSs9XzB4OGI4ZjQ5W18weDVjM2Q5ZSgweDFmYildPy5bJ3ZlcnNpb25zJ10/LltfMHg1YzNkOWUoMHgxYmUpXT9fMHg1YzNkOWUoMHgxZGQpOl8weDVjM2Q5ZSgweDE5MCkpLF8weDhiOGY0OVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg1OTdjMTl9KTtsZXQgXzB4M2MyYWUxPW5ldyBxKF8weDhiOGY0OSxfMHgyMWU3MTQsXzB4NDQyMTA3LF8weDM2Y2MyMyk7cmV0dXJuIF8weDNjMmFlMVtfMHg1YzNkOWUoMHgxYzApXVsnYmluZCddKF8weDNjMmFlMSk7fWNhdGNoKF8weDRmYzc0Yil7cmV0dXJuIGNvbnNvbGVbXzB4NWMzZDllKDB4MWFmKV0oXzB4NWMzZDllKDB4MWJkKSxfMHg0ZmM3NGImJl8weDRmYzc0YltfMHg1YzNkOWUoMHgxNzkpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NWViNGM3PT5fMHg1NjkzN2FbXzB4NTVkNWI0KDB4MWEyKV0oXzB4NDk0OTJhPT5fMHg0OTQ5MmEoXzB4NWViNGM3KSk7fWZ1bmN0aW9uIFIoXzB4MzljZDZjKXt2YXIgXzB4YmY0YTVhPV8weDVlM2RhOTtsZXQgXzB4MmIzZGY4PWZ1bmN0aW9uKF8weDE3YjUyOSxfMHg0ODVhOGMpe3JldHVybiBfMHg0ODVhOGMtXzB4MTdiNTI5O30sXzB4MWYxNjJkO2lmKF8weDM5Y2Q2Y1tfMHhiZjRhNWEoMHgyMmEpXSlfMHgxZjE2MmQ9ZnVuY3Rpb24oKXt2YXIgXzB4MzhiYmIxPV8weGJmNGE1YTtyZXR1cm4gXzB4MzljZDZjWydwZXJmb3JtYW5jZSddW18weDM4YmJiMSgweDFhYyldKCk7fTtlbHNle2lmKF8weDM5Y2Q2Y1tfMHhiZjRhNWEoMHgxZmIpXSYmXzB4MzljZDZjW18weGJmNGE1YSgweDFmYildWydocnRpbWUnXSlfMHgxZjE2MmQ9ZnVuY3Rpb24oKXt2YXIgXzB4NjE1ZDE4PV8weGJmNGE1YTtyZXR1cm4gXzB4MzljZDZjW18weDYxNWQxOCgweDFmYildW18weDYxNWQxOCgweDE5MSldKCk7fSxfMHgyYjNkZjg9ZnVuY3Rpb24oXzB4OTk4OGQ3LF8weDNmYzQ3Nyl7cmV0dXJuIDB4M2U4KihfMHgzZmM0NzdbMHgwXS1fMHg5OTg4ZDdbMHgwXSkrKF8weDNmYzQ3N1sweDFdLV8weDk5ODhkN1sweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgzZmZiMGN9PXJlcXVpcmUoXzB4YmY0YTVhKDB4MjJiKSk7XzB4MWYxNjJkPWZ1bmN0aW9uKCl7dmFyIF8weGY2ZDZkMz1fMHhiZjRhNWE7cmV0dXJuIF8weDNmZmIwY1tfMHhmNmQ2ZDMoMHgxYWMpXSgpO307fWNhdGNoe18weDFmMTYyZD1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDJiM2RmOCwndGltZVN0YW1wJzpfMHgxZjE2MmQsJ25vdyc6KCk9PkRhdGVbXzB4YmY0YTVhKDB4MWFjKV0oKX07fWZ1bmN0aW9uIFkoXzB4MTlhODBlLF8weDVhOGU0MSxfMHg1Y2VlMmIpe3ZhciBfMHg0MTUwYmY9XzB4NWUzZGE5O2lmKF8weDE5YTgwZVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J10hPT12b2lkIDB4MClyZXR1cm4gXzB4MTlhODBlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTtsZXQgXzB4MzRmNTA0PV8weDE5YTgwZVtfMHg0MTUwYmYoMHgxZmIpXT8uW18weDQxNTBiZigweDE3ZCldPy5bXzB4NDE1MGJmKDB4MWJlKV07cmV0dXJuIF8weDM0ZjUwNCYmXzB4NWNlZTJiPT09XzB4NDE1MGJmKDB4MjMzKT9fMHgxOWE4MGVbXzB4NDE1MGJmKDB4MWI2KV09ITB4MTpfMHgxOWE4MGVbXzB4NDE1MGJmKDB4MWI2KV09XzB4MzRmNTA0fHwhXzB4NWE4ZTQxfHxfMHgxOWE4MGVbXzB4NDE1MGJmKDB4MThiKV0/LltfMHg0MTUwYmYoMHgxZWUpXSYmXzB4NWE4ZTQxW18weDQxNTBiZigweDIxOSldKF8weDE5YTgwZVtfMHg0MTUwYmYoMHgxOGIpXVtfMHg0MTUwYmYoMHgxZWUpXSksXzB4MTlhODBlW18weDQxNTBiZigweDFiNildO31mdW5jdGlvbiBRKF8weDU2NzM5MCxfMHgzYzAzYTAsXzB4MzM2NWZkLF8weDJmZjAwZSl7dmFyIF8weGIxZjkxMT1fMHg1ZTNkYTk7XzB4NTY3MzkwPV8weDU2NzM5MCxfMHgzYzAzYTA9XzB4M2MwM2EwLF8weDMzNjVmZD1fMHgzMzY1ZmQsXzB4MmZmMDBlPV8weDJmZjAwZTtsZXQgXzB4NWRlZDI2PVIoXzB4NTY3MzkwKSxfMHg0Yzg0NWI9XzB4NWRlZDI2W18weGIxZjkxMSgweDFjNyldLF8weDRlNGQwYz1fMHg1ZGVkMjZbXzB4YjFmOTExKDB4MTkzKV07Y2xhc3MgXzB4MjAzMGY2e2NvbnN0cnVjdG9yKCl7dmFyIF8weDU4ZWZlZT1fMHhiMWY5MTE7dGhpc1snX2tleVN0clJlZ0V4cCddPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg1OGVmZWUoMHgxNWMpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NThlZmVlKDB4MTY0KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg1OGVmZWUoMHgxOWMpXT1fMHg1NjczOTBbXzB4NThlZmVlKDB4MTg3KV0sdGhpc1tfMHg1OGVmZWUoMHgxOWYpXT1fMHg1NjczOTBbJ0hUTUxBbGxDb2xsZWN0aW9uJ10sdGhpc1tfMHg1OGVmZWUoMHgyMDUpXT1PYmplY3RbXzB4NThlZmVlKDB4MTk2KV0sdGhpc1tfMHg1OGVmZWUoMHgxYjApXT1PYmplY3RbXzB4NThlZmVlKDB4MTk1KV0sdGhpc1snX1N5bWJvbCddPV8weDU2NzM5MFtfMHg1OGVmZWUoMHgxNjgpXSx0aGlzW18weDU4ZWZlZSgweDE3NCldPVJlZ0V4cFsncHJvdG90eXBlJ11bXzB4NThlZmVlKDB4MTk3KV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NThlZmVlKDB4MjEwKV1bJ3RvU3RyaW5nJ107fVtfMHhiMWY5MTEoMHgyMjUpXShfMHgxMzNhNDYsXzB4MTZjNTU5LF8weDM0NTlmYSxfMHgzM2NkNWMpe3ZhciBfMHgzMTY0OTk9XzB4YjFmOTExLF8weDE5NGNkOD10aGlzLF8weDIxYzY3ZT1fMHgzNDU5ZmFbXzB4MzE2NDk5KDB4MWRlKV07ZnVuY3Rpb24gXzB4M2Q0ZTI3KF8weDViMDc4MCxfMHgzOWQxYjYsXzB4MTVkMmI4KXt2YXIgXzB4NDQxYjQwPV8weDMxNjQ5OTtfMHgzOWQxYjZbXzB4NDQxYjQwKDB4MjNkKV09XzB4NDQxYjQwKDB4MWI5KSxfMHgzOWQxYjZbXzB4NDQxYjQwKDB4MWE1KV09XzB4NWIwNzgwW18weDQ0MWI0MCgweDE3OSldLF8weDMxY2NhNT1fMHgxNWQyYjhbJ25vZGUnXVtfMHg0NDFiNDAoMHgxNmQpXSxfMHgxNWQyYjhbXzB4NDQxYjQwKDB4MWJlKV1bXzB4NDQxYjQwKDB4MTZkKV09XzB4MzlkMWI2LF8weDE5NGNkOFtfMHg0NDFiNDAoMHgxZTApXShfMHgzOWQxYjYsXzB4MTVkMmI4KTt9dHJ5e18weDM0NTlmYVtfMHgzMTY0OTkoMHgyMDIpXSsrLF8weDM0NTlmYVtfMHgzMTY0OTkoMHgxZGUpXSYmXzB4MzQ1OWZhW18weDMxNjQ5OSgweDE4MCldW18weDMxNjQ5OSgweDIwMCldKF8weDE2YzU1OSk7dmFyIF8weDQzMTdjMSxfMHg0YmMzYzQsXzB4ZmE0NzZiLF8weDJhYjRhMixfMHg1ODY3MTY9W10sXzB4ODNlYzc0PVtdLF8weDVkNTIxZixfMHgyMjhhYjE9dGhpc1tfMHgzMTY0OTkoMHgyMzgpXShfMHgxNmM1NTkpLF8weDVlN2NlYT1fMHgyMjhhYjE9PT1fMHgzMTY0OTkoMHgxZDIpLF8weDUyZGM3YT0hMHgxLF8weDQxNWU1Zj1fMHgyMjhhYjE9PT0nZnVuY3Rpb24nLF8weGMyZjE2Nz10aGlzW18weDMxNjQ5OSgweDIwYSldKF8weDIyOGFiMSksXzB4MTM3MjBlPXRoaXNbJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4MjI4YWIxKSxfMHg4MWE4ZmE9XzB4YzJmMTY3fHxfMHgxMzcyMGUsXzB4MTZiZGU3PXt9LF8weDI4OTVlMT0weDAsXzB4MjUxOWUxPSEweDEsXzB4MzFjY2E1LF8weDMzYmZlZj0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4MzQ1OWZhW18weDMxNjQ5OSgweDFjYyldKXtpZihfMHg1ZTdjZWEpe2lmKF8weDRiYzNjND1fMHgxNmM1NTlbXzB4MzE2NDk5KDB4MTk0KV0sXzB4NGJjM2M0Pl8weDM0NTlmYVsnZWxlbWVudHMnXSl7Zm9yKF8weGZhNDc2Yj0weDAsXzB4MmFiNGEyPV8weDM0NTlmYVsnZWxlbWVudHMnXSxfMHg0MzE3YzE9XzB4ZmE0NzZiO18weDQzMTdjMTxfMHgyYWI0YTI7XzB4NDMxN2MxKyspXzB4ODNlYzc0W18weDMxNjQ5OSgweDIwMCldKF8weDE5NGNkOFtfMHgzMTY0OTkoMHgxZWEpXShfMHg1ODY3MTYsXzB4MTZjNTU5LF8weDIyOGFiMSxfMHg0MzE3YzEsXzB4MzQ1OWZhKSk7XzB4MTMzYTQ2W18weDMxNjQ5OSgweDFiOCldPSEweDA7fWVsc2V7Zm9yKF8weGZhNDc2Yj0weDAsXzB4MmFiNGEyPV8weDRiYzNjNCxfMHg0MzE3YzE9XzB4ZmE0NzZiO18weDQzMTdjMTxfMHgyYWI0YTI7XzB4NDMxN2MxKyspXzB4ODNlYzc0W18weDMxNjQ5OSgweDIwMCldKF8weDE5NGNkOFtfMHgzMTY0OTkoMHgxZWEpXShfMHg1ODY3MTYsXzB4MTZjNTU5LF8weDIyOGFiMSxfMHg0MzE3YzEsXzB4MzQ1OWZhKSk7fV8weDM0NTlmYVtfMHgzMTY0OTkoMHgxZjkpXSs9XzB4ODNlYzc0W18weDMxNjQ5OSgweDE5NCldO31pZighKF8weDIyOGFiMT09PV8weDMxNjQ5OSgweDFmNyl8fF8weDIyOGFiMT09PV8weDMxNjQ5OSgweDE4NykpJiYhXzB4YzJmMTY3JiZfMHgyMjhhYjEhPT1fMHgzMTY0OTkoMHgxYTkpJiZfMHgyMjhhYjEhPT1fMHgzMTY0OTkoMHgyNDUpJiZfMHgyMjhhYjEhPT1fMHgzMTY0OTkoMHgxYmIpKXt2YXIgXzB4MmFkYWQ4PV8weDMzY2Q1Y1tfMHgzMTY0OTkoMHgyMjApXXx8XzB4MzQ1OWZhW18weDMxNjQ5OSgweDIyMCldO2lmKHRoaXNbXzB4MzE2NDk5KDB4MTc3KV0oXzB4MTZjNTU5KT8oXzB4NDMxN2MxPTB4MCxfMHgxNmM1NTlbXzB4MzE2NDk5KDB4MWEyKV0oZnVuY3Rpb24oXzB4ZWRmMmZkKXt2YXIgXzB4NTdlMTAyPV8weDMxNjQ5OTtpZihfMHgyODk1ZTErKyxfMHgzNDU5ZmFbXzB4NTdlMTAyKDB4MWY5KV0rKyxfMHgyODk1ZTE+XzB4MmFkYWQ4KXtfMHgyNTE5ZTE9ITB4MDtyZXR1cm47fWlmKCFfMHgzNDU5ZmFbXzB4NTdlMTAyKDB4MjBlKV0mJl8weDM0NTlmYVtfMHg1N2UxMDIoMHgxZGUpXSYmXzB4MzQ1OWZhW18weDU3ZTEwMigweDFmOSldPl8weDM0NTlmYVtfMHg1N2UxMDIoMHgxYzMpXSl7XzB4MjUxOWUxPSEweDA7cmV0dXJuO31fMHg4M2VjNzRbXzB4NTdlMTAyKDB4MjAwKV0oXzB4MTk0Y2Q4W18weDU3ZTEwMigweDFlYSldKF8weDU4NjcxNixfMHgxNmM1NTksJ1NldCcsXzB4NDMxN2MxKyssXzB4MzQ1OWZhLGZ1bmN0aW9uKF8weDQ4OGJiMil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ4OGJiMjt9O30oXzB4ZWRmMmZkKSkpO30pKTp0aGlzWydfaXNNYXAnXShfMHgxNmM1NTkpJiZfMHgxNmM1NTlbXzB4MzE2NDk5KDB4MWEyKV0oZnVuY3Rpb24oXzB4M2VlMGYzLF8weDI4MGFmMCl7dmFyIF8weDFlYjcyZj1fMHgzMTY0OTk7aWYoXzB4Mjg5NWUxKyssXzB4MzQ1OWZhW18weDFlYjcyZigweDFmOSldKyssXzB4Mjg5NWUxPl8weDJhZGFkOCl7XzB4MjUxOWUxPSEweDA7cmV0dXJuO31pZighXzB4MzQ1OWZhW18weDFlYjcyZigweDIwZSldJiZfMHgzNDU5ZmFbXzB4MWViNzJmKDB4MWRlKV0mJl8weDM0NTlmYVtfMHgxZWI3MmYoMHgxZjkpXT5fMHgzNDU5ZmFbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyNTE5ZTE9ITB4MDtyZXR1cm47fXZhciBfMHgyZWE4Zjc9XzB4MjgwYWYwW18weDFlYjcyZigweDE5NyldKCk7XzB4MmVhOGY3W18weDFlYjcyZigweDE5NCldPjB4NjQmJihfMHgyZWE4Zjc9XzB4MmVhOGY3WydzbGljZSddKDB4MCwweDY0KStfMHgxZWI3MmYoMHgxZmMpKSxfMHg4M2VjNzRbXzB4MWViNzJmKDB4MjAwKV0oXzB4MTk0Y2Q4W18weDFlYjcyZigweDFlYSldKF8weDU4NjcxNixfMHgxNmM1NTksXzB4MWViNzJmKDB4MWU4KSxfMHgyZWE4ZjcsXzB4MzQ1OWZhLGZ1bmN0aW9uKF8weDNlYjIwYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDNlYjIwYjt9O30oXzB4M2VlMGYzKSkpO30pLCFfMHg1MmRjN2Epe3RyeXtmb3IoXzB4NWQ1MjFmIGluIF8weDE2YzU1OSlpZighKF8weDVlN2NlYSYmXzB4MzNiZmVmWyd0ZXN0J10oXzB4NWQ1MjFmKSkmJiF0aGlzW18weDMxNjQ5OSgweDE1ZCldKF8weDE2YzU1OSxfMHg1ZDUyMWYsXzB4MzQ1OWZhKSl7aWYoXzB4Mjg5NWUxKyssXzB4MzQ1OWZhW18weDMxNjQ5OSgweDFmOSldKyssXzB4Mjg5NWUxPl8weDJhZGFkOCl7XzB4MjUxOWUxPSEweDA7YnJlYWs7fWlmKCFfMHgzNDU5ZmFbXzB4MzE2NDk5KDB4MjBlKV0mJl8weDM0NTlmYVtfMHgzMTY0OTkoMHgxZGUpXSYmXzB4MzQ1OWZhWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDM0NTlmYVtfMHgzMTY0OTkoMHgxYzMpXSl7XzB4MjUxOWUxPSEweDA7YnJlYWs7fV8weDgzZWM3NFtfMHgzMTY0OTkoMHgyMDApXShfMHgxOTRjZDhbXzB4MzE2NDk5KDB4MjM2KV0oXzB4NTg2NzE2LF8weDE2YmRlNyxfMHgxNmM1NTksXzB4MjI4YWIxLF8weDVkNTIxZixfMHgzNDU5ZmEpKTt9fWNhdGNoe31pZihfMHgxNmJkZTdbJ19wX2xlbmd0aCddPSEweDAsXzB4NDE1ZTVmJiYoXzB4MTZiZGU3W18weDMxNjQ5OSgweDE2NyldPSEweDApLCFfMHgyNTE5ZTEpe3ZhciBfMHgzNmFlYjY9W11bXzB4MzE2NDk5KDB4MWQwKV0odGhpc1tfMHgzMTY0OTkoMHgxYjApXShfMHgxNmM1NTkpKVtfMHgzMTY0OTkoMHgxZDApXSh0aGlzW18weDMxNjQ5OSgweDFiNyldKF8weDE2YzU1OSkpO2ZvcihfMHg0MzE3YzE9MHgwLF8weDRiYzNjND1fMHgzNmFlYjZbXzB4MzE2NDk5KDB4MTk0KV07XzB4NDMxN2MxPF8weDRiYzNjNDtfMHg0MzE3YzErKylpZihfMHg1ZDUyMWY9XzB4MzZhZWI2W18weDQzMTdjMV0sIShfMHg1ZTdjZWEmJl8weDMzYmZlZlsndGVzdCddKF8weDVkNTIxZltfMHgzMTY0OTkoMHgxOTcpXSgpKSkmJiF0aGlzW18weDMxNjQ5OSgweDE1ZCldKF8weDE2YzU1OSxfMHg1ZDUyMWYsXzB4MzQ1OWZhKSYmIV8weDE2YmRlN1tfMHgzMTY0OTkoMHgxYTApK18weDVkNTIxZlsndG9TdHJpbmcnXSgpXSl7aWYoXzB4Mjg5NWUxKyssXzB4MzQ1OWZhW18weDMxNjQ5OSgweDFmOSldKyssXzB4Mjg5NWUxPl8weDJhZGFkOCl7XzB4MjUxOWUxPSEweDA7YnJlYWs7fWlmKCFfMHgzNDU5ZmFbXzB4MzE2NDk5KDB4MjBlKV0mJl8weDM0NTlmYVtfMHgzMTY0OTkoMHgxZGUpXSYmXzB4MzQ1OWZhW18weDMxNjQ5OSgweDFmOSldPl8weDM0NTlmYVtfMHgzMTY0OTkoMHgxYzMpXSl7XzB4MjUxOWUxPSEweDA7YnJlYWs7fV8weDgzZWM3NFtfMHgzMTY0OTkoMHgyMDApXShfMHgxOTRjZDhbXzB4MzE2NDk5KDB4MjM2KV0oXzB4NTg2NzE2LF8weDE2YmRlNyxfMHgxNmM1NTksXzB4MjI4YWIxLF8weDVkNTIxZixfMHgzNDU5ZmEpKTt9fX19fWlmKF8weDEzM2E0NltfMHgzMTY0OTkoMHgyM2QpXT1fMHgyMjhhYjEsXzB4ODFhOGZhPyhfMHgxMzNhNDZbJ3ZhbHVlJ109XzB4MTZjNTU5W18weDMxNjQ5OSgweDFlZCldKCksdGhpc1tfMHgzMTY0OTkoMHgyMGYpXShfMHgyMjhhYjEsXzB4MTMzYTQ2LF8weDM0NTlmYSxfMHgzM2NkNWMpKTpfMHgyMjhhYjE9PT1fMHgzMTY0OTkoMHgxNzApP18weDEzM2E0NlsndmFsdWUnXT10aGlzWydfZGF0ZVRvU3RyaW5nJ11bJ2NhbGwnXShfMHgxNmM1NTkpOl8weDIyOGFiMT09PSdiaWdpbnQnP18weDEzM2E0NltfMHgzMTY0OTkoMHgxYzgpXT1fMHgxNmM1NTlbJ3RvU3RyaW5nJ10oKTpfMHgyMjhhYjE9PT1fMHgzMTY0OTkoMHgyMDkpP18weDEzM2E0NlsndmFsdWUnXT10aGlzW18weDMxNjQ5OSgweDE3NCldWydjYWxsJ10oXzB4MTZjNTU5KTpfMHgyMjhhYjE9PT1fMHgzMTY0OTkoMHgxYmEpJiZ0aGlzW18weDMxNjQ5OSgweDIyNyldP18weDEzM2E0NlsndmFsdWUnXT10aGlzW18weDMxNjQ5OSgweDIyNyldW18weDMxNjQ5OSgweDIxMCldW18weDMxNjQ5OSgweDE5NyldW18weDMxNjQ5OSgweDIzZSldKF8weDE2YzU1OSk6IV8weDM0NTlmYVtfMHgzMTY0OTkoMHgxY2MpXSYmIShfMHgyMjhhYjE9PT1fMHgzMTY0OTkoMHgxZjcpfHxfMHgyMjhhYjE9PT1fMHgzMTY0OTkoMHgxODcpKSYmKGRlbGV0ZSBfMHgxMzNhNDZbXzB4MzE2NDk5KDB4MWM4KV0sXzB4MTMzYTQ2W18weDMxNjQ5OSgweDE3MSldPSEweDApLF8weDI1MTllMSYmKF8weDEzM2E0NlsnY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgzMWNjYTU9XzB4MzQ1OWZhW18weDMxNjQ5OSgweDFiZSldWydjdXJyZW50J10sXzB4MzQ1OWZhWydub2RlJ11bXzB4MzE2NDk5KDB4MTZkKV09XzB4MTMzYTQ2LHRoaXNbXzB4MzE2NDk5KDB4MWUwKV0oXzB4MTMzYTQ2LF8weDM0NTlmYSksXzB4ODNlYzc0WydsZW5ndGgnXSl7Zm9yKF8weDQzMTdjMT0weDAsXzB4NGJjM2M0PV8weDgzZWM3NFtfMHgzMTY0OTkoMHgxOTQpXTtfMHg0MzE3YzE8XzB4NGJjM2M0O18weDQzMTdjMSsrKV8weDgzZWM3NFtfMHg0MzE3YzFdKF8weDQzMTdjMSk7fV8weDU4NjcxNltfMHgzMTY0OTkoMHgxOTQpXSYmKF8weDEzM2E0NlsncHJvcHMnXT1fMHg1ODY3MTYpO31jYXRjaChfMHhhMGM1MmYpe18weDNkNGUyNyhfMHhhMGM1MmYsXzB4MTMzYTQ2LF8weDM0NTlmYSk7fXJldHVybiB0aGlzW18weDMxNjQ5OSgweDFmMSldKF8weDE2YzU1OSxfMHgxMzNhNDYpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDEzM2E0NixfMHgzNDU5ZmEpLF8weDM0NTlmYVtfMHgzMTY0OTkoMHgxYmUpXVtfMHgzMTY0OTkoMHgxNmQpXT1fMHgzMWNjYTUsXzB4MzQ1OWZhW18weDMxNjQ5OSgweDIwMildLS0sXzB4MzQ1OWZhW18weDMxNjQ5OSgweDFkZSldPV8weDIxYzY3ZSxfMHgzNDU5ZmFbXzB4MzE2NDk5KDB4MWRlKV0mJl8weDM0NTlmYVsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDMxNjQ5OSgweDFkZildKCksXzB4MTMzYTQ2O31bXzB4YjFmOTExKDB4MWI3KV0oXzB4NTZlOWY1KXt2YXIgXzB4NWU4NGJkPV8weGIxZjkxMTtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4NWU4NGJkKDB4MTliKV0oXzB4NTZlOWY1KTpbXTt9WydfaXNTZXQnXShfMHg1YmRkMmYpe3ZhciBfMHg0YjQzNzI9XzB4YjFmOTExO3JldHVybiEhKF8weDViZGQyZiYmXzB4NTY3MzkwW18weDRiNDM3MigweDFhNildJiZ0aGlzW18weDRiNDM3MigweDIyOSldKF8weDViZGQyZik9PT1fMHg0YjQzNzIoMHgxZTIpJiZfMHg1YmRkMmZbXzB4NGI0MzcyKDB4MWEyKV0pO31bXzB4YjFmOTExKDB4MTVkKV0oXzB4MTA4OWNmLF8weDU5YTk5NCxfMHgzZmYyNGQpe3ZhciBfMHg0OTYwYmM9XzB4YjFmOTExO3JldHVybiBfMHgzZmYyNGRbJ25vRnVuY3Rpb25zJ10/dHlwZW9mIF8weDEwODljZltfMHg1OWE5OTRdPT1fMHg0OTYwYmMoMHgyMTMpOiEweDE7fVtfMHhiMWY5MTEoMHgyMzgpXShfMHgzYTgxMTMpe3ZhciBfMHhiZjc4MDk9XzB4YjFmOTExLF8weDE0Yzk2Zj0nJztyZXR1cm4gXzB4MTRjOTZmPXR5cGVvZiBfMHgzYTgxMTMsXzB4MTRjOTZmPT09XzB4YmY3ODA5KDB4MjFiKT90aGlzW18weGJmNzgwOSgweDIyOSldKF8weDNhODExMyk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDE0Yzk2Zj1fMHhiZjc4MDkoMHgxZDIpOnRoaXNbXzB4YmY3ODA5KDB4MjI5KV0oXzB4M2E4MTEzKT09PV8weGJmNzgwOSgweDFkYyk/XzB4MTRjOTZmPV8weGJmNzgwOSgweDE3MCk6dGhpc1tfMHhiZjc4MDkoMHgyMjkpXShfMHgzYTgxMTMpPT09XzB4YmY3ODA5KDB4MjI0KT9fMHgxNGM5NmY9XzB4YmY3ODA5KDB4MWJiKTpfMHgzYTgxMTM9PT1udWxsP18weDE0Yzk2Zj1fMHhiZjc4MDkoMHgxZjcpOl8weDNhODExM1tfMHhiZjc4MDkoMHgxYWEpXSYmKF8weDE0Yzk2Zj1fMHgzYTgxMTNbXzB4YmY3ODA5KDB4MWFhKV1bXzB4YmY3ODA5KDB4MTlhKV18fF8weDE0Yzk2Zik6XzB4MTRjOTZmPT09XzB4YmY3ODA5KDB4MTg3KSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDNhODExMyBpbnN0YW5jZW9mIHRoaXNbXzB4YmY3ODA5KDB4MTlmKV0mJihfMHgxNGM5NmY9XzB4YmY3ODA5KDB4MjMwKSksXzB4MTRjOTZmO31bXzB4YjFmOTExKDB4MjI5KV0oXzB4MzVjMzcyKXt2YXIgXzB4MTYxMDRkPV8weGIxZjkxMTtyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHgxNjEwNGQoMHgxOTcpXVtfMHgxNjEwNGQoMHgyM2UpXShfMHgzNWMzNzIpO31bJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHg0NzBhZDEpe3ZhciBfMHgyOGVmNWM9XzB4YjFmOTExO3JldHVybiBfMHg0NzBhZDE9PT1fMHgyOGVmNWMoMHgxYTcpfHxfMHg0NzBhZDE9PT0nc3RyaW5nJ3x8XzB4NDcwYWQxPT09J251bWJlcic7fVtfMHhiMWY5MTEoMHgyMDcpXShfMHhjN2M5YzQpe3ZhciBfMHgyZWI1NmM9XzB4YjFmOTExO3JldHVybiBfMHhjN2M5YzQ9PT1fMHgyZWI1NmMoMHgxZTMpfHxfMHhjN2M5YzQ9PT0nU3RyaW5nJ3x8XzB4YzdjOWM0PT09XzB4MmViNTZjKDB4MjE3KTt9W18weGIxZjkxMSgweDFlYSldKF8weDMzYjdmNCxfMHgyNGE1ZjksXzB4NDczZGYxLF8weDVmMjEyYSxfMHgzN2I5YjIsXzB4MjE0MDA2KXt2YXIgXzB4MjkzMTc1PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDM2YmE2KXt2YXIgXzB4NDgxZDRhPV8weDM3ZjksXzB4MzRmMWUyPV8weDM3YjliMltfMHg0ODFkNGEoMHgxYmUpXVtfMHg0ODFkNGEoMHgxNmQpXSxfMHgzYmRhODU9XzB4MzdiOWIyW18weDQ4MWQ0YSgweDFiZSldW18weDQ4MWQ0YSgweDFjNildLF8weGNhODhiPV8weDM3YjliMltfMHg0ODFkNGEoMHgxYmUpXVtfMHg0ODFkNGEoMHgyMmUpXTtfMHgzN2I5YjJbXzB4NDgxZDRhKDB4MWJlKV1bXzB4NDgxZDRhKDB4MjJlKV09XzB4MzRmMWUyLF8weDM3YjliMltfMHg0ODFkNGEoMHgxYmUpXVtfMHg0ODFkNGEoMHgxYzYpXT10eXBlb2YgXzB4NWYyMTJhPT1fMHg0ODFkNGEoMHgxOGQpP18weDVmMjEyYTpfMHgzNmJhNixfMHgzM2I3ZjRbXzB4NDgxZDRhKDB4MjAwKV0oXzB4MjkzMTc1W18weDQ4MWQ0YSgweDIxMSldKF8weDI0YTVmOSxfMHg0NzNkZjEsXzB4NWYyMTJhLF8weDM3YjliMixfMHgyMTQwMDYpKSxfMHgzN2I5YjJbJ25vZGUnXVsncGFyZW50J109XzB4Y2E4OGIsXzB4MzdiOWIyW18weDQ4MWQ0YSgweDFiZSldW18weDQ4MWQ0YSgweDFjNildPV8weDNiZGE4NTt9O31bXzB4YjFmOTExKDB4MjM2KV0oXzB4NDRlMDBkLF8weDM2YmM1ZixfMHgxYTY3MTksXzB4MTI5MDk4LF8weDE1OTk1YSxfMHgzOWNhNmQsXzB4MzRmNGI1KXt2YXIgXzB4NGRlY2MzPV8weGIxZjkxMSxfMHg0OWYwZDQ9dGhpcztyZXR1cm4gXzB4MzZiYzVmW18weDRkZWNjMygweDFhMCkrXzB4MTU5OTVhW18weDRkZWNjMygweDE5NyldKCldPSEweDAsZnVuY3Rpb24oXzB4NDViMTNkKXt2YXIgXzB4NDkzZTFlPV8weDRkZWNjMyxfMHgzODk0YzA9XzB4MzljYTZkW18weDQ5M2UxZSgweDFiZSldW18weDQ5M2UxZSgweDE2ZCldLF8weDI0ZmNiMT1fMHgzOWNhNmRbXzB4NDkzZTFlKDB4MWJlKV1bXzB4NDkzZTFlKDB4MWM2KV0sXzB4MWI4YzljPV8weDM5Y2E2ZFtfMHg0OTNlMWUoMHgxYmUpXVtfMHg0OTNlMWUoMHgyMmUpXTtfMHgzOWNhNmRbJ25vZGUnXVsncGFyZW50J109XzB4Mzg5NGMwLF8weDM5Y2E2ZFtfMHg0OTNlMWUoMHgxYmUpXVtfMHg0OTNlMWUoMHgxYzYpXT1fMHg0NWIxM2QsXzB4NDRlMDBkWydwdXNoJ10oXzB4NDlmMGQ0W18weDQ5M2UxZSgweDIxMSldKF8weDFhNjcxOSxfMHgxMjkwOTgsXzB4MTU5OTVhLF8weDM5Y2E2ZCxfMHgzNGY0YjUpKSxfMHgzOWNhNmRbXzB4NDkzZTFlKDB4MWJlKV1bXzB4NDkzZTFlKDB4MjJlKV09XzB4MWI4YzljLF8weDM5Y2E2ZFtfMHg0OTNlMWUoMHgxYmUpXVtfMHg0OTNlMWUoMHgxYzYpXT1fMHgyNGZjYjE7fTt9W18weGIxZjkxMSgweDIxMSldKF8weDEwNDY3OSxfMHgxYTFiN2YsXzB4NDBiYWYxLF8weDQ4N2Q3YixfMHg1NTFmZGQpe3ZhciBfMHg1ZDYzMTQ9XzB4YjFmOTExLF8weDFiNDJlOT10aGlzO18weDU1MWZkZHx8KF8weDU1MWZkZD1mdW5jdGlvbihfMHg0ZDczNTcsXzB4MTExYzhhKXtyZXR1cm4gXzB4NGQ3MzU3W18weDExMWM4YV07fSk7dmFyIF8weDM1NDUwMT1fMHg0MGJhZjFbXzB4NWQ2MzE0KDB4MTk3KV0oKSxfMHgxYTkxODc9XzB4NDg3ZDdiW18weDVkNjMxNCgweDFjYildfHx7fSxfMHg0ZmQ0YTY9XzB4NDg3ZDdiWydkZXB0aCddLF8weDRmNWE4Nj1fMHg0ODdkN2JbXzB4NWQ2MzE0KDB4MjBlKV07dHJ5e3ZhciBfMHhhMDNiMmY9dGhpc1tfMHg1ZDYzMTQoMHgxZmYpXShfMHgxMDQ2NzkpLF8weDEzZTIyNz1fMHgzNTQ1MDE7XzB4YTAzYjJmJiZfMHgxM2UyMjdbMHgwXT09PSdcXFxceDI3JyYmKF8weDEzZTIyNz1fMHgxM2UyMjdbXzB4NWQ2MzE0KDB4MWViKV0oMHgxLF8weDEzZTIyN1snbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDRiNDRlNT1fMHg0ODdkN2JbXzB4NWQ2MzE0KDB4MWNiKV09XzB4MWE5MTg3W18weDVkNjMxNCgweDFhMCkrXzB4MTNlMjI3XTtfMHg0YjQ0ZTUmJihfMHg0ODdkN2JbJ2RlcHRoJ109XzB4NDg3ZDdiW18weDVkNjMxNCgweDFjYyldKzB4MSksXzB4NDg3ZDdiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHg0YjQ0ZTU7dmFyIF8weDE0Y2ZiOD10eXBlb2YgXzB4NDBiYWYxPT1fMHg1ZDYzMTQoMHgxYmEpLF8weDFlYjI3OD17J25hbWUnOl8weDE0Y2ZiOHx8XzB4YTAzYjJmP18weDM1NDUwMTp0aGlzWydfcHJvcGVydHlOYW1lJ10oXzB4MzU0NTAxKX07aWYoXzB4MTRjZmI4JiYoXzB4MWViMjc4W18weDVkNjMxNCgweDFiYSldPSEweDApLCEoXzB4MWExYjdmPT09XzB4NWQ2MzE0KDB4MWQyKXx8XzB4MWExYjdmPT09XzB4NWQ2MzE0KDB4MjMxKSkpe3ZhciBfMHgxNDEwZGI9dGhpc1tfMHg1ZDYzMTQoMHgyMDUpXShfMHgxMDQ2NzksXzB4NDBiYWYxKTtpZihfMHgxNDEwZGImJihfMHgxNDEwZGJbXzB4NWQ2MzE0KDB4MjIzKV0mJihfMHgxZWIyNzhbXzB4NWQ2MzE0KDB4MTc1KV09ITB4MCksXzB4MTQxMGRiW18weDVkNjMxNCgweDFhMyldJiYhXzB4NGI0NGU1JiYhXzB4NDg3ZDdiW18weDVkNjMxNCgweDE2YyldKSlyZXR1cm4gXzB4MWViMjc4W18weDVkNjMxNCgweDE4NildPSEweDAsdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDFlYjI3OCxfMHg0ODdkN2IpLF8weDFlYjI3ODt9dmFyIF8weDRhYTBiYzt0cnl7XzB4NGFhMGJjPV8weDU1MWZkZChfMHgxMDQ2NzksXzB4NDBiYWYxKTt9Y2F0Y2goXzB4MTE1ZjdlKXtyZXR1cm4gXzB4MWViMjc4PXsnbmFtZSc6XzB4MzU0NTAxLCd0eXBlJzpfMHg1ZDYzMTQoMHgxYjkpLCdlcnJvcic6XzB4MTE1ZjdlW18weDVkNjMxNCgweDE3OSldfSx0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MWViMjc4LF8weDQ4N2Q3YiksXzB4MWViMjc4O312YXIgXzB4MzEzZDJmPXRoaXNbXzB4NWQ2MzE0KDB4MjM4KV0oXzB4NGFhMGJjKSxfMHgzYmNmYzQ9dGhpc1tfMHg1ZDYzMTQoMHgyMGEpXShfMHgzMTNkMmYpO2lmKF8weDFlYjI3OFtfMHg1ZDYzMTQoMHgyM2QpXT1fMHgzMTNkMmYsXzB4M2JjZmM0KXRoaXNbXzB4NWQ2MzE0KDB4MTllKV0oXzB4MWViMjc4LF8weDQ4N2Q3YixfMHg0YWEwYmMsZnVuY3Rpb24oKXt2YXIgXzB4M2ZiNWE5PV8weDVkNjMxNDtfMHgxZWIyNzhbXzB4M2ZiNWE5KDB4MWM4KV09XzB4NGFhMGJjWyd2YWx1ZU9mJ10oKSwhXzB4NGI0NGU1JiZfMHgxYjQyZTlbJ19jYXBJZlN0cmluZyddKF8weDMxM2QyZixfMHgxZWIyNzgsXzB4NDg3ZDdiLHt9KTt9KTtlbHNle3ZhciBfMHgxZGIwYWI9XzB4NDg3ZDdiWydhdXRvRXhwYW5kJ10mJl8weDQ4N2Q3YltfMHg1ZDYzMTQoMHgyMDIpXTxfMHg0ODdkN2JbXzB4NWQ2MzE0KDB4MTdjKV0mJl8weDQ4N2Q3YltfMHg1ZDYzMTQoMHgxODApXVtfMHg1ZDYzMTQoMHgyNDApXShfMHg0YWEwYmMpPDB4MCYmXzB4MzEzZDJmIT09XzB4NWQ2MzE0KDB4MjEzKSYmXzB4NDg3ZDdiW18weDVkNjMxNCgweDFmOSldPF8weDQ4N2Q3YltfMHg1ZDYzMTQoMHgxYzMpXTtfMHgxZGIwYWJ8fF8weDQ4N2Q3YltfMHg1ZDYzMTQoMHgyMDIpXTxfMHg0ZmQ0YTZ8fF8weDRiNDRlNT8odGhpc1tfMHg1ZDYzMTQoMHgyMjUpXShfMHgxZWIyNzgsXzB4NGFhMGJjLF8weDQ4N2Q3YixfMHg0YjQ0ZTV8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NGFhMGJjLF8weDFlYjI3OCkpOnRoaXNbXzB4NWQ2MzE0KDB4MTllKV0oXzB4MWViMjc4LF8weDQ4N2Q3YixfMHg0YWEwYmMsZnVuY3Rpb24oKXt2YXIgXzB4NWM4NGEyPV8weDVkNjMxNDtfMHgzMTNkMmY9PT1fMHg1Yzg0YTIoMHgxZjcpfHxfMHgzMTNkMmY9PT0ndW5kZWZpbmVkJ3x8KGRlbGV0ZSBfMHgxZWIyNzhbXzB4NWM4NGEyKDB4MWM4KV0sXzB4MWViMjc4W18weDVjODRhMigweDE3MSldPSEweDApO30pO31yZXR1cm4gXzB4MWViMjc4O31maW5hbGx5e18weDQ4N2Q3YlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4MWE5MTg3LF8weDQ4N2Q3YltfMHg1ZDYzMTQoMHgxY2MpXT1fMHg0ZmQ0YTYsXzB4NDg3ZDdiW18weDVkNjMxNCgweDIwZSldPV8weDRmNWE4Njt9fVtfMHhiMWY5MTEoMHgyMGYpXShfMHhmMDM5ZWUsXzB4NTNiYTYzLF8weDM0YTgwNCxfMHgxMmFhYzYpe3ZhciBfMHhhYjYzOTU9XzB4YjFmOTExLF8weDExMzFkOD1fMHgxMmFhYzZbXzB4YWI2Mzk1KDB4MWIxKV18fF8weDM0YTgwNFtfMHhhYjYzOTUoMHgxYjEpXTtpZigoXzB4ZjAzOWVlPT09XzB4YWI2Mzk1KDB4MWMyKXx8XzB4ZjAzOWVlPT09XzB4YWI2Mzk1KDB4MWE5KSkmJl8weDUzYmE2M1sndmFsdWUnXSl7bGV0IF8weDE3MzQzOD1fMHg1M2JhNjNbJ3ZhbHVlJ11bXzB4YWI2Mzk1KDB4MTk0KV07XzB4MzRhODA0W18weGFiNjM5NSgweDE2MildKz1fMHgxNzM0MzgsXzB4MzRhODA0W18weGFiNjM5NSgweDE2MildPl8weDM0YTgwNFtfMHhhYjYzOTUoMHgxY2QpXT8oXzB4NTNiYTYzW18weGFiNjM5NSgweDE3MSldPScnLGRlbGV0ZSBfMHg1M2JhNjNbXzB4YWI2Mzk1KDB4MWM4KV0pOl8weDE3MzQzOD5fMHgxMTMxZDgmJihfMHg1M2JhNjNbXzB4YWI2Mzk1KDB4MTcxKV09XzB4NTNiYTYzW18weGFiNjM5NSgweDFjOCldW18weGFiNjM5NSgweDFlYildKDB4MCxfMHgxMTMxZDgpLGRlbGV0ZSBfMHg1M2JhNjNbXzB4YWI2Mzk1KDB4MWM4KV0pO319W18weGIxZjkxMSgweDFmZildKF8weDI0ZjQxNil7dmFyIF8weDJmMTBkMz1fMHhiMWY5MTE7cmV0dXJuISEoXzB4MjRmNDE2JiZfMHg1NjczOTBbXzB4MmYxMGQzKDB4MWU4KV0mJnRoaXNbXzB4MmYxMGQzKDB4MjI5KV0oXzB4MjRmNDE2KT09PV8weDJmMTBkMygweDIxYSkmJl8weDI0ZjQxNltfMHgyZjEwZDMoMHgxYTIpXSk7fVtfMHhiMWY5MTEoMHgyMGIpXShfMHgyZDk2YjEpe3ZhciBfMHg0YTU4YTk9XzB4YjFmOTExO2lmKF8weDJkOTZiMVtfMHg0YTU4YTkoMHgxOGEpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4MmQ5NmIxO3ZhciBfMHgyNGJhZWM7dHJ5e18weDI0YmFlYz1KU09OW18weDRhNThhOSgweDIwNildKCcnK18weDJkOTZiMSk7fWNhdGNoe18weDI0YmFlYz0nXFxcXHgyMicrdGhpc1tfMHg0YTU4YTkoMHgyMjkpXShfMHgyZDk2YjEpKydcXFxceDIyJzt9cmV0dXJuIF8weDI0YmFlY1tfMHg0YTU4YTkoMHgxOGEpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDI0YmFlYz1fMHgyNGJhZWNbJ3N1YnN0ciddKDB4MSxfMHgyNGJhZWNbJ2xlbmd0aCddLTB4Mik6XzB4MjRiYWVjPV8weDI0YmFlY1tfMHg0YTU4YTkoMHgxZDMpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDRhNThhOSgweDFkMyldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDRhNThhOSgweDFkMyldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgyNGJhZWM7fVsnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDE4ZWNlNixfMHg1MzAwMzYsXzB4ZGNkN2MwLF8weDFjNTIxYSl7dmFyIF8weDEwN2FmNj1fMHhiMWY5MTE7dGhpc1tfMHgxMDdhZjYoMHgxZTApXShfMHgxOGVjZTYsXzB4NTMwMDM2KSxfMHgxYzUyMWEmJl8weDFjNTIxYSgpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHhkY2Q3YzAsXzB4MThlY2U2KSx0aGlzW18weDEwN2FmNigweDFmMildKF8weDE4ZWNlNixfMHg1MzAwMzYpO31bXzB4YjFmOTExKDB4MWUwKV0oXzB4MWVmMjlhLF8weDE2YzQ3YSl7dmFyIF8weGMxNGQyOD1fMHhiMWY5MTE7dGhpc1snX3NldE5vZGVJZCddKF8weDFlZjI5YSxfMHgxNmM0N2EpLHRoaXNbXzB4YzE0ZDI4KDB4MTViKV0oXzB4MWVmMjlhLF8weDE2YzQ3YSksdGhpc1tfMHhjMTRkMjgoMHgyMzcpXShfMHgxZWYyOWEsXzB4MTZjNDdhKSx0aGlzW18weGMxNGQyOCgweDE3NildKF8weDFlZjI5YSxfMHgxNmM0N2EpO31bJ19zZXROb2RlSWQnXShfMHgyNTAzOGEsXzB4NTljYmQwKXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDRjNDQyZixfMHg5ZmRkMDApe31bXzB4YjFmOTExKDB4MTY1KV0oXzB4MzJjNTNhLF8weDE3NTFkNil7fVtfMHhiMWY5MTEoMHgxODkpXShfMHgyNzNiNTApe3ZhciBfMHgxOGM4YWI9XzB4YjFmOTExO3JldHVybiBfMHgyNzNiNTA9PT10aGlzW18weDE4YzhhYigweDE5YyldO31bXzB4YjFmOTExKDB4MWYyKV0oXzB4NDljN2Q1LF8weDExNTY5OSl7dmFyIF8weDExYzNiNT1fMHhiMWY5MTE7dGhpc1snX3NldE5vZGVMYWJlbCddKF8weDQ5YzdkNSxfMHgxMTU2OTkpLHRoaXNbXzB4MTFjM2I1KDB4MjJjKV0oXzB4NDljN2Q1KSxfMHgxMTU2OTlbXzB4MTFjM2I1KDB4MTczKV0mJnRoaXNbXzB4MTFjM2I1KDB4MjNjKV0oXzB4NDljN2Q1KSx0aGlzW18weDExYzNiNSgweDE2ZildKF8weDQ5YzdkNSxfMHgxMTU2OTkpLHRoaXNbXzB4MTFjM2I1KDB4MWQ2KV0oXzB4NDljN2Q1LF8weDExNTY5OSksdGhpc1tfMHgxMWMzYjUoMHgxNjYpXShfMHg0OWM3ZDUpO31bJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg0YzQ0ZGUsXzB4NTYyMDZjKXt2YXIgXzB4NTUxZjJjPV8weGIxZjkxMTtsZXQgXzB4MzQzZGUzO3RyeXtfMHg1NjczOTBbJ2NvbnNvbGUnXSYmKF8weDM0M2RlMz1fMHg1NjczOTBbXzB4NTUxZjJjKDB4MTdiKV1bXzB4NTUxZjJjKDB4MWE1KV0sXzB4NTY3MzkwW18weDU1MWYyYygweDE3YildW18weDU1MWYyYygweDFhNSldPWZ1bmN0aW9uKCl7fSksXzB4NGM0NGRlJiZ0eXBlb2YgXzB4NGM0NGRlW18weDU1MWYyYygweDE5NCldPT0nbnVtYmVyJyYmKF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgxOTQpXT1fMHg0YzQ0ZGVbJ2xlbmd0aCddKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MzQzZGUzJiYoXzB4NTY3MzkwW18weDU1MWYyYygweDE3YildW18weDU1MWYyYygweDFhNSldPV8weDM0M2RlMyk7fWlmKF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgyM2QpXT09PV8weDU1MWYyYygweDE4ZCl8fF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgyM2QpXT09PV8weDU1MWYyYygweDIxNykpe2lmKGlzTmFOKF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgxYzgpXSkpXzB4NTYyMDZjW18weDU1MWYyYygweDE4MSldPSEweDAsZGVsZXRlIF8weDU2MjA2Y1sndmFsdWUnXTtlbHNlIHN3aXRjaChfMHg1NjIwNmNbXzB4NTUxZjJjKDB4MWM4KV0pe2Nhc2UgTnVtYmVyW18weDU1MWYyYygweDIxOCldOl8weDU2MjA2Y1tfMHg1NTFmMmMoMHgxZDUpXT0hMHgwLGRlbGV0ZSBfMHg1NjIwNmNbXzB4NTUxZjJjKDB4MWM4KV07YnJlYWs7Y2FzZSBOdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ106XzB4NTYyMDZjW18weDU1MWYyYygweDFhNCldPSEweDAsZGVsZXRlIF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgxYzgpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDU1MWYyYygweDE1ZSldKF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgxYzgpXSkmJihfMHg1NjIwNmNbXzB4NTUxZjJjKDB4MWI1KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDU2MjA2Y1tfMHg1NTFmMmMoMHgyM2QpXT09PSdmdW5jdGlvbicmJnR5cGVvZiBfMHg0YzQ0ZGVbXzB4NTUxZjJjKDB4MTlhKV09PSdzdHJpbmcnJiZfMHg0YzQ0ZGVbJ25hbWUnXSYmXzB4NTYyMDZjWyduYW1lJ10mJl8weDRjNDRkZVtfMHg1NTFmMmMoMHgxOWEpXSE9PV8weDU2MjA2Y1tfMHg1NTFmMmMoMHgxOWEpXSYmKF8weDU2MjA2Y1snZnVuY05hbWUnXT1fMHg0YzQ0ZGVbXzB4NTUxZjJjKDB4MTlhKV0pO31bXzB4YjFmOTExKDB4MTVlKV0oXzB4MWM1NDhmKXt2YXIgXzB4NTAwN2MzPV8weGIxZjkxMTtyZXR1cm4gMHgxL18weDFjNTQ4Zj09PU51bWJlcltfMHg1MDA3YzMoMHgxNjApXTt9W18weGIxZjkxMSgweDIzYyldKF8weGE2ODg5Yyl7dmFyIF8weDFlYjYzNz1fMHhiMWY5MTE7IV8weGE2ODg5Y1tfMHgxZWI2MzcoMHgyMjApXXx8IV8weGE2ODg5Y1tfMHgxZWI2MzcoMHgyMjApXVsnbGVuZ3RoJ118fF8weGE2ODg5Y1tfMHgxZWI2MzcoMHgyM2QpXT09PSdhcnJheSd8fF8weGE2ODg5Y1tfMHgxZWI2MzcoMHgyM2QpXT09PV8weDFlYjYzNygweDFlOCl8fF8weGE2ODg5Y1sndHlwZSddPT09XzB4MWViNjM3KDB4MWE2KXx8XzB4YTY4ODljW18weDFlYjYzNygweDIyMCldWydzb3J0J10oZnVuY3Rpb24oXzB4MmFlOTlkLF8weGU3MDEyMil7dmFyIF8weDVhM2FmYz1fMHgxZWI2MzcsXzB4MWIwNWM4PV8weDJhZTk5ZFtfMHg1YTNhZmMoMHgxOWEpXVsndG9Mb3dlckNhc2UnXSgpLF8weDRlOThkMj1fMHhlNzAxMjJbXzB4NWEzYWZjKDB4MTlhKV1bXzB4NWEzYWZjKDB4MWFiKV0oKTtyZXR1cm4gXzB4MWIwNWM4PF8weDRlOThkMj8tMHgxOl8weDFiMDVjOD5fMHg0ZTk4ZDI/MHgxOjB4MDt9KTt9W18weGIxZjkxMSgweDE2ZildKF8weDVmMDI1OSxfMHgxZDY5OTcpe3ZhciBfMHgxNDU4MGM9XzB4YjFmOTExO2lmKCEoXzB4MWQ2OTk3Wydub0Z1bmN0aW9ucyddfHwhXzB4NWYwMjU5Wydwcm9wcyddfHwhXzB4NWYwMjU5Wydwcm9wcyddW18weDE0NTgwYygweDE5NCldKSl7Zm9yKHZhciBfMHgxZDVkMWE9W10sXzB4MzJhYWQ0PVtdLF8weDMzOTRjND0weDAsXzB4NTc5NmQ4PV8weDVmMDI1OVsncHJvcHMnXVtfMHgxNDU4MGMoMHgxOTQpXTtfMHgzMzk0YzQ8XzB4NTc5NmQ4O18weDMzOTRjNCsrKXt2YXIgXzB4Mzc0MmU1PV8weDVmMDI1OVtfMHgxNDU4MGMoMHgyMjApXVtfMHgzMzk0YzRdO18weDM3NDJlNVsndHlwZSddPT09XzB4MTQ1ODBjKDB4MjEzKT9fMHgxZDVkMWFbXzB4MTQ1ODBjKDB4MjAwKV0oXzB4Mzc0MmU1KTpfMHgzMmFhZDRbXzB4MTQ1ODBjKDB4MjAwKV0oXzB4Mzc0MmU1KTt9aWYoISghXzB4MzJhYWQ0WydsZW5ndGgnXXx8XzB4MWQ1ZDFhWydsZW5ndGgnXTw9MHgxKSl7XzB4NWYwMjU5W18weDE0NTgwYygweDIyMCldPV8weDMyYWFkNDt2YXIgXzB4M2ViNTk2PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDFkNWQxYX07dGhpc1tfMHgxNDU4MGMoMHgxNTkpXShfMHgzZWI1OTYsXzB4MWQ2OTk3KSx0aGlzW18weDE0NTgwYygweDE2NSldKF8weDNlYjU5NixfMHgxZDY5OTcpLHRoaXNbXzB4MTQ1ODBjKDB4MjJjKV0oXzB4M2ViNTk2KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4M2ViNTk2LF8weDFkNjk5NyksXzB4M2ViNTk2WydpZCddKz0nXFxcXHgyMGYnLF8weDVmMDI1OVsncHJvcHMnXVtfMHgxNDU4MGMoMHgxZDcpXShfMHgzZWI1OTYpO319fVsnX2FkZExvYWROb2RlJ10oXzB4NDg1YTJjLF8weDIwYzlhZil7fVtfMHhiMWY5MTEoMHgyMmMpXShfMHgxODIzYmQpe31bXzB4YjFmOTExKDB4MThlKV0oXzB4MmZhMTI3KXt2YXIgXzB4MWNiNmYwPV8weGIxZjkxMTtyZXR1cm4gQXJyYXlbXzB4MWNiNmYwKDB4MjIyKV0oXzB4MmZhMTI3KXx8dHlwZW9mIF8weDJmYTEyNz09XzB4MWNiNmYwKDB4MjFiKSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmZhMTI3KT09PV8weDFjYjZmMCgweDIxZik7fVtfMHhiMWY5MTEoMHgxNzYpXShfMHgzM2Q5NmMsXzB4Mjk4YWEwKXt9W18weGIxZjkxMSgweDE2NildKF8weDRiZjM1Nyl7dmFyIF8weDE1ZGM3Zj1fMHhiMWY5MTE7ZGVsZXRlIF8weDRiZjM1N1snX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJ10sZGVsZXRlIF8weDRiZjM1N1tfMHgxNWRjN2YoMHgyMmYpXSxkZWxldGUgXzB4NGJmMzU3W18weDE1ZGM3ZigweDFiMildO31bXzB4YjFmOTExKDB4MjM3KV0oXzB4NTNmMmI0LF8weGQxMGEpe319bGV0IF8weDMxNWVlZD1uZXcgXzB4MjAzMGY2KCksXzB4MmRjYjYxPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDJiNWU4ND17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDVlNjRkMyhfMHg1ZWJhNjQsXzB4NTI1M2QyLF8weDQyNmFlNSxfMHgyNDRiYmQsXzB4NTFkNDJjLF8weDU1OTUxOSl7dmFyIF8weDM2NzdhMj1fMHhiMWY5MTE7bGV0IF8weDM0ODA0LF8weGQ2MWM5MTt0cnl7XzB4ZDYxYzkxPV8weDRlNGQwYygpLF8weDM0ODA0PV8weDMzNjVmZFtfMHg1MjUzZDJdLCFfMHgzNDgwNHx8XzB4ZDYxYzkxLV8weDM0ODA0Wyd0cyddPjB4MWY0JiZfMHgzNDgwNFtfMHgzNjc3YTIoMHgxZTUpXSYmXzB4MzQ4MDRbXzB4MzY3N2EyKDB4MTYzKV0vXzB4MzQ4MDRbXzB4MzY3N2EyKDB4MWU1KV08MHg2ND8oXzB4MzM2NWZkW18weDUyNTNkMl09XzB4MzQ4MDQ9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHhkNjFjOTF9LF8weDMzNjVmZFsnaGl0cyddPXt9KTpfMHhkNjFjOTEtXzB4MzM2NWZkW18weDM2NzdhMigweDFhMSldWyd0cyddPjB4MzImJl8weDMzNjVmZFtfMHgzNjc3YTIoMHgxYTEpXVtfMHgzNjc3YTIoMHgxZTUpXSYmXzB4MzM2NWZkW18weDM2NzdhMigweDFhMSldWyd0aW1lJ10vXzB4MzM2NWZkWydoaXRzJ11bXzB4MzY3N2EyKDB4MWU1KV08MHg2NCYmKF8weDMzNjVmZFtfMHgzNjc3YTIoMHgxYTEpXT17fSk7bGV0IF8weDI4MzE3MD1bXSxfMHgyMTE3ODc9XzB4MzQ4MDRbXzB4MzY3N2EyKDB4MTZiKV18fF8weDMzNjVmZFsnaGl0cyddW18weDM2NzdhMigweDE2YildP18weDJiNWU4NDpfMHgyZGNiNjEsXzB4NTU5ZjRiPV8weDIxZWViNT0+e3ZhciBfMHg0MTQwNDc9XzB4MzY3N2EyO2xldCBfMHgyOWRiYzY9e307cmV0dXJuIF8weDI5ZGJjNltfMHg0MTQwNDcoMHgyMjApXT1fMHgyMWVlYjVbXzB4NDE0MDQ3KDB4MjIwKV0sXzB4MjlkYmM2WydlbGVtZW50cyddPV8weDIxZWViNVsnZWxlbWVudHMnXSxfMHgyOWRiYzZbJ3N0ckxlbmd0aCddPV8weDIxZWViNVtfMHg0MTQwNDcoMHgxYjEpXSxfMHgyOWRiYzZbXzB4NDE0MDQ3KDB4MWNkKV09XzB4MjFlZWI1Wyd0b3RhbFN0ckxlbmd0aCddLF8weDI5ZGJjNltfMHg0MTQwNDcoMHgxYzMpXT1fMHgyMWVlYjVbXzB4NDE0MDQ3KDB4MWMzKV0sXzB4MjlkYmM2W18weDQxNDA0NygweDE3YyldPV8weDIxZWViNVtfMHg0MTQwNDcoMHgxN2MpXSxfMHgyOWRiYzZbXzB4NDE0MDQ3KDB4MTczKV09ITB4MSxfMHgyOWRiYzZbJ25vRnVuY3Rpb25zJ109IV8weDNjMDNhMCxfMHgyOWRiYzZbJ2RlcHRoJ109MHgxLF8weDI5ZGJjNltfMHg0MTQwNDcoMHgyMDIpXT0weDAsXzB4MjlkYmM2W18weDQxNDA0NygweDI0NCldPSdyb290X2V4cF9pZCcsXzB4MjlkYmM2W18weDQxNDA0NygweDFiZildPV8weDQxNDA0NygweDFmZCksXzB4MjlkYmM2WydhdXRvRXhwYW5kJ109ITB4MCxfMHgyOWRiYzZbXzB4NDE0MDQ3KDB4MTgwKV09W10sXzB4MjlkYmM2WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPTB4MCxfMHgyOWRiYzZbXzB4NDE0MDQ3KDB4MTZjKV09ITB4MCxfMHgyOWRiYzZbXzB4NDE0MDQ3KDB4MTYyKV09MHgwLF8weDI5ZGJjNltfMHg0MTQwNDcoMHgxYmUpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgyOWRiYzY7fTtmb3IodmFyIF8weDVjNjRhYT0weDA7XzB4NWM2NGFhPF8weDUxZDQyY1tfMHgzNjc3YTIoMHgxOTQpXTtfMHg1YzY0YWErKylfMHgyODMxNzBbXzB4MzY3N2EyKDB4MjAwKV0oXzB4MzE1ZWVkW18weDM2NzdhMigweDIyNSldKHsndGltZU5vZGUnOl8weDVlYmE2ND09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDUxZDQyY1tfMHg1YzY0YWFdLF8weDU1OWY0YihfMHgyMTE3ODcpLHt9KSk7aWYoXzB4NWViYTY0PT09XzB4MzY3N2EyKDB4MTkyKSl7bGV0IF8weDMyN2M4NT1FcnJvcltfMHgzNjc3YTIoMHgxYWQpXTt0cnl7RXJyb3JbXzB4MzY3N2EyKDB4MWFkKV09MHgxLzB4MCxfMHgyODMxNzBbXzB4MzY3N2EyKDB4MjAwKV0oXzB4MzE1ZWVkW18weDM2NzdhMigweDIyNSldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgzNjc3YTIoMHgyMzIpXSxfMHg1NTlmNGIoXzB4MjExNzg3KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgzNjc3YTIoMHgxYWQpXT1fMHgzMjdjODU7fX1yZXR1cm57J21ldGhvZCc6XzB4MzY3N2EyKDB4MjBkKSwndmVyc2lvbic6XzB4MmZmMDBlLCdhcmdzJzpbeyd0cyc6XzB4NDI2YWU1LCdzZXNzaW9uJzpfMHgyNDRiYmQsJ2FyZ3MnOl8weDI4MzE3MCwnaWQnOl8weDUyNTNkMiwnY29udGV4dCc6XzB4NTU5NTE5fV19O31jYXRjaChfMHhmMzQwZDUpe3JldHVybnsnbWV0aG9kJzpfMHgzNjc3YTIoMHgyMGQpLCd2ZXJzaW9uJzpfMHgyZmYwMGUsJ2FyZ3MnOlt7J3RzJzpfMHg0MjZhZTUsJ3Nlc3Npb24nOl8weDI0NGJiZCwnYXJncyc6W3sndHlwZSc6J3Vua25vd24nLCdlcnJvcic6XzB4ZjM0MGQ1JiZfMHhmMzQwZDVbXzB4MzY3N2EyKDB4MTc5KV19XSwnaWQnOl8weDUyNTNkMiwnY29udGV4dCc6XzB4NTU5NTE5fV19O31maW5hbGx5e3RyeXtpZihfMHgzNDgwNCYmXzB4ZDYxYzkxKXtsZXQgXzB4M2Q0OWQ3PV8weDRlNGQwYygpO18weDM0ODA0Wydjb3VudCddKyssXzB4MzQ4MDRbXzB4MzY3N2EyKDB4MTYzKV0rPV8weDRjODQ1YihfMHhkNjFjOTEsXzB4M2Q0OWQ3KSxfMHgzNDgwNFsndHMnXT1fMHgzZDQ5ZDcsXzB4MzM2NWZkW18weDM2NzdhMigweDFhMSldWydjb3VudCddKyssXzB4MzM2NWZkW18weDM2NzdhMigweDFhMSldWyd0aW1lJ10rPV8weDRjODQ1YihfMHhkNjFjOTEsXzB4M2Q0OWQ3KSxfMHgzMzY1ZmRbXzB4MzY3N2EyKDB4MWExKV1bJ3RzJ109XzB4M2Q0OWQ3LChfMHgzNDgwNFtfMHgzNjc3YTIoMHgxZTUpXT4weDMyfHxfMHgzNDgwNFtfMHgzNjc3YTIoMHgxNjMpXT4weDY0KSYmKF8weDM0ODA0W18weDM2NzdhMigweDE2YildPSEweDApLChfMHgzMzY1ZmRbJ2hpdHMnXVtfMHgzNjc3YTIoMHgxZTUpXT4weDNlOHx8XzB4MzM2NWZkW18weDM2NzdhMigweDFhMSldW18weDM2NzdhMigweDE2MyldPjB4MTJjKSYmKF8weDMzNjVmZFsnaGl0cyddW18weDM2NzdhMigweDE2YildPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDVlNjRkMzt9KChfMHg5NGJhZTQsXzB4NGRmMmZkLF8weDIzZDQ2MCxfMHg1YzI4YjQsXzB4MzIyYjYwLF8weDJiOThiMSxfMHg0MDU0ODYsXzB4MzcxYWMwLF8weDU4Y2JlMik9Pnt2YXIgXzB4YzIxZjFhPV8weDVlM2RhOTtpZihfMHg5NGJhZTRbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDk0YmFlNFtfMHhjMjFmMWEoMHgyMmQpXTtpZighWShfMHg5NGJhZTQsXzB4MzcxYWMwLF8weDMyMmI2MCkpcmV0dXJuIF8weDk0YmFlNFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4OTRiYWU0WydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxNTc4M2I9UihfMHg5NGJhZTQpLF8weDVkZTQyND1fMHgxNTc4M2JbXzB4YzIxZjFhKDB4MWM3KV0sXzB4ZTA0ZmRiPV8weDE1NzgzYltfMHhjMjFmMWEoMHgxOTMpXSxfMHgyYzlmNDU9XzB4MTU3ODNiW18weGMyMWYxYSgweDFhYyldLF8weDE2MjY2ND17J2hpdHMnOnt9LCd0cyc6e319LF8weDEwNDQzMj1RKF8weDk0YmFlNCxfMHg1OGNiZTIsXzB4MTYyNjY0LF8weDJiOThiMSksXzB4NWJiZjYwPV8weDMwMzA1Nj0+e18weDE2MjY2NFsndHMnXVtfMHgzMDMwNTZdPV8weGUwNGZkYigpO30sXzB4NjA0ZGQ5PShfMHgyZmExMGEsXzB4MmE1YTY3KT0+e3ZhciBfMHg5ODhlYmM9XzB4YzIxZjFhO2xldCBfMHgxNjk3MzY9XzB4MTYyNjY0Wyd0cyddW18weDJhNWE2N107aWYoZGVsZXRlIF8weDE2MjY2NFsndHMnXVtfMHgyYTVhNjddLF8weDE2OTczNil7bGV0IF8weDUxMDVkZT1fMHg1ZGU0MjQoXzB4MTY5NzM2LF8weGUwNGZkYigpKTtfMHg0ZWExOTIoXzB4MTA0NDMyKF8weDk4OGViYygweDE2MyksXzB4MmZhMTBhLF8weDJjOWY0NSgpLF8weDM5MWE5YixbXzB4NTEwNWRlXSxfMHgyYTVhNjcpKTt9fSxfMHgyNDMxZjU9XzB4NGFjNzA2PT5fMHg0MzQ4ZDQ9Pnt2YXIgXzB4NWVlM2EyPV8weGMyMWYxYTt0cnl7XzB4NWJiZjYwKF8weDQzNDhkNCksXzB4NGFjNzA2KF8weDQzNDhkNCk7fWZpbmFsbHl7XzB4OTRiYWU0W18weDVlZTNhMigweDE3YildW18weDVlZTNhMigweDE2MyldPV8weDRhYzcwNjt9fSxfMHgyNjRjOTI9XzB4NTM4OGNhPT5fMHgyZGFmMTE9Pnt2YXIgXzB4MjQ2YzJmPV8weGMyMWYxYTt0cnl7bGV0IFtfMHgzMTQ1MzQsXzB4NDcxNDllXT1fMHgyZGFmMTFbXzB4MjQ2YzJmKDB4MTU4KV0oXzB4MjQ2YzJmKDB4MWNhKSk7XzB4NjA0ZGQ5KF8weDQ3MTQ5ZSxfMHgzMTQ1MzQpLF8weDUzODhjYShfMHgzMTQ1MzQpO31maW5hbGx5e18weDk0YmFlNFtfMHgyNDZjMmYoMHgxN2IpXVtfMHgyNDZjMmYoMHgxYjQpXT1fMHg1Mzg4Y2E7fX07XzB4OTRiYWU0W18weGMyMWYxYSgweDIyZCldPXsnY29uc29sZUxvZyc6KF8weDgxYzIyYixfMHgyNGYwZDEpPT57dmFyIF8weDliYWNjMD1fMHhjMjFmMWE7XzB4OTRiYWU0W18weDliYWNjMCgweDE3YildW18weDliYWNjMCgweDIwZCldWyduYW1lJ10hPT0nZGlzYWJsZWRMb2cnJiZfMHg0ZWExOTIoXzB4MTA0NDMyKF8weDliYWNjMCgweDIwZCksXzB4ODFjMjJiLF8weDJjOWY0NSgpLF8weDM5MWE5YixfMHgyNGYwZDEpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgxNTExZDYsXzB4MjRmNmFkKT0+e3ZhciBfMHg0MDhhZjA9XzB4YzIxZjFhO18weDk0YmFlNFtfMHg0MDhhZjAoMHgxN2IpXVtfMHg0MDhhZjAoMHgyMGQpXVsnbmFtZSddIT09XzB4NDA4YWYwKDB4MTY5KSYmXzB4NGVhMTkyKF8weDEwNDQzMigndHJhY2UnLF8weDE1MTFkNixfMHgyYzlmNDUoKSxfMHgzOTFhOWIsXzB4MjRmNmFkKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDU4ZDlkMj1fMHhjMjFmMWE7XzB4OTRiYWU0W18weDU4ZDlkMigweDE3YildW18weDU4ZDlkMigweDE2MyldPV8weDI0MzFmNShfMHg5NGJhZTRbXzB4NThkOWQyKDB4MTdiKV1bJ3RpbWUnXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDVlNzdjMD1fMHhjMjFmMWE7XzB4OTRiYWU0W18weDVlNzdjMCgweDE3YildWyd0aW1lRW5kJ109XzB4MjY0YzkyKF8weDk0YmFlNFsnY29uc29sZSddW18weDVlNzdjMCgweDFiNCldKTt9LCdhdXRvTG9nJzooXzB4NWFmMmJlLF8weDUxNWQ0Zik9Pnt2YXIgXzB4MmQzODRkPV8weGMyMWYxYTtfMHg0ZWExOTIoXzB4MTA0NDMyKF8weDJkMzg0ZCgweDIwZCksXzB4NTE1ZDRmLF8weDJjOWY0NSgpLF8weDM5MWE5YixbXzB4NWFmMmJlXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4MjYyODhmLF8weDQxMDAwOCk9Pnt2YXIgXzB4MmYxY2Q3PV8weGMyMWYxYTtfMHg0ZWExOTIoXzB4MTA0NDMyKF8weDJmMWNkNygweDIwZCksXzB4MjYyODhmLF8weDJjOWY0NSgpLF8weDM5MWE5YixfMHg0MTAwMDgpKTt9LCdhdXRvVHJhY2UnOihfMHg0M2Q2NTEsXzB4MWUxMzdmKT0+e3ZhciBfMHgxNzZhMTQ9XzB4YzIxZjFhO18weDRlYTE5MihfMHgxMDQ0MzIoXzB4MTc2YTE0KDB4MTkyKSxfMHgxZTEzN2YsXzB4MmM5ZjQ1KCksXzB4MzkxYTliLFtfMHg0M2Q2NTFdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDFiZjUwMCxfMHgyMDI3ZDgpPT57XzB4NGVhMTkyKF8weDEwNDQzMigndHJhY2UnLF8weDFiZjUwMCxfMHgyYzlmNDUoKSxfMHgzOTFhOWIsXzB4MjAyN2Q4KSk7fSwnYXV0b1RpbWUnOihfMHgyNTMyNDMsXzB4NDI5ZGI4LF8weDU5MTZlMik9PntfMHg1YmJmNjAoXzB4NTkxNmUyKTt9LCdhdXRvVGltZUVuZCc6KF8weDUxNzI1OCxfMHg1MDJhM2QsXzB4NDAzYTIxKT0+e18weDYwNGRkOShfMHg1MDJhM2QsXzB4NDAzYTIxKTt9LCdjb3ZlcmFnZSc6XzB4NGI5YjQxPT57dmFyIF8weDM4NTM5Nz1fMHhjMjFmMWE7XzB4NGVhMTkyKHsnbWV0aG9kJzpfMHgzODUzOTcoMHgxZGIpLCd2ZXJzaW9uJzpfMHgyYjk4YjEsJ2FyZ3MnOlt7J2lkJzpfMHg0YjliNDF9XX0pO319O2xldCBfMHg0ZWExOTI9SihfMHg5NGJhZTQsXzB4NGRmMmZkLF8weDIzZDQ2MCxfMHg1YzI4YjQsXzB4MzIyYjYwKSxfMHgzOTFhOWI9XzB4OTRiYWU0W18weGMyMWYxYSgweDIyOCldO3JldHVybiBfMHg5NGJhZTRbJ19jb25zb2xlX25pbmphJ107fSkoZ2xvYmFsVGhpcyxfMHg1ZTNkYTkoMHgxZDQpLCczNzkxMScsXzB4NWUzZGE5KDB4MWM5KSxfMHg1ZTNkYTkoMHgxYzQpLF8weDVlM2RhOSgweDI0MiksXzB4NWUzZGE5KDB4MWMxKSxfMHg1ZTNkYTkoMHgxZWMpLF8weDVlM2RhOSgweDFlZikpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJjb25zdCBzdG9yYWdlID0gW107XG5cbmV4cG9ydCB7c3RvcmFnZX07IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHRhZ3MsIGNoZWNrbGlzdCwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL01PRFVMRSBJTVBPUlQgU0VDVElPTlxuXG5pbXBvcnQgeyBpbnB1dENhcmQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0Q2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL21vZHVsZXMvY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tMaXN0XCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXJUYXNrXCI7XG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW1vdmVUYXNrXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbi8vREVDTEFSQVRJT04gU0VDVElPTlxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJywgJ2J0bicsICdidG4tcHJpbWFyeScpO1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdOZXcgdGFzayc7XG5cbndpbmRvdy5yZW1vdmVUYXNrID0gcmVtb3ZlVGFzaztcblxuLy8gQVBQUEVORCBTRUNUSU9OXG5cbm1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuXG5cbi8vIEVWRU5UIExJU1RFTkVSIFNFQ1RJT05cblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHN1Ym1pdEJ0bklkID0gJ3Rhc2stc3VibWl0LWJ0bic7XG4gICAgY29uc3QgYmFja0J0bklkID0gJ3Rhc2stYmFjay1idG4nO1xuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuaWQgPT09IHN1Ym1pdEJ0bklkKSB7XG4gICAgICAgIGNvbnN0IHRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1zdWJtaXQtYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlUGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGVQaWNrZXInKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5UGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5UGlja2VyJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1mb3JtJyk7XG5cbiAgICAgICAgdGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2sodGFza05hbWVUZXh0LCB0YXNrRGVzY3JpcHRpb25UZXh0LCB0YXNrRGF0ZVBpY2tlZCwgdGFza1ByaW9yaXR5UGlja2VkLCAnJywgJycsICcnKSk7XG4gICAgICAgIHRhc2tTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrKTtcblxuICAgICAgICB0YXNrRm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgaW5wdXRDYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRFbGVtZW50LmlkID09PSBiYWNrQnRuSWQpIHtcbiAgICAgICAgaW5wdXRDYXJkLnJlbW92ZSgpO1xuICAgIH1cblxufSwgdHJ1ZSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0Q2FyZCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=