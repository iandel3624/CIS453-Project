module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme */ "./src/theme/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store */ "./src/store/index.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_slices_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/slices/common */ "./src/store/slices/common.ts");
/* harmony import */ var _store_thunk_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/thunk/post */ "./src/store/thunk/post.ts");
/* harmony import */ var _store_thunk_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @store/thunk/cart */ "./src/store/thunk/cart.ts");
/* harmony import */ var _store_thunk_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @store/thunk/products */ "./src/store/thunk/products.ts");

var _jsxFileName = "C:\\Users\\Ian\\Desktop\\ECPI CIS\\CIS453\\Week 1\\Lab\\CIS453 React Lab\\main\\source\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  const WrappedComponent = () => {
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
    const {
      visible,
      message,
      type
    } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.common.toast);
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
      dispatch(Object(_store_thunk_post__WEBPACK_IMPORTED_MODULE_9__["handlePostCategories"])());
      dispatch(Object(_store_thunk_cart__WEBPACK_IMPORTED_MODULE_10__["handleGetCart"])());
      dispatch(Object(_store_thunk_products__WEBPACK_IMPORTED_MODULE_11__["handleGetProductCategories"])());
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
      if (visible) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"][type || 'info'](message, {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].POSITION.BOTTOM_LEFT,
          onClose: () => dispatch(_store_slices_common__WEBPACK_IMPORTED_MODULE_8__["commonActions"].hideToast())
        });
      }
    }, [visible]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
        autoClose: 1500,
        style: {
          minHeight: 50
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrappedComponent, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/services/cart.ts":
/*!******************************!*\
  !*** ./src/services/cart.ts ***!
  \******************************/
/*! exports provided: getCarts, addToCart, updateCartQuantity, removeFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarts", function() { return getCarts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartQuantity", function() { return updateCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony import */ var _connection_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-instance */ "./src/services/connection-instance.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const getCarts = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('cart', {
  params
});
const addToCart = product => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].post('cart', product);
const updateCartQuantity = (_ref) => {
  let {
    id
  } = _ref,
      data = _objectWithoutProperties(_ref, ["id"]);

  return _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].patch('cart/' + id, data);
};
const removeFromCart = id => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].delete('cart/' + id);

/***/ }),

/***/ "./src/services/connection-instance.ts":
/*!*********************************************!*\
  !*** ./src/services/connection-instance.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isArray */ "lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_1__);


const ConnectionInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000
});
ConnectionInstance.interceptors.request.use(requestConfig => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    console.info('API Request:', requestConfig);
  }

  return requestConfig;
}, function (error) {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    console.error('API Request Error:', error);
  }

  return Promise.reject(error);
});
ConnectionInstance.interceptors.response.use(response => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    console.info('API Response:', response);
  } //TODO: Fell free to remove this


  if (lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default()(response.data) && response.headers['x-total-count']) {
    response.meta = {
      total: Number(response.headers['x-total-count']),
      page: response.config.params['_page'] || 1,
      take: response.config.params['_limit'],
      pageCount: response.config.params['_limit'] && Math.ceil(Number(response.headers['x-total-count']) / response.config.params['_limit'])
    };
  }

  return response;
}, error => {
  var _error$response, _error$response$data;

  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    console.error('API Response Error:', error);
  }

  const errorMessage = error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message;

  if (errorMessage) {
    return Promise.reject(new Error(errorMessage));
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (ConnectionInstance);

/***/ }),

/***/ "./src/services/post.ts":
/*!******************************!*\
  !*** ./src/services/post.ts ***!
  \******************************/
/*! exports provided: getPosts, getMasonryPosts, getMasonryWidePosts, getPostCategories, getPostDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasonryPosts", function() { return getMasonryPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasonryWidePosts", function() { return getMasonryWidePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostCategories", function() { return getPostCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDetail", function() { return getPostDetail; });
/* harmony import */ var _connection_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-instance */ "./src/services/connection-instance.ts");

const getPosts = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('posts', {
  params
});
const getMasonryPosts = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('posts-masonry', {
  params
});
const getMasonryWidePosts = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('posts-masonry-wide', {
  params
});
const getPostCategories = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('post-categories', {
  params
});
const getPostDetail = id => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('posts/' + id);

/***/ }),

/***/ "./src/services/products.ts":
/*!**********************************!*\
  !*** ./src/services/products.ts ***!
  \**********************************/
/*! exports provided: getProducts, getProductDetail, deleteProduct, getProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategory", function() { return getProductCategory; });
/* harmony import */ var _connection_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-instance */ "./src/services/connection-instance.ts");

const getProducts = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('products', {
  params
});
const getProductDetail = id => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + id);
const deleteProduct = id => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].delete('products/' + id);
const getProductCategory = params => _connection_instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('product-categories', {
  params
});

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: useAppDispatch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.ts");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);




const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  middleware: getDefaultMiddleware => {
    return process.env.NEXT_PUBLIC_NODE_ENV !== 'production' ? getDefaultMiddleware().concat(redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a) : getDefaultMiddleware();
  }
});
const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/slices/common */ "./src/store/slices/common.ts");
/* harmony import */ var _store_slices_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/slices/posts */ "./src/store/slices/posts.ts");
/* harmony import */ var _store_slices_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/slices/videos */ "./src/store/slices/videos.ts");
/* harmony import */ var _store_slices_author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/slices/author */ "./src/store/slices/author.ts");
/* harmony import */ var _store_slices_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/slices/products */ "./src/store/slices/products.ts");
/* harmony import */ var _store_slices_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/slices/cart */ "./src/store/slices/cart.ts");







const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  common: _store_slices_common__WEBPACK_IMPORTED_MODULE_1__["commonReducer"],
  posts: _store_slices_posts__WEBPACK_IMPORTED_MODULE_2__["postReducer"],
  video: _store_slices_videos__WEBPACK_IMPORTED_MODULE_3__["videoReducer"],
  author: _store_slices_author__WEBPACK_IMPORTED_MODULE_4__["authorReducer"],
  product: _store_slices_products__WEBPACK_IMPORTED_MODULE_5__["productReducer"],
  cart: _store_slices_cart__WEBPACK_IMPORTED_MODULE_6__["cartReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/store/shared/index.ts":
/*!***********************************!*\
  !*** ./src/store/shared/index.ts ***!
  \***********************************/
/*! exports provided: RequestStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatus", function() { return RequestStatus; });
let RequestStatus;

(function (RequestStatus) {
  RequestStatus[RequestStatus["Idle"] = 0] = "Idle";
  RequestStatus[RequestStatus["Loading"] = 1] = "Loading";
  RequestStatus[RequestStatus["Success"] = 2] = "Success";
  RequestStatus[RequestStatus["Failed"] = 3] = "Failed";
})(RequestStatus || (RequestStatus = {}));

/***/ }),

/***/ "./src/store/slices/author.ts":
/*!************************************!*\
  !*** ./src/store/slices/author.ts ***!
  \************************************/
/*! exports provided: authorActions, authorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorActions", function() { return authorActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorReducer", function() { return authorReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  detail: {
    fetching: false
  },
  posts: {
    fetching: false,
    data: []
  }
};

const getAuthorDetailRequest = state => {
  delete state.detail.error;
  state.detail.fetching = true;
};

const getAuthorDetailSuccess = (state, {
  payload
}) => {
  state.detail.data = payload;
  state.detail.fetching = false;
};

const getAuthorDetailFailed = (state, {
  payload
}) => {
  state.detail.error = payload;
  state.detail.fetching = false;
};

const getAuthorPostsRequest = state => {
  delete state.posts.error;
  state.posts.fetching = true;
};

const getAuthorPostsSuccess = (state, {
  payload
}) => {
  state.posts.data = payload.data;
  state.posts.meta = payload.meta;
  state.posts.fetching = false;
};

const getAuthorPostsFailed = (state, {
  payload
}) => {
  state.posts.error = payload;
  state.posts.fetching = false;
};

const authorSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'author',
  initialState,
  reducers: {
    getAuthorDetailRequest,
    getAuthorDetailSuccess,
    getAuthorDetailFailed,
    getAuthorPostsRequest,
    getAuthorPostsSuccess,
    getAuthorPostsFailed
  }
});
const authorActions = authorSlice.actions;
const authorReducer = authorSlice.reducer;

/***/ }),

/***/ "./src/store/slices/cart.ts":
/*!**********************************!*\
  !*** ./src/store/slices/cart.ts ***!
  \**********************************/
/*! exports provided: cartActions, cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartActions", function() { return cartActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/shared */ "./src/store/shared/index.ts");


const initialState = {
  list: {
    fetching: false,
    data: []
  },
  addToCart: {
    status: _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Idle
  },
  removeFromCart: {
    status: _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Idle
  },
  updateCartQuantity: {
    status: _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Idle
  }
};

const getCartRequest = state => {
  delete state.list.error;
  state.list.fetching = true;
};

const getCartSuccess = (state, {
  payload
}) => {
  state.list.data = payload.data;
  state.list.fetching = false;
};

const getCartFailed = (state, {
  payload
}) => {
  state.list.error = payload;
  state.list.fetching = false;
};

const addToCartRequest = state => {
  delete state.addToCart.error;
  state.addToCart.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Loading;
};

const addToCartSuccess = state => {
  state.addToCart.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Success;
};

const addToCartFailed = (state, {
  payload
}) => {
  state.addToCart.error = payload;
  state.addToCart.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Failed;
};

const removeFromCartRequest = state => {
  delete state.removeFromCart.error;
  state.removeFromCart.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Loading;
};

const removeFromCartSuccess = state => {
  state.removeFromCart.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Success;
};

const removeFromCartFailed = (state, {
  payload
}) => {
  state.removeFromCart.error = payload;
  state.removeFromCart.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Failed;
};

const updateCartQuantityRequest = state => {
  delete state.updateCartQuantity.error;
  state.updateCartQuantity.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Loading;
};

const updateCartQuantitySuccess = state => {
  state.updateCartQuantity.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Success;
};

const updateCartQuantityFailed = (state, {
  payload
}) => {
  state.updateCartQuantity.error = payload;
  state.updateCartQuantity.status = _store_shared__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].Failed;
};

const cartSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'cart',
  initialState,
  reducers: {
    getCartRequest,
    getCartSuccess,
    getCartFailed,
    addToCartRequest,
    addToCartSuccess,
    addToCartFailed,
    removeFromCartRequest,
    removeFromCartSuccess,
    removeFromCartFailed,
    updateCartQuantityRequest,
    updateCartQuantitySuccess,
    updateCartQuantityFailed
  }
});
const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

/***/ }),

/***/ "./src/store/slices/common.ts":
/*!************************************!*\
  !*** ./src/store/slices/common.ts ***!
  \************************************/
/*! exports provided: commonActions, commonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonActions", function() { return commonActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonReducer", function() { return commonReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  toast: {
    visible: false,
    message: 'Some message'
  }
};

const showToast = (state, {
  payload
}) => {
  state.toast.visible = true;
  state.toast.message = payload.message;
  state.toast.type = payload.type;
};

const hideToast = (state, action) => {
  state.toast.visible = false;
};

const commonSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'common',
  initialState,
  reducers: {
    showToast,
    hideToast
  }
});
const commonActions = commonSlice.actions;
const commonReducer = commonSlice.reducer;

/***/ }),

/***/ "./src/store/slices/posts.ts":
/*!***********************************!*\
  !*** ./src/store/slices/posts.ts ***!
  \***********************************/
/*! exports provided: PostCoverType, PostCategoriesType, postActions, postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoverType", function() { return PostCoverType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCategoriesType", function() { return PostCategoriesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postActions", function() { return postActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let PostCoverType;

(function (PostCoverType) {
  PostCoverType["IMAGE"] = "image";
  PostCoverType["AUDIO"] = "audio";
  PostCoverType["VIDEO"] = "video";
  PostCoverType["SLIDE"] = "slide";
  PostCoverType["SPLIT"] = "split";
})(PostCoverType || (PostCoverType = {}));

let PostCategoriesType;

(function (PostCategoriesType) {
  PostCategoriesType["Bar"] = "bar";
})(PostCategoriesType || (PostCategoriesType = {}));

const initialState = {
  list: {
    fetching: false,
    data: []
  },
  related: {
    fetching: false,
    data: []
  },
  destination: {
    fetching: false,
    data: []
  },
  guide: {
    fetching: false,
    data: []
  },
  lastest: {
    fetching: false,
    data: []
  },
  trendingList: {
    fetching: false,
    data: []
  },
  detail: {
    fetching: false
  },
  footerList: {
    fetching: false,
    data: []
  },
  categories: {
    fetching: false,
    data: []
  }
};

const getPostsListRequest = (state, {
  payload
}) => {
  if (payload.loadingMore) {
    state.list.loadingMore = true;
    return;
  }

  state.list.fetching = true;
  delete state.list.error;
};

const getPostsListSuccess = (state, {
  payload
}) => {
  if (state.list.loadingMore) {
    state.list.data = [...state.list.data, ...payload.data];
    state.list.loadingMore = false;
  } else {
    state.list.data = payload.data;
    state.list.fetching = false;
  }

  state.list.meta = payload.meta;
};

const getPostsListFailed = (state, {
  payload
}) => {
  state.list.loadingMore = false;
  state.list.fetching = false;
  state.list.error = payload;
};

const getFooterPostsRequest = state => {
  delete state.footerList.error;
  state.footerList.fetching = true;
};

const getFooterPostsSuccess = (state, {
  payload
}) => {
  state.footerList.data = payload.data;
  state.footerList.fetching = false;
  state.footerList.meta = payload.meta;
};

const getFooterPostsFailed = (state, {
  payload
}) => {
  state.footerList.fetching = false;
  state.footerList.error = payload;
};

const getPostDetailRequest = state => {
  state.detail.fetching = true;
};

const getPostDetailSuccess = (state, {
  payload
}) => {
  state.detail.fetching = false;
  state.detail.data = payload;
};

const getPostDetailFailed = (state, {
  payload
}) => {
  state.detail.fetching = false;
  state.detail.error = payload;
};

const getPostCategoriesRequest = state => {
  delete state.categories.error;
  state.categories.fetching = true;
};

const getPostCategoriesSuccess = (state, {
  payload
}) => {
  state.categories.data = payload.data;
  state.categories.fetching = false;
};

const getPostCategoriesFailed = (state, {
  payload
}) => {
  state.categories.fetching = false;
  state.categories.error = payload;
};

const getTrendingPostsRequest = state => {
  delete state.trendingList.error;
  state.trendingList.fetching = true;
};

const getTrendingPostsSuccess = (state, {
  payload
}) => {
  state.trendingList.data = payload.data;
  state.trendingList.fetching = false;
};

const getTrendingPostsFailed = (state, {
  payload
}) => {
  state.trendingList.fetching = false;
  state.trendingList.error = payload;
};

const getDestinationPostsRequest = state => {
  delete state.destination.error;
  state.destination.fetching = true;
};

const getDestinationPostsSuccess = (state, {
  payload
}) => {
  state.destination.data = payload.data;
  state.destination.fetching = false;
  state.destination.meta = payload.meta;
};

const getDestinationPostsFailed = (state, {
  payload
}) => {
  state.destination.fetching = false;
  state.destination.error = payload;
};

const getGuidePostsRequest = state => {
  delete state.guide.error;
  state.guide.fetching = true;
};

const getGuidePostsSuccess = (state, {
  payload
}) => {
  state.guide.data = payload.data;
  state.guide.fetching = false;
  state.guide.meta = payload.meta;
};

const getGuidePostsFailed = (state, {
  payload
}) => {
  state.guide.fetching = false;
  state.guide.error = payload;
};

const getLastestPostsRequest = state => {
  delete state.lastest.error;
  state.lastest.fetching = true;
};

const getLastestPostsSuccess = (state, {
  payload
}) => {
  state.lastest.data = payload.data;
  state.lastest.fetching = false;
  state.lastest.meta = payload.meta;
};

const getLastestPostsFailed = (state, {
  payload
}) => {
  state.lastest.fetching = false;
  state.lastest.error = payload;
};

const getRelatedPostsRequest = state => {
  delete state.related.error;
  state.related.fetching = true;
};

const getRelatedPostsSuccess = (state, {
  payload
}) => {
  state.related.data = payload.data;
  state.related.fetching = false;
  state.related.meta = payload.meta;
};

const getRelatedtPostsFailed = (state, {
  payload
}) => {
  state.related.fetching = false;
  state.related.error = payload;
};

const postsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'posts',
  initialState,
  reducers: {
    getPostsListRequest,
    getPostsListSuccess,
    getPostsListFailed,
    getPostDetailRequest,
    getPostDetailSuccess,
    getPostDetailFailed,
    getFooterPostsRequest,
    getFooterPostsSuccess,
    getFooterPostsFailed,
    getPostCategoriesRequest,
    getPostCategoriesSuccess,
    getPostCategoriesFailed,
    getTrendingPostsRequest,
    getTrendingPostsSuccess,
    getTrendingPostsFailed,
    getDestinationPostsRequest,
    getDestinationPostsSuccess,
    getDestinationPostsFailed,
    getGuidePostsRequest,
    getGuidePostsSuccess,
    getGuidePostsFailed,
    getLastestPostsRequest,
    getLastestPostsSuccess,
    getLastestPostsFailed,
    getRelatedPostsRequest,
    getRelatedPostsSuccess,
    getRelatedtPostsFailed
  }
});
const postActions = postsSlice.actions;
const postReducer = postsSlice.reducer;

/***/ }),

/***/ "./src/store/slices/products.ts":
/*!**************************************!*\
  !*** ./src/store/slices/products.ts ***!
  \**************************************/
/*! exports provided: productActions, productReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productActions", function() { return productActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productReducer", function() { return productReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  list: {
    fetching: false,
    data: []
  },
  related: {
    fetching: false,
    data: []
  },
  categories: {
    fetching: false,
    data: []
  },
  detail: {
    fetching: false
  }
};

const getProductsRequest = (state, {
  payload
}) => {
  if (payload.loadingMore) {
    state.list.loadingMore = true;
    return;
  }

  state.list.fetching = true;
  delete state.list.error;
};

const getProductsSuccess = (state, {
  payload
}) => {
  if (state.list.loadingMore) {
    state.list.data = [...state.list.data, ...payload.data];
    state.list.loadingMore = false;
  } else {
    state.list.data = payload.data;
    state.list.fetching = false;
  }

  state.list.meta = payload.meta;
};

const getProductsFailed = (state, {
  payload
}) => {
  state.list.loadingMore = false;
  state.list.fetching = false;
  state.list.error = payload;
};

const getRelatedProductsRequest = state => {
  state.related.fetching = true;
  delete state.related.error;
};

const getRelatedProductsSuccess = (state, {
  payload
}) => {
  state.related.data = payload.data;
  state.related.fetching = false;
  state.related.meta = payload.meta;
};

const getRelatedProductsFailed = (state, {
  payload
}) => {
  state.related.fetching = false;
  state.related.error = payload;
};

const getProductCategoriesRequest = state => {
  delete state.categories.error;
  state.categories.fetching = true;
};

const getProductCategoriesSuccess = (state, {
  payload
}) => {
  state.categories.data = payload.data;
  state.categories.meta = payload.meta;
  state.categories.fetching = false;
};

const getProductCategoriesFailed = (state, {
  payload
}) => {
  state.categories.error = payload;
  state.categories.fetching = false;
};

const getProductDetailRequest = state => {
  delete state.detail.error;
  state.detail.fetching = true;
};

const getProductDetailSuccess = (state, {
  payload
}) => {
  state.detail.fetching = false;
  state.detail.data = payload;
};

const getProductDetailFailed = (state, {
  payload
}) => {
  delete state.detail.error;
  state.detail.fetching = true;
  state.detail.error = payload;
};

const productsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'product',
  initialState,
  reducers: {
    getProductsRequest,
    getProductsSuccess,
    getProductsFailed,
    getProductCategoriesRequest,
    getProductCategoriesSuccess,
    getProductCategoriesFailed,
    getProductDetailRequest,
    getProductDetailSuccess,
    getProductDetailFailed,
    getRelatedProductsRequest,
    getRelatedProductsSuccess,
    getRelatedProductsFailed
  }
});
const productActions = productsSlice.actions;
const productReducer = productsSlice.reducer;

/***/ }),

/***/ "./src/store/slices/videos.ts":
/*!************************************!*\
  !*** ./src/store/slices/videos.ts ***!
  \************************************/
/*! exports provided: videoActions, videoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoActions", function() { return videoActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoReducer", function() { return videoReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  list: {
    fetching: false,
    data: []
  }
};

const getVideosListRequest = state => {
  delete state.list.error;
  state.list.fetching = true;
};

const getVideosListSuccess = (state, {
  payload
}) => {
  state.list.data = payload.data;
  state.list.fetching = false;
  state.list.meta = payload.meta;
};

const getVideosListFailed = (state, {
  payload
}) => {
  state.list.fetching = false;
  state.list.error = payload;
};

const videosSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'videos',
  initialState,
  reducers: {
    getVideosListRequest,
    getVideosListSuccess,
    getVideosListFailed
  }
});
const videoActions = videosSlice.actions;
const videoReducer = videosSlice.reducer;

/***/ }),

/***/ "./src/store/thunk/cart.ts":
/*!*********************************!*\
  !*** ./src/store/thunk/cart.ts ***!
  \*********************************/
/*! exports provided: handleGetCart, handleAddToCart, handleRemoveFromCart, handleUpdateCartQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetCart", function() { return handleGetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAddToCart", function() { return handleAddToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRemoveFromCart", function() { return handleRemoveFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleUpdateCartQuantity", function() { return handleUpdateCartQuantity; });
/* harmony import */ var _services_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/cart */ "./src/services/cart.ts");
/* harmony import */ var _store_slices_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/slices/cart */ "./src/store/slices/cart.ts");
/* harmony import */ var _store_slices_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/slices/common */ "./src/store/slices/common.ts");



const handleGetCart = param => async dispatch => {
  try {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].getCartRequest());
    const data = await Object(_services_cart__WEBPACK_IMPORTED_MODULE_0__["getCarts"])(param);
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].getCartSuccess(data));
  } catch (error) {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].getCartFailed(error.message));
  }
};
const handleAddToCart = product => async dispatch => {
  try {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].addToCartRequest());
    await Object(_services_cart__WEBPACK_IMPORTED_MODULE_0__["addToCart"])(product);
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].addToCartSuccess());
    dispatch(_store_slices_common__WEBPACK_IMPORTED_MODULE_2__["commonActions"].showToast({
      message: 'Product added to cart success',
      type: 'success'
    }));
    dispatch(handleGetCart({}));
  } catch (error) {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].addToCartFailed(error.message));
    dispatch(_store_slices_common__WEBPACK_IMPORTED_MODULE_2__["commonActions"].showToast({
      message: 'Product added to cart failed, please try again',
      type: 'error'
    }));
  }
};
const handleRemoveFromCart = id => async dispatch => {
  try {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].removeFromCartRequest());
    await Object(_services_cart__WEBPACK_IMPORTED_MODULE_0__["removeFromCart"])(id);
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].removeFromCartSuccess());
    dispatch(_store_slices_common__WEBPACK_IMPORTED_MODULE_2__["commonActions"].showToast({
      message: 'Product removed from cart success',
      type: 'success'
    }));
    dispatch(handleGetCart());
  } catch (error) {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].removeFromCartFailed(error.message));
    dispatch(_store_slices_common__WEBPACK_IMPORTED_MODULE_2__["commonActions"].showToast({
      message: 'Product removed from cart failed, please try again',
      type: 'error'
    }));
  }
};
const handleUpdateCartQuantity = data => async dispatch => {
  try {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].updateCartQuantityRequest());
    await Object(_services_cart__WEBPACK_IMPORTED_MODULE_0__["updateCartQuantity"])(data);
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].updateCartQuantitySuccess());
    dispatch(handleGetCart());
  } catch (error) {
    dispatch(_store_slices_cart__WEBPACK_IMPORTED_MODULE_1__["cartActions"].updateCartQuantityFailed(error.message));
  }
};

/***/ }),

/***/ "./src/store/thunk/post.ts":
/*!*********************************!*\
  !*** ./src/store/thunk/post.ts ***!
  \*********************************/
/*! exports provided: handleGetPosts, handleFooterPosts, handleGetPostDetail, handlePostCategories, handleGetTrendingPosts, handleGetDestinationPosts, handleGetGuidePosts, handleGetLastestPosts, handleGetRelatedPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetPosts", function() { return handleGetPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleFooterPosts", function() { return handleFooterPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetPostDetail", function() { return handleGetPostDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePostCategories", function() { return handlePostCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetTrendingPosts", function() { return handleGetTrendingPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetDestinationPosts", function() { return handleGetDestinationPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetGuidePosts", function() { return handleGetGuidePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetLastestPosts", function() { return handleGetLastestPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetRelatedPosts", function() { return handleGetRelatedPosts; });
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/post */ "./src/services/post.ts");
/* harmony import */ var _store_slices_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/slices/posts */ "./src/store/slices/posts.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const handleGetPosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostsListRequest(param));
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostsListSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostsListFailed(error.message));
  }
};
const handleFooterPosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getFooterPostsRequest(param));
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getFooterPostsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getFooterPostsFailed(error.message));
  }
};
const handleGetPostDetail = id => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostDetailRequest());
    const {
      data
    } = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPostDetail"])(id);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostDetailSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostsListFailed(error.message));
  }
};
const handlePostCategories = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostCategoriesRequest());
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPostCategories"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostCategoriesSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getPostCategoriesFailed(error.message));
  }
};
const handleGetTrendingPosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getTrendingPostsRequest());
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(_objectSpread(_objectSpread({}, param), {}, {
      isTrending_like: true
    }));
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getTrendingPostsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getTrendingPostsFailed(error.message));
  }
};
const handleGetDestinationPosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getDestinationPostsRequest());
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getDestinationPostsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getDestinationPostsFailed(error.message));
  }
};
const handleGetGuidePosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getGuidePostsRequest());
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getGuidePostsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getGuidePostsFailed(error.message));
  }
};
const handleGetLastestPosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getLastestPostsRequest());
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getLastestPostsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getLastestPostsFailed(error.message));
  }
};
const handleGetRelatedPosts = param => async dispatch => {
  try {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getRelatedPostsRequest());
    const data = await Object(_services_post__WEBPACK_IMPORTED_MODULE_0__["getPosts"])(param);
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getRelatedPostsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_posts__WEBPACK_IMPORTED_MODULE_1__["postActions"].getRelatedtPostsFailed(error.message));
  }
};

/***/ }),

/***/ "./src/store/thunk/products.ts":
/*!*************************************!*\
  !*** ./src/store/thunk/products.ts ***!
  \*************************************/
/*! exports provided: handleGetProducts, handleGetRelatedProducts, handleGetProductCategories, handleGetProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetProducts", function() { return handleGetProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetRelatedProducts", function() { return handleGetRelatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetProductCategories", function() { return handleGetProductCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleGetProductDetail", function() { return handleGetProductDetail; });
/* harmony import */ var _services_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/products */ "./src/services/products.ts");
/* harmony import */ var _store_slices_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/slices/products */ "./src/store/slices/products.ts");



const handleGetProducts = param => async dispatch => {
  try {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductsRequest(param));
    const data = await Object(_services_products__WEBPACK_IMPORTED_MODULE_0__["getProducts"])(param);
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductsFailed(error.message));
  }
};
const handleGetRelatedProducts = param => async dispatch => {
  try {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getRelatedProductsRequest());
    const data = await Object(_services_products__WEBPACK_IMPORTED_MODULE_0__["getProducts"])(param);
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getRelatedProductsSuccess(data));
  } catch (error) {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getRelatedProductsFailed(error.message));
  }
};
const handleGetProductCategories = param => async dispatch => {
  try {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductCategoriesRequest());
    const data = await Object(_services_products__WEBPACK_IMPORTED_MODULE_0__["getProductCategory"])(param);
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductCategoriesSuccess(data));
  } catch (error) {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductCategoriesFailed(error.message));
  }
};
const handleGetProductDetail = id => async dispatch => {
  try {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductDetailRequest());
    const {
      data
    } = await Object(_services_products__WEBPACK_IMPORTED_MODULE_0__["getProductDetail"])(id);
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductDetailSuccess(data));
  } catch (error) {
    dispatch(_store_slices_products__WEBPACK_IMPORTED_MODULE_1__["productActions"].getProductDetailFailed(error.message));
  }
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/theme/index.tsx":
/*!*****************************!*\
  !*** ./src/theme/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    primary: '#e49c86',
    secondary: '#11d2ef',
    third: '#537bdf',
    fourth: '#ffd661',
    error: '#ed4337',
    success: '#5cb85c',
    light: '#f5f5f5'
  },
  schema: {
    gray: {
      base: '#f5f5f5',
      light: '#e1e1e1',
      regular: '#888',
      medium: '#444',
      dark: '#111'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb25uZWN0aW9uLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NsaWNlcy9hdXRob3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NsaWNlcy9jYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zbGljZXMvY29tbW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zbGljZXMvcG9zdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NsaWNlcy9wcm9kdWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2xpY2VzL3ZpZGVvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvdGh1bmsvY2FydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvdGh1bmsvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvdGh1bmsvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNBcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIldyYXBwZWRDb21wb25lbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidmlzaWJsZSIsIm1lc3NhZ2UiLCJ0eXBlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsInRvYXN0IiwidXNlRWZmZWN0IiwiaGFuZGxlUG9zdENhdGVnb3JpZXMiLCJoYW5kbGVHZXRDYXJ0IiwiaGFuZGxlR2V0UHJvZHVjdENhdGVnb3JpZXMiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiQk9UVE9NX0xFRlQiLCJvbkNsb3NlIiwiY29tbW9uQWN0aW9ucyIsImhpZGVUb2FzdCIsInRoZW1lIiwibWluSGVpZ2h0Iiwic3RvcmUiLCJnZXRDYXJ0cyIsInBhcmFtcyIsIkNvbm5lY3Rpb25JbnN0YW5jZSIsImdldCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwb3N0IiwidXBkYXRlQ2FydFF1YW50aXR5IiwiaWQiLCJkYXRhIiwicGF0Y2giLCJyZW1vdmVGcm9tQ2FydCIsImRlbGV0ZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwicmVxdWVzdENvbmZpZyIsIk5FWFRfUFVCTElDX05PREVfRU5WIiwiY29uc29sZSIsImluZm8iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImlzQXJyYXkiLCJoZWFkZXJzIiwibWV0YSIsInRvdGFsIiwiTnVtYmVyIiwicGFnZSIsImNvbmZpZyIsInRha2UiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsImVycm9yTWVzc2FnZSIsIkVycm9yIiwiZ2V0UG9zdHMiLCJnZXRNYXNvbnJ5UG9zdHMiLCJnZXRNYXNvbnJ5V2lkZVBvc3RzIiwiZ2V0UG9zdENhdGVnb3JpZXMiLCJnZXRQb3N0RGV0YWlsIiwiZ2V0UHJvZHVjdHMiLCJnZXRQcm9kdWN0RGV0YWlsIiwiZGVsZXRlUHJvZHVjdCIsImdldFByb2R1Y3RDYXRlZ29yeSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInJvb3RSZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0IiwibG9nZ2VyIiwidXNlQXBwRGlzcGF0Y2giLCJjb21iaW5lUmVkdWNlcnMiLCJjb21tb25SZWR1Y2VyIiwicG9zdHMiLCJwb3N0UmVkdWNlciIsInZpZGVvIiwidmlkZW9SZWR1Y2VyIiwiYXV0aG9yIiwiYXV0aG9yUmVkdWNlciIsInByb2R1Y3RSZWR1Y2VyIiwiY2FydCIsImNhcnRSZWR1Y2VyIiwiUmVxdWVzdFN0YXR1cyIsImluaXRpYWxTdGF0ZSIsImRldGFpbCIsImZldGNoaW5nIiwiZ2V0QXV0aG9yRGV0YWlsUmVxdWVzdCIsImdldEF1dGhvckRldGFpbFN1Y2Nlc3MiLCJwYXlsb2FkIiwiZ2V0QXV0aG9yRGV0YWlsRmFpbGVkIiwiZ2V0QXV0aG9yUG9zdHNSZXF1ZXN0IiwiZ2V0QXV0aG9yUG9zdHNTdWNjZXNzIiwiZ2V0QXV0aG9yUG9zdHNGYWlsZWQiLCJhdXRob3JTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYXV0aG9yQWN0aW9ucyIsImFjdGlvbnMiLCJsaXN0Iiwic3RhdHVzIiwiSWRsZSIsImdldENhcnRSZXF1ZXN0IiwiZ2V0Q2FydFN1Y2Nlc3MiLCJnZXRDYXJ0RmFpbGVkIiwiYWRkVG9DYXJ0UmVxdWVzdCIsIkxvYWRpbmciLCJhZGRUb0NhcnRTdWNjZXNzIiwiU3VjY2VzcyIsImFkZFRvQ2FydEZhaWxlZCIsIkZhaWxlZCIsInJlbW92ZUZyb21DYXJ0UmVxdWVzdCIsInJlbW92ZUZyb21DYXJ0U3VjY2VzcyIsInJlbW92ZUZyb21DYXJ0RmFpbGVkIiwidXBkYXRlQ2FydFF1YW50aXR5UmVxdWVzdCIsInVwZGF0ZUNhcnRRdWFudGl0eVN1Y2Nlc3MiLCJ1cGRhdGVDYXJ0UXVhbnRpdHlGYWlsZWQiLCJjYXJ0U2xpY2UiLCJjYXJ0QWN0aW9ucyIsInNob3dUb2FzdCIsImFjdGlvbiIsImNvbW1vblNsaWNlIiwiUG9zdENvdmVyVHlwZSIsIlBvc3RDYXRlZ29yaWVzVHlwZSIsInJlbGF0ZWQiLCJkZXN0aW5hdGlvbiIsImd1aWRlIiwibGFzdGVzdCIsInRyZW5kaW5nTGlzdCIsImZvb3Rlckxpc3QiLCJjYXRlZ29yaWVzIiwiZ2V0UG9zdHNMaXN0UmVxdWVzdCIsImxvYWRpbmdNb3JlIiwiZ2V0UG9zdHNMaXN0U3VjY2VzcyIsImdldFBvc3RzTGlzdEZhaWxlZCIsImdldEZvb3RlclBvc3RzUmVxdWVzdCIsImdldEZvb3RlclBvc3RzU3VjY2VzcyIsImdldEZvb3RlclBvc3RzRmFpbGVkIiwiZ2V0UG9zdERldGFpbFJlcXVlc3QiLCJnZXRQb3N0RGV0YWlsU3VjY2VzcyIsImdldFBvc3REZXRhaWxGYWlsZWQiLCJnZXRQb3N0Q2F0ZWdvcmllc1JlcXVlc3QiLCJnZXRQb3N0Q2F0ZWdvcmllc1N1Y2Nlc3MiLCJnZXRQb3N0Q2F0ZWdvcmllc0ZhaWxlZCIsImdldFRyZW5kaW5nUG9zdHNSZXF1ZXN0IiwiZ2V0VHJlbmRpbmdQb3N0c1N1Y2Nlc3MiLCJnZXRUcmVuZGluZ1Bvc3RzRmFpbGVkIiwiZ2V0RGVzdGluYXRpb25Qb3N0c1JlcXVlc3QiLCJnZXREZXN0aW5hdGlvblBvc3RzU3VjY2VzcyIsImdldERlc3RpbmF0aW9uUG9zdHNGYWlsZWQiLCJnZXRHdWlkZVBvc3RzUmVxdWVzdCIsImdldEd1aWRlUG9zdHNTdWNjZXNzIiwiZ2V0R3VpZGVQb3N0c0ZhaWxlZCIsImdldExhc3Rlc3RQb3N0c1JlcXVlc3QiLCJnZXRMYXN0ZXN0UG9zdHNTdWNjZXNzIiwiZ2V0TGFzdGVzdFBvc3RzRmFpbGVkIiwiZ2V0UmVsYXRlZFBvc3RzUmVxdWVzdCIsImdldFJlbGF0ZWRQb3N0c1N1Y2Nlc3MiLCJnZXRSZWxhdGVkdFBvc3RzRmFpbGVkIiwicG9zdHNTbGljZSIsInBvc3RBY3Rpb25zIiwiZ2V0UHJvZHVjdHNSZXF1ZXN0IiwiZ2V0UHJvZHVjdHNTdWNjZXNzIiwiZ2V0UHJvZHVjdHNGYWlsZWQiLCJnZXRSZWxhdGVkUHJvZHVjdHNSZXF1ZXN0IiwiZ2V0UmVsYXRlZFByb2R1Y3RzU3VjY2VzcyIsImdldFJlbGF0ZWRQcm9kdWN0c0ZhaWxlZCIsImdldFByb2R1Y3RDYXRlZ29yaWVzUmVxdWVzdCIsImdldFByb2R1Y3RDYXRlZ29yaWVzU3VjY2VzcyIsImdldFByb2R1Y3RDYXRlZ29yaWVzRmFpbGVkIiwiZ2V0UHJvZHVjdERldGFpbFJlcXVlc3QiLCJnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyIsImdldFByb2R1Y3REZXRhaWxGYWlsZWQiLCJwcm9kdWN0c1NsaWNlIiwicHJvZHVjdEFjdGlvbnMiLCJnZXRWaWRlb3NMaXN0UmVxdWVzdCIsImdldFZpZGVvc0xpc3RTdWNjZXNzIiwiZ2V0VmlkZW9zTGlzdEZhaWxlZCIsInZpZGVvc1NsaWNlIiwidmlkZW9BY3Rpb25zIiwicGFyYW0iLCJoYW5kbGVBZGRUb0NhcnQiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImhhbmRsZVVwZGF0ZUNhcnRRdWFudGl0eSIsImhhbmRsZUdldFBvc3RzIiwiaGFuZGxlRm9vdGVyUG9zdHMiLCJoYW5kbGVHZXRQb3N0RGV0YWlsIiwiaGFuZGxlR2V0VHJlbmRpbmdQb3N0cyIsImlzVHJlbmRpbmdfbGlrZSIsImhhbmRsZUdldERlc3RpbmF0aW9uUG9zdHMiLCJoYW5kbGVHZXRHdWlkZVBvc3RzIiwiaGFuZGxlR2V0TGFzdGVzdFBvc3RzIiwiaGFuZGxlR2V0UmVsYXRlZFBvc3RzIiwiaGFuZGxlR2V0UHJvZHVjdHMiLCJoYW5kbGVHZXRSZWxhdGVkUHJvZHVjdHMiLCJoYW5kbGVHZXRQcm9kdWN0RGV0YWlsIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRoaXJkIiwiZm91cnRoIiwic3VjY2VzcyIsImxpZ2h0Iiwic2NoZW1hIiwiZ3JheSIsImJhc2UiLCJyZWd1bGFyIiwibWVkaXVtIiwiZGFyayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmUDtBQUFBLE1BQU1nQixLQUFpQixHQUFHO0FBQ3hCNkwsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxTQURIO0FBRU5DLGFBQVMsRUFBRSxTQUZMO0FBR05DLFNBQUssRUFBRSxTQUhEO0FBSU5DLFVBQU0sRUFBRSxTQUpGO0FBS05uSyxTQUFLLEVBQUUsU0FMRDtBQU1Ob0ssV0FBTyxFQUFFLFNBTkg7QUFPTkMsU0FBSyxFQUFFO0FBUEQsR0FEZ0I7QUFVeEJDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFLFNBREY7QUFFSkgsV0FBSyxFQUFFLFNBRkg7QUFHSkksYUFBTyxFQUFFLE1BSEw7QUFJSkMsWUFBTSxFQUFFLE1BSko7QUFLSkMsVUFBSSxFQUFFO0FBTEY7QUFEQTtBQVZnQixDQUExQjtBQXFCZXpNLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICdAc3R5bGVzL3N0eWxlcy5zY3NzJztcbmltcG9ydCB0aGVtZSBmcm9tICdAdGhlbWUnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdG9yZSwgeyBBcHBTdGF0ZSB9IGZyb20gJ0BzdG9yZSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21tb25BY3Rpb25zIH0gZnJvbSAnQHN0b3JlL3NsaWNlcy9jb21tb24nO1xuaW1wb3J0IHsgaGFuZGxlUG9zdENhdGVnb3JpZXMgfSBmcm9tICdAc3RvcmUvdGh1bmsvcG9zdCc7XG5pbXBvcnQgeyBoYW5kbGVHZXRDYXJ0IH0gZnJvbSAnQHN0b3JlL3RodW5rL2NhcnQnO1xuaW1wb3J0IHsgaGFuZGxlR2V0UHJvZHVjdENhdGVnb3JpZXMgfSBmcm9tICdAc3RvcmUvdGh1bmsvcHJvZHVjdHMnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IHsgQ29tcG9uZW50OiBhbnk7IHBhZ2VQcm9wczogYW55IH0pIHtcbiAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyB2aXNpYmxlLCBtZXNzYWdlLCB0eXBlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5jb21tb24udG9hc3QpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGhhbmRsZVBvc3RDYXRlZ29yaWVzKCkpO1xuICAgICAgZGlzcGF0Y2goaGFuZGxlR2V0Q2FydCgpKTtcbiAgICAgIGRpc3BhdGNoKGhhbmRsZUdldFByb2R1Y3RDYXRlZ29yaWVzKCkpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICB0b2FzdFt0eXBlIHx8ICdpbmZvJ10obWVzc2FnZSwge1xuICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5CT1RUT01fTEVGVCxcbiAgICAgICAgICBvbkNsb3NlOiAoKSA9PiBkaXNwYXRjaChjb21tb25BY3Rpb25zLmhpZGVUb2FzdCgpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW3Zpc2libGVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciBhdXRvQ2xvc2U9ezE1MDB9IHN0eWxlPXt7IG1pbkhlaWdodDogNTAgfX0gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8V3JhcHBlZENvbXBvbmVudCAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICdAc3RvcmUvc2hhcmVkJztcbmltcG9ydCB7IEFkZFRvQ2FydEJvZHksIENhcnRJdGVtLCBVcGRhdGVDYXJ0UXVhbnRpdHlCb2R5IH0gZnJvbSAnQHN0b3JlL3NsaWNlcy9jYXJ0JztcbmltcG9ydCBDb25uZWN0aW9uSW5zdGFuY2UgZnJvbSAnLi9jb25uZWN0aW9uLWluc3RhbmNlJztcblxuZXhwb3J0IGNvbnN0IGdldENhcnRzID0gKHBhcmFtcz86IFF1ZXJ5UGFyYW1zKSA9PiBDb25uZWN0aW9uSW5zdGFuY2UuZ2V0KCdjYXJ0JywgeyBwYXJhbXMgfSk7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdDogQ2FydEl0ZW0pID0+IENvbm5lY3Rpb25JbnN0YW5jZS5wb3N0KCdjYXJ0JywgcHJvZHVjdCk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJ0UXVhbnRpdHkgPSAoeyBpZCwgLi4uZGF0YSB9OiBVcGRhdGVDYXJ0UXVhbnRpdHlCb2R5KSA9PlxuICBDb25uZWN0aW9uSW5zdGFuY2UucGF0Y2goJ2NhcnQvJyArIGlkLCBkYXRhKTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGlkOiBudW1iZXIgfCBzdHJpbmcpID0+IENvbm5lY3Rpb25JbnN0YW5jZS5kZWxldGUoJ2NhcnQvJyArIGlkKTtcbiIsImltcG9ydCB7IFJlc3BvbmVNZXRhIH0gZnJvbSAnQHN0b3JlL3NoYXJlZCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuXG5jb25zdCBDb25uZWN0aW9uSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCxcbiAgdGltZW91dDogMTAwMDAsXG59KTtcblxuQ29ubmVjdGlvbkluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgKHJlcXVlc3RDb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZykgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0FQSSBSZXF1ZXN0OicsIHJlcXVlc3RDb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdENvbmZpZztcbiAgfSxcbiAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBSZXF1ZXN0IEVycm9yOicsIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfSxcbik7XG5cbkNvbm5lY3Rpb25JbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5pbmZvKCdBUEkgUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgIH1cblxuICAgIC8vVE9ETzogRmVsbCBmcmVlIHRvIHJlbW92ZSB0aGlzXG4gICAgaWYgKGlzQXJyYXkocmVzcG9uc2UuZGF0YSkgJiYgcmVzcG9uc2UuaGVhZGVyc1sneC10b3RhbC1jb3VudCddKSB7XG4gICAgICAocmVzcG9uc2UgYXMgQXhpb3NSZXNwb25zZSAmIHsgbWV0YTogUmVzcG9uZU1ldGEgfSkubWV0YSA9IHtcbiAgICAgICAgdG90YWw6IE51bWJlcihyZXNwb25zZS5oZWFkZXJzWyd4LXRvdGFsLWNvdW50J10pLFxuICAgICAgICBwYWdlOiByZXNwb25zZS5jb25maWcucGFyYW1zWydfcGFnZSddIHx8IDEsXG4gICAgICAgIHRha2U6IHJlc3BvbnNlLmNvbmZpZy5wYXJhbXNbJ19saW1pdCddLFxuICAgICAgICBwYWdlQ291bnQ6XG4gICAgICAgICAgcmVzcG9uc2UuY29uZmlnLnBhcmFtc1snX2xpbWl0J10gJiZcbiAgICAgICAgICBNYXRoLmNlaWwoTnVtYmVyKHJlc3BvbnNlLmhlYWRlcnNbJ3gtdG90YWwtY291bnQnXSkgLyByZXNwb25zZS5jb25maWcucGFyYW1zWydfbGltaXQnXSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSxcbiAgKGVycm9yKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBSZXNwb25zZSBFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yPy5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGVycm9yTWVzc2FnZSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGlvbkluc3RhbmNlO1xuIiwiaW1wb3J0IENvbm5lY3Rpb25JbnN0YW5jZSBmcm9tICcuL2Nvbm5lY3Rpb24taW5zdGFuY2UnO1xuaW1wb3J0IHsgR2V0UG9zdENhdGVnb3JpZXNQYXJhbXMsIEdldFBvc3RMaXN0TWFyb25yeVBhcmFtcywgR2V0UG9zdExpc3RQYXJhbXMgfSBmcm9tICdAc3RvcmUvc2xpY2VzL3Bvc3RzJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gKHBhcmFtcz86IEdldFBvc3RMaXN0UGFyYW1zKSA9PiBDb25uZWN0aW9uSW5zdGFuY2UuZ2V0KCdwb3N0cycsIHsgcGFyYW1zIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TWFzb25yeVBvc3RzID0gKHBhcmFtcz86IEdldFBvc3RMaXN0TWFyb25yeVBhcmFtcykgPT5cbiAgQ29ubmVjdGlvbkluc3RhbmNlLmdldCgncG9zdHMtbWFzb25yeScsIHsgcGFyYW1zIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TWFzb25yeVdpZGVQb3N0cyA9IChwYXJhbXM/OiBHZXRQb3N0TGlzdE1hcm9ucnlQYXJhbXMpID0+XG4gIENvbm5lY3Rpb25JbnN0YW5jZS5nZXQoJ3Bvc3RzLW1hc29ucnktd2lkZScsIHsgcGFyYW1zIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdENhdGVnb3JpZXMgPSAocGFyYW1zPzogR2V0UG9zdENhdGVnb3JpZXNQYXJhbXMpID0+XG4gIENvbm5lY3Rpb25JbnN0YW5jZS5nZXQoJ3Bvc3QtY2F0ZWdvcmllcycsIHsgcGFyYW1zIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdERldGFpbCA9IChpZDogbnVtYmVyKSA9PiBDb25uZWN0aW9uSW5zdGFuY2UuZ2V0KCdwb3N0cy8nICsgaWQpO1xuIiwiaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICdAc3RvcmUvc2hhcmVkJztcbmltcG9ydCB7IEdldFByb2R1Y3RzTGlzdFBhcmFtcyB9IGZyb20gJ0BzdG9yZS9zbGljZXMvcHJvZHVjdHMnO1xuaW1wb3J0IENvbm5lY3Rpb25JbnN0YW5jZSBmcm9tICcuL2Nvbm5lY3Rpb24taW5zdGFuY2UnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAocGFyYW1zOiBHZXRQcm9kdWN0c0xpc3RQYXJhbXMpID0+IENvbm5lY3Rpb25JbnN0YW5jZS5nZXQoJ3Byb2R1Y3RzJywgeyBwYXJhbXMgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IENvbm5lY3Rpb25JbnN0YW5jZS5nZXQoJ3Byb2R1Y3RzLycgKyBpZCk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gKGlkOiBudW1iZXIpID0+IENvbm5lY3Rpb25JbnN0YW5jZS5kZWxldGUoJ3Byb2R1Y3RzLycgKyBpZCk7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0Q2F0ZWdvcnkgPSAocGFyYW1zPzogUXVlcnlQYXJhbXMpID0+IENvbm5lY3Rpb25JbnN0YW5jZS5nZXQoJ3Byb2R1Y3QtY2F0ZWdvcmllcycsIHsgcGFyYW1zIH0pO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4ge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICA/IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGxvZ2dlcilcbiAgICAgIDogZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcblxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbW1vblJlZHVjZXIgfSBmcm9tICdAc3RvcmUvc2xpY2VzL2NvbW1vbic7XG5pbXBvcnQgeyBwb3N0UmVkdWNlciB9IGZyb20gJ0BzdG9yZS9zbGljZXMvcG9zdHMnO1xuaW1wb3J0IHsgdmlkZW9SZWR1Y2VyIH0gZnJvbSAnQHN0b3JlL3NsaWNlcy92aWRlb3MnO1xuaW1wb3J0IHsgYXV0aG9yUmVkdWNlciB9IGZyb20gJ0BzdG9yZS9zbGljZXMvYXV0aG9yJztcbmltcG9ydCB7IHByb2R1Y3RSZWR1Y2VyIH0gZnJvbSAnQHN0b3JlL3NsaWNlcy9wcm9kdWN0cyc7XG5pbXBvcnQgeyBjYXJ0UmVkdWNlciB9IGZyb20gJ0BzdG9yZS9zbGljZXMvY2FydCc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY29tbW9uOiBjb21tb25SZWR1Y2VyLFxuICBwb3N0czogcG9zdFJlZHVjZXIsXG4gIHZpZGVvOiB2aWRlb1JlZHVjZXIsXG4gIGF1dGhvcjogYXV0aG9yUmVkdWNlcixcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXG4gIGNhcnQ6IGNhcnRSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiZXhwb3J0IGludGVyZmFjZSBSZXNwb25lTWV0YSB7XG4gIHRvdGFsOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgdGFrZTogbnVtYmVyO1xuICBwYWdlQ291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gUmVxdWVzdFN0YXR1cyB7XG4gIElkbGUsXG4gIExvYWRpbmcsXG4gIFN1Y2Nlc3MsXG4gIEZhaWxlZFxufVxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVN0YXR1cyB7XG4gIGZldGNoaW5nPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIHN0YXR1cz86IFJlcXVlc3RTdGF0dXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VTdGF0ZTxUPiBleHRlbmRzIFJlc3BvbnNlU3RhdHVzIHtcbiAgZGF0YTogVFtdO1xuICBtZXRhPzogUmVzcG9uZU1ldGE7XG4gIGxvYWRpbmdNb3JlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVN0YXRlRGV0YWlsPFQ+IHtcbiAgZmV0Y2hpbmc/OiBib29sZWFuO1xuICBkYXRhPzogVDtcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXMge1xuICBfc29ydD86IHN0cmluZztcbiAgX29yZGVyPzogc3RyaW5nO1xuICBfc3RhcnQ/OiBudW1iZXI7XG4gIF9lbmQ/OiBudW1iZXI7XG4gIF9wYWdlPzogbnVtYmVyO1xuICBfbGltaXQ/OiBudW1iZXI7XG4gIHE/OiBzdHJpbmc7XG4gIGxvYWRpbmdNb3JlPzogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENhc2VSZWR1Y2VyLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgUmVzcG9uc2VTdGF0ZSwgUmVzcG9uc2VTdGF0ZURldGFpbCB9IGZyb20gJ0BzdG9yZS9zaGFyZWQnO1xuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICcuL3Bvc3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRob3JJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgYXZhdGFyPzogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBuaWNrTmFtZT86IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgZ2VuZGVyOiAnTm9uLWJpbmFyeSc7XG4gIGJpbz86ICdzdHJlYW1saW5lIGJlc3Qtb2YtYnJlZWQgZS1tYXJrZXRzJztcbn1cblxuaW50ZXJmYWNlIEF1dGhvclN0YXRlIHtcbiAgZGV0YWlsOiBSZXNwb25zZVN0YXRlRGV0YWlsPEF1dGhvckl0ZW0+O1xuICBwb3N0czogUmVzcG9uc2VTdGF0ZTxQb3N0SXRlbT47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXV0aG9yU3RhdGUgPSB7XG4gIGRldGFpbDogeyBmZXRjaGluZzogZmFsc2UgfSxcbiAgcG9zdHM6IHsgZmV0Y2hpbmc6IGZhbHNlLCBkYXRhOiBbXSB9LFxufTtcblxuY29uc3QgZ2V0QXV0aG9yRGV0YWlsUmVxdWVzdDogQ2FzZVJlZHVjZXI8QXV0aG9yU3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIGRlbGV0ZSBzdGF0ZS5kZXRhaWwuZXJyb3I7XG4gIHN0YXRlLmRldGFpbC5mZXRjaGluZyA9IHRydWU7XG59O1xuXG5jb25zdCBnZXRBdXRob3JEZXRhaWxTdWNjZXNzOiBDYXNlUmVkdWNlcjxBdXRob3JTdGF0ZSwgUGF5bG9hZEFjdGlvbjxBdXRob3JJdGVtPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLmRldGFpbC5kYXRhID0gcGF5bG9hZDtcbiAgc3RhdGUuZGV0YWlsLmZldGNoaW5nID0gZmFsc2U7XG59O1xuXG5jb25zdCBnZXRBdXRob3JEZXRhaWxGYWlsZWQ6IENhc2VSZWR1Y2VyPEF1dGhvclN0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5kZXRhaWwuZXJyb3IgPSBwYXlsb2FkO1xuICBzdGF0ZS5kZXRhaWwuZmV0Y2hpbmcgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGdldEF1dGhvclBvc3RzUmVxdWVzdDogQ2FzZVJlZHVjZXI8QXV0aG9yU3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIGRlbGV0ZSBzdGF0ZS5wb3N0cy5lcnJvcjtcbiAgc3RhdGUucG9zdHMuZmV0Y2hpbmcgPSB0cnVlO1xufTtcblxuY29uc3QgZ2V0QXV0aG9yUG9zdHNTdWNjZXNzOiBDYXNlUmVkdWNlcjxBdXRob3JTdGF0ZSwgUGF5bG9hZEFjdGlvbjxSZXNwb25zZVN0YXRlPFBvc3RJdGVtPj4+ID0gKFxuICBzdGF0ZSxcbiAgeyBwYXlsb2FkIH0sXG4pID0+IHtcbiAgc3RhdGUucG9zdHMuZGF0YSA9IHBheWxvYWQuZGF0YTtcbiAgc3RhdGUucG9zdHMubWV0YSA9IHBheWxvYWQubWV0YTtcbiAgc3RhdGUucG9zdHMuZmV0Y2hpbmcgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGdldEF1dGhvclBvc3RzRmFpbGVkOiBDYXNlUmVkdWNlcjxBdXRob3JTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUucG9zdHMuZXJyb3IgPSBwYXlsb2FkO1xuICBzdGF0ZS5wb3N0cy5mZXRjaGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgYXV0aG9yU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhdXRob3InLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgZ2V0QXV0aG9yRGV0YWlsUmVxdWVzdCxcbiAgICBnZXRBdXRob3JEZXRhaWxTdWNjZXNzLFxuICAgIGdldEF1dGhvckRldGFpbEZhaWxlZCxcblxuICAgIGdldEF1dGhvclBvc3RzUmVxdWVzdCxcbiAgICBnZXRBdXRob3JQb3N0c1N1Y2Nlc3MsXG4gICAgZ2V0QXV0aG9yUG9zdHNGYWlsZWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGF1dGhvckFjdGlvbnMgPSBhdXRob3JTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IGF1dGhvclJlZHVjZXIgPSBhdXRob3JTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgQ2FzZVJlZHVjZXIsIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBSZXF1ZXN0U3RhdHVzLCBSZXNwb25zZVN0YXRlLCBSZXNwb25zZVN0YXR1cyB9IGZyb20gJ0BzdG9yZS9zaGFyZWQnO1xuaW1wb3J0IHsgUHJvZHVjdEl0ZW0gfSBmcm9tICdAc3RvcmUvc2xpY2VzL3Byb2R1Y3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJ0SXRlbSBleHRlbmRzIFByb2R1Y3RJdGVtIHtcbiAgY2FydFF1YW50aXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkVG9DYXJ0Qm9keSBleHRlbmRzIFByb2R1Y3RJdGVtIHtcbiAgY2FydFF1YW50aXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQ2FydFF1YW50aXR5Qm9keSB7XG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIGNhcnRRdWFudGl0eTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FydFN0YXRlIHtcbiAgbGlzdDogUmVzcG9uc2VTdGF0ZTxDYXJ0SXRlbT47XG4gIGFkZFRvQ2FydDogUmVzcG9uc2VTdGF0dXM7XG4gIHJlbW92ZUZyb21DYXJ0OiBSZXNwb25zZVN0YXR1cztcbiAgdXBkYXRlQ2FydFF1YW50aXR5OiBSZXNwb25zZVN0YXR1cztcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJ0U3RhdGUgPSB7XG4gIGxpc3Q6IHsgZmV0Y2hpbmc6IGZhbHNlLCBkYXRhOiBbXSB9LFxuICBhZGRUb0NhcnQ6IHsgc3RhdHVzOiBSZXF1ZXN0U3RhdHVzLklkbGUgfSxcbiAgcmVtb3ZlRnJvbUNhcnQ6IHsgc3RhdHVzOiBSZXF1ZXN0U3RhdHVzLklkbGUgfSxcbiAgdXBkYXRlQ2FydFF1YW50aXR5OiB7IHN0YXR1czogUmVxdWVzdFN0YXR1cy5JZGxlIH0sXG59O1xuXG5jb25zdCBnZXRDYXJ0UmVxdWVzdDogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUubGlzdC5lcnJvcjtcbiAgc3RhdGUubGlzdC5mZXRjaGluZyA9IHRydWU7XG59O1xuXG5jb25zdCBnZXRDYXJ0U3VjY2VzczogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlLCBQYXlsb2FkQWN0aW9uPFJlc3BvbnNlU3RhdGU8Q2FydEl0ZW0+Pj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLmxpc3QuZGF0YSA9IHBheWxvYWQuZGF0YTtcbiAgc3RhdGUubGlzdC5mZXRjaGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgZ2V0Q2FydEZhaWxlZDogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5saXN0LmVycm9yID0gcGF5bG9hZDtcbiAgc3RhdGUubGlzdC5mZXRjaGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgYWRkVG9DYXJ0UmVxdWVzdDogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUuYWRkVG9DYXJ0LmVycm9yO1xuICBzdGF0ZS5hZGRUb0NhcnQuc3RhdHVzID0gUmVxdWVzdFN0YXR1cy5Mb2FkaW5nO1xufTtcblxuY29uc3QgYWRkVG9DYXJ0U3VjY2VzczogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBzdGF0ZS5hZGRUb0NhcnQuc3RhdHVzID0gUmVxdWVzdFN0YXR1cy5TdWNjZXNzO1xufTtcblxuY29uc3QgYWRkVG9DYXJ0RmFpbGVkOiBDYXNlUmVkdWNlcjxDYXJ0U3RhdGUsIFBheWxvYWRBY3Rpb248c3RyaW5nPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLmFkZFRvQ2FydC5lcnJvciA9IHBheWxvYWQ7XG4gIHN0YXRlLmFkZFRvQ2FydC5zdGF0dXMgPSBSZXF1ZXN0U3RhdHVzLkZhaWxlZDtcbn07XG5cbmNvbnN0IHJlbW92ZUZyb21DYXJ0UmVxdWVzdDogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUucmVtb3ZlRnJvbUNhcnQuZXJyb3I7XG4gIHN0YXRlLnJlbW92ZUZyb21DYXJ0LnN0YXR1cyA9IFJlcXVlc3RTdGF0dXMuTG9hZGluZztcbn07XG5cbmNvbnN0IHJlbW92ZUZyb21DYXJ0U3VjY2VzczogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBzdGF0ZS5yZW1vdmVGcm9tQ2FydC5zdGF0dXMgPSBSZXF1ZXN0U3RhdHVzLlN1Y2Nlc3M7XG59O1xuXG5jb25zdCByZW1vdmVGcm9tQ2FydEZhaWxlZDogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5yZW1vdmVGcm9tQ2FydC5lcnJvciA9IHBheWxvYWQ7XG4gIHN0YXRlLnJlbW92ZUZyb21DYXJ0LnN0YXR1cyA9IFJlcXVlc3RTdGF0dXMuRmFpbGVkO1xufTtcblxuY29uc3QgdXBkYXRlQ2FydFF1YW50aXR5UmVxdWVzdDogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUudXBkYXRlQ2FydFF1YW50aXR5LmVycm9yO1xuICBzdGF0ZS51cGRhdGVDYXJ0UXVhbnRpdHkuc3RhdHVzID0gUmVxdWVzdFN0YXR1cy5Mb2FkaW5nO1xufTtcblxuY29uc3QgdXBkYXRlQ2FydFF1YW50aXR5U3VjY2VzczogQ2FzZVJlZHVjZXI8Q2FydFN0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBzdGF0ZS51cGRhdGVDYXJ0UXVhbnRpdHkuc3RhdHVzID0gUmVxdWVzdFN0YXR1cy5TdWNjZXNzO1xufTtcblxuY29uc3QgdXBkYXRlQ2FydFF1YW50aXR5RmFpbGVkOiBDYXNlUmVkdWNlcjxDYXJ0U3RhdGUsIFBheWxvYWRBY3Rpb248c3RyaW5nPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLnVwZGF0ZUNhcnRRdWFudGl0eS5lcnJvciA9IHBheWxvYWQ7XG4gIHN0YXRlLnVwZGF0ZUNhcnRRdWFudGl0eS5zdGF0dXMgPSBSZXF1ZXN0U3RhdHVzLkZhaWxlZDtcbn07XG5cbmNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2NhcnQnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgZ2V0Q2FydFJlcXVlc3QsXG4gICAgZ2V0Q2FydFN1Y2Nlc3MsXG4gICAgZ2V0Q2FydEZhaWxlZCxcblxuICAgIGFkZFRvQ2FydFJlcXVlc3QsXG4gICAgYWRkVG9DYXJ0U3VjY2VzcyxcbiAgICBhZGRUb0NhcnRGYWlsZWQsXG5cbiAgICByZW1vdmVGcm9tQ2FydFJlcXVlc3QsXG4gICAgcmVtb3ZlRnJvbUNhcnRTdWNjZXNzLFxuICAgIHJlbW92ZUZyb21DYXJ0RmFpbGVkLFxuXG4gICAgdXBkYXRlQ2FydFF1YW50aXR5UmVxdWVzdCxcbiAgICB1cGRhdGVDYXJ0UXVhbnRpdHlTdWNjZXNzLFxuICAgIHVwZGF0ZUNhcnRRdWFudGl0eUZhaWxlZCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FydEFjdGlvbnMgPSBjYXJ0U2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCBjYXJ0UmVkdWNlciA9IGNhcnRTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgQ2FzZVJlZHVjZXIsIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmludGVyZmFjZSBUb2FzdFN0YXRlIHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcbn1cblxuaW50ZXJmYWNlIENvbW1vblN0YXRlIHtcbiAgdG9hc3Q6IFRvYXN0U3RhdGU7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQ29tbW9uU3RhdGUgPSB7IHRvYXN0OiB7IHZpc2libGU6IGZhbHNlLCBtZXNzYWdlOiAnU29tZSBtZXNzYWdlJyB9IH07XG5cbmNvbnN0IHNob3dUb2FzdDogQ2FzZVJlZHVjZXI8Q29tbW9uU3RhdGUsIFBheWxvYWRBY3Rpb248T21pdDxUb2FzdFN0YXRlLCAndmlzaWJsZSc+Pj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLnRvYXN0LnZpc2libGUgPSB0cnVlO1xuICBzdGF0ZS50b2FzdC5tZXNzYWdlID0gcGF5bG9hZC5tZXNzYWdlO1xuICBzdGF0ZS50b2FzdC50eXBlID0gcGF5bG9hZC50eXBlO1xufTtcblxuY29uc3QgaGlkZVRvYXN0OiBDYXNlUmVkdWNlcjxDb21tb25TdGF0ZT4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzdGF0ZS50b2FzdC52aXNpYmxlID0gZmFsc2U7XG59O1xuXG5jb25zdCBjb21tb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2NvbW1vbicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzaG93VG9hc3QsXG4gICAgaGlkZVRvYXN0LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb21tb25BY3Rpb25zID0gY29tbW9uU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCBjb21tb25SZWR1Y2VyID0gY29tbW9uU2xpY2UucmVkdWNlcjtcbiIsImltcG9ydCB7IENhc2VSZWR1Y2VyLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgUXVlcnlQYXJhbXMsIFJlc3BvbnNlU3RhdGUsIFJlc3BvbnNlU3RhdGVEZXRhaWwgfSBmcm9tICdAc3RvcmUvc2hhcmVkJztcbmltcG9ydCB7IEF1dGhvckl0ZW0gfSBmcm9tICcuL2F1dGhvcic7XG5cbmV4cG9ydCBlbnVtIFBvc3RDb3ZlclR5cGUge1xuICBJTUFHRSA9ICdpbWFnZScsXG4gIEFVRElPID0gJ2F1ZGlvJyxcbiAgVklERU8gPSAndmlkZW8nLFxuICBTTElERSA9ICdzbGlkZScsXG4gIFNQTElUID0gJ3NwbGl0Jyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VySXRlbSB7XG4gIGlkPzogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGF2YXRhcjogc3RyaW5nIHwgbnVsbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdENvbW1lbnRJdGVtIHtcbiAgaWQ6IDE7XG4gIHB1YmxpY0RhdGU6IERhdGU7XG4gIGZhdm91cml0ZTogbnVtYmVyO1xuICBzaGFyZWQ6IG51bWJlcjtcbiAgY29udGVudDogc3RyaW5nO1xuICB1c2VyOiBVc2VySXRlbTtcbiAgcmVwbGllczogT21pdDxQb3N0Q29tbWVudEl0ZW0sICdyZXBsaWVzJz5bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3N0VGFnSXRlbSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdEl0ZW0ge1xuICBpZD86IG51bWJlcjtcbiAgaW1hZ2U/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgY2F0ZWdvcnk6IFBvc3RJdGVtQ2F0ZWdvcnk7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBwdWJsaWNEYXRlPzogRGF0ZTtcbiAgY29tbWVudHNDb3VudD86IG51bWJlcjtcbiAgcXVvdGU/OiBzdHJpbmc7XG4gIGF1dGhvcj86IHN0cmluZztcbiAgYXVkaW8/OiBzdHJpbmc7XG4gIHZpZGVvPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgdHlwZT86IFBvc3RDb3ZlclR5cGU7XG4gIGNvbW1lbnRzPzogUG9zdENvbW1lbnRJdGVtW107XG4gIHRhZ3M/OiBQb3N0VGFnSXRlbVtdO1xuICB1c2VyOiBBdXRob3JJdGVtO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RJdGVtQ2F0ZWdvcnkge1xuICBpZDogbnVtYmVyO1xuICBpbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICBxdWFudGl0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBQb3N0Q2F0ZWdvcmllc1R5cGUge1xuICBCYXIgPSAnYmFyJyxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdENhdGVnb3JpZXNQYXJhbXMgZXh0ZW5kcyBRdWVyeVBhcmFtcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RMaXN0UGFyYW1zIGV4dGVuZHMgUXVlcnlQYXJhbXMge1xuICB0eXBlX2xpa2U/OiBzdHJpbmc7XG4gIGlzVHJlbmRpbmdfbGlrZT86IGJvb2xlYW47XG4gICdjYXRlZ29yeS5pZF9saWtlJz86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdExpc3RNYXJvbnJ5UGFyYW1zIGV4dGVuZHMgR2V0UG9zdExpc3RQYXJhbXMge1xuICBpc1dpZGU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUG9zdHNTdGF0ZSB7XG4gIGxpc3Q6IFJlc3BvbnNlU3RhdGU8UG9zdEl0ZW0+O1xuICByZWxhdGVkOiBSZXNwb25zZVN0YXRlPFBvc3RJdGVtPjtcbiAgZGVzdGluYXRpb246IFJlc3BvbnNlU3RhdGU8UG9zdEl0ZW0+O1xuICBndWlkZTogUmVzcG9uc2VTdGF0ZTxQb3N0SXRlbT47XG4gIGxhc3Rlc3Q6IFJlc3BvbnNlU3RhdGU8UG9zdEl0ZW0+O1xuICB0cmVuZGluZ0xpc3Q6IFJlc3BvbnNlU3RhdGU8UG9zdEl0ZW0+O1xuICBkZXRhaWw6IFJlc3BvbnNlU3RhdGVEZXRhaWw8UG9zdEl0ZW0+O1xuICBmb290ZXJMaXN0OiBSZXNwb25zZVN0YXRlPFBvc3RJdGVtPjtcbiAgY2F0ZWdvcmllczogUmVzcG9uc2VTdGF0ZTxQb3N0SXRlbUNhdGVnb3J5Pjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBQb3N0c1N0YXRlID0ge1xuICBsaXN0OiB7IGZldGNoaW5nOiBmYWxzZSwgZGF0YTogW10gfSxcbiAgcmVsYXRlZDogeyBmZXRjaGluZzogZmFsc2UsIGRhdGE6IFtdIH0sXG4gIGRlc3RpbmF0aW9uOiB7IGZldGNoaW5nOiBmYWxzZSwgZGF0YTogW10gfSxcbiAgZ3VpZGU6IHsgZmV0Y2hpbmc6IGZhbHNlLCBkYXRhOiBbXSB9LFxuICBsYXN0ZXN0OiB7IGZldGNoaW5nOiBmYWxzZSwgZGF0YTogW10gfSxcbiAgdHJlbmRpbmdMaXN0OiB7IGZldGNoaW5nOiBmYWxzZSwgZGF0YTogW10gfSxcbiAgZGV0YWlsOiB7IGZldGNoaW5nOiBmYWxzZSB9LFxuICBmb290ZXJMaXN0OiB7IGZldGNoaW5nOiBmYWxzZSwgZGF0YTogW10gfSxcbiAgY2F0ZWdvcmllczogeyBmZXRjaGluZzogZmFsc2UsIGRhdGE6IFtdIH0sXG59O1xuXG5jb25zdCBnZXRQb3N0c0xpc3RSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlLCBQYXlsb2FkQWN0aW9uPEdldFBvc3RMaXN0UGFyYW1zPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIGlmIChwYXlsb2FkLmxvYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUubGlzdC5sb2FkaW5nTW9yZSA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN0YXRlLmxpc3QuZmV0Y2hpbmcgPSB0cnVlO1xuICBkZWxldGUgc3RhdGUubGlzdC5lcnJvcjtcbn07XG5cbmNvbnN0IGdldFBvc3RzTGlzdFN1Y2Nlc3M6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxQb3N0SXRlbT4+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgaWYgKHN0YXRlLmxpc3QubG9hZGluZ01vcmUpIHtcbiAgICBzdGF0ZS5saXN0LmRhdGEgPSBbLi4uc3RhdGUubGlzdC5kYXRhLCAuLi5wYXlsb2FkLmRhdGFdO1xuICAgIHN0YXRlLmxpc3QubG9hZGluZ01vcmUgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5saXN0LmRhdGEgPSBwYXlsb2FkLmRhdGE7XG4gICAgc3RhdGUubGlzdC5mZXRjaGluZyA9IGZhbHNlO1xuICB9XG4gIHN0YXRlLmxpc3QubWV0YSA9IHBheWxvYWQubWV0YTtcbn07XG5cbmNvbnN0IGdldFBvc3RzTGlzdEZhaWxlZDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUubGlzdC5sb2FkaW5nTW9yZSA9IGZhbHNlO1xuICBzdGF0ZS5saXN0LmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLmxpc3QuZXJyb3IgPSBwYXlsb2FkO1xufTtcblxuY29uc3QgZ2V0Rm9vdGVyUG9zdHNSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlLCBQYXlsb2FkQWN0aW9uPEdldFBvc3RMaXN0UGFyYW1zPj4gPSAoc3RhdGUpID0+IHtcbiAgZGVsZXRlIHN0YXRlLmZvb3Rlckxpc3QuZXJyb3I7XG4gIHN0YXRlLmZvb3Rlckxpc3QuZmV0Y2hpbmcgPSB0cnVlO1xufTtcblxuY29uc3QgZ2V0Rm9vdGVyUG9zdHNTdWNjZXNzOiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlLCBQYXlsb2FkQWN0aW9uPFJlc3BvbnNlU3RhdGU8UG9zdEl0ZW0+Pj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLmZvb3Rlckxpc3QuZGF0YSA9IHBheWxvYWQuZGF0YTtcbiAgc3RhdGUuZm9vdGVyTGlzdC5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5mb290ZXJMaXN0Lm1ldGEgPSBwYXlsb2FkLm1ldGE7XG59O1xuXG5jb25zdCBnZXRGb290ZXJQb3N0c0ZhaWxlZDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUuZm9vdGVyTGlzdC5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5mb290ZXJMaXN0LmVycm9yID0gcGF5bG9hZDtcbn07XG5cbmNvbnN0IGdldFBvc3REZXRhaWxSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBzdGF0ZS5kZXRhaWwuZmV0Y2hpbmcgPSB0cnVlO1xufTtcblxuY29uc3QgZ2V0UG9zdERldGFpbFN1Y2Nlc3M6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248UG9zdEl0ZW0+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUuZGV0YWlsLmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLmRldGFpbC5kYXRhID0gcGF5bG9hZDtcbn07XG5cbmNvbnN0IGdldFBvc3REZXRhaWxGYWlsZWQ6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248c3RyaW5nPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLmRldGFpbC5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5kZXRhaWwuZXJyb3IgPSBwYXlsb2FkO1xufTtcblxuY29uc3QgZ2V0UG9zdENhdGVnb3JpZXNSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUuY2F0ZWdvcmllcy5lcnJvcjtcbiAgc3RhdGUuY2F0ZWdvcmllcy5mZXRjaGluZyA9IHRydWU7XG59O1xuXG5jb25zdCBnZXRQb3N0Q2F0ZWdvcmllc1N1Y2Nlc3M6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxQb3N0SXRlbUNhdGVnb3J5Pj4+ID0gKFxuICBzdGF0ZSxcbiAgeyBwYXlsb2FkIH0sXG4pID0+IHtcbiAgc3RhdGUuY2F0ZWdvcmllcy5kYXRhID0gcGF5bG9hZC5kYXRhO1xuICBzdGF0ZS5jYXRlZ29yaWVzLmZldGNoaW5nID0gZmFsc2U7XG59O1xuXG5jb25zdCBnZXRQb3N0Q2F0ZWdvcmllc0ZhaWxlZDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUuY2F0ZWdvcmllcy5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5jYXRlZ29yaWVzLmVycm9yID0gcGF5bG9hZDtcbn07XG5cbmNvbnN0IGdldFRyZW5kaW5nUG9zdHNSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlPiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUudHJlbmRpbmdMaXN0LmVycm9yO1xuICBzdGF0ZS50cmVuZGluZ0xpc3QuZmV0Y2hpbmcgPSB0cnVlO1xufTtcblxuY29uc3QgZ2V0VHJlbmRpbmdQb3N0c1N1Y2Nlc3M6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxQb3N0SXRlbT4+PiA9IChcbiAgc3RhdGUsXG4gIHsgcGF5bG9hZCB9LFxuKSA9PiB7XG4gIHN0YXRlLnRyZW5kaW5nTGlzdC5kYXRhID0gcGF5bG9hZC5kYXRhO1xuICBzdGF0ZS50cmVuZGluZ0xpc3QuZmV0Y2hpbmcgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFRyZW5kaW5nUG9zdHNGYWlsZWQ6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248c3RyaW5nPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLnRyZW5kaW5nTGlzdC5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS50cmVuZGluZ0xpc3QuZXJyb3IgPSBwYXlsb2FkO1xufTtcblxuY29uc3QgZ2V0RGVzdGluYXRpb25Qb3N0c1JlcXVlc3Q6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIGRlbGV0ZSBzdGF0ZS5kZXN0aW5hdGlvbi5lcnJvcjtcbiAgc3RhdGUuZGVzdGluYXRpb24uZmV0Y2hpbmcgPSB0cnVlO1xufTtcblxuY29uc3QgZ2V0RGVzdGluYXRpb25Qb3N0c1N1Y2Nlc3M6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxQb3N0SXRlbT4+PiA9IChcbiAgc3RhdGUsXG4gIHsgcGF5bG9hZCB9LFxuKSA9PiB7XG4gIHN0YXRlLmRlc3RpbmF0aW9uLmRhdGEgPSBwYXlsb2FkLmRhdGE7XG4gIHN0YXRlLmRlc3RpbmF0aW9uLmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLmRlc3RpbmF0aW9uLm1ldGEgPSBwYXlsb2FkLm1ldGE7XG59O1xuXG5jb25zdCBnZXREZXN0aW5hdGlvblBvc3RzRmFpbGVkOiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5kZXN0aW5hdGlvbi5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5kZXN0aW5hdGlvbi5lcnJvciA9IHBheWxvYWQ7XG59O1xuXG5jb25zdCBnZXRHdWlkZVBvc3RzUmVxdWVzdDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZT4gPSAoc3RhdGUpID0+IHtcbiAgZGVsZXRlIHN0YXRlLmd1aWRlLmVycm9yO1xuICBzdGF0ZS5ndWlkZS5mZXRjaGluZyA9IHRydWU7XG59O1xuXG5jb25zdCBnZXRHdWlkZVBvc3RzU3VjY2VzczogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxSZXNwb25zZVN0YXRlPFBvc3RJdGVtPj4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5ndWlkZS5kYXRhID0gcGF5bG9hZC5kYXRhO1xuICBzdGF0ZS5ndWlkZS5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5ndWlkZS5tZXRhID0gcGF5bG9hZC5tZXRhO1xufTtcblxuY29uc3QgZ2V0R3VpZGVQb3N0c0ZhaWxlZDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUuZ3VpZGUuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgc3RhdGUuZ3VpZGUuZXJyb3IgPSBwYXlsb2FkO1xufTtcblxuY29uc3QgZ2V0TGFzdGVzdFBvc3RzUmVxdWVzdDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZT4gPSAoc3RhdGUpID0+IHtcbiAgZGVsZXRlIHN0YXRlLmxhc3Rlc3QuZXJyb3I7XG4gIHN0YXRlLmxhc3Rlc3QuZmV0Y2hpbmcgPSB0cnVlO1xufTtcblxuY29uc3QgZ2V0TGFzdGVzdFBvc3RzU3VjY2VzczogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxSZXNwb25zZVN0YXRlPFBvc3RJdGVtPj4+ID0gKFxuICBzdGF0ZSxcbiAgeyBwYXlsb2FkIH0sXG4pID0+IHtcbiAgc3RhdGUubGFzdGVzdC5kYXRhID0gcGF5bG9hZC5kYXRhO1xuICBzdGF0ZS5sYXN0ZXN0LmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLmxhc3Rlc3QubWV0YSA9IHBheWxvYWQubWV0YTtcbn07XG5cbmNvbnN0IGdldExhc3Rlc3RQb3N0c0ZhaWxlZDogQ2FzZVJlZHVjZXI8UG9zdHNTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUubGFzdGVzdC5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5sYXN0ZXN0LmVycm9yID0gcGF5bG9hZDtcbn07XG5cbmNvbnN0IGdldFJlbGF0ZWRQb3N0c1JlcXVlc3Q6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIGRlbGV0ZSBzdGF0ZS5yZWxhdGVkLmVycm9yO1xuICBzdGF0ZS5yZWxhdGVkLmZldGNoaW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGdldFJlbGF0ZWRQb3N0c1N1Y2Nlc3M6IENhc2VSZWR1Y2VyPFBvc3RzU3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxQb3N0SXRlbT4+PiA9IChcbiAgc3RhdGUsXG4gIHsgcGF5bG9hZCB9LFxuKSA9PiB7XG4gIHN0YXRlLnJlbGF0ZWQuZGF0YSA9IHBheWxvYWQuZGF0YTtcbiAgc3RhdGUucmVsYXRlZC5mZXRjaGluZyA9IGZhbHNlO1xuICBzdGF0ZS5yZWxhdGVkLm1ldGEgPSBwYXlsb2FkLm1ldGE7XG59O1xuXG5jb25zdCBnZXRSZWxhdGVkdFBvc3RzRmFpbGVkOiBDYXNlUmVkdWNlcjxQb3N0c1N0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5yZWxhdGVkLmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLnJlbGF0ZWQuZXJyb3IgPSBwYXlsb2FkO1xufTtcblxuY29uc3QgcG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Bvc3RzJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGdldFBvc3RzTGlzdFJlcXVlc3QsXG4gICAgZ2V0UG9zdHNMaXN0U3VjY2VzcyxcbiAgICBnZXRQb3N0c0xpc3RGYWlsZWQsXG5cbiAgICBnZXRQb3N0RGV0YWlsUmVxdWVzdCxcbiAgICBnZXRQb3N0RGV0YWlsU3VjY2VzcyxcbiAgICBnZXRQb3N0RGV0YWlsRmFpbGVkLFxuXG4gICAgZ2V0Rm9vdGVyUG9zdHNSZXF1ZXN0LFxuICAgIGdldEZvb3RlclBvc3RzU3VjY2VzcyxcbiAgICBnZXRGb290ZXJQb3N0c0ZhaWxlZCxcblxuICAgIGdldFBvc3RDYXRlZ29yaWVzUmVxdWVzdCxcbiAgICBnZXRQb3N0Q2F0ZWdvcmllc1N1Y2Nlc3MsXG4gICAgZ2V0UG9zdENhdGVnb3JpZXNGYWlsZWQsXG5cbiAgICBnZXRUcmVuZGluZ1Bvc3RzUmVxdWVzdCxcbiAgICBnZXRUcmVuZGluZ1Bvc3RzU3VjY2VzcyxcbiAgICBnZXRUcmVuZGluZ1Bvc3RzRmFpbGVkLFxuXG4gICAgZ2V0RGVzdGluYXRpb25Qb3N0c1JlcXVlc3QsXG4gICAgZ2V0RGVzdGluYXRpb25Qb3N0c1N1Y2Nlc3MsXG4gICAgZ2V0RGVzdGluYXRpb25Qb3N0c0ZhaWxlZCxcblxuICAgIGdldEd1aWRlUG9zdHNSZXF1ZXN0LFxuICAgIGdldEd1aWRlUG9zdHNTdWNjZXNzLFxuICAgIGdldEd1aWRlUG9zdHNGYWlsZWQsXG5cbiAgICBnZXRMYXN0ZXN0UG9zdHNSZXF1ZXN0LFxuICAgIGdldExhc3Rlc3RQb3N0c1N1Y2Nlc3MsXG4gICAgZ2V0TGFzdGVzdFBvc3RzRmFpbGVkLFxuXG4gICAgZ2V0UmVsYXRlZFBvc3RzUmVxdWVzdCxcbiAgICBnZXRSZWxhdGVkUG9zdHNTdWNjZXNzLFxuICAgIGdldFJlbGF0ZWR0UG9zdHNGYWlsZWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHBvc3RBY3Rpb25zID0gcG9zdHNTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHBvc3RSZWR1Y2VyID0gcG9zdHNTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgQ2FzZVJlZHVjZXIsIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBRdWVyeVBhcmFtcywgUmVzcG9uc2VTdGF0ZSwgUmVzcG9uc2VTdGF0ZURldGFpbCB9IGZyb20gJ0BzdG9yZS9zaGFyZWQnO1xuaW1wb3J0IHsgVXNlckl0ZW0gfSBmcm9tICcuL3Bvc3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2F0ZWdvcnlJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSZXZpZXdJdGVtIHtcbiAgaWQ6IDE7XG4gIHB1YmxpY0RhdGU6IERhdGU7XG4gIHJhdGU6IG51bWJlcjtcbiAgY29udGVudDogc3RyaW5nO1xuICB1c2VyOiBVc2VySXRlbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbSB7XG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYnJhbmQ6IHN0cmluZztcbiAgcmF0ZTogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xuICBkaXNjb3VudFByaWNlOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgY292ZXI6IHN0cmluZztcbiAgaW1hZ2VzOiBzdHJpbmdbXTtcbiAgdGFncz86IHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH1bXTtcbiAgY2F0ZWdvcmllczogUHJvZHVjdENhdGVnb3J5SXRlbTtcbiAgcmV2aWV3czogUHJvZHVjdFJldmlld0l0ZW1bXTtcbiAgc2t1OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UHJvZHVjdHNMaXN0UGFyYW1zIGV4dGVuZHMgUXVlcnlQYXJhbXMge1xuICAnY2F0ZWdvcmllcy5pZF9saWtlJz86IHN0cmluZyB8IG51bGw7XG4gIHByaWNlX2d0ZT86IG51bWJlciB8IG51bGw7XG4gIHByaWNlX2x0ZT86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBQcm9kdWN0U3RhdGUge1xuICBsaXN0OiBSZXNwb25zZVN0YXRlPFByb2R1Y3RJdGVtPjtcbiAgcmVsYXRlZDogUmVzcG9uc2VTdGF0ZTxQcm9kdWN0SXRlbT47XG4gIGNhdGVnb3JpZXM6IFJlc3BvbnNlU3RhdGU8UHJvZHVjdENhdGVnb3J5SXRlbT47XG4gIGRldGFpbDogUmVzcG9uc2VTdGF0ZURldGFpbDxQcm9kdWN0SXRlbT47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdFN0YXRlID0ge1xuICBsaXN0OiB7IGZldGNoaW5nOiBmYWxzZSwgZGF0YTogW10gfSxcbiAgcmVsYXRlZDogeyBmZXRjaGluZzogZmFsc2UsIGRhdGE6IFtdIH0sXG4gIGNhdGVnb3JpZXM6IHsgZmV0Y2hpbmc6IGZhbHNlLCBkYXRhOiBbXSB9LFxuICBkZXRhaWw6IHsgZmV0Y2hpbmc6IGZhbHNlIH0sXG59O1xuXG5jb25zdCBnZXRQcm9kdWN0c1JlcXVlc3Q6IENhc2VSZWR1Y2VyPFByb2R1Y3RTdGF0ZSwgUGF5bG9hZEFjdGlvbjxHZXRQcm9kdWN0c0xpc3RQYXJhbXM+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgaWYgKHBheWxvYWQubG9hZGluZ01vcmUpIHtcbiAgICBzdGF0ZS5saXN0LmxvYWRpbmdNb3JlID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgc3RhdGUubGlzdC5mZXRjaGluZyA9IHRydWU7XG4gIGRlbGV0ZSBzdGF0ZS5saXN0LmVycm9yO1xufTtcblxuY29uc3QgZ2V0UHJvZHVjdHNTdWNjZXNzOiBDYXNlUmVkdWNlcjxQcm9kdWN0U3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxQcm9kdWN0SXRlbT4+PiA9IChcbiAgc3RhdGUsXG4gIHsgcGF5bG9hZCB9LFxuKSA9PiB7XG4gIGlmIChzdGF0ZS5saXN0LmxvYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUubGlzdC5kYXRhID0gWy4uLnN0YXRlLmxpc3QuZGF0YSwgLi4ucGF5bG9hZC5kYXRhXTtcbiAgICBzdGF0ZS5saXN0LmxvYWRpbmdNb3JlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGlzdC5kYXRhID0gcGF5bG9hZC5kYXRhO1xuICAgIHN0YXRlLmxpc3QuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgfVxuICBzdGF0ZS5saXN0Lm1ldGEgPSBwYXlsb2FkLm1ldGE7XG59O1xuXG5jb25zdCBnZXRQcm9kdWN0c0ZhaWxlZDogQ2FzZVJlZHVjZXI8UHJvZHVjdFN0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5saXN0LmxvYWRpbmdNb3JlID0gZmFsc2U7XG4gIHN0YXRlLmxpc3QuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgc3RhdGUubGlzdC5lcnJvciA9IHBheWxvYWQ7XG59O1xuXG5jb25zdCBnZXRSZWxhdGVkUHJvZHVjdHNSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQcm9kdWN0U3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIHN0YXRlLnJlbGF0ZWQuZmV0Y2hpbmcgPSB0cnVlO1xuICBkZWxldGUgc3RhdGUucmVsYXRlZC5lcnJvcjtcbn07XG5cbmNvbnN0IGdldFJlbGF0ZWRQcm9kdWN0c1N1Y2Nlc3M6IENhc2VSZWR1Y2VyPFByb2R1Y3RTdGF0ZSwgUGF5bG9hZEFjdGlvbjxSZXNwb25zZVN0YXRlPFByb2R1Y3RJdGVtPj4+ID0gKFxuICBzdGF0ZSxcbiAgeyBwYXlsb2FkIH0sXG4pID0+IHtcbiAgc3RhdGUucmVsYXRlZC5kYXRhID0gcGF5bG9hZC5kYXRhO1xuICBzdGF0ZS5yZWxhdGVkLmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLnJlbGF0ZWQubWV0YSA9IHBheWxvYWQubWV0YTtcbn07XG5cbmNvbnN0IGdldFJlbGF0ZWRQcm9kdWN0c0ZhaWxlZDogQ2FzZVJlZHVjZXI8UHJvZHVjdFN0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5yZWxhdGVkLmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLnJlbGF0ZWQuZXJyb3IgPSBwYXlsb2FkO1xufTtcblxuY29uc3QgZ2V0UHJvZHVjdENhdGVnb3JpZXNSZXF1ZXN0OiBDYXNlUmVkdWNlcjxQcm9kdWN0U3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIGRlbGV0ZSBzdGF0ZS5jYXRlZ29yaWVzLmVycm9yO1xuICBzdGF0ZS5jYXRlZ29yaWVzLmZldGNoaW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGdldFByb2R1Y3RDYXRlZ29yaWVzU3VjY2VzczogQ2FzZVJlZHVjZXI8UHJvZHVjdFN0YXRlLCBQYXlsb2FkQWN0aW9uPFJlc3BvbnNlU3RhdGU8UHJvZHVjdENhdGVnb3J5SXRlbT4+PiA9IChcbiAgc3RhdGUsXG4gIHsgcGF5bG9hZCB9LFxuKSA9PiB7XG4gIHN0YXRlLmNhdGVnb3JpZXMuZGF0YSA9IHBheWxvYWQuZGF0YTtcbiAgc3RhdGUuY2F0ZWdvcmllcy5tZXRhID0gcGF5bG9hZC5tZXRhO1xuICBzdGF0ZS5jYXRlZ29yaWVzLmZldGNoaW5nID0gZmFsc2U7XG59O1xuXG5jb25zdCBnZXRQcm9kdWN0Q2F0ZWdvcmllc0ZhaWxlZDogQ2FzZVJlZHVjZXI8UHJvZHVjdFN0YXRlLCBQYXlsb2FkQWN0aW9uPHN0cmluZz4+ID0gKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICBzdGF0ZS5jYXRlZ29yaWVzLmVycm9yID0gcGF5bG9hZDtcbiAgc3RhdGUuY2F0ZWdvcmllcy5mZXRjaGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgZ2V0UHJvZHVjdERldGFpbFJlcXVlc3Q6IENhc2VSZWR1Y2VyPFByb2R1Y3RTdGF0ZT4gPSAoc3RhdGUpID0+IHtcbiAgZGVsZXRlIHN0YXRlLmRldGFpbC5lcnJvcjtcbiAgc3RhdGUuZGV0YWlsLmZldGNoaW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGdldFByb2R1Y3REZXRhaWxTdWNjZXNzOiBDYXNlUmVkdWNlcjxQcm9kdWN0U3RhdGUsIFBheWxvYWRBY3Rpb248UHJvZHVjdEl0ZW0+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgc3RhdGUuZGV0YWlsLmZldGNoaW5nID0gZmFsc2U7XG4gIHN0YXRlLmRldGFpbC5kYXRhID0gcGF5bG9hZDtcbn07XG5cbmNvbnN0IGdldFByb2R1Y3REZXRhaWxGYWlsZWQ6IENhc2VSZWR1Y2VyPFByb2R1Y3RTdGF0ZSwgUGF5bG9hZEFjdGlvbjxzdHJpbmc+PiA9IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgZGVsZXRlIHN0YXRlLmRldGFpbC5lcnJvcjtcbiAgc3RhdGUuZGV0YWlsLmZldGNoaW5nID0gdHJ1ZTtcbiAgc3RhdGUuZGV0YWlsLmVycm9yID0gcGF5bG9hZDtcbn07XG5cbmNvbnN0IHByb2R1Y3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdwcm9kdWN0JyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGdldFByb2R1Y3RzUmVxdWVzdCxcbiAgICBnZXRQcm9kdWN0c1N1Y2Nlc3MsXG4gICAgZ2V0UHJvZHVjdHNGYWlsZWQsXG5cbiAgICBnZXRQcm9kdWN0Q2F0ZWdvcmllc1JlcXVlc3QsXG4gICAgZ2V0UHJvZHVjdENhdGVnb3JpZXNTdWNjZXNzLFxuICAgIGdldFByb2R1Y3RDYXRlZ29yaWVzRmFpbGVkLFxuXG4gICAgZ2V0UHJvZHVjdERldGFpbFJlcXVlc3QsXG4gICAgZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MsXG4gICAgZ2V0UHJvZHVjdERldGFpbEZhaWxlZCxcblxuICAgIGdldFJlbGF0ZWRQcm9kdWN0c1JlcXVlc3QsXG4gICAgZ2V0UmVsYXRlZFByb2R1Y3RzU3VjY2VzcyxcbiAgICBnZXRSZWxhdGVkUHJvZHVjdHNGYWlsZWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RBY3Rpb25zID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHByb2R1Y3RSZWR1Y2VyID0gcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgQ2FzZVJlZHVjZXIsIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBRdWVyeVBhcmFtcywgUmVzcG9uc2VTdGF0ZSwgUmVzcG9uc2VTdGF0ZURldGFpbCB9IGZyb20gJ0BzdG9yZS9zaGFyZWQnO1xuXG5pbnRlcmZhY2UgVmlkZW9JdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiAyMTI7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVmlkZW9zU3RhdGUge1xuICBsaXN0OiBSZXNwb25zZVN0YXRlPFZpZGVvSXRlbT47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVmlkZW9zU3RhdGUgPSB7XG4gIGxpc3Q6IHtcbiAgICBmZXRjaGluZzogZmFsc2UsXG4gICAgZGF0YTogW10sXG4gIH0sXG59O1xuXG5jb25zdCBnZXRWaWRlb3NMaXN0UmVxdWVzdDogQ2FzZVJlZHVjZXI8VmlkZW9zU3RhdGUsIFBheWxvYWRBY3Rpb248UXVlcnlQYXJhbXM+PiA9IChzdGF0ZSkgPT4ge1xuICBkZWxldGUgc3RhdGUubGlzdC5lcnJvcjtcbiAgc3RhdGUubGlzdC5mZXRjaGluZyA9IHRydWU7XG59O1xuXG5jb25zdCBnZXRWaWRlb3NMaXN0U3VjY2VzczogQ2FzZVJlZHVjZXI8VmlkZW9zU3RhdGUsIFBheWxvYWRBY3Rpb248UmVzcG9uc2VTdGF0ZTxWaWRlb0l0ZW0+Pj4gPSAoXG4gIHN0YXRlLFxuICB7IHBheWxvYWQgfSxcbikgPT4ge1xuICBzdGF0ZS5saXN0LmRhdGEgPSBwYXlsb2FkLmRhdGE7XG4gIHN0YXRlLmxpc3QuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgc3RhdGUubGlzdC5tZXRhID0gcGF5bG9hZC5tZXRhO1xufTtcblxuY29uc3QgZ2V0VmlkZW9zTGlzdEZhaWxlZDogQ2FzZVJlZHVjZXI8VmlkZW9zU3RhdGUsIFBheWxvYWRBY3Rpb248c3RyaW5nPj4gPSAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gIHN0YXRlLmxpc3QuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgc3RhdGUubGlzdC5lcnJvciA9IHBheWxvYWQ7XG59O1xuXG5jb25zdCB2aWRlb3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3ZpZGVvcycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBnZXRWaWRlb3NMaXN0UmVxdWVzdCxcbiAgICBnZXRWaWRlb3NMaXN0U3VjY2VzcyxcbiAgICBnZXRWaWRlb3NMaXN0RmFpbGVkLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB2aWRlb0FjdGlvbnMgPSB2aWRlb3NTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHZpZGVvUmVkdWNlciA9IHZpZGVvc1NsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhZGRUb0NhcnQsIGdldENhcnRzLCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlQ2FydFF1YW50aXR5IH0gZnJvbSAnQHNlcnZpY2VzL2NhcnQnO1xuaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICdAc3RvcmUvc2hhcmVkJztcbmltcG9ydCB7IEFkZFRvQ2FydEJvZHksIGNhcnRBY3Rpb25zLCBDYXJ0SXRlbSwgVXBkYXRlQ2FydFF1YW50aXR5Qm9keSB9IGZyb20gJ0BzdG9yZS9zbGljZXMvY2FydCc7XG5pbXBvcnQgeyBjb21tb25BY3Rpb25zIH0gZnJvbSAnQHN0b3JlL3NsaWNlcy9jb21tb24nO1xuaW1wb3J0IHsgUHJvZHVjdEl0ZW0gfSBmcm9tICdAc3RvcmUvc2xpY2VzL3Byb2R1Y3RzJztcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHZXRDYXJ0ID0gKHBhcmFtPzogUXVlcnlQYXJhbXMpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5nZXRDYXJ0UmVxdWVzdCgpKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q2FydHMocGFyYW0pO1xuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmdldENhcnRTdWNjZXNzKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5nZXRDYXJ0RmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IChwcm9kdWN0OiBBZGRUb0NhcnRCb2R5KSA9PiBhc3luYyAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkVG9DYXJ0UmVxdWVzdCgpKTtcbiAgICBhd2FpdCBhZGRUb0NhcnQocHJvZHVjdCk7XG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkVG9DYXJ0U3VjY2VzcygpKTtcbiAgICBkaXNwYXRjaChjb21tb25BY3Rpb25zLnNob3dUb2FzdCh7IG1lc3NhZ2U6ICdQcm9kdWN0IGFkZGVkIHRvIGNhcnQgc3VjY2VzcycsIHR5cGU6ICdzdWNjZXNzJyB9KSk7XG4gICAgZGlzcGF0Y2goaGFuZGxlR2V0Q2FydCh7fSkgYXMgYW55KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5hZGRUb0NhcnRGYWlsZWQoZXJyb3IubWVzc2FnZSkpO1xuICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbnMuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ1Byb2R1Y3QgYWRkZWQgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW4nLCB0eXBlOiAnZXJyb3InIH0pKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlbW92ZUZyb21DYXJ0ID0gKGlkOiBudW1iZXIgfCBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5yZW1vdmVGcm9tQ2FydFJlcXVlc3QoKSk7XG4gICAgYXdhaXQgcmVtb3ZlRnJvbUNhcnQoaWQpO1xuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0U3VjY2VzcygpKTtcbiAgICBkaXNwYXRjaChjb21tb25BY3Rpb25zLnNob3dUb2FzdCh7IG1lc3NhZ2U6ICdQcm9kdWN0IHJlbW92ZWQgZnJvbSBjYXJ0IHN1Y2Nlc3MnLCB0eXBlOiAnc3VjY2VzcycgfSkpO1xuICAgIGRpc3BhdGNoKGhhbmRsZUdldENhcnQoKSBhcyBhbnkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0RmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgICBkaXNwYXRjaChjb21tb25BY3Rpb25zLnNob3dUb2FzdCh7IG1lc3NhZ2U6ICdQcm9kdWN0IHJlbW92ZWQgZnJvbSBjYXJ0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpbicsIHR5cGU6ICdlcnJvcicgfSkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlVXBkYXRlQ2FydFF1YW50aXR5ID0gKGRhdGE6IFVwZGF0ZUNhcnRRdWFudGl0eUJvZHkpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy51cGRhdGVDYXJ0UXVhbnRpdHlSZXF1ZXN0KCkpO1xuICAgIGF3YWl0IHVwZGF0ZUNhcnRRdWFudGl0eShkYXRhKTtcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy51cGRhdGVDYXJ0UXVhbnRpdHlTdWNjZXNzKCkpO1xuICAgIGRpc3BhdGNoKGhhbmRsZUdldENhcnQoKSBhcyBhbnkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLnVwZGF0ZUNhcnRRdWFudGl0eUZhaWxlZChlcnJvci5tZXNzYWdlKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBnZXRQb3N0Q2F0ZWdvcmllcywgZ2V0UG9zdERldGFpbCwgZ2V0UG9zdHMgfSBmcm9tICdAc2VydmljZXMvcG9zdCc7XG5pbXBvcnQgeyBwb3N0QWN0aW9ucywgR2V0UG9zdExpc3RQYXJhbXMsIEdldFBvc3RDYXRlZ29yaWVzUGFyYW1zIH0gZnJvbSAnQHN0b3JlL3NsaWNlcy9wb3N0cyc7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUdldFBvc3RzID0gKHBhcmFtOiBHZXRQb3N0TGlzdFBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldFBvc3RzTGlzdFJlcXVlc3QocGFyYW0pKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdHMocGFyYW0pO1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldFBvc3RzTGlzdFN1Y2Nlc3MoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldFBvc3RzTGlzdEZhaWxlZChlcnJvci5tZXNzYWdlKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVGb290ZXJQb3N0cyA9IChwYXJhbTogR2V0UG9zdExpc3RQYXJhbXMpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRGb290ZXJQb3N0c1JlcXVlc3QocGFyYW0pKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdHMocGFyYW0pO1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldEZvb3RlclBvc3RzU3VjY2VzcyhkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0Rm9vdGVyUG9zdHNGYWlsZWQoZXJyb3IubWVzc2FnZSkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2V0UG9zdERldGFpbCA9IChpZDogbnVtYmVyKSA9PiBhc3luYyAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0UG9zdERldGFpbFJlcXVlc3QoKSk7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBnZXRQb3N0RGV0YWlsKGlkKTtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRQb3N0RGV0YWlsU3VjY2VzcyhkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0UG9zdHNMaXN0RmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVBvc3RDYXRlZ29yaWVzID0gKHBhcmFtPzogR2V0UG9zdENhdGVnb3JpZXNQYXJhbXMpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRQb3N0Q2F0ZWdvcmllc1JlcXVlc3QoKSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RDYXRlZ29yaWVzKHBhcmFtKTtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRQb3N0Q2F0ZWdvcmllc1N1Y2Nlc3MoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldFBvc3RDYXRlZ29yaWVzRmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUdldFRyZW5kaW5nUG9zdHMgPSAocGFyYW06IEdldFBvc3RMaXN0UGFyYW1zKSA9PiBhc3luYyAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0VHJlbmRpbmdQb3N0c1JlcXVlc3QoKSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RzKHsgLi4ucGFyYW0sIGlzVHJlbmRpbmdfbGlrZTogdHJ1ZSB9KTtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRUcmVuZGluZ1Bvc3RzU3VjY2VzcyhkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0VHJlbmRpbmdQb3N0c0ZhaWxlZChlcnJvci5tZXNzYWdlKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHZXREZXN0aW5hdGlvblBvc3RzID0gKHBhcmFtOiBHZXRQb3N0TGlzdFBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldERlc3RpbmF0aW9uUG9zdHNSZXF1ZXN0KCkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0cyhwYXJhbSk7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0RGVzdGluYXRpb25Qb3N0c1N1Y2Nlc3MoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldERlc3RpbmF0aW9uUG9zdHNGYWlsZWQoZXJyb3IubWVzc2FnZSkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2V0R3VpZGVQb3N0cyA9IChwYXJhbTogR2V0UG9zdExpc3RQYXJhbXMpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRHdWlkZVBvc3RzUmVxdWVzdCgpKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdHMocGFyYW0pO1xuICAgIGRpc3BhdGNoKHBvc3RBY3Rpb25zLmdldEd1aWRlUG9zdHNTdWNjZXNzKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRHdWlkZVBvc3RzRmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUdldExhc3Rlc3RQb3N0cyA9IChwYXJhbTogR2V0UG9zdExpc3RQYXJhbXMpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRMYXN0ZXN0UG9zdHNSZXF1ZXN0KCkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0cyhwYXJhbSk7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0TGFzdGVzdFBvc3RzU3VjY2VzcyhkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0TGFzdGVzdFBvc3RzRmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUdldFJlbGF0ZWRQb3N0cyA9IChwYXJhbTogR2V0UG9zdExpc3RQYXJhbXMpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChwb3N0QWN0aW9ucy5nZXRSZWxhdGVkUG9zdHNSZXF1ZXN0KCkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0cyhwYXJhbSk7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0UmVsYXRlZFBvc3RzU3VjY2VzcyhkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2gocG9zdEFjdGlvbnMuZ2V0UmVsYXRlZHRQb3N0c0ZhaWxlZChlcnJvci5tZXNzYWdlKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBnZXRQcm9kdWN0RGV0YWlsLCBnZXRQcm9kdWN0cyB9IGZyb20gJ0BzZXJ2aWNlcy9wcm9kdWN0cyc7XG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJ0BzdG9yZS9zaGFyZWQnO1xuaW1wb3J0IHsgR2V0UHJvZHVjdHNMaXN0UGFyYW1zLCBwcm9kdWN0QWN0aW9ucyB9IGZyb20gJ0BzdG9yZS9zbGljZXMvcHJvZHVjdHMnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0Q2F0ZWdvcnkgfSBmcm9tICdAc2VydmljZXMvcHJvZHVjdHMnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2V0UHJvZHVjdHMgPSAocGFyYW06IEdldFByb2R1Y3RzTGlzdFBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFByb2R1Y3RzUmVxdWVzdChwYXJhbSkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9kdWN0cyhwYXJhbSk7XG4gICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuZ2V0UHJvZHVjdHNTdWNjZXNzKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5nZXRQcm9kdWN0c0ZhaWxlZChlcnJvci5tZXNzYWdlKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHZXRSZWxhdGVkUHJvZHVjdHMgPSAocGFyYW06IEdldFByb2R1Y3RzTGlzdFBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFJlbGF0ZWRQcm9kdWN0c1JlcXVlc3QoKSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFByb2R1Y3RzKHBhcmFtKTtcbiAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5nZXRSZWxhdGVkUHJvZHVjdHNTdWNjZXNzKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5nZXRSZWxhdGVkUHJvZHVjdHNGYWlsZWQoZXJyb3IubWVzc2FnZSkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2V0UHJvZHVjdENhdGVnb3JpZXMgPSAocGFyYW0/OiBRdWVyeVBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFByb2R1Y3RDYXRlZ29yaWVzUmVxdWVzdCgpKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJvZHVjdENhdGVnb3J5KHBhcmFtKTtcbiAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5nZXRQcm9kdWN0Q2F0ZWdvcmllc1N1Y2Nlc3MoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFByb2R1Y3RDYXRlZ29yaWVzRmFpbGVkKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUdldFByb2R1Y3REZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFByb2R1Y3REZXRhaWxSZXF1ZXN0KCkpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZ2V0UHJvZHVjdERldGFpbChpZCk7XG4gICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFByb2R1Y3REZXRhaWxGYWlsZWQoZXJyb3IubWVzc2FnZSkpO1xuICB9XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBUaGVtZVByb3BzIHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogc3RyaW5nO1xuICAgIHNlY29uZGFyeTogc3RyaW5nO1xuICAgIHRoaXJkOiBzdHJpbmc7XG4gICAgZm91cnRoOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG4gICAgbGlnaHQ6IHN0cmluZztcbiAgfTtcbiAgc2NoZW1hOiB7XG4gICAgZ3JheToge1xuICAgICAgYmFzZTogc3RyaW5nO1xuICAgICAgbGlnaHQ6IHN0cmluZztcbiAgICAgIHJlZ3VsYXI6IHN0cmluZztcbiAgICAgIG1lZGl1bTogc3RyaW5nO1xuICAgICAgZGFyazogc3RyaW5nO1xuICAgIH07XG4gIH07XG59XG5cbmNvbnN0IHRoZW1lOiBUaGVtZVByb3BzID0ge1xuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiAnI2U0OWM4NicsXG4gICAgc2Vjb25kYXJ5OiAnIzExZDJlZicsXG4gICAgdGhpcmQ6ICcjNTM3YmRmJyxcbiAgICBmb3VydGg6ICcjZmZkNjYxJyxcbiAgICBlcnJvcjogJyNlZDQzMzcnLFxuICAgIHN1Y2Nlc3M6ICcjNWNiODVjJyxcbiAgICBsaWdodDogJyNmNWY1ZjUnLFxuICB9LFxuICBzY2hlbWE6IHtcbiAgICBncmF5OiB7XG4gICAgICBiYXNlOiAnI2Y1ZjVmNScsXG4gICAgICBsaWdodDogJyNlMWUxZTEnLFxuICAgICAgcmVndWxhcjogJyM4ODgnLFxuICAgICAgbWVkaXVtOiAnIzQ0NCcsXG4gICAgICBkYXJrOiAnIzExMScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=