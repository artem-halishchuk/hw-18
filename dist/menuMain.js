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

/***/ "./src/app/menuMain.js":
/*!*****************************!*\
  !*** ./src/app/menuMain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMain)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MenuMain = /*#__PURE__*/function () {\n  function MenuMain(blockInsert, removeBlock, container) {\n    _classCallCheck(this, MenuMain);\n\n    this.blockInsert = blockInsert;\n    this.activeElement = null;\n    this.ul = null;\n    this.removeBlock = removeBlock;\n    this.container = container;\n    this.createMenu();\n  }\n\n  _createClass(MenuMain, [{\n    key: \"createMenu\",\n    value: function createMenu() {\n      var _this = this;\n\n      var container = document.createElement('div');\n      container.classList.add(this.container);\n      this.blockInsert.append(container);\n      var formWrapper = document.createElement('div');\n      formWrapper.classList.add('form');\n      container.append(formWrapper);\n      var input = document.createElement('input');\n      input.placeholder = 'Имя заметки';\n      input.classList.add('input', 'form-name');\n      formWrapper.append(input);\n      var buttonAdd = document.createElement('button');\n      buttonAdd.classList.add('button', 'form-add');\n      buttonAdd.innerHTML = 'add';\n      formWrapper.append(buttonAdd);\n      var inputText = document.createElement('textarea');\n      inputText.placeholder = 'Текст заметки';\n      inputText.classList.add('input', 'form-text');\n      container.append(inputText);\n      buttonAdd.addEventListener('click', function () {\n        if (input.value.trim() === '') {\n          alert('Заполните поле имени.');\n          return;\n        }\n\n        _this.name = input.value;\n        _this.text = inputText.value;\n\n        _this.createElem();\n\n        input.value = '';\n        inputText.value = '';\n      });\n      this.ul = document.createElement('ul');\n      this.ul.classList.add('content-list');\n      container.append(this.ul);\n      fetch('/notes', {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        _this.deactivateElement();\n\n        if (r.status === 'ok') _this.show(r.data);\n      });\n    }\n  }, {\n    key: \"createElem\",\n    value: function createElem() {\n      var _this2 = this;\n\n      var newNote = new Note(this.name, this.text);\n      fetch('/notes', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json;charset=utf-8'\n        },\n        body: JSON.stringify({\n          \"name\": this.name,\n          \"note\": this.text\n        })\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.status === 'error') {\n          alert('Ошибка при добавлении!');\n          return;\n        }\n\n        fetch('/notes', {\n          method: 'GET',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        }).then(function (r) {\n          return r.json();\n        }).then(function (r) {\n          _this2.deactivateElement();\n\n          if (r.status === 'ok') _this2.show(r.data);\n        });\n      });\n    }\n  }, {\n    key: \"show\",\n    value: function show(arr) {\n      var _this3 = this;\n\n      this.ul.innerHTML = '';\n      if (!arr) return;\n      arr.map(function (e, i) {\n        if (!e) return;\n        var li = document.createElement('li');\n        li.classList.add('content-item');\n\n        _this3.ul.append(li);\n\n        var buttonShow = document.createElement('button');\n        buttonShow.classList.add('content-item-name');\n        buttonShow.innerHTML = e.name;\n        li.append(buttonShow);\n        li.addEventListener('click', function (event) {\n          if (event.target.matches('.content-item-name-active')) return;\n          if (e === _this3.activeElement) buttonShow.classList.add('content-item-name-active');\n\n          _this3.activeElem(event.target);\n        });\n        if (e === _this3.activeElement) buttonShow.classList.add('content-item-name-active');\n        li.dataset.index = i;\n\n        _this3.ul.childNodes.forEach(function (e) {\n          e.firstChild.classList.remove('content-item-name-active');\n          if (e.dataset.index === _this3.index) e.firstChild.classList.add('content-item-name-active');\n        });\n      });\n    }\n  }, {\n    key: \"activeElem\",\n    value: function activeElem(event) {\n      var _this4 = this;\n\n      if (!event) return;\n      fetch('/notes', {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.status !== 'ok') return;\n        _this4.index = event.parentNode.dataset.index;\n        _this4.activeElement = r.data[_this4.index];\n\n        _this4.ul.childNodes.forEach(function (e) {\n          e.firstChild.classList.remove('content-item-name-active');\n          if (e.dataset.index === _this4.index) e.firstChild.classList.add('content-item-name-active');\n        });\n\n        _this4.show(r.data);\n\n        _this4.display();\n      });\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      if (!this.activeElement && document.querySelector(this.removeBlock)) {\n        document.querySelector(this.removeBlock).style.display = 'none';\n      }\n\n      var menuNote;\n\n      if (this.activeElement) {\n        if (document.querySelector(this.removeBlock)) {\n          document.querySelector(this.removeBlock).remove();\n        }\n\n        var getBlockApp = document.querySelector('.app');\n        menuNote = new MenuNote(getBlockApp, this.index);\n        menuNote.createMenu();\n      }\n    }\n  }, {\n    key: \"deactivateElement\",\n    value: function deactivateElement() {\n      var _this5 = this;\n\n      var click = null;\n      document.addEventListener('click', function (event) {\n        click = event.target;\n        if (!click.matches(\".\".concat(_this5.container))) return;\n        _this5.activeElement = null;\n        _this5.index = null;\n\n        _this5.ul.childNodes.forEach(function (e) {\n          e.firstChild.classList.remove('content-item-name-active');\n        });\n\n        if (document.querySelector('body .menu-note')) {\n          document.querySelector('.menu-note').style.display = 'none';\n        }\n      });\n    }\n  }]);\n\n  return MenuMain;\n}();\n\n\n\nvar MenuNote = /*#__PURE__*/function () {\n  function MenuNote(blockInsert, index) {\n    _classCallCheck(this, MenuNote);\n\n    this.blockInsert = blockInsert;\n    this.index = index;\n  }\n\n  _createClass(MenuNote, [{\n    key: \"createMenu\",\n    value: function createMenu() {\n      var _this6 = this;\n\n      var container = document.createElement('div');\n      container.classList.add('menu-note');\n      this.blockInsert.append(container);\n      var input = document.createElement('div');\n      input.classList.add('note-form', 'note-form__name');\n      container.append(input);\n      var textarea = document.createElement('div');\n      textarea.classList.add('note-form', 'note-form__text');\n      container.append(textarea);\n      fetch('/notes', {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.status !== 'ok') return;\n        input.innerHTML = r.data[_this6.index].name;\n        textarea.innerHTML = r.data[_this6.index].note;\n      });\n    }\n  }]);\n\n  return MenuNote;\n}();\n\nvar Note = function Note(name, note) {\n  _classCallCheck(this, Note);\n\n  this.name = name;\n  this.note = note;\n};\n\n//# sourceURL=webpack://webpack-example/./src/app/menuMain.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/menuMain.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;