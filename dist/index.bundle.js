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
}

.task-btn-container {
    display: flex;
    gap: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,oBAAoB;AACxB;;AAEA,mCAAmC;;AAEnC;IACI,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;IACzB,8CAA8C;IAC9C,+CAA+C;IAC/C,gDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,SAAS;AACb","sourcesContent":["html, body {\n    margin: 0;\n    height: 100%;\n    scroll-behavior: smooth;\n}\n\n.main {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n}\n\n.sidebar-component {\n    grid-column: 1 / 2;\n}\n\n.navbar-component {\n    grid-column: 1 / 3;\n}\n\n.content {\n    grid-column: 2 / 3;\n}\n\n.sidebar-links {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.status-container {\n    display: flex;\n}\n\n.status-circle {\n    border: 1px solid black;\n    background-color: white;\n    height: 25px;\n    width: 25px;\n    border-radius: 100px;\n}\n\n/* FIX NAMING CONVENTION AND STUFF*/\n\n.table {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 50px;\n    width: 80vw;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    place-items: center;\n    color: white;\n    background-color: rgb(33, 37, 41);\n}\n\n#library {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: max-content;\n}\n\n.task-row {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    place-items: center;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-collapse: collapse;\n    border-left: 2px solid rgba(33, 37, 41, 0.356);\n    border-right: 2px solid rgba(33, 37, 41, 0.356);\n    border-bottom: 2px solid rgba(33, 37, 41, 0.356);\n}\n\n.task-btn-container {\n    display: flex;\n    gap: 10px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/editInputCard.js":
/*!*****************************************!*\
  !*** ./src/components/editInputCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editInputCard: () => (/* binding */ editInputCard)
/* harmony export */ });
const editInputCard = document.createElement('div');

editInputCard.classList.add('edit-input-card');

editInputCard.innerHTML = `
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
<button class="btn btn-success" id="task-submit-edit-btn">Edit task</button>
<button class="btn btn-secondary" id="task-back-btn">Back</button>`;



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
    <p>Task</p>
    <p>Tags</p>
    <p>Priority</p>
    <p>Due date</p>
    <p>Status</p>
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



function createTask(title, description, dueDate, priority, notes, tags, checklist, state, operation, index) {

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

    (0,_storeTask_js__WEBPACK_IMPORTED_MODULE_1__.storeTask)(task, operation, index);
}







/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");


