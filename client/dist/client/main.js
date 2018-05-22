(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'products', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'products/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'products/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] },
    { path: 'products/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: '*', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h1>Commerce Manager</h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1> Product Details </h1>\n    <a href=\"/\">Home</a>\n    <p><span>Name</span> {{product.name}}</p>\n    <p><span>Qty</span> {{product.quantity}}</p>\n    <p><span>Price </span> {{product.price}}</p>\n    <!-- <form (submit)=\"likePet()\" #formData=\"ngForm\">\n      <button [disabled]=\"formData.submitted\" type=\"submit\">Like</button>\n    </form> -->\n    <button *ngIf=\"product.price != 0\" disabled>Delete</button>\n    <button *ngIf=\"product.price == 0\" (click)=\"deleteProdct()\">Delete</button>\n    <button [routerLink]=\"['/products']\">Back</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = { name: "", quantity: "", price: "", id: "" };
        this._route.params.subscribe(function (params) { return _this.productId = params['id']; });
        this.disableDelete = true;
        console.log(this.disableDelete);
        this.findProduct();
        this.checkIsDeletable();
    };
    DetailsComponent.prototype.findProduct = function () {
        var _this = this;
        var observable = this._httpService.findProduct(this.productId);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.product = data['product'];
            }
            else {
                _this.errors = data['body'];
            }
        });
    };
    DetailsComponent.prototype.checkIsDeletable = function () {
        console.log("I'M IN DELETE");
        console.log(this.disableDelete);
        if (this.product.quantity === 0) {
            this.disableDelete = false;
        }
    };
    DetailsComponent.prototype.deleteProdct = function () {
        var _this = this;
        var observable = this._httpService.removeProduct(this.productId);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.product = data['product'];
                _this._router.navigate(['/products']);
            }
            else {
                _this.errors = data['body'];
            }
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".purple {\r\n    color:purple;\r\n}\r\n\r\n.formButton{\r\n    color:white;\r\n    padding:10px;\r\n    display: inline-block;\r\n    width:100px;\r\n    background-color: aqua;\r\n    margin: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.inset {\r\n    margin-left:20px;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Update Product</h1>\n    <div class=\"purple\">\n      <p *ngFor=\"let error of errors\">{{error}}<br></p>\n    </div>\n    <form (submit)=\"editProduct()\">\n      <label for=\"name\">Name </label>\n      <!-- <input *ngIf=\"!isReset\" id =\"name\" type=\"text\" name=\"currentProduct.name\" [(ngModel)]=\"currentProduct.name\" required minlength=\"3\" #name=\"ngModel\" [placeholder]=\"currentProduct.name\"><br> -->\n      <input id =\"name\" type=\"text\" name=\"currentProduct.name\" [(ngModel)]=\"currentProduct.name\" required minlength=\"3\" #name=\"ngModel\" value=\"currentProduct.name\" placeholder=\"currentProduct.name\"><br>\n      <label for=\"number\">Qty </label>\n      <input id=\"number\" type=\"number\" name=\"currentProduct.quantity\" required min=\"0\" #quantity=\"ngModel\" [(ngModel)]=\"currentProduct.quantity\" value=\"currentProduct.quantity\" placeholder=\"currentProduct.quantity\"><br>\n      <label for=\"price\">Price </label>\n      <input type=\"number\" id=\"price\" name=\"currentProduct.price\" required min=\"0\" #price=\"ngModel\" [(ngModel)]=\"currentProduct.price\" value=\"currentProduct.price\" placeholder=\"currentProduct.price\"><br>\n      <button *ngIf=\"!name.valid || !quantity.valid || !price.valid\" disabled type=\"submit\">Update</button>\n      <button *ngIf=\"name.valid && quantity.valid && price.valid\" type=\"submit\">Update</button>\n      \n    </form>\n    <button (click)=\"resetFields()\">Reset</button>\n    <a href=\"/products\"><button>Cancel</button></a> \n    <div *ngIf=\"!name.valid\">\n      <div *ngIf=\"name.errors.required\">\n        The name field is required!\n      </div>\n      <div *ngIf=\"name.errors.minlength\">\n        The name must be at least 3 letters.\n      </div>\n    </div>\n    <div *ngIf=\"!quantity.valid\">\n      <div *ngIf=\"quantity.errors.required\">\n        The Quantity field is required!\n      </div>\n      <div *ngIf=\"quantity.errors.min\">\n        The quantity must be greater than or equal to 0\n      </div>\n    </div>\n    <div *ngIf=\"!price.valid\">\n      <div *ngIf=\"price.errors.required\">\n        The price field is required!\n      </div>\n      <div *ngIf=\"price.errors.min\">\n          The price must be greater than or equal to 0\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.isReset = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentProduct = { name: "", quantity: "", price: "", id: "" };
        this.errors = [];
        this._route.params.subscribe(function (params) { return _this.productId = params['id']; });
        this.findCurrentProduct();
    };
    EditComponent.prototype.findCurrentProduct = function () {
        var _this = this;
        var observable = this._httpService.findProduct(this.productId);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.initialState = data['product'];
                _this.currentProduct = data['product'];
            }
            else {
                _this.errors = data['body'];
            }
        });
    };
    EditComponent.prototype.editProduct = function () {
        var _this = this;
        this.errors = [];
        console.log("Im in EDIT PRODUCT!");
        var observable = this._httpService.updateProduct(this.currentProduct);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this._router.navigate(['/products']);
            }
            else {
                console.log(data);
                if (data['body']['errors']['name']) {
                    _this.errors.push(data['body']['errors']['name']['message']);
                }
                if (data['body']['errors']['price']) {
                    _this.errors.push(data['body']['errors']['price']['message']);
                }
                if (data['body']['errors']['quantity']) {
                    _this.errors.push(data['body']['errors']['quantity']['message']);
                }
                // this.errors = data['body'];
            }
        });
    };
    EditComponent.prototype.resetFields = function () {
        console.log("I'm in reset!");
        console.log("This is this.currentProduct");
        console.log(this.currentProduct);
        console.log("This is INITIAL Product");
        console.log(this.initialState);
        this.ngOnInit();
        // this.currentProduct = this.initialProduct;
        // this._router.navigate(['/products/',this.initialProduct.id,'edit']);
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\r\n    margin:20px;\r\n}\r\n\r\nth {\r\n    min-width:100px; \r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Product List</h1>\n  <a href=\"/products/new\"><button>Add new Product</button></a>\n  \n  <table>\n    <thead>\n      <th>Id</th>\n      <th>Name</th>\n      <th>Qty</th>\n      <th>Price</th>\n      <th>Actions</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let product of allProducts\">\n        <td>{{product.id}}</td>\n        <td>{{product.name}}</td>\n        <td>{{product.quantity}}</td>\n        <td>${{product.price}}</td>\n        <td><button [routerLink]=\"['/products',product.id]\">Details</button> <button [routerLink]=\"['/products',product.id,'edit']\">Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    HomeComponent.prototype.getAllProducts = function () {
        var _this = this;
        var observable = this._httpService.getAllProducts();
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.allProducts = data['products'];
            }
            else {
                _this.errors = data['body'];
            }
            // this.allAuthors = data;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllProducts = function () {
        return this._http.get('/all_products');
    };
    HttpService.prototype.createProduct = function (newProduct) {
        console.log(newProduct);
        return this._http.post('/new_product', newProduct);
    };
    HttpService.prototype.findProduct = function (id) {
        return this._http.get('/find_product/' + id);
    };
    HttpService.prototype.updateProduct = function (product) {
        return this._http.put('/update_product/' + product.id, product);
    };
    HttpService.prototype.removeProduct = function (id) {
        return this._http.delete('/delete_product/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".purple {\r\n    color:purple;\r\n}\r\n\r\n.formButton{\r\n    color:white;\r\n    padding:10px;\r\n    display: inline-block;\r\n    width:100px;\r\n    background-color: aqua;\r\n    margin: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.inset {\r\n    margin-left:20px;\r\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"purple\">\n      <p *ngFor=\"let error of errors\">{{error}}<br></p>\n  </div>\n  <form action=\"\" (submit)=\"createNewProduct()\">\n    <label for=\"name\">Name </label>\n    <input id =\"name\" type=\"text\" name=\"newProduct.name\" required minlength=\"3\" #name=\"ngModel\" [(ngModel)]=\"newProduct.name\"><br>\n    <label for=\"number\">Qty </label>\n    <input id=\"number\" type=\"number\" name=\"newProduct.quantity\"  required min=\"0\" #quantity=\"ngModel\" [(ngModel)]=\"newProduct.quantity\"><br>\n    <label for=\"price\">Price </label>\n    <input type=\"number\" id=\"price\" required min=\"0\" #price=\"ngModel\" name=\"newProduct.price\" [(ngModel)]=\"newProduct.price\"><br>\n    <button *ngIf=\"!name.valid || !quantity.valid || !price.valid\" disabled type=\"submit\">Create</button>\n    <button *ngIf=\"name.valid && quantity.valid && price.valid\" type=\"submit\">Create</button>\n  </form>\n  <a href=\"/products\"><button>Cancel</button></a> \n  <div *ngIf=\"!name.valid\">\n      <div *ngIf=\"name.errors.required\">\n        The name field is required!\n      </div>\n      <div *ngIf=\"name.errors.minlength\">\n        The name must be at least 3 letters.\n      </div>\n    </div>\n    <div *ngIf=\"!quantity.valid\">\n      <div *ngIf=\"quantity.errors.required\">\n        The Quantity field is required!\n      </div>\n      <div *ngIf=\"quantity.errors.min\">\n        The quantity must be greater than or equal to 0\n      </div>\n    </div>\n    <div *ngIf=\"!price.valid\">\n      <div *ngIf=\"price.errors.required\">\n        The price field is required!\n      </div>\n      <div *ngIf=\"price.errors.min\">\n          The price must be greater than or equal to 0\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newProduct = { name: "", quantity: "", price: "", id: "" };
        this.errors = [];
    };
    NewComponent.prototype.createNewProduct = function () {
        var _this = this;
        this.errors = [];
        var newId = Math.floor(Math.random() * 10000);
        this.newProduct.id = newId;
        console.log(this.newProduct.id);
        var observable = this._httpService.createProduct(this.newProduct);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this._router.navigate(['/']);
            }
            else {
                if (data['body']['errors']['name']) {
                    _this.errors.push(data['body']['errors']['name']['message']);
                }
                if (data['body']['errors']['price']) {
                    _this.errors.push(data['body']['errors']['price']['message']);
                }
                if (data['body']['errors']['quantity']) {
                    _this.errors.push(data['body']['errors']['quantity']['message']);
                }
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\susie\Documents\node_projects\Angular\example\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map