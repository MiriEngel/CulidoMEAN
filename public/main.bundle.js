webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header></header>\n\n                     <router-outlet> </router-outlet>\n         \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__articles_articles_module__ = __webpack_require__("../../../../../src/app/articles/articles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__articles_articles_module__["a" /* ArticlesModule */],
            __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__["a" /* ChatModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutes */]),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var AppRoutes = [];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("../../../../../src/app/articles/articles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ArticlesComponent = (function () {
    function ArticlesComponent() {
    }
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'articles',
        template: '<router-outlet></router-outlet>',
        providers: [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]]
    })
], ArticlesComponent);

//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articles.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_routes__ = __webpack_require__("../../../../../src/app/articles/articles.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_component__ = __webpack_require__("../../../../../src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_create_component__ = __webpack_require__("../../../../../src/app/articles/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/articles/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_view_component__ = __webpack_require__("../../../../../src/app/articles/view/view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ArticlesModule = (function () {
    function ArticlesModule() {
    }
    return ArticlesModule;
}());
ArticlesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__articles_routes__["a" /* ArticlesRoutes */]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__articles_component__["a" /* ArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__view_view_component__["a" /* ViewComponent */],
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */]
        ],
    })
], ArticlesModule);

//# sourceMappingURL=articles.module.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articles.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articles_component__ = __webpack_require__("../../../../../src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_create_component__ = __webpack_require__("../../../../../src/app/articles/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list_component__ = __webpack_require__("../../../../../src/app/articles/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_view_component__ = __webpack_require__("../../../../../src/app/articles/view/view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesRoutes; });




var ArticlesRoutes = [{
        path: 'articles',
        component: __WEBPACK_IMPORTED_MODULE_0__articles_component__["a" /* ArticlesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */] },
            { path: ':searchStr/list', component: __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_1__create_create_component__["a" /* CreateComponent */] },
            { path: ':articleId', component: __WEBPACK_IMPORTED_MODULE_3__view_view_component__["a" /* ViewComponent */] },
            { path: ':articleId/edit', component: __WEBPACK_IMPORTED_MODULE_1__create_create_component__["a" /* CreateComponent */] },
        ],
    }];
//# sourceMappingURL=articles.routes.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesService = (function () {
    function ArticlesService(_http) {
        this._http = _http;
        this._baseURL = 'api/articles';
    }
    ArticlesService.prototype.create = function (article) {
        return this._http
            .post(this._baseURL, article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.read = function (articleId) {
        return this._http
            .get(this._baseURL + "/" + articleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.update = function (article) {
        return this._http
            .put(this._baseURL + "/" + article._id, article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.delete = function (articleId) {
        return this._http
            .delete(this._baseURL + "/" + articleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.list = function () {
        return this._http
            .get(this._baseURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.queryList = function (params) {
        return this._http
            .get(this._baseURL + "?" + params)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.listPopOrder = function (params) {
        return this._http
            .get(this._baseURL + "/listPopOrder?" + params)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // insertOrderDates(article: any): Observable<any> {
    // 	return this._http
    // 		.post(`${this._baseURL}/insertOrderDates`, article)
    // 		.map((res: Response) => res.json())
    // 		.catch(this.handleError);
    // }
    ArticlesService.prototype.insertOrderDates = function (article) {
        return this._http
            .post("api/order/create", article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().message || 'Server error');
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ArticlesService);

var _a;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/articles/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_service__ = __webpack_require__("../../../../../src/app/articles/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = (function () {
    // CONSTRUCTOR
    function CreateComponent(_authenticationService, _router, _articlesService, elRef, fb, ref, _route) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._articlesService = _articlesService;
        this.elRef = elRef;
        this.fb = fb;
        this.ref = ref;
        this._route = _route;
        this.titleAlert = 'This field is required';
        this.flagIsEdit = false;
        this.article = {};
        this.user = {};
        this.user = _authenticationService.user;
        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }
        // //if opening edit page load asset info
        // this.routingObserver = this._route.params.subscribe(params => {
        //   if (params['articleId'] != undefined) {
        //     this.flagIsEdit = true;
        //     let articleId = params['articleId'];
        //     this._articlesService.read(articleId).subscribe(
        //       article => {
        //         this.article = article;
        //         this.imgGalleryUploaded = this.article.imgUrl;
        //       },
        //       error => {
        //         alert('failed to load asset page. \nplease try again.');
        //         this._router.navigate(['/articles']);
        //       }
        //     );
        //   }
        // });
    }
    CreateComponent.prototype.ngOnInit = function () {
    }; //end of ngoninit
    //upload article to server with images
    CreateComponent.prototype.createArticle = function () {
    };
    //send to create new article 
    CreateComponent.prototype.uploadArticle = function () {
        this._articlesService.create(this.article).subscribe(function (createdArticle) {
            /*this.navigate(createdArticle);*/ 
        }, function (error) {
            alert('failed to upload article! \nplease try again \nerror: ' + error);
        });
    };
    CreateComponent.prototype.initParams = function () {
        this.article.title = '';
        // this.rFormStep1 = this.fb.group({
        //   'title': [null, Validators.required],
        //   'content': [null, Validators.required],
        // });
    };
    CreateComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'create',
        template: __webpack_require__("../../../../../src/app/articles/create/create.template.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object])
], CreateComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles/create/create.template.html":
/***/ (function(module, exports) {

module.exports = "create article\r\n\r\n\r\ninsert title:\r\n<input type=\"text\" name=\"title\"  [(ngModel)]=\"article.title\">\r\n<button (click)=\"uploadArticle();\">save article</button>"

/***/ }),

/***/ "../../../../../src/app/articles/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("../../../../../src/app/articles/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(_articlesService, _route, ref) {
        var _this = this;
        this._articlesService = _articlesService;
        this._route = _route;
        this.ref = ref;
        this._articlesService.list().subscribe(function (articles) {
            _this.articles = articles;
        }, function (error) { return alert("Error in bringing results: " + error); });
    }
    ListComponent.prototype.ngOnInit = function () {
        // this.search = {};
        // this.search.dates = [];
        // setTimeout(() => {
        // 	this.routingObserver = this._route.params.subscribe(params => {
        // 		if (params && params['searchStr']) {
        // 			this.getListWithParam(params['searchStr']);
        // 		}
        // 		else {
        // 			//bring all markers
        // 			this._articlesService.list().subscribe(articles => {
        // 				this.articles = articles;
        // 				this.articles.forEach(article => {
        // 					article.created = article.created.substring(0, 10);
        // 					this.createMarker(article);
        // 				});
        // 			},
        // 				error => alert("Error in bringing results: " + error)
        // 			);
        // 		}
        // 	});
        // }, 0);
    };
    ListComponent.prototype.findByCity = function () {
        var searchStr = '';
        if (this.search.city && this.search.city !== undefined)
            searchStr = "city=" + this.search.city;
        if (this.search.dates)
            // searchStr +=`&startDate=${new Date(this.refDates.beginDate.year,this.refDates.beginDate.month -1,this.refDates.beginDate.day ) }&endDate=${ new Date(this.refDates.endDate.year,this.refDates.endDate.month -1,this.refDates.endDate.day) }`;
            searchStr += "&startDate=" + new Date(this.search.dates.startDate) + "&endDate=" + new Date(this.search.dates.endDate);
        if (this.search.size)
            searchStr += "&size=" + this.search.size;
        if (this.search.assetType)
            searchStr += "&assetType=" + this.search.assetType;
        this.getListWithParam(searchStr);
    };
    ListComponent.prototype.getListWithParam = function (searchStr) {
        var _this = this;
        this._articlesService.queryList(searchStr).subscribe(function (articles) {
            _this.articles = articles;
            _this.articles.forEach(function (article) {
                article.created = article.created.substring(0, 10);
            });
        }, function (error) { return console.log("Error in bringing results: ", error); });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'list',
        template: __webpack_require__("../../../../../src/app/articles/list/list.template.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles/list/list.template.html":
/***/ (function(module, exports) {

module.exports = "list article!!!!!!!!!!!!!!!!\r\n!!!!!!!!!!!!!!!!!!!!1\r\n!!!!!!!!!!!!11\r\n\r\n<br>\r\n\r\n    <div *ngFor=\"let article of articles\">\r\n     article title: {{ article.title }} \r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_service__ = __webpack_require__("../../../../../src/app/articles/articles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = (function () {
    function ViewComponent(_router, _route, _authenticationService, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._articlesService = _articlesService;
        this.allowEdit = false;
        this.isClassVisible = false;
        this.dateRange = {};
        this.imgToggleCount = 0;
        this.map = null;
        this.titleAlert = '';
        this.order = {};
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.routingObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService
                .read(articleId)
                .subscribe(function (article) {
                _this.article = article;
                _this.allowEdit = (_this.user && _this.user._id === _this.article.creator._id);
                _this.initOrderDatesArray();
                _this.loadMap();
            }, function (error) { return _this._router.navigate(['/articles']); });
        });
        this.order.phone == '';
        this.order.content = '';
    };
    ViewComponent.prototype.loadMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = new google.maps.Map(document.getElementById('assetMap'), {
                center: { lat: _this.article.location[1], lng: _this.article.location[0] },
                zoom: 12,
                disableDefaultUI: true,
                streetViewControl: false,
                zoomControl: true,
                draggable: false,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }, 0);
    };
    ViewComponent.prototype.initOrderDatesArray = function () {
    };
    //toggle img index to view in gallery
    ViewComponent.prototype.toggleImg = function (next) {
        if (next) {
            if (this.article.imgUrl.length > (this.imgToggleCount + 1))
                this.imgToggleCount++;
            else
                this.imgToggleCount = 0;
        }
        else {
            if ((this.imgToggleCount) == 0)
                this.imgToggleCount = this.article.imgUrl.length - 1;
            else
                this.imgToggleCount--;
        }
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.routingObserver.unsubscribe();
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        this._articlesService.delete(this.article._id).subscribe(function (deletedArticle) { return _this._router.navigate(['/articles']); }, function (error) { return _this.errorMessage = error; });
    };
    ViewComponent.prototype.sendOrderDateRequest = function () {
        var _this = this;
        if (this.order.phone == '' || this.order.content == '')
            this.titleAlert = 'יש למלא את כל השדות';
        else {
            this.article.orderPhone = this.order.phone;
            this.article.orderContent = this.order.content;
            this._articlesService.insertOrderDates(this.article).subscribe(function (order) {
                return _this.pushNotificatinToOwnAsset(order);
            }, function (error) { return _this.titleAlert = error; });
        }
    };
    ViewComponent.prototype.pushNotificatinToOwnAsset = function (order) {
        var message = {
            text: 'bla bla pushNotificatinToOwnAsset',
            user: this.article.creator._id,
            articleId: this.article._id,
            orderId: order._id
        };
        // this._chatService.emit('NotificationOrderRequest', message);
        this.titleAlert = 'הבקשה נשלחה בהצלחה';
    };
    return ViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('ref'),
    __metadata("design:type", Object)
], ViewComponent.prototype, "ref", void 0);
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'view',
        template: __webpack_require__("../../../../../src/app/articles/view/view.template.html"),
        styles: [
            "\n  .my-class {\n    background-color: yellow;\n  }\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */]) === "function" && _d || Object])
], ViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles/view/view.template.html":
/***/ (function(module, exports) {

module.exports = "view article"

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'authentication',
        template: __webpack_require__("../../../../../src/app/authentication/authentication.template.html"),
    })
], AuthenticationComponent);

//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_routes__ = __webpack_require__("../../../../../src/app/authentication/authentication.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_component__ = __webpack_require__("../../../../../src/app/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__ = __webpack_require__("../../../../../src/app/authentication/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("../../../../../src/app/authentication/signup/signup.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__authentication_routes__["a" /* AuthenticationRoutes */]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
        ]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_component__ = __webpack_require__("../../../../../src/app/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_signin_component__ = __webpack_require__("../../../../../src/app/authentication/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/authentication/signup/signup.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutes; });



var AuthenticationRoutes = [{
        path: 'authentication',
        component: __WEBPACK_IMPORTED_MODULE_0__authentication_component__["a" /* AuthenticationComponent */],
        children: [
            { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_1__signin_signin_component__["a" /* SigninComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
        ],
    }];
//# sourceMappingURL=authentication.routes.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.signin = function (credentials) {
        var _this = this;
        var body = JSON.stringify(credentials);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._signupURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().message || 'Server error');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.template.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:100px\">\n\n <div class=\"col-md-12 text-center\">\n\n      <a href=\"/oauth/facebook\"> login with facebook<img style=\"width: 80px;\" src=\"/assets/facebook.png\"></a>\n\t <a href=\"/oauth/google\">login with google<img style=\"width: 80px;\" src=\"assets/google.png\"></a>\n\n\n    <!--<a href=\"/api/oauth/google\">Sign in with Google</a>-->\n  <!--<i class=\"fa fa-facebook\" style=\"font-size:30px\"></i>-->\n    <router-outlet></router-outlet>\n</div>\n </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/authentication/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this._authenticationService.signin(this.credentials).subscribe(function (result) {
            //  window.location.reload(),
            return _this._router.navigate(['/']);
        }, function (error) { return _this.errorMessage = error; });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'signin',
        template: __webpack_require__("../../../../../src/app/authentication/signin/signin.template.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/signin/signin.template.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<section class=\"module login\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-lg-offset-12\"> \n        <p>Don't have an account? <strong><a [routerLink]=\"['/authentication/signup']\">Register here.</a></strong></p> \n\n        <form  (ngSubmit)=\"signin()\" class=\"login-form\">\n          <div class=\"form-block\">\n             <label>Username:</label>\n        <input class=\"border\" type=\"text\" [(ngModel)]=\"credentials.username\" name=\"username\">\n          </div>\n          <div class=\"form-block\">\n             <label>Password:</label>\n        <input class=\"border\" type=\"password\" [(ngModel)]=\"credentials.password\" name=\"password\">\n          </div>\n          <div class=\"form-block\">\n            <label><input type=\"checkbox\" name=\"remember\" />Remember Me</label><br/>\n          </div>\n          <div class=\"form-block\">\n          <input class=\"button button-icon\"  type=\"submit\" value=\"Sign In\">\n          </div>\n      <span>{{errorMessage}}</span>   \n        </form>\n      </div>\n    </div><!-- end row -->\n\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.user = {};
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._authenticationService.signup(this.user)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'signup',
        template: __webpack_require__("../../../../../src/app/authentication/signup/signup.template.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.template.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"module login\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-lg-offset-12\"> \n        <p>already have an account? <strong><a [routerLink]=\"['/authentication/signin']\">Login here.</a></strong></p> \n\n        <form  (ngSubmit)=\"signup()\" class=\"login-form\">\n          \n          <div class=\"form-block\">\n            <label>First Name:</label>\n            <input class=\"border\" type=\"text\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\n          </div>\n\n           \n          <div class=\"form-block\">\n            <label>Last Name:</label>\n            <input class=\"border\" type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\n          </div>\n\n           \n          <div class=\"form-block\">\n             <label>Email:</label>\n        <input class=\"border\" type=\"text\" [(ngModel)]=\"user.email\" name=\"email\">\n          </div>\n\n           \n          <div class=\"form-block\">\n             <label>Username:</label>\n        <input class=\"border\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\">\n          </div>\n\n           \n          <div class=\"form-block\">\n             <label>Password:</label>\n        <input class=\"border\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\">\n          </div>\n\n\n\n\n          <div class=\"form-block\">\n            <label><input type=\"checkbox\" name=\"remember\" />Remember Me</label><br/>\n          </div>\n          <div class=\"form-block\">\n          <input class=\"button button-icon\"  type=\"submit\" value=\"Sign up\">\n          </div>\n             <span>{{errorMessage}}</span>   \n        </form>\n      </div>\n    </div><!-- end row -->\n\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = new Array();
        this._chatService.on('userMessage', function (msg) {
            _this.messages.push(msg);
        });
        this._chatService.on('chatMessage', function (msg) {
            _this.messages.push(msg);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var message = {
            text: this.messageText,
            user: '59ad50523895fb08c8bc9c7c'
        };
        this._chatService.emit('chatMessage', message);
        this.messageText = '';
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this._chatService.removeListener('chatMessage');
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.template.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_routes__ = __webpack_require__("../../../../../src/app/chat/chat.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__chat_routes__["a" /* ChatRoutes */]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__chat_component__["a" /* ChatComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__chat_service__["a" /* ChatService */]
        ]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutes; });

var ChatRoutes = [{
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_0__chat_component__["a" /* ChatComponent */]
    }];
//# sourceMappingURL=chat.routes.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function () {
    function ChatService(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        if (this._authenticationService.isLoggedIn()) {
            this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__();
        }
        else {
            this._router.navigate(['Home']);
        }
    }
    ChatService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    ChatService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    ChatService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], ChatService);

var _a, _b;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.template.html":
/***/ (function(module, exports) {

module.exports = "rrrrrrrrrrrrrrrrrrrrrrrrrrrrr\r\n\r\n\r\n<div style=\"margin-top :100px\">\r\n\r\n<div *ngFor=\"let message of messages\" [ngSwitch]=\"message.type\">\r\n    <strong *ngSwitchCase=\"'status'\">\r\n\t\t<span>{{message.created}}</span>\r\n\t\t<span>{{message.username}}</span>\r\n\t\t<span>is</span>\r\n\t\t<span>{{message.text}}</span>\r\n    </strong>\r\n    <span *ngSwitchDefault>\r\n\t    <span>{{message.created}}</span>\r\n\t    <span>{{message.username}}:</span>\r\n\t    <span>{{message.text}}</span>\r\n    </span>\r\n</div>\r\n<form (ngSubmit)=\"sendMessage()\">\r\n    <input type=\"text\" name= \"messageText\" [(ngModel)]=\"messageText\">\r\n    <input type=\"submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.user = _authenticationService.user;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/header/header.template.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"container-fluid navbar navbar-expand-md fixed-top headerStyle transDarkBg\">\r\n  <div class=\"d-flex justify-content-lg-around\">\r\n    <a class=\"\" href=\"#\">\r\n      <img src=\"../../assets/images/logo.png\" alt=\"\" class=\"img-fluid\">\r\n    </a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav linkBar text-white\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">HOME </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">ABOUT</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">WHITEPAPER</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">FAQ</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\"[routerLink]=\"['/articles/create']\">UPLOAD </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\"  [routerLink]=\"['/articles']\">LIST </a>\r\n          </li>\r\n        </ul>\r\n\r\n      <div class=\"searchInputContainer text-white d-flex inner-addon\">\r\n        <span class=\"align-self-center\"  *ngIf=\"!user\"> <a [routerLink]=\"['/authentication/signin']\">login</a> </span>\r\n        <div *ngIf=\"user\">hello: {{user.firstName}}</div>\r\n        <input type=\"text\" placeholder=\"search\" class=\"searchInput rounded form-control text-white\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n\r\n\r\n                        <a [routerLink]=\"['/articles']\">ALL ASSETS</a>\r\n                  \r\n                    <li *ngIf=\"user\"><a [routerLink]=\"['/articles/create']\">Upload reciept</a> </li>\r\n                   <li *ngIf=\"!user\"><a [routerLink]=\"['/authentication/signup']\">Signup</a></li>\r\n                    <li *ngIf=\"!user\"><a [routerLink]=\"['/authentication/signin']\">Signin</a></li>\r\n                    <div *ngIf=\"user\">\r\nhello: {{user.firstName}}\r\n                      </div> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n/*@import '../style/css/core-style.css';\r\n@import '../style/style.css';   \r\n\r\n@import '../style/css/fonts/opensans.css';\r\n@import '../style/css/responsive.css';\r\n\r\n@import '../style/revolution/css/settings-source.css';\r\n\r\n@import '../style/revolution/css/settings.css';\r\n@import '../style/revolution/css/layers.css';\r\n@import '../style/revolution/css/navigation.css';*/\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_list_list_component__ = __webpack_require__("../../../../../src/app/articles/list/list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    // cities: any = ["Lod","Tel Aviv","Jerusalem","Kfar Saba","Or Yehuda","Azor","Bat Yam","Ramat Gan","Holon","Ashdod","Beersheba","Yehud","Rishon LeZion","Hazav","Ness Ziona","Eilat","Rehovot","Herzliya","Nahariya","Haifa","Shave Ziyyon","Ramat HaSharon","Ramat Poleg","Kadima","Karmi'el","Pardesiyya","Netanya","Gan Yavne","Petah Tikwah","Ashqelon","Savyon","Naham","Mazkeret Batya","`Arugot","Ofaqim","Shetulim","Hadera","Qiryat Bialik","Tel Mond","Hod HaSharon","Qiryat Yam","Shelomi","Binyamina","Liman","`Alma","Ramla","Nazareth","Et Taiyiba","Rinnatya","Yavne","Acre","Nazerat `Illit","Baraq","Even Yehuda","Nesher","Pardes Hanna Karkur","Netivot","Tirat Karmel","Or `Aqiva","Kefar Yona","Bet Oren","Haluz","Biriyya","Gan Hayyim","Qiryat Tiv`on","Qiryat Gat","Be'er Toviyya","`En Ayyala","Misgav Regional Council","Safed","Gedera","Dimona","Bet Shemesh","`En HaShelosha","Herut","Mazor","Shamir","Ra'anana","Bat Hadar","Rosh Ha'Ayin","Zoran","Tirat Yehuda","Bareqet","Elyakhin","Hadid","Hadar Ramatayim","Modiin","Hazor Ashdod","Kefar Daniyyel","Newe Efrayim","Talme Menashe","Kefar Netter","Mazliah","Moran","Shoval","Ramat Aviv","Afiqim","Ramat Dawid","Sde Warburg","Magen","Karkur","Qiryat Ata","Maghar","Bet Alfa","Timrat","Elyaqim","Bet Dagan","Ginnosar","Qiryat Mal'akhi","Hadar `Am","maalot Tarshiha","Ahituv","Qiryat Motzkin","Migdal","Bat Hefer","Ben Shemen-Kefar Hano`ar","Emunim","Tiberias","Mikhmoret","Hever","Ramat Yishay","Sderot","Gimzo","Mesillat Ziyyon","Pasuta","Bet She'an","Newe Yamin","Nordiyya","HaKarmel","Gibbeton","Qiryat Ono","Sarid","Nir Zevi","Ramat Ef`al","Bene Ziyyon","Hurfeish","Shefayim","Dabburiya","Rishpon","Mizpe Netofa","Sde Boker","Yaqum","Bahan","Jaffa","Allonim","`Evron","Hazor HaGelilit","Ramot Naftali","Giv`at Hayyim","Urim","Sedot Yam","`Aseret","Nirim","`Amir","Ganne Tiqwa","Ma`agan Mikha'el","Qiryat Hayyim","Kefar Witqin"];
    function HomeComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.searchCity = '';
        this.mailDetails = {};
        this.user = _authenticationService.user;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // 		 this.initParams();
        // 		 		let searchBox: any = document.getElementById('search-box1');
        // 		let options = {  types: ['(cities)'],  componentRestrictions: {country: "il"}};
        //   	var autocomplete = new google.maps.places.Autocomplete(searchBox, options);
        //     //check address input and update vars
        //     autocomplete.addListener( 'place_changed', () => {
        //       //if address is unknown or missing data then alert & offer to add manually on the map
        //       if (autocomplete.getPlace().address_components !== undefined){
        //         // let missingField = this.checkAddressComplete(autocomplete.getPlace().address_components);
        // this.searchCity = autocomplete.getPlace().address_components[0].short_name;
        //       }
        //     });  
    };
    HomeComponent.prototype.changeDoc = function (str) {
        this.searchDoc = str;
    };
    HomeComponent.prototype.search = function () {
        //  if(this.searchCity == '')
        // 	this._router.navigate(['/articles']) 
        // else{
        // let searchStr = `city=${this.searchCity}`;
        // this._router.navigate(['/articles', searchStr,'list'])
        // }
    };
    HomeComponent.prototype.sendMail = function () {
        alert('ddddddddddddddddddd');
        var searchStr = "email=popapp.place@gmail.com&emailHTML=from:" + this.mailDetails.from + "title:" + this.mailDetails.title + "content:" + this.mailDetails.content + "phone:" + this.mailDetails.phone;
        // this._coreService.sendMail(searchStr).subscribe(
        // 		notifications => {
        // 		 alert('email sent')
        // 		},
        // 	 error => alert('error   mail')//this._router.navigate([''])
        // 	);
    };
    HomeComponent.prototype.initParams = function () {
        // this.mailDetails.from = '';
        // this.mailDetails.title = '';
        // this.mailDetails.content = '';
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.template.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__articles_list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__articles_articles_module__ = __webpack_require__("../../../../../src/app/articles/articles.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__articles_articles_module__["a" /* ArticlesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__home_routes__["a" /* HomeRoutes */]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */],
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });

var HomeRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
    }];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.template.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <list></list> -->\r\n<div id=\"view\">\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"\"></li>\r\n          </ol>\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"first-slide flat-image\" src=\"../../assets/images/laptop.png\" alt=\"First slide\">\r\n              <div class=\"container\">\r\n                <div class=\"carousel-caption d-none d-md-block text-left\">\r\n                  <h1>Example headline.</h1>\r\n                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                  <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"second-slide\" src=\"../../assets/images/Koala.png\" alt=\"Second slide\">\r\n              <div class=\"container\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <h1>Another example headline.</h1>\r\n                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                  <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"third-slide\" src=\"../../assets/images/laptop.png\" alt=\"Third slide\">\r\n              <div class=\"container\">\r\n                <div class=\"carousel-caption d-none d-md-block text-right\">\r\n                  <h1>One more for good measure.</h1>\r\n                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                  <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </div>\r\n    \r\n        <!-- Catalog of a sort -->\r\n        <section class=\"my-5 font-weight-bold\">\r\n            <div class=\"album container\">\r\n                <div class=\"row my-3\">\r\n                    <div class=\"col-4\">\r\n                        <span> Quick Salad </span>\r\n                        <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                        <div class=\"pt-1 d-flex justify-content-between\">\r\n                          <div>\r\n                              <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                          <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                              </span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <span> Recommended Recipes </span>\r\n                        <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                        <div class=\"pt-1 d-flex justify-content-between\">\r\n                          <div>\r\n                              <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                          <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                              </span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <span> Main Dishes </span>\r\n                        <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                        <div class=\"pt-1 d-flex justify-content-between\">\r\n                          <div>\r\n                              <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                          <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                              </span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row my-3\">\r\n                    <div class=\"col-4\">\r\n                        <span> Quick Salad </span>\r\n                        <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                        <div class=\"pt-1 d-flex justify-content-between\">\r\n                          <div>\r\n                              <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                          <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                              </span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <span> Recommended Recipes </span>\r\n                        <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                        <div class=\"pt-1 d-flex justify-content-between\">\r\n                          <div>\r\n                              <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                          <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                              </span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <span> Main Dishes </span>\r\n                        <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                        <div class=\"pt-1 d-flex justify-content-between\">\r\n                          <div>\r\n                              <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                          <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                              </span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                            <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                </div>  \r\n            </div>\r\n        </section>\r\n    \r\n        <!-- Recent videos -->\r\n        <section class=\"jumbotron jumbotron-fluid mb-0\">\r\n            <div class=\"container font-weight-bold\">\r\n                <h2 class=\"text-center\"> \r\n                    RECENT VIDEOS \r\n                </h2>\r\n                <div class=\"album mt-5\">\r\n                    <div class=\"row my-3\">\r\n                        <div class=\"col-4\">\r\n                            <span> Quick Salad </span>\r\n                            <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                            <div class=\"pt-1 d-flex justify-content-between\">\r\n                              <div>\r\n                                  <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                              <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                                  </span>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n            \r\n                        <div class=\"col-4\">\r\n                            <span> Quick Salad </span>\r\n                            <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                            <div class=\"pt-1 d-flex justify-content-between\">\r\n                              <div>\r\n                                  <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                              <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                                  </span>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n            \r\n                        <div class=\"col-4\">\r\n                            <span> Quick Salad </span>\r\n                            <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                            <div class=\"pt-1 d-flex justify-content-between\">\r\n                              <div>\r\n                                  <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                              <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                                  </span>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n    \r\n                    <div class=\"row my-3\">\r\n                        <div class=\"col-4\">\r\n                            <span> Quick Salad </span>\r\n                            <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                            <div class=\"pt-1 d-flex justify-content-between\">\r\n                              <div>\r\n                                  <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                              <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                                  </span>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n            \r\n                        <div class=\"col-4\">\r\n                            <span> Quick Salad </span>\r\n                            <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                            <div class=\"pt-1 d-flex justify-content-between\">\r\n                              <div>\r\n                                  <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                              <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                                  </span>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n            \r\n                        <div class=\"col-4\">\r\n                            <span> Quick Salad </span>\r\n                            <img src=\"../../assets/images/albumimage.png\" alt=\"\" class=\"image-fluid flat-image\">\r\n                            <div class=\"pt-1 d-flex justify-content-between\">\r\n                              <div>\r\n                                  <span class=\"d-inline-block text-success\">  <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i>\r\n                                                                              <i class=\"fa fa-star\"> </i>  <i class=\"fa fa-star\"> </i> <i class=\"fa fa-star\"> </i>\r\n                                  </span>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-thumbs-o-up\"> 569 </i> </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-comment-o\"> 350 </i>  </span>\r\n                                <span class=\"d-inline-block text-dark px-1\"> <i class=\"fa fa-share-square-o\"> </i> </span>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    \r\n        <!-- Subscribe for updates -->\r\n        <section class=\"mb-0 bg-success\">\r\n            <div class=\"mx-auto w-50 text-center py-5\">\r\n                <h4 class=\"display-5 font-weight-bold\"> SUBSCRIBE FOR UPDATES </h4>\r\n    \r\n                <div class=\"font-weight-bold w-75 mx-auto\">\r\n                    <div class=\"row\">\r\n                        <p class=\"mt-5\"> Stay up to date with the latest Culidough news, developments, offers, roadmap additions, team updates, investments and crowdfunding campaings.</p>\r\n                    </div>\r\n                                \r\n                    <form class=\"row my-3 form-inline\">\r\n                        <!-- <label class=\"sr-only\" for=\"subscribeInput\">Name</label> -->                \r\n                        <div class=\"col-7\">\r\n                            <input type=\"text\" id=\"subscribeInput\" class=\"form-control form-control-lg rounded m-2 w-100\" placeholder=\"Email Address\"> \r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                            <button type=\"submit\" class=\"btn btn-dark btn-lg btn-block rounded\"> Sign up </button>          \r\n                        </div>\r\n                    </form>\r\n    \r\n                    <div class=\"row\">\r\n                        <div class=\"col text-left\"> Here there shall be icons </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n      </div>\r\n    \r\n      <!-- End render views -->\r\n    \r\n      <footer id=\"footer\" class=\"jumbotron jumbotron-fluid bg-dark\">\r\n        <div class=\"w-75 mx-auto w-sm-100\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4 col-md-4 col-sm-12\">\r\n              <img src=\"../../assets/images/logo.png\" alt=\"image-fluid\" class=\"w-75 mx-auto\">\r\n            </div>\r\n    \r\n            <div class=\"footer-nav col-4 col-md-4 col-sm-12 d-flex justify-content-between\">\r\n              <dl>\r\n                <dt class=\"\"> EXPLORE </dt>\r\n                <dd class=\"\">\r\n                  <ul>\r\n                    <li> <a href=\"\"> Home </a> </li>\r\n                    <li> <a href=\"\"> Business </a> </li>\r\n                    <li> <a href=\"\"> Partners </a> </li>\r\n                  </ul>\r\n                </dd>\r\n              </dl>\r\n    \r\n              <dl>\r\n                <dt class=\"\"> COMPANY </dt>\r\n                <dd class=\"\">\r\n                  <ul>\r\n                    <li> <a href=\"\"> About us </a> </li>\r\n                    <li> <a href=\"\"> Jobs </a> </li>\r\n                    <li> <a href=\"\"> Terms </a> </li>\r\n                    <li> <a href=\"\"> Privacy </a> </li>\r\n                  </ul>\r\n                </dd>\r\n              </dl>\r\n              \r\n              <dl>\r\n                <dt class=\"\"> GET IN TOUCH </dt>\r\n                <dd class=\"\">\r\n                  <ul>\r\n                    <li> <a href=\"\"> Contact us </a> </li>\r\n                    <li class=\"icon-block\"> \r\n                      <i class=\"fa fa-facebook\"></i>\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                      <i class=\"fa fa-github\"></i>\r\n                    </li>\r\n                  </ul>\r\n                </dd>\r\n              </dl>\r\n            </div>\r\n    \r\n            <div class=\"col-3 col-md-3 col-sm-12\">\r\n              images\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    "

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map