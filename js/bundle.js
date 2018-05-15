(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _observe = require('./moduls/observe');

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var observer = new _observe2.default();
var render = function render(obj) {
    var _obj$template = obj.template,
        template = _obj$template === undefined ? function () {} : _obj$template,
        _obj$data = obj.data,
        data = _obj$data === undefined ? {} : _obj$data,
        _obj$target = obj.target,
        target = _obj$target === undefined ? null : _obj$target,
        _obj$clean = obj.clean,
        clean = _obj$clean === undefined ? false : _obj$clean;

    target = document.querySelector(target);
    if (Array.isArray(data)) {
        var list = '';
        data.forEach(function (item, index) {
            list += template(item, index);
        });
        if (clean) {
            if (target) target.innerHTML = list;
        } else {
            if (target) target.innerHTML += list;
        }
    } else {
        if (clean) {
            if (target) target.innerHTML = template(data);
        } else {
            if (target) target.innerHTML += template(data);
        }
    }
};

observer.subscribe('datachange', render);

var componenet = {
    el: '#list',
    list: [1, 2, 3],
    listmerge: function listmerge() {
        return this.list.join(", ");
    },

    template: function template(data) {
        return '<li>' + data + '</li>';
    },
    paragraph: function paragraph(data) {
        return '' + data;
    },
    add: function add(item) {
        this.list.push(item);
        this.build();
    },
    remove: function remove(index) {
        this.list.splice(index, 1);
        this.build();
    },
    build: function build() {
        observer.puplish('datachange', {
            data: this.list,
            template: this.template,
            target: this.el,
            clean: true
        });
        observer.puplish('datachange', {
            data: this.listmerge(),
            template: this.paragraph,
            target: '#computed',
            clean: true
        });
    }
};

componenet.build();

document.getElementById('add').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        componenet.add(e.target.value);
        e.target.value = '';
    }
});
function getindex(collection, node) {
    collection = Array.from(collection);
    return collection.indexOf(node);
}
document.getElementById('list').addEventListener('click', function (e) {
    var target = e.target.matches('li') ? e.target : e.target.closest('li');
    if (target) {

        componenet.remove(getindex(document.querySelectorAll('#list li'), target));
    }
});

},{"./moduls/observe":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
    function Observer() {
        _classCallCheck(this, Observer);

        this.subscriptions = {};
    }

    _createClass(Observer, [{
        key: "subscribe",
        value: function subscribe(type, fn) {
            if (!this.subscriptions[type]) {
                this.subscriptions[type] = [];
            }
            if (this.subscriptions[type].indexOf(fn) == -1) {
                this.subscriptions[type].push(fn);
            }
        }
    }, {
        key: "unsubscribe",
        value: function unsubscribe(type, fn) {
            var listeners = this.subscriptions[type];
            if (!listeners) return;
            var index = listeners.indexOf(fn);
            if (index > -1) {
                this.subscriptions.splice(index, 1);
            }
        }
    }, {
        key: "puplish",
        value: function puplish(type, evtobj) {
            if (!this.subscriptions[type]) {
                return;
            }
            if (!evtobj.type) {
                evtobj.type = type;
            }
            var listeners = this.subscriptions[type];

            for (var index = 0; index < listeners.length; index++) {
                //console.log(evtobj)
                listeners[index](evtobj);
            }
        }
    }]);

    return Observer;
}();

exports.default = Observer;

},{}]},{},[1]);
