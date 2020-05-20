(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n  Welcome to Indian Housie\n</h1>\n<br>\n<a routerLink=\"/host\">\n  <button mat-raised-button color=\"primary\">Create new Game</button>\n</a>\n<a routerLink=\"/player\">\n  <button mat-raised-button color=\"accent\">Join a Game</button>\n</a>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/host/host.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/host/host.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-component\">\n  <mat-card>\n    <div class=\"text-center host-header\">\n    The Game ID is: <span class=\"game-id\">{{gameId}}</span>\n  </div>\n  </mat-card>\n  <div class=\"space\"></div>\n  <mat-card>\n    <mat-horizontal-stepper [linear]=\"true\" #stepper>\n      <mat-step [completed]=\"gameStart\">\n        <ng-template matStepLabel>Player List</ng-template>\n        <div *ngIf=\"noPlayerJoined\">\n          <div class=\"msgs\">\n            Waiting for Players to Join...\n          </div>\n          <mat-spinner ></mat-spinner>\n        </div>\n        <div class=\"player-list\" *ngIf=\"!noPlayerJoined\">\n          <div class=\"game-config\">\n            <h2 style=\"text-align: center;\">Select Game Prizes:</h2>\n            <div *ngFor=\"let winning of gameConfigs\">\n              <mat-checkbox color=\"warn\" [value]=\"winning\" #winningBox (change)=\"updateWinning(winningBox)\">{{winning}}</mat-checkbox>\n            </div>\n            <hr>\n            <br>\n          </div>\n          <div>\n            <h2 style=\"text-align: center;\">Players joined:</h2>\n          </div>\n          <mat-accordion id=\"players\">\n            <div *ngFor=\"let item of playerListArray\" class=\"player\">\n            <mat-expansion-panel >\n              <mat-expansion-panel-header>\n                <mat-panel-title >\n                  <button mat-button matBadge=\"{{item.playerTicketCount}}\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">{{item.user}}</button>\n                  <!-- <span class=\"player-username\">{{item.user}}</span> -->\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <mat-form-field >\n                <mat-label>No. of Tickets</mat-label>\n                <input matInput type=\"number\" id=\"{{item.id}}\" name=\"ticket-count\" step=\"1\" [value]=\"countValue\"> \n              </mat-form-field>\n              <button mat-raised-button color=\"warn\" (click)=\"sendTicket(item.id)\">Send Ticket(s)</button>\n            </mat-expansion-panel>\n            <div class=\"space\"></div>\n          </div>\n          </mat-accordion>\n          <div >\n               \n          </div>\n        </div>\n        <div class=\"start-game\">\n          <button mat-raised-button matStepperNext color=\"primary\" (click)=\"startGame()\">Start Game</button>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Game Board</ng-template>\n        <div class=\"draw-container\">\n          <div class=\"col\">\n            <button mat-raised-button (click)=\"drawNumber()\">Next Number</button>\n          </div>\n          <div class=\"col\">\n            <span class=\"current-number\">{{currentNumber}}</span>\n          </div>\n        </div>\n        <div id=\"game-board\">\n          <h2 style=\"text-align: center;\">Game Board</h2>\n          <hr>\n          <br>\n        </div>\n        <div class=\"board\">\n          <div class=\"number-box\" *ngFor=\"let n of boardNumbers\" id=\"{{n+1}}\">\n            <span  class=\"board-number\">{{n+1}}</span>\n          </div>\n\n        </div>\n        <div class=\"game-player-list\" id=\"player-list\" style=\"min-height: 500px;\">\n          <p>Player List:</p>\n            <div style=\"padding:20px\">\n              <div style=\"margin:15px 0\" *ngFor=\"let item of playerListArray\">\n              <button mat-raised-button color=\"primary\" (click)=\"openVerifyTicket(item.id)\" matBadge=\"{{item.playerNotify}}\" matBadgePosition=\"above after\" matBadgeColor=\"accent\">{{item.user}}</button>\n              </div>\n            </div>\n        </div>\n        <div >\n          <button mat-raised-button matStepperNext color=\"primary\" (click)=\"shareResults()\">Share Results</button>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Winners</ng-template>\n        <mat-card>\n          <table>\n            <tr>\n              <th>Name</th>\n              <th>Prize</th>\n            </tr>\n            <tr *ngFor=\"let winner of winnerArray\">\n              <td>{{winner.ticketUser}}</td>\n              <td>{{winner.winPrize}}</td>\n            </tr>\n          </table>\n        </mat-card>\n        \n      </mat-step>\n    </mat-horizontal-stepper>\n  </mat-card>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div>\n        <mat-card>\n            <mat-horizontal-stepper [linear]=\"true\" #stepper>\n                <mat-step [stepControl]=\"joinUserFormValid\">\n                    <ng-template matStepLabel>Join a Game</ng-template>\n                    <div class=\"join-form\">\n                        <form [formGroup]=\"joinUserFormValid\">\n                        <div>\n                            <mat-form-field >\n                                <mat-label>Game ID</mat-label>\n                                <input matInput type=\"number\" #gameId formControlName=\"gameIdForm\" required> \n                            </mat-form-field>\n                        </div> \n                        <div>\n                            <mat-form-field >\n                                <mat-label>Your Name</mat-label>\n                                <input matInput type=\"text\" #userName formControlName=\"nameForm\" required> \n                            </mat-form-field>\n                        </div>\n                        <button mat-raised-button matStepperNext color=\"accent\" (click)=\"joinUser(gameId.value,userName.value)\">Join</button>\n                        </form>\n                    </div>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel>Game</ng-template>\n                    <div>\n                        <div class=\"player-header\">\n                            The Game ID is: <span class=\"game-id\">{{currentGameId}}</span>\n                            <br>\n                            <br>\n                            Welcome <span class=\"game-username\">{{userName.value}}</span>\n                        </div>\n                        <div *ngIf=\"!ticketRequested || !ticketRecieved\">\n                            <mat-form-field >\n                                <mat-label>How Many Tickets you Want?</mat-label>\n                                <input matInput type=\"number\" step=\"1\" #ticketCount [value]=\"countValue\">\n                            </mat-form-field>\n                            <button mat-raised-button color=\"primary\" (click)=\"sendReqHost(ticketCount.value)\">Request Ticket(s)</button>\n                        </div>\n                        <div *ngIf=\"!ticketRecieved && ticketRequested\">\n                            <div class=\"msgs\">\n                                Waiting for Host to send tickets...\n                            </div>\n                            <mat-spinner ></mat-spinner>\n                        </div>\n                        <div *ngIf=\"ticketRecieved\" class=\"game\">\n                            <div *ngIf=\"!gameStarted\">\n                                <div class=\"msgs\">\n                                    Waiting for Host to Start the Game...\n                                </div>\n                                <mat-spinner ></mat-spinner>\n                            </div>\n                            <div *ngIf=\"gameStarted\">\n                                <div class=\"space\"></div>\n                                <hr>\n                                <div style=\"padding: 5px; border: 1px solid #ccc; border-radius:10px\">\n                                New Number: <span class=\"new-number\"> {{newNumber}} </span>\n                                </div>\n                                <div class=\"win-cat\">\n                                    <p>Prizes:</p>\n                                    <mat-chip-list>\n                                        <mat-chip *ngFor=\"let category of winningCat\" color=\"primary\">{{category}}</mat-chip>\n                                    </mat-chip-list>\n                                </div>\n                            </div>\n                        <div class=\"tickets\" >\n                            <div *ngFor=\"let newTicket of tickets\">\n                          <div *ngFor=\"let ticket of newTicket;let i=index\" class=\"new-ticket\">\n                              Ticket {{i+1}}\n                            <table id=\"{{i}}\">\n                              <tr *ngFor=\"let row of ticket\">\n                                <td *ngFor=\"let number of row\" >\n                                  <span *ngIf=\"number!=0\" id=\"{{i+''+number}}\" (click)=\"checkHighlight(i+''+number)\">{{number}}</span>\n                                </td>\n                              </tr>\n                            </table>\n                            <mat-form-field>\n                                <mat-label>Claim Prize</mat-label>\n                                <mat-select (selectionChange)=\"claim($event)\">\n                                    <mat-option *ngFor=\"let category of winningCat\" [value]=\"category\">\n                                    {{category}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <br>\n                            <br>\n                            <br>\n                            <button mat-raised-button color=\"accent\" (click)=\"ticketVerification(i)\">Verify Ticket</button>\n                            <div class=\"space\"></div>\n                            <hr>\n                          </div>\n                          </div>\n                        </div>\n                        </div>\n                        <div *ngIf=\"gameFinished\" style=\"text-align:center;padding:5px\">\n                            <span class=\"winner-header\">Winners</span>\n                            <div class=\"space\"></div>\n                            <mat-card>\n                            <table class=\"winner-table\">\n                                <tr>\n                                <th>Name</th>\n                                <th>Prize</th>\n                                </tr>\n                                <tr *ngFor=\"let winner of winnerArray\">\n                                <td>{{winner.ticketUser}}</td>\n                                <td>{{winner.winPrize}}</td>\n                                </tr>\n                            </table>\n                            </mat-card>\n\n                        </div>\n                    </div>\n                </mat-step>\n            </mat-horizontal-stepper>\n    </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket-image/ticket-image.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket-image/ticket-image.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;\">\n    <h2>{{ticketUser}}'s Ticket:</h2>\n    <h4>Claim Prize: {{claimPrize}}</h4>\n    <img src=\"{{ticketImage}}\" style=\"display: block; width: 100%; margin: 10px 0;\">\n</div>\n<mat-dialog-actions align=\"end\">\n    <button mat-button-raised color=\"warn\" mat-dialog-close>Cancel</button>\n    <button mat-button-raised color=\"accent\" [mat-dialog-close]=\"true\" (click)=\"verifyResult()\">Verify</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_host_host_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/host/host.component */ "./src/app/components/host/host.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");





const routes = [
    { path: 'host', component: _components_host_host_component__WEBPACK_IMPORTED_MODULE_3__["HostComponent"] },
    { path: 'player', component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tambola-frontend';
        this.messageArray = [];
        this.playerListArray = [];
        this.newColor = false;
        this.checked = [];
        this.boardNumbers = 90;
        // this.tambolaService.newRoomCreated()
        // .subscribe(data=>{
        //   console.log(data);
        //   this.gameId=data["gameId"];
        //   sessionStorage.setItem("gameId",this.gameId.toString());
        // });
        // this.tambolaService.newPlayerJoined()
        // .subscribe(data=>{
        //   console.log(data);
        //   this.playerListArray.push(data);
        //   sessionStorage.setItem("gameId",data.gameId.toString());
        // });
        // this.tambolaService.sendHostTicketMessage()
        // .subscribe(data=>{
        //   console.log(data);
        //   this.messageArray.push(data);
        // });
        // this.tambolaService.ticketRecieved()
        // .subscribe(tickets=>{
        //   console.log(tickets);
        //   this.tickets=tickets;
        // });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _components_host_host_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/host/host.component */ "./src/app/components/host/host.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_ticket_image_ticket_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ticket-image/ticket-image.component */ "./src/app/components/ticket-image/ticket-image.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_host_host_component__WEBPACK_IMPORTED_MODULE_20__["HostComponent"],
            _components_player_player_component__WEBPACK_IMPORTED_MODULE_21__["PlayerComponent"],
            _components_ticket_image_ticket_image_component__WEBPACK_IMPORTED_MODULE_23__["TicketImageComponent"]
        ],
        entryComponents: [
            _components_ticket_image_ticket_image_component__WEBPACK_IMPORTED_MODULE_23__["TicketImageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/host/host.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/host/host.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-component{\r\n    padding: 10px;\r\n}\r\n.game-id{\r\n    padding: 2px 10px;\r\n    background-color: indigo;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n}\r\n.text-center{\r\n    text-align: center;\r\n}\r\n.host-header{\r\n    font-size: 30px;\r\n    line-height: 35px;\r\n}\r\n.space{\r\n    height: 30px;\r\n}\r\n.mat-warn{\r\n    margin-left: 10px;\r\n}\r\n.mat-expansion-panel-header{\r\n    background-color: khaki;\r\n}\r\n.mat-spinner{\r\n    margin: 0 auto;\r\n}\r\n.board {\r\n    grid-area: board;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    margin: auto;\r\n    -webkit-box-ordinal-group: 3;\r\n            order: 2;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n  }\r\n.number-box{\r\n      display: -webkit-box;\r\n      display: flex;\r\n      border: 1px solid;\r\n      padding: 5px;\r\n  }\r\n.current-number{\r\n      font-size: 30px;\r\n      margin-left: 25px;\r\n  }\r\n.draw-container{\r\n      display: grid;\r\n      grid-template-columns: repeat(2, 1fr);\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n      text-align:center;\r\n      position: relative;\r\n      margin: 20px 0;\r\n  }\r\n.col{\r\n      display: -webkit-box;\r\n      display: flex;\r\n  }\r\n.col button{\r\n      width: 150px;\r\n      margin: 0 auto;\r\n  }\r\n.board-number{\r\n      width: 100%;\r\n      height: 100%;\r\n      cursor: pointer;\r\n  }\r\n.mat-drawer-container{\r\n      min-height: 500px;\r\n  }\r\n.mat-checkbox{\r\n      display: block;\r\n      margin: 10px 0;\r\n  }\r\ntable{\r\n      width: 100%;\r\n  }\r\nth, td {\r\n    padding: 8px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\nth{\r\n    background-color: #f5f5f5;\r\n}\r\n.messages{\r\n    background-color: red;\r\n    color: #fff;\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    min-height: 50px;\r\n    width: 250px;\r\n}\r\n.mat-badge-medium.mat-badge-above .mat-badge-content{\r\n    top: 0;\r\n}\r\nmat-spinner{\r\n    margin: 10px auto;\r\n}\r\n.msgs{\r\n    margin: 20px 0;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    -webkit-animation:blinkingText 1.2s infinite;\r\n            animation:blinkingText 1.2s infinite;\r\n    -webkit-transition: 0.2s ease all;\r\n    transition: 0.2s ease all;\r\n}\r\n@-webkit-keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n@keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n@media screen and (max-width:599px){\r\n    .host-header{\r\n        font-size: 23px;\r\n        line-height: 30px;\r\n    }\r\n    .mat-horizontal-content-container{\r\n        padding: 0 !important;\r\n    }\r\n    .col{\r\n        margin: 35px 0;\r\n        float: none;\r\n        width: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3N0L2hvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLDRCQUFRO1lBQVIsUUFBUTtJQUNSLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCO0FBQ0E7TUFDSSxvQkFBYTtNQUFiLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsWUFBWTtFQUNoQjtBQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjtBQUNBO01BQ0ksYUFBYTtNQUNiLHFDQUFxQztNQUNyQyx3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsY0FBYztFQUNsQjtBQUNBO01BQ0ksb0JBQWE7TUFBYixhQUFhO0VBQ2pCO0FBQ0E7TUFDSSxZQUFZO01BQ1osY0FBYztFQUNsQjtBQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO0VBQ25CO0FBQ0E7TUFDSSxpQkFBaUI7RUFDckI7QUFDQTtNQUNJLGNBQWM7TUFDZCxjQUFjO0VBQ2xCO0FBQ0E7TUFDSSxXQUFXO0VBQ2Y7QUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNkJBQTZCO0VBQy9CO0FBQ0Y7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLE1BQU07QUFDVjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFFBQVEsV0FBVyxLQUFLO0lBQ3hCLFFBQVEsV0FBVyxFQUFFO0lBQ3JCLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxpQkFBaUIsR0FBRztJQUM1QixRQUFRLFdBQVcsS0FBSztBQUM1QjtBQU5BO0lBQ0ksUUFBUSxXQUFXLEtBQUs7SUFDeEIsUUFBUSxXQUFXLEVBQUU7SUFDckIsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsV0FBVyxLQUFLO0FBQzVCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9zdC9ob3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb21wb25lbnR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5nYW1lLWlke1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ob3N0LWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5zcGFjZXtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubWF0LXdhcm57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcclxufVxyXG4ubWF0LXNwaW5uZXJ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYm9hcmQge1xyXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG9yZGVyOiAyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5udW1iZXItYm94e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAuY3VycmVudC1udW1iZXJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5kcmF3LWNvbnRhaW5lcntcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICAuY29se1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY29sIGJ1dHRvbntcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmJvYXJkLW51bWJlcntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubWF0LWRyYXdlci1jb250YWluZXJ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICAubWF0LWNoZWNrYm94e1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIHRhYmxle1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufSAgXHJcbi5tZXNzYWdlc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxubWF0LXNwaW5uZXJ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4ubXNnc3tcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCAxLjJzIGluZmluaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dHtcclxuICAgIDAleyAgICAgY29sb3I6ICMwMDA7ICAgIH1cclxuICAgIDQ5JXsgICAgY29sb3I6ICMwMDA7IH1cclxuICAgIDYwJXsgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcbiAgICA5OSV7ICAgIGNvbG9yOnRyYW5zcGFyZW50OyAgfVxyXG4gICAgMTAwJXsgICBjb2xvcjogIzAwMDsgICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTk5cHgpe1xyXG4gICAgLmhvc3QtaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29se1xyXG4gICAgICAgIG1hcmdpbjogMzVweCAwO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/host/host.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/host/host.component.ts ***!
  \***************************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tambolasocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tambolasocket.service */ "./src/app/services/tambolasocket.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _ticket_image_ticket_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ticket-image/ticket-image.component */ "./src/app/components/ticket-image/ticket-image.component.ts");






let HostComponent = class HostComponent {
    constructor(tambolaService, _snackBar, dialog) {
        this.tambolaService = tambolaService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.noPlayerJoined = true;
        this.messageArray = [];
        this.playerListArray = [];
        this.verifyTicketArray = [];
        this.currentNumber = 0;
        this.checked = [];
        this.boardNumbers = Array(90).fill(0).map((x, i) => i);
        this.winnerArray = [];
        this.playerJoinMusic = new Audio();
        this.gameStart = false;
        this.gameConfigs = ['Four Corners', 'Fast Five', 'Top Line', 'Middle Line', 'Last Line', 'First Full House', 'Second Full House', 'Third Full House'];
        this.winningChecked = [];
        this.winnerChecked = [];
        this.sendTicket = (playerId) => {
            var tixCount = document.getElementById(playerId)["value"];
            console.log(tixCount);
            console.log(playerId);
            if (!tixCount)
                alert("Enter a ticket count");
            else {
                const confirmTic = {
                    ticketCount: tixCount,
                    playerId: playerId
                };
                this.tambolaService.hostTixConfirm(confirmTic);
                this.countValue = null;
            }
        };
        this.drawNumber = () => {
            while (1) {
                let number = Math.ceil(Math.random() * 90);
                if (!this.checked.includes(number)) {
                    this.checked.push(number);
                    this.currentNumber = number;
                    document.getElementById(number.toString()).style.background = "#ffd740";
                    this.tambolaService.sendDrawNumber({
                        gameId: sessionStorage.getItem('gameId'),
                        drawNumber: this.currentNumber
                    });
                    break;
                }
                if (this.checked.length === 90) {
                    this._snackBar.open("All Numbers are drawn!", "", {
                        duration: 9000
                    });
                }
            }
        };
        this.updateWinning = winningValue => {
            if (winningValue.checked === true) {
                if (this.winningChecked.length === 0)
                    this.winningChecked.push(winningValue.value);
                else if (this.winningChecked.indexOf(winningValue.value) === -1) {
                    this.winningChecked.push(winningValue.value);
                    console.log(this.winningChecked);
                }
            }
        };
        this.startGame = () => {
            this.gameStart = confirm("Do you want to Start the Game?");
            console.log(this.gameStart);
            if (this.gameStart) {
                let winningCat = {
                    gameId: sessionStorage.getItem("gameId"),
                    categories: this.winningChecked
                };
                this.tambolaService.startGame(winningCat);
            }
        };
        this.shareResults = () => {
            this.tambolaService.shareResult(this.winnerArray);
        };
        this.openVerifyTicket = (userId) => {
            document.getElementById('game-board').scrollIntoView();
            for (let ticketVerify of this.verifyTicketArray) {
                if (userId === ticketVerify.id) {
                    // alert("Match found!!");
                    this.dialog.open(_ticket_image_ticket_image_component__WEBPACK_IMPORTED_MODULE_5__["TicketImageComponent"], {
                        data: {
                            ticketUserId: ticketVerify.id,
                            ticketUser: ticketVerify.username,
                            ticketImage: ticketVerify.ticket,
                            claimPrize: ticketVerify.claimPrize
                        },
                        position: {
                            bottom: "0"
                        }
                    });
                }
            }
        };
        this.tambolaService.newRoomCreated()
            .subscribe(data => {
            console.log(data);
            this.gameId = data["gameId"];
            sessionStorage.setItem("gameId", this.gameId.toString());
        });
        this.tambolaService.newPlayerJoined()
            .subscribe(data => {
            console.log(data);
            this.playerListArray.push(data);
            this.noPlayerJoined = false;
            this.newPlayerName = data["user"].toString();
            this._snackBar.open(this.newPlayerName.toUpperCase() + " Joined the Game!", "", {
                duration: 4000
            });
            sessionStorage.setItem("gameId", data.gameId.toString());
        });
        this.tambolaService.sendHostTicketMessage()
            .subscribe(data => {
            // console.log(data);
            document.getElementById('players').scrollIntoView();
            this._snackBar.open(data.username.toUpperCase() + " requested " + data.ticketCount, "", {
                duration: 4000
            });
            for (let player of this.playerListArray) {
                if (player.id === data.id) {
                    player.playerTicketCount = data.ticketCount;
                }
            }
        });
        this.tambolaService.ticketToHost()
            .subscribe(data => {
            console.log("Array length==>", this.verifyTicketArray.length);
            if (this.verifyTicketArray.length === 0) {
                this.verifyTicketArray.push(data);
            }
            else {
                for (let i = 0; i < this.verifyTicketArray.length; i++) {
                    if (this.verifyTicketArray[i].id === data.id) {
                        this.verifyTicketArray.splice(i, 1);
                    }
                }
                this.verifyTicketArray.push(data);
            }
            for (let player of this.playerListArray) {
                if (player.id === data.id) {
                    player.playerNotify = "1";
                }
            }
            document.getElementById('player-list').scrollIntoView();
            this._snackBar.open(data.username + ' claimed for ' + data.claimPrize, '', {
                duration: 4000
            });
            console.log(this.verifyTicketArray);
        });
        this.tambolaService.prizeWinner()
            .subscribe(winnerData => {
            console.log(winnerData.winPrize);
            this._snackBar.open(winnerData.winPrize + " won by " + winnerData.ticketUser, "", {
                duration: 4000
            });
            this.winnerArray.push(winnerData);
            console.log("WINNER ARRAY");
            console.log(this.winnerArray);
        });
    }
    ngOnInit() {
        this.tambolaService.hostCreate();
    }
};
HostComponent.ctorParameters = () => [
    { type: src_app_services_tambolasocket_service__WEBPACK_IMPORTED_MODULE_2__["TambolasocketService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
HostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/host/host.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host.component.css */ "./src/app/components/host/host.component.css")).default]
    })
], HostComponent);



/***/ }),

/***/ "./src/app/components/player/player.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/player/player.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".join-form{\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\nform{\r\n    width: 100%;\r\n}\r\n.mat-form-field{\r\n    width: 100%;\r\n}\r\n.player{\r\n    padding: 15px;\r\n    border: 1px solid #000;\r\n    margin-top: 10px;\r\n}\r\n.new-ticket{\r\n    margin-top: 15px;\r\n}\r\ntable{\r\n    border-collapse: collapse;\r\n    background: #fff;\r\n    text-align: center;\r\n}\r\ntd{\r\n    border:1px solid;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.marked{\r\n    background-color: green;\r\n}\r\ntd span {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n.space{\r\n    height: 15px;\r\n}\r\n.game{\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.game-id{\r\n    padding: 2px 10px;\r\n    background-color: indigo;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n}\r\n.msgs{\r\n    margin: 20px 0;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    -webkit-animation:blinkingText 1.2s infinite;\r\n            animation:blinkingText 1.2s infinite;\r\n}\r\n@-webkit-keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n@keyframes blinkingText{\r\n    0%{     color: #000;    }\r\n    49%{    color: #000; }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: #000;    }\r\n}\r\n.new-number{\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: #fff;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    padding: 5px;\r\n}\r\n.mat-radio-button{\r\n    margin-left: 10px;\r\n}\r\nmat-spinner{\r\n    margin: 10px auto;\r\n}\r\n.player-header{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin: 15px 0;\r\n}\r\n.game-username{\r\n    padding: 2px 5px;\r\n    background: red;\r\n    color: #fff;\r\n}\r\n.winner-table{\r\n      width: 100%;\r\n  }\r\n.winner-table th, .winner-table td {\r\n    padding: 8px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.winner-table th{\r\n    background-color: #f5f5f5;\r\n}\r\n.winner-header{\r\n    padding: 3px 5px;\r\n    border: 1px solid #cccccc;\r\n    font-size:25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksUUFBUSxXQUFXLEtBQUs7SUFDeEIsUUFBUSxXQUFXLEVBQUU7SUFDckIsUUFBUSxrQkFBa0IsRUFBRTtJQUM1QixRQUFRLGlCQUFpQixHQUFHO0lBQzVCLFFBQVEsV0FBVyxLQUFLO0FBQzVCO0FBTkE7SUFDSSxRQUFRLFdBQVcsS0FBSztJQUN4QixRQUFRLFdBQVcsRUFBRTtJQUNyQixRQUFRLGtCQUFrQixFQUFFO0lBQzVCLFFBQVEsaUJBQWlCLEdBQUc7SUFDNUIsUUFBUSxXQUFXLEtBQUs7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNFO01BQ0ksV0FBVztFQUNmO0FBQ0Q7SUFDRyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZCQUE2QjtFQUMvQjtBQUNGO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2luLWZvcm17XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wbGF5ZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm5ldy10aWNrZXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbnRhYmxle1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLm1hcmtlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbnRkIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3BhY2V7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuLmdhbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmdhbWUtaWR7XHJcbiAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubXNnc3tcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCAxLjJzIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0e1xyXG4gICAgMCV7ICAgICBjb2xvcjogIzAwMDsgICAgfVxyXG4gICAgNDkleyAgICBjb2xvcjogIzAwMDsgfVxyXG4gICAgNjAleyAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cclxuICAgIDk5JXsgICAgY29sb3I6dHJhbnNwYXJlbnQ7ICB9XHJcbiAgICAxMDAleyAgIGNvbG9yOiAjMDAwOyAgICB9XHJcbn1cclxuLm5ldy1udW1iZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxubWF0LXNwaW5uZXJ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4ucGxheWVyLWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcbi5nYW1lLXVzZXJuYW1le1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiAgLndpbm5lci10YWJsZXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gLndpbm5lci10YWJsZSB0aCwgLndpbm5lci10YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4ud2lubmVyLXRhYmxlIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufSAgXHJcbi53aW5uZXItaGVhZGVye1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tambolasocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tambolasocket.service */ "./src/app/services/tambolasocket.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/lib/index.js");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_to_image__WEBPACK_IMPORTED_MODULE_5__);






let PlayerComponent = class PlayerComponent {
    constructor(tambolaService, _formBuilder, _snackBar) {
        this.tambolaService = tambolaService;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.playerListArray = [];
        this.tickets = [];
        this.ticketRequested = false;
        this.ticketRecieved = false;
        this.newNumber = "0";
        this.winningCat = [];
        this.winnerArray = [];
        this.newWinningCat = [];
        this.gameStarted = false;
        this.gameFinished = false;
        this.joinUser = (gameId, username) => {
            if (!gameId || !username) {
                if (!gameId)
                    alert("Game ID required");
                else
                    alert("Username is required");
            }
            else {
                this.tambolaService.joinPlayer({
                    gameId: gameId,
                    username: username
                });
            }
        };
        this.sendReqHost = (count) => {
            if (!count)
                alert("Enter a ticket count!");
            else {
                let ticData = {
                    gameId: sessionStorage.getItem("gameId"),
                    tikCount: count
                };
                this.tambolaService.sendHostReq(ticData);
                this._snackBar.open(count + " Tickets requested from host", "", {
                    duration: 4000
                });
                this.countValue = null;
                this.ticketRequested = true;
            }
        };
        this.checkHighlight = (id) => {
            if (document.getElementById(id).style.background === "yellow")
                document.getElementById(id).style.background = "none";
            else
                document.getElementById(id).style.background = "yellow";
        };
        this.claim = (event) => {
            if (!this.gameStarted) {
                alert("Waiting for Host to Start the Game!");
            }
            else {
                this.claimPrize = event.value;
            }
        };
        this.ticketVerification = (ticketId) => {
            if (!this.gameStarted) {
                alert("Waiting for Host to Start the Game!");
            }
            else if (!this.claimPrize) {
                alert("Select a prize to claim!");
            }
            else {
                html_to_image__WEBPACK_IMPORTED_MODULE_5___default.a.toPng(document.getElementById(ticketId))
                    .then(dataUrl => {
                    this.tambolaService.sendTicketForVerification({
                        gameId: sessionStorage.getItem("gameId"),
                        ticketImage: dataUrl,
                        claimPrize: this.claimPrize
                    });
                    this._snackBar.open("Ticket Sent for Verification!", "", {
                        duration: 4000
                    });
                })
                    .catch(error => {
                    console.log("Something went wrong");
                });
            }
        };
        this.tambolaService.newPlayerJoined()
            .subscribe(data => {
            console.log(data);
            this.playerListArray.push(data);
            sessionStorage.setItem("gameId", data.gameId.toString());
            this.currentGameId = sessionStorage.getItem("gameId");
        });
        this.tambolaService.categoriesReceived()
            .subscribe(categories => {
            this.winningCat = categories;
            console.log(this.winningCat);
            this.gameStarted = true;
            this._snackBar.open('Game Started by Host', '', {
                duration: 4000
            });
        });
        this.tambolaService.ticketRecieved()
            .subscribe(tickets => {
            this.tickets.push(tickets);
            console.log(this.tickets);
            this.ticketRecieved = true;
            this.ticketRequested = true;
            this._snackBar.open(tickets.length + " Tickets recieved!", "", {
                duration: 4000
            });
        });
        this.tambolaService.receiveNumber()
            .subscribe(newNumber => {
            this.newNumber = newNumber["drawNumber"];
        });
        this.tambolaService.prizeWinner()
            .subscribe(winnerData => {
            console.log(winnerData.winPrize);
            this._snackBar.open(winnerData.winPrize + " won by " + winnerData.ticketUser, "", {
                duration: 4000
            });
            for (let i = 0; i < this.winningCat.length; i++) {
                if (this.winningCat[i] === winnerData.winPrize) {
                    console.log(this.winningCat[i]);
                    this.winningCat.splice(i, 1);
                }
            }
        });
        this.tambolaService.resultList()
            .subscribe(winnerList => {
            this.gameFinished = true;
            this.winnerArray = winnerList;
        });
    }
    ngOnInit() {
        this.joinUserFormValid = this._formBuilder.group({
            gameIdForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nameForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
};
PlayerComponent.ctorParameters = () => [
    { type: src_app_services_tambolasocket_service__WEBPACK_IMPORTED_MODULE_2__["TambolasocketService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/components/player/player.component.css")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/components/ticket-image/ticket-image.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/ticket-image/ticket-image.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWltYWdlL3RpY2tldC1pbWFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/ticket-image/ticket-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/ticket-image/ticket-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: TicketImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketImageComponent", function() { return TicketImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_services_tambolasocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tambolasocket.service */ "./src/app/services/tambolasocket.service.ts");




let TicketImageComponent = class TicketImageComponent {
    constructor(data, tambolaService) {
        this.data = data;
        this.tambolaService = tambolaService;
        this.verifyResult = () => {
            this.tambolaService.verifyResult({
                gameId: sessionStorage.getItem('gameId'),
                ticketUserId: this.userId,
                winPrize: this.claimPrize,
                ticketUser: this.ticketUser
            });
        };
    }
    ngOnInit() {
        console.log(this.data);
        this.ticketImage = this.data["ticketImage"];
        this.ticketUser = this.data["ticketUser"];
        this.claimPrize = this.data["claimPrize"];
        this.userId = this.data["ticketUserId"];
    }
};
TicketImageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_tambolasocket_service__WEBPACK_IMPORTED_MODULE_3__["TambolasocketService"] }
];
TicketImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ticket-image/ticket-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket-image.component.css */ "./src/app/components/ticket-image/ticket-image.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TicketImageComponent);



/***/ }),

/***/ "./src/app/services/tambolasocket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tambolasocket.service.ts ***!
  \***************************************************/
/*! exports provided: TambolasocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TambolasocketService", function() { return TambolasocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let TambolasocketService = class TambolasocketService {
    constructor() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://192.168.2.11:5000/");
        this.joinPlayer = (data) => {
            console.log(data);
            this.socket.emit("playerJoinGame", data, (error) => {
                if (error) {
                    alert(error);
                }
            });
        };
        this.sendHostReq = (data) => {
            this.socket.emit("playerTicketReq", data);
        };
        this.startGame = (gameConfig) => {
            this.socket.emit("startGame", gameConfig);
        };
        this.sendTicketForVerification = (ticketData) => {
            console.log(ticketData);
            this.socket.emit('ticketVerify', ticketData);
        };
        this.sendDrawNumber = numberObj => {
            this.socket.emit('drawNumber', numberObj);
        };
        this.verifyResult = verifyData => {
            this.socket.emit('verifyResult', verifyData);
        };
        this.shareResult = winnerList => {
            this.socket.emit('shareResult', winnerList);
        };
    }
    hostCreate() {
        this.socket.emit('hostCreateGame');
    }
    newRoomCreated() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('newGameCreated', data => {
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    newPlayerJoined() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('newUser', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    sendHostTicketMessage() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('sendHostReq', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    categoriesReceived() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('gameCategories', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    ticketRecieved() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('tickets', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    hostTixConfirm(tixCount) {
        this.socket.emit('hostTixConfirm', tixCount);
    }
    ticketToHost() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('ticketToHost', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    receiveNumber() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('newNumber', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    prizeWinner() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('prizeWinner', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    resultList() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('resultList', data => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
};
TambolasocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TambolasocketService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\LEARNING\Tambola MEAN\tambola-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);