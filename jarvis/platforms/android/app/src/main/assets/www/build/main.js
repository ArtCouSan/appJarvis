webpackJsonp([7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treino_treino_add_treino_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreinoPage = (function () {
    function TreinoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreinoPage.prototype.addTreinoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__treino_treino_add_treino_add__["a" /* TreinoAddPage */]);
    };
    TreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-treino',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\treino\treino.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Treino</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item-group>\n        <ion-item-divider color="light">Segunda</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item-divider color="light">Terça</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item-divider color="light">Quarta</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item-divider color="light">Quinta</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item-divider color="light">Sexta</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item-divider color="light">Sabado</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item-divider color="light">Domingo</ion-item-divider>\n        <ion-item>Angola</ion-item>\n    </ion-item-group>\n    <ion-fab top right edge>\n        <button ion-fab mini (click)="addTreinoPage()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\treino\treino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], TreinoPage);
    return TreinoPage;
}());

//# sourceMappingURL=treino.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreinoAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TreinoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TreinoAddPage = (function () {
    function TreinoAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreinoAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreinoAddPage');
    };
    TreinoAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-treino-add',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\treino\treino-add\treino-add.html"*/'<!--\n  Generated template for the TreinoAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>treinoAdd</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\treino\treino-add\treino-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TreinoAddPage);
    return TreinoAddPage;
}());

//# sourceMappingURL=treino-add.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntretenimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntretenimentoPage = (function () {
    function EntretenimentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EntretenimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entretenimento',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\entretenimento\entretenimento.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Entretenimento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\entretenimento\entretenimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EntretenimentoPage);
    return EntretenimentoPage;
}());

//# sourceMappingURL=entretenimento.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstudoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EstudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstudoPage = (function () {
    function EstudoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstudoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstudoPage');
    };
    EstudoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estudo',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\estudo\estudo.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Estudo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\estudo\estudo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EstudoPage);
    return EstudoPage;
}());

//# sourceMappingURL=estudo.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AguaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_agua_agua__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AguaPage = (function () {
    function AguaPage(navCtrl, navParams, aguaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aguaProvider = aguaProvider;
        this.lista = [];
    }
    AguaPage.prototype.ionViewDidEnter = function () {
        this.getAll();
    };
    AguaPage.prototype.getAll = function () {
        var _this = this;
        this.aguaProvider.getAll()
            .then(function (result) {
            _this.lista = result;
        });
    };
    AguaPage.prototype.updateMeta = function (x) {
        var meta = parseInt(x, 10);
        this.aguaProvider.updateMeta(meta);
    };
    AguaPage.prototype.diminuir = function (x, agua) {
        var remove = parseInt(x, 10);
        var y = parseInt(agua, 10);
        var total = y - remove;
        this.aguaProvider.updateAgua(total);
    };
    AguaPage.prototype.aumentar = function (x, agua) {
        var adicionar = parseInt(x, 10);
        var y = parseInt(agua, 10);
        var total = y + adicionar;
        this.aguaProvider.updateAgua(total);
    };
    AguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-agua',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\agua\agua.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Água</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngFor="let saude of lista">\n\n  <ion-label class="meta_titulo">Quantidade que falta para meta</ion-label>\n  <ion-item>\n    <ion-range pin="true" max="saude.meta" color="primary" disabled="disabled" [(ngModel)]="model.agua">\n      <ion-icon range-left small  name="ios-water-outline"></ion-icon>\n      <ion-icon range-right name="ios-water"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-label class="meta_titulo">Adicionar água</ion-label>\n  <ion-grid>\n      <ion-row>\n         <ion-col col-6 ><ion-input name="qtnAdd" type="number" [(ngModel)]="qtnAdd" class="input_agua"></ion-input></ion-col>\n         <ion-col col-3><button ion-button (click)="diminuir(qtnAdd, model.agua)" color="danger" block small>-</button></ion-col>\n         <ion-col col-3><button ion-button block (click)="aumentar(qtnAdd, model.agua)" small>+</button></ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-item>\n    <ion-label floating>Meta em ml</ion-label>\n    <ion-input (click)="updateMeta(meta)" name="meta"  [(ngModel)]="model.meta" type="number" ></ion-input>\n    <button ion-button block small>Inserir</button>\n  </ion-item>\n\n  <ion-label class="meta_titulo">\n      Consumido: {{saude.agua}} ml\n  </ion-label>\n\n  <ion-label class="meta_titulo" *ngIf="saude.meta == 0">\n      Falta: Sem meta\n  </ion-label>\n    <ion-label class="meta_titulo" *ngIf="saude.agua < saude.meta">\n        Falta: {{saude.meta - saude.agua}}\n    </ion-label>\n    <ion-label class="meta_titulo" *ngIf="saude.agua == saude.meta && saude.meta != 0">\n      Falta: Meta alcançada, parabens!\n  </ion-label>\n    <ion-label class="meta_titulo" *ngIf="saude.agua > saude.meta && saude.meta != 0 ">\n    Falta: Acima da meta\n  </ion-label>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\agua\agua.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_agua_agua__["a" /* AguaProvider */]])
    ], AguaPage);
    return AguaPage;
}());

//# sourceMappingURL=agua.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaudePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saude_treino_treino__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saude_agua_agua__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaudePage = (function () {
    function SaudePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SaudePage.prototype.aguaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__saude_agua_agua__["a" /* AguaPage */]);
    };
    SaudePage.prototype.treinoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__saude_treino_treino__["a" /* TreinoPage */]);
    };
    SaudePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-saude',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\saude.html"*/'\n<ion-header>\n \n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Saúde</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-list inset>\n    <button ion-item (click)="aguaPage()">Água</button> \n    <button ion-item (click)="treinoPage()">Treino</button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\saude\saude.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */]])
    ], SaudePage);
    return SaudePage;
}());

//# sourceMappingURL=saude.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrabalhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrabalhoPage = (function () {
    function TrabalhoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrabalhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabalhoPage');
    };
    TrabalhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabalho',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\trabalho\trabalho.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Trabalho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\trabalho\trabalho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TrabalhoPage);
    return TrabalhoPage;
}());

//# sourceMappingURL=trabalho.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/entretenimento/entretenimento.module": [
		281,
		6
	],
	"../pages/estudo/estudo.module": [
		282,
		5
	],
	"../pages/saude/agua/agua.module": [
		283,
		4
	],
	"../pages/saude/saude.module": [
		284,
		3
	],
	"../pages/saude/treino/treino-add/treino-add.module": [
		285,
		2
	],
	"../pages/saude/treino/treino.module": [
		286,
		1
	],
	"../pages/trabalho/trabalho.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AguaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AguaProvider = (function () {
    function AguaProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    AguaProvider.prototype.updateAgua = function (agua) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update saude_agua set agua = ? where id = 1';
            var data = [agua];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AguaProvider.prototype.updateMeta = function (meta) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update saude_agua set meta = ? where id = 1';
            var data = [meta];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AguaProvider.prototype.getAll = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from saude_agua', [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var lista = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var category = data.rows.item(i);
                        lista.push(category);
                    }
                    return lista;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    AguaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], AguaProvider);
    return AguaProvider;
}());

//# sourceMappingURL=agua.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home.scss',template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\home\home.html"*/'\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Lista de Tarefas do Dia</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    \n  </ion-content>'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_saude_treino_treino__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_saude_agua_agua__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_trabalho_trabalho__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_entretenimento_entretenimento__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_saude_saude__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_estudo_estudo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_saude_treino_treino_add_treino_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_agua_agua__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_saude_saude__["a" /* SaudePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_entretenimento_entretenimento__["a" /* EntretenimentoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_trabalho_trabalho__["a" /* TrabalhoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_estudo_estudo__["a" /* EstudoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_saude_agua_agua__["a" /* AguaPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_saude_treino_treino__["a" /* TreinoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_saude_treino_treino_add_treino_add__["a" /* TreinoAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/entretenimento/entretenimento.module#EntretenimentoPageModule', name: 'EntretenimentoPage', segment: 'entretenimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estudo/estudo.module#EstudoPageModule', name: 'EstudoPage', segment: 'estudo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saude/agua/agua.module#AguaPageModule', name: 'AguaPage', segment: 'agua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saude/saude.module#SaudePageModule', name: 'SaudePage', segment: 'saude', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saude/treino/treino-add/treino-add.module#TreinoAddPageModule', name: 'TreinoAddPage', segment: 'treino-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saude/treino/treino.module#TreinoPageModule', name: 'TreinoPage', segment: 'treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabalho/trabalho.module#TrabalhoPageModule', name: 'TrabalhoPage', segment: 'trabalho', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_saude_saude__["a" /* SaudePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_entretenimento_entretenimento__["a" /* EntretenimentoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_trabalho_trabalho__["a" /* TrabalhoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_estudo_estudo__["a" /* EstudoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_saude_agua_agua__["a" /* AguaPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_saude_treino_treino__["a" /* TreinoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_saude_treino_treino_add_treino_add__["a" /* TreinoAddPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_15__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_agua_agua__["a" /* AguaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_entretenimento_entretenimento__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_trabalho_trabalho__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_saude_saude__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_estudo_estudo__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
            { title: 'Saúde', component: __WEBPACK_IMPORTED_MODULE_3__pages_saude_saude__["a" /* SaudePage */] },
            { title: 'Estudo', component: __WEBPACK_IMPORTED_MODULE_9__pages_estudo_estudo__["a" /* EstudoPage */] },
            { title: 'Trabalho', component: __WEBPACK_IMPORTED_MODULE_2__pages_trabalho_trabalho__["a" /* TrabalhoPage */] },
            { title: 'Entretenimento', component: __WEBPACK_IMPORTED_MODULE_1__pages_entretenimento_entretenimento__["a" /* EntretenimentoPage */] },
        ];
        //Criando o banco de dados
        dbProvider.createDatabase()
            .then(function () {
            // fechando a SplashScreen somente quando o banco for criado
            _this.openHomePage(splashScreen);
        })
            .catch(function () {
            // ou se houver erro na criação do banco
            _this.openHomePage(splashScreen);
        });
    }
    MyApp.prototype.openHomePage = function (splashScreen) {
        splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Arthur\Documents\GitHub\appJarvis\jarvis\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseProvider = (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    /**
     * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
     */
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'jarvis.db',
            location: 'default'
        });
    };
    /**
     * Cria a estrutura inicial do banco de dados
     */
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
            // Inserindo dados padrão
            _this.insertDefaultItems(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Criando as tabelas no banco de dados
     * @param db
     */
    DatabaseProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS saude_agua (id integer primary key AUTOINCREMENT NOT NULL, agua NUMBER, meta NUMBER)'],
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    /**
     * Incluindo os dados padrões
     * @param db
     */
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(id) as qtd from saude_agua', {})
            .then(function (data) {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
                // Criando as tabelas
                db.sqlBatch([
                    ['insert into saude_agua (agua, meta) values (?, ?)', [0, 0]],
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
        })
            .catch(function (e) { return console.error('Erro ao consultar a qtd de categorias', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map