function editTask(title, description, dueDate, priority, notes, tags, checklist, state, index) {
    const operation = 'edit';
    (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(title, description, dueDate, priority, notes, tags, checklist, state, operation, index);
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
        <div class="task-btn-container">
        <div class="status-circle"></div>
        <button class="btn btn-secondary" id="task-edit-btn" onclick="editTask(${i})">Edit</button>
        <button class="btn btn-danger" id="task-remove-btn" onclick="removeTask(${i})">Remove</button>
        </div>`
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


function storeTask(task, operation, index) {
    
    if (operation !== 'edit') {
        _objects_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.push(task);
        /* eslint-disable */console.log(...oo_oo(`f70302b7_0`,_objects_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage));
    } else if (operation == 'edit') {
        _objects_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.splice(index - 1, 1, task);
        /* eslint-disable */console.log(...oo_oo(`f70302b7_1`,_objects_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage));
    }
}


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x40ae(){var _0x42fd12=['_connected','_processTreeNodeResult','_inBrowser','depth','_getOwnPropertySymbols','console','getOwnPropertyDescriptor','warn','strLength','nan','_hasMapOnItsPath','_isPrimitiveWrapperType','toLowerCase','_setNodeLabel','_addLoadNode','string','_isPrimitiveType','[object\\x20BigInt]','_allowedToSend','ws://','reload','undefined','boolean','valueOf','replace','get','_maxConnectAttemptCount','_p_name','data','getter','push','substr','_treeNodePropertiesBeforeFullValue','getPrototypeOf','_WebSocketClass','NEGATIVE_INFINITY','...','hits','now','isArray','object','onopen','45sOWEQI','Map','_disposeWebsocket','null','error','rootExpression','ws/index.js','_attemptToReconnectShortly','_allowedToConnectOnSend','process','_hasSetOnItsPath','_isSet','remix','concat','_addObjectProperty','setter','then','_undefined','catch','expressionsToEvaluate',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Xubuntu\",\"10.0.2.15\"],'logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','autoExpandPreviousObjects','reduceLimits','name','negativeInfinity','_Symbol','[object\\x20Map]','_treeNodePropertiesAfterFullValue','url','_HTMLAllCollection','enumerable','autoExpandPropertyCount','root_exp_id','onclose','_dateToString','_hasSymbolPropertyOnItsPath','autoExpand','autoExpandMaxDepth','cappedProps','create','positiveInfinity','funcName','775514hvKkxg','485982CHovsf','_type','_reconnectTimeout','Set','timeEnd','_isNegativeZero','RegExp','_console_ninja_session','https://tinyurl.com/37x8b79t','_getOwnPropertyNames','351055lGQAsy','array','date','prototype','unshift','stack','totalStrLength','nuxt','311048Ouakbe','symbol','_getOwnPropertyDescriptor','1.0.0','pathToFileURL','_property',\"/home/dualvm/.vscode/extensions/wallabyjs.console-ninja-0.0.210/node_modules\",'noFunctions','root_exp','_blacklistedProperty','expId','bind','\\x20server','parse','_addFunctionsNode','negativeZero','_propertyName','resolveGetters','perf_hooks','constructor','props','_isMap','_webSocketErrorDocsLink','getOwnPropertyNames','global','_cleanNode','2105130sUuhdZ','port','1431008uwFmtR','_connecting','count','_connectAttemptCount','slice','message','join','hostname','_capIfString','_objectToString','time','_regExpToString','send','hasOwnProperty','_console_ninja','_setNodePermissions','getOwnPropertySymbols','24nyXRXX','WebSocket','next.js','current','_ws','path','default','serialize','location','[object\\x20Set]','log','toString','_connectToHostNow','_sendErrorMessage','\\x20browser','isExpressionToEvaluate','24zsLwRC','HTMLAllCollection','capped','parent','call','_keyStrRegExp','_consoleNinjaAllowedToStart','_sortProps','stringify','split','_p_','_socket','Symbol','host','webpack','_additionalMetadata','forEach','getWebSocketClass','test','','versions','node','nodeModules','_setNodeId','_setNodeQueryPath','127.0.0.1','String','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','elapsed','autoExpandLimit','bigint','_addProperty','astro','[object\\x20Date]','hrtime','timeStamp','disabledLog','length','sortProps','value','level','method','unknown','allStrLength','trace','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','defineProperty','_setNodeExpandableState','_quotedRegExp','__es'+'Module','stackTraceLimit','unref','POSITIVE_INFINITY','_WebSocket','disabledTrace','number','onerror','type','sort','Number','1104369TOftoM','_p_length','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_setNodeExpressionPath','_isUndefined','readyState','index','function','match','performance'];_0x40ae=function(){return _0x42fd12;};return _0x40ae();}var _0x52aca5=_0x5b13;function _0x5b13(_0x5f0a18,_0x27a9ed){var _0x40ae91=_0x40ae();return _0x5b13=function(_0x5b138a,_0x12791b){_0x5b138a=_0x5b138a-0x1a3;var _0x550c8c=_0x40ae91[_0x5b138a];return _0x550c8c;},_0x5b13(_0x5f0a18,_0x27a9ed);}(function(_0x4088ca,_0xb7712a){var _0x225998=_0x5b13,_0x1f8ba0=_0x4088ca();while(!![]){try{var _0x1feab2=-parseInt(_0x225998(0x267))/0x1+parseInt(_0x225998(0x254))/0x2+parseInt(_0x225998(0x255))/0x3+parseInt(_0x225998(0x283))/0x4+parseInt(_0x225998(0x25f))/0x5*(parseInt(_0x225998(0x1b9))/0x6)+-parseInt(_0x225998(0x1f5))/0x7*(-parseInt(_0x225998(0x1a9))/0x8)+parseInt(_0x225998(0x229))/0x9*(-parseInt(_0x225998(0x281))/0xa);if(_0x1feab2===_0xb7712a)break;else _0x1f8ba0['push'](_0x1f8ba0['shift']());}catch(_0x4df7f0){_0x1f8ba0['push'](_0x1f8ba0['shift']());}}}(_0x40ae,0x48c33));var j=Object[_0x52aca5(0x251)],X=Object[_0x52aca5(0x1e7)],G=Object[_0x52aca5(0x205)],ee=Object['getOwnPropertyNames'],te=Object[_0x52aca5(0x220)],ne=Object[_0x52aca5(0x262)][_0x52aca5(0x1a5)],re=(_0x4d9f85,_0x2ea401,_0x5559d1,_0x3107f0)=>{var _0xe79883=_0x52aca5;if(_0x2ea401&&typeof _0x2ea401=='object'||typeof _0x2ea401==_0xe79883(0x1fc)){for(let _0x246e33 of ee(_0x2ea401))!ne[_0xe79883(0x1bd)](_0x4d9f85,_0x246e33)&&_0x246e33!==_0x5559d1&&X(_0x4d9f85,_0x246e33,{'get':()=>_0x2ea401[_0x246e33],'enumerable':!(_0x3107f0=G(_0x2ea401,_0x246e33))||_0x3107f0[_0xe79883(0x248)]});}return _0x4d9f85;},x=(_0x5e228d,_0x4b63af,_0x36068f)=>(_0x36068f=_0x5e228d!=null?j(te(_0x5e228d)):{},re(_0x4b63af||!_0x5e228d||!_0x5e228d[_0x52aca5(0x1ea)]?X(_0x36068f,'default',{'value':_0x5e228d,'enumerable':!0x0}):_0x36068f,_0x5e228d)),q=class{constructor(_0x3e823c,_0x145608,_0x296de1,_0x547e00){var _0x436025=_0x52aca5;this[_0x436025(0x27f)]=_0x3e823c,this[_0x436025(0x1c6)]=_0x145608,this[_0x436025(0x282)]=_0x296de1,this[_0x436025(0x1cf)]=_0x547e00,this[_0x436025(0x211)]=!0x0,this[_0x436025(0x231)]=!0x0,this[_0x436025(0x1ff)]=!0x1,this['_connecting']=!0x1,this[_0x436025(0x201)]=!!this[_0x436025(0x27f)][_0x436025(0x1aa)],this[_0x436025(0x221)]=null,this['_connectAttemptCount']=0x0,this[_0x436025(0x219)]=0x14,this[_0x436025(0x27d)]=_0x436025(0x25d),this[_0x436025(0x1b6)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x436025(0x1f7))+this['_webSocketErrorDocsLink'];}async[_0x52aca5(0x1ca)](){var _0x23ac9d=_0x52aca5;if(this[_0x23ac9d(0x221)])return this[_0x23ac9d(0x221)];let _0x494d01;if(this[_0x23ac9d(0x201)])_0x494d01=this['global'][_0x23ac9d(0x1aa)];else{if(this['global'][_0x23ac9d(0x232)]?.[_0x23ac9d(0x1ee)])_0x494d01=this[_0x23ac9d(0x27f)]['process']?.[_0x23ac9d(0x1ee)];else try{let _0x1db037=await import(_0x23ac9d(0x1ae));_0x494d01=(await import((await import(_0x23ac9d(0x246)))[_0x23ac9d(0x26b)](_0x1db037['join'](this[_0x23ac9d(0x1cf)],_0x23ac9d(0x22f)))[_0x23ac9d(0x1b4)]()))[_0x23ac9d(0x1af)];}catch{try{_0x494d01=require(require('path')[_0x23ac9d(0x289)](this[_0x23ac9d(0x1cf)],'ws'));}catch{throw new Error(_0x23ac9d(0x1e6));}}}return this[_0x23ac9d(0x221)]=_0x494d01,_0x494d01;}[_0x52aca5(0x1b5)](){var _0x4d5038=_0x52aca5;this['_connecting']||this[_0x4d5038(0x1ff)]||this[_0x4d5038(0x286)]>=this[_0x4d5038(0x219)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x4d5038(0x1ad)]=new Promise((_0x5da19b,_0x2da11)=>{var _0x4d4048=_0x4d5038;this[_0x4d4048(0x1ca)]()[_0x4d4048(0x239)](_0x33a223=>{var _0x283625=_0x4d4048;let _0x5ddb0a=new _0x33a223(_0x283625(0x212)+this['host']+':'+this[_0x283625(0x282)]);_0x5ddb0a[_0x283625(0x1f1)]=()=>{var _0x603023=_0x283625;this[_0x603023(0x211)]=!0x1,this[_0x603023(0x22b)](_0x5ddb0a),this[_0x603023(0x230)](),_0x2da11(new Error('logger\\x20websocket\\x20error'));},_0x5ddb0a[_0x283625(0x228)]=()=>{var _0x3c7a95=_0x283625;this[_0x3c7a95(0x201)]||_0x5ddb0a[_0x3c7a95(0x1c4)]&&_0x5ddb0a[_0x3c7a95(0x1c4)][_0x3c7a95(0x1ec)]&&_0x5ddb0a[_0x3c7a95(0x1c4)][_0x3c7a95(0x1ec)](),_0x5da19b(_0x5ddb0a);},_0x5ddb0a[_0x283625(0x24b)]=()=>{var _0x55274d=_0x283625;this[_0x55274d(0x231)]=!0x0,this[_0x55274d(0x22b)](_0x5ddb0a),this[_0x55274d(0x230)]();},_0x5ddb0a['onmessage']=_0x3afb25=>{var _0x5a3a14=_0x283625;try{_0x3afb25&&_0x3afb25['data']&&this[_0x5a3a14(0x201)]&&JSON[_0x5a3a14(0x274)](_0x3afb25[_0x5a3a14(0x21b)])[_0x5a3a14(0x1e2)]===_0x5a3a14(0x213)&&this[_0x5a3a14(0x27f)][_0x5a3a14(0x1b1)][_0x5a3a14(0x213)]();}catch{}};})['then'](_0x23fc31=>(this['_connected']=!0x0,this[_0x4d4048(0x284)]=!0x1,this[_0x4d4048(0x231)]=!0x1,this[_0x4d4048(0x211)]=!0x0,this['_connectAttemptCount']=0x0,_0x23fc31))[_0x4d4048(0x23b)](_0x15c4fd=>(this['_connected']=!0x1,this[_0x4d4048(0x284)]=!0x1,console[_0x4d4048(0x206)](_0x4d4048(0x1d4)+this['_webSocketErrorDocsLink']),_0x2da11(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x15c4fd&&_0x15c4fd[_0x4d4048(0x288)])))));}));}[_0x52aca5(0x22b)](_0x5895ba){var _0x5a2292=_0x52aca5;this[_0x5a2292(0x1ff)]=!0x1,this['_connecting']=!0x1;try{_0x5895ba[_0x5a2292(0x24b)]=null,_0x5895ba[_0x5a2292(0x1f1)]=null,_0x5895ba[_0x5a2292(0x228)]=null;}catch{}try{_0x5895ba[_0x5a2292(0x1fa)]<0x2&&_0x5895ba['close']();}catch{}}[_0x52aca5(0x230)](){var _0x1b9605=_0x52aca5;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this[_0x1b9605(0x257)]=setTimeout(()=>{var _0x31e106=_0x1b9605;this[_0x31e106(0x1ff)]||this['_connecting']||(this[_0x31e106(0x1b5)](),this[_0x31e106(0x1ad)]?.[_0x31e106(0x23b)](()=>this[_0x31e106(0x230)]()));},0x1f4),this[_0x1b9605(0x257)]['unref']&&this[_0x1b9605(0x257)]['unref']());}async[_0x52aca5(0x1a4)](_0x3d857b){var _0x411cdf=_0x52aca5;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x411cdf(0x1b5)](),(await this['_ws'])[_0x411cdf(0x1a4)](JSON[_0x411cdf(0x1c1)](_0x3d857b));}catch(_0x24449c){console[_0x411cdf(0x206)](this['_sendErrorMessage']+':\\x20'+(_0x24449c&&_0x24449c[_0x411cdf(0x288)])),this['_allowedToSend']=!0x1,this[_0x411cdf(0x230)]();}}};function J(_0x21bf6c,_0x27d0bb,_0x2641c9,_0x523868,_0xdf2088){var _0x28dc58=_0x52aca5;let _0x56a634=_0x2641c9[_0x28dc58(0x1c2)](',')['map'](_0x4fde5d=>{var _0x346de4=_0x28dc58;try{_0x21bf6c[_0x346de4(0x25c)]||((_0xdf2088===_0x346de4(0x1ab)||_0xdf2088===_0x346de4(0x235)||_0xdf2088===_0x346de4(0x1d9))&&(_0xdf2088+=_0x21bf6c[_0x346de4(0x232)]?.['versions']?.[_0x346de4(0x1ce)]?_0x346de4(0x273):_0x346de4(0x1b7)),_0x21bf6c[_0x346de4(0x25c)]={'id':+new Date(),'tool':_0xdf2088});let _0x44c499=new q(_0x21bf6c,_0x27d0bb,_0x4fde5d,_0x523868);return _0x44c499[_0x346de4(0x1a4)][_0x346de4(0x272)](_0x44c499);}catch(_0x2529ff){return console[_0x346de4(0x206)](_0x346de4(0x23e),_0x2529ff&&_0x2529ff[_0x346de4(0x288)]),()=>{};}});return _0x763da9=>_0x56a634[_0x28dc58(0x1c9)](_0x152f8d=>_0x152f8d(_0x763da9));}function R(_0x4859b4){var _0x16431d=_0x52aca5;let _0x3ee9cb=function(_0x5537b2,_0x518e8b){return _0x518e8b-_0x5537b2;},_0x403bbd;if(_0x4859b4[_0x16431d(0x1fe)])_0x403bbd=function(){var _0x4d2e94=_0x16431d;return _0x4859b4[_0x4d2e94(0x1fe)][_0x4d2e94(0x225)]();};else{if(_0x4859b4[_0x16431d(0x232)]&&_0x4859b4['process'][_0x16431d(0x1db)])_0x403bbd=function(){var _0x3f61c0=_0x16431d;return _0x4859b4[_0x3f61c0(0x232)][_0x3f61c0(0x1db)]();},_0x3ee9cb=function(_0x559106,_0x4a7e02){return 0x3e8*(_0x4a7e02[0x0]-_0x559106[0x0])+(_0x4a7e02[0x1]-_0x559106[0x1])/0xf4240;};else try{let {performance:_0x1b8a69}=require(_0x16431d(0x279));_0x403bbd=function(){var _0x45803e=_0x16431d;return _0x1b8a69[_0x45803e(0x225)]();};}catch{_0x403bbd=function(){return+new Date();};}}return{'elapsed':_0x3ee9cb,'timeStamp':_0x403bbd,'now':()=>Date[_0x16431d(0x225)]()};}function Y(_0x10ad47,_0x20c890,_0x545dd8){var _0x5e28f2=_0x52aca5;if(_0x10ad47[_0x5e28f2(0x1bf)]!==void 0x0)return _0x10ad47['_consoleNinjaAllowedToStart'];let _0x2e4121=_0x10ad47[_0x5e28f2(0x232)]?.[_0x5e28f2(0x1cd)]?.['node'];return _0x2e4121&&_0x545dd8===_0x5e28f2(0x266)?_0x10ad47['_consoleNinjaAllowedToStart']=!0x1:_0x10ad47[_0x5e28f2(0x1bf)]=_0x2e4121||!_0x20c890||_0x10ad47[_0x5e28f2(0x1b1)]?.[_0x5e28f2(0x28a)]&&_0x20c890['includes'](_0x10ad47[_0x5e28f2(0x1b1)][_0x5e28f2(0x28a)]),_0x10ad47[_0x5e28f2(0x1bf)];}function Q(_0x1f4a27,_0x13f00b,_0x55f635,_0xec752f){var _0x38603b=_0x52aca5;_0x1f4a27=_0x1f4a27,_0x13f00b=_0x13f00b,_0x55f635=_0x55f635,_0xec752f=_0xec752f;let _0x5b3eb6=R(_0x1f4a27),_0x41cb13=_0x5b3eb6[_0x38603b(0x1d5)],_0x31daed=_0x5b3eb6['timeStamp'];class _0xfb352{constructor(){var _0x1427bd=_0x38603b;this[_0x1427bd(0x1be)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x1427bd(0x1e9)]=/'([^\\\\']|\\\\')*'/,this[_0x1427bd(0x23a)]=_0x1f4a27[_0x1427bd(0x214)],this[_0x1427bd(0x247)]=_0x1f4a27[_0x1427bd(0x1ba)],this[_0x1427bd(0x269)]=Object[_0x1427bd(0x205)],this['_getOwnPropertyNames']=Object[_0x1427bd(0x27e)],this['_Symbol']=_0x1f4a27[_0x1427bd(0x1c5)],this[_0x1427bd(0x1a3)]=RegExp[_0x1427bd(0x262)][_0x1427bd(0x1b4)],this[_0x1427bd(0x24c)]=Date[_0x1427bd(0x262)][_0x1427bd(0x1b4)];}['serialize'](_0x32fd84,_0x102bf5,_0x2295de,_0x3dd958){var _0x3693a4=_0x38603b,_0xdf5391=this,_0x1b4119=_0x2295de[_0x3693a4(0x24e)];function _0x14cfea(_0x13a83c,_0x5d7145,_0x2c464a){var _0x3d636b=_0x3693a4;_0x5d7145[_0x3d636b(0x1f2)]=_0x3d636b(0x1e3),_0x5d7145[_0x3d636b(0x22d)]=_0x13a83c[_0x3d636b(0x288)],_0x302bc9=_0x2c464a['node'][_0x3d636b(0x1ac)],_0x2c464a[_0x3d636b(0x1ce)][_0x3d636b(0x1ac)]=_0x5d7145,_0xdf5391[_0x3d636b(0x21f)](_0x5d7145,_0x2c464a);}try{_0x2295de[_0x3693a4(0x1e1)]++,_0x2295de[_0x3693a4(0x24e)]&&_0x2295de[_0x3693a4(0x23f)][_0x3693a4(0x21d)](_0x102bf5);var _0x4ba140,_0xc8c6df,_0x50fe47,_0x48ea6e,_0x1e1891=[],_0x24972d=[],_0x16068a,_0x32b1e6=this[_0x3693a4(0x256)](_0x102bf5),_0x54d547=_0x32b1e6===_0x3693a4(0x260),_0x5e1eb0=!0x1,_0x5e090a=_0x32b1e6==='function',_0x2b39d7=this[_0x3693a4(0x20f)](_0x32b1e6),_0x3bf960=this[_0x3693a4(0x20a)](_0x32b1e6),_0x5339f1=_0x2b39d7||_0x3bf960,_0x49b27a={},_0x218cfb=0x0,_0x335531=!0x1,_0x302bc9,_0x39d254=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2295de['depth']){if(_0x54d547){if(_0xc8c6df=_0x102bf5[_0x3693a4(0x1de)],_0xc8c6df>_0x2295de['elements']){for(_0x50fe47=0x0,_0x48ea6e=_0x2295de['elements'],_0x4ba140=_0x50fe47;_0x4ba140<_0x48ea6e;_0x4ba140++)_0x24972d[_0x3693a4(0x21d)](_0xdf5391[_0x3693a4(0x1d8)](_0x1e1891,_0x102bf5,_0x32b1e6,_0x4ba140,_0x2295de));_0x32fd84['cappedElements']=!0x0;}else{for(_0x50fe47=0x0,_0x48ea6e=_0xc8c6df,_0x4ba140=_0x50fe47;_0x4ba140<_0x48ea6e;_0x4ba140++)_0x24972d[_0x3693a4(0x21d)](_0xdf5391[_0x3693a4(0x1d8)](_0x1e1891,_0x102bf5,_0x32b1e6,_0x4ba140,_0x2295de));}_0x2295de[_0x3693a4(0x249)]+=_0x24972d[_0x3693a4(0x1de)];}if(!(_0x32b1e6===_0x3693a4(0x22c)||_0x32b1e6===_0x3693a4(0x214))&&!_0x2b39d7&&_0x32b1e6!==_0x3693a4(0x1d3)&&_0x32b1e6!=='Buffer'&&_0x32b1e6!==_0x3693a4(0x1d7)){var _0x1f8e5c=_0x3dd958[_0x3693a4(0x27b)]||_0x2295de['props'];if(this[_0x3693a4(0x234)](_0x102bf5)?(_0x4ba140=0x0,_0x102bf5[_0x3693a4(0x1c9)](function(_0x20952c){var _0x5b7e49=_0x3693a4;if(_0x218cfb++,_0x2295de[_0x5b7e49(0x249)]++,_0x218cfb>_0x1f8e5c){_0x335531=!0x0;return;}if(!_0x2295de[_0x5b7e49(0x1b8)]&&_0x2295de[_0x5b7e49(0x24e)]&&_0x2295de[_0x5b7e49(0x249)]>_0x2295de[_0x5b7e49(0x1d6)]){_0x335531=!0x0;return;}_0x24972d['push'](_0xdf5391[_0x5b7e49(0x1d8)](_0x1e1891,_0x102bf5,_0x5b7e49(0x258),_0x4ba140++,_0x2295de,function(_0x3812ec){return function(){return _0x3812ec;};}(_0x20952c)));})):this[_0x3693a4(0x27c)](_0x102bf5)&&_0x102bf5['forEach'](function(_0x507796,_0x48fb48){var _0x5e7abd=_0x3693a4;if(_0x218cfb++,_0x2295de[_0x5e7abd(0x249)]++,_0x218cfb>_0x1f8e5c){_0x335531=!0x0;return;}if(!_0x2295de[_0x5e7abd(0x1b8)]&&_0x2295de[_0x5e7abd(0x24e)]&&_0x2295de[_0x5e7abd(0x249)]>_0x2295de[_0x5e7abd(0x1d6)]){_0x335531=!0x0;return;}var _0x5a7497=_0x48fb48[_0x5e7abd(0x1b4)]();_0x5a7497[_0x5e7abd(0x1de)]>0x64&&(_0x5a7497=_0x5a7497[_0x5e7abd(0x287)](0x0,0x64)+_0x5e7abd(0x223)),_0x24972d[_0x5e7abd(0x21d)](_0xdf5391[_0x5e7abd(0x1d8)](_0x1e1891,_0x102bf5,_0x5e7abd(0x22a),_0x5a7497,_0x2295de,function(_0x39e97b){return function(){return _0x39e97b;};}(_0x507796)));}),!_0x5e1eb0){try{for(_0x16068a in _0x102bf5)if(!(_0x54d547&&_0x39d254[_0x3693a4(0x1cb)](_0x16068a))&&!this[_0x3693a4(0x270)](_0x102bf5,_0x16068a,_0x2295de)){if(_0x218cfb++,_0x2295de[_0x3693a4(0x249)]++,_0x218cfb>_0x1f8e5c){_0x335531=!0x0;break;}if(!_0x2295de[_0x3693a4(0x1b8)]&&_0x2295de[_0x3693a4(0x24e)]&&_0x2295de[_0x3693a4(0x249)]>_0x2295de['autoExpandLimit']){_0x335531=!0x0;break;}_0x24972d[_0x3693a4(0x21d)](_0xdf5391[_0x3693a4(0x237)](_0x1e1891,_0x49b27a,_0x102bf5,_0x32b1e6,_0x16068a,_0x2295de));}}catch{}if(_0x49b27a[_0x3693a4(0x1f6)]=!0x0,_0x5e090a&&(_0x49b27a[_0x3693a4(0x21a)]=!0x0),!_0x335531){var _0x2ceaf9=[][_0x3693a4(0x236)](this[_0x3693a4(0x25e)](_0x102bf5))[_0x3693a4(0x236)](this[_0x3693a4(0x203)](_0x102bf5));for(_0x4ba140=0x0,_0xc8c6df=_0x2ceaf9[_0x3693a4(0x1de)];_0x4ba140<_0xc8c6df;_0x4ba140++)if(_0x16068a=_0x2ceaf9[_0x4ba140],!(_0x54d547&&_0x39d254[_0x3693a4(0x1cb)](_0x16068a['toString']()))&&!this['_blacklistedProperty'](_0x102bf5,_0x16068a,_0x2295de)&&!_0x49b27a[_0x3693a4(0x1c3)+_0x16068a[_0x3693a4(0x1b4)]()]){if(_0x218cfb++,_0x2295de['autoExpandPropertyCount']++,_0x218cfb>_0x1f8e5c){_0x335531=!0x0;break;}if(!_0x2295de['isExpressionToEvaluate']&&_0x2295de[_0x3693a4(0x24e)]&&_0x2295de[_0x3693a4(0x249)]>_0x2295de['autoExpandLimit']){_0x335531=!0x0;break;}_0x24972d[_0x3693a4(0x21d)](_0xdf5391['_addObjectProperty'](_0x1e1891,_0x49b27a,_0x102bf5,_0x32b1e6,_0x16068a,_0x2295de));}}}}}if(_0x32fd84[_0x3693a4(0x1f2)]=_0x32b1e6,_0x5339f1?(_0x32fd84[_0x3693a4(0x1e0)]=_0x102bf5[_0x3693a4(0x216)](),this['_capIfString'](_0x32b1e6,_0x32fd84,_0x2295de,_0x3dd958)):_0x32b1e6==='date'?_0x32fd84[_0x3693a4(0x1e0)]=this[_0x3693a4(0x24c)]['call'](_0x102bf5):_0x32b1e6===_0x3693a4(0x1d7)?_0x32fd84[_0x3693a4(0x1e0)]=_0x102bf5[_0x3693a4(0x1b4)]():_0x32b1e6===_0x3693a4(0x25b)?_0x32fd84[_0x3693a4(0x1e0)]=this['_regExpToString'][_0x3693a4(0x1bd)](_0x102bf5):_0x32b1e6===_0x3693a4(0x268)&&this[_0x3693a4(0x243)]?_0x32fd84[_0x3693a4(0x1e0)]=this['_Symbol'][_0x3693a4(0x262)][_0x3693a4(0x1b4)][_0x3693a4(0x1bd)](_0x102bf5):!_0x2295de[_0x3693a4(0x202)]&&!(_0x32b1e6===_0x3693a4(0x22c)||_0x32b1e6===_0x3693a4(0x214))&&(delete _0x32fd84[_0x3693a4(0x1e0)],_0x32fd84['capped']=!0x0),_0x335531&&(_0x32fd84[_0x3693a4(0x250)]=!0x0),_0x302bc9=_0x2295de[_0x3693a4(0x1ce)][_0x3693a4(0x1ac)],_0x2295de[_0x3693a4(0x1ce)][_0x3693a4(0x1ac)]=_0x32fd84,this[_0x3693a4(0x21f)](_0x32fd84,_0x2295de),_0x24972d['length']){for(_0x4ba140=0x0,_0xc8c6df=_0x24972d[_0x3693a4(0x1de)];_0x4ba140<_0xc8c6df;_0x4ba140++)_0x24972d[_0x4ba140](_0x4ba140);}_0x1e1891[_0x3693a4(0x1de)]&&(_0x32fd84[_0x3693a4(0x27b)]=_0x1e1891);}catch(_0x52a61d){_0x14cfea(_0x52a61d,_0x32fd84,_0x2295de);}return this[_0x3693a4(0x1c8)](_0x102bf5,_0x32fd84),this[_0x3693a4(0x245)](_0x32fd84,_0x2295de),_0x2295de['node']['current']=_0x302bc9,_0x2295de[_0x3693a4(0x1e1)]--,_0x2295de[_0x3693a4(0x24e)]=_0x1b4119,_0x2295de[_0x3693a4(0x24e)]&&_0x2295de['autoExpandPreviousObjects']['pop'](),_0x32fd84;}[_0x38603b(0x203)](_0x2bb7fb){var _0x353705=_0x38603b;return Object[_0x353705(0x1a8)]?Object[_0x353705(0x1a8)](_0x2bb7fb):[];}['_isSet'](_0x59c225){var _0x1b451b=_0x38603b;return!!(_0x59c225&&_0x1f4a27['Set']&&this[_0x1b451b(0x28c)](_0x59c225)===_0x1b451b(0x1b2)&&_0x59c225[_0x1b451b(0x1c9)]);}[_0x38603b(0x270)](_0x5c07cf,_0x3d91f2,_0x229c13){var _0x1c2eca=_0x38603b;return _0x229c13[_0x1c2eca(0x26e)]?typeof _0x5c07cf[_0x3d91f2]==_0x1c2eca(0x1fc):!0x1;}['_type'](_0x2b5947){var _0x497d51=_0x38603b,_0x1b33db='';return _0x1b33db=typeof _0x2b5947,_0x1b33db===_0x497d51(0x227)?this[_0x497d51(0x28c)](_0x2b5947)==='[object\\x20Array]'?_0x1b33db=_0x497d51(0x260):this['_objectToString'](_0x2b5947)===_0x497d51(0x1da)?_0x1b33db=_0x497d51(0x261):this[_0x497d51(0x28c)](_0x2b5947)===_0x497d51(0x210)?_0x1b33db=_0x497d51(0x1d7):_0x2b5947===null?_0x1b33db=_0x497d51(0x22c):_0x2b5947[_0x497d51(0x27a)]&&(_0x1b33db=_0x2b5947[_0x497d51(0x27a)][_0x497d51(0x241)]||_0x1b33db):_0x1b33db==='undefined'&&this['_HTMLAllCollection']&&_0x2b5947 instanceof this['_HTMLAllCollection']&&(_0x1b33db=_0x497d51(0x1ba)),_0x1b33db;}[_0x38603b(0x28c)](_0x6684bc){return Object['prototype']['toString']['call'](_0x6684bc);}[_0x38603b(0x20f)](_0x27cf65){var _0x3384a2=_0x38603b;return _0x27cf65===_0x3384a2(0x215)||_0x27cf65==='string'||_0x27cf65===_0x3384a2(0x1f0);}[_0x38603b(0x20a)](_0x58a92f){var _0xf0b22a=_0x38603b;return _0x58a92f==='Boolean'||_0x58a92f===_0xf0b22a(0x1d3)||_0x58a92f===_0xf0b22a(0x1f4);}[_0x38603b(0x1d8)](_0x6917fd,_0x1e47a5,_0x38d023,_0x492e2b,_0x546a6b,_0x51760f){var _0x2638e2=this;return function(_0x17a855){var _0x1cd64d=_0x5b13,_0x17913b=_0x546a6b[_0x1cd64d(0x1ce)][_0x1cd64d(0x1ac)],_0x55d475=_0x546a6b[_0x1cd64d(0x1ce)][_0x1cd64d(0x1fb)],_0x16e288=_0x546a6b[_0x1cd64d(0x1ce)]['parent'];_0x546a6b['node'][_0x1cd64d(0x1bc)]=_0x17913b,_0x546a6b['node']['index']=typeof _0x492e2b==_0x1cd64d(0x1f0)?_0x492e2b:_0x17a855,_0x6917fd[_0x1cd64d(0x21d)](_0x2638e2[_0x1cd64d(0x26c)](_0x1e47a5,_0x38d023,_0x492e2b,_0x546a6b,_0x51760f)),_0x546a6b['node'][_0x1cd64d(0x1bc)]=_0x16e288,_0x546a6b['node']['index']=_0x55d475;};}[_0x38603b(0x237)](_0x18863e,_0x1da80f,_0x3308d9,_0x5ecf02,_0x4b47b8,_0x21c8d6,_0x3f2721){var _0x55e164=_0x38603b,_0x483985=this;return _0x1da80f[_0x55e164(0x1c3)+_0x4b47b8[_0x55e164(0x1b4)]()]=!0x0,function(_0x3f5491){var _0x376921=_0x55e164,_0x506df5=_0x21c8d6[_0x376921(0x1ce)]['current'],_0x36f1fa=_0x21c8d6['node'][_0x376921(0x1fb)],_0x491130=_0x21c8d6[_0x376921(0x1ce)][_0x376921(0x1bc)];_0x21c8d6['node'][_0x376921(0x1bc)]=_0x506df5,_0x21c8d6[_0x376921(0x1ce)][_0x376921(0x1fb)]=_0x3f5491,_0x18863e[_0x376921(0x21d)](_0x483985[_0x376921(0x26c)](_0x3308d9,_0x5ecf02,_0x4b47b8,_0x21c8d6,_0x3f2721)),_0x21c8d6['node'][_0x376921(0x1bc)]=_0x491130,_0x21c8d6[_0x376921(0x1ce)]['index']=_0x36f1fa;};}[_0x38603b(0x26c)](_0x221a64,_0x5f38ba,_0x13da93,_0x5676ff,_0x4c278d){var _0x4ec4c2=_0x38603b,_0x2d64cc=this;_0x4c278d||(_0x4c278d=function(_0x469935,_0x3726c9){return _0x469935[_0x3726c9];});var _0x57ec46=_0x13da93[_0x4ec4c2(0x1b4)](),_0x13b363=_0x5676ff[_0x4ec4c2(0x23c)]||{},_0x2a4167=_0x5676ff[_0x4ec4c2(0x202)],_0x2ccfc2=_0x5676ff[_0x4ec4c2(0x1b8)];try{var _0x5e46f1=this[_0x4ec4c2(0x27c)](_0x221a64),_0x2dc98b=_0x57ec46;_0x5e46f1&&_0x2dc98b[0x0]==='\\x27'&&(_0x2dc98b=_0x2dc98b['substr'](0x1,_0x2dc98b[_0x4ec4c2(0x1de)]-0x2));var _0x487635=_0x5676ff[_0x4ec4c2(0x23c)]=_0x13b363['_p_'+_0x2dc98b];_0x487635&&(_0x5676ff[_0x4ec4c2(0x202)]=_0x5676ff[_0x4ec4c2(0x202)]+0x1),_0x5676ff[_0x4ec4c2(0x1b8)]=!!_0x487635;var _0x46532d=typeof _0x13da93==_0x4ec4c2(0x268),_0x46cba1={'name':_0x46532d||_0x5e46f1?_0x57ec46:this[_0x4ec4c2(0x277)](_0x57ec46)};if(_0x46532d&&(_0x46cba1['symbol']=!0x0),!(_0x5f38ba===_0x4ec4c2(0x260)||_0x5f38ba==='Error')){var _0x30ba65=this[_0x4ec4c2(0x269)](_0x221a64,_0x13da93);if(_0x30ba65&&(_0x30ba65['set']&&(_0x46cba1[_0x4ec4c2(0x238)]=!0x0),_0x30ba65[_0x4ec4c2(0x218)]&&!_0x487635&&!_0x5676ff[_0x4ec4c2(0x278)]))return _0x46cba1[_0x4ec4c2(0x21c)]=!0x0,this['_processTreeNodeResult'](_0x46cba1,_0x5676ff),_0x46cba1;}var _0x341fb3;try{_0x341fb3=_0x4c278d(_0x221a64,_0x13da93);}catch(_0x543f1d){return _0x46cba1={'name':_0x57ec46,'type':'unknown','error':_0x543f1d['message']},this[_0x4ec4c2(0x200)](_0x46cba1,_0x5676ff),_0x46cba1;}var _0x1d0711=this[_0x4ec4c2(0x256)](_0x341fb3),_0x1edbd4=this[_0x4ec4c2(0x20f)](_0x1d0711);if(_0x46cba1[_0x4ec4c2(0x1f2)]=_0x1d0711,_0x1edbd4)this[_0x4ec4c2(0x200)](_0x46cba1,_0x5676ff,_0x341fb3,function(){var _0x2066e7=_0x4ec4c2;_0x46cba1[_0x2066e7(0x1e0)]=_0x341fb3['valueOf'](),!_0x487635&&_0x2d64cc[_0x2066e7(0x28b)](_0x1d0711,_0x46cba1,_0x5676ff,{});});else{var _0x2268f4=_0x5676ff[_0x4ec4c2(0x24e)]&&_0x5676ff[_0x4ec4c2(0x1e1)]<_0x5676ff[_0x4ec4c2(0x24f)]&&_0x5676ff['autoExpandPreviousObjects']['indexOf'](_0x341fb3)<0x0&&_0x1d0711!=='function'&&_0x5676ff[_0x4ec4c2(0x249)]<_0x5676ff['autoExpandLimit'];_0x2268f4||_0x5676ff['level']<_0x2a4167||_0x487635?(this[_0x4ec4c2(0x1b0)](_0x46cba1,_0x341fb3,_0x5676ff,_0x487635||{}),this[_0x4ec4c2(0x1c8)](_0x341fb3,_0x46cba1)):this[_0x4ec4c2(0x200)](_0x46cba1,_0x5676ff,_0x341fb3,function(){var _0x469c33=_0x4ec4c2;_0x1d0711==='null'||_0x1d0711===_0x469c33(0x214)||(delete _0x46cba1[_0x469c33(0x1e0)],_0x46cba1[_0x469c33(0x1bb)]=!0x0);});}return _0x46cba1;}finally{_0x5676ff['expressionsToEvaluate']=_0x13b363,_0x5676ff[_0x4ec4c2(0x202)]=_0x2a4167,_0x5676ff['isExpressionToEvaluate']=_0x2ccfc2;}}['_capIfString'](_0x5c4451,_0x2dec17,_0x410e79,_0x187047){var _0x2a77ec=_0x38603b,_0x344754=_0x187047['strLength']||_0x410e79['strLength'];if((_0x5c4451===_0x2a77ec(0x20e)||_0x5c4451===_0x2a77ec(0x1d3))&&_0x2dec17[_0x2a77ec(0x1e0)]){let _0x3d76c6=_0x2dec17[_0x2a77ec(0x1e0)][_0x2a77ec(0x1de)];_0x410e79[_0x2a77ec(0x1e4)]+=_0x3d76c6,_0x410e79['allStrLength']>_0x410e79[_0x2a77ec(0x265)]?(_0x2dec17[_0x2a77ec(0x1bb)]='',delete _0x2dec17[_0x2a77ec(0x1e0)]):_0x3d76c6>_0x344754&&(_0x2dec17['capped']=_0x2dec17['value']['substr'](0x0,_0x344754),delete _0x2dec17[_0x2a77ec(0x1e0)]);}}[_0x38603b(0x27c)](_0x5a49e7){var _0x4ae359=_0x38603b;return!!(_0x5a49e7&&_0x1f4a27[_0x4ae359(0x22a)]&&this[_0x4ae359(0x28c)](_0x5a49e7)===_0x4ae359(0x244)&&_0x5a49e7['forEach']);}[_0x38603b(0x277)](_0x4eff71){var _0x39816c=_0x38603b;if(_0x4eff71[_0x39816c(0x1fd)](/^\\d+$/))return _0x4eff71;var _0x495392;try{_0x495392=JSON[_0x39816c(0x1c1)](''+_0x4eff71);}catch{_0x495392='\\x22'+this[_0x39816c(0x28c)](_0x4eff71)+'\\x22';}return _0x495392['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x495392=_0x495392[_0x39816c(0x21e)](0x1,_0x495392['length']-0x2):_0x495392=_0x495392[_0x39816c(0x217)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x39816c(0x217)](/(^\"|\"$)/g,'\\x27'),_0x495392;}[_0x38603b(0x200)](_0x37412e,_0x158bb1,_0xc00bd2,_0x1bede7){var _0x217e80=_0x38603b;this[_0x217e80(0x21f)](_0x37412e,_0x158bb1),_0x1bede7&&_0x1bede7(),this[_0x217e80(0x1c8)](_0xc00bd2,_0x37412e),this['_treeNodePropertiesAfterFullValue'](_0x37412e,_0x158bb1);}[_0x38603b(0x21f)](_0x181c0e,_0x357196){var _0x53f978=_0x38603b;this[_0x53f978(0x1d0)](_0x181c0e,_0x357196),this['_setNodeQueryPath'](_0x181c0e,_0x357196),this['_setNodeExpressionPath'](_0x181c0e,_0x357196),this['_setNodePermissions'](_0x181c0e,_0x357196);}[_0x38603b(0x1d0)](_0x5c2999,_0xe52c19){}[_0x38603b(0x1d1)](_0x4328e0,_0x378df9){}['_setNodeLabel'](_0xb08753,_0x3ff558){}[_0x38603b(0x1f9)](_0x5e6d9b){return _0x5e6d9b===this['_undefined'];}[_0x38603b(0x245)](_0x4bbabf,_0x46953b){var _0x41f95c=_0x38603b;this['_setNodeLabel'](_0x4bbabf,_0x46953b),this['_setNodeExpandableState'](_0x4bbabf),_0x46953b[_0x41f95c(0x1df)]&&this[_0x41f95c(0x1c0)](_0x4bbabf),this[_0x41f95c(0x275)](_0x4bbabf,_0x46953b),this[_0x41f95c(0x20d)](_0x4bbabf,_0x46953b),this['_cleanNode'](_0x4bbabf);}[_0x38603b(0x1c8)](_0x21f60f,_0x51bbc7){var _0x38c902=_0x38603b;let _0x25c3e7;try{_0x1f4a27[_0x38c902(0x204)]&&(_0x25c3e7=_0x1f4a27[_0x38c902(0x204)][_0x38c902(0x22d)],_0x1f4a27[_0x38c902(0x204)][_0x38c902(0x22d)]=function(){}),_0x21f60f&&typeof _0x21f60f['length']==_0x38c902(0x1f0)&&(_0x51bbc7[_0x38c902(0x1de)]=_0x21f60f[_0x38c902(0x1de)]);}catch{}finally{_0x25c3e7&&(_0x1f4a27[_0x38c902(0x204)][_0x38c902(0x22d)]=_0x25c3e7);}if(_0x51bbc7['type']===_0x38c902(0x1f0)||_0x51bbc7[_0x38c902(0x1f2)]==='Number'){if(isNaN(_0x51bbc7[_0x38c902(0x1e0)]))_0x51bbc7[_0x38c902(0x208)]=!0x0,delete _0x51bbc7[_0x38c902(0x1e0)];else switch(_0x51bbc7['value']){case Number[_0x38c902(0x1ed)]:_0x51bbc7[_0x38c902(0x252)]=!0x0,delete _0x51bbc7[_0x38c902(0x1e0)];break;case Number[_0x38c902(0x222)]:_0x51bbc7[_0x38c902(0x242)]=!0x0,delete _0x51bbc7[_0x38c902(0x1e0)];break;case 0x0:this[_0x38c902(0x25a)](_0x51bbc7[_0x38c902(0x1e0)])&&(_0x51bbc7[_0x38c902(0x276)]=!0x0);break;}}else _0x51bbc7[_0x38c902(0x1f2)]===_0x38c902(0x1fc)&&typeof _0x21f60f['name']==_0x38c902(0x20e)&&_0x21f60f['name']&&_0x51bbc7[_0x38c902(0x241)]&&_0x21f60f['name']!==_0x51bbc7[_0x38c902(0x241)]&&(_0x51bbc7[_0x38c902(0x253)]=_0x21f60f[_0x38c902(0x241)]);}['_isNegativeZero'](_0x24936d){return 0x1/_0x24936d===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x437248){var _0x375dac=_0x38603b;!_0x437248[_0x375dac(0x27b)]||!_0x437248[_0x375dac(0x27b)][_0x375dac(0x1de)]||_0x437248['type']===_0x375dac(0x260)||_0x437248['type']===_0x375dac(0x22a)||_0x437248[_0x375dac(0x1f2)]===_0x375dac(0x258)||_0x437248['props'][_0x375dac(0x1f3)](function(_0x1505ca,_0x50c60d){var _0x29e6bf=_0x375dac,_0x466546=_0x1505ca[_0x29e6bf(0x241)][_0x29e6bf(0x20b)](),_0x165cb6=_0x50c60d['name'][_0x29e6bf(0x20b)]();return _0x466546<_0x165cb6?-0x1:_0x466546>_0x165cb6?0x1:0x0;});}[_0x38603b(0x275)](_0x3344b7,_0x48961d){var _0x51b12f=_0x38603b;if(!(_0x48961d[_0x51b12f(0x26e)]||!_0x3344b7['props']||!_0x3344b7[_0x51b12f(0x27b)][_0x51b12f(0x1de)])){for(var _0x20cb17=[],_0x36dafc=[],_0x59d4a3=0x0,_0x1013d1=_0x3344b7[_0x51b12f(0x27b)][_0x51b12f(0x1de)];_0x59d4a3<_0x1013d1;_0x59d4a3++){var _0x172ee1=_0x3344b7[_0x51b12f(0x27b)][_0x59d4a3];_0x172ee1[_0x51b12f(0x1f2)]==='function'?_0x20cb17['push'](_0x172ee1):_0x36dafc[_0x51b12f(0x21d)](_0x172ee1);}if(!(!_0x36dafc[_0x51b12f(0x1de)]||_0x20cb17[_0x51b12f(0x1de)]<=0x1)){_0x3344b7[_0x51b12f(0x27b)]=_0x36dafc;var _0x24c0e5={'functionsNode':!0x0,'props':_0x20cb17};this[_0x51b12f(0x1d0)](_0x24c0e5,_0x48961d),this[_0x51b12f(0x20c)](_0x24c0e5,_0x48961d),this[_0x51b12f(0x1e8)](_0x24c0e5),this['_setNodePermissions'](_0x24c0e5,_0x48961d),_0x24c0e5['id']+='\\x20f',_0x3344b7['props'][_0x51b12f(0x263)](_0x24c0e5);}}}[_0x38603b(0x20d)](_0x3fd3b1,_0x23c51f){}['_setNodeExpandableState'](_0x23a2eb){}['_isArray'](_0x47a2ff){var _0x3eb879=_0x38603b;return Array[_0x3eb879(0x226)](_0x47a2ff)||typeof _0x47a2ff=='object'&&this[_0x3eb879(0x28c)](_0x47a2ff)==='[object\\x20Array]';}[_0x38603b(0x1a7)](_0x25b5db,_0x2be78a){}[_0x38603b(0x280)](_0x30acc7){var _0x1d2cd4=_0x38603b;delete _0x30acc7[_0x1d2cd4(0x24d)],delete _0x30acc7[_0x1d2cd4(0x233)],delete _0x30acc7[_0x1d2cd4(0x209)];}[_0x38603b(0x1f8)](_0xaebd01,_0x22765a){}}let _0x27c16f=new _0xfb352(),_0x13ba07={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4f5a51={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x3f30e7(_0x413b11,_0x4ae721,_0x5dd84b,_0x7d4f81,_0x51fa8b,_0x382931){var _0x15b227=_0x38603b;let _0x53149b,_0x2322d9;try{_0x2322d9=_0x31daed(),_0x53149b=_0x55f635[_0x4ae721],!_0x53149b||_0x2322d9-_0x53149b['ts']>0x1f4&&_0x53149b[_0x15b227(0x285)]&&_0x53149b[_0x15b227(0x28d)]/_0x53149b[_0x15b227(0x285)]<0x64?(_0x55f635[_0x4ae721]=_0x53149b={'count':0x0,'time':0x0,'ts':_0x2322d9},_0x55f635['hits']={}):_0x2322d9-_0x55f635[_0x15b227(0x224)]['ts']>0x32&&_0x55f635[_0x15b227(0x224)][_0x15b227(0x285)]&&_0x55f635['hits'][_0x15b227(0x28d)]/_0x55f635['hits']['count']<0x64&&(_0x55f635[_0x15b227(0x224)]={});let _0x217115=[],_0x584b9b=_0x53149b['reduceLimits']||_0x55f635[_0x15b227(0x224)][_0x15b227(0x240)]?_0x4f5a51:_0x13ba07,_0x524c19=_0xf30fa4=>{var _0x242110=_0x15b227;let _0x55de4b={};return _0x55de4b[_0x242110(0x27b)]=_0xf30fa4['props'],_0x55de4b['elements']=_0xf30fa4['elements'],_0x55de4b['strLength']=_0xf30fa4[_0x242110(0x207)],_0x55de4b[_0x242110(0x265)]=_0xf30fa4[_0x242110(0x265)],_0x55de4b[_0x242110(0x1d6)]=_0xf30fa4[_0x242110(0x1d6)],_0x55de4b[_0x242110(0x24f)]=_0xf30fa4['autoExpandMaxDepth'],_0x55de4b[_0x242110(0x1df)]=!0x1,_0x55de4b[_0x242110(0x26e)]=!_0x13f00b,_0x55de4b[_0x242110(0x202)]=0x1,_0x55de4b[_0x242110(0x1e1)]=0x0,_0x55de4b[_0x242110(0x271)]=_0x242110(0x24a),_0x55de4b[_0x242110(0x22e)]=_0x242110(0x26f),_0x55de4b['autoExpand']=!0x0,_0x55de4b[_0x242110(0x23f)]=[],_0x55de4b[_0x242110(0x249)]=0x0,_0x55de4b['resolveGetters']=!0x0,_0x55de4b[_0x242110(0x1e4)]=0x0,_0x55de4b['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x55de4b;};for(var _0xe7ee5b=0x0;_0xe7ee5b<_0x51fa8b[_0x15b227(0x1de)];_0xe7ee5b++)_0x217115[_0x15b227(0x21d)](_0x27c16f[_0x15b227(0x1b0)]({'timeNode':_0x413b11==='time'||void 0x0},_0x51fa8b[_0xe7ee5b],_0x524c19(_0x584b9b),{}));if(_0x413b11===_0x15b227(0x1e5)){let _0x5b4a23=Error['stackTraceLimit'];try{Error[_0x15b227(0x1eb)]=0x1/0x0,_0x217115['push'](_0x27c16f[_0x15b227(0x1b0)]({'stackNode':!0x0},new Error()[_0x15b227(0x264)],_0x524c19(_0x584b9b),{'strLength':0x1/0x0}));}finally{Error[_0x15b227(0x1eb)]=_0x5b4a23;}}return{'method':'log','version':_0xec752f,'args':[{'ts':_0x5dd84b,'session':_0x7d4f81,'args':_0x217115,'id':_0x4ae721,'context':_0x382931}]};}catch(_0x3045e7){return{'method':_0x15b227(0x1b3),'version':_0xec752f,'args':[{'ts':_0x5dd84b,'session':_0x7d4f81,'args':[{'type':'unknown','error':_0x3045e7&&_0x3045e7[_0x15b227(0x288)]}],'id':_0x4ae721,'context':_0x382931}]};}finally{try{if(_0x53149b&&_0x2322d9){let _0x5284f7=_0x31daed();_0x53149b[_0x15b227(0x285)]++,_0x53149b[_0x15b227(0x28d)]+=_0x41cb13(_0x2322d9,_0x5284f7),_0x53149b['ts']=_0x5284f7,_0x55f635[_0x15b227(0x224)][_0x15b227(0x285)]++,_0x55f635[_0x15b227(0x224)][_0x15b227(0x28d)]+=_0x41cb13(_0x2322d9,_0x5284f7),_0x55f635[_0x15b227(0x224)]['ts']=_0x5284f7,(_0x53149b[_0x15b227(0x285)]>0x32||_0x53149b[_0x15b227(0x28d)]>0x64)&&(_0x53149b[_0x15b227(0x240)]=!0x0),(_0x55f635['hits'][_0x15b227(0x285)]>0x3e8||_0x55f635[_0x15b227(0x224)]['time']>0x12c)&&(_0x55f635['hits'][_0x15b227(0x240)]=!0x0);}}catch{}}}return _0x3f30e7;}((_0x77c701,_0x5a5384,_0x4b1de4,_0xaffc8,_0x59fd6e,_0x7162e1,_0x3a7ad1,_0x424c36,_0x54dc87)=>{var _0x1c2db2=_0x52aca5;if(_0x77c701[_0x1c2db2(0x1a6)])return _0x77c701['_console_ninja'];if(!Y(_0x77c701,_0x424c36,_0x59fd6e))return _0x77c701[_0x1c2db2(0x1a6)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x77c701[_0x1c2db2(0x1a6)];let _0x2e6174=R(_0x77c701),_0x1834df=_0x2e6174[_0x1c2db2(0x1d5)],_0x8697cb=_0x2e6174[_0x1c2db2(0x1dc)],_0x6f11cf=_0x2e6174['now'],_0xf37b50={'hits':{},'ts':{}},_0x212dcf=Q(_0x77c701,_0x54dc87,_0xf37b50,_0x7162e1),_0x5bac68=_0x581acb=>{_0xf37b50['ts'][_0x581acb]=_0x8697cb();},_0x2aba7a=(_0x2f815d,_0x4676c5)=>{var _0x5e6610=_0x1c2db2;let _0x984556=_0xf37b50['ts'][_0x4676c5];if(delete _0xf37b50['ts'][_0x4676c5],_0x984556){let _0x515fa9=_0x1834df(_0x984556,_0x8697cb());_0x14fd05(_0x212dcf(_0x5e6610(0x28d),_0x2f815d,_0x6f11cf(),_0x4e6cb9,[_0x515fa9],_0x4676c5));}},_0x21d8fd=_0x80713a=>_0x5baef7=>{var _0x47b050=_0x1c2db2;try{_0x5bac68(_0x5baef7),_0x80713a(_0x5baef7);}finally{_0x77c701['console'][_0x47b050(0x28d)]=_0x80713a;}},_0x90331c=_0x2d9238=>_0x214435=>{var _0x4ecb07=_0x1c2db2;try{let [_0x476cf5,_0x31b555]=_0x214435[_0x4ecb07(0x1c2)](':logPointId:');_0x2aba7a(_0x31b555,_0x476cf5),_0x2d9238(_0x476cf5);}finally{_0x77c701[_0x4ecb07(0x204)][_0x4ecb07(0x259)]=_0x2d9238;}};_0x77c701['_console_ninja']={'consoleLog':(_0x536ad6,_0x25e0f8)=>{var _0x118ad2=_0x1c2db2;_0x77c701[_0x118ad2(0x204)][_0x118ad2(0x1b3)]['name']!==_0x118ad2(0x1dd)&&_0x14fd05(_0x212dcf(_0x118ad2(0x1b3),_0x536ad6,_0x6f11cf(),_0x4e6cb9,_0x25e0f8));},'consoleTrace':(_0x44fd4e,_0x364c52)=>{var _0x200d86=_0x1c2db2;_0x77c701[_0x200d86(0x204)][_0x200d86(0x1b3)][_0x200d86(0x241)]!==_0x200d86(0x1ef)&&_0x14fd05(_0x212dcf(_0x200d86(0x1e5),_0x44fd4e,_0x6f11cf(),_0x4e6cb9,_0x364c52));},'consoleTime':()=>{var _0x5ba05c=_0x1c2db2;_0x77c701[_0x5ba05c(0x204)][_0x5ba05c(0x28d)]=_0x21d8fd(_0x77c701[_0x5ba05c(0x204)][_0x5ba05c(0x28d)]);},'consoleTimeEnd':()=>{var _0x12b7c9=_0x1c2db2;_0x77c701[_0x12b7c9(0x204)][_0x12b7c9(0x259)]=_0x90331c(_0x77c701[_0x12b7c9(0x204)]['timeEnd']);},'autoLog':(_0x45aa1d,_0x11e966)=>{var _0x451ac7=_0x1c2db2;_0x14fd05(_0x212dcf(_0x451ac7(0x1b3),_0x11e966,_0x6f11cf(),_0x4e6cb9,[_0x45aa1d]));},'autoLogMany':(_0x4a08ed,_0x56899a)=>{var _0x1ea132=_0x1c2db2;_0x14fd05(_0x212dcf(_0x1ea132(0x1b3),_0x4a08ed,_0x6f11cf(),_0x4e6cb9,_0x56899a));},'autoTrace':(_0x142ea4,_0x3794dd)=>{var _0xe78471=_0x1c2db2;_0x14fd05(_0x212dcf(_0xe78471(0x1e5),_0x3794dd,_0x6f11cf(),_0x4e6cb9,[_0x142ea4]));},'autoTraceMany':(_0x159ebc,_0x52b7d4)=>{var _0x30ceaa=_0x1c2db2;_0x14fd05(_0x212dcf(_0x30ceaa(0x1e5),_0x159ebc,_0x6f11cf(),_0x4e6cb9,_0x52b7d4));},'autoTime':(_0x380079,_0x2c7db1,_0x5ae988)=>{_0x5bac68(_0x5ae988);},'autoTimeEnd':(_0x3c0a02,_0x341b71,_0x544fb6)=>{_0x2aba7a(_0x341b71,_0x544fb6);},'coverage':_0x22334a=>{_0x14fd05({'method':'coverage','version':_0x7162e1,'args':[{'id':_0x22334a}]});}};let _0x14fd05=J(_0x77c701,_0x5a5384,_0x4b1de4,_0xaffc8,_0x59fd6e),_0x4e6cb9=_0x77c701[_0x1c2db2(0x25c)];return _0x77c701[_0x1c2db2(0x1a6)];})(globalThis,_0x52aca5(0x1d2),'37911',_0x52aca5(0x26d),_0x52aca5(0x1c7),_0x52aca5(0x26a),'1693429191058',_0x52aca5(0x23d),_0x52aca5(0x1cc));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/* harmony import */ var _modules_editTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/editTask */ "./src/modules/editTask.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_editInputCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/editInputCard */ "./src/components/editInputCard.js");
//MODULE IMPORT SECTION











//DECLARATION SECTION

const main = document.querySelector('.main');

const content = document.createElement('div');
content.classList.add('content');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn', 'btn', 'btn-primary');
addTaskBtn.textContent = 'New task';

window.removeTask = _modules_removeTask__WEBPACK_IMPORTED_MODULE_5__.removeTask;
window.editTask = _modules_editTask__WEBPACK_IMPORTED_MODULE_6__.editTask;

// APPPEND SECTION

main.appendChild(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__.sidebar);
main.appendChild(content);
content.appendChild(addTaskBtn);
content.appendChild(_components_taskList__WEBPACK_IMPORTED_MODULE_3__.taskList);


// EVENT LISTENER SECTION

main.addEventListener('click', function(event){

    let targetElement = event.target;
    const submitTaskBtnId = 'task-submit-btn';
    const backTaskBtnId = 'task-back-btn';
    const editTaskBtnId = 'task-edit-btn';
    const submitTaskEditId = 'task-submit-edit-btn';
    let currentIndex = '';

    if (targetElement.id === submitTaskBtnId) {
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

    if (targetElement.id === backTaskBtnId) {
        _components_inputCard__WEBPACK_IMPORTED_MODULE_0__.inputCard.remove();
    }

    if (targetElement.id === editTaskBtnId) {
        content.appendChild(_components_editInputCard__WEBPACK_IMPORTED_MODULE_8__.editInputCard);
        currentIndex = Number(targetElement.getAttribute('onclick').replace(/\D/g,''));
    }

    if (targetElement.id === submitTaskEditId) {
        const taskSubmitEditBtn = document.querySelector('#task-submit-edit-btn');
        const taskNameEditText = document.querySelector('#task-name').value;
        const taskDescriptionEditText = document.querySelector('#task-description').value;
        const taskDateEditPicked = document.querySelector('#datePicker').value;
        const taskPriorityEditPicked = document.querySelector('#priorityPicker').value;
        const taskFormEditElement = document.querySelector('#add-task-form');

        taskSubmitEditBtn.addEventListener('click', (0,_modules_editTask__WEBPACK_IMPORTED_MODULE_6__.editTask)(taskNameEditText, taskDescriptionEditText, taskDateEditPicked, taskPriorityEditPicked, '', '', '', currentIndex));
        taskSubmitEditBtn.addEventListener('click', _modules_renderTask__WEBPACK_IMPORTED_MODULE_4__.renderTask);

        taskFormEditElement.reset();
        _components_editInputCard__WEBPACK_IMPORTED_MODULE_8__.editInputCard.remove();
    }

}, true);

addTaskBtn.addEventListener('click', function() {
    content.appendChild(_components_inputCard__WEBPACK_IMPORTED_MODULE_0__.inputCard);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELCtEQUFVO0FBQzFELGdEQUFnRCwyREFBVTs7QUFFMUQ7QUFDQSxRQUFRLDREQUFTO0FBQ2pCOztBQUVBO0FBQ0EsUUFBUSw0REFBUztBQUNqQjs7QUFFQTtBQUNBLDRCQUE0QixvRUFBYTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCwyREFBUTtBQUM1RCxvREFBb0QsMkRBQVU7O0FBRTlEO0FBQ0EsUUFBUSxvRUFBYTtBQUNyQjs7QUFFQSxDQUFDOztBQUVEO0FBQ0Esd0JBQXdCLDREQUFTO0FBQ2pDLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0SW5wdXRDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2lucHV0Q2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0cy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4ubWFpbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnI7XG59XG5cbi5zaWRlYmFyLWNvbXBvbmVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4ubmF2YmFyLWNvbXBvbmVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4uY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4uc2lkZWJhci1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdGF0dXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhdHVzLWNpcmNsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4vKiBGSVggTkFNSU5HIENPTlZFTlRJT04gQU5EIFNUVUZGKi9cblxuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xuICAgIHdpZHRoOiA4MHZ3O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzNywgNDEpO1xufVxuXG4jbGlicmFyeSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG59XG5cbi50YXNrLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDMzLCAzNywgNDEsIDAuMzU2KTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDMzLCAzNywgNDEsIDAuMzU2KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgzMywgMzcsIDQxLCAwLjM1Nik7XG59XG5cbi50YXNrLWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUEsbUNBQW1DOztBQUVuQztJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QywrQ0FBK0M7SUFDL0MsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xcbn1cXG5cXG4uc2lkZWJhci1jb21wb25lbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5uYXZiYXItY29tcG9uZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnNpZGViYXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN0YXR1cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3RhdHVzLWNpcmNsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi8qIEZJWCBOQU1JTkcgQ09OVkVOVElPTiBBTkQgU1RVRkYqL1xcblxcbi50YWJsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogNTBweDtcXG4gICAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG59XFxuXFxuI2xpYnJhcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG5cXG4udGFzay1yb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMzMsIDM3LCA0MSwgMC4zNTYpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDMzLCAzNywgNDEsIDAuMzU2KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMzMsIDM3LCA0MSwgMC4zNTYpO1xcbn1cXG5cXG4udGFzay1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZWRpdElucHV0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5lZGl0SW5wdXRDYXJkLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW5wdXQtY2FyZCcpO1xuXG5lZGl0SW5wdXRDYXJkLmlubmVySFRNTCA9IGBcbjxmb3JtIGlkPVwiYWRkLXRhc2stZm9ybVwiPlxuPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlRhc2sgbmFtZTwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0YXNrLW5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5UYXNrIGRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRhc2stZGVzY3JpcHRpb25cIj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsIGZvcj1cImRhdGVQaWNrZXJcIj5FbnRlciBhIGR1ZSBkYXRlPC9sYWJlbD5cbiAgPGlucHV0IGlkPVwiZGF0ZVBpY2tlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImRhdGVcIiAvPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWItM1wiPlxuICA8bGFiZWwgZm9yPVwicHJpb3JpdHlQaWNrZXJcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5TZWxlY3QgYSBwcmlvcml0eSBsZXZlbDwvbGFiZWw+XG4gIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCIgaWQ9XCJwcmlvcml0eVBpY2tlclwiPlxuICAgIDxvcHRpb24gc2VsZWN0ZWQ+IDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+U3VwZXIgaW1wb3J0YW50PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5GYWlybHkgaW1wb3J0YW50PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5JbXBvcnRhbnQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPk5vdCB0aGF0IGltcG9ydGFudDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+Tm8gaW1wb3J0YW5jZTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvZGl2PlxuPC9mb3JtPlxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGlkPVwidGFzay1zdWJtaXQtZWRpdC1idG5cIj5FZGl0IHRhc2s8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGlkPVwidGFzay1iYWNrLWJ0blwiPkJhY2s8L2J1dHRvbj5gO1xuXG5leHBvcnQgeyBlZGl0SW5wdXRDYXJkIH07IiwiY29uc3QgaW5wdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmlucHV0Q2FyZC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jYXJkJyk7XG5cbmlucHV0Q2FyZC5pbm5lckhUTUwgPSBgXG48Zm9ybSBpZD1cImFkZC10YXNrLWZvcm1cIj5cbjxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5UYXNrIG5hbWU8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidGFzay1uYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWItM1wiPlxuICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VGFzayBkZXNjcmlwdGlvbjwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gIDxsYWJlbCBmb3I9XCJkYXRlUGlja2VyXCI+RW50ZXIgYSBkdWUgZGF0ZTwvbGFiZWw+XG4gIDxpbnB1dCBpZD1cImRhdGVQaWNrZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJkYXRlXCIgLz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsIGZvcj1cInByaW9yaXR5UGlja2VyXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+U2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWw8L2xhYmVsPlxuICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3RcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiIGlkPVwicHJpb3JpdHlQaWNrZXJcIj5cbiAgICA8b3B0aW9uIHNlbGVjdGVkPiA8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlN1cGVyIGltcG9ydGFudDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+RmFpcmx5IGltcG9ydGFudDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+SW1wb3J0YW50PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5Ob3QgdGhhdCBpbXBvcnRhbnQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPk5vIGltcG9ydGFuY2U8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L2Rpdj5cbjwvZm9ybT5cbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBpZD1cInRhc2stc3VibWl0LWJ0blwiPkFkZCB0YXNrPC9idXR0b24+XG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBpZD1cInRhc2stYmFjay1idG5cIj5CYWNrPC9idXR0b24+YDtcblxuZXhwb3J0IHtpbnB1dENhcmR9OyIsImNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbXBvbmVudCcpO1xuXG5zaWRlYmFyLmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJzaWRlYmFyLWxpbmtzXCI+XG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItdGl0bGUtY29udGFpbmVyXCI+PGgxIGNsYXNzPVwic2lkZWJhci10aXRsZVwiPmNoZWNreS5pbzwvaDE+PC9kaXY+XG4gICAgPGEgaHJlZj1cIlwiPkhPTUU8L2E+XG4gICAgPGEgaHJlZj1cIlwiPlBST0pFQ1RTPC9hPlxuICAgIDxhIGhyZWY9XCJcIj5OT1RFUzwvYT5cbiAgICA8YSBocmVmPVwiXCI+VVBDT01JTkc8L2E+XG48L2Rpdj5gXG5cbmV4cG9ydCB7IHNpZGViYXIgfTsiLCJjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG50YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YWJsZScpO1xuXG50YXNrTGlzdC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPHA+VGFzazwvcD5cbiAgICA8cD5UYWdzPC9wPlxuICAgIDxwPlByaW9yaXR5PC9wPlxuICAgIDxwPkR1ZSBkYXRlPC9wPlxuICAgIDxwPlN0YXR1czwvcD5cbjwvZGl2PlxuPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PmA7XG5cbmV4cG9ydCB7dGFza0xpc3R9OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vb2JqZWN0cy90YXNrLmpzXCI7XG5pbXBvcnQgeyBzdG9yZVRhc2sgfSBmcm9tIFwiLi9zdG9yZVRhc2suanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgdGFncywgY2hlY2tsaXN0LCBzdGF0ZSwgb3BlcmF0aW9uLCBpbmRleCkge1xuXG4gICAgaWYgKGR1ZURhdGUgPT0gJycpIHtcbiAgICAgICAgZHVlRGF0ZSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAocHJpb3JpdHkgPT0gJycpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKG5vdGVzID09ICcnKSB7XG4gICAgICAgIG5vdGVzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRhZ3MgPT0gJycpIHtcbiAgICAgICAgdGFncyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChjaGVja2xpc3QgPT0gJycpIHtcbiAgICAgICAgY2hlY2tsaXN0ID0gW107XG4gICAgfVxuXG4gICAgc3RhdGUgPSBmYWxzZTtcblxuICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHRhZ3MsIGNoZWNrbGlzdCwgc3RhdGUpO1xuXG4gICAgc3RvcmVUYXNrKHRhc2ssIG9wZXJhdGlvbiwgaW5kZXgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XG5cblxuXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgdGFncywgY2hlY2tsaXN0LCBzdGF0ZSwgaW5kZXgpIHtcbiAgICBjb25zdCBvcGVyYXRpb24gPSAnZWRpdCc7XG4gICAgY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgdGFncywgY2hlY2tsaXN0LCBzdGF0ZSwgb3BlcmF0aW9uLCBpbmRleCk7XG59XG5cbmV4cG9ydCB7IGVkaXRUYXNrIH07IiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9vYmplY3RzL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHJlbmRlclRhc2sgfSBmcm9tIFwiLi9yZW5kZXJUYXNrXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICBzdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmVuZGVyVGFzaygpO1xufVxuXG5leHBvcnQgeyByZW1vdmVUYXNrIH07IiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9vYmplY3RzL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFza0xpc3RcIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFzaygpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1jb250YWluZXInKTtcbiAgICB0YXNrQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gc3RvcmFnZVtpXTtcbiAgICAgICAgY29uc3QgdGFibGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFibGVJdGVtLmNsYXNzTGlzdCA9IFwidGFzay1yb3dcIjtcbiAgICAgICAgdGFibGVJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+JHt0YXNrLnRpdGxlfTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLnRhZ3N9PC9wPlxuICAgICAgICA8cD4ke3Rhc2sucHJpb3JpdHl9PC9wPlxuICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgaWQ9XCJ0YXNrLWVkaXQtYnRuXCIgb25jbGljaz1cImVkaXRUYXNrKCR7aX0pXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBpZD1cInRhc2stcmVtb3ZlLWJ0blwiIG9uY2xpY2s9XCJyZW1vdmVUYXNrKCR7aX0pXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFibGVJdGVtKTtcbiAgICAgICAgdGFza0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVJdGVtKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhc2sgfTtcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9vYmplY3RzL3N0b3JhZ2UuanMnO1xuXG5mdW5jdGlvbiBzdG9yZVRhc2sodGFzaywgb3BlcmF0aW9uLCBpbmRleCkge1xuICAgIFxuICAgIGlmIChvcGVyYXRpb24gIT09ICdlZGl0Jykge1xuICAgICAgICBzdG9yYWdlLnB1c2godGFzayk7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGY3MDMwMmI3XzBgLHN0b3JhZ2UpKTtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PSAnZWRpdCcpIHtcbiAgICAgICAgc3RvcmFnZS5zcGxpY2UoaW5kZXggLSAxLCAxLCB0YXNrKTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZjcwMzAyYjdfMWAsc3RvcmFnZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc3RvcmVUYXNrIH07XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7ZnVuY3Rpb24gXzB4NDBhZSgpe3ZhciBfMHg0MmZkMTI9WydfY29ubmVjdGVkJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ19pbkJyb3dzZXInLCdkZXB0aCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdjb25zb2xlJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnd2FybicsJ3N0ckxlbmd0aCcsJ25hbicsJ19oYXNNYXBPbkl0c1BhdGgnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ3RvTG93ZXJDYXNlJywnX3NldE5vZGVMYWJlbCcsJ19hZGRMb2FkTm9kZScsJ3N0cmluZycsJ19pc1ByaW1pdGl2ZVR5cGUnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfYWxsb3dlZFRvU2VuZCcsJ3dzOi8vJywncmVsb2FkJywndW5kZWZpbmVkJywnYm9vbGVhbicsJ3ZhbHVlT2YnLCdyZXBsYWNlJywnZ2V0JywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfcF9uYW1lJywnZGF0YScsJ2dldHRlcicsJ3B1c2gnLCdzdWJzdHInLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnZ2V0UHJvdG90eXBlT2YnLCdfV2ViU29ja2V0Q2xhc3MnLCdORUdBVElWRV9JTkZJTklUWScsJy4uLicsJ2hpdHMnLCdub3cnLCdpc0FycmF5Jywnb2JqZWN0Jywnb25vcGVuJywnNDVzT1dFUUknLCdNYXAnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ251bGwnLCdlcnJvcicsJ3Jvb3RFeHByZXNzaW9uJywnd3MvaW5kZXguanMnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywncHJvY2VzcycsJ19oYXNTZXRPbkl0c1BhdGgnLCdfaXNTZXQnLCdyZW1peCcsJ2NvbmNhdCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ3NldHRlcicsJ3RoZW4nLCdfdW5kZWZpbmVkJywnY2F0Y2gnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiWHVidW50dVxcXCIsXFxcIjEwLjAuMi4xNVxcXCJdLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdyZWR1Y2VMaW1pdHMnLCduYW1lJywnbmVnYXRpdmVJbmZpbml0eScsJ19TeW1ib2wnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCd1cmwnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdlbnVtZXJhYmxlJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdyb290X2V4cF9pZCcsJ29uY2xvc2UnLCdfZGF0ZVRvU3RyaW5nJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnYXV0b0V4cGFuZCcsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ2NhcHBlZFByb3BzJywnY3JlYXRlJywncG9zaXRpdmVJbmZpbml0eScsJ2Z1bmNOYW1lJywnNzc1NTE0aHZLa3hnJywnNDg1OTgyQ0hvdnNmJywnX3R5cGUnLCdfcmVjb25uZWN0VGltZW91dCcsJ1NldCcsJ3RpbWVFbmQnLCdfaXNOZWdhdGl2ZVplcm8nLCdSZWdFeHAnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnMzUxMDU1bEdRQXN5JywnYXJyYXknLCdkYXRlJywncHJvdG90eXBlJywndW5zaGlmdCcsJ3N0YWNrJywndG90YWxTdHJMZW5ndGgnLCdudXh0JywnMzExMDQ4T3Vha2JlJywnc3ltYm9sJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJzEuMC4wJywncGF0aFRvRmlsZVVSTCcsJ19wcm9wZXJ0eScsXFxcIi9ob21lL2R1YWx2bS8udnNjb2RlL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMC4wLjIxMC9ub2RlX21vZHVsZXNcXFwiLCdub0Z1bmN0aW9ucycsJ3Jvb3RfZXhwJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdleHBJZCcsJ2JpbmQnLCdcXFxceDIwc2VydmVyJywncGFyc2UnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ25lZ2F0aXZlWmVybycsJ19wcm9wZXJ0eU5hbWUnLCdyZXNvbHZlR2V0dGVycycsJ3BlcmZfaG9va3MnLCdjb25zdHJ1Y3RvcicsJ3Byb3BzJywnX2lzTWFwJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnZ2xvYmFsJywnX2NsZWFuTm9kZScsJzIxMDUxMzBzVXVoZFonLCdwb3J0JywnMTQzMTAwOHV3Rm10UicsJ19jb25uZWN0aW5nJywnY291bnQnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ3NsaWNlJywnbWVzc2FnZScsJ2pvaW4nLCdob3N0bmFtZScsJ19jYXBJZlN0cmluZycsJ19vYmplY3RUb1N0cmluZycsJ3RpbWUnLCdfcmVnRXhwVG9TdHJpbmcnLCdzZW5kJywnaGFzT3duUHJvcGVydHknLCdfY29uc29sZV9uaW5qYScsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCcyNG55WFJYWCcsJ1dlYlNvY2tldCcsJ25leHQuanMnLCdjdXJyZW50JywnX3dzJywncGF0aCcsJ2RlZmF1bHQnLCdzZXJpYWxpemUnLCdsb2NhdGlvbicsJ1tvYmplY3RcXFxceDIwU2V0XScsJ2xvZycsJ3RvU3RyaW5nJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdfc2VuZEVycm9yTWVzc2FnZScsJ1xcXFx4MjBicm93c2VyJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzI0enNMd1JDJywnSFRNTEFsbENvbGxlY3Rpb24nLCdjYXBwZWQnLCdwYXJlbnQnLCdjYWxsJywnX2tleVN0clJlZ0V4cCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ19zb3J0UHJvcHMnLCdzdHJpbmdpZnknLCdzcGxpdCcsJ19wXycsJ19zb2NrZXQnLCdTeW1ib2wnLCdob3N0Jywnd2VicGFjaycsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdmb3JFYWNoJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCd0ZXN0JywnJywndmVyc2lvbnMnLCdub2RlJywnbm9kZU1vZHVsZXMnLCdfc2V0Tm9kZUlkJywnX3NldE5vZGVRdWVyeVBhdGgnLCcxMjcuMC4wLjEnLCdTdHJpbmcnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ2VsYXBzZWQnLCdhdXRvRXhwYW5kTGltaXQnLCdiaWdpbnQnLCdfYWRkUHJvcGVydHknLCdhc3RybycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdocnRpbWUnLCd0aW1lU3RhbXAnLCdkaXNhYmxlZExvZycsJ2xlbmd0aCcsJ3NvcnRQcm9wcycsJ3ZhbHVlJywnbGV2ZWwnLCdtZXRob2QnLCd1bmtub3duJywnYWxsU3RyTGVuZ3RoJywndHJhY2UnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdkZWZpbmVQcm9wZXJ0eScsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnX3F1b3RlZFJlZ0V4cCcsJ19fZXMnKydNb2R1bGUnLCdzdGFja1RyYWNlTGltaXQnLCd1bnJlZicsJ1BPU0lUSVZFX0lORklOSVRZJywnX1dlYlNvY2tldCcsJ2Rpc2FibGVkVHJhY2UnLCdudW1iZXInLCdvbmVycm9yJywndHlwZScsJ3NvcnQnLCdOdW1iZXInLCcxMTA0MzY5VE9mdG9NJywnX3BfbGVuZ3RoJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX2lzVW5kZWZpbmVkJywncmVhZHlTdGF0ZScsJ2luZGV4JywnZnVuY3Rpb24nLCdtYXRjaCcsJ3BlcmZvcm1hbmNlJ107XzB4NDBhZT1mdW5jdGlvbigpe3JldHVybiBfMHg0MmZkMTI7fTtyZXR1cm4gXzB4NDBhZSgpO312YXIgXzB4NTJhY2E1PV8weDViMTM7ZnVuY3Rpb24gXzB4NWIxMyhfMHg1ZjBhMTgsXzB4MjdhOWVkKXt2YXIgXzB4NDBhZTkxPV8weDQwYWUoKTtyZXR1cm4gXzB4NWIxMz1mdW5jdGlvbihfMHg1YjEzOGEsXzB4MTI3OTFiKXtfMHg1YjEzOGE9XzB4NWIxMzhhLTB4MWEzO3ZhciBfMHg1NTBjOGM9XzB4NDBhZTkxW18weDViMTM4YV07cmV0dXJuIF8weDU1MGM4Yzt9LF8weDViMTMoXzB4NWYwYTE4LF8weDI3YTllZCk7fShmdW5jdGlvbihfMHg0MDg4Y2EsXzB4Yjc3MTJhKXt2YXIgXzB4MjI1OTk4PV8weDViMTMsXzB4MWY4YmEwPV8weDQwODhjYSgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MWZlYWIyPS1wYXJzZUludChfMHgyMjU5OTgoMHgyNjcpKS8weDErcGFyc2VJbnQoXzB4MjI1OTk4KDB4MjU0KSkvMHgyK3BhcnNlSW50KF8weDIyNTk5OCgweDI1NSkpLzB4MytwYXJzZUludChfMHgyMjU5OTgoMHgyODMpKS8weDQrcGFyc2VJbnQoXzB4MjI1OTk4KDB4MjVmKSkvMHg1KihwYXJzZUludChfMHgyMjU5OTgoMHgxYjkpKS8weDYpKy1wYXJzZUludChfMHgyMjU5OTgoMHgxZjUpKS8weDcqKC1wYXJzZUludChfMHgyMjU5OTgoMHgxYTkpKS8weDgpK3BhcnNlSW50KF8weDIyNTk5OCgweDIyOSkpLzB4OSooLXBhcnNlSW50KF8weDIyNTk5OCgweDI4MSkpLzB4YSk7aWYoXzB4MWZlYWIyPT09XzB4Yjc3MTJhKWJyZWFrO2Vsc2UgXzB4MWY4YmEwWydwdXNoJ10oXzB4MWY4YmEwWydzaGlmdCddKCkpO31jYXRjaChfMHg0ZGY3ZjApe18weDFmOGJhMFsncHVzaCddKF8weDFmOGJhMFsnc2hpZnQnXSgpKTt9fX0oXzB4NDBhZSwweDQ4YzMzKSk7dmFyIGo9T2JqZWN0W18weDUyYWNhNSgweDI1MSldLFg9T2JqZWN0W18weDUyYWNhNSgweDFlNyldLEc9T2JqZWN0W18weDUyYWNhNSgweDIwNSldLGVlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLHRlPU9iamVjdFtfMHg1MmFjYTUoMHgyMjApXSxuZT1PYmplY3RbXzB4NTJhY2E1KDB4MjYyKV1bXzB4NTJhY2E1KDB4MWE1KV0scmU9KF8weDRkOWY4NSxfMHgyZWE0MDEsXzB4NTU1OWQxLF8weDMxMDdmMCk9Pnt2YXIgXzB4ZTc5ODgzPV8weDUyYWNhNTtpZihfMHgyZWE0MDEmJnR5cGVvZiBfMHgyZWE0MDE9PSdvYmplY3QnfHx0eXBlb2YgXzB4MmVhNDAxPT1fMHhlNzk4ODMoMHgxZmMpKXtmb3IobGV0IF8weDI0NmUzMyBvZiBlZShfMHgyZWE0MDEpKSFuZVtfMHhlNzk4ODMoMHgxYmQpXShfMHg0ZDlmODUsXzB4MjQ2ZTMzKSYmXzB4MjQ2ZTMzIT09XzB4NTU1OWQxJiZYKF8weDRkOWY4NSxfMHgyNDZlMzMseydnZXQnOigpPT5fMHgyZWE0MDFbXzB4MjQ2ZTMzXSwnZW51bWVyYWJsZSc6IShfMHgzMTA3ZjA9RyhfMHgyZWE0MDEsXzB4MjQ2ZTMzKSl8fF8weDMxMDdmMFtfMHhlNzk4ODMoMHgyNDgpXX0pO31yZXR1cm4gXzB4NGQ5Zjg1O30seD0oXzB4NWUyMjhkLF8weDRiNjNhZixfMHgzNjA2OGYpPT4oXzB4MzYwNjhmPV8weDVlMjI4ZCE9bnVsbD9qKHRlKF8weDVlMjI4ZCkpOnt9LHJlKF8weDRiNjNhZnx8IV8weDVlMjI4ZHx8IV8weDVlMjI4ZFtfMHg1MmFjYTUoMHgxZWEpXT9YKF8weDM2MDY4ZiwnZGVmYXVsdCcseyd2YWx1ZSc6XzB4NWUyMjhkLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MzYwNjhmLF8weDVlMjI4ZCkpLHE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4M2U4MjNjLF8weDE0NTYwOCxfMHgyOTZkZTEsXzB4NTQ3ZTAwKXt2YXIgXzB4NDM2MDI1PV8weDUyYWNhNTt0aGlzW18weDQzNjAyNSgweDI3ZildPV8weDNlODIzYyx0aGlzW18weDQzNjAyNSgweDFjNildPV8weDE0NTYwOCx0aGlzW18weDQzNjAyNSgweDI4MildPV8weDI5NmRlMSx0aGlzW18weDQzNjAyNSgweDFjZildPV8weDU0N2UwMCx0aGlzW18weDQzNjAyNSgweDIxMSldPSEweDAsdGhpc1tfMHg0MzYwMjUoMHgyMzEpXT0hMHgwLHRoaXNbXzB4NDM2MDI1KDB4MWZmKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHg0MzYwMjUoMHgyMDEpXT0hIXRoaXNbXzB4NDM2MDI1KDB4MjdmKV1bXzB4NDM2MDI1KDB4MWFhKV0sdGhpc1tfMHg0MzYwMjUoMHgyMjEpXT1udWxsLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J109MHgwLHRoaXNbXzB4NDM2MDI1KDB4MjE5KV09MHgxNCx0aGlzW18weDQzNjAyNSgweDI3ZCldPV8weDQzNjAyNSgweDI1ZCksdGhpc1tfMHg0MzYwMjUoMHgxYjYpXT0odGhpc1snX2luQnJvd3NlciddPydDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCc6XzB4NDM2MDI1KDB4MWY3KSkrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXTt9YXN5bmNbXzB4NTJhY2E1KDB4MWNhKV0oKXt2YXIgXzB4MjNhYzlkPV8weDUyYWNhNTtpZih0aGlzW18weDIzYWM5ZCgweDIyMSldKXJldHVybiB0aGlzW18weDIzYWM5ZCgweDIyMSldO2xldCBfMHg0OTRkMDE7aWYodGhpc1tfMHgyM2FjOWQoMHgyMDEpXSlfMHg0OTRkMDE9dGhpc1snZ2xvYmFsJ11bXzB4MjNhYzlkKDB4MWFhKV07ZWxzZXtpZih0aGlzWydnbG9iYWwnXVtfMHgyM2FjOWQoMHgyMzIpXT8uW18weDIzYWM5ZCgweDFlZSldKV8weDQ5NGQwMT10aGlzW18weDIzYWM5ZCgweDI3ZildWydwcm9jZXNzJ10/LltfMHgyM2FjOWQoMHgxZWUpXTtlbHNlIHRyeXtsZXQgXzB4MWRiMDM3PWF3YWl0IGltcG9ydChfMHgyM2FjOWQoMHgxYWUpKTtfMHg0OTRkMDE9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDIzYWM5ZCgweDI0NikpKVtfMHgyM2FjOWQoMHgyNmIpXShfMHgxZGIwMzdbJ2pvaW4nXSh0aGlzW18weDIzYWM5ZCgweDFjZildLF8weDIzYWM5ZCgweDIyZikpKVtfMHgyM2FjOWQoMHgxYjQpXSgpKSlbXzB4MjNhYzlkKDB4MWFmKV07fWNhdGNoe3RyeXtfMHg0OTRkMDE9cmVxdWlyZShyZXF1aXJlKCdwYXRoJylbXzB4MjNhYzlkKDB4Mjg5KV0odGhpc1tfMHgyM2FjOWQoMHgxY2YpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgyM2FjOWQoMHgxZTYpKTt9fX1yZXR1cm4gdGhpc1tfMHgyM2FjOWQoMHgyMjEpXT1fMHg0OTRkMDEsXzB4NDk0ZDAxO31bXzB4NTJhY2E1KDB4MWI1KV0oKXt2YXIgXzB4NGQ1MDM4PV8weDUyYWNhNTt0aGlzWydfY29ubmVjdGluZyddfHx0aGlzW18weDRkNTAzOCgweDFmZildfHx0aGlzW18weDRkNTAzOCgweDI4NildPj10aGlzW18weDRkNTAzOCgweDIxOSldfHwodGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddKyssdGhpc1tfMHg0ZDUwMzgoMHgxYWQpXT1uZXcgUHJvbWlzZSgoXzB4NWRhMTliLF8weDJkYTExKT0+e3ZhciBfMHg0ZDQwNDg9XzB4NGQ1MDM4O3RoaXNbXzB4NGQ0MDQ4KDB4MWNhKV0oKVtfMHg0ZDQwNDgoMHgyMzkpXShfMHgzM2EyMjM9Pnt2YXIgXzB4MjgzNjI1PV8weDRkNDA0ODtsZXQgXzB4NWRkYjBhPW5ldyBfMHgzM2EyMjMoXzB4MjgzNjI1KDB4MjEyKSt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4MjgzNjI1KDB4MjgyKV0pO18weDVkZGIwYVtfMHgyODM2MjUoMHgxZjEpXT0oKT0+e3ZhciBfMHg2MDMwMjM9XzB4MjgzNjI1O3RoaXNbXzB4NjAzMDIzKDB4MjExKV09ITB4MSx0aGlzW18weDYwMzAyMygweDIyYildKF8weDVkZGIwYSksdGhpc1tfMHg2MDMwMjMoMHgyMzApXSgpLF8weDJkYTExKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDVkZGIwYVtfMHgyODM2MjUoMHgyMjgpXT0oKT0+e3ZhciBfMHgzYzdhOTU9XzB4MjgzNjI1O3RoaXNbXzB4M2M3YTk1KDB4MjAxKV18fF8weDVkZGIwYVtfMHgzYzdhOTUoMHgxYzQpXSYmXzB4NWRkYjBhW18weDNjN2E5NSgweDFjNCldW18weDNjN2E5NSgweDFlYyldJiZfMHg1ZGRiMGFbXzB4M2M3YTk1KDB4MWM0KV1bXzB4M2M3YTk1KDB4MWVjKV0oKSxfMHg1ZGExOWIoXzB4NWRkYjBhKTt9LF8weDVkZGIwYVtfMHgyODM2MjUoMHgyNGIpXT0oKT0+e3ZhciBfMHg1NTI3NGQ9XzB4MjgzNjI1O3RoaXNbXzB4NTUyNzRkKDB4MjMxKV09ITB4MCx0aGlzW18weDU1Mjc0ZCgweDIyYildKF8weDVkZGIwYSksdGhpc1tfMHg1NTI3NGQoMHgyMzApXSgpO30sXzB4NWRkYjBhWydvbm1lc3NhZ2UnXT1fMHgzYWZiMjU9Pnt2YXIgXzB4NWEzYTE0PV8weDI4MzYyNTt0cnl7XzB4M2FmYjI1JiZfMHgzYWZiMjVbJ2RhdGEnXSYmdGhpc1tfMHg1YTNhMTQoMHgyMDEpXSYmSlNPTltfMHg1YTNhMTQoMHgyNzQpXShfMHgzYWZiMjVbXzB4NWEzYTE0KDB4MjFiKV0pW18weDVhM2ExNCgweDFlMildPT09XzB4NWEzYTE0KDB4MjEzKSYmdGhpc1tfMHg1YTNhMTQoMHgyN2YpXVtfMHg1YTNhMTQoMHgxYjEpXVtfMHg1YTNhMTQoMHgyMTMpXSgpO31jYXRjaHt9fTt9KVsndGhlbiddKF8weDIzZmMzMT0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgwLHRoaXNbXzB4NGQ0MDQ4KDB4Mjg0KV09ITB4MSx0aGlzW18weDRkNDA0OCgweDIzMSldPSEweDEsdGhpc1tfMHg0ZDQwNDgoMHgyMTEpXT0hMHgwLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J109MHgwLF8weDIzZmMzMSkpW18weDRkNDA0OCgweDIzYildKF8weDE1YzRmZD0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4NGQ0MDQ4KDB4Mjg0KV09ITB4MSxjb25zb2xlW18weDRkNDA0OCgweDIwNildKF8weDRkNDA0OCgweDFkNCkrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXSksXzB4MmRhMTEobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHgxNWM0ZmQmJl8weDE1YzRmZFtfMHg0ZDQwNDgoMHgyODgpXSkpKSkpO30pKTt9W18weDUyYWNhNSgweDIyYildKF8weDU4OTViYSl7dmFyIF8weDVhMjI5Mj1fMHg1MmFjYTU7dGhpc1tfMHg1YTIyOTIoMHgxZmYpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MTt0cnl7XzB4NTg5NWJhW18weDVhMjI5MigweDI0YildPW51bGwsXzB4NTg5NWJhW18weDVhMjI5MigweDFmMSldPW51bGwsXzB4NTg5NWJhW18weDVhMjI5MigweDIyOCldPW51bGw7fWNhdGNoe310cnl7XzB4NTg5NWJhW18weDVhMjI5MigweDFmYSldPDB4MiYmXzB4NTg5NWJhWydjbG9zZSddKCk7fWNhdGNoe319W18weDUyYWNhNSgweDIzMCldKCl7dmFyIF8weDFiOTYwNT1fMHg1MmFjYTU7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weDFiOTYwNSgweDI1NyldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MzFlMTA2PV8weDFiOTYwNTt0aGlzW18weDMxZTEwNigweDFmZildfHx0aGlzWydfY29ubmVjdGluZyddfHwodGhpc1tfMHgzMWUxMDYoMHgxYjUpXSgpLHRoaXNbXzB4MzFlMTA2KDB4MWFkKV0/LltfMHgzMWUxMDYoMHgyM2IpXSgoKT0+dGhpc1tfMHgzMWUxMDYoMHgyMzApXSgpKSk7fSwweDFmNCksdGhpc1tfMHgxYjk2MDUoMHgyNTcpXVsndW5yZWYnXSYmdGhpc1tfMHgxYjk2MDUoMHgyNTcpXVsndW5yZWYnXSgpKTt9YXN5bmNbXzB4NTJhY2E1KDB4MWE0KV0oXzB4M2Q4NTdiKXt2YXIgXzB4NDExY2RmPV8weDUyYWNhNTt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ10mJnRoaXNbXzB4NDExY2RmKDB4MWI1KV0oKSwoYXdhaXQgdGhpc1snX3dzJ10pW18weDQxMWNkZigweDFhNCldKEpTT05bXzB4NDExY2RmKDB4MWMxKV0oXzB4M2Q4NTdiKSk7fWNhdGNoKF8weDI0NDQ5Yyl7Y29uc29sZVtfMHg0MTFjZGYoMHgyMDYpXSh0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddKyc6XFxcXHgyMCcrKF8weDI0NDQ5YyYmXzB4MjQ0NDljW18weDQxMWNkZigweDI4OCldKSksdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgxLHRoaXNbXzB4NDExY2RmKDB4MjMwKV0oKTt9fX07ZnVuY3Rpb24gSihfMHgyMWJmNmMsXzB4MjdkMGJiLF8weDI2NDFjOSxfMHg1MjM4NjgsXzB4ZGYyMDg4KXt2YXIgXzB4MjhkYzU4PV8weDUyYWNhNTtsZXQgXzB4NTZhNjM0PV8weDI2NDFjOVtfMHgyOGRjNTgoMHgxYzIpXSgnLCcpWydtYXAnXShfMHg0ZmRlNWQ9Pnt2YXIgXzB4MzQ2ZGU0PV8weDI4ZGM1ODt0cnl7XzB4MjFiZjZjW18weDM0NmRlNCgweDI1YyldfHwoKF8weGRmMjA4OD09PV8weDM0NmRlNCgweDFhYil8fF8weGRmMjA4OD09PV8weDM0NmRlNCgweDIzNSl8fF8weGRmMjA4OD09PV8weDM0NmRlNCgweDFkOSkpJiYoXzB4ZGYyMDg4Kz1fMHgyMWJmNmNbXzB4MzQ2ZGU0KDB4MjMyKV0/LlsndmVyc2lvbnMnXT8uW18weDM0NmRlNCgweDFjZSldP18weDM0NmRlNCgweDI3Myk6XzB4MzQ2ZGU0KDB4MWI3KSksXzB4MjFiZjZjW18weDM0NmRlNCgweDI1YyldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHhkZjIwODh9KTtsZXQgXzB4NDRjNDk5PW5ldyBxKF8weDIxYmY2YyxfMHgyN2QwYmIsXzB4NGZkZTVkLF8weDUyMzg2OCk7cmV0dXJuIF8weDQ0YzQ5OVtfMHgzNDZkZTQoMHgxYTQpXVtfMHgzNDZkZTQoMHgyNzIpXShfMHg0NGM0OTkpO31jYXRjaChfMHgyNTI5ZmYpe3JldHVybiBjb25zb2xlW18weDM0NmRlNCgweDIwNildKF8weDM0NmRlNCgweDIzZSksXzB4MjUyOWZmJiZfMHgyNTI5ZmZbXzB4MzQ2ZGU0KDB4Mjg4KV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDc2M2RhOT0+XzB4NTZhNjM0W18weDI4ZGM1OCgweDFjOSldKF8weDE1MmY4ZD0+XzB4MTUyZjhkKF8weDc2M2RhOSkpO31mdW5jdGlvbiBSKF8weDQ4NTliNCl7dmFyIF8weDE2NDMxZD1fMHg1MmFjYTU7bGV0IF8weDNlZTljYj1mdW5jdGlvbihfMHg1NTM3YjIsXzB4NTE4ZThiKXtyZXR1cm4gXzB4NTE4ZThiLV8weDU1MzdiMjt9LF8weDQwM2JiZDtpZihfMHg0ODU5YjRbXzB4MTY0MzFkKDB4MWZlKV0pXzB4NDAzYmJkPWZ1bmN0aW9uKCl7dmFyIF8weDRkMmU5ND1fMHgxNjQzMWQ7cmV0dXJuIF8weDQ4NTliNFtfMHg0ZDJlOTQoMHgxZmUpXVtfMHg0ZDJlOTQoMHgyMjUpXSgpO307ZWxzZXtpZihfMHg0ODU5YjRbXzB4MTY0MzFkKDB4MjMyKV0mJl8weDQ4NTliNFsncHJvY2VzcyddW18weDE2NDMxZCgweDFkYildKV8weDQwM2JiZD1mdW5jdGlvbigpe3ZhciBfMHgzZjYxYzA9XzB4MTY0MzFkO3JldHVybiBfMHg0ODU5YjRbXzB4M2Y2MWMwKDB4MjMyKV1bXzB4M2Y2MWMwKDB4MWRiKV0oKTt9LF8weDNlZTljYj1mdW5jdGlvbihfMHg1NTkxMDYsXzB4NGE3ZTAyKXtyZXR1cm4gMHgzZTgqKF8weDRhN2UwMlsweDBdLV8weDU1OTEwNlsweDBdKSsoXzB4NGE3ZTAyWzB4MV0tXzB4NTU5MTA2WzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDFiOGE2OX09cmVxdWlyZShfMHgxNjQzMWQoMHgyNzkpKTtfMHg0MDNiYmQ9ZnVuY3Rpb24oKXt2YXIgXzB4NDU4MDNlPV8weDE2NDMxZDtyZXR1cm4gXzB4MWI4YTY5W18weDQ1ODAzZSgweDIyNSldKCk7fTt9Y2F0Y2h7XzB4NDAzYmJkPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4M2VlOWNiLCd0aW1lU3RhbXAnOl8weDQwM2JiZCwnbm93JzooKT0+RGF0ZVtfMHgxNjQzMWQoMHgyMjUpXSgpfTt9ZnVuY3Rpb24gWShfMHgxMGFkNDcsXzB4MjBjODkwLF8weDU0NWRkOCl7dmFyIF8weDVlMjhmMj1fMHg1MmFjYTU7aWYoXzB4MTBhZDQ3W18weDVlMjhmMigweDFiZildIT09dm9pZCAweDApcmV0dXJuIF8weDEwYWQ0N1snX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107bGV0IF8weDJlNDEyMT1fMHgxMGFkNDdbXzB4NWUyOGYyKDB4MjMyKV0/LltfMHg1ZTI4ZjIoMHgxY2QpXT8uWydub2RlJ107cmV0dXJuIF8weDJlNDEyMSYmXzB4NTQ1ZGQ4PT09XzB4NWUyOGYyKDB4MjY2KT9fMHgxMGFkNDdbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPSEweDE6XzB4MTBhZDQ3W18weDVlMjhmMigweDFiZildPV8weDJlNDEyMXx8IV8weDIwYzg5MHx8XzB4MTBhZDQ3W18weDVlMjhmMigweDFiMSldPy5bXzB4NWUyOGYyKDB4MjhhKV0mJl8weDIwYzg5MFsnaW5jbHVkZXMnXShfMHgxMGFkNDdbXzB4NWUyOGYyKDB4MWIxKV1bXzB4NWUyOGYyKDB4MjhhKV0pLF8weDEwYWQ0N1tfMHg1ZTI4ZjIoMHgxYmYpXTt9ZnVuY3Rpb24gUShfMHgxZjRhMjcsXzB4MTNmMDBiLF8weDU1ZjYzNSxfMHhlYzc1MmYpe3ZhciBfMHgzODYwM2I9XzB4NTJhY2E1O18weDFmNGEyNz1fMHgxZjRhMjcsXzB4MTNmMDBiPV8weDEzZjAwYixfMHg1NWY2MzU9XzB4NTVmNjM1LF8weGVjNzUyZj1fMHhlYzc1MmY7bGV0IF8weDViM2ViNj1SKF8weDFmNGEyNyksXzB4NDFjYjEzPV8weDViM2ViNltfMHgzODYwM2IoMHgxZDUpXSxfMHgzMWRhZWQ9XzB4NWIzZWI2Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHhmYjM1Mntjb25zdHJ1Y3Rvcigpe3ZhciBfMHgxNDI3YmQ9XzB4Mzg2MDNiO3RoaXNbXzB4MTQyN2JkKDB4MWJlKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzWydfbnVtYmVyUmVnRXhwJ109L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDE0MjdiZCgweDFlOSldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4MTQyN2JkKDB4MjNhKV09XzB4MWY0YTI3W18weDE0MjdiZCgweDIxNCldLHRoaXNbXzB4MTQyN2JkKDB4MjQ3KV09XzB4MWY0YTI3W18weDE0MjdiZCgweDFiYSldLHRoaXNbXzB4MTQyN2JkKDB4MjY5KV09T2JqZWN0W18weDE0MjdiZCgweDIwNSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ109T2JqZWN0W18weDE0MjdiZCgweDI3ZSldLHRoaXNbJ19TeW1ib2wnXT1fMHgxZjRhMjdbXzB4MTQyN2JkKDB4MWM1KV0sdGhpc1tfMHgxNDI3YmQoMHgxYTMpXT1SZWdFeHBbXzB4MTQyN2JkKDB4MjYyKV1bXzB4MTQyN2JkKDB4MWI0KV0sdGhpc1tfMHgxNDI3YmQoMHgyNGMpXT1EYXRlW18weDE0MjdiZCgweDI2MildW18weDE0MjdiZCgweDFiNCldO31bJ3NlcmlhbGl6ZSddKF8weDMyZmQ4NCxfMHgxMDJiZjUsXzB4MjI5NWRlLF8weDNkZDk1OCl7dmFyIF8weDM2OTNhND1fMHgzODYwM2IsXzB4ZGY1MzkxPXRoaXMsXzB4MWI0MTE5PV8weDIyOTVkZVtfMHgzNjkzYTQoMHgyNGUpXTtmdW5jdGlvbiBfMHgxNGNmZWEoXzB4MTNhODNjLF8weDVkNzE0NSxfMHgyYzQ2NGEpe3ZhciBfMHgzZDYzNmI9XzB4MzY5M2E0O18weDVkNzE0NVtfMHgzZDYzNmIoMHgxZjIpXT1fMHgzZDYzNmIoMHgxZTMpLF8weDVkNzE0NVtfMHgzZDYzNmIoMHgyMmQpXT1fMHgxM2E4M2NbXzB4M2Q2MzZiKDB4Mjg4KV0sXzB4MzAyYmM5PV8weDJjNDY0YVsnbm9kZSddW18weDNkNjM2YigweDFhYyldLF8weDJjNDY0YVtfMHgzZDYzNmIoMHgxY2UpXVtfMHgzZDYzNmIoMHgxYWMpXT1fMHg1ZDcxNDUsXzB4ZGY1MzkxW18weDNkNjM2YigweDIxZildKF8weDVkNzE0NSxfMHgyYzQ2NGEpO310cnl7XzB4MjI5NWRlW18weDM2OTNhNCgweDFlMSldKyssXzB4MjI5NWRlW18weDM2OTNhNCgweDI0ZSldJiZfMHgyMjk1ZGVbXzB4MzY5M2E0KDB4MjNmKV1bXzB4MzY5M2E0KDB4MjFkKV0oXzB4MTAyYmY1KTt2YXIgXzB4NGJhMTQwLF8weGM4YzZkZixfMHg1MGZlNDcsXzB4NDhlYTZlLF8weDFlMTg5MT1bXSxfMHgyNDk3MmQ9W10sXzB4MTYwNjhhLF8weDMyYjFlNj10aGlzW18weDM2OTNhNCgweDI1NildKF8weDEwMmJmNSksXzB4NTRkNTQ3PV8weDMyYjFlNj09PV8weDM2OTNhNCgweDI2MCksXzB4NWUxZWIwPSEweDEsXzB4NWUwOTBhPV8weDMyYjFlNj09PSdmdW5jdGlvbicsXzB4MmIzOWQ3PXRoaXNbXzB4MzY5M2E0KDB4MjBmKV0oXzB4MzJiMWU2KSxfMHgzYmY5NjA9dGhpc1tfMHgzNjkzYTQoMHgyMGEpXShfMHgzMmIxZTYpLF8weDUzMzlmMT1fMHgyYjM5ZDd8fF8weDNiZjk2MCxfMHg0OWIyN2E9e30sXzB4MjE4Y2ZiPTB4MCxfMHgzMzU1MzE9ITB4MSxfMHgzMDJiYzksXzB4MzlkMjU0PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyMjk1ZGVbJ2RlcHRoJ10pe2lmKF8weDU0ZDU0Nyl7aWYoXzB4YzhjNmRmPV8weDEwMmJmNVtfMHgzNjkzYTQoMHgxZGUpXSxfMHhjOGM2ZGY+XzB4MjI5NWRlWydlbGVtZW50cyddKXtmb3IoXzB4NTBmZTQ3PTB4MCxfMHg0OGVhNmU9XzB4MjI5NWRlWydlbGVtZW50cyddLF8weDRiYTE0MD1fMHg1MGZlNDc7XzB4NGJhMTQwPF8weDQ4ZWE2ZTtfMHg0YmExNDArKylfMHgyNDk3MmRbXzB4MzY5M2E0KDB4MjFkKV0oXzB4ZGY1MzkxW18weDM2OTNhNCgweDFkOCldKF8weDFlMTg5MSxfMHgxMDJiZjUsXzB4MzJiMWU2LF8weDRiYTE0MCxfMHgyMjk1ZGUpKTtfMHgzMmZkODRbJ2NhcHBlZEVsZW1lbnRzJ109ITB4MDt9ZWxzZXtmb3IoXzB4NTBmZTQ3PTB4MCxfMHg0OGVhNmU9XzB4YzhjNmRmLF8weDRiYTE0MD1fMHg1MGZlNDc7XzB4NGJhMTQwPF8weDQ4ZWE2ZTtfMHg0YmExNDArKylfMHgyNDk3MmRbXzB4MzY5M2E0KDB4MjFkKV0oXzB4ZGY1MzkxW18weDM2OTNhNCgweDFkOCldKF8weDFlMTg5MSxfMHgxMDJiZjUsXzB4MzJiMWU2LF8weDRiYTE0MCxfMHgyMjk1ZGUpKTt9XzB4MjI5NWRlW18weDM2OTNhNCgweDI0OSldKz1fMHgyNDk3MmRbXzB4MzY5M2E0KDB4MWRlKV07fWlmKCEoXzB4MzJiMWU2PT09XzB4MzY5M2E0KDB4MjJjKXx8XzB4MzJiMWU2PT09XzB4MzY5M2E0KDB4MjE0KSkmJiFfMHgyYjM5ZDcmJl8weDMyYjFlNiE9PV8weDM2OTNhNCgweDFkMykmJl8weDMyYjFlNiE9PSdCdWZmZXInJiZfMHgzMmIxZTYhPT1fMHgzNjkzYTQoMHgxZDcpKXt2YXIgXzB4MWY4ZTVjPV8weDNkZDk1OFtfMHgzNjkzYTQoMHgyN2IpXXx8XzB4MjI5NWRlWydwcm9wcyddO2lmKHRoaXNbXzB4MzY5M2E0KDB4MjM0KV0oXzB4MTAyYmY1KT8oXzB4NGJhMTQwPTB4MCxfMHgxMDJiZjVbXzB4MzY5M2E0KDB4MWM5KV0oZnVuY3Rpb24oXzB4MjA5NTJjKXt2YXIgXzB4NWI3ZTQ5PV8weDM2OTNhNDtpZihfMHgyMThjZmIrKyxfMHgyMjk1ZGVbXzB4NWI3ZTQ5KDB4MjQ5KV0rKyxfMHgyMThjZmI+XzB4MWY4ZTVjKXtfMHgzMzU1MzE9ITB4MDtyZXR1cm47fWlmKCFfMHgyMjk1ZGVbXzB4NWI3ZTQ5KDB4MWI4KV0mJl8weDIyOTVkZVtfMHg1YjdlNDkoMHgyNGUpXSYmXzB4MjI5NWRlW18weDViN2U0OSgweDI0OSldPl8weDIyOTVkZVtfMHg1YjdlNDkoMHgxZDYpXSl7XzB4MzM1NTMxPSEweDA7cmV0dXJuO31fMHgyNDk3MmRbJ3B1c2gnXShfMHhkZjUzOTFbXzB4NWI3ZTQ5KDB4MWQ4KV0oXzB4MWUxODkxLF8weDEwMmJmNSxfMHg1YjdlNDkoMHgyNTgpLF8weDRiYTE0MCsrLF8weDIyOTVkZSxmdW5jdGlvbihfMHgzODEyZWMpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzODEyZWM7fTt9KF8weDIwOTUyYykpKTt9KSk6dGhpc1tfMHgzNjkzYTQoMHgyN2MpXShfMHgxMDJiZjUpJiZfMHgxMDJiZjVbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHg1MDc3OTYsXzB4NDhmYjQ4KXt2YXIgXzB4NWU3YWJkPV8weDM2OTNhNDtpZihfMHgyMThjZmIrKyxfMHgyMjk1ZGVbXzB4NWU3YWJkKDB4MjQ5KV0rKyxfMHgyMThjZmI+XzB4MWY4ZTVjKXtfMHgzMzU1MzE9ITB4MDtyZXR1cm47fWlmKCFfMHgyMjk1ZGVbXzB4NWU3YWJkKDB4MWI4KV0mJl8weDIyOTVkZVtfMHg1ZTdhYmQoMHgyNGUpXSYmXzB4MjI5NWRlW18weDVlN2FiZCgweDI0OSldPl8weDIyOTVkZVtfMHg1ZTdhYmQoMHgxZDYpXSl7XzB4MzM1NTMxPSEweDA7cmV0dXJuO312YXIgXzB4NWE3NDk3PV8weDQ4ZmI0OFtfMHg1ZTdhYmQoMHgxYjQpXSgpO18weDVhNzQ5N1tfMHg1ZTdhYmQoMHgxZGUpXT4weDY0JiYoXzB4NWE3NDk3PV8weDVhNzQ5N1tfMHg1ZTdhYmQoMHgyODcpXSgweDAsMHg2NCkrXzB4NWU3YWJkKDB4MjIzKSksXzB4MjQ5NzJkW18weDVlN2FiZCgweDIxZCldKF8weGRmNTM5MVtfMHg1ZTdhYmQoMHgxZDgpXShfMHgxZTE4OTEsXzB4MTAyYmY1LF8weDVlN2FiZCgweDIyYSksXzB4NWE3NDk3LF8weDIyOTVkZSxmdW5jdGlvbihfMHgzOWU5N2Ipe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzOWU5N2I7fTt9KF8weDUwNzc5NikpKTt9KSwhXzB4NWUxZWIwKXt0cnl7Zm9yKF8weDE2MDY4YSBpbiBfMHgxMDJiZjUpaWYoIShfMHg1NGQ1NDcmJl8weDM5ZDI1NFtfMHgzNjkzYTQoMHgxY2IpXShfMHgxNjA2OGEpKSYmIXRoaXNbXzB4MzY5M2E0KDB4MjcwKV0oXzB4MTAyYmY1LF8weDE2MDY4YSxfMHgyMjk1ZGUpKXtpZihfMHgyMThjZmIrKyxfMHgyMjk1ZGVbXzB4MzY5M2E0KDB4MjQ5KV0rKyxfMHgyMThjZmI+XzB4MWY4ZTVjKXtfMHgzMzU1MzE9ITB4MDticmVhazt9aWYoIV8weDIyOTVkZVtfMHgzNjkzYTQoMHgxYjgpXSYmXzB4MjI5NWRlW18weDM2OTNhNCgweDI0ZSldJiZfMHgyMjk1ZGVbXzB4MzY5M2E0KDB4MjQ5KV0+XzB4MjI5NWRlWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MzM1NTMxPSEweDA7YnJlYWs7fV8weDI0OTcyZFtfMHgzNjkzYTQoMHgyMWQpXShfMHhkZjUzOTFbXzB4MzY5M2E0KDB4MjM3KV0oXzB4MWUxODkxLF8weDQ5YjI3YSxfMHgxMDJiZjUsXzB4MzJiMWU2LF8weDE2MDY4YSxfMHgyMjk1ZGUpKTt9fWNhdGNoe31pZihfMHg0OWIyN2FbXzB4MzY5M2E0KDB4MWY2KV09ITB4MCxfMHg1ZTA5MGEmJihfMHg0OWIyN2FbXzB4MzY5M2E0KDB4MjFhKV09ITB4MCksIV8weDMzNTUzMSl7dmFyIF8weDJjZWFmOT1bXVtfMHgzNjkzYTQoMHgyMzYpXSh0aGlzW18weDM2OTNhNCgweDI1ZSldKF8weDEwMmJmNSkpW18weDM2OTNhNCgweDIzNildKHRoaXNbXzB4MzY5M2E0KDB4MjAzKV0oXzB4MTAyYmY1KSk7Zm9yKF8weDRiYTE0MD0weDAsXzB4YzhjNmRmPV8weDJjZWFmOVtfMHgzNjkzYTQoMHgxZGUpXTtfMHg0YmExNDA8XzB4YzhjNmRmO18weDRiYTE0MCsrKWlmKF8weDE2MDY4YT1fMHgyY2VhZjlbXzB4NGJhMTQwXSwhKF8weDU0ZDU0NyYmXzB4MzlkMjU0W18weDM2OTNhNCgweDFjYildKF8weDE2MDY4YVsndG9TdHJpbmcnXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDEwMmJmNSxfMHgxNjA2OGEsXzB4MjI5NWRlKSYmIV8weDQ5YjI3YVtfMHgzNjkzYTQoMHgxYzMpK18weDE2MDY4YVtfMHgzNjkzYTQoMHgxYjQpXSgpXSl7aWYoXzB4MjE4Y2ZiKyssXzB4MjI5NWRlWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MjE4Y2ZiPl8weDFmOGU1Yyl7XzB4MzM1NTMxPSEweDA7YnJlYWs7fWlmKCFfMHgyMjk1ZGVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4MjI5NWRlW18weDM2OTNhNCgweDI0ZSldJiZfMHgyMjk1ZGVbXzB4MzY5M2E0KDB4MjQ5KV0+XzB4MjI5NWRlWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MzM1NTMxPSEweDA7YnJlYWs7fV8weDI0OTcyZFtfMHgzNjkzYTQoMHgyMWQpXShfMHhkZjUzOTFbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDFlMTg5MSxfMHg0OWIyN2EsXzB4MTAyYmY1LF8weDMyYjFlNixfMHgxNjA2OGEsXzB4MjI5NWRlKSk7fX19fX1pZihfMHgzMmZkODRbXzB4MzY5M2E0KDB4MWYyKV09XzB4MzJiMWU2LF8weDUzMzlmMT8oXzB4MzJmZDg0W18weDM2OTNhNCgweDFlMCldPV8weDEwMmJmNVtfMHgzNjkzYTQoMHgyMTYpXSgpLHRoaXNbJ19jYXBJZlN0cmluZyddKF8weDMyYjFlNixfMHgzMmZkODQsXzB4MjI5NWRlLF8weDNkZDk1OCkpOl8weDMyYjFlNj09PSdkYXRlJz9fMHgzMmZkODRbXzB4MzY5M2E0KDB4MWUwKV09dGhpc1tfMHgzNjkzYTQoMHgyNGMpXVsnY2FsbCddKF8weDEwMmJmNSk6XzB4MzJiMWU2PT09XzB4MzY5M2E0KDB4MWQ3KT9fMHgzMmZkODRbXzB4MzY5M2E0KDB4MWUwKV09XzB4MTAyYmY1W18weDM2OTNhNCgweDFiNCldKCk6XzB4MzJiMWU2PT09XzB4MzY5M2E0KDB4MjViKT9fMHgzMmZkODRbXzB4MzY5M2E0KDB4MWUwKV09dGhpc1snX3JlZ0V4cFRvU3RyaW5nJ11bXzB4MzY5M2E0KDB4MWJkKV0oXzB4MTAyYmY1KTpfMHgzMmIxZTY9PT1fMHgzNjkzYTQoMHgyNjgpJiZ0aGlzW18weDM2OTNhNCgweDI0MyldP18weDMyZmQ4NFtfMHgzNjkzYTQoMHgxZTApXT10aGlzWydfU3ltYm9sJ11bXzB4MzY5M2E0KDB4MjYyKV1bXzB4MzY5M2E0KDB4MWI0KV1bXzB4MzY5M2E0KDB4MWJkKV0oXzB4MTAyYmY1KTohXzB4MjI5NWRlW18weDM2OTNhNCgweDIwMildJiYhKF8weDMyYjFlNj09PV8weDM2OTNhNCgweDIyYyl8fF8weDMyYjFlNj09PV8weDM2OTNhNCgweDIxNCkpJiYoZGVsZXRlIF8weDMyZmQ4NFtfMHgzNjkzYTQoMHgxZTApXSxfMHgzMmZkODRbJ2NhcHBlZCddPSEweDApLF8weDMzNTUzMSYmKF8weDMyZmQ4NFtfMHgzNjkzYTQoMHgyNTApXT0hMHgwKSxfMHgzMDJiYzk9XzB4MjI5NWRlW18weDM2OTNhNCgweDFjZSldW18weDM2OTNhNCgweDFhYyldLF8weDIyOTVkZVtfMHgzNjkzYTQoMHgxY2UpXVtfMHgzNjkzYTQoMHgxYWMpXT1fMHgzMmZkODQsdGhpc1tfMHgzNjkzYTQoMHgyMWYpXShfMHgzMmZkODQsXzB4MjI5NWRlKSxfMHgyNDk3MmRbJ2xlbmd0aCddKXtmb3IoXzB4NGJhMTQwPTB4MCxfMHhjOGM2ZGY9XzB4MjQ5NzJkW18weDM2OTNhNCgweDFkZSldO18weDRiYTE0MDxfMHhjOGM2ZGY7XzB4NGJhMTQwKyspXzB4MjQ5NzJkW18weDRiYTE0MF0oXzB4NGJhMTQwKTt9XzB4MWUxODkxW18weDM2OTNhNCgweDFkZSldJiYoXzB4MzJmZDg0W18weDM2OTNhNCgweDI3YildPV8weDFlMTg5MSk7fWNhdGNoKF8weDUyYTYxZCl7XzB4MTRjZmVhKF8weDUyYTYxZCxfMHgzMmZkODQsXzB4MjI5NWRlKTt9cmV0dXJuIHRoaXNbXzB4MzY5M2E0KDB4MWM4KV0oXzB4MTAyYmY1LF8weDMyZmQ4NCksdGhpc1tfMHgzNjkzYTQoMHgyNDUpXShfMHgzMmZkODQsXzB4MjI5NWRlKSxfMHgyMjk1ZGVbJ25vZGUnXVsnY3VycmVudCddPV8weDMwMmJjOSxfMHgyMjk1ZGVbXzB4MzY5M2E0KDB4MWUxKV0tLSxfMHgyMjk1ZGVbXzB4MzY5M2E0KDB4MjRlKV09XzB4MWI0MTE5LF8weDIyOTVkZVtfMHgzNjkzYTQoMHgyNGUpXSYmXzB4MjI5NWRlWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bJ3BvcCddKCksXzB4MzJmZDg0O31bXzB4Mzg2MDNiKDB4MjAzKV0oXzB4MmJiN2ZiKXt2YXIgXzB4MzUzNzA1PV8weDM4NjAzYjtyZXR1cm4gT2JqZWN0W18weDM1MzcwNSgweDFhOCldP09iamVjdFtfMHgzNTM3MDUoMHgxYTgpXShfMHgyYmI3ZmIpOltdO31bJ19pc1NldCddKF8weDU5YzIyNSl7dmFyIF8weDFiNDUxYj1fMHgzODYwM2I7cmV0dXJuISEoXzB4NTljMjI1JiZfMHgxZjRhMjdbJ1NldCddJiZ0aGlzW18weDFiNDUxYigweDI4YyldKF8weDU5YzIyNSk9PT1fMHgxYjQ1MWIoMHgxYjIpJiZfMHg1OWMyMjVbXzB4MWI0NTFiKDB4MWM5KV0pO31bXzB4Mzg2MDNiKDB4MjcwKV0oXzB4NWMwN2NmLF8weDNkOTFmMixfMHgyMjljMTMpe3ZhciBfMHgxYzJlY2E9XzB4Mzg2MDNiO3JldHVybiBfMHgyMjljMTNbXzB4MWMyZWNhKDB4MjZlKV0/dHlwZW9mIF8weDVjMDdjZltfMHgzZDkxZjJdPT1fMHgxYzJlY2EoMHgxZmMpOiEweDE7fVsnX3R5cGUnXShfMHgyYjU5NDcpe3ZhciBfMHg0OTdkNTE9XzB4Mzg2MDNiLF8weDFiMzNkYj0nJztyZXR1cm4gXzB4MWIzM2RiPXR5cGVvZiBfMHgyYjU5NDcsXzB4MWIzM2RiPT09XzB4NDk3ZDUxKDB4MjI3KT90aGlzW18weDQ5N2Q1MSgweDI4YyldKF8weDJiNTk0Nyk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDFiMzNkYj1fMHg0OTdkNTEoMHgyNjApOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDJiNTk0Nyk9PT1fMHg0OTdkNTEoMHgxZGEpP18weDFiMzNkYj1fMHg0OTdkNTEoMHgyNjEpOnRoaXNbXzB4NDk3ZDUxKDB4MjhjKV0oXzB4MmI1OTQ3KT09PV8weDQ5N2Q1MSgweDIxMCk/XzB4MWIzM2RiPV8weDQ5N2Q1MSgweDFkNyk6XzB4MmI1OTQ3PT09bnVsbD9fMHgxYjMzZGI9XzB4NDk3ZDUxKDB4MjJjKTpfMHgyYjU5NDdbXzB4NDk3ZDUxKDB4MjdhKV0mJihfMHgxYjMzZGI9XzB4MmI1OTQ3W18weDQ5N2Q1MSgweDI3YSldW18weDQ5N2Q1MSgweDI0MSldfHxfMHgxYjMzZGIpOl8weDFiMzNkYj09PSd1bmRlZmluZWQnJiZ0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXSYmXzB4MmI1OTQ3IGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHgxYjMzZGI9XzB4NDk3ZDUxKDB4MWJhKSksXzB4MWIzM2RiO31bXzB4Mzg2MDNiKDB4MjhjKV0oXzB4NjY4NGJjKXtyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVsndG9TdHJpbmcnXVsnY2FsbCddKF8weDY2ODRiYyk7fVtfMHgzODYwM2IoMHgyMGYpXShfMHgyN2NmNjUpe3ZhciBfMHgzMzg0YTI9XzB4Mzg2MDNiO3JldHVybiBfMHgyN2NmNjU9PT1fMHgzMzg0YTIoMHgyMTUpfHxfMHgyN2NmNjU9PT0nc3RyaW5nJ3x8XzB4MjdjZjY1PT09XzB4MzM4NGEyKDB4MWYwKTt9W18weDM4NjAzYigweDIwYSldKF8weDU4YTkyZil7dmFyIF8weGYwYjIyYT1fMHgzODYwM2I7cmV0dXJuIF8weDU4YTkyZj09PSdCb29sZWFuJ3x8XzB4NThhOTJmPT09XzB4ZjBiMjJhKDB4MWQzKXx8XzB4NThhOTJmPT09XzB4ZjBiMjJhKDB4MWY0KTt9W18weDM4NjAzYigweDFkOCldKF8weDY5MTdmZCxfMHgxZTQ3YTUsXzB4MzhkMDIzLF8weDQ5MmUyYixfMHg1NDZhNmIsXzB4NTE3NjBmKXt2YXIgXzB4MjYzOGUyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDE3YTg1NSl7dmFyIF8weDFjZDY0ZD1fMHg1YjEzLF8weDE3OTEzYj1fMHg1NDZhNmJbXzB4MWNkNjRkKDB4MWNlKV1bXzB4MWNkNjRkKDB4MWFjKV0sXzB4NTVkNDc1PV8weDU0NmE2YltfMHgxY2Q2NGQoMHgxY2UpXVtfMHgxY2Q2NGQoMHgxZmIpXSxfMHgxNmUyODg9XzB4NTQ2YTZiW18weDFjZDY0ZCgweDFjZSldWydwYXJlbnQnXTtfMHg1NDZhNmJbJ25vZGUnXVtfMHgxY2Q2NGQoMHgxYmMpXT1fMHgxNzkxM2IsXzB4NTQ2YTZiWydub2RlJ11bJ2luZGV4J109dHlwZW9mIF8weDQ5MmUyYj09XzB4MWNkNjRkKDB4MWYwKT9fMHg0OTJlMmI6XzB4MTdhODU1LF8weDY5MTdmZFtfMHgxY2Q2NGQoMHgyMWQpXShfMHgyNjM4ZTJbXzB4MWNkNjRkKDB4MjZjKV0oXzB4MWU0N2E1LF8weDM4ZDAyMyxfMHg0OTJlMmIsXzB4NTQ2YTZiLF8weDUxNzYwZikpLF8weDU0NmE2Ylsnbm9kZSddW18weDFjZDY0ZCgweDFiYyldPV8weDE2ZTI4OCxfMHg1NDZhNmJbJ25vZGUnXVsnaW5kZXgnXT1fMHg1NWQ0NzU7fTt9W18weDM4NjAzYigweDIzNyldKF8weDE4ODYzZSxfMHgxZGE4MGYsXzB4MzMwOGQ5LF8weDVlY2YwMixfMHg0YjQ3YjgsXzB4MjFjOGQ2LF8weDNmMjcyMSl7dmFyIF8weDU1ZTE2ND1fMHgzODYwM2IsXzB4NDgzOTg1PXRoaXM7cmV0dXJuIF8weDFkYTgwZltfMHg1NWUxNjQoMHgxYzMpK18weDRiNDdiOFtfMHg1NWUxNjQoMHgxYjQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDNmNTQ5MSl7dmFyIF8weDM3NjkyMT1fMHg1NWUxNjQsXzB4NTA2ZGY1PV8weDIxYzhkNltfMHgzNzY5MjEoMHgxY2UpXVsnY3VycmVudCddLF8weDM2ZjFmYT1fMHgyMWM4ZDZbJ25vZGUnXVtfMHgzNzY5MjEoMHgxZmIpXSxfMHg0OTExMzA9XzB4MjFjOGQ2W18weDM3NjkyMSgweDFjZSldW18weDM3NjkyMSgweDFiYyldO18weDIxYzhkNlsnbm9kZSddW18weDM3NjkyMSgweDFiYyldPV8weDUwNmRmNSxfMHgyMWM4ZDZbXzB4Mzc2OTIxKDB4MWNlKV1bXzB4Mzc2OTIxKDB4MWZiKV09XzB4M2Y1NDkxLF8weDE4ODYzZVtfMHgzNzY5MjEoMHgyMWQpXShfMHg0ODM5ODVbXzB4Mzc2OTIxKDB4MjZjKV0oXzB4MzMwOGQ5LF8weDVlY2YwMixfMHg0YjQ3YjgsXzB4MjFjOGQ2LF8weDNmMjcyMSkpLF8weDIxYzhkNlsnbm9kZSddW18weDM3NjkyMSgweDFiYyldPV8weDQ5MTEzMCxfMHgyMWM4ZDZbXzB4Mzc2OTIxKDB4MWNlKV1bJ2luZGV4J109XzB4MzZmMWZhO307fVtfMHgzODYwM2IoMHgyNmMpXShfMHgyMjFhNjQsXzB4NWYzOGJhLF8weDEzZGE5MyxfMHg1Njc2ZmYsXzB4NGMyNzhkKXt2YXIgXzB4NGVjNGMyPV8weDM4NjAzYixfMHgyZDY0Y2M9dGhpcztfMHg0YzI3OGR8fChfMHg0YzI3OGQ9ZnVuY3Rpb24oXzB4NDY5OTM1LF8weDM3MjZjOSl7cmV0dXJuIF8weDQ2OTkzNVtfMHgzNzI2YzldO30pO3ZhciBfMHg1N2VjNDY9XzB4MTNkYTkzW18weDRlYzRjMigweDFiNCldKCksXzB4MTNiMzYzPV8weDU2NzZmZltfMHg0ZWM0YzIoMHgyM2MpXXx8e30sXzB4MmE0MTY3PV8weDU2NzZmZltfMHg0ZWM0YzIoMHgyMDIpXSxfMHgyY2NmYzI9XzB4NTY3NmZmW18weDRlYzRjMigweDFiOCldO3RyeXt2YXIgXzB4NWU0NmYxPXRoaXNbXzB4NGVjNGMyKDB4MjdjKV0oXzB4MjIxYTY0KSxfMHgyZGM5OGI9XzB4NTdlYzQ2O18weDVlNDZmMSYmXzB4MmRjOThiWzB4MF09PT0nXFxcXHgyNycmJihfMHgyZGM5OGI9XzB4MmRjOThiWydzdWJzdHInXSgweDEsXzB4MmRjOThiW18weDRlYzRjMigweDFkZSldLTB4MikpO3ZhciBfMHg0ODc2MzU9XzB4NTY3NmZmW18weDRlYzRjMigweDIzYyldPV8weDEzYjM2M1snX3BfJytfMHgyZGM5OGJdO18weDQ4NzYzNSYmKF8weDU2NzZmZltfMHg0ZWM0YzIoMHgyMDIpXT1fMHg1Njc2ZmZbXzB4NGVjNGMyKDB4MjAyKV0rMHgxKSxfMHg1Njc2ZmZbXzB4NGVjNGMyKDB4MWI4KV09ISFfMHg0ODc2MzU7dmFyIF8weDQ2NTMyZD10eXBlb2YgXzB4MTNkYTkzPT1fMHg0ZWM0YzIoMHgyNjgpLF8weDQ2Y2JhMT17J25hbWUnOl8weDQ2NTMyZHx8XzB4NWU0NmYxP18weDU3ZWM0Njp0aGlzW18weDRlYzRjMigweDI3NyldKF8weDU3ZWM0Nil9O2lmKF8weDQ2NTMyZCYmKF8weDQ2Y2JhMVsnc3ltYm9sJ109ITB4MCksIShfMHg1ZjM4YmE9PT1fMHg0ZWM0YzIoMHgyNjApfHxfMHg1ZjM4YmE9PT0nRXJyb3InKSl7dmFyIF8weDMwYmE2NT10aGlzW18weDRlYzRjMigweDI2OSldKF8weDIyMWE2NCxfMHgxM2RhOTMpO2lmKF8weDMwYmE2NSYmKF8weDMwYmE2NVsnc2V0J10mJihfMHg0NmNiYTFbXzB4NGVjNGMyKDB4MjM4KV09ITB4MCksXzB4MzBiYTY1W18weDRlYzRjMigweDIxOCldJiYhXzB4NDg3NjM1JiYhXzB4NTY3NmZmW18weDRlYzRjMigweDI3OCldKSlyZXR1cm4gXzB4NDZjYmExW18weDRlYzRjMigweDIxYyldPSEweDAsdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDQ2Y2JhMSxfMHg1Njc2ZmYpLF8weDQ2Y2JhMTt9dmFyIF8weDM0MWZiMzt0cnl7XzB4MzQxZmIzPV8weDRjMjc4ZChfMHgyMjFhNjQsXzB4MTNkYTkzKTt9Y2F0Y2goXzB4NTQzZjFkKXtyZXR1cm4gXzB4NDZjYmExPXsnbmFtZSc6XzB4NTdlYzQ2LCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHg1NDNmMWRbJ21lc3NhZ2UnXX0sdGhpc1tfMHg0ZWM0YzIoMHgyMDApXShfMHg0NmNiYTEsXzB4NTY3NmZmKSxfMHg0NmNiYTE7fXZhciBfMHgxZDA3MTE9dGhpc1tfMHg0ZWM0YzIoMHgyNTYpXShfMHgzNDFmYjMpLF8weDFlZGJkND10aGlzW18weDRlYzRjMigweDIwZildKF8weDFkMDcxMSk7aWYoXzB4NDZjYmExW18weDRlYzRjMigweDFmMildPV8weDFkMDcxMSxfMHgxZWRiZDQpdGhpc1tfMHg0ZWM0YzIoMHgyMDApXShfMHg0NmNiYTEsXzB4NTY3NmZmLF8weDM0MWZiMyxmdW5jdGlvbigpe3ZhciBfMHgyMDY2ZTc9XzB4NGVjNGMyO18weDQ2Y2JhMVtfMHgyMDY2ZTcoMHgxZTApXT1fMHgzNDFmYjNbJ3ZhbHVlT2YnXSgpLCFfMHg0ODc2MzUmJl8weDJkNjRjY1tfMHgyMDY2ZTcoMHgyOGIpXShfMHgxZDA3MTEsXzB4NDZjYmExLF8weDU2NzZmZix7fSk7fSk7ZWxzZXt2YXIgXzB4MjI2OGY0PV8weDU2NzZmZltfMHg0ZWM0YzIoMHgyNGUpXSYmXzB4NTY3NmZmW18weDRlYzRjMigweDFlMSldPF8weDU2NzZmZltfMHg0ZWM0YzIoMHgyNGYpXSYmXzB4NTY3NmZmWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bJ2luZGV4T2YnXShfMHgzNDFmYjMpPDB4MCYmXzB4MWQwNzExIT09J2Z1bmN0aW9uJyYmXzB4NTY3NmZmW18weDRlYzRjMigweDI0OSldPF8weDU2NzZmZlsnYXV0b0V4cGFuZExpbWl0J107XzB4MjI2OGY0fHxfMHg1Njc2ZmZbJ2xldmVsJ108XzB4MmE0MTY3fHxfMHg0ODc2MzU/KHRoaXNbXzB4NGVjNGMyKDB4MWIwKV0oXzB4NDZjYmExLF8weDM0MWZiMyxfMHg1Njc2ZmYsXzB4NDg3NjM1fHx7fSksdGhpc1tfMHg0ZWM0YzIoMHgxYzgpXShfMHgzNDFmYjMsXzB4NDZjYmExKSk6dGhpc1tfMHg0ZWM0YzIoMHgyMDApXShfMHg0NmNiYTEsXzB4NTY3NmZmLF8weDM0MWZiMyxmdW5jdGlvbigpe3ZhciBfMHg0NjljMzM9XzB4NGVjNGMyO18weDFkMDcxMT09PSdudWxsJ3x8XzB4MWQwNzExPT09XzB4NDY5YzMzKDB4MjE0KXx8KGRlbGV0ZSBfMHg0NmNiYTFbXzB4NDY5YzMzKDB4MWUwKV0sXzB4NDZjYmExW18weDQ2OWMzMygweDFiYildPSEweDApO30pO31yZXR1cm4gXzB4NDZjYmExO31maW5hbGx5e18weDU2NzZmZlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4MTNiMzYzLF8weDU2NzZmZltfMHg0ZWM0YzIoMHgyMDIpXT1fMHgyYTQxNjcsXzB4NTY3NmZmWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109XzB4MmNjZmMyO319WydfY2FwSWZTdHJpbmcnXShfMHg1YzQ0NTEsXzB4MmRlYzE3LF8weDQxMGU3OSxfMHgxODcwNDcpe3ZhciBfMHgyYTc3ZWM9XzB4Mzg2MDNiLF8weDM0NDc1ND1fMHgxODcwNDdbJ3N0ckxlbmd0aCddfHxfMHg0MTBlNzlbJ3N0ckxlbmd0aCddO2lmKChfMHg1YzQ0NTE9PT1fMHgyYTc3ZWMoMHgyMGUpfHxfMHg1YzQ0NTE9PT1fMHgyYTc3ZWMoMHgxZDMpKSYmXzB4MmRlYzE3W18weDJhNzdlYygweDFlMCldKXtsZXQgXzB4M2Q3NmM2PV8weDJkZWMxN1tfMHgyYTc3ZWMoMHgxZTApXVtfMHgyYTc3ZWMoMHgxZGUpXTtfMHg0MTBlNzlbXzB4MmE3N2VjKDB4MWU0KV0rPV8weDNkNzZjNixfMHg0MTBlNzlbJ2FsbFN0ckxlbmd0aCddPl8weDQxMGU3OVtfMHgyYTc3ZWMoMHgyNjUpXT8oXzB4MmRlYzE3W18weDJhNzdlYygweDFiYildPScnLGRlbGV0ZSBfMHgyZGVjMTdbXzB4MmE3N2VjKDB4MWUwKV0pOl8weDNkNzZjNj5fMHgzNDQ3NTQmJihfMHgyZGVjMTdbJ2NhcHBlZCddPV8weDJkZWMxN1sndmFsdWUnXVsnc3Vic3RyJ10oMHgwLF8weDM0NDc1NCksZGVsZXRlIF8weDJkZWMxN1tfMHgyYTc3ZWMoMHgxZTApXSk7fX1bXzB4Mzg2MDNiKDB4MjdjKV0oXzB4NWE0OWU3KXt2YXIgXzB4NGFlMzU5PV8weDM4NjAzYjtyZXR1cm4hIShfMHg1YTQ5ZTcmJl8weDFmNGEyN1tfMHg0YWUzNTkoMHgyMmEpXSYmdGhpc1tfMHg0YWUzNTkoMHgyOGMpXShfMHg1YTQ5ZTcpPT09XzB4NGFlMzU5KDB4MjQ0KSYmXzB4NWE0OWU3Wydmb3JFYWNoJ10pO31bXzB4Mzg2MDNiKDB4Mjc3KV0oXzB4NGVmZjcxKXt2YXIgXzB4Mzk4MTZjPV8weDM4NjAzYjtpZihfMHg0ZWZmNzFbXzB4Mzk4MTZjKDB4MWZkKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDRlZmY3MTt2YXIgXzB4NDk1MzkyO3RyeXtfMHg0OTUzOTI9SlNPTltfMHgzOTgxNmMoMHgxYzEpXSgnJytfMHg0ZWZmNzEpO31jYXRjaHtfMHg0OTUzOTI9J1xcXFx4MjInK3RoaXNbXzB4Mzk4MTZjKDB4MjhjKV0oXzB4NGVmZjcxKSsnXFxcXHgyMic7fXJldHVybiBfMHg0OTUzOTJbJ21hdGNoJ10oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg0OTUzOTI9XzB4NDk1MzkyW18weDM5ODE2YygweDIxZSldKDB4MSxfMHg0OTUzOTJbJ2xlbmd0aCddLTB4Mik6XzB4NDk1MzkyPV8weDQ5NTM5MltfMHgzOTgxNmMoMHgyMTcpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpWydyZXBsYWNlJ10oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4Mzk4MTZjKDB4MjE3KV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDQ5NTM5Mjt9W18weDM4NjAzYigweDIwMCldKF8weDM3NDEyZSxfMHgxNThiYjEsXzB4YzAwYmQyLF8weDFiZWRlNyl7dmFyIF8weDIxN2U4MD1fMHgzODYwM2I7dGhpc1tfMHgyMTdlODAoMHgyMWYpXShfMHgzNzQxMmUsXzB4MTU4YmIxKSxfMHgxYmVkZTcmJl8weDFiZWRlNygpLHRoaXNbXzB4MjE3ZTgwKDB4MWM4KV0oXzB4YzAwYmQyLF8weDM3NDEyZSksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4Mzc0MTJlLF8weDE1OGJiMSk7fVtfMHgzODYwM2IoMHgyMWYpXShfMHgxODFjMGUsXzB4MzU3MTk2KXt2YXIgXzB4NTNmOTc4PV8weDM4NjAzYjt0aGlzW18weDUzZjk3OCgweDFkMCldKF8weDE4MWMwZSxfMHgzNTcxOTYpLHRoaXNbJ19zZXROb2RlUXVlcnlQYXRoJ10oXzB4MTgxYzBlLF8weDM1NzE5NiksdGhpc1snX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDE4MWMwZSxfMHgzNTcxOTYpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHgxODFjMGUsXzB4MzU3MTk2KTt9W18weDM4NjAzYigweDFkMCldKF8weDVjMjk5OSxfMHhlNTJjMTkpe31bXzB4Mzg2MDNiKDB4MWQxKV0oXzB4NDMyOGUwLF8weDM3OGRmOSl7fVsnX3NldE5vZGVMYWJlbCddKF8weGIwODc1MyxfMHgzZmY1NTgpe31bXzB4Mzg2MDNiKDB4MWY5KV0oXzB4NWU2ZDliKXtyZXR1cm4gXzB4NWU2ZDliPT09dGhpc1snX3VuZGVmaW5lZCddO31bXzB4Mzg2MDNiKDB4MjQ1KV0oXzB4NGJiYWJmLF8weDQ2OTUzYil7dmFyIF8weDQxZjk1Yz1fMHgzODYwM2I7dGhpc1snX3NldE5vZGVMYWJlbCddKF8weDRiYmFiZixfMHg0Njk1M2IpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4NGJiYWJmKSxfMHg0Njk1M2JbXzB4NDFmOTVjKDB4MWRmKV0mJnRoaXNbXzB4NDFmOTVjKDB4MWMwKV0oXzB4NGJiYWJmKSx0aGlzW18weDQxZjk1YygweDI3NSldKF8weDRiYmFiZixfMHg0Njk1M2IpLHRoaXNbXzB4NDFmOTVjKDB4MjBkKV0oXzB4NGJiYWJmLF8weDQ2OTUzYiksdGhpc1snX2NsZWFuTm9kZSddKF8weDRiYmFiZik7fVtfMHgzODYwM2IoMHgxYzgpXShfMHgyMWY2MGYsXzB4NTFiYmM3KXt2YXIgXzB4MzhjOTAyPV8weDM4NjAzYjtsZXQgXzB4MjVjM2U3O3RyeXtfMHgxZjRhMjdbXzB4MzhjOTAyKDB4MjA0KV0mJihfMHgyNWMzZTc9XzB4MWY0YTI3W18weDM4YzkwMigweDIwNCldW18weDM4YzkwMigweDIyZCldLF8weDFmNGEyN1tfMHgzOGM5MDIoMHgyMDQpXVtfMHgzOGM5MDIoMHgyMmQpXT1mdW5jdGlvbigpe30pLF8weDIxZjYwZiYmdHlwZW9mIF8weDIxZjYwZlsnbGVuZ3RoJ109PV8weDM4YzkwMigweDFmMCkmJihfMHg1MWJiYzdbXzB4MzhjOTAyKDB4MWRlKV09XzB4MjFmNjBmW18weDM4YzkwMigweDFkZSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MjVjM2U3JiYoXzB4MWY0YTI3W18weDM4YzkwMigweDIwNCldW18weDM4YzkwMigweDIyZCldPV8weDI1YzNlNyk7fWlmKF8weDUxYmJjN1sndHlwZSddPT09XzB4MzhjOTAyKDB4MWYwKXx8XzB4NTFiYmM3W18weDM4YzkwMigweDFmMildPT09J051bWJlcicpe2lmKGlzTmFOKF8weDUxYmJjN1tfMHgzOGM5MDIoMHgxZTApXSkpXzB4NTFiYmM3W18weDM4YzkwMigweDIwOCldPSEweDAsZGVsZXRlIF8weDUxYmJjN1tfMHgzOGM5MDIoMHgxZTApXTtlbHNlIHN3aXRjaChfMHg1MWJiYzdbJ3ZhbHVlJ10pe2Nhc2UgTnVtYmVyW18weDM4YzkwMigweDFlZCldOl8weDUxYmJjN1tfMHgzOGM5MDIoMHgyNTIpXT0hMHgwLGRlbGV0ZSBfMHg1MWJiYzdbXzB4MzhjOTAyKDB4MWUwKV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4MzhjOTAyKDB4MjIyKV06XzB4NTFiYmM3W18weDM4YzkwMigweDI0MildPSEweDAsZGVsZXRlIF8weDUxYmJjN1tfMHgzOGM5MDIoMHgxZTApXTticmVhaztjYXNlIDB4MDp0aGlzW18weDM4YzkwMigweDI1YSldKF8weDUxYmJjN1tfMHgzOGM5MDIoMHgxZTApXSkmJihfMHg1MWJiYzdbXzB4MzhjOTAyKDB4Mjc2KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDUxYmJjN1tfMHgzOGM5MDIoMHgxZjIpXT09PV8weDM4YzkwMigweDFmYykmJnR5cGVvZiBfMHgyMWY2MGZbJ25hbWUnXT09XzB4MzhjOTAyKDB4MjBlKSYmXzB4MjFmNjBmWyduYW1lJ10mJl8weDUxYmJjN1tfMHgzOGM5MDIoMHgyNDEpXSYmXzB4MjFmNjBmWyduYW1lJ10hPT1fMHg1MWJiYzdbXzB4MzhjOTAyKDB4MjQxKV0mJihfMHg1MWJiYzdbXzB4MzhjOTAyKDB4MjUzKV09XzB4MjFmNjBmW18weDM4YzkwMigweDI0MSldKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHgyNDkzNmQpe3JldHVybiAweDEvXzB4MjQ5MzZkPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bJ19zb3J0UHJvcHMnXShfMHg0MzcyNDgpe3ZhciBfMHgzNzVkYWM9XzB4Mzg2MDNiOyFfMHg0MzcyNDhbXzB4Mzc1ZGFjKDB4MjdiKV18fCFfMHg0MzcyNDhbXzB4Mzc1ZGFjKDB4MjdiKV1bXzB4Mzc1ZGFjKDB4MWRlKV18fF8weDQzNzI0OFsndHlwZSddPT09XzB4Mzc1ZGFjKDB4MjYwKXx8XzB4NDM3MjQ4Wyd0eXBlJ109PT1fMHgzNzVkYWMoMHgyMmEpfHxfMHg0MzcyNDhbXzB4Mzc1ZGFjKDB4MWYyKV09PT1fMHgzNzVkYWMoMHgyNTgpfHxfMHg0MzcyNDhbJ3Byb3BzJ11bXzB4Mzc1ZGFjKDB4MWYzKV0oZnVuY3Rpb24oXzB4MTUwNWNhLF8weDUwYzYwZCl7dmFyIF8weDI5ZTZiZj1fMHgzNzVkYWMsXzB4NDY2NTQ2PV8weDE1MDVjYVtfMHgyOWU2YmYoMHgyNDEpXVtfMHgyOWU2YmYoMHgyMGIpXSgpLF8weDE2NWNiNj1fMHg1MGM2MGRbJ25hbWUnXVtfMHgyOWU2YmYoMHgyMGIpXSgpO3JldHVybiBfMHg0NjY1NDY8XzB4MTY1Y2I2Py0weDE6XzB4NDY2NTQ2Pl8weDE2NWNiNj8weDE6MHgwO30pO31bXzB4Mzg2MDNiKDB4Mjc1KV0oXzB4MzM0NGI3LF8weDQ4OTYxZCl7dmFyIF8weDUxYjEyZj1fMHgzODYwM2I7aWYoIShfMHg0ODk2MWRbXzB4NTFiMTJmKDB4MjZlKV18fCFfMHgzMzQ0YjdbJ3Byb3BzJ118fCFfMHgzMzQ0YjdbXzB4NTFiMTJmKDB4MjdiKV1bXzB4NTFiMTJmKDB4MWRlKV0pKXtmb3IodmFyIF8weDIwY2IxNz1bXSxfMHgzNmRhZmM9W10sXzB4NTlkNGEzPTB4MCxfMHgxMDEzZDE9XzB4MzM0NGI3W18weDUxYjEyZigweDI3YildW18weDUxYjEyZigweDFkZSldO18weDU5ZDRhMzxfMHgxMDEzZDE7XzB4NTlkNGEzKyspe3ZhciBfMHgxNzJlZTE9XzB4MzM0NGI3W18weDUxYjEyZigweDI3YildW18weDU5ZDRhM107XzB4MTcyZWUxW18weDUxYjEyZigweDFmMildPT09J2Z1bmN0aW9uJz9fMHgyMGNiMTdbJ3B1c2gnXShfMHgxNzJlZTEpOl8weDM2ZGFmY1tfMHg1MWIxMmYoMHgyMWQpXShfMHgxNzJlZTEpO31pZighKCFfMHgzNmRhZmNbXzB4NTFiMTJmKDB4MWRlKV18fF8weDIwY2IxN1tfMHg1MWIxMmYoMHgxZGUpXTw9MHgxKSl7XzB4MzM0NGI3W18weDUxYjEyZigweDI3YildPV8weDM2ZGFmYzt2YXIgXzB4MjRjMGU1PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDIwY2IxN307dGhpc1tfMHg1MWIxMmYoMHgxZDApXShfMHgyNGMwZTUsXzB4NDg5NjFkKSx0aGlzW18weDUxYjEyZigweDIwYyldKF8weDI0YzBlNSxfMHg0ODk2MWQpLHRoaXNbXzB4NTFiMTJmKDB4MWU4KV0oXzB4MjRjMGU1KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4MjRjMGU1LF8weDQ4OTYxZCksXzB4MjRjMGU1WydpZCddKz0nXFxcXHgyMGYnLF8weDMzNDRiN1sncHJvcHMnXVtfMHg1MWIxMmYoMHgyNjMpXShfMHgyNGMwZTUpO319fVtfMHgzODYwM2IoMHgyMGQpXShfMHgzZmQzYjEsXzB4MjNjNTFmKXt9Wydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDIzYTJlYil7fVsnX2lzQXJyYXknXShfMHg0N2EyZmYpe3ZhciBfMHgzZWI4Nzk9XzB4Mzg2MDNiO3JldHVybiBBcnJheVtfMHgzZWI4NzkoMHgyMjYpXShfMHg0N2EyZmYpfHx0eXBlb2YgXzB4NDdhMmZmPT0nb2JqZWN0JyYmdGhpc1tfMHgzZWI4NzkoMHgyOGMpXShfMHg0N2EyZmYpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJzt9W18weDM4NjAzYigweDFhNyldKF8weDI1YjVkYixfMHgyYmU3OGEpe31bXzB4Mzg2MDNiKDB4MjgwKV0oXzB4MzBhY2M3KXt2YXIgXzB4MWQyY2Q0PV8weDM4NjAzYjtkZWxldGUgXzB4MzBhY2M3W18weDFkMmNkNCgweDI0ZCldLGRlbGV0ZSBfMHgzMGFjYzdbXzB4MWQyY2Q0KDB4MjMzKV0sZGVsZXRlIF8weDMwYWNjN1tfMHgxZDJjZDQoMHgyMDkpXTt9W18weDM4NjAzYigweDFmOCldKF8weGFlYmQwMSxfMHgyMjc2NWEpe319bGV0IF8weDI3YzE2Zj1uZXcgXzB4ZmIzNTIoKSxfMHgxM2JhMDc9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NGY1YTUxPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4M2YzMGU3KF8weDQxM2IxMSxfMHg0YWU3MjEsXzB4NWRkODRiLF8weDdkNGY4MSxfMHg1MWZhOGIsXzB4MzgyOTMxKXt2YXIgXzB4MTViMjI3PV8weDM4NjAzYjtsZXQgXzB4NTMxNDliLF8weDIzMjJkOTt0cnl7XzB4MjMyMmQ5PV8weDMxZGFlZCgpLF8weDUzMTQ5Yj1fMHg1NWY2MzVbXzB4NGFlNzIxXSwhXzB4NTMxNDlifHxfMHgyMzIyZDktXzB4NTMxNDliWyd0cyddPjB4MWY0JiZfMHg1MzE0OWJbXzB4MTViMjI3KDB4Mjg1KV0mJl8weDUzMTQ5YltfMHgxNWIyMjcoMHgyOGQpXS9fMHg1MzE0OWJbXzB4MTViMjI3KDB4Mjg1KV08MHg2ND8oXzB4NTVmNjM1W18weDRhZTcyMV09XzB4NTMxNDliPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MjMyMmQ5fSxfMHg1NWY2MzVbJ2hpdHMnXT17fSk6XzB4MjMyMmQ5LV8weDU1ZjYzNVtfMHgxNWIyMjcoMHgyMjQpXVsndHMnXT4weDMyJiZfMHg1NWY2MzVbXzB4MTViMjI3KDB4MjI0KV1bXzB4MTViMjI3KDB4Mjg1KV0mJl8weDU1ZjYzNVsnaGl0cyddW18weDE1YjIyNygweDI4ZCldL18weDU1ZjYzNVsnaGl0cyddWydjb3VudCddPDB4NjQmJihfMHg1NWY2MzVbXzB4MTViMjI3KDB4MjI0KV09e30pO2xldCBfMHgyMTcxMTU9W10sXzB4NTg0YjliPV8weDUzMTQ5YlsncmVkdWNlTGltaXRzJ118fF8weDU1ZjYzNVtfMHgxNWIyMjcoMHgyMjQpXVtfMHgxNWIyMjcoMHgyNDApXT9fMHg0ZjVhNTE6XzB4MTNiYTA3LF8weDUyNGMxOT1fMHhmMzBmYTQ9Pnt2YXIgXzB4MjQyMTEwPV8weDE1YjIyNztsZXQgXzB4NTVkZTRiPXt9O3JldHVybiBfMHg1NWRlNGJbXzB4MjQyMTEwKDB4MjdiKV09XzB4ZjMwZmE0Wydwcm9wcyddLF8weDU1ZGU0YlsnZWxlbWVudHMnXT1fMHhmMzBmYTRbJ2VsZW1lbnRzJ10sXzB4NTVkZTRiWydzdHJMZW5ndGgnXT1fMHhmMzBmYTRbXzB4MjQyMTEwKDB4MjA3KV0sXzB4NTVkZTRiW18weDI0MjExMCgweDI2NSldPV8weGYzMGZhNFtfMHgyNDIxMTAoMHgyNjUpXSxfMHg1NWRlNGJbXzB4MjQyMTEwKDB4MWQ2KV09XzB4ZjMwZmE0W18weDI0MjExMCgweDFkNildLF8weDU1ZGU0YltfMHgyNDIxMTAoMHgyNGYpXT1fMHhmMzBmYTRbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDU1ZGU0YltfMHgyNDIxMTAoMHgxZGYpXT0hMHgxLF8weDU1ZGU0YltfMHgyNDIxMTAoMHgyNmUpXT0hXzB4MTNmMDBiLF8weDU1ZGU0YltfMHgyNDIxMTAoMHgyMDIpXT0weDEsXzB4NTVkZTRiW18weDI0MjExMCgweDFlMSldPTB4MCxfMHg1NWRlNGJbXzB4MjQyMTEwKDB4MjcxKV09XzB4MjQyMTEwKDB4MjRhKSxfMHg1NWRlNGJbXzB4MjQyMTEwKDB4MjJlKV09XzB4MjQyMTEwKDB4MjZmKSxfMHg1NWRlNGJbJ2F1dG9FeHBhbmQnXT0hMHgwLF8weDU1ZGU0YltfMHgyNDIxMTAoMHgyM2YpXT1bXSxfMHg1NWRlNGJbXzB4MjQyMTEwKDB4MjQ5KV09MHgwLF8weDU1ZGU0YlsncmVzb2x2ZUdldHRlcnMnXT0hMHgwLF8weDU1ZGU0YltfMHgyNDIxMTAoMHgxZTQpXT0weDAsXzB4NTVkZTRiWydub2RlJ109eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTVkZTRiO307Zm9yKHZhciBfMHhlN2VlNWI9MHgwO18weGU3ZWU1YjxfMHg1MWZhOGJbXzB4MTViMjI3KDB4MWRlKV07XzB4ZTdlZTViKyspXzB4MjE3MTE1W18weDE1YjIyNygweDIxZCldKF8weDI3YzE2ZltfMHgxNWIyMjcoMHgxYjApXSh7J3RpbWVOb2RlJzpfMHg0MTNiMTE9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHg1MWZhOGJbXzB4ZTdlZTViXSxfMHg1MjRjMTkoXzB4NTg0YjliKSx7fSkpO2lmKF8weDQxM2IxMT09PV8weDE1YjIyNygweDFlNSkpe2xldCBfMHg1YjRhMjM9RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddO3RyeXtFcnJvcltfMHgxNWIyMjcoMHgxZWIpXT0weDEvMHgwLF8weDIxNzExNVsncHVzaCddKF8weDI3YzE2ZltfMHgxNWIyMjcoMHgxYjApXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4MTViMjI3KDB4MjY0KV0sXzB4NTI0YzE5KF8weDU4NGI5YikseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4MTViMjI3KDB4MWViKV09XzB4NWI0YTIzO319cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHhlYzc1MmYsJ2FyZ3MnOlt7J3RzJzpfMHg1ZGQ4NGIsJ3Nlc3Npb24nOl8weDdkNGY4MSwnYXJncyc6XzB4MjE3MTE1LCdpZCc6XzB4NGFlNzIxLCdjb250ZXh0JzpfMHgzODI5MzF9XX07fWNhdGNoKF8weDMwNDVlNyl7cmV0dXJueydtZXRob2QnOl8weDE1YjIyNygweDFiMyksJ3ZlcnNpb24nOl8weGVjNzUyZiwnYXJncyc6W3sndHMnOl8weDVkZDg0Yiwnc2Vzc2lvbic6XzB4N2Q0ZjgxLCdhcmdzJzpbeyd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgzMDQ1ZTcmJl8weDMwNDVlN1tfMHgxNWIyMjcoMHgyODgpXX1dLCdpZCc6XzB4NGFlNzIxLCdjb250ZXh0JzpfMHgzODI5MzF9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDUzMTQ5YiYmXzB4MjMyMmQ5KXtsZXQgXzB4NTI4NGY3PV8weDMxZGFlZCgpO18weDUzMTQ5YltfMHgxNWIyMjcoMHgyODUpXSsrLF8weDUzMTQ5YltfMHgxNWIyMjcoMHgyOGQpXSs9XzB4NDFjYjEzKF8weDIzMjJkOSxfMHg1Mjg0ZjcpLF8weDUzMTQ5YlsndHMnXT1fMHg1Mjg0ZjcsXzB4NTVmNjM1W18weDE1YjIyNygweDIyNCldW18weDE1YjIyNygweDI4NSldKyssXzB4NTVmNjM1W18weDE1YjIyNygweDIyNCldW18weDE1YjIyNygweDI4ZCldKz1fMHg0MWNiMTMoXzB4MjMyMmQ5LF8weDUyODRmNyksXzB4NTVmNjM1W18weDE1YjIyNygweDIyNCldWyd0cyddPV8weDUyODRmNywoXzB4NTMxNDliW18weDE1YjIyNygweDI4NSldPjB4MzJ8fF8weDUzMTQ5YltfMHgxNWIyMjcoMHgyOGQpXT4weDY0KSYmKF8weDUzMTQ5YltfMHgxNWIyMjcoMHgyNDApXT0hMHgwKSwoXzB4NTVmNjM1WydoaXRzJ11bXzB4MTViMjI3KDB4Mjg1KV0+MHgzZTh8fF8weDU1ZjYzNVtfMHgxNWIyMjcoMHgyMjQpXVsndGltZSddPjB4MTJjKSYmKF8weDU1ZjYzNVsnaGl0cyddW18weDE1YjIyNygweDI0MCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDNmMzBlNzt9KChfMHg3N2M3MDEsXzB4NWE1Mzg0LF8weDRiMWRlNCxfMHhhZmZjOCxfMHg1OWZkNmUsXzB4NzE2MmUxLF8weDNhN2FkMSxfMHg0MjRjMzYsXzB4NTRkYzg3KT0+e3ZhciBfMHgxYzJkYjI9XzB4NTJhY2E1O2lmKF8weDc3YzcwMVtfMHgxYzJkYjIoMHgxYTYpXSlyZXR1cm4gXzB4NzdjNzAxWydfY29uc29sZV9uaW5qYSddO2lmKCFZKF8weDc3YzcwMSxfMHg0MjRjMzYsXzB4NTlmZDZlKSlyZXR1cm4gXzB4NzdjNzAxW18weDFjMmRiMigweDFhNildPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHg3N2M3MDFbXzB4MWMyZGIyKDB4MWE2KV07bGV0IF8weDJlNjE3ND1SKF8weDc3YzcwMSksXzB4MTgzNGRmPV8weDJlNjE3NFtfMHgxYzJkYjIoMHgxZDUpXSxfMHg4Njk3Y2I9XzB4MmU2MTc0W18weDFjMmRiMigweDFkYyldLF8weDZmMTFjZj1fMHgyZTYxNzRbJ25vdyddLF8weGYzN2I1MD17J2hpdHMnOnt9LCd0cyc6e319LF8weDIxMmRjZj1RKF8weDc3YzcwMSxfMHg1NGRjODcsXzB4ZjM3YjUwLF8weDcxNjJlMSksXzB4NWJhYzY4PV8weDU4MWFjYj0+e18weGYzN2I1MFsndHMnXVtfMHg1ODFhY2JdPV8weDg2OTdjYigpO30sXzB4MmFiYTdhPShfMHgyZjgxNWQsXzB4NDY3NmM1KT0+e3ZhciBfMHg1ZTY2MTA9XzB4MWMyZGIyO2xldCBfMHg5ODQ1NTY9XzB4ZjM3YjUwWyd0cyddW18weDQ2NzZjNV07aWYoZGVsZXRlIF8weGYzN2I1MFsndHMnXVtfMHg0Njc2YzVdLF8weDk4NDU1Nil7bGV0IF8weDUxNWZhOT1fMHgxODM0ZGYoXzB4OTg0NTU2LF8weDg2OTdjYigpKTtfMHgxNGZkMDUoXzB4MjEyZGNmKF8weDVlNjYxMCgweDI4ZCksXzB4MmY4MTVkLF8weDZmMTFjZigpLF8weDRlNmNiOSxbXzB4NTE1ZmE5XSxfMHg0Njc2YzUpKTt9fSxfMHgyMWQ4ZmQ9XzB4ODA3MTNhPT5fMHg1YmFlZjc9Pnt2YXIgXzB4NDdiMDUwPV8weDFjMmRiMjt0cnl7XzB4NWJhYzY4KF8weDViYWVmNyksXzB4ODA3MTNhKF8weDViYWVmNyk7fWZpbmFsbHl7XzB4NzdjNzAxWydjb25zb2xlJ11bXzB4NDdiMDUwKDB4MjhkKV09XzB4ODA3MTNhO319LF8weDkwMzMxYz1fMHgyZDkyMzg9Pl8weDIxNDQzNT0+e3ZhciBfMHg0ZWNiMDc9XzB4MWMyZGIyO3RyeXtsZXQgW18weDQ3NmNmNSxfMHgzMWI1NTVdPV8weDIxNDQzNVtfMHg0ZWNiMDcoMHgxYzIpXSgnOmxvZ1BvaW50SWQ6Jyk7XzB4MmFiYTdhKF8weDMxYjU1NSxfMHg0NzZjZjUpLF8weDJkOTIzOChfMHg0NzZjZjUpO31maW5hbGx5e18weDc3YzcwMVtfMHg0ZWNiMDcoMHgyMDQpXVtfMHg0ZWNiMDcoMHgyNTkpXT1fMHgyZDkyMzg7fX07XzB4NzdjNzAxWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KF8weDUzNmFkNixfMHgyNWUwZjgpPT57dmFyIF8weDExOGFkMj1fMHgxYzJkYjI7XzB4NzdjNzAxW18weDExOGFkMigweDIwNCldW18weDExOGFkMigweDFiMyldWyduYW1lJ10hPT1fMHgxMThhZDIoMHgxZGQpJiZfMHgxNGZkMDUoXzB4MjEyZGNmKF8weDExOGFkMigweDFiMyksXzB4NTM2YWQ2LF8weDZmMTFjZigpLF8weDRlNmNiOSxfMHgyNWUwZjgpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg0NGZkNGUsXzB4MzY0YzUyKT0+e3ZhciBfMHgyMDBkODY9XzB4MWMyZGIyO18weDc3YzcwMVtfMHgyMDBkODYoMHgyMDQpXVtfMHgyMDBkODYoMHgxYjMpXVtfMHgyMDBkODYoMHgyNDEpXSE9PV8weDIwMGQ4NigweDFlZikmJl8weDE0ZmQwNShfMHgyMTJkY2YoXzB4MjAwZDg2KDB4MWU1KSxfMHg0NGZkNGUsXzB4NmYxMWNmKCksXzB4NGU2Y2I5LF8weDM2NGM1MikpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHg1YmEwNWM9XzB4MWMyZGIyO18weDc3YzcwMVtfMHg1YmEwNWMoMHgyMDQpXVtfMHg1YmEwNWMoMHgyOGQpXT1fMHgyMWQ4ZmQoXzB4NzdjNzAxW18weDViYTA1YygweDIwNCldW18weDViYTA1YygweDI4ZCldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4MTJiN2M5PV8weDFjMmRiMjtfMHg3N2M3MDFbXzB4MTJiN2M5KDB4MjA0KV1bXzB4MTJiN2M5KDB4MjU5KV09XzB4OTAzMzFjKF8weDc3YzcwMVtfMHgxMmI3YzkoMHgyMDQpXVsndGltZUVuZCddKTt9LCdhdXRvTG9nJzooXzB4NDVhYTFkLF8weDExZTk2Nik9Pnt2YXIgXzB4NDUxYWM3PV8weDFjMmRiMjtfMHgxNGZkMDUoXzB4MjEyZGNmKF8weDQ1MWFjNygweDFiMyksXzB4MTFlOTY2LF8weDZmMTFjZigpLF8weDRlNmNiOSxbXzB4NDVhYTFkXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NGEwOGVkLF8weDU2ODk5YSk9Pnt2YXIgXzB4MWVhMTMyPV8weDFjMmRiMjtfMHgxNGZkMDUoXzB4MjEyZGNmKF8weDFlYTEzMigweDFiMyksXzB4NGEwOGVkLF8weDZmMTFjZigpLF8weDRlNmNiOSxfMHg1Njg5OWEpKTt9LCdhdXRvVHJhY2UnOihfMHgxNDJlYTQsXzB4Mzc5NGRkKT0+e3ZhciBfMHhlNzg0NzE9XzB4MWMyZGIyO18weDE0ZmQwNShfMHgyMTJkY2YoXzB4ZTc4NDcxKDB4MWU1KSxfMHgzNzk0ZGQsXzB4NmYxMWNmKCksXzB4NGU2Y2I5LFtfMHgxNDJlYTRdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDE1OWViYyxfMHg1MmI3ZDQpPT57dmFyIF8weDMwY2VhYT1fMHgxYzJkYjI7XzB4MTRmZDA1KF8weDIxMmRjZihfMHgzMGNlYWEoMHgxZTUpLF8weDE1OWViYyxfMHg2ZjExY2YoKSxfMHg0ZTZjYjksXzB4NTJiN2Q0KSk7fSwnYXV0b1RpbWUnOihfMHgzODAwNzksXzB4MmM3ZGIxLF8weDVhZTk4OCk9PntfMHg1YmFjNjgoXzB4NWFlOTg4KTt9LCdhdXRvVGltZUVuZCc6KF8weDNjMGEwMixfMHgzNDFiNzEsXzB4NTQ0ZmI2KT0+e18weDJhYmE3YShfMHgzNDFiNzEsXzB4NTQ0ZmI2KTt9LCdjb3ZlcmFnZSc6XzB4MjIzMzRhPT57XzB4MTRmZDA1KHsnbWV0aG9kJzonY292ZXJhZ2UnLCd2ZXJzaW9uJzpfMHg3MTYyZTEsJ2FyZ3MnOlt7J2lkJzpfMHgyMjMzNGF9XX0pO319O2xldCBfMHgxNGZkMDU9SihfMHg3N2M3MDEsXzB4NWE1Mzg0LF8weDRiMWRlNCxfMHhhZmZjOCxfMHg1OWZkNmUpLF8weDRlNmNiOT1fMHg3N2M3MDFbXzB4MWMyZGIyKDB4MjVjKV07cmV0dXJuIF8weDc3YzcwMVtfMHgxYzJkYjIoMHgxYTYpXTt9KShnbG9iYWxUaGlzLF8weDUyYWNhNSgweDFkMiksJzM3OTExJyxfMHg1MmFjYTUoMHgyNmQpLF8weDUyYWNhNSgweDFjNyksXzB4NTJhY2E1KDB4MjZhKSwnMTY5MzQyOTE5MTA1OCcsXzB4NTJhY2E1KDB4MjNkKSxfMHg1MmFjYTUoMHgxY2MpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiY29uc3Qgc3RvcmFnZSA9IFtdO1xuXG5leHBvcnQge3N0b3JhZ2V9OyIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCB0YWdzLCBjaGVja2xpc3QsIHN0YXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7VGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9NT0RVTEUgSU1QT1JUIFNFQ1RJT05cblxuaW1wb3J0IHsgaW5wdXRDYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dENhcmRcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrTGlzdFwiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL21vZHVsZXMvcmVuZGVyVGFza1wiO1xuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL21vZHVsZXMvcmVtb3ZlVGFza1wiO1xuaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL2VkaXRUYXNrXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBlZGl0SW5wdXRDYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0SW5wdXRDYXJkXCI7XG5cbi8vREVDTEFSQVRJT04gU0VDVElPTlxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJywgJ2J0bicsICdidG4tcHJpbWFyeScpO1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdOZXcgdGFzayc7XG5cbndpbmRvdy5yZW1vdmVUYXNrID0gcmVtb3ZlVGFzaztcbndpbmRvdy5lZGl0VGFzayA9IGVkaXRUYXNrO1xuXG4vLyBBUFBQRU5EIFNFQ1RJT05cblxubWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuY29udGVudC5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG5cblxuLy8gRVZFTlQgTElTVEVORVIgU0VDVElPTlxuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3Qgc3VibWl0VGFza0J0bklkID0gJ3Rhc2stc3VibWl0LWJ0bic7XG4gICAgY29uc3QgYmFja1Rhc2tCdG5JZCA9ICd0YXNrLWJhY2stYnRuJztcbiAgICBjb25zdCBlZGl0VGFza0J0bklkID0gJ3Rhc2stZWRpdC1idG4nO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2tFZGl0SWQgPSAndGFzay1zdWJtaXQtZWRpdC1idG4nO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAnJztcblxuICAgIGlmICh0YXJnZXRFbGVtZW50LmlkID09PSBzdWJtaXRUYXNrQnRuSWQpIHtcbiAgICAgICAgY29uc3QgdGFza1N1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXN1Ym1pdC1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza05hbWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVQaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZVBpY2tlcicpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlQaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlQaWNrZXInKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTtcblxuICAgICAgICB0YXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFzayh0YXNrTmFtZVRleHQsIHRhc2tEZXNjcmlwdGlvblRleHQsIHRhc2tEYXRlUGlja2VkLCB0YXNrUHJpb3JpdHlQaWNrZWQsICcnLCAnJywgJycpKTtcbiAgICAgICAgdGFza1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2spO1xuXG4gICAgICAgIHRhc2tGb3JtRWxlbWVudC5yZXNldCgpO1xuICAgICAgICBpbnB1dENhcmQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuaWQgPT09IGJhY2tUYXNrQnRuSWQpIHtcbiAgICAgICAgaW5wdXRDYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRFbGVtZW50LmlkID09PSBlZGl0VGFza0J0bklkKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdElucHV0Q2FyZCk7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IE51bWJlcih0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnb25jbGljaycpLnJlcGxhY2UoL1xcRC9nLCcnKSk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuaWQgPT09IHN1Ym1pdFRhc2tFZGl0SWQpIHtcbiAgICAgICAgY29uc3QgdGFza1N1Ym1pdEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1zdWJtaXQtZWRpdC1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza05hbWVFZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWRpdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZUVkaXRQaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZVBpY2tlcicpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlFZGl0UGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5UGlja2VyJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtRWRpdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZm9ybScpO1xuXG4gICAgICAgIHRhc2tTdWJtaXRFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2sodGFza05hbWVFZGl0VGV4dCwgdGFza0Rlc2NyaXB0aW9uRWRpdFRleHQsIHRhc2tEYXRlRWRpdFBpY2tlZCwgdGFza1ByaW9yaXR5RWRpdFBpY2tlZCwgJycsICcnLCAnJywgY3VycmVudEluZGV4KSk7XG4gICAgICAgIHRhc2tTdWJtaXRFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFzayk7XG5cbiAgICAgICAgdGFza0Zvcm1FZGl0RWxlbWVudC5yZXNldCgpO1xuICAgICAgICBlZGl0SW5wdXRDYXJkLnJlbW92ZSgpO1xuICAgIH1cblxufSwgdHJ1ZSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0Q2FyZCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=