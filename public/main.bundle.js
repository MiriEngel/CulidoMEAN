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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__articles_articles_module__["a" /* ArticlesModule */],
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

/***/ "../../../../../src/app/articles/article.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return eAmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eAssetType; });
/* unused harmony export eOrderStatus */
/* unused harmony export articleModel */
var eAmenities;
(function (eAmenities) {
})(eAmenities || (eAmenities = {}));
var eAssetType;
(function (eAssetType) {
})(eAssetType || (eAssetType = {}));
var eOrderStatus;
(function (eOrderStatus) {
    eOrderStatus[eOrderStatus["ok"] = 0] = "ok";
    eOrderStatus[eOrderStatus["new"] = 1] = "new";
    eOrderStatus[eOrderStatus["cancel"] = 2] = "cancel";
})(eOrderStatus || (eOrderStatus = {}));
var articleModel = (function () {
    function articleModel() {
    }
    return articleModel;
}());

//# sourceMappingURL=article.model.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArticlesService);

var _a;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/articles/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_service__ = __webpack_require__("../../../../../src/app/articles/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_model__ = __webpack_require__("../../../../../src/app/articles/article.model.ts");
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






var URL = 'api/articles/uploadPics';
var CreateComponent = (function () {
    // CONSTRUCTOR
    function CreateComponent(_router, _articlesService, http, elRef, fb, ref, _route) {
        var _this = this;
        this._router = _router;
        this._articlesService = _articlesService;
        this.http = http;
        this.elRef = elRef;
        this.fb = fb;
        this.ref = ref;
        this._route = _route;
        // LOCAL PARAMS 
        this.optionsAssetType = Object.keys(__WEBPACK_IMPORTED_MODULE_5__article_model__["a" /* eAssetType */]);
        this.optionsAmenities = Object.keys(__WEBPACK_IMPORTED_MODULE_5__article_model__["b" /* eAmenities */]);
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.article = {};
        this.showSpinner = false;
        this.map = null;
        this.mapMoved = false;
        this.imgGallery = [];
        this.imgGalleryUploaded = []; //load to display images when editing
        this.imgFileArr = [];
        this.isLocationComplete = false;
        this.location = {};
        this.titleAlert = 'This field is required';
        this.flagIsEdit = false;
        this.isVisibleFurnitureTxt = false;
        this.filesToUpload = [];
        //if opening edit page load asset info
        this.routingObserver = this._route.params.subscribe(function (params) {
            if (params['articleId'] != undefined) {
                _this.flagIsEdit = true;
                var articleId = params['articleId'];
                _this._articlesService.read(articleId).subscribe(function (article) {
                    _this.article = article;
                    _this.imgGalleryUploaded = _this.article.imgUrl;
                }, function (error) {
                    alert('failed to load asset page. \nplease try again.');
                    _this._router.navigate(['/articles']);
                });
            }
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initParams();
        // ADDRESS FIELD INIT+LISTENER
        var searchBox = document.getElementById('search-box');
        var options = { types: ['geocode',] };
        var autocomplete = new google.maps.places.Autocomplete(searchBox, options);
        //check address input and update vars
        autocomplete.addListener('place_changed', function () {
            //if address is unknown or missing data then alert & offer to add manually on the map
            if (autocomplete.getPlace().address_components !== undefined) {
                var missingField = _this.checkAddressComplete(autocomplete.getPlace().address_components);
                if (missingField !== '') {
                    _this.location.number = '';
                    _this.location.street = '';
                    _this.location.city = '';
                    _this.location.country = '';
                    alert(missingField + ' field is missing \nplease type again or choose directly on the map');
                    _this.isLocationComplete = true;
                }
                else {
                    _this.isLocationComplete = false;
                    _this.bindAddressFields(autocomplete.getPlace().address_components);
                    //add here flag to approve that given address is good so can move to next step
                    //set map center
                    _this.placeChanged(autocomplete.getPlace().geometry.location.lat(), autocomplete.getPlace().geometry.location.lng(), autocomplete.getPlace().formatted_address);
                    _this.map.setCenter(autocomplete.getPlace().geometry.location);
                }
            }
            else {
                alert('unknown address. please try again');
                _this.isLocationComplete = true;
            }
        });
    }; //end of ngoninit
    //upload article to server with images
    CreateComponent.prototype.createArticle = function () {
        // if (this.flagIsEdit == false) {
        //   this.showSpinner = true;
        //   //if user added images upload them then create article
        //   if (this.imgGallery.length > 0) {
        //     this.uploadImagesToServer().then(imgLinks => {
        //       imgLinks.forEach(imgLink => this.article.imgUrl.push(imgLink));
        //       this.uploadArticle();
        //     })
        //   }
        //   else
        //     this.uploadArticle();
        // }
        // else {
        //   this._articlesService.update(this.article).subscribe(
        //     updateddArticle => this.navigate(updateddArticle),
        //     error => this.errorMessage = error);
        // }
    };
    //send to create new article 
    CreateComponent.prototype.uploadArticle = function () {
        var _this = this;
        this._articlesService.create(this.article).subscribe(function (createdArticle) { _this.navigate(createdArticle); _this.showSpinner = false; }, function (error) {
            _this.errorMessage = error;
            _this.showSpinner = false;
            alert('failed to upload article! \nplease try again \nerror: ' + error);
        });
    };
    CreateComponent.prototype.navigate = function (createdArticle) {
        this._router.navigate(['/articles', createdArticle._id]);
    };
    //////////////////////////////////////
    /////// FORM STEPS MANAGMENT ////////
    CreateComponent.prototype.nextStep = function () {
        var $active = this.elRef.nativeElement.querySelector('.multi-page-form-content.active');
        var selects = this.elRef.nativeElement.querySelectorAll('.form-nav .form-nav-item.completed');
        selects = selects[selects.length - 1];
        selects.nextElementSibling.classList.add('completed');
        $active.classList.remove('active');
        $active.nextElementSibling.classList.add('active');
    };
    CreateComponent.prototype.prevStep = function () {
        var active = this.elRef.nativeElement.querySelector('.multi-page-form-content.active');
        var lastCompleted = this.elRef.nativeElement.querySelectorAll('.form-nav .form-nav-item.completed');
        lastCompleted = lastCompleted[lastCompleted.length - 1];
        lastCompleted.classList.remove('completed');
        active.classList.remove('active');
        active.previousElementSibling.classList.add('active');
    };
    // check fields before going to next step
    CreateComponent.prototype.postStep1 = function (post) {
        if (!this.rFormStep1.valid) {
            this.markFormGroupTouched(this.rFormStep1);
            return;
        }
        this.article.title = post.title;
        this.article.content = post.content;
        this.article.price.day = post.priceDay;
        this.article.price.week = post.priceWeek;
        this.article.price.month = post.priceMonth;
        this.article.size = post.size;
        this.nextStep();
    };
    CreateComponent.prototype.postStep2 = function (post) {
        this.nextStep();
    };
    CreateComponent.prototype.postStep3 = function (post) {
        if (!this.rFormStep3.valid) {
            this.markFormGroupTouched(this.rFormStep3);
            return;
        }
        this.nextStep();
    };
    CreateComponent.prototype.postStep4 = function (post) {
        this.nextStep();
    };
    CreateComponent.prototype.postStep5 = function (post) {
        if (!this.rFormStep5.valid) {
            this.markFormGroupTouched(this.rFormStep5);
            return;
        }
        this.article.startDate = post.startDate;
        this.article.endDate = post.endDate;
        this.article.phone = post.phone;
        this.createArticle();
    };
    /////// END OF FORM STEPS MANAGMENT ////////
    CreateComponent.prototype.onchange = function (select) {
        this.article.assetType = select;
    };
    CreateComponent.prototype.onchangeAmenities = function (event) {
        var item = event.currentTarget.innerText.trim();
        if (event.target.checked)
            this.article.amenities.indexOf(item) === -1 ? this.article.amenities.push(item) : console.log('cc');
        else
            this.article.amenities = this.article.amenities.filter(function (i) { return i !== item; });
        if (item == 'ריהוט')
            this.isVisibleFurnitureTxt = event.target.checked;
    };
    CreateComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CreateComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    CreateComponent.prototype.initParams = function () {
        this.optionsAssetType = this.optionsAssetType.slice(this.optionsAssetType.length / 2);
        this.optionsAmenities = this.optionsAmenities.slice(this.optionsAmenities.length / 2);
        this.article.assetType = this.optionsAssetType[0];
        this.article.amenities = [];
        this.article.imgUrl = [];
        this.article.assetType = '';
        this.article.price = {};
        this.rFormStep1 = this.fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'content': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'priceDay': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'priceWeek': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'priceMonth': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'assetType': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'size': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
        });
        this.rFormStep3 = this.fb.group({
            'location': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'country': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'city': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'street': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'streetNumber': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
        });
        this.rFormStep5 = this.fb.group({
            'startDate': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'endDate': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]
        });
    };
    //////////////////////////////////////////////////////////
    ///////////////// IMG PROCCESSING ///////////////////////
    //load chosen img to cache and for preview 
    CreateComponent.prototype.loadImg = function (event) {
        var _this = this;
        //temp params
        this.imgTemps = event.target.files[0]; //get the img that was chosen
        var fileReader = new FileReader();
        var tempImg = new Image();
        var canvas = document.createElement('canvas');
        var imgH = 0;
        var imgW = 0;
        var ctx = canvas.getContext("2d");
        var maxSize = 500; //image size limit 
        //load img to cache
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = function (e) {
            tempImg.src = fileReader.result;
            tempImg.onload = function () {
                //get img dimentions and change size according to maxSize
                imgW = tempImg.width;
                imgH = tempImg.height;
                if (tempImg.width > tempImg.height) {
                    if (tempImg.width > maxSize) {
                        canvas.width = maxSize;
                        canvas.height = tempImg.height * (maxSize / tempImg.width);
                    }
                    else {
                        canvas.width = tempImg.width;
                        canvas.height = tempImg.height;
                    }
                }
                else {
                    if (tempImg.height > maxSize) {
                        canvas.height = maxSize;
                        canvas.width = tempImg.width * (maxSize / tempImg.height);
                    }
                    else {
                        canvas.width = tempImg.width;
                        canvas.height = tempImg.height;
                    }
                }
                //draw new img
                ctx.drawImage(tempImg, 0, 0, canvas.width, canvas.height);
                _this.imgGallery.push(canvas.toDataURL('image/jpeg'));
                //make small copy for later 
                //add here min to small img and insert to smallImgGallery
            };
        };
    };
    // //call async func to upload images from preview and return array of links
    // uploadImagesToServer(): Promise<any> {
    //   let promise: any;
    //   promise = new Promise((resolve, reject) => {
    //     this.imgUploader.uploadImagesToS3(this.imgGallery).then((res) => {
    //       resolve(res);
    //     });
    //   });
    //   return promise;
    // }
    // //test upload all img from button
    // uploadImages() {
    //   this.imgUploader.uploadImagesToS3(this.imgGallery).then((res) => {
    //     res.forEach(res => { console.log(res); });
    //     alert('finished uploading');
    //     return res;
    //   });
    // }
    // //remove uploaded img from preview
    // removeImg(i) {
    //   //add here to check to erase img from db if this image was already uploaded 
    //   //remove item from view+uploader queues
    //   this.imgGallery.splice(i, 1);
    // }
    // //delete an image that was already uploaded when editing 
    // removeImgExisting(i) {
    //   //remove link from S3
    //   this.imgUploader.deleteFromS3(this.imgGalleryUploaded[i], '').then((res)=>{
    //     if (res){  //if successfuly erased then 
    //       //update local params and the article in the DB
    //       this.article.imgUrl.splice(i, 1);      //remove link from article
    //       this.imgGalleryUploaded.splice(i, 1);  //remove link from local cache
    //       //update article in the DB
    //     }
    //   });
    // }
    //rotate img option
    CreateComponent.prototype.rotateImg = function (i) {
        var _this = this;
        var canvas = document.createElement('canvas');
        var tempImg = new Image();
        tempImg.src = this.imgGallery[i];
        tempImg.onload = function () {
            canvas.width = tempImg.height;
            canvas.height = tempImg.width;
            var ctx = canvas.getContext('2d');
            ctx.save();
            ctx.translate(tempImg.height / 2, tempImg.width / 2);
            ctx.rotate(90 * (Math.PI / 180));
            ctx.drawImage(tempImg, -(tempImg.width / 2), -(tempImg.height / 2));
            ctx.restore();
            _this.imgGallery[i] = canvas.toDataURL("image/jpeg");
        };
    };
    ///////////////// END OF IMG PROC /////////////////
    /////////////// LOCATION FUNCTIONS /////////////
    //// map init when opening address input page
    CreateComponent.prototype.loadMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = new google.maps.Map(document.getElementById('mapCreate'), {
                center: { lat: 32.078985, lng: 34.774306 },
                zoom: 12
            });
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
                    _this.map.setZoom(14);
                    console.log(position.coords);
                });
            }
            //save flag if user moved map 
            _this.map.addListener('dragstart', function () {
                _this.mapMoved = true;
            });
            //resolve the address from dragging the map
            _this.map.addListener('dragend', function () {
                _this.geoToString();
            });
        }, 0);
    };
    CreateComponent.prototype.getAddressValidator = function (condition) {
        return function fullAddressValidator(control) {
            if (condition) {
                return null;
            }
            else {
                return { invalid: false };
            }
        };
    };
    CreateComponent.prototype.bindAddressFields = function (address_components) {
        this.article.streetNumber = this.location.number = address_components[0].short_name;
        this.article.street = this.location.street = address_components[1].short_name;
        this.article.city = this.location.city = address_components[2].short_name;
        this.article.country = this.location.country = address_components[4].long_name;
        this.ref.detectChanges();
    };
    //when address changed update artice
    CreateComponent.prototype.placeChanged = function (lat, lng, address) {
        this.article.location = [];
        this.article.location[0] = lng;
        this.article.location[1] = lat;
        this.article.address = address;
    };
    //check if all needed address fields exist  
    CreateComponent.prototype.checkAddressComplete = function (address) {
        var count = 0;
        var missing = '';
        var addressFields = ['street_number', 'route', 'locality', 'country'];
        try {
            addressFields.forEach(function (field) {
                address.forEach(function (val) {
                    if (val.types[0] == field)
                        missing = field;
                });
                if (missing == '')
                    throw { field: field };
                else
                    missing = '';
            });
        }
        catch (e) {
            return e.field;
        }
        return missing;
    };
    //listen if press enter in address field
    CreateComponent.prototype.chooseAddressKeyPress = function (keyPress) {
        if (keyPress.keyCode == 13) {
            alert('choose an adress from autocomplete /nor move the map to choose manually');
            keyPress.stopPropagation();
        }
    };
    //translate geo coordinates to string  
    CreateComponent.prototype.geoToString = function () {
        // let geocoder = new google.maps.Geocoder();
        // let meh = this.map.getCenter();
        // geocoder.geocode({ location: meh }, (result, status) => {
        //   if (status === 'OK') {
        //     //! check what to do if no translation to string available
        //     if (result[0]) {
        //       this.placeChanged(
        //         result[0].geometry.location.lat(),
        //         result[0].geometry.location.lng(),
        //         result[0].formatted_address
        //       );
        //       this.bindAddressFields(result[0].address_components);
        //       //update search box with location string
        //       let x = document.getElementById('search-box');
        //       x.placeholder = '';
        //       x.value = result[0].formatted_address;
        //     }
        //   } else {  //if no resolve
        //     alert('map service unavailable. please try again \nerror:' + status);
        //   }
        // });
    };
    /////////////// END LOCATION FUNCTIONS /////////////
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'create',
        template: __webpack_require__("../../../../../src/app/articles/create/create.template.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__articles_service__["a" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object])
], CreateComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles/create/create.template.html":
/***/ (function(module, exports) {

module.exports = "create article"

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
        this._articlesService = _articlesService;
        this._route = _route;
        this.ref = ref;
        this.markers = [];
        this.map = null;
        this.resList = [];
        this.tempIndex = null;
        this.showPinBubble = false;
        this.tempMarker = null;
        // load map
        // setTimeout(() => {
        // 	this.map = new google.maps.Map(document.getElementById('map'), {
        // 		center: { lat: 32.078985, lng: 34.774306 },
        // 		zoom: 12,
        // 		disableDefaultUI: true,
        // 		streetViewControl: false,
        // 		zoomControl: true,
        // 		mapTypeControl: false,
        // 		mapTypeId: google.maps.MapTypeId.ROADMAP
        // 	});
        // 	//infoBubble close when click/leave map
        // 	this.map.addListener('click', () => {
        // 		setTimeout(() => {
        // 			this.showPinBubble = false;
        // 			this.ref.detectChanges();
        // 		}, 0);
        // 	});
        // 	this.map.addListener('mouseout', () => {
        // 		setTimeout(() => {
        // 			this.showPinBubble = false;
        // 			this.ref.detectChanges();
        // 		}, 0);
        // 	});
        // }, 0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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

module.exports = "list article!!!!!!!!!!!!!!!!\r\n!!!!!!!!!!!!!!!!!!!!1\r\n!!!!!!!!!!!!11"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('ref'),
    __metadata("design:type", Object)
], ViewComponent.prototype, "ref", void 0);
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
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

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/header/header.template.html"),
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.template.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n  this is header!\r\n  </h1>\r\n  </div>\r\n\r\n\r\n\r\n\r\n                        <a [routerLink]=\"['/articles']\">ALL ASSETS</a>\r\n                  \r\n                    <li *ngIf=\"user\"><a [routerLink]=\"['/articles/create']\">Upload reciept</a> </li>\r\n                    <!--<li *ngIf=\"!user\"><a [routerLink]=\"['/authentication/signup']\">Signup</a></li>-->\r\n                    <li *ngIf=\"!user\"><a [routerLink]=\"['/authentication/signin']\">Signin</a></li>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_list_list_component__ = __webpack_require__("../../../../../src/app/articles/list/list.component.ts");
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
    function HomeComponent() {
        this.searchCity = '';
        this.mailDetails = {};
        // this.user = _authenticationService.user;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.template.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__articles_list_list_component__["a" /* ListComponent */]]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

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

module.exports = "home sweet home!!!!!!!!!!!!\r\n<list></list>"

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map