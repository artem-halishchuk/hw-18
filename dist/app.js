/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _app_menuMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/menuMain */ \"./src/app/menuMain.js\");\n //импортим стили\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var getBlockApp = document.querySelector('.app');\n  new _app_menuMain__WEBPACK_IMPORTED_MODULE_1__[\"default\"](getBlockApp, '.menu-note', 'menu-main');\n});\n\n//# sourceURL=webpack://webpack-example/./src/app/index.js?");

/***/ }),

/***/ "./src/app/menuMain.js":
/*!*****************************!*\
  !*** ./src/app/menuMain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMain)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MenuMain = /*#__PURE__*/function () {\n  function MenuMain(blockInsert, removeBlock, container) {\n    _classCallCheck(this, MenuMain);\n\n    this.blockInsert = blockInsert;\n    this.activeElement = null;\n    this.ul = null;\n    this.removeBlock = removeBlock;\n    this.container = container;\n    this.createMenu();\n  }\n\n  _createClass(MenuMain, [{\n    key: \"createMenu\",\n    value: function createMenu() {\n      var _this = this;\n\n      var container = document.createElement('div');\n      container.classList.add(this.container);\n      this.blockInsert.append(container);\n      var formWrapper = document.createElement('div');\n      formWrapper.classList.add('form');\n      container.append(formWrapper);\n      var input = document.createElement('input');\n      input.placeholder = 'Имя заметки';\n      input.classList.add('input', 'form-name');\n      formWrapper.append(input);\n      var buttonAdd = document.createElement('button');\n      buttonAdd.classList.add('button', 'form-add');\n      buttonAdd.innerHTML = 'add';\n      formWrapper.append(buttonAdd);\n      var inputText = document.createElement('textarea');\n      inputText.placeholder = 'Текст заметки';\n      inputText.classList.add('input', 'form-text');\n      container.append(inputText);\n      buttonAdd.addEventListener('click', function () {\n        if (input.value.trim() === '') {\n          alert('Заполните поле имени.');\n          return;\n        }\n\n        _this.name = input.value;\n        _this.text = inputText.value;\n\n        _this.createElem();\n\n        input.value = '';\n        inputText.value = '';\n      });\n      this.ul = document.createElement('ul');\n      this.ul.classList.add('content-list');\n      container.append(this.ul);\n      fetch('/notes', {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        _this.deactivateElement();\n\n        if (r.status === 'ok') _this.show(r.data);\n      });\n    }\n  }, {\n    key: \"createElem\",\n    value: function createElem() {\n      var _this2 = this;\n\n      var newNote = new Note(this.name, this.text);\n      fetch('/notes', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json;charset=utf-8'\n        },\n        body: JSON.stringify({\n          \"name\": this.name,\n          \"note\": this.text\n        })\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.status === 'error') {\n          alert('Ошибка при добавлении!');\n          return;\n        }\n\n        fetch('/notes', {\n          method: 'GET',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        }).then(function (r) {\n          return r.json();\n        }).then(function (r) {\n          _this2.deactivateElement();\n\n          if (r.status === 'ok') _this2.show(r.data);\n        });\n      });\n    }\n  }, {\n    key: \"show\",\n    value: function show(arr) {\n      var _this3 = this;\n\n      this.ul.innerHTML = '';\n      if (!arr) return;\n      arr.map(function (e, i) {\n        if (!e) return;\n        var li = document.createElement('li');\n        li.classList.add('content-item');\n\n        _this3.ul.append(li);\n\n        var buttonShow = document.createElement('button');\n        buttonShow.classList.add('content-item-name');\n        buttonShow.innerHTML = e.name;\n        li.append(buttonShow);\n        li.addEventListener('click', function (event) {\n          if (event.target.matches('.content-item-name-active')) return;\n          if (e === _this3.activeElement) buttonShow.classList.add('content-item-name-active');\n\n          _this3.activeElem(event.target);\n        });\n        if (e === _this3.activeElement) buttonShow.classList.add('content-item-name-active');\n        li.dataset.index = i;\n\n        _this3.ul.childNodes.forEach(function (e) {\n          e.firstChild.classList.remove('content-item-name-active');\n          if (e.dataset.index === _this3.index) e.firstChild.classList.add('content-item-name-active');\n        });\n      });\n    }\n  }, {\n    key: \"activeElem\",\n    value: function activeElem(event) {\n      var _this4 = this;\n\n      if (!event) return;\n      fetch('/notes', {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.status !== 'ok') return;\n        _this4.index = event.parentNode.dataset.index;\n        _this4.activeElement = r.data[_this4.index];\n\n        _this4.ul.childNodes.forEach(function (e) {\n          e.firstChild.classList.remove('content-item-name-active');\n          if (e.dataset.index === _this4.index) e.firstChild.classList.add('content-item-name-active');\n        });\n\n        _this4.show(r.data);\n\n        _this4.display();\n      });\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      if (!this.activeElement && document.querySelector(this.removeBlock)) {\n        document.querySelector(this.removeBlock).style.display = 'none';\n      }\n\n      var menuNote;\n\n      if (this.activeElement) {\n        if (document.querySelector(this.removeBlock)) {\n          document.querySelector(this.removeBlock).remove();\n        }\n\n        var getBlockApp = document.querySelector('.app');\n        menuNote = new MenuNote(getBlockApp, this.index);\n        menuNote.createMenu();\n      }\n    }\n  }, {\n    key: \"deactivateElement\",\n    value: function deactivateElement() {\n      var _this5 = this;\n\n      var click = null;\n      document.addEventListener('click', function (event) {\n        click = event.target;\n        if (!click.matches(\".\".concat(_this5.container))) return;\n        _this5.activeElement = null;\n        _this5.index = null;\n\n        _this5.ul.childNodes.forEach(function (e) {\n          e.firstChild.classList.remove('content-item-name-active');\n        });\n\n        if (document.querySelector('body .menu-note')) {\n          document.querySelector('.menu-note').style.display = 'none';\n        }\n      });\n    }\n  }]);\n\n  return MenuMain;\n}();\n\n\n\nvar MenuNote = /*#__PURE__*/function () {\n  function MenuNote(blockInsert, index) {\n    _classCallCheck(this, MenuNote);\n\n    this.blockInsert = blockInsert;\n    this.index = index;\n  }\n\n  _createClass(MenuNote, [{\n    key: \"createMenu\",\n    value: function createMenu() {\n      var _this6 = this;\n\n      var container = document.createElement('div');\n      container.classList.add('menu-note');\n      this.blockInsert.append(container);\n      var input = document.createElement('div');\n      input.classList.add('note-form', 'note-form__name');\n      container.append(input);\n      var textarea = document.createElement('div');\n      textarea.classList.add('note-form', 'note-form__text');\n      container.append(textarea);\n      fetch('/notes', {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.status !== 'ok') return;\n        input.innerHTML = r.data[_this6.index].name;\n        textarea.innerHTML = r.data[_this6.index].note;\n      });\n    }\n  }]);\n\n  return MenuNote;\n}();\n\nvar Note = function Note(name, note) {\n  _classCallCheck(this, Note);\n\n  this.name = name;\n  this.note = note;\n};\n\n//# sourceURL=webpack://webpack-example/./src/app/menuMain.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/open-off.svg */ \"./src/styles/img/open-off.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/open-on.svg */ \"./src/styles/img/open-on.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! img/delete.svg */ \"./src/styles/img/delete.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    font-family: 'Helvetica';\\r\\n    display: flex;\\r\\n}\\r\\n.app {\\r\\n    display:flex;\\r\\n    gap: 2px;\\r\\n}\\r\\n.menu-main, .menu-notes {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 318px;\\r\\n    /*width: 100%;*/\\r\\n    border: 1px solid #000000;\\r\\n    padding: 10px;\\r\\n    background-color: #55968a;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    box-shadow: 0 4px 4px 0 rgba(58, 58, 58, 0.5);\\r\\n    border-radius: 5px;\\r\\n    min-height: calc(100vh - 22px);\\r\\n}\\r\\n.form {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    gap: 8px;\\r\\n    height: 40px;\\r\\n}\\r\\n.massageDeactivate {\\r\\n    font-size: 20px;\\r\\n    text-shadow: #818181 2px 1px 5px;\\r\\n    text-align: center;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n.form-name, .note-heading, .form-search, .note-name, .note-form, .form-text {\\r\\n    text-align: center;\\r\\n    box-shadow: 0 4px 4px 0 rgba(58, 58, 58, 0.5);\\r\\n    border-radius: 16px;\\r\\n    border: 2px solid transparent;\\r\\n    /*font-weight: 500;*/\\r\\n    font-size: 20px;\\r\\n    text-shadow: #818181 2px 1px 5px;\\r\\n    width: 100%;\\r\\n}\\r\\n.form-name:focus, .form-search:focus, .note-name:focus, .form-text:focus {\\r\\n    border: 2px solid rgb(171, 101, 9);\\r\\n}\\r\\n.form-name:hover, .form-search:hover, .note-name:hover, .form-text:hover {\\r\\n    border: 2px solid rgb(17, 196, 236);\\r\\n}\\r\\n.form-add {\\r\\n    box-shadow: 0 4px 4px 0 rgba(58, 58, 58, 0.5);\\r\\n    text-transform: uppercase;\\r\\n    border-radius: 16px;\\r\\n    border: 2px solid transparent;\\r\\n    font-weight: 700;\\r\\n    text-shadow: #818181 2px 1px 5px;\\r\\n}\\r\\n.form-add:focus {\\r\\n    border: 2px solid rgb(171, 101, 9);\\r\\n}\\r\\n.form-add:hover {\\r\\n    border: 2px solid rgb(17, 196, 236);\\r\\n}\\r\\n.form-add:active {\\r\\n    border: 2px solid rgb(201, 25, 25);\\r\\n}\\r\\n.content-list {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 8px;\\r\\n    margin-top: 24px;\\r\\n}\\r\\n.content-item {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 8px;\\r\\n    box-shadow: 0 4px 4px 0 rgba(58, 58, 58, 0.5);\\r\\n    position: relative;\\r\\n}\\r\\n.content-item-name {\\r\\n    font-weight: 500;\\r\\n    font-size: 20px;\\r\\n    color: whitesmoke;\\r\\n    text-align: left;\\r\\n    padding-right: 6px;\\r\\n    padding-right: 80px;\\r\\n    flex-grow: 1;\\r\\n    text-shadow: #818181 2px 1px 5px;\\r\\n    justify-content: flex-start;\\r\\n    border: 2px solid transparent;\\r\\n    background-color: transparent;\\r\\n    height: 44px;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: right;\\r\\n    background-size: auto 100%;\\r\\n}\\r\\n/*если активный item*/\\r\\n.content-item-name-active {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n.content-item-name:focus {\\r\\n    border: 2px solid rgb(171, 101, 9);\\r\\n}\\r\\n.content-item-name:hover {\\r\\n    border: 2px solid rgb(17, 196, 236);\\r\\n}\\r\\n.content-item-name:active {\\r\\n    border: 2px solid rgb(201, 25, 25);\\r\\n}\\r\\n.delete {\\r\\n    background: transparent;\\r\\n    width: 36px;\\r\\n    height: 36px;\\r\\n    background-size: cover;\\r\\n    position: absolute;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n    right: 45px;\\r\\n    border: 2px solid transparent;\\r\\n}\\r\\n.delete:focus {\\r\\n    border: 2px solid rgb(171, 101, 9);\\r\\n}\\r\\n.delete:hover {\\r\\n    border: 2px solid rgb(17, 196, 236);\\r\\n}\\r\\n.delete:active {\\r\\n    border: 2px solid rgb(201, 25, 25);\\r\\n}\\r\\n.search {\\r\\n    margin-top: 10px;\\r\\n}\\r\\n.form-search {\\r\\n    flex-grow: 1;\\r\\n}\\r\\n.note-name {\\r\\n    height: 34px;\\r\\n    text-align: center;\\r\\n    width: auto;\\r\\n}\\r\\n.note-form {\\r\\n    flex-grow: 1;\\r\\n    margin-top: 20px;\\r\\n    margin-bottom: 5px;\\r\\n    padding: 10px 5px;\\r\\n    width: auto;\\r\\n}\\r\\n.form-text {\\r\\n    display: block;\\r\\n    height: 200px;\\r\\n    text-align: left;\\r\\n    width: auto;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n.menu-note {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 318px;\\r\\n    /*width: 100%;*/\\r\\n    border: 1px solid #000000;\\r\\n    padding: 10px;\\r\\n    background-color: #55968a;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    box-shadow: 0 4px 4px 0 rgba(58, 58, 58, 0.5);\\r\\n    border-radius: 5px;\\r\\n    min-height: calc(100vh - 22px);\\r\\n}\\r\\n.note-form {\\r\\n    background-color: white;\\r\\n}\\r\\n.note-form__text {\\r\\n    text-align: start;\\r\\n    height: calc(100% - 50px);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-example/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0-modified | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n\\n/* make sure to set some focus styles for accessibility */\\n:focus {\\n    outline: 0;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\n\\nbody {\\n\\tline-height: 1;\\n}\\n\\nol, ul {\\n\\tlist-style: none;\\n}\\n\\nblockquote, q {\\n\\tquotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\n\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration,\\ninput[type=search]::-webkit-search-results-button,\\ninput[type=search]::-webkit-search-results-decoration {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n}\\n\\ninput[type=search] {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n    -webkit-box-sizing: content-box;\\n    -moz-box-sizing: content-box;\\n    box-sizing: content-box;\\n}\\n\\ntextarea {\\n    overflow: auto;\\n    vertical-align: top;\\n    resize: vertical;\\n}\\n\\n/**\\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\\n */\\n\\naudio,\\ncanvas,\\nvideo {\\n    display: inline-block;\\n    *display: inline;\\n    *zoom: 1;\\n    max-width: 100%;\\n}\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\n\\naudio:not([controls]) {\\n    display: none;\\n    height: 0;\\n}\\n\\n/**\\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\\n * Known issue: no IE 6 support.\\n */\\n\\n[hidden] {\\n    display: none;\\n}\\n\\n/**\\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\\n *    `em` units.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\n\\nhtml {\\n    font-size: 100%; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n    -ms-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/**\\n * Address `outline` inconsistency between Chrome and other browsers.\\n */\\n\\na:focus {\\n    outline: thin dotted;\\n}\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\n\\na:active,\\na:hover {\\n    outline: 0;\\n}\\n\\n/**\\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\\n * 2. Improve image quality when scaled in IE 7.\\n */\\n\\nimg {\\n    border: 0; /* 1 */\\n    -ms-interpolation-mode: bicubic; /* 2 */\\n}\\n\\n/**\\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\\n */\\n\\nfigure {\\n    margin: 0;\\n}\\n\\n/**\\n * Correct margin displayed oddly in IE 6/7.\\n */\\n\\nform {\\n    margin: 0;\\n}\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\n\\nfieldset {\\n    border: 1px solid #c0c0c0;\\n    margin: 0 2px;\\n    padding: 0.35em 0.625em 0.75em;\\n}\\n\\n/**\\n * 1. Correct color not being inherited in IE 6/7/8/9.\\n * 2. Correct text not wrapping in Firefox 3.\\n * 3. Correct alignment displayed oddly in IE 6/7.\\n */\\n\\nlegend {\\n    border: 0; /* 1 */\\n    padding: 0;\\n    white-space: normal; /* 2 */\\n    *margin-left: -7px; /* 3 */\\n}\\n\\n/**\\n * 1. Correct font size not being inherited in all browsers.\\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\\n *    and Chrome.\\n * 3. Improve appearance and consistency in all browsers.\\n */\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    font-size: 100%; /* 1 */\\n    margin: 0; /* 2 */\\n    vertical-align: baseline; /* 3 */\\n    *vertical-align: middle; /* 3 */\\n}\\n\\n/**\\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\n\\nbutton,\\ninput {\\n    line-height: normal;\\n}\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\n */\\n\\nbutton,\\nselect {\\n    text-transform: none;\\n}\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\\n *    Known issue: inner spacing remains in IE 6.\\n */\\n\\nbutton,\\nhtml input[type=\\\"button\\\"], /* 1 */\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n    -webkit-appearance: button; /* 2 */\\n    cursor: pointer; /* 3 */\\n    *overflow: visible;  /* 4 */\\n}\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\n\\nbutton[disabled],\\nhtml input[disabled] {\\n    cursor: default;\\n}\\n\\n/**\\n * 1. Address box sizing set to content-box in IE 8/9.\\n * 2. Remove excess padding in IE 8/9.\\n * 3. Remove excess padding in IE 7.\\n *    Known issue: excess padding remains in IE 6.\\n */\\n\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n    *height: 13px; /* 3 */\\n    *width: 13px; /* 3 */\\n}\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\n *    (include `-moz` to future-proof).\\n */\\n\\ninput[type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    -moz-box-sizing: content-box;\\n    -webkit-box-sizing: content-box; /* 2 */\\n    box-sizing: content-box;\\n}\\n\\n/**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\n\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n}\\n\\n/**\\n * Remove inner padding and border in Firefox 3+.\\n */\\n\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n    border: 0;\\n    padding: 0;\\n}\\n\\n/**\\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\\n * 2. Improve readability and alignment in all browsers.\\n */\\n\\ntextarea {\\n    overflow: auto; /* 1 */\\n    vertical-align: top; /* 2 */\\n}\\n\\n/**\\n * Remove most spacing between table cells.\\n */\\n\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\\nhtml,\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    color: #222;\\n}\\n\\n\\n::-moz-selection {\\n    background: #b3d4fc;\\n    text-shadow: none;\\n}\\n\\n::selection {\\n    background: #b3d4fc;\\n    text-shadow: none;\\n}\\n\\nimg {\\n    vertical-align: middle;\\n}\\n\\nfieldset {\\n    border: 0;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\ntextarea {\\n    resize: vertical;\\n}\\n\\n.chromeframe {\\n    margin: 0.2em 0;\\n    background: #ccc;\\n    color: #000;\\n    padding: 0.2em 0;\\n}\\nbutton {\\n    border: none;\\n    outline: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-example/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-example/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-example/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-example/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-example/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-example/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-example/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-example/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-example/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-example/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-example/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/styles/img/delete.svg":
/*!***********************************!*\
  !*** ./src/styles/img/delete.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88dc3a2855e5ec7e0195.svg\";\n\n//# sourceURL=webpack://webpack-example/./src/styles/img/delete.svg?");

/***/ }),

/***/ "./src/styles/img/open-off.svg":
/*!*************************************!*\
  !*** ./src/styles/img/open-off.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5342e35ee8a055258eef.svg\";\n\n//# sourceURL=webpack://webpack-example/./src/styles/img/open-off.svg?");

/***/ }),

/***/ "./src/styles/img/open-on.svg":
/*!************************************!*\
  !*** ./src/styles/img/open-on.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d6f7177832c7efb46e5.svg\";\n\n//# sourceURL=webpack://webpack-example/./src/styles/img/open-on.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;