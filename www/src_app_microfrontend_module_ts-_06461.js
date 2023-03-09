(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_microfrontend_module_ts-_06461"],{

/***/ 1984:
/*!*************************************************!*\
  !*** ./src/app/microfrontend-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroFrontEndRoutingModule": () => (/* binding */ MicroFrontEndRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7447);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'second',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_second_second_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./second/second.module */ 4714)).then(m => m.SecondPageModule)
    },
];
let MicroFrontEndRoutingModule = class MicroFrontEndRoutingModule {
};
MicroFrontEndRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    })
], MicroFrontEndRoutingModule);



/***/ }),

/***/ 9594:
/*!*****************************************!*\
  !*** ./src/app/microfrontend.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroFrontEndModule": () => (/* binding */ MicroFrontEndModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microfrontend_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./microfrontend-routing.module */ 1984);



let MicroFrontEndModule = class MicroFrontEndModule {
};
MicroFrontEndModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        entryComponents: [],
        imports: [
            _microfrontend_routing_module__WEBPACK_IMPORTED_MODULE_1__.MicroFrontEndRoutingModule
        ],
        providers: [],
    })
], MicroFrontEndModule);



/***/ })

}])
//# sourceMappingURL=src_app_microfrontend_module_ts-_06461.js.map