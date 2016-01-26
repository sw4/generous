(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function () {

    var Disclosure = function Disclosure(el, options) {

        el.isActive = false;
        el.details = el.querySelectorAll('[data-details]');

        el.hide = function () {
            for (var i = 0; i < el.details.length; i++) {
                el.details[i].style.display = 'none';
            }
        };

        el.show = function () {
            for (var i = 0; i < el.details.length; i++) {
                el.details[i].style.display = 'block';
            }
        };

        el.toggle = function (e) {
            e.stopPropagation();
            el.isActive = !el.isActive;
            if (el.isActive) {
                el.show();
            } else {
                el.hide();
            }
        };

        el.addEventListener('click', function (e) {
            el.toggle(e);
        });
        el.hide();

        return el;
    };

    var disclosures = document.querySelectorAll('[data-disclosure]');

    for (var i = 0; i < disclosures.length; i++) {
        //disclosures[i] = new Disclosure(disclosures[i]);
        disclosures[i] = new Disclosure(disclosures[i]);
    }
};

module.exports = exports['default'];

},{}],2:[function(require,module,exports){
/**
 * @generous
 * @type module
 * @name ibd
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _readyReady = require('./ready/ready');

var _readyReady2 = _interopRequireDefault(_readyReady);

var _discloseDisclose = require('./disclose/disclose');

var _discloseDisclose2 = _interopRequireDefault(_discloseDisclose);

//Constructor for core module
var modulePrefix = 'ibd';

var coreModule = function coreModule() {
    return {
        ready: _readyReady2['default'],
        disclose: _discloseDisclose2['default'],
        prototype: {}
    };
};

//Initialize
if (window !== null) {

    //mount module on window object
    window[modulePrefix] = coreModule();
}

},{"./disclose/disclose":1,"./ready/ready":3}],3:[function(require,module,exports){
/**
  * @generous
  * @type method
  * @name ready
  * @parent ibd
  * @description Function to call when ibd is initialised and the DOM
  * is ready, all ibd related code should be placed within it
  * @param {function} function To run when DOM is ready
  */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (callback, context) {

    var readyList = [],
        readyFired = false,
        readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    var ready = function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    };

    var readyStateChange = function readyStateChange() {
        if (document.readyState === "complete") {
            ready();
        }
    };

    // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away
    if (readyFired) {
        setTimeout(function () {
            callback(context);
        }, 1);
        return;
    } else {
        // add the function and context to the list
        readyList.push({
            fn: callback,
            ctx: context
        });
    }
    // if document already ready to go, schedule the ready function to run
    if (document.readyState === "complete") {
        setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
        // otherwise if we don't have event handlers installed, install them
        if (document.addEventListener) {
            // first choice is DOMContentLoaded event
            document.addEventListener("DOMContentLoaded", ready, false);
            // backup is window load event
            window.addEventListener("load", ready, false);
        } else {
            // must be IE
            document.attachEvent("onreadystatechange", readyStateChange);
            window.attachEvent("onload", ready);
        }
        readyEventHandlersInstalled = true;
    }
};

module.exports = exports["default"];

},{}]},{},[2]);
