(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _mdcFormfield = require('./_mdc-formfield');

var _mdcButton = require('./_mdc-button');

var _mdcInput = require('./_mdc-input');

var _mdcRadio = require('./_mdc-radio');

var _mdcSelect = require('./_mdc-select');

var _mdcCheckbox = require('./_mdc-checkbox');

},{"./_mdc-button":2,"./_mdc-checkbox":3,"./_mdc-formfield":4,"./_mdc-input":5,"./_mdc-radio":6,"./_mdc-select":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.button = undefined;

var _ripple = require('@material/ripple');

var button = void 0;
if (document.querySelector('.mdc-button')) {
	var _button = new _ripple.MDCRipple(document.querySelector('.mdc-button'));
}

exports.button = button;

},{"@material/ripple":39}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.formField = exports.checkbox = undefined;

var _formField2 = require('@material/form-field');

var _checkbox2 = require('@material/checkbox');

var checkbox = void 0;
var formField = void 0;
if (document.querySelector('.mdc-checkbox')) {
	var _checkbox = new _checkbox2.MDCCheckbox(document.querySelector('.mdc-checkbox'));
	var _formField = new _formField2.MDCFormField(document.querySelector('.mdc-form-field'));
	_formField.input = _checkbox;
}

exports.checkbox = checkbox;
exports.formField = formField;

},{"@material/checkbox":15,"@material/form-field":23}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.formField = undefined;

var _formField2 = require('@material/form-field');

var formField = void 0;

if (document.querySelector('.mdc-form-field')) {
	var _formField = new _formField2.MDCFormField(document.querySelector('.mdc-form-field'));
}

exports.formField = formField;

},{"@material/form-field":23}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.input = undefined;

var _textfield = require('@material/textfield');

var input = void 0;
if (document.querySelector('.mdc-button')) {
	var _input = new _textfield.MDCTextField(document.querySelector('.mdc-text-field'));
}

exports.input = input;

},{"@material/textfield":56}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.radio = undefined;

var _radio2 = require('@material/radio');

var radio = void 0;

if (document.querySelector('.mdc-radio')) {
	var _radio = new _radio2.MDCRadio(document.querySelector('.mdc-radio'));
}

exports.radio = radio;

},{"@material/radio":35}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.select = undefined;

var _select2 = require('@material/select');

var select = void 0;
if (document.querySelector('.mdc-select')) {
	var _select = new _select2.MDCSelect(document.querySelector('.mdc-select'));
}

exports.select = select;

},{"@material/select":43}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

exports.transformStyleProperties = transformStyleProperties;
exports.getCorrectEventName = getCorrectEventName;
exports.getCorrectPropertyName = getCorrectPropertyName;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

},{"./foundation":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCComponent = exports.MDCFoundation = undefined;

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.MDCFoundation = _foundation2.default;
exports.MDCComponent = _component2.default;

},{"./component":9,"./foundation":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = require('@material/selection-control/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCCheckboxAdapter = function () {
  function MDCCheckboxAdapter() {
    _classCallCheck(this, MDCCheckboxAdapter);
  }

  _createClass(MDCCheckboxAdapter, [{
    key: 'addClass',

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /**
     * Sets an attribute with a given value on the input element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: 'setNativeControlAttr',
    value: function setNativeControlAttr(attr, value) {}

    /**
     * Removes an attribute from the input element.
     * @param {string} attr
     */

  }, {
    key: 'removeNativeControlAttr',
    value: function removeNativeControlAttr(attr) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'registerAnimationEndHandler',
    value: function registerAnimationEndHandler(handler) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'deregisterAnimationEndHandler',
    value: function deregisterAnimationEndHandler(handler) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'registerChangeHandler',
    value: function registerChangeHandler(handler) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'deregisterChangeHandler',
    value: function deregisterChangeHandler(handler) {}

    /** @return {!MDCSelectionControlState} */

  }, {
    key: 'getNativeControl',
    value: function getNativeControl() {}
  }, {
    key: 'forceLayout',
    value: function forceLayout() {}

    /** @return {boolean} */

  }, {
    key: 'isAttachedToDOM',
    value: function isAttachedToDOM() {}
  }]);

  return MDCCheckboxAdapter;
}();

exports.default = MDCCheckboxAdapter;

},{"@material/selection-control/index":44}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const {string} */
var ROOT = 'mdc-checkbox';

/** @enum {string} */
var cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
};

/** @enum {number} */
var numbers = {
  ANIM_END_LATCH_MS: 250
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _index = require('@material/selection-control/index');

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/** @const {!Array<string>} */
var CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /** @return {!MDCCheckboxAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCCheckboxAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setNativeControlAttr: function setNativeControlAttr() /* attr: string, value: string */{},
          removeNativeControlAttr: function removeNativeControlAttr() /* attr: string */{},
          registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
          deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
          registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
          deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{},
          forceLayout: function forceLayout() {},
          isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
        }
      );
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    /** @private {string} */
    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = _constants.strings.TRANSITION_STATE_INIT;

    /** @private {string} */
    _this.currentAnimationClass_ = '';

    /** @private {number} */
    _this.animEndLatchTimer_ = 0;

    _this.animEndHandler_ = /** @private {!EventListener} */function () {
      return _this.handleAnimationEnd();
    };

    _this.changeHandler_ = /** @private {!EventListener} */function () {
      return _this.handleChange();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
      this.updateAriaChecked_();
      this.adapter_.addClass(_constants.cssClasses.UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }

    /** @return {boolean} */

  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }

    /** @param {boolean} checked */

  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }

    /** @return {boolean} */

  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }

    /** @param {boolean} indeterminate */

  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(_constants.cssClasses.DISABLED);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.DISABLED);
      }
    }

    /** @return {?string} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }

    /** @param {?string} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }

    /**
     * Handles the animationend event for the checkbox
     */

  }, {
    key: 'handleAnimationEnd',
    value: function handleAnimationEnd() {
      var _this2 = this;

      clearTimeout(this.animEndLatchTimer_);
      this.animEndLatchTimer_ = setTimeout(function () {
        _this2.adapter_.removeClass(_this2.currentAnimationClass_);
        _this2.adapter_.deregisterAnimationEndHandler(_this2.animEndHandler_);
      }, _constants.numbers.ANIM_END_LATCH_MS);
    }

    /**
     * Handles the change event for the checkbox
     */

  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.transitionCheckState_();
    }

    /** @private */

  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this3 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this3.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          };
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    }

    /** @private */

  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }

    /** @private */

  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      this.updateAriaChecked_();

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }

    /**
     * @param {!MDCSelectionControlState} nativeCb
     * @return {string}
     * @private
     */

  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = _constants.strings.TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }

    /**
     * @param {string} oldState
     * @param {string} newState
     * @return {string}
     */

  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = _constants.strings.TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'updateAriaChecked_',
    value: function updateAriaChecked_() {
      // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
      if (this.isIndeterminate()) {
        this.adapter_.setNativeControlAttr(_constants.strings.ARIA_CHECKED_ATTR, _constants.strings.ARIA_CHECKED_INDETERMINATE_VALUE);
      } else {
        this.adapter_.removeNativeControlAttr(_constants.strings.ARIA_CHECKED_ATTR);
      }
    }

    /**
     * @return {!MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false,
        value: null
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(_foundation2.default);

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */


function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

exports.default = MDCCheckboxFoundation;

},{"./adapter":12,"./constants":13,"@material/base/foundation":10,"@material/selection-control/index":44}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCCheckbox = exports.MDCCheckboxFoundation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('@material/animation/index');

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _index2 = require('@material/selection-control/index');

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _index3 = require('@material/ripple/index');

var _util = require('@material/ripple/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',


    /**
     * Returns the state of the native control element, or null if the native control element is not present.
     * @return {?MDCSelectionControlState}
     * @private
     */
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      var cbEl = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return cbEl;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
      var adapter = Object.assign(_index3.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index3.MDCRippleFoundation(adapter);
      return new _index3.MDCRipple(this.root_, foundation);
    }

    /** @return {!MDCCheckboxFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        setNativeControlAttr: function setNativeControlAttr(attr, value) {
          return _this3.nativeCb_.setAttribute(attr, value);
        },
        removeNativeControlAttr: function removeNativeControlAttr(attr) {
          return _this3.nativeCb_.removeAttribute(attr);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener((0, _index.getCorrectEventName)(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener((0, _index.getCorrectEventName)(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    }

    /** @param {boolean} indeterminate */
    ,
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(_component2.default);

exports.MDCCheckboxFoundation = _foundation2.default;
exports.MDCCheckbox = MDCCheckbox;

},{"./foundation":14,"@material/animation/index":8,"@material/base/component":9,"@material/ripple/index":39,"@material/ripple/util":40,"@material/selection-control/index":44}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCFloatingLabelAdapter = function () {
  function MDCFloatingLabelAdapter() {
    _classCallCheck(this, MDCFloatingLabelAdapter);
  }

  _createClass(MDCFloatingLabelAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the label element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the label element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns the width of the label element.
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {}

    /**
     * Registers an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}
  }]);

  return MDCFloatingLabelAdapter;
}();

exports.default = MDCFloatingLabelAdapter;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake'
};

exports.cssClasses = cssClasses;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */
var MDCFloatingLabelFoundation = function (_MDCFoundation) {
  _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

  _createClass(MDCFloatingLabelFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCFloatingLabelAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCFloatingLabelAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          getWidth: function getWidth() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {}
        }
      );
    }

    /**
     * @param {!MDCFloatingLabelAdapter} adapter
     */

  }]);

  function MDCFloatingLabelFoundation(adapter) {
    _classCallCheck(this, MDCFloatingLabelFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, Object.assign(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };
    return _this;
  }

  _createClass(MDCFloatingLabelFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    }

    /**
     * Returns the width of the label element.
     * @return {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.adapter_.getWidth();
    }

    /**
     * Styles the label to produce the label shake for errors.
     * @param {boolean} shouldShake adds shake class if true,
     * otherwise removes shake class.
     */

  }, {
    key: 'shake',
    value: function shake(shouldShake) {
      var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

      if (shouldShake) {
        this.adapter_.addClass(LABEL_SHAKE);
      } else {
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }

    /**
     * Styles the label to float or dock.
     * @param {boolean} shouldFloat adds float class if true, otherwise remove
     * float and shake class to dock label.
     */

  }, {
    key: 'float',
    value: function float(shouldFloat) {
      var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
          LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
          LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

      if (shouldFloat) {
        this.adapter_.addClass(LABEL_FLOAT_ABOVE);
      } else {
        this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }

    /**
     * Handles an interaction event on the root element.
     */

  }, {
    key: 'handleShakeAnimationEnd_',
    value: function handleShakeAnimationEnd_() {
      var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }]);

  return MDCFloatingLabelFoundation;
}(_foundation2.default);

exports.default = MDCFloatingLabelFoundation;

},{"./adapter":16,"./constants":17,"@material/base/foundation":10}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFloatingLabelFoundation = exports.MDCFloatingLabel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */
var MDCFloatingLabel = function (_MDCComponent) {
  _inherits(MDCFloatingLabel, _MDCComponent);

  function MDCFloatingLabel() {
    _classCallCheck(this, MDCFloatingLabel);

    return _possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
  }

  _createClass(MDCFloatingLabel, [{
    key: 'shake',


    /**
     * Styles the label to produce the label shake for errors.
     * @param {boolean} shouldShake styles the label to shake by adding shake class
     * if true, otherwise will stop shaking by removing shake class.
     */
    value: function shake(shouldShake) {
      this.foundation_.shake(shouldShake);
    }

    /**
     * Styles label to float/dock.
     * @param {boolean} shouldFloat styles the label to float by adding float class
     * if true, otherwise docks the label by removing the float class.
     */

  }, {
    key: 'float',
    value: function float(shouldFloat) {
      this.foundation_.float(shouldFloat);
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.foundation_.getWidth();
    }

    /**
     * @return {!MDCFloatingLabelFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        getWidth: function getWidth() {
          return _this2.root_.offsetWidth;
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        }
      });
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCFloatingLabel}
     */
    value: function attachTo(root) {
      return new MDCFloatingLabel(root);
    }
  }]);

  return MDCFloatingLabel;
}(_component2.default);

exports.MDCFloatingLabel = MDCFloatingLabel;
exports.MDCFloatingLabelFoundation = _foundation2.default;

},{"./adapter":16,"./foundation":18,"@material/base/component":9}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Form Field. Provides an interface for managing
 * - event handlers
 * - ripple activation
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCFormFieldAdapter = function () {
  function MDCFormFieldAdapter() {
    _classCallCheck(this, MDCFormFieldAdapter);
  }

  _createClass(MDCFormFieldAdapter, [{
    key: "registerInteractionHandler",

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */
    value: function registerInteractionHandler(type, handler) {}

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}
  }, {
    key: "activateInputRipple",
    value: function activateInputRipple() {}
  }, {
    key: "deactivateInputRipple",
    value: function deactivateInputRipple() {}
  }]);

  return MDCFormFieldAdapter;
}();

exports.default = MDCFormFieldAdapter;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-form-field'
};

/** @enum {string} */
var strings = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCFormFieldAdapter>}
 */
var MDCFormFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCFormFieldFoundation, _MDCFoundation);

  _createClass(MDCFormFieldFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return {!MDCFormFieldAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        activateInputRipple: function activateInputRipple() {},
        deactivateInputRipple: function deactivateInputRipple() {}
      };
    }
  }]);

  function MDCFormFieldFoundation(adapter) {
    _classCallCheck(this, MDCFormFieldFoundation);

    /** @private {!EventListener} */
    var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, Object.assign(MDCFormFieldFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = /** @type {!EventListener} */function () {
      return _this.handleClick_();
    };
    return _this;
  }

  _createClass(MDCFormFieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    }

    /** @private */

  }, {
    key: 'handleClick_',
    value: function handleClick_() {
      var _this2 = this;

      this.adapter_.activateInputRipple();
      requestAnimationFrame(function () {
        return _this2.adapter_.deactivateInputRipple();
      });
    }
  }]);

  return MDCFormFieldFoundation;
}(_foundation2.default);

exports.default = MDCFormFieldFoundation;

},{"./adapter":20,"./constants":21,"@material/base/foundation":10}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFormFieldFoundation = exports.MDCFormField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _index = require('@material/selection-control/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends MDCComponent<!MDCFormFieldFoundation>
 */
var MDCFormField = function (_MDCComponent) {
  _inherits(MDCFormField, _MDCComponent);

  _createClass(MDCFormField, [{
    key: 'input',


    /** @param {?MDCSelectionControl} input */
    set: function set(input) {
      this.input_ = input;
    }

    /** @return {?MDCSelectionControl} */
    ,
    get: function get() {
      return this.input_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCFormField(root);
    }
  }]);

  function MDCFormField() {
    var _ref;

    _classCallCheck(this, MDCFormField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?MDCSelectionControl} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).call.apply(_ref, [this].concat(args)));

    _this.input_;
    return _this;
  }

  /**
   * @return {!Element}
   * @private
   */


  _createClass(MDCFormField, [{
    key: 'getDefaultFoundation',


    /** @return {!MDCFormFieldFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.label_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.label_.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.activate();
          }
        },
        deactivateInputRipple: function deactivateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.deactivate();
          }
        }
      });
    }
  }, {
    key: 'label_',
    get: function get() {
      var LABEL_SELECTOR = _foundation2.default.strings.LABEL_SELECTOR;

      return (/** @type {!Element} */this.root_.querySelector(LABEL_SELECTOR)
      );
    }
  }]);

  return MDCFormField;
}(_component2.default);

exports.MDCFormField = MDCFormField;
exports.MDCFormFieldFoundation = _foundation2.default;

},{"./foundation":22,"@material/base/component":9,"@material/selection-control/index":44}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCLineRippleAdapter = function () {
  function MDCLineRippleAdapter() {
    _classCallCheck(this, MDCLineRippleAdapter);
  }

  _createClass(MDCLineRippleAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the line ripple element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the line ripple element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the style property with propertyName to value on the root element.
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setStyle",
    value: function setStyle(propertyName, value) {}

    /**
     * Registers an event listener on the line ripple element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerEventHandler",
    value: function registerEventHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the line ripple element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterEventHandler",
    value: function deregisterEventHandler(evtType, handler) {}
  }]);

  return MDCLineRippleAdapter;
}();

exports.default = MDCLineRippleAdapter;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

exports.cssClasses = cssClasses;

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */
var MDCLineRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCLineRippleFoundation, _MDCFoundation);

  _createClass(MDCLineRippleFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCLineRippleAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCLineRippleAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCLineRippleAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setStyle: function setStyle() {},
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {}
        }
      );
    }

    /**
     * @param {!MDCLineRippleAdapter=} adapter
     */

  }]);

  function MDCLineRippleFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /** @type {!MDCLineRippleAdapter} */{};

    _classCallCheck(this, MDCLineRippleFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, Object.assign(MDCLineRippleFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };
    return _this;
  }

  _createClass(MDCLineRippleFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    }

    /**
     * Activates the line ripple
     */

  }, {
    key: 'activate',
    value: function activate() {
      this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
      this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
    }

    /**
     * Sets the center of the ripple animation to the given X coordinate.
     * @param {number} xCoordinate
     */

  }, {
    key: 'setRippleCenter',
    value: function setRippleCenter(xCoordinate) {
      this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
    }

    /**
     * Deactivates the line ripple
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
    }

    /**
     * Handles a transition end event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // Wait for the line ripple to be either transparent or opaque
      // before emitting the animation end event
      var isDeactivating = this.adapter_.hasClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);

      if (evt.propertyName === 'opacity') {
        if (isDeactivating) {
          this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
          this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
        }
      }
    }
  }]);

  return MDCLineRippleFoundation;
}(_foundation2.default);

exports.default = MDCLineRippleFoundation;

},{"./adapter":24,"./constants":25,"@material/base/foundation":10}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCLineRippleFoundation = exports.MDCLineRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */
var MDCLineRipple = function (_MDCComponent) {
  _inherits(MDCLineRipple, _MDCComponent);

  function MDCLineRipple() {
    _classCallCheck(this, MDCLineRipple);

    return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
  }

  _createClass(MDCLineRipple, [{
    key: 'activate',


    /**
     * Activates the line ripple
     */
    value: function activate() {
      this.foundation_.activate();
    }

    /**
     * Deactivates the line ripple
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }

    /**
     * Sets the transform origin given a user's click location. The `rippleCenter` is the
     * x-coordinate of the middle of the ripple.
     * @param {number} xCoordinate
     */

  }, {
    key: 'setRippleCenter',
    value: function setRippleCenter(xCoordinate) {
      this.foundation_.setRippleCenter(xCoordinate);
    }

    /**
     * @return {!MDCLineRippleFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCLineRippleAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        setStyle: function setStyle(propertyName, value) {
          return _this2.root_.style[propertyName] = value;
        },
        registerEventHandler: function registerEventHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        }
      }));
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCLineRipple}
     */
    value: function attachTo(root) {
      return new MDCLineRipple(root);
    }
  }]);

  return MDCLineRipple;
}(_component2.default);

exports.MDCLineRipple = MDCLineRipple;
exports.MDCLineRippleFoundation = _foundation2.default;

},{"./adapter":24,"./foundation":26,"@material/base/component":9}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCNotchedOutlineAdapter = function () {
  function MDCNotchedOutlineAdapter() {
    _classCallCheck(this, MDCNotchedOutlineAdapter);
  }

  _createClass(MDCNotchedOutlineAdapter, [{
    key: "getWidth",

    /**
     * Returns the width of the root element.
     * @return {number}
     */
    value: function getWidth() {}

    /**
     * Returns the height of the root element.
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {}

    /**
     * Adds a class to the root element.
     * @param {string} className
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /**
     * Removes a class from the root element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Sets the "d" attribute of the outline element's SVG path.
     * @param {string} value
     */

  }, {
    key: "setOutlinePathAttr",
    value: function setOutlinePathAttr(value) {}

    /**
     * Returns the idle outline element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getIdleOutlineStyleValue",
    value: function getIdleOutlineStyleValue(propertyName) {}
  }]);

  return MDCNotchedOutlineAdapter;
}();

exports.default = MDCNotchedOutlineAdapter;

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
};

/** @enum {string} */
var cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */
var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
  _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

  _createClass(MDCNotchedOutlineFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCNotchedOutlineAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCNotchedOutlineAdapter} */{
          getWidth: function getWidth() {},
          getHeight: function getHeight() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          setOutlinePathAttr: function setOutlinePathAttr() {},
          getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
        }
      );
    }

    /**
     * @param {!MDCNotchedOutlineAdapter} adapter
     */

  }]);

  function MDCNotchedOutlineFoundation(adapter) {
    _classCallCheck(this, MDCNotchedOutlineFoundation);

    return _possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, Object.assign(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */


  _createClass(MDCNotchedOutlineFoundation, [{
    key: 'notch',
    value: function notch(notchWidth) {
      var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

      this.adapter_.addClass(OUTLINE_NOTCHED);
      this.updateSvgPath_(notchWidth, isRtl);
    }

    /**
     * Removes notched outline selector to close the notch in the outline.
     */

  }, {
    key: 'closeNotch',
    value: function closeNotch() {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

      this.adapter_.removeClass(OUTLINE_NOTCHED);
    }

    /**
     * Updates the SVG path of the focus outline element based on the notchWidth
     * and the RTL context.
     * @param {number} notchWidth
     * @param {boolean=} isRtl
     * @private
     */

  }, {
    key: 'updateSvgPath_',
    value: function updateSvgPath_(notchWidth, isRtl) {
      // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
      var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
      var radius = parseFloat(radiusStyleValue);
      var width = this.adapter_.getWidth();
      var height = this.adapter_.getHeight();
      var cornerWidth = radius + 1.2;
      var leadingStrokeLength = Math.abs(11 - cornerWidth);
      var paddedNotchWidth = notchWidth + 8;

      // The right, bottom, and left sides of the outline follow the same SVG path.
      var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

      var path = void 0;
      if (!isRtl) {
        path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
      } else {
        path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
      }

      this.adapter_.setOutlinePathAttr(path);
    }
  }]);

  return MDCNotchedOutlineFoundation;
}(_foundation2.default);

exports.default = MDCNotchedOutlineFoundation;

},{"./adapter":28,"./constants":29,"@material/base/foundation":10}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCNotchedOutlineFoundation = exports.MDCNotchedOutline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
var MDCNotchedOutline = function (_MDCComponent) {
  _inherits(MDCNotchedOutline, _MDCComponent);

  function MDCNotchedOutline() {
    _classCallCheck(this, MDCNotchedOutline);

    return _possibleConstructorReturn(this, (MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).apply(this, arguments));
  }

  _createClass(MDCNotchedOutline, [{
    key: 'notch',


    /**
      * Updates outline selectors and SVG path to open notch.
      * @param {number} notchWidth The notch width in the outline.
      * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
      * will be right justified in outline path, otherwise left justified.
      */
    value: function notch(notchWidth, isRtl) {
      this.foundation_.notch(notchWidth, isRtl);
    }

    /**
     * Updates the outline selectors to close notch and return it to idle state.
     */

  }, {
    key: 'closeNotch',
    value: function closeNotch() {
      this.foundation_.closeNotch();
    }

    /**
     * @return {!MDCNotchedOutlineFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        getWidth: function getWidth() {
          return _this2.root_.offsetWidth;
        },
        getHeight: function getHeight() {
          return _this2.root_.offsetHeight;
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setOutlinePathAttr: function setOutlinePathAttr(value) {
          var path = _this2.root_.querySelector(_constants.strings.PATH_SELECTOR);
          path.setAttribute('d', value);
        },
        getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
          var idleOutlineElement = _this2.root_.parentNode.querySelector(_constants.strings.IDLE_OUTLINE_SELECTOR);
          return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
        }
      });
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCNotchedOutline}
     */
    value: function attachTo(root) {
      return new MDCNotchedOutline(root);
    }
  }]);

  return MDCNotchedOutline;
}(_component2.default);

exports.MDCNotchedOutline = MDCNotchedOutline;
exports.MDCNotchedOutlineFoundation = _foundation2.default;

},{"./adapter":28,"./constants":29,"./foundation":30,"@material/base/component":9}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = require('@material/selection-control/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRadioAdapter = function () {
  function MDCRadioAdapter() {
    _classCallCheck(this, MDCRadioAdapter);
  }

  _createClass(MDCRadioAdapter, [{
    key: 'addClass',

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /** @return {!MDCSelectionControlState} */

  }, {
    key: 'getNativeControl',
    value: function getNativeControl() {}
  }]);

  return MDCRadioAdapter;
}();

exports.default = MDCRadioAdapter;

},{"@material/selection-control/index":44}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _index = require('@material/selection-control/index');

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */
var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',


    /** @return {boolean} */
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }

    /** @param {boolean} checked */

  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }

    /** @return {?string} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }

    /** @param {?string} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }

    /**
     * @return {!MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return {!MDCRadioAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCRadioAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{}
        }
      );
    }
  }]);

  return MDCRadioFoundation;
}(_foundation2.default);

exports.default = MDCRadioFoundation;

},{"./adapter":32,"./constants":33,"@material/base/foundation":10,"@material/selection-control/index":44}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRadioFoundation = exports.MDCRadio = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _index = require('@material/selection-control/index');

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = require('@material/ripple/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',


    /** @return {boolean} */
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_index2.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index2.MDCRippleFoundation(adapter);
      return new _index2.MDCRipple(this.root_, foundation);
    }

    /**
     * Returns the state of the native control element, or null if the native control element is not present.
     * @return {?MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }

    /** @return {!MDCRadioFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(_foundation2.default.strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }]);

  return MDCRadio;
}(_component2.default);

exports.MDCRadio = MDCRadio;
exports.MDCRadioFoundation = _foundation2.default;

},{"./foundation":34,"@material/base/component":9,"@material/ripple/index":39,"@material/selection-control/index":44}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }

      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

        this.adapter_.removeClass(FG_ACTIVATION);
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

},{"./adapter":36,"./constants":37,"./util":40,"@material/base/foundation":10}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _util = require('./util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @return {!MDCRippleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

},{"./adapter":36,"./foundation":38,"./util":40,"@material/base/component":9}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

},{}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = exports.cssClasses = {
  BOX: 'mdc-select--box',
  DISABLED: 'mdc-select--disabled',
  ROOT: 'mdc-select'
};

var strings = exports.strings = {
  CHANGE_EVENT: 'MDCSelect:change',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  LABEL_SELECTOR: '.mdc-floating-label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control'
};

},{}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('@material/base/index');

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        floatLabel: function floatLabel() /* value: boolean */{},
        activateBottomLine: function activateBottomLine() {},
        deactivateBottomLine: function deactivateBottomLine() {},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        getSelectedIndex: function getSelectedIndex() {
          return (/* number */-1
          );
        },
        setSelectedIndex: function setSelectedIndex() /* index: number */{},
        setDisabled: function setDisabled() /* disabled: boolean */{},
        getValue: function getValue() {
          return (/* string */''
          );
        },
        setValue: function setValue() /* value: string */{}
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, Object.assign(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.focusHandler_ = function (evt) {
      return _this.handleFocus_(evt);
    };
    _this.blurHandler_ = function (evt) {
      return _this.handleBlur_(evt);
    };
    _this.selectionHandler_ = function (evt) {
      return _this.handleSelect_(evt);
    };
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      this.adapter_.registerInteractionHandler('change', this.selectionHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      this.adapter_.deregisterInteractionHandler('change', this.selectionHandler_);
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      this.adapter_.setSelectedIndex(index);
      this.floatLabelWithValue_();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.adapter_.setValue(value);
      this.setSelectedIndex(this.adapter_.getSelectedIndex());
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

      this.adapter_.setDisabled(disabled);
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'floatLabelWithValue_',
    value: function floatLabelWithValue_() {
      var optionHasValue = this.adapter_.getValue().length > 0;
      this.adapter_.floatLabel(optionHasValue);
    }
  }, {
    key: 'handleFocus_',
    value: function handleFocus_() {
      this.adapter_.floatLabel(true);
      this.adapter_.activateBottomLine();
    }
  }, {
    key: 'handleBlur_',
    value: function handleBlur_() {
      this.floatLabelWithValue_();
      this.adapter_.deactivateBottomLine();
    }
  }, {
    key: 'handleSelect_',
    value: function handleSelect_() {
      this.setSelectedIndex(this.adapter_.getSelectedIndex());
    }
  }]);

  return MDCSelectFoundation;
}(_index.MDCFoundation);

exports.default = MDCSelectFoundation;

},{"./constants":41,"@material/base/index":11}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelect = exports.MDCSelectFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require('@material/base/index');

var _index2 = require('@material/floating-label/index');

var _index3 = require('@material/line-ripple/index');

var _index4 = require('@material/ripple/index');

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCSelectFoundation = _foundation2.default;

var MDCSelect = exports.MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
  }

  _createClass(MDCSelect, [{
    key: 'initialize',
    value: function initialize() {
      var labelFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new _index2.MDCFloatingLabel(el);
      };
      var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index3.MDCLineRipple(el);
      };

      this.nativeControl_ = this.root_.querySelector(_constants.strings.NATIVE_CONTROL_SELECTOR);
      var labelElement = this.root_.querySelector(_constants.strings.LABEL_SELECTOR);
      if (labelElement) {
        this.label_ = labelFactory(labelElement);
      }
      var lineRippleElement = this.root_.querySelector(_constants.strings.LINE_RIPPLE_SELECTOR);
      if (lineRippleElement) {
        this.lineRipple_ = lineRippleFactory(lineRippleElement);
      }

      if (this.root_.classList.contains(_constants.cssClasses.BOX)) {
        this.ripple = this.initRipple_();
      }
    }
  }, {
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_index4.MDCRipple.createAdapter(this), {
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index4.MDCRippleFoundation(adapter);
      return new _index4.MDCRipple(this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        floatLabel: function floatLabel(value) {
          if (_this3.label_) {
            _this3.label_.float(value);
          }
        },
        activateBottomLine: function activateBottomLine() {
          if (_this3.lineRipple_) {
            _this3.lineRipple_.activate();
          }
        },
        deactivateBottomLine: function deactivateBottomLine() {
          if (_this3.lineRipple_) {
            _this3.lineRipple_.deactivate();
          }
        },
        setDisabled: function setDisabled(disabled) {
          return _this3.nativeControl_.disabled = disabled;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this3.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this3.nativeControl_.removeEventListener(type, handler);
        },
        getSelectedIndex: function getSelectedIndex() {
          return _this3.nativeControl_.selectedIndex;
        },
        setSelectedIndex: function setSelectedIndex(index) {
          return _this3.nativeControl_.selectedIndex = index;
        },
        getValue: function getValue() {
          return _this3.nativeControl_.value;
        },
        setValue: function setValue(value) {
          return _this3.nativeControl_.value = value;
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // needed to sync floating label
      this.selectedIndex = this.nativeControl_.selectedIndex;

      if (this.nativeControl_.disabled) {
        this.disabled = true;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.ripple) {
        this.ripple.destroy();
      }
      _get(MDCSelect.prototype.__proto__ || Object.getPrototypeOf(MDCSelect.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.nativeControl_.selectedIndex;
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSelect(root);
    }
  }]);

  return MDCSelect;
}(_index.MDCComponent);

},{"./constants":41,"./foundation":42,"@material/base/index":11,"@material/floating-label/index":19,"@material/line-ripple/index":27,"@material/ripple/index":39}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelectionControl = exports.MDCSelectionControlState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = require('@material/ripple/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var MDCSelectionControlState = void 0;

/**
 * @record
 */

var MDCSelectionControl = function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: 'ripple',

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();

exports.MDCSelectionControlState = MDCSelectionControlState;
exports.MDCSelectionControl = MDCSelectionControl;

},{"@material/ripple/index":39}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoundationMapType = exports.NativeInputType = exports.MDCTextFieldAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _foundation = require('./helper-text/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = require('./icon/foundation');

var _foundation4 = _interopRequireDefault(_foundation3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   validity: {
 *     badInput: boolean,
 *     valid: boolean,
 *   },
 * }}
 */
var NativeInputType = void 0;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
var FoundationMapType = void 0;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTextFieldAdapter = function () {
  function MDCTextFieldAdapter() {
    _classCallCheck(this, MDCTextFieldAdapter);
  }

  _createClass(MDCTextFieldAdapter, [{
    key: 'addClass',

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /**
     * Returns true if the root element contains the given class name.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: 'hasClass',
    value: function hasClass(className) {}

    /**
     * Registers an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'registerTextFieldInteractionHandler',
    value: function registerTextFieldInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'deregisterTextFieldInteractionHandler',
    value: function deregisterTextFieldInteractionHandler(type, handler) {}

    /**
     * Registers an event listener on the native input element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'registerInputInteractionHandler',
    value: function registerInputInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the native input element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'deregisterInputInteractionHandler',
    value: function deregisterInputInteractionHandler(evtType, handler) {}

    /**
     * Registers a validation attribute change listener on the input element.
     * Handler accepts list of attribute names.
     * @param {function(!Array<string>): undefined} handler
     * @return {!MutationObserver}
     */

  }, {
    key: 'registerValidationAttributeChangeHandler',
    value: function registerValidationAttributeChangeHandler(handler) {}

    /**
     * Disconnects a validation attribute observer on the input element.
     * @param {!MutationObserver} observer
     */

  }, {
    key: 'deregisterValidationAttributeChangeHandler',
    value: function deregisterValidationAttributeChangeHandler(observer) {}

    /**
     * Returns an object representing the native text input element, with a
     * similar API shape. The object returned should include the value, disabled
     * and badInput properties, as well as the checkValidity() function. We never
     * alter the value within our code, however we do update the disabled
     * property, so if you choose to duck-type the return value for this method
     * in your implementation it's important to keep this in mind. Also note that
     * this method can return null, which the foundation will handle gracefully.
     * @return {?Element|?NativeInputType}
     */

  }, {
    key: 'getNativeInput',
    value: function getNativeInput() {}

    /**
     * Returns true if the textfield is focused.
     * We achieve this via `document.activeElement === this.root_`.
     * @return {boolean}
     */

  }, {
    key: 'isFocused',
    value: function isFocused() {}

    /**
     * Returns true if the direction of the root element is set to RTL.
     * @return {boolean}
     */

  }, {
    key: 'isRtl',
    value: function isRtl() {}

    /**
     * Activates the line ripple.
     */

  }, {
    key: 'activateLineRipple',
    value: function activateLineRipple() {}

    /**
     * Deactivates the line ripple.
     */

  }, {
    key: 'deactivateLineRipple',
    value: function deactivateLineRipple() {}

    /**
     * Sets the transform origin of the line ripple.
     * @param {number} normalizedX
     */

  }, {
    key: 'setLineRippleTransformOrigin',
    value: function setLineRippleTransformOrigin(normalizedX) {}

    /**
     * Only implement if label exists.
     * Shakes label if shouldShake is true.
     * @param {boolean} shouldShake
     */

  }, {
    key: 'shakeLabel',
    value: function shakeLabel(shouldShake) {}

    /**
     * Only implement if label exists.
     * Floats the label above the input element if shouldFloat is true.
     * @param {boolean} shouldFloat
     */

  }, {
    key: 'floatLabel',
    value: function floatLabel(shouldFloat) {}

    /**
     * Returns true if label element exists, false if it doesn't.
     * @return {boolean}
     */

  }, {
    key: 'hasLabel',
    value: function hasLabel() {}

    /**
     * Only implement if label exists.
     * Returns width of label in pixels.
     * @return {number}
     */

  }, {
    key: 'getLabelWidth',
    value: function getLabelWidth() {}

    /**
     * Returns true if outline element exists, false if it doesn't.
     * @return {boolean}
     */

  }, {
    key: 'hasOutline',
    value: function hasOutline() {}

    /**
     * Only implement if outline element exists.
     * Updates SVG Path and outline element based on the
     * label element width and RTL context.
     * @param {number} labelWidth
     * @param {boolean=} isRtl
     */

  }, {
    key: 'notchOutline',
    value: function notchOutline(labelWidth, isRtl) {}

    /**
     * Only implement if outline element exists.
     * Closes notch in outline element.
     */

  }, {
    key: 'closeOutline',
    value: function closeOutline() {}
  }]);

  return MDCTextFieldAdapter;
}();

exports.MDCTextFieldAdapter = MDCTextFieldAdapter;
exports.NativeInputType = NativeInputType;
exports.FoundationMapType = FoundationMapType;

},{"./helper-text/foundation":50,"./icon/foundation":54}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-text-field',
  UPGRADED: 'mdc-text-field--upgraded',
  DISABLED: 'mdc-text-field--disabled',
  DENSE: 'mdc-text-field--dense',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  BOX: 'mdc-text-field--box',
  OUTLINED: 'mdc-text-field--outlined'
};

/** @enum {number} */
var numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923
};

// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;
exports.VALIDATION_ATTR_WHITELIST = VALIDATION_ATTR_WHITELIST;

},{}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = require('./helper-text/foundation');

var _foundation4 = _interopRequireDefault(_foundation3);

var _foundation5 = require('./icon/foundation');

var _foundation6 = _interopRequireDefault(_foundation5);

var _adapter = require('./adapter');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */
var MDCTextFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldFoundation, _MDCFoundation);

  _createClass(MDCTextFieldFoundation, [{
    key: 'shouldShake',


    /** @return {boolean} */
    get: function get() {
      return !this.isValid() && !this.isFocused_;
    }

    /** @return {boolean} */

  }, {
    key: 'shouldFloat',
    get: function get() {
      return this.isFocused_ || !!this.getValue() || this.isBadInput_();
    }

    /**
     * {@see MDCTextFieldAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldAdapter}
     */

  }], [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
          deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
          registerInputInteractionHandler: function registerInputInteractionHandler() {},
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
          registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
          deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
          getNativeInput: function getNativeInput() {},
          isFocused: function isFocused() {},
          isRtl: function isRtl() {},
          activateLineRipple: function activateLineRipple() {},
          deactivateLineRipple: function deactivateLineRipple() {},
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
          shakeLabel: function shakeLabel() {},
          floatLabel: function floatLabel() {},
          hasLabel: function hasLabel() {},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {},
          notchOutline: function notchOutline() {},
          closeOutline: function closeOutline() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldAdapter} adapter
     * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
     */

  }]);

  function MDCTextFieldFoundation(adapter) {
    var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

    _classCallCheck(this, MDCTextFieldFoundation);

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter)));

    _this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    _this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    _this.isFocused_ = false;
    /** @private {boolean} */
    _this.receivedUserInput_ = false;
    /** @private {boolean} */
    _this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    _this.isValid_ = true;
    /** @private {function(): undefined} */
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus();
    };
    /** @private {function(!Event): undefined} */
    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };
    /** @private {function(!Event): undefined} */
    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };
    /** @private {function(!Array): undefined} */
    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    /** @private {!MutationObserver} */
    _this.validationObserver_;
    return _this;
  }

  _createClass(MDCTextFieldFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
      // Ensure label does not collide with any pre-filled value.
      if (this.adapter_.hasLabel() && (this.getValue() || this.isBadInput_())) {
        this.adapter_.floatLabel(this.shouldFloat);
        this.notchOutline(this.shouldFloat);
      }

      if (this.adapter_.isFocused()) {
        this.inputFocusHandler_();
      }

      this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
      this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
      this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
      });
      ['click', 'keydown'].forEach(function (evtType) {
        _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
      });
      this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
      this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
      this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
      });
      ['click', 'keydown'].forEach(function (evtType) {
        _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
      });
      this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    }

    /**
     * Handles user interactions with the Text Field.
     */

  }, {
    key: 'handleTextFieldInteraction',
    value: function handleTextFieldInteraction() {
      if (this.adapter_.getNativeInput().disabled) {
        return;
      }
      this.receivedUserInput_ = true;
    }

    /**
     * Handles validation attribute changes
     * @param {!Array<string>} attributesList
     */

  }, {
    key: 'handleValidationAttributeChange',
    value: function handleValidationAttributeChange(attributesList) {
      var _this4 = this;

      attributesList.some(function (attributeName) {
        if (_constants.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
          _this4.styleValidity_(true);
          return true;
        }
      });
    }

    /**
     * Opens/closes the notched outline.
     * @param {boolean} openNotch
     */

  }, {
    key: 'notchOutline',
    value: function notchOutline(openNotch) {
      if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
        return;
      }

      if (openNotch) {
        var isDense = this.adapter_.hasClass(_constants.cssClasses.DENSE);
        var labelScale = isDense ? _constants.numbers.DENSE_LABEL_SCALE : _constants.numbers.LABEL_SCALE;
        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
        var isRtl = this.adapter_.isRtl();
        this.adapter_.notchOutline(labelWidth, isRtl);
      } else {
        this.adapter_.closeOutline();
      }
    }

    /**
     * Activates the text field focus state.
     */

  }, {
    key: 'activateFocus',
    value: function activateFocus() {
      this.isFocused_ = true;
      this.styleFocused_(this.isFocused_);
      this.adapter_.activateLineRipple();
      this.notchOutline(this.shouldFloat);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
      }
      if (this.helperText_) {
        this.helperText_.showToScreenReader();
      }
    }

    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     * @param {!Event} evt
     */

  }, {
    key: 'setTransformOrigin',
    value: function setTransformOrigin(evt) {
      var targetClientRect = evt.target.getBoundingClientRect();
      var evtCoords = { x: evt.clientX, y: evt.clientY };
      var normalizedX = evtCoords.x - targetClientRect.left;
      this.adapter_.setLineRippleTransformOrigin(normalizedX);
    }

    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programatically).
     */

  }, {
    key: 'autoCompleteFocus',
    value: function autoCompleteFocus() {
      if (!this.receivedUserInput_) {
        this.activateFocus();
      }
    }

    /**
     * Deactivates the Text Field's focus state.
     */

  }, {
    key: 'deactivateFocus',
    value: function deactivateFocus() {
      this.isFocused_ = false;
      this.adapter_.deactivateLineRipple();
      var input = this.getNativeInput_();
      var shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
      var isValid = this.isValid();
      this.styleValidity_(isValid);
      this.styleFocused_(this.isFocused_);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
        this.notchOutline(this.shouldFloat);
      }
      if (shouldRemoveLabelFloat) {
        this.receivedUserInput_ = false;
      }
    }

    /**
     * @return {string} The value of the input Element.
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeInput_().value;
    }

    /**
     * @param {string} value The value to set on the input Element.
     */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeInput_().value = value;
      var isValid = this.isValid();
      this.styleValidity_(isValid);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
        this.notchOutline(this.shouldFloat);
      }
    }

    /**
     * @return {boolean} If a custom validity is set, returns that value.
     *     Otherwise, returns the result of native validity checks.
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      return this.useCustomValidityChecking_ ? this.isValid_ : this.isNativeInputValid_();
    }

    /**
     * @param {boolean} isValid Sets the validity state of the Text Field.
     */

  }, {
    key: 'setValid',
    value: function setValid(isValid) {
      this.useCustomValidityChecking_ = true;
      this.isValid_ = isValid;
      // Retrieve from the getter to ensure correct logic is applied.
      isValid = this.isValid();
      this.styleValidity_(isValid);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
      }
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }

    /**
     * @param {boolean} disabled Sets the text-field disabled or enabled.
     */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeInput_().disabled = disabled;
      this.styleDisabled_(disabled);
    }

    /**
     * @param {string} content Sets the content of the helper text.
     */

  }, {
    key: 'setHelperTextContent',
    value: function setHelperTextContent(content) {
      if (this.helperText_) {
        this.helperText_.setContent(content);
      }
    }

    /**
     * Sets the aria label of the icon.
     * @param {string} label
     */

  }, {
    key: 'setIconAriaLabel',
    value: function setIconAriaLabel(label) {
      if (this.icon_) {
        this.icon_.setAriaLabel(label);
      }
    }

    /**
     * Sets the text content of the icon.
     * @param {string} content
     */

  }, {
    key: 'setIconContent',
    value: function setIconContent(content) {
      if (this.icon_) {
        this.icon_.setContent(content);
      }
    }

    /**
     * @return {boolean} True if the Text Field input fails in converting the
     *     user-supplied value.
     * @private
     */

  }, {
    key: 'isBadInput_',
    value: function isBadInput_() {
      return this.getNativeInput_().validity.badInput;
    }

    /**
     * @return {boolean} The result of native validity checking
     *     (ValidityState.valid).
     */

  }, {
    key: 'isNativeInputValid_',
    value: function isNativeInputValid_() {
      return this.getNativeInput_().validity.valid;
    }

    /**
     * Styles the component based on the validity state.
     * @param {boolean} isValid
     * @private
     */

  }, {
    key: 'styleValidity_',
    value: function styleValidity_(isValid) {
      var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      if (this.helperText_) {
        this.helperText_.setValidity(isValid);
      }
    }

    /**
     * Styles the component based on the focused state.
     * @param {boolean} isFocused
     * @private
     */

  }, {
    key: 'styleFocused_',
    value: function styleFocused_(isFocused) {
      var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

      if (isFocused) {
        this.adapter_.addClass(FOCUSED);
      } else {
        this.adapter_.removeClass(FOCUSED);
      }
    }

    /**
     * Styles the component based on the disabled state.
     * @param {boolean} isDisabled
     * @private
     */

  }, {
    key: 'styleDisabled_',
    value: function styleDisabled_(isDisabled) {
      var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
          DISABLED = _MDCTextFieldFoundati.DISABLED,
          INVALID = _MDCTextFieldFoundati.INVALID;

      if (isDisabled) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
      if (this.icon_) {
        this.icon_.setDisabled(isDisabled);
      }
    }

    /**
     * @return {!Element|!NativeInputType} The native text input from the
     * host environment, or a dummy if none exists.
     * @private
     */

  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() ||
      /** @type {!NativeInputType} */{
        value: '',
        disabled: false,
        validity: {
          badInput: false,
          valid: true
        }
      };
    }
  }]);

  return MDCTextFieldFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldFoundation;

},{"./adapter":45,"./constants":46,"./helper-text/foundation":50,"./icon/foundation":54,"@material/base/foundation":10}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldHelperTextAdapter = function () {
  function MDCTextFieldHelperTextAdapter() {
    _classCallCheck(this, MDCTextFieldHelperTextAdapter);
  }

  _createClass(MDCTextFieldHelperTextAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the helper text element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the helper text element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns whether or not the helper text element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets an attribute with a given value on the helper text element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Removes an attribute from the helper text element.
     * @param {string} attr
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(attr) {}

    /**
     * Sets the text content for the helper text element.
     * @param {string} content
     */

  }, {
    key: "setContent",
    value: function setContent(content) {}
  }]);

  return MDCTextFieldHelperTextAdapter;
}();

exports.default = MDCTextFieldHelperTextAdapter;

},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};

/** @enum {string} */
var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

},{}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */
var MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

  _createClass(MDCTextFieldHelperTextFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldHelperTextAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldHelperTextAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldHelperTextAdapter} adapter
     */

  }]);

  function MDCTextFieldHelperTextFoundation(adapter) {
    _classCallCheck(this, MDCTextFieldHelperTextFoundation);

    return _possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, Object.assign(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */


  _createClass(MDCTextFieldHelperTextFoundation, [{
    key: 'setContent',
    value: function setContent(content) {
      this.adapter_.setContent(content);
    }

    /** @param {boolean} isPersistent Sets the persistency of the helper text. */

  }, {
    key: 'setPersistent',
    value: function setPersistent(isPersistent) {
      if (isPersistent) {
        this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      }
    }

    /**
     * @param {boolean} isValidation True to make the helper text act as an
     *   error validation message.
     */

  }, {
    key: 'setValidation',
    value: function setValidation(isValidation) {
      if (isValidation) {
        this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      }
    }

    /** Makes the helper text visible to the screen reader. */

  }, {
    key: 'showToScreenReader',
    value: function showToScreenReader() {
      this.adapter_.removeAttr(_constants.strings.ARIA_HIDDEN);
    }

    /**
     * Sets the validity of the helper text based on the input validity.
     * @param {boolean} inputIsValid
     */

  }, {
    key: 'setValidity',
    value: function setValidity(inputIsValid) {
      var helperTextIsPersistent = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      var helperTextIsValidationMsg = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setAttr(_constants.strings.ROLE, 'alert');
      } else {
        this.adapter_.removeAttr(_constants.strings.ROLE);
      }

      if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
        this.hide_();
      }
    }

    /**
     * Hides the help text from screen readers.
     * @private
     */

  }, {
    key: 'hide_',
    value: function hide_() {
      this.adapter_.setAttr(_constants.strings.ARIA_HIDDEN, 'true');
    }
  }]);

  return MDCTextFieldHelperTextFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldHelperTextFoundation;

},{"./adapter":48,"./constants":49,"@material/base/foundation":10}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldHelperTextFoundation = exports.MDCTextFieldHelperText = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */
var MDCTextFieldHelperText = function (_MDCComponent) {
  _inherits(MDCTextFieldHelperText, _MDCComponent);

  function MDCTextFieldHelperText() {
    _classCallCheck(this, MDCTextFieldHelperText);

    return _possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
  }

  _createClass(MDCTextFieldHelperText, [{
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTextFieldHelperTextFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCTextFieldHelperTextAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this2.root_.removeAttribute(attr);
        },
        setContent: function setContent(content) {
          _this2.root_.textContent = content;
        }
      }));
    }
  }, {
    key: 'foundation',


    /**
     * @return {!MDCTextFieldHelperTextFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTextFieldHelperText}
     */
    value: function attachTo(root) {
      return new MDCTextFieldHelperText(root);
    }
  }]);

  return MDCTextFieldHelperText;
}(_component2.default);

exports.MDCTextFieldHelperText = MDCTextFieldHelperText;
exports.MDCTextFieldHelperTextFoundation = _foundation2.default;

},{"./adapter":48,"./foundation":50,"@material/base/component":9}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the text field icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldIconAdapter = function () {
  function MDCTextFieldIconAdapter() {
    _classCallCheck(this, MDCTextFieldIconAdapter);
  }

  _createClass(MDCTextFieldIconAdapter, [{
    key: "getAttr",

    /**
     * Gets the value of an attribute on the icon element.
     * @param {string} attr
     * @return {string}
     */
    value: function getAttr(attr) {}

    /**
     * Sets an attribute on the icon element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Removes an attribute from the icon element.
     * @param {string} attr
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(attr) {}

    /**
     * Sets the text content of the icon element.
     * @param {string} content
     */

  }, {
    key: "setContent",
    value: function setContent(content) {}

    /**
     * Registers an event listener on the icon element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the icon element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
     */

  }, {
    key: "notifyIconAction",
    value: function notifyIconAction() {}
  }]);

  return MDCTextFieldIconAdapter;
}();

exports.default = MDCTextFieldIconAdapter;

},{}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};

exports.strings = strings;

},{}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = require('@material/base/foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */
var MDCTextFieldIconFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldIconFoundation, _MDCFoundation);

  _createClass(MDCTextFieldIconFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldIconAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldIconAdapter} */{
          getAttr: function getAttr() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          notifyIconAction: function notifyIconAction() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldIconAdapter} adapter
     */

  }]);

  function MDCTextFieldIconFoundation(adapter) {
    _classCallCheck(this, MDCTextFieldIconFoundation);

    /** @private {string?} */
    var _this = _possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, Object.assign(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

    _this.savedTabIndex_ = null;

    /** @private {function(!Event): undefined} */
    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };
    return _this;
  }

  _createClass(MDCTextFieldIconFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

      ['click', 'keydown'].forEach(function (evtType) {
        _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      ['click', 'keydown'].forEach(function (evtType) {
        _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
      });
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      if (!this.savedTabIndex_) {
        return;
      }

      if (disabled) {
        this.adapter_.setAttr('tabindex', '-1');
        this.adapter_.removeAttr('role');
      } else {
        this.adapter_.setAttr('tabindex', this.savedTabIndex_);
        this.adapter_.setAttr('role', _constants.strings.ICON_ROLE);
      }
    }

    /** @param {string} label */

  }, {
    key: 'setAriaLabel',
    value: function setAriaLabel(label) {
      this.adapter_.setAttr('aria-label', label);
    }

    /** @param {string} content */

  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.adapter_.setContent(content);
    }

    /**
     * Handles an interaction event
     * @param {!Event} evt
     */

  }, {
    key: 'handleInteraction',
    value: function handleInteraction(evt) {
      if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifyIconAction();
      }
    }
  }]);

  return MDCTextFieldIconFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldIconFoundation;

},{"./adapter":52,"./constants":53,"@material/base/foundation":10}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIconFoundation = exports.MDCTextFieldIcon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */
var MDCTextFieldIcon = function (_MDCComponent) {
  _inherits(MDCTextFieldIcon, _MDCComponent);

  function MDCTextFieldIcon() {
    _classCallCheck(this, MDCTextFieldIcon);

    return _possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
  }

  _createClass(MDCTextFieldIcon, [{
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTextFieldIconFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCTextFieldIconAdapter} */Object.assign({
        getAttr: function getAttr(attr) {
          return _this2.root_.getAttribute(attr);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this2.root_.removeAttribute(attr);
        },
        setContent: function setContent(content) {
          _this2.root_.textContent = content;
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        },
        notifyIconAction: function notifyIconAction() {
          return _this2.emit(_foundation2.default.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
        }
      }));
    }
  }, {
    key: 'foundation',


    /**
     * @return {!MDCTextFieldIconFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTextFieldIcon}
     */
    value: function attachTo(root) {
      return new MDCTextFieldIcon(root);
    }
  }]);

  return MDCTextFieldIcon;
}(_component2.default);

exports.MDCTextFieldIcon = MDCTextFieldIcon;
exports.MDCTextFieldIconFoundation = _foundation2.default;

},{"./adapter":52,"./foundation":54,"@material/base/component":9}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIconFoundation = exports.MDCTextFieldIcon = exports.MDCTextFieldHelperTextFoundation = exports.MDCTextFieldHelperText = exports.MDCTextFieldFoundation = exports.MDCTextField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = require('@material/base/component');

var _component2 = _interopRequireDefault(_component);

var _index = require('@material/ripple/index');

var _util = require('@material/ripple/util');

var _constants = require('./constants');

var _adapter = require('./adapter');

var _foundation = require('./foundation');

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = require('@material/line-ripple/index');

var _index3 = require('./helper-text/index');

var _index4 = require('./icon/index');

var _index5 = require('@material/floating-label/index');

var _index6 = require('@material/notched-outline/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
var MDCTextField = function (_MDCComponent) {
  _inherits(MDCTextField, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTextField() {
    var _ref;

    _classCallCheck(this, MDCTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));

    _this.input_;
    /** @type {?MDCRipple} */
    _this.ripple;
    /** @private {?MDCLineRipple} */
    _this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    _this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    _this.icon_;
    /** @private {?MDCFloatingLabel} */
    _this.label_;
    /** @private {?MDCNotchedOutline} */
    _this.outline_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */


  _createClass(MDCTextField, [{
    key: 'initialize',


    /**
     * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
     * creates a new MDCRipple.
     * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
     * creates a new MDCLineRipple.
     * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
     * creates a new MDCTextFieldHelperText.
     * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
     * creates a new MDCTextFieldIcon.
     * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
     * creates a new MDCFloatingLabel.
     * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
     * creates a new MDCNotchedOutline.
     */
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
        return new _index.MDCRipple(el, foundation);
      };
      var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index2.MDCLineRipple(el);
      };
      var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
        return new _index3.MDCTextFieldHelperText(el);
      };
      var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
        return new _index4.MDCTextFieldIcon(el);
      };

      var _this2 = this;

      var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
        return new _index5.MDCFloatingLabel(el);
      };
      var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
        return new _index6.MDCNotchedOutline(el);
      };

      this.input_ = this.root_.querySelector(_constants.strings.INPUT_SELECTOR);
      var labelElement = this.root_.querySelector(_constants.strings.LABEL_SELECTOR);
      if (labelElement) {
        this.label_ = labelFactory(labelElement);
      }
      var lineRippleElement = this.root_.querySelector(_constants.strings.LINE_RIPPLE_SELECTOR);
      if (lineRippleElement) {
        this.lineRipple_ = lineRippleFactory(lineRippleElement);
      }
      var outlineElement = this.root_.querySelector(_constants.strings.OUTLINE_SELECTOR);
      if (outlineElement) {
        this.outline_ = outlineFactory(outlineElement);
      }
      if (this.input_.hasAttribute(_constants.strings.ARIA_CONTROLS)) {
        var helperTextElement = document.getElementById(this.input_.getAttribute(_constants.strings.ARIA_CONTROLS));
        if (helperTextElement) {
          this.helperText_ = helperTextFactory(helperTextElement);
        }
      }
      var iconElement = this.root_.querySelector(_constants.strings.ICON_SELECTOR);
      if (iconElement) {
        this.icon_ = iconFactory(iconElement);
      }

      this.ripple = null;
      if (this.root_.classList.contains(_constants.cssClasses.BOX)) {
        var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
        var adapter = Object.assign(_index.MDCRipple.createAdapter( /** @type {!RippleCapableSurface} */this), {
          isSurfaceActive: function isSurfaceActive() {
            return _this2.input_[MATCHES](':active');
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return _this2.input_.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return _this2.input_.removeEventListener(type, handler);
          }
        });
        var foundation = new _index.MDCRippleFoundation(adapter);
        this.ripple = rippleFactory(this.root_, foundation);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.ripple) {
        this.ripple.destroy();
      }
      if (this.lineRipple_) {
        this.lineRipple_.destroy();
      }
      if (this.helperText_) {
        this.helperText_.destroy();
      }
      if (this.icon_) {
        this.icon_.destroy();
      }
      if (this.label_) {
        this.label_.destroy();
      }
      if (this.outline_) {
        this.outline_.destroy();
      }
      _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
    }

    /**
     * Initiliazes the Text Field's internal state based on the environment's
     * state.
     */

  }, {
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }

    /**
     * @return {string} The value of the input.
     */

  }, {
    key: 'layout',


    /**
     * Recomputes the outline SVG path for the outline element.
     */
    value: function layout() {
      var openNotch = this.foundation_.shouldFloat;
      this.foundation_.notchOutline(openNotch);
    }

    /**
     * @return {!MDCTextFieldFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default(
      /** @type {!MDCTextFieldAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this3.root_.classList.contains(className);
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
          return _this3.root_.addEventListener(evtType, handler);
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
          return _this3.root_.removeEventListener(evtType, handler);
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
          var getAttributesList = function getAttributesList(mutationsList) {
            return mutationsList.map(function (mutation) {
              return mutation.attributeName;
            });
          };
          var observer = new MutationObserver(function (mutationsList) {
            return handler(getAttributesList(mutationsList));
          });
          var targetNode = _this3.root_.querySelector(_constants.strings.INPUT_SELECTOR);
          var config = { attributes: true };
          observer.observe(targetNode, config);
          return observer;
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
          return observer.disconnect();
        },
        isFocused: function isFocused() {
          return document.activeElement === _this3.root_.querySelector(_constants.strings.INPUT_SELECTOR);
        },
        isRtl: function isRtl() {
          return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
        }
      }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
    }

    /**
     * @return {!{
     *   shakeLabel: function(boolean): undefined,
     *   floatLabel: function(boolean): undefined,
     *   hasLabel: function(): boolean,
     *   getLabelWidth: function(): number,
     * }}
     */

  }, {
    key: 'getLabelAdapterMethods_',
    value: function getLabelAdapterMethods_() {
      var _this4 = this;

      return {
        shakeLabel: function shakeLabel(shouldShake) {
          return _this4.label_.shake(shouldShake);
        },
        floatLabel: function floatLabel(shouldFloat) {
          return _this4.label_.float(shouldFloat);
        },
        hasLabel: function hasLabel() {
          return !!_this4.label_;
        },
        getLabelWidth: function getLabelWidth() {
          return _this4.label_.getWidth();
        }
      };
    }

    /**
     * @return {!{
     *   activateLineRipple: function(): undefined,
     *   deactivateLineRipple: function(): undefined,
     *   setLineRippleTransformOrigin: function(number): undefined,
     * }}
     */

  }, {
    key: 'getLineRippleAdapterMethods_',
    value: function getLineRippleAdapterMethods_() {
      var _this5 = this;

      return {
        activateLineRipple: function activateLineRipple() {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.activate();
          }
        },
        deactivateLineRipple: function deactivateLineRipple() {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.deactivate();
          }
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.setRippleCenter(normalizedX);
          }
        }
      };
    }

    /**
     * @return {!{
     *   notchOutline: function(number, boolean): undefined,
     *   hasOutline: function(): boolean,
     * }}
     */

  }, {
    key: 'getOutlineAdapterMethods_',
    value: function getOutlineAdapterMethods_() {
      var _this6 = this;

      return {
        notchOutline: function notchOutline(labelWidth, isRtl) {
          return _this6.outline_.notch(labelWidth, isRtl);
        },
        closeOutline: function closeOutline() {
          return _this6.outline_.closeNotch();
        },
        hasOutline: function hasOutline() {
          return !!_this6.outline_;
        }
      };
    }

    /**
     * @return {!{
     *   registerInputInteractionHandler: function(string, function()): undefined,
     *   deregisterInputInteractionHandler: function(string, function()): undefined,
     *   getNativeInput: function(): ?Element,
     * }}
     */

  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this7 = this;

      return {
        registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
          return _this7.input_.addEventListener(evtType, handler);
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
          return _this7.input_.removeEventListener(evtType, handler);
        },
        getNativeInput: function getNativeInput() {
          return _this7.input_;
        }
      };
    }

    /**
     * Returns a map of all subcomponents to subfoundations.
     * @return {!FoundationMapType}
     */

  }, {
    key: 'getFoundationMap_',
    value: function getFoundationMap_() {
      return {
        helperText: this.helperText_ ? this.helperText_.foundation : undefined,
        icon: this.icon_ ? this.icon_.foundation : undefined
      };
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /**
     * @param {string} value The value to set on the input.
     */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /**
     * @param {boolean} disabled Sets the Text Field disabled or enabled.
     */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /**
     * @return {boolean} valid True if the Text Field is valid.
     */

  }, {
    key: 'valid',
    get: function get() {
      return this.foundation_.isValid();
    }

    /**
     * @param {boolean} valid Sets the Text Field valid or invalid.
     */
    ,
    set: function set(valid) {
      this.foundation_.setValid(valid);
    }

    /**
     * @return {boolean} True if the Text Field is required.
     */

  }, {
    key: 'required',
    get: function get() {
      return this.input_.required;
    }

    /**
     * @param {boolean} required Sets the Text Field to required.
     */
    ,
    set: function set(required) {
      this.input_.required = required;
    }

    /**
     * @return {string} The input element's validation pattern.
     */

  }, {
    key: 'pattern',
    get: function get() {
      return this.input_.pattern;
    }

    /**
     * @param {string} pattern Sets the input element's validation pattern.
     */
    ,
    set: function set(pattern) {
      this.input_.pattern = pattern;
    }

    /**
     * @return {number} The input element's minLength.
     */

  }, {
    key: 'minLength',
    get: function get() {
      return this.input_.minLength;
    }

    /**
     * @param {number} minLength Sets the input element's minLength.
     */
    ,
    set: function set(minLength) {
      this.input_.minLength = minLength;
    }

    /**
     * @return {number} The input element's maxLength.
     */

  }, {
    key: 'maxLength',
    get: function get() {
      return this.input_.maxLength;
    }

    /**
     * @param {number} maxLength Sets the input element's maxLength.
     */
    ,
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set < 0
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    }

    /**
     * @return {string} The input element's min.
     */

  }, {
    key: 'min',
    get: function get() {
      return this.input_.min;
    }

    /**
     * @param {string} min Sets the input element's min.
     */
    ,
    set: function set(min) {
      this.input_.min = min;
    }

    /**
     * @return {string} The input element's max.
     */

  }, {
    key: 'max',
    get: function get() {
      return this.input_.max;
    }

    /**
     * @param {string} max Sets the input element's max.
     */
    ,
    set: function set(max) {
      this.input_.max = max;
    }

    /**
     * @return {string} The input element's step.
     */

  }, {
    key: 'step',
    get: function get() {
      return this.input_.step;
    }

    /**
     * @param {string} step Sets the input element's step.
     */
    ,
    set: function set(step) {
      this.input_.step = step;
    }

    /**
     * Sets the helper text element content.
     * @param {string} content
     */

  }, {
    key: 'helperTextContent',
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    }

    /**
     * Sets the aria label of the icon.
     * @param {string} label
     */

  }, {
    key: 'iconAriaLabel',
    set: function set(label) {
      this.foundation_.setIconAriaLabel(label);
    }

    /**
     * Sets the text content of the icon.
     * @param {string} content
     */

  }, {
    key: 'iconContent',
    set: function set(content) {
      this.foundation_.setIconContent(content);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextField(root);
    }
  }]);

  return MDCTextField;
}(_component2.default);

exports.MDCTextField = MDCTextField;
exports.MDCTextFieldFoundation = _foundation2.default;
exports.MDCTextFieldHelperText = _index3.MDCTextFieldHelperText;
exports.MDCTextFieldHelperTextFoundation = _index3.MDCTextFieldHelperTextFoundation;
exports.MDCTextFieldIcon = _index4.MDCTextFieldIcon;
exports.MDCTextFieldIconFoundation = _index4.MDCTextFieldIconFoundation;

},{"./adapter":45,"./constants":46,"./foundation":47,"./helper-text/index":51,"./icon/index":55,"@material/base/component":9,"@material/floating-label/index":19,"@material/line-ripple/index":27,"@material/notched-outline/index":31,"@material/ripple/index":39,"@material/ripple/util":40}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvX21haW4uanMiLCJfanMvX21kYy1idXR0b24uanMiLCJfanMvX21kYy1jaGVja2JveC5qcyIsIl9qcy9fbWRjLWZvcm1maWVsZC5qcyIsIl9qcy9fbWRjLWlucHV0LmpzIiwiX2pzL19tZGMtcmFkaW8uanMiLCJfanMvX21kYy1zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hlY2tib3gvYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hlY2tib3gvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGVja2JveC9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGVja2JveC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZm9ybS1maWVsZC9hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mb3JtLWZpZWxkL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mb3JtLWZpZWxkL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lLXJpcHBsZS9hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lLXJpcHBsZS9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2ZvdW5kYXRpb24uanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmFkaW8vYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmFkaW8vY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yYWRpby9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yYWRpby9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvZm91bmRhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Rpb24tY29udHJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2FkYXB0ZXIuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMiLCJub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vYWRhcHRlci5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQ0xBOztBQUVBLElBQUksZUFBSjtBQUNBLElBQUcsU0FBUyxhQUFULENBQXVCLGFBQXZCLENBQUgsRUFB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eEI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7d0JBR1U7QUFDUixhQUFPLEtBQUssTUFBTCxDQUFZLEdBQW5CO0FBQ0Q7O0FBRUQ7Ozs7c0JBR1EsRyxFQUFLO0FBQ1gsV0FBSyxNQUFMLENBQVksR0FBWixHQUFrQixHQUFsQjtBQUNEOztBQUVEOzs7Ozs7d0JBR1U7QUFDUixhQUFPLEtBQUssTUFBTCxDQUFZLEdBQW5CO0FBQ0Q7O0FBRUQ7Ozs7c0JBR1EsRyxFQUFLO0FBQ1gsV0FBSyxNQUFMLENBQVksR0FBWixHQUFrQixHQUFsQjtBQUNEOztBQUVEOzs7Ozs7d0JBR1c7QUFDVCxhQUFPLEtBQUssTUFBTCxDQUFZLElBQW5CO0FBQ0Q7O0FBRUQ7Ozs7c0JBR1MsSSxFQUFNO0FBQ2IsV0FBSyxNQUFMLENBQVksSUFBWixHQUFtQixJQUFuQjtBQUNEOztBQUVEOzs7Ozs7O3NCQUlzQixPLEVBQVM7QUFDN0IsV0FBSyxXQUFMLENBQWlCLG9CQUFqQixDQUFzQyxPQUF0QztBQUNEOztBQUVEOzs7Ozs7O3NCQUlrQixLLEVBQU87QUFDdkIsV0FBSyxXQUFMLENBQWlCLGdCQUFqQixDQUFrQyxLQUFsQztBQUNEOztBQUVEOzs7Ozs7O3NCQUlnQixPLEVBQVM7QUFDdkIsV0FBSyxXQUFMLENBQWlCLGNBQWpCLENBQWdDLE9BQWhDO0FBQ0Q7Ozs2QkFwUWUsSSxFQUFNO0FBQ3BCLGFBQU8sSUFBSSxZQUFKLENBQWlCLElBQWpCLENBQVA7QUFDRDs7OztFQTVCd0IsbUI7O1FBNlpuQixZLEdBQUEsWTtRQUFjLHNCLEdBQUEsb0I7UUFDcEIsc0IsR0FBQSw4QjtRQUF3QixnQyxHQUFBLHdDO1FBQ3hCLGdCLEdBQUEsd0I7UUFBa0IsMEIsR0FBQSxrQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IGZvcm1GaWVsZCB9IGZyb20gJy4vX21kYy1mb3JtZmllbGQnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi9fbWRjLWJ1dHRvbic7XG5pbXBvcnQgeyBpbnB1dCB9IGZyb20gJy4vX21kYy1pbnB1dCc7XG5pbXBvcnQgeyByYWRpbyB9IGZyb20gJy4vX21kYy1yYWRpbyc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICcuL19tZGMtc2VsZWN0JztcbmltcG9ydCB7IGNoZWNrYm94IH0gZnJvbSAnLi9fbWRjLWNoZWNrYm94JzsiLCJpbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcblxubGV0IGJ1dHRvbjtcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtYnV0dG9uJykpe1x0XG5cdGNvbnN0IGJ1dHRvbiA9IG5ldyBNRENSaXBwbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1idXR0b24nKSk7XG59XG5cbmV4cG9ydCB7IGJ1dHRvbiB9O1xuIiwiaW1wb3J0IHtNRENGb3JtRmllbGR9IGZyb20gJ0BtYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TURDQ2hlY2tib3h9IGZyb20gJ0BtYXRlcmlhbC9jaGVja2JveCc7XG5cbmxldCBjaGVja2JveDtcbmxldCBmb3JtRmllbGQ7XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLWNoZWNrYm94Jykpe1xuXHRjb25zdCBjaGVja2JveCA9IG5ldyBNRENDaGVja2JveChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLWNoZWNrYm94JykpO1xuXHRjb25zdCBmb3JtRmllbGQgPSBuZXcgTURDRm9ybUZpZWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtZm9ybS1maWVsZCcpKTtcblx0Zm9ybUZpZWxkLmlucHV0ID0gY2hlY2tib3g7XG59XG5cbmV4cG9ydCB7IGNoZWNrYm94IH07XG5leHBvcnQgeyBmb3JtRmllbGQgfTsiLCJpbXBvcnQgeyBNRENGb3JtRmllbGQgfSBmcm9tICdAbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmxldCBmb3JtRmllbGQ7XG5cbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtZm9ybS1maWVsZCcpKXtcblx0Y29uc3QgZm9ybUZpZWxkID0gbmV3IE1EQ0Zvcm1GaWVsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLWZvcm0tZmllbGQnKSk7XG59XG5cbmV4cG9ydCB7IGZvcm1GaWVsZCB9OyIsImltcG9ydCB7IE1EQ1RleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQnO1xuXG5sZXQgaW5wdXQ7XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLWJ1dHRvbicpKXtcdFxuXHRjb25zdCBpbnB1dCA9IG5ldyBNRENUZXh0RmllbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy10ZXh0LWZpZWxkJykpO1xufVxuXG5leHBvcnQgeyBpbnB1dCB9O1xuIiwiXG5pbXBvcnQgeyBNRENSYWRpbyB9IGZyb20gJ0BtYXRlcmlhbC9yYWRpbyc7XG5cbmxldCByYWRpbztcblxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1yYWRpbycpKXtcblx0Y29uc3QgcmFkaW8gPSBuZXcgTURDUmFkaW8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1yYWRpbycpKTtcbn1cblxuZXhwb3J0IHsgcmFkaW8gfTsiLCJpbXBvcnQgeyBNRENTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwvc2VsZWN0JztcblxubGV0IHNlbGVjdDtcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc2VsZWN0Jykpe1xuXHRjb25zdCBzZWxlY3QgPSBuZXcgTURDU2VsZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc2VsZWN0JykpO1xufVxuXG5leHBvcnQgeyBzZWxlY3QgfTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBub1ByZWZpeDogc3RyaW5nLFxuICogICB3ZWJraXRQcmVmaXg6IHN0cmluZyxcbiAqICAgc3R5bGVQcm9wZXJ0eTogc3RyaW5nXG4gKiB9fVxuICovXG5sZXQgVmVuZG9yUHJvcGVydHlNYXBUeXBlO1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGV2ZW50VHlwZU1hcCA9IHtcbiAgJ2FuaW1hdGlvbnN0YXJ0Jzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbml0ZXJhdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb25lbmQnOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAndHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGNzc1Byb3BlcnR5TWFwID0ge1xuICAnYW5pbWF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gIH0sXG4gICd0cmFuc2Zvcm0nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2Zvcm0nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICB9LFxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB7XG4gIHJldHVybiAod2luZG93T2JqWydkb2N1bWVudCddICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddID09PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBldmVudEZvdW5kSW5NYXBzKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgfHwgZXZlbnRUeXBlIGluIGNzc1Byb3BlcnR5TWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcGFyYW0geyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gbWFwXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRKYXZhU2NyaXB0RXZlbnROYW1lKGV2ZW50VHlwZSwgbWFwLCBlbCkge1xuICByZXR1cm4gbWFwW2V2ZW50VHlwZV0uc3R5bGVQcm9wZXJ0eSBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgYnJvd3NlciBwcmVmaXggZm9yIENTUzMgYW5pbWF0aW9uIGV2ZW50c1xuICogYW5kIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICBpZiAoIWhhc1Byb3BlclNoYXBlKHdpbmRvd09iaikgfHwgIWV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSkge1xuICAgIHJldHVybiBldmVudFR5cGU7XG4gIH1cblxuICBjb25zdCBtYXAgPSAvKiogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi8gKFxuICAgIGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgPyBldmVudFR5cGVNYXAgOiBjc3NQcm9wZXJ0eU1hcFxuICApO1xuICBjb25zdCBlbCA9IHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddKCdkaXYnKTtcbiAgbGV0IGV2ZW50TmFtZSA9ICcnO1xuXG4gIGlmIChtYXAgPT09IGV2ZW50VHlwZU1hcCkge1xuICAgIGV2ZW50TmFtZSA9IGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudE5hbWUgPSBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TmFtZTtcbn1cblxuLy8gUHVibGljIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZ2V0QW5pbWF0aW9uTmFtZSgpIGZvciBKYXZhU2NyaXB0IGV2ZW50cyBvciBDU1Ncbi8vIHByb3BlcnR5IG5hbWVzLlxuXG5jb25zdCB0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAnTVNUcmFuc2Zvcm0nXTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuZXhwb3J0IHt0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMsIGdldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHtNRENGb3VuZGF0aW9uLCBNRENDb21wb25lbnR9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdGlvbi1jb250cm9sL2luZGV4JztcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIENoZWNrYm94LiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENDaGVja2JveEFkYXB0ZXIge1xuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZ2l2ZW4gdmFsdWUgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0TmF0aXZlQ29udHJvbEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVOYXRpdmVDb250cm9sQXR0cihhdHRyKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudExpc3RlbmVyfSBoYW5kbGVyICovXG4gIHJlZ2lzdGVyQW5pbWF0aW9uRW5kSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudExpc3RlbmVyfSBoYW5kbGVyICovXG4gIGRlcmVnaXN0ZXJBbmltYXRpb25FbmRIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50TGlzdGVuZXJ9IGhhbmRsZXIgKi9cbiAgcmVnaXN0ZXJDaGFuZ2VIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50TGlzdGVuZXJ9IGhhbmRsZXIgKi9cbiAgZGVyZWdpc3RlckNoYW5nZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKiogQHJldHVybiB7IU1EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX0gKi9cbiAgZ2V0TmF0aXZlQ29udHJvbCgpIHt9XG5cbiAgZm9yY2VMYXlvdXQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0F0dGFjaGVkVG9ET00oKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDaGVja2JveEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqIEBjb25zdCB7c3RyaW5nfSAqL1xuY29uc3QgUk9PVCA9ICdtZGMtY2hlY2tib3gnO1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFVQR1JBREVEOiAnbWRjLWNoZWNrYm94LS11cGdyYWRlZCcsXG4gIENIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWNoZWNrZWQnLFxuICBJTkRFVEVSTUlOQVRFOiAnbWRjLWNoZWNrYm94LS1pbmRldGVybWluYXRlJyxcbiAgRElTQUJMRUQ6ICdtZGMtY2hlY2tib3gtLWRpc2FibGVkJyxcbiAgQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtY2hlY2tlZCcsXG4gIEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUnLFxuICBBTklNX0NIRUNLRURfVU5DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkJyxcbiAgQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlJyxcbiAgQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS1jaGVja2VkJyxcbiAgQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLXVuY2hlY2tlZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIE5BVElWRV9DT05UUk9MX1NFTEVDVE9SOiBgLiR7Uk9PVH1fX25hdGl2ZS1jb250cm9sYCxcbiAgVFJBTlNJVElPTl9TVEFURV9JTklUOiAnaW5pdCcsXG4gIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRDogJ2NoZWNrZWQnLFxuICBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDogJ3VuY2hlY2tlZCcsXG4gIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURTogJ2luZGV0ZXJtaW5hdGUnLFxuICBBUklBX0NIRUNLRURfQVRUUjogJ2FyaWEtY2hlY2tlZCcsXG4gIEFSSUFfQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFX1ZBTFVFOiAnbWl4ZWQnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBBTklNX0VORF9MQVRDSF9NUzogMjUwLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdGlvbi1jb250cm9sL2luZGV4JztcbmltcG9ydCBNRENDaGVja2JveEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKiogQGNvbnN0IHshQXJyYXk8c3RyaW5nPn0gKi9cbmNvbnN0IENCX1BST1RPX1BST1BTID0gWydjaGVja2VkJywgJ2luZGV0ZXJtaW5hdGUnXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDQ2hlY2tib3hBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDQ2hlY2tib3hGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTURDQ2hlY2tib3hBZGFwdGVyfSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENDaGVja2JveEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0TmF0aXZlQ29udHJvbEF0dHI6ICgvKiBhdHRyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlTmF0aXZlQ29udHJvbEF0dHI6ICgvKiBhdHRyOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJBbmltYXRpb25FbmRIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyQW5pbWF0aW9uRW5kSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJDaGFuZ2VIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyQ2hhbmdlSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZ2V0TmF0aXZlQ29udHJvbDogKCkgPT4gLyogIU1EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZSAqLyB7fSxcbiAgICAgIGZvcmNlTGF5b3V0OiAoKSA9PiB7fSxcbiAgICAgIGlzQXR0YWNoZWRUb0RPTTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmd9ICovXG4gICAgdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV8gPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfSU5JVDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyA9ICcnO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8gPSAwO1xuXG4gICAgdGhpcy5hbmltRW5kSGFuZGxlcl8gPSAvKiogQHByaXZhdGUgeyFFdmVudExpc3RlbmVyfSAqLyAoXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUFuaW1hdGlvbkVuZCgpKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcl8gPSAvKiogQHByaXZhdGUgeyFFdmVudExpc3RlbmVyfSAqLyAoXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgpKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV8gPSB0aGlzLmRldGVybWluZUNoZWNrU3RhdGVfKHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKSk7XG4gICAgdGhpcy51cGRhdGVBcmlhQ2hlY2tlZF8oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuVVBHUkFERUQpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJDaGFuZ2VIYW5kbGVyKHRoaXMuY2hhbmdlSGFuZGxlcl8pO1xuICAgIHRoaXMuaW5zdGFsbFByb3BlcnR5Q2hhbmdlSG9va3NfKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckNoYW5nZUhhbmRsZXIodGhpcy5jaGFuZ2VIYW5kbGVyXyk7XG4gICAgdGhpcy51bmluc3RhbGxQcm9wZXJ0eUNoYW5nZUhvb2tzXygpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVDb250cm9sXygpLmNoZWNrZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBjaGVja2VkICovXG4gIHNldENoZWNrZWQoY2hlY2tlZCkge1xuICAgIHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0luZGV0ZXJtaW5hdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKS5pbmRldGVybWluYXRlO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gaW5kZXRlcm1pbmF0ZSAqL1xuICBzZXRJbmRldGVybWluYXRlKGluZGV0ZXJtaW5hdGUpIHtcbiAgICB0aGlzLmdldE5hdGl2ZUNvbnRyb2xfKCkuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVDb250cm9sXygpLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgKi9cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmdldE5hdGl2ZUNvbnRyb2xfKCkuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUNvbnRyb2xfKCkudmFsdWU7XG4gIH1cblxuICAvKiogQHBhcmFtIHs/c3RyaW5nfSB2YWx1ZSAqL1xuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKS52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGFuaW1hdGlvbmVuZCBldmVudCBmb3IgdGhlIGNoZWNrYm94XG4gICAqL1xuICBoYW5kbGVBbmltYXRpb25FbmQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbUVuZExhdGNoVGltZXJfKTtcbiAgICB0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyQW5pbWF0aW9uRW5kSGFuZGxlcih0aGlzLmFuaW1FbmRIYW5kbGVyXyk7XG4gICAgfSwgbnVtYmVycy5BTklNX0VORF9MQVRDSF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgY2hhbmdlIGV2ZW50IGZvciB0aGUgY2hlY2tib3hcbiAgICovXG4gIGhhbmRsZUNoYW5nZSgpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25DaGVja1N0YXRlXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGluc3RhbGxQcm9wZXJ0eUNoYW5nZUhvb2tzXygpIHtcbiAgICBjb25zdCBuYXRpdmVDYiA9IHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKTtcbiAgICBjb25zdCBjYlByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5hdGl2ZUNiKTtcblxuICAgIENCX1BST1RPX1BST1BTLmZvckVhY2goKGNvbnRyb2xTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY2JQcm90bywgY29udHJvbFN0YXRlKTtcbiAgICAgIC8vIFdlIGhhdmUgdG8gY2hlY2sgZm9yIHRoaXMgZGVzY3JpcHRvciwgc2luY2Ugc29tZSBicm93c2VycyAoU2FmYXJpKSBkb24ndCBzdXBwb3J0IGl0cyByZXR1cm4uXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00OTczOVxuICAgICAgaWYgKHZhbGlkRGVzY3JpcHRvcihkZXNjKSkge1xuICAgICAgICBjb25zdCBuYXRpdmVDYkRlc2MgPSAvKiogQHR5cGUgeyFPYmplY3RQcm9wZXJ0eURlc2NyaXB0b3J9ICovICh7XG4gICAgICAgICAgZ2V0OiBkZXNjLmdldCxcbiAgICAgICAgICBzZXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgZGVzYy5zZXQuY2FsbChuYXRpdmVDYiwgc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2tTdGF0ZV8oKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZGVzYy5jb25maWd1cmFibGUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5hdGl2ZUNiLCBjb250cm9sU3RhdGUsIG5hdGl2ZUNiRGVzYyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdW5pbnN0YWxsUHJvcGVydHlDaGFuZ2VIb29rc18oKSB7XG4gICAgY29uc3QgbmF0aXZlQ2IgPSB0aGlzLmdldE5hdGl2ZUNvbnRyb2xfKCk7XG4gICAgY29uc3QgY2JQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihuYXRpdmVDYik7XG5cbiAgICBDQl9QUk9UT19QUk9QUy5mb3JFYWNoKChjb250cm9sU3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGRlc2MgPSAvKiogQHR5cGUgeyFPYmplY3RQcm9wZXJ0eURlc2NyaXB0b3J9ICovIChcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjYlByb3RvLCBjb250cm9sU3RhdGUpKTtcbiAgICAgIGlmICh2YWxpZERlc2NyaXB0b3IoZGVzYykpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5hdGl2ZUNiLCBjb250cm9sU3RhdGUsIGRlc2MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHRyYW5zaXRpb25DaGVja1N0YXRlXygpIHtcbiAgICBjb25zdCBuYXRpdmVDYiA9IHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlQ29udHJvbCgpO1xuICAgIGlmICghbmF0aXZlQ2IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXztcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuZGV0ZXJtaW5lQ2hlY2tTdGF0ZV8obmF0aXZlQ2IpO1xuICAgIGlmIChvbGRTdGF0ZSA9PT0gbmV3U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFyaWFDaGVja2VkXygpO1xuXG4gICAgLy8gQ2hlY2sgdG8gZW5zdXJlIHRoYXQgdGhlcmUgaXNuJ3QgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGFuaW1hdGlvbiBjbGFzcywgaW4gY2FzZSBmb3IgZXhhbXBsZVxuICAgIC8vIHRoZSB1c2VyIGludGVyYWN0ZWQgd2l0aCB0aGUgY2hlY2tib3ggYmVmb3JlIHRoZSBhbmltYXRpb24gd2FzIGZpbmlzaGVkLlxuICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18ubGVuZ3RoID4gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbUVuZExhdGNoVGltZXJfKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZm9yY2VMYXlvdXQoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3ModGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18gPSB0aGlzLmdldFRyYW5zaXRpb25BbmltYXRpb25DbGFzc18ob2xkU3RhdGUsIG5ld1N0YXRlKTtcbiAgICB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXyA9IG5ld1N0YXRlO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHBhcmVudE5vZGUgc28gdGhhdCBhbmltYXRpb25zIGFyZSBvbmx5IHJ1biB3aGVuIHRoZSBlbGVtZW50IGlzIGF0dGFjaGVkXG4gICAgLy8gdG8gdGhlIERPTS5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0F0dGFjaGVkVG9ET00oKSAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckFuaW1hdGlvbkVuZEhhbmRsZXIodGhpcy5hbmltRW5kSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENTZWxlY3Rpb25Db250cm9sU3RhdGV9IG5hdGl2ZUNiXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRldGVybWluZUNoZWNrU3RhdGVfKG5hdGl2ZUNiKSB7XG4gICAgY29uc3Qge1xuICAgICAgVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFLFxuICAgICAgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VELFxuICAgICAgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQsXG4gICAgfSA9IHN0cmluZ3M7XG5cbiAgICBpZiAobmF0aXZlQ2IuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgcmV0dXJuIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZUNiLmNoZWNrZWQgPyBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgOiBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2xkU3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1N0YXRlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFRyYW5zaXRpb25BbmltYXRpb25DbGFzc18ob2xkU3RhdGUsIG5ld1N0YXRlKSB7XG4gICAgY29uc3Qge1xuICAgICAgVFJBTlNJVElPTl9TVEFURV9JTklULFxuICAgICAgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VELFxuICAgICAgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQsXG4gICAgfSA9IHN0cmluZ3M7XG5cbiAgICBjb25zdCB7XG4gICAgICBBTklNX1VOQ0hFQ0tFRF9DSEVDS0VELFxuICAgICAgQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURSxcbiAgICAgIEFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQsXG4gICAgICBBTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURSxcbiAgICAgIEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VELFxuICAgICAgQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRCxcbiAgICB9ID0gTURDQ2hlY2tib3hGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG5cbiAgICBzd2l0Y2ggKG9sZFN0YXRlKSB7XG4gICAgY2FzZSBUUkFOU0lUSU9OX1NUQVRFX0lOSVQ6XG4gICAgICBpZiAobmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAvLyBmYWxsdGhyb3VnaFxuICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ6XG4gICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA/IEFOSU1fVU5DSEVDS0VEX0NIRUNLRUQgOiBBTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFO1xuICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEOlxuICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA/IEFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQgOiBBTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURTtcbiAgICAvLyBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgP1xuICAgICAgICBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCA6IEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQXJpYUNoZWNrZWRfKCkge1xuICAgIC8vIEVuc3VyZSBhcmlhLWNoZWNrZWQgaXMgc2V0IHRvIG1peGVkIGlmIGNoZWNrYm94IGlzIGluIGluZGV0ZXJtaW5hdGUgc3RhdGUuXG4gICAgaWYgKHRoaXMuaXNJbmRldGVybWluYXRlKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TmF0aXZlQ29udHJvbEF0dHIoXG4gICAgICAgIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0lOREVURVJNSU5BVEVfVkFMVUUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZU5hdGl2ZUNvbnRyb2xBdHRyKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0aW9uQ29udHJvbFN0YXRlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TmF0aXZlQ29udHJvbF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlQ29udHJvbCgpIHx8IHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3RQcm9wZXJ0eURlc2NyaXB0b3J8dW5kZWZpbmVkfSBpbnB1dFByb3BEZXNjXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB2YWxpZERlc2NyaXB0b3IoaW5wdXRQcm9wRGVzYykge1xuICByZXR1cm4gISFpbnB1dFByb3BEZXNjICYmIHR5cGVvZiBpbnB1dFByb3BEZXNjLnNldCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ2hlY2tib3hGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Z2V0Q29ycmVjdEV2ZW50TmFtZX0gZnJvbSAnQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleCc7XG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENTZWxlY3Rpb25Db250cm9sU3RhdGUsIE1EQ1NlbGVjdGlvbkNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC9zZWxlY3Rpb24tY29udHJvbC9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDQ2hlY2tib3hGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCc7XG5pbXBvcnQge2dldE1hdGNoZXNQcm9wZXJ0eX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ0NoZWNrYm94Rm91bmRhdGlvbj5cbiAqIEBpbXBsZW1lbnRzIHtNRENTZWxlY3Rpb25Db250cm9sfVxuICovXG5jbGFzcyBNRENDaGVja2JveCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENDaGVja2JveChyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGF0ZSBvZiB0aGUgbmF0aXZlIGNvbnRyb2wgZWxlbWVudCwgb3IgbnVsbCBpZiB0aGUgbmF0aXZlIGNvbnRyb2wgZWxlbWVudCBpcyBub3QgcHJlc2VudC5cbiAgICogQHJldHVybiB7P01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBuYXRpdmVDYl8oKSB7XG4gICAgY29uc3Qge05BVElWRV9DT05UUk9MX1NFTEVDVE9SfSA9IE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IGNiRWwgPSAvKiogQHR5cGUgez9NRENTZWxlY3Rpb25Db250cm9sU3RhdGV9ICovIChcbiAgICAgIHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUikpO1xuICAgIHJldHVybiBjYkVsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshTURDUmlwcGxlfSAqL1xuICAgIHRoaXMucmlwcGxlXyA9IHRoaXMuaW5pdFJpcHBsZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdFJpcHBsZV8oKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBPYmplY3QuYXNzaWduKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpLCB7XG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gdHJ1ZSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gdGhpcy5uYXRpdmVDYl9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5uYXRpdmVDYl8uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICh0eXBlLCBoYW5kbGVyKSA9PiB0aGlzLm5hdGl2ZUNiXy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpLFxuICAgIH0pO1xuICAgIGNvbnN0IGZvdW5kYXRpb24gPSBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZSh0aGlzLnJvb3RfLCBmb3VuZGF0aW9uKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTURDQ2hlY2tib3hGb3VuZGF0aW9ufSAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0NoZWNrYm94Rm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBzZXROYXRpdmVDb250cm9sQXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLm5hdGl2ZUNiXy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgcmVtb3ZlTmF0aXZlQ29udHJvbEF0dHI6IChhdHRyKSA9PiB0aGlzLm5hdGl2ZUNiXy5yZW1vdmVBdHRyaWJ1dGUoYXR0ciksXG4gICAgICByZWdpc3RlckFuaW1hdGlvbkVuZEhhbmRsZXI6XG4gICAgICAgIChoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3csICdhbmltYXRpb25lbmQnKSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyQW5pbWF0aW9uRW5kSGFuZGxlcjpcbiAgICAgICAgKGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvdywgJ2FuaW1hdGlvbmVuZCcpLCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyQ2hhbmdlSGFuZGxlcjogKGhhbmRsZXIpID0+IHRoaXMubmF0aXZlQ2JfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckNoYW5nZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB0aGlzLm5hdGl2ZUNiXy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKSxcbiAgICAgIGdldE5hdGl2ZUNvbnRyb2w6ICgpID0+IHRoaXMubmF0aXZlQ2JfLFxuICAgICAgZm9yY2VMYXlvdXQ6ICgpID0+IHRoaXMucm9vdF8ub2Zmc2V0V2lkdGgsXG4gICAgICBpc0F0dGFjaGVkVG9ET006ICgpID0+IEJvb2xlYW4odGhpcy5yb290Xy5wYXJlbnROb2RlKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTURDUmlwcGxlfSAqL1xuICBnZXQgcmlwcGxlKCkge1xuICAgIHJldHVybiB0aGlzLnJpcHBsZV87XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNDaGVja2VkKCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBjaGVja2VkICovXG4gIHNldCBjaGVja2VkKGNoZWNrZWQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldENoZWNrZWQoY2hlY2tlZCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IGluZGV0ZXJtaW5hdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNJbmRldGVybWluYXRlKCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpbmRldGVybWluYXRlICovXG4gIHNldCBpbmRldGVybWluYXRlKGluZGV0ZXJtaW5hdGUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldEluZGV0ZXJtaW5hdGUoaW5kZXRlcm1pbmF0ZSk7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzRGlzYWJsZWQoKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkICovXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWUgKi9cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlXy5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDQ2hlY2tib3hGb3VuZGF0aW9uLCBNRENDaGVja2JveH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIEZsb2F0aW5nIExhYmVsLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIGZsb2F0aW5nIGxhYmVsIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENGbG9hdGluZ0xhYmVsQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgcm9vdCBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGbG9hdGluZ0xhYmVsQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIExBQkVMX0ZMT0FUX0FCT1ZFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZScsXG4gIExBQkVMX1NIQUtFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1zaGFrZScsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBnZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlU2hha2VBbmltYXRpb25FbmRfKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYW5pbWF0aW9uZW5kJywgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIHByb2R1Y2UgdGhlIGxhYmVsIHNoYWtlIGZvciBlcnJvcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkU2hha2UgYWRkcyBzaGFrZSBjbGFzcyBpZiB0cnVlLFxuICAgKiBvdGhlcndpc2UgcmVtb3ZlcyBzaGFrZSBjbGFzcy5cbiAgICovXG4gIHNoYWtlKHNob3VsZFNoYWtlKSB7XG4gICAgY29uc3Qge0xBQkVMX1NIQUtFfSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHNob3VsZFNoYWtlKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gZmxvYXQgb3IgZG9jay5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRGbG9hdCBhZGRzIGZsb2F0IGNsYXNzIGlmIHRydWUsIG90aGVyd2lzZSByZW1vdmVcbiAgICogZmxvYXQgYW5kIHNoYWtlIGNsYXNzIHRvIGRvY2sgbGFiZWwuXG4gICAqL1xuICBmbG9hdChzaG91bGRGbG9hdCkge1xuICAgIGNvbnN0IHtMQUJFTF9GTE9BVF9BQk9WRSwgTEFCRUxfU0hBS0V9ID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoc2hvdWxkRmxvYXQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX0ZMT0FUX0FCT1ZFKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBoYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8oKSB7XG4gICAgY29uc3Qge0xBQkVMX1NIQUtFfSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDRmxvYXRpbmdMYWJlbCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENGbG9hdGluZ0xhYmVsfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBwcm9kdWNlIHRoZSBsYWJlbCBzaGFrZSBmb3IgZXJyb3JzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFNoYWtlIHN0eWxlcyB0aGUgbGFiZWwgdG8gc2hha2UgYnkgYWRkaW5nIHNoYWtlIGNsYXNzXG4gICAqIGlmIHRydWUsIG90aGVyd2lzZSB3aWxsIHN0b3Agc2hha2luZyBieSByZW1vdmluZyBzaGFrZSBjbGFzcy5cbiAgICovXG4gIHNoYWtlKHNob3VsZFNoYWtlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zaGFrZShzaG91bGRTaGFrZSk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIGxhYmVsIHRvIGZsb2F0L2RvY2suXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXQgc3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdCBieSBhZGRpbmcgZmxvYXQgY2xhc3NcbiAgICogaWYgdHJ1ZSwgb3RoZXJ3aXNlIGRvY2tzIHRoZSBsYWJlbCBieSByZW1vdmluZyB0aGUgZmxvYXQgY2xhc3MuXG4gICAqL1xuICBmbG9hdChzaG91bGRGbG9hdCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZmxvYXQoc2hvdWxkRmxvYXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFdpZHRoKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBnZXRXaWR0aDogKCkgPT4gdGhpcy5yb290Xy5vZmZzZXRXaWR0aCxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge01EQ0Zsb2F0aW5nTGFiZWwsIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9ufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRm9ybSBGaWVsZC4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBldmVudCBoYW5kbGVyc1xuICogLSByaXBwbGUgYWN0aXZhdGlvblxuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDRm9ybUZpZWxkQWRhcHRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyFFdmVudExpc3RlbmVyfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0geyFFdmVudExpc3RlbmVyfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgYWN0aXZhdGVJbnB1dFJpcHBsZSgpIHt9XG5cbiAgZGVhY3RpdmF0ZUlucHV0UmlwcGxlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm9ybUZpZWxkQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtZm9ybS1maWVsZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1mb3JtLWZpZWxkID4gbGFiZWwnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENGb3JtRmllbGRBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDRm9ybUZpZWxkQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFNRENGb3JtRmllbGRBZGFwdGVyfSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogdHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlSW5wdXRSaXBwbGU6ICgpID0+IHt9LFxuICAgICAgZGVhY3RpdmF0ZUlucHV0UmlwcGxlOiAoKSA9PiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRm9ybUZpZWxkRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnRMaXN0ZW5lcn0gKi9cbiAgICB0aGlzLmNsaWNrSGFuZGxlcl8gPSAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyfSAqLyAoXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUNsaWNrXygpKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBoYW5kbGVDbGlja18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUlucHV0UmlwcGxlKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUlucHV0UmlwcGxlKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC9zZWxlY3Rpb24tY29udHJvbC9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENGb3JtRmllbGRGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENGb3JtRmllbGQgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDRm9ybUZpZWxkKHJvb3QpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7P01EQ1NlbGVjdGlvbkNvbnRyb2x9IGlucHV0ICovXG4gIHNldCBpbnB1dChpbnB1dCkge1xuICAgIHRoaXMuaW5wdXRfID0gaW5wdXQ7XG4gIH1cblxuICAvKiogQHJldHVybiB7P01EQ1NlbGVjdGlvbkNvbnRyb2x9ICovXG4gIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF87XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUgez9NRENTZWxlY3Rpb25Db250cm9sfSAqL1xuICAgIHRoaXMuaW5wdXRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFFbGVtZW50fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IGxhYmVsXygpIHtcbiAgICBjb25zdCB7TEFCRUxfU0VMRUNUT1J9ID0gTURDRm9ybUZpZWxkRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKExBQkVMX1NFTEVDVE9SKSk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IU1EQ0Zvcm1GaWVsZEZvdW5kYXRpb259ICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDRm9ybUZpZWxkRm91bmRhdGlvbih7XG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHRoaXMubGFiZWxfLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5sYWJlbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgIGFjdGl2YXRlSW5wdXRSaXBwbGU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfICYmIHRoaXMuaW5wdXRfLnJpcHBsZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRfLnJpcHBsZS5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUlucHV0UmlwcGxlOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0XyAmJiB0aGlzLmlucHV0Xy5yaXBwbGUpIHtcbiAgICAgICAgICB0aGlzLmlucHV0Xy5yaXBwbGUuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7TURDRm9ybUZpZWxkLCBNRENGb3JtRmllbGRGb3VuZGF0aW9ufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGV4dEZpZWxkIExpbmUgUmlwcGxlLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIGxpbmUgcmlwcGxlIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENMaW5lUmlwcGxlQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGxpbmUgcmlwcGxlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGxpbmUgcmlwcGxlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzdHlsZSBwcm9wZXJ0eSB3aXRoIHByb3BlcnR5TmFtZSB0byB2YWx1ZSBvbiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0U3R5bGUocHJvcGVydHlOYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBsaW5lIHJpcHBsZSBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJFdmVudEhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGxpbmUgcmlwcGxlIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpbmVSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgTElORV9SSVBQTEVfQUNUSVZFOiAnbWRjLWxpbmUtcmlwcGxlLS1hY3RpdmUnLFxuICBMSU5FX1JJUFBMRV9ERUFDVElWQVRJTkc6ICdtZGMtbGluZS1yaXBwbGUtLWRlYWN0aXZhdGluZycsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0xpbmVSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENMaW5lUmlwcGxlQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDTGluZVJpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTGluZVJpcHBsZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDTGluZVJpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENMaW5lUmlwcGxlQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXI6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0xpbmVSaXBwbGVBZGFwdGVyPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IC8qKiBAdHlwZSB7IU1EQ0xpbmVSaXBwbGVBZGFwdGVyfSAqLyAoe30pKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXJfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGVcbiAgICovXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9BQ1RJVkUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNlbnRlciBvZiB0aGUgcmlwcGxlIGFuaW1hdGlvbiB0byB0aGUgZ2l2ZW4gWCBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge251bWJlcn0geENvb3JkaW5hdGVcbiAgICovXG4gIHNldFJpcHBsZUNlbnRlcih4Q29vcmRpbmF0ZSkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHt4Q29vcmRpbmF0ZX1weCBjZW50ZXJgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGVcbiAgICovXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHRyYW5zaXRpb24gZW5kIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gV2FpdCBmb3IgdGhlIGxpbmUgcmlwcGxlIHRvIGJlIGVpdGhlciB0cmFuc3BhcmVudCBvciBvcGFxdWVcbiAgICAvLyBiZWZvcmUgZW1pdHRpbmcgdGhlIGFuaW1hdGlvbiBlbmQgZXZlbnRcbiAgICBjb25zdCBpc0RlYWN0aXZhdGluZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuXG4gICAgaWYgKGV2dC5wcm9wZXJ0eU5hbWUgPT09ICdvcGFjaXR5Jykge1xuICAgICAgaWYgKGlzRGVhY3RpdmF0aW5nKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9BQ1RJVkUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGluZVJpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDTGluZVJpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENMaW5lUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0xpbmVSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDTGluZVJpcHBsZShyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlXG4gICAqL1xuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlXG4gICAqL1xuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRyYW5zZm9ybSBvcmlnaW4gZ2l2ZW4gYSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uIFRoZSBgcmlwcGxlQ2VudGVyYCBpcyB0aGVcbiAgICogeC1jb29yZGluYXRlIG9mIHRoZSBtaWRkbGUgb2YgdGhlIHJpcHBsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHhDb29yZGluYXRlXG4gICAqL1xuICBzZXRSaXBwbGVDZW50ZXIoeENvb3JkaW5hdGUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFJpcHBsZUNlbnRlcih4Q29vcmRpbmF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbigvKiogQHR5cGUgeyFNRENMaW5lUmlwcGxlQWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBzZXRTdHlsZTogKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHRoaXMucm9vdF8uc3R5bGVbcHJvcGVydHlOYW1lXSA9IHZhbHVlLFxuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgIH0pKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtNRENMaW5lUmlwcGxlLCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIE5vdGNoZWQgT3V0bGluZS5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBOb3RjaGVkIE91dGxpbmUgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlciB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWdodCBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRIZWlnaHQoKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwiZFwiIGF0dHJpYnV0ZSBvZiB0aGUgb3V0bGluZSBlbGVtZW50J3MgU1ZHIHBhdGguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0T3V0bGluZVBhdGhBdHRyKHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZGxlIG91dGxpbmUgZWxlbWVudCdzIGNvbXB1dGVkIHN0eWxlIHZhbHVlIG9mIHRoZSBnaXZlbiBjc3MgcHJvcGVydHkgYHByb3BlcnR5TmFtZWAuXG4gICAqIFdlIGFjaGlldmUgdGhpcyB2aWEgYGdldENvbXB1dGVkU3R5bGUoLi4uKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSlgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldElkbGVPdXRsaW5lU3R5bGVWYWx1ZShwcm9wZXJ0eU5hbWUpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFBBVEhfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZV9fcGF0aCcsXG4gIElETEVfT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lX19pZGxlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgT1VUTElORV9OT1RDSEVEOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tbm90Y2hlZCcsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldEhlaWdodDogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRPdXRsaW5lUGF0aEF0dHI6ICgpID0+IHt9LFxuICAgICAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIG91dGxpbmUgbm90Y2hlZCBzZWxlY3RvciBhbmQgdXBkYXRlcyB0aGUgbm90Y2ggd2lkdGhcbiAgICogY2FsY3VsYXRlZCBiYXNlZCBvZmYgb2Ygbm90Y2hXaWR0aCBhbmQgaXNSdGwuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3RjaFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqL1xuICBub3RjaChub3RjaFdpZHRoLCBpc1J0bCA9IGZhbHNlKSB7XG4gICAgY29uc3Qge09VVExJTkVfTk9UQ0hFRH0gPSBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gICAgdGhpcy51cGRhdGVTdmdQYXRoXyhub3RjaFdpZHRoLCBpc1J0bCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBub3RjaGVkIG91dGxpbmUgc2VsZWN0b3IgdG8gY2xvc2UgdGhlIG5vdGNoIGluIHRoZSBvdXRsaW5lLlxuICAgKi9cbiAgY2xvc2VOb3RjaCgpIHtcbiAgICBjb25zdCB7T1VUTElORV9OT1RDSEVEfSA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBTVkcgcGF0aCBvZiB0aGUgZm9jdXMgb3V0bGluZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBub3RjaFdpZHRoXG4gICAqIGFuZCB0aGUgUlRMIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3RjaFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1cGRhdGVTdmdQYXRoXyhub3RjaFdpZHRoLCBpc1J0bCkge1xuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIGEgc3BlY2lmaWMgY29ybmVyJ3Mgc3R5bGUgYmVjYXVzZSBGaXJlZm94IGRvZXNuJ3QgcmVwb3J0IHRoZSBzdHlsZSBvbiBib3JkZXItcmFkaXVzLlxuICAgIGNvbnN0IHJhZGl1c1N0eWxlVmFsdWUgPSB0aGlzLmFkYXB0ZXJfLmdldElkbGVPdXRsaW5lU3R5bGVWYWx1ZSgnYm9yZGVyLXJhZGl1cycpIHx8XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyk7XG4gICAgY29uc3QgcmFkaXVzID0gcGFyc2VGbG9hdChyYWRpdXNTdHlsZVZhbHVlKTtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IGNvcm5lcldpZHRoID0gcmFkaXVzICsgMS4yO1xuICAgIGNvbnN0IGxlYWRpbmdTdHJva2VMZW5ndGggPSBNYXRoLmFicygxMSAtIGNvcm5lcldpZHRoKTtcbiAgICBjb25zdCBwYWRkZWROb3RjaFdpZHRoID0gbm90Y2hXaWR0aCArIDg7XG5cbiAgICAvLyBUaGUgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQgc2lkZXMgb2YgdGhlIG91dGxpbmUgZm9sbG93IHRoZSBzYW1lIFNWRyBwYXRoLlxuICAgIGNvbnN0IHBhdGhNaWRkbGUgPSAnYScgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMCAxICcgKyByYWRpdXMgKyAnLCcgKyByYWRpdXNcbiAgICAgICsgJ3YnICsgKGhlaWdodCAtICgyICogY29ybmVyV2lkdGgpKVxuICAgICAgKyAnYScgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMCAxICcgKyAtcmFkaXVzICsgJywnICsgcmFkaXVzXG4gICAgICArICdoJyArICgtd2lkdGggKyAoMiAqIGNvcm5lcldpZHRoKSlcbiAgICAgICsgJ2EnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDAgMSAnICsgLXJhZGl1cyArICcsJyArIC1yYWRpdXNcbiAgICAgICsgJ3YnICsgKC1oZWlnaHQgKyAoMiAqIGNvcm5lcldpZHRoKSlcbiAgICAgICsgJ2EnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDAgMSAnICsgcmFkaXVzICsgJywnICsgLXJhZGl1cztcblxuICAgIGxldCBwYXRoO1xuICAgIGlmICghaXNSdGwpIHtcbiAgICAgIHBhdGggPSAnTScgKyAoY29ybmVyV2lkdGggKyBsZWFkaW5nU3Ryb2tlTGVuZ3RoICsgcGFkZGVkTm90Y2hXaWR0aCkgKyAnLCcgKyAxXG4gICAgICAgICsgJ2gnICsgKHdpZHRoIC0gKDIgKiBjb3JuZXJXaWR0aCkgLSBwYWRkZWROb3RjaFdpZHRoIC0gbGVhZGluZ1N0cm9rZUxlbmd0aClcbiAgICAgICAgKyBwYXRoTWlkZGxlXG4gICAgICAgICsgJ2gnICsgbGVhZGluZ1N0cm9rZUxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICdNJyArICh3aWR0aCAtIGNvcm5lcldpZHRoIC0gbGVhZGluZ1N0cm9rZUxlbmd0aCkgKyAnLCcgKyAxXG4gICAgICAgICsgJ2gnICsgbGVhZGluZ1N0cm9rZUxlbmd0aFxuICAgICAgICArIHBhdGhNaWRkbGVcbiAgICAgICAgKyAnaCcgKyAod2lkdGggLSAoMiAqIGNvcm5lcldpZHRoKSAtIHBhZGRlZE5vdGNoV2lkdGggLSBsZWFkaW5nU3Ryb2tlTGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldE91dGxpbmVQYXRoQXR0cihwYXRoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ05vdGNoZWRPdXRsaW5lIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ05vdGNoZWRPdXRsaW5lKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBVcGRhdGVzIG91dGxpbmUgc2VsZWN0b3JzIGFuZCBTVkcgcGF0aCB0byBvcGVuIG5vdGNoLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGNoV2lkdGggVGhlIG5vdGNoIHdpZHRoIGluIHRoZSBvdXRsaW5lLlxuICAgICogQHBhcmFtIHtib29sZWFuPX0gaXNSdGwgRGV0ZXJtaW5lcyBpZiBvdXRsaW5lIGlzIHJ0bC4gSWYgcnRsIGlzIHRydWUsIG5vdGNoXG4gICAgKiB3aWxsIGJlIHJpZ2h0IGp1c3RpZmllZCBpbiBvdXRsaW5lIHBhdGgsIG90aGVyd2lzZSBsZWZ0IGp1c3RpZmllZC5cbiAgICAqL1xuICBub3RjaChub3RjaFdpZHRoLCBpc1J0bCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubm90Y2gobm90Y2hXaWR0aCwgaXNSdGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG91dGxpbmUgc2VsZWN0b3JzIHRvIGNsb3NlIG5vdGNoIGFuZCByZXR1cm4gaXQgdG8gaWRsZSBzdGF0ZS5cbiAgICovXG4gIGNsb3NlTm90Y2goKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZU5vdGNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uKHtcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgZ2V0SGVpZ2h0OiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldEhlaWdodCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIHNldE91dGxpbmVQYXRoQXR0cjogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5QQVRIX1NFTEVDVE9SKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlOiAocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkbGVPdXRsaW5lRWxlbWVudCA9IHRoaXMucm9vdF8ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSURMRV9PVVRMSU5FX1NFTEVDVE9SKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlkbGVPdXRsaW5lRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge01EQ05vdGNoZWRPdXRsaW5lLCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb259O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdGlvbi1jb250cm9sL2luZGV4JztcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJhZGlvLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSYWRpb0FkYXB0ZXIge1xuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshTURDU2VsZWN0aW9uQ29udHJvbFN0YXRlfSAqL1xuICBnZXROYXRpdmVDb250cm9sKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmFkaW9BZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I6ICcubWRjLXJhZGlvX19uYXRpdmUtY29udHJvbCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtcmFkaW8nLFxuICBESVNBQkxFRDogJ21kYy1yYWRpby0tZGlzYWJsZWQnLFxufTtcblxuZXhwb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdGlvbi1jb250cm9sL2luZGV4JztcbmltcG9ydCBNRENSYWRpb0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSYWRpb0FkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSYWRpb0ZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFNRENSYWRpb0FkYXB0ZXJ9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1JhZGlvQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBnZXROYXRpdmVDb250cm9sOiAoKSA9PiAvKiAhTURDU2VsZWN0aW9uQ29udHJvbFN0YXRlICovIHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVDb250cm9sXygpLmNoZWNrZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBjaGVja2VkICovXG4gIHNldENoZWNrZWQoY2hlY2tlZCkge1xuICAgIHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUNvbnRyb2xfKCkuZGlzYWJsZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGNvbnN0IHtESVNBQkxFRH0gPSBNRENSYWRpb0ZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmdldE5hdGl2ZUNvbnRyb2xfKCkuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKERJU0FCTEVEKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlQ29udHJvbF8oKS52YWx1ZTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlICovXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5nZXROYXRpdmVDb250cm9sXygpLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE5hdGl2ZUNvbnRyb2xfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldE5hdGl2ZUNvbnRyb2woKSB8fCB7XG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmFkaW9Gb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZSwgTURDU2VsZWN0aW9uQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdGlvbi1jb250cm9sL2luZGV4Jztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENSYWRpb0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4JztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JhZGlvRm91bmRhdGlvbj5cbiAqIEBpbXBsZW1lbnRzIHtNRENTZWxlY3Rpb25Db250cm9sfVxuICovXG5jbGFzcyBNRENSYWRpbyBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENSYWRpbyhyb290KTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc0NoZWNrZWQoKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgKi9cbiAgc2V0IGNoZWNrZWQoY2hlY2tlZCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0Q2hlY2tlZChjaGVja2VkKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNEaXNhYmxlZCgpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgKi9cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHs/c3RyaW5nfSB2YWx1ZSAqL1xuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTURDUmlwcGxlfSAqL1xuICBnZXQgcmlwcGxlKCkge1xuICAgIHJldHVybiB0aGlzLnJpcHBsZV87XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFNRENSaXBwbGV9ICovXG4gICAgdGhpcy5yaXBwbGVfID0gdGhpcy5pbml0UmlwcGxlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0UmlwcGxlXygpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gT2JqZWN0LmFzc2lnbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSwge1xuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHRydWUsXG4gICAgICAvLyBSYWRpbyBidXR0b25zIHRlY2huaWNhbGx5IGdvIFwiYWN0aXZlXCIgd2hlbmV2ZXIgdGhlcmUgaXMgKmFueSoga2V5Ym9hcmQgaW50ZXJhY3Rpb24uIFRoaXMgaXMgbm90IHRoZVxuICAgICAgLy8gVUkgd2UgZGVzaXJlLlxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBmYWxzZSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHRoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcbiAgICBjb25zdCBmb3VuZGF0aW9uID0gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGUodGhpcy5yb290XywgZm91bmRhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhdGUgb2YgdGhlIG5hdGl2ZSBjb250cm9sIGVsZW1lbnQsIG9yIG51bGwgaWYgdGhlIG5hdGl2ZSBjb250cm9sIGVsZW1lbnQgaXMgbm90IHByZXNlbnQuXG4gICAqIEByZXR1cm4gez9NRENTZWxlY3Rpb25Db250cm9sU3RhdGV9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXQgbmF0aXZlQ29udHJvbF8oKSB7XG4gICAgY29uc3Qge05BVElWRV9DT05UUk9MX1NFTEVDVE9SfSA9IE1EQ1JhZGlvRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IGVsID0gLyoqIEB0eXBlIHs/TURDU2VsZWN0aW9uQ29udHJvbFN0YXRlfSAqLyAoXG4gICAgICB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IpKTtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlXy5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFNRENSYWRpb0ZvdW5kYXRpb259ICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmFkaW9Gb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGdldE5hdGl2ZUNvbnRyb2w6ICgpID0+IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENSYWRpb0ZvdW5kYXRpb24uc3RyaW5ncy5OQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUiksXG4gICAgfSk7XG4gIH1cbn1cblxuXG5leHBvcnQge01EQ1JhZGlvLCBNRENSYWRpb0ZvdW5kYXRpb259O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogRXZlbnQsXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuZGVhY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKD9FdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShcbiAgICAgICgpID0+IHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpXG4gICAgKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oP0V2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgICAoKSA9PiB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKVxuICAgICk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHs/RXZlbnR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzU3VwcG9ydGVkXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogbnVsbCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWRfKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcblxuICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkXygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG5cbiAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IG51bGw7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPVxuICAgICAgZSAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKCh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gez9FdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gez9FdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCA9IG51bGwpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IG51bGwsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXyhlKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgY29uc3QgZXZ0T2JqZWN0ID0gbnVsbDtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKGV2dE9iamVjdCwgc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhlLCBzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZGVhY3RpdmF0ZShldmVudCA9IG51bGwpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKGUsIHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259ICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58e3Bhc3NpdmU6IGJvb2xlYW59fVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7cGFzc2l2ZTogdHJ1ZX0gOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHshQXJyYXk8c3RyaW5nPn1cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIHJldHVybiBbXG4gICAgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvcicsICdtYXRjaGVzJyxcbiAgXS5maWx0ZXIoKHApID0+IHAgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpLnBvcCgpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQk9YOiAnbWRjLXNlbGVjdC0tYm94JyxcbiAgRElTQUJMRUQ6ICdtZGMtc2VsZWN0LS1kaXNhYmxlZCcsXG4gIFJPT1Q6ICdtZGMtc2VsZWN0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBDSEFOR0VfRVZFTlQ6ICdNRENTZWxlY3Q6Y2hhbmdlJyxcbiAgTElORV9SSVBQTEVfU0VMRUNUT1I6ICcubWRjLWxpbmUtcmlwcGxlJyxcbiAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLWZsb2F0aW5nLWxhYmVsJyxcbiAgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I6ICcubWRjLXNlbGVjdF9fbmF0aXZlLWNvbnRyb2wnLFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TURDRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1EQ1NlbGVjdEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGZsb2F0TGFiZWw6ICgvKiB2YWx1ZTogYm9vbGVhbiAqLykgPT4ge30sXG4gICAgICBhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHt9LFxuICAgICAgZGVhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBnZXRTZWxlY3RlZEluZGV4OiAoKSA9PiAvKiBudW1iZXIgKi8gLTEsXG4gICAgICBzZXRTZWxlY3RlZEluZGV4OiAoLyogaW5kZXg6IG51bWJlciAqLykgPT4ge30sXG4gICAgICBzZXREaXNhYmxlZDogKC8qIGRpc2FibGVkOiBib29sZWFuICovKSA9PiB7fSxcbiAgICAgIGdldFZhbHVlOiAoKSA9PiAvKiBzdHJpbmcgKi8gJycsXG4gICAgICBzZXRWYWx1ZTogKC8qIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENTZWxlY3RGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZUZvY3VzXyhldnQpO1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVCbHVyXyhldnQpO1xuICAgIHRoaXMuc2VsZWN0aW9uSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVNlbGVjdF8oZXZ0KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignY2hhbmdlJywgdGhpcy5zZWxlY3Rpb25IYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NoYW5nZScsIHRoaXMuc2VsZWN0aW9uSGFuZGxlcl8pO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgdGhpcy5mbG9hdExhYmVsV2l0aFZhbHVlXygpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXgodGhpcy5hZGFwdGVyXy5nZXRTZWxlY3RlZEluZGV4KCkpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICBjb25zdCB7RElTQUJMRUR9ID0gTURDU2VsZWN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRElTQUJMRUQpO1xuICAgIH1cbiAgfVxuXG4gIGZsb2F0TGFiZWxXaXRoVmFsdWVfKCkge1xuICAgIGNvbnN0IG9wdGlvbkhhc1ZhbHVlID0gdGhpcy5hZGFwdGVyXy5nZXRWYWx1ZSgpLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKG9wdGlvbkhhc1ZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodHJ1ZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUJvdHRvbUxpbmUoKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXJfKCkge1xuICAgIHRoaXMuZmxvYXRMYWJlbFdpdGhWYWx1ZV8oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVCb3R0b21MaW5lKCk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RfKCkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleCh0aGlzLmFkYXB0ZXJfLmdldFNlbGVjdGVkSW5kZXgoKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TURDQ29tcG9uZW50fSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9pbmRleCc7XG5pbXBvcnQge01EQ0Zsb2F0aW5nTGFiZWx9IGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9pbmRleCc7XG5pbXBvcnQge01EQ0xpbmVSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9saW5lLXJpcHBsZS9pbmRleCc7XG5pbXBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCc7XG5cbmltcG9ydCBNRENTZWxlY3RGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IHtNRENTZWxlY3RGb3VuZGF0aW9ufTtcblxuZXhwb3J0IGNsYXNzIE1EQ1NlbGVjdCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENTZWxlY3Qocm9vdCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlQ29udHJvbF8udmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbnRyb2xfLnNlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWRJbmRleChzZWxlY3RlZEluZGV4KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXgpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbnRyb2xfLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG4gIH1cblxuICBpbml0aWFsaXplKFxuICAgIGxhYmVsRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwoZWwpLFxuICAgIGxpbmVSaXBwbGVGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDTGluZVJpcHBsZShlbCkpIHtcbiAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxBQkVMX1NFTEVDVE9SKTtcbiAgICBpZiAobGFiZWxFbGVtZW50KSB7XG4gICAgICB0aGlzLmxhYmVsXyA9IGxhYmVsRmFjdG9yeShsYWJlbEVsZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdCBsaW5lUmlwcGxlRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxJTkVfUklQUExFX1NFTEVDVE9SKTtcbiAgICBpZiAobGluZVJpcHBsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMubGluZVJpcHBsZV8gPSBsaW5lUmlwcGxlRmFjdG9yeShsaW5lUmlwcGxlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuQk9YKSkge1xuICAgICAgdGhpcy5yaXBwbGUgPSB0aGlzLmluaXRSaXBwbGVfKCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFJpcHBsZV8oKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IE9iamVjdC5hc3NpZ24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcyksIHtcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHRoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcbiAgICBjb25zdCBmb3VuZGF0aW9uID0gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGUodGhpcy5yb290XywgZm91bmRhdGlvbik7XG4gIH1cblxuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1NlbGVjdEZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgZmxvYXRMYWJlbDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsXykge1xuICAgICAgICAgIHRoaXMubGFiZWxfLmZsb2F0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGl2YXRlQm90dG9tTGluZTogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgIHRoaXMubGluZVJpcHBsZV8uYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlYWN0aXZhdGVCb3R0b21MaW5lOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgdGhpcy5saW5lUmlwcGxlXy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXREaXNhYmxlZDogKGRpc2FibGVkKSA9PiB0aGlzLm5hdGl2ZUNvbnRyb2xfLmRpc2FibGVkID0gZGlzYWJsZWQsXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHRoaXMubmF0aXZlQ29udHJvbF8uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICh0eXBlLCBoYW5kbGVyKSA9PiB0aGlzLm5hdGl2ZUNvbnRyb2xfLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciksXG4gICAgICBnZXRTZWxlY3RlZEluZGV4OiAoKSA9PiB0aGlzLm5hdGl2ZUNvbnRyb2xfLnNlbGVjdGVkSW5kZXgsXG4gICAgICBzZXRTZWxlY3RlZEluZGV4OiAoaW5kZXgpID0+IHRoaXMubmF0aXZlQ29udHJvbF8uc2VsZWN0ZWRJbmRleCA9IGluZGV4LFxuICAgICAgZ2V0VmFsdWU6ICgpID0+IHRoaXMubmF0aXZlQ29udHJvbF8udmFsdWUsXG4gICAgICBzZXRWYWx1ZTogKHZhbHVlKSA9PiB0aGlzLm5hdGl2ZUNvbnRyb2xfLnZhbHVlID0gdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gbmVlZGVkIHRvIHN5bmMgZmxvYXRpbmcgbGFiZWxcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLm5hdGl2ZUNvbnRyb2xfLnNlbGVjdGVkSW5kZXg7XG5cbiAgICBpZiAodGhpcy5uYXRpdmVDb250cm9sXy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGUpIHtcbiAgICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDUmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4Jztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBjaGVja2VkOiBib29sZWFuLFxuICogICBpbmRldGVybWluYXRlOiBib29sZWFuLFxuICogICBkaXNhYmxlZDogYm9vbGVhbixcbiAqICAgdmFsdWU6ID9zdHJpbmdcbiAqIH19XG4gKi9cbmxldCBNRENTZWxlY3Rpb25Db250cm9sU3RhdGU7XG5cbi8qKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENTZWxlY3Rpb25Db250cm9sIHtcbiAgLyoqIEByZXR1cm4gez9NRENSaXBwbGV9ICovXG4gIGdldCByaXBwbGUoKSB7fVxufVxuXG5leHBvcnQge01EQ1NlbGVjdGlvbkNvbnRyb2xTdGF0ZSwgTURDU2VsZWN0aW9uQ29udHJvbH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBmcm9tICcuL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIGZyb20gJy4vaWNvbi9mb3VuZGF0aW9uJztcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgdmFsdWU6IHN0cmluZyxcbiAqICAgZGlzYWJsZWQ6IGJvb2xlYW4sXG4gKiAgIGJhZElucHV0OiBib29sZWFuLFxuICogICB2YWxpZGl0eToge1xuICogICAgIGJhZElucHV0OiBib29sZWFuLFxuICogICAgIHZhbGlkOiBib29sZWFuLFxuICogICB9LFxuICogfX1cbiAqL1xubGV0IE5hdGl2ZUlucHV0VHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBoZWxwZXJUZXh0OiAoIU1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9ufHVuZGVmaW5lZCksXG4gKiAgIGljb246ICghTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqIH19XG4gKi9cbmxldCBGb3VuZGF0aW9uTWFwVHlwZTtcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGV4dCBGaWVsZC5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBUZXh0IEZpZWxkIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByb290IGVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzIG5hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHZhbGlkYXRpb24gYXR0cmlidXRlIGNoYW5nZSBsaXN0ZW5lciBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogSGFuZGxlciBhY2NlcHRzIGxpc3Qgb2YgYXR0cmlidXRlIG5hbWVzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFBcnJheTxzdHJpbmc+KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqIEByZXR1cm4geyFNdXRhdGlvbk9ic2VydmVyfVxuICAgKi9cbiAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyBhIHZhbGlkYXRpb24gYXR0cmlidXRlIG9ic2VydmVyIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBvYnNlcnZlclxuICAgKi9cbiAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKG9ic2VydmVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGVsZW1lbnQsIHdpdGggYVxuICAgKiBzaW1pbGFyIEFQSSBzaGFwZS4gVGhlIG9iamVjdCByZXR1cm5lZCBzaG91bGQgaW5jbHVkZSB0aGUgdmFsdWUsIGRpc2FibGVkXG4gICAqIGFuZCBiYWRJbnB1dCBwcm9wZXJ0aWVzLCBhcyB3ZWxsIGFzIHRoZSBjaGVja1ZhbGlkaXR5KCkgZnVuY3Rpb24uIFdlIG5ldmVyXG4gICAqIGFsdGVyIHRoZSB2YWx1ZSB3aXRoaW4gb3VyIGNvZGUsIGhvd2V2ZXIgd2UgZG8gdXBkYXRlIHRoZSBkaXNhYmxlZFxuICAgKiBwcm9wZXJ0eSwgc28gaWYgeW91IGNob29zZSB0byBkdWNrLXR5cGUgdGhlIHJldHVybiB2YWx1ZSBmb3IgdGhpcyBtZXRob2RcbiAgICogaW4geW91ciBpbXBsZW1lbnRhdGlvbiBpdCdzIGltcG9ydGFudCB0byBrZWVwIHRoaXMgaW4gbWluZC4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhpcyBtZXRob2QgY2FuIHJldHVybiBudWxsLCB3aGljaCB0aGUgZm91bmRhdGlvbiB3aWxsIGhhbmRsZSBncmFjZWZ1bGx5LlxuICAgKiBAcmV0dXJuIHs/RWxlbWVudHw/TmF0aXZlSW5wdXRUeXBlfVxuICAgKi9cbiAgZ2V0TmF0aXZlSW5wdXQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRleHRmaWVsZCBpcyBmb2N1c2VkLlxuICAgKiBXZSBhY2hpZXZlIHRoaXMgdmlhIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLnJvb3RfYC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRm9jdXNlZCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZGlyZWN0aW9uIG9mIHRoZSByb290IGVsZW1lbnQgaXMgc2V0IHRvIFJUTC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzUnRsKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZS5cbiAgICovXG4gIGFjdGl2YXRlTGluZVJpcHBsZSgpIHt9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZS5cbiAgICovXG4gIGRlYWN0aXZhdGVMaW5lUmlwcGxlKCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdHJhbnNmb3JtIG9yaWdpbiBvZiB0aGUgbGluZSByaXBwbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3JtYWxpemVkWFxuICAgKi9cbiAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbihub3JtYWxpemVkWCkge31cblxuICAvKipcbiAgICogT25seSBpbXBsZW1lbnQgaWYgbGFiZWwgZXhpc3RzLlxuICAgKiBTaGFrZXMgbGFiZWwgaWYgc2hvdWxkU2hha2UgaXMgdHJ1ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRTaGFrZVxuICAgKi9cbiAgc2hha2VMYWJlbChzaG91bGRTaGFrZSkge31cblxuICAvKipcbiAgICogT25seSBpbXBsZW1lbnQgaWYgbGFiZWwgZXhpc3RzLlxuICAgKiBGbG9hdHMgdGhlIGxhYmVsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50IGlmIHNob3VsZEZsb2F0IGlzIHRydWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXRcbiAgICovXG4gIGZsb2F0TGFiZWwoc2hvdWxkRmxvYXQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBsYWJlbCBlbGVtZW50IGV4aXN0cywgZmFsc2UgaWYgaXQgZG9lc24ndC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0xhYmVsKCkge31cblxuICAvKipcbiAgICogT25seSBpbXBsZW1lbnQgaWYgbGFiZWwgZXhpc3RzLlxuICAgKiBSZXR1cm5zIHdpZHRoIG9mIGxhYmVsIGluIHBpeGVscy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0TGFiZWxXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLCBmYWxzZSBpZiBpdCBkb2Vzbid0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzT3V0bGluZSgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMuXG4gICAqIFVwZGF0ZXMgU1ZHIFBhdGggYW5kIG91dGxpbmUgZWxlbWVudCBiYXNlZCBvbiB0aGVcbiAgICogbGFiZWwgZWxlbWVudCB3aWR0aCBhbmQgUlRMIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYWJlbFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqL1xuICBub3RjaE91dGxpbmUobGFiZWxXaWR0aCwgaXNSdGwpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMuXG4gICAqIENsb3NlcyBub3RjaCBpbiBvdXRsaW5lIGVsZW1lbnQuXG4gICAqL1xuICBjbG9zZU91dGxpbmUoKSB7fVxufVxuXG5leHBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIE5hdGl2ZUlucHV0VHlwZSwgRm91bmRhdGlvbk1hcFR5cGV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9DT05UUk9MUzogJ2FyaWEtY29udHJvbHMnLFxuICBJTlBVVF9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faW5wdXQnLFxuICBMQUJFTF9TRUxFQ1RPUjogJy5tZGMtZmxvYXRpbmctbGFiZWwnLFxuICBJQ09OX1NFTEVDVE9SOiAnLm1kYy10ZXh0LWZpZWxkX19pY29uJyxcbiAgT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lJyxcbiAgTElORV9SSVBQTEVfU0VMRUNUT1I6ICcubWRjLWxpbmUtcmlwcGxlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy10ZXh0LWZpZWxkJyxcbiAgVVBHUkFERUQ6ICdtZGMtdGV4dC1maWVsZC0tdXBncmFkZWQnLFxuICBESVNBQkxFRDogJ21kYy10ZXh0LWZpZWxkLS1kaXNhYmxlZCcsXG4gIERFTlNFOiAnbWRjLXRleHQtZmllbGQtLWRlbnNlJyxcbiAgRk9DVVNFRDogJ21kYy10ZXh0LWZpZWxkLS1mb2N1c2VkJyxcbiAgSU5WQUxJRDogJ21kYy10ZXh0LWZpZWxkLS1pbnZhbGlkJyxcbiAgQk9YOiAnbWRjLXRleHQtZmllbGQtLWJveCcsXG4gIE9VVExJTkVEOiAnbWRjLXRleHQtZmllbGQtLW91dGxpbmVkJyxcbn07XG5cbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xuY29uc3QgbnVtYmVycyA9IHtcbiAgTEFCRUxfU0NBTEU6IDAuNzUsXG4gIERFTlNFX0xBQkVMX1NDQUxFOiAwLjkyMyxcbn07XG5cbi8vIHdoaXRlbGlzdCBiYXNlZCBvZmYgb2YgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvSFRNTC9IVE1MNS9Db25zdHJhaW50X3ZhbGlkYXRpb25cbi8vIHVuZGVyIHNlY3Rpb246IGBWYWxpZGF0aW9uLXJlbGF0ZWQgYXR0cmlidXRlc2BcbmNvbnN0IFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QgPSBbXG4gICdwYXR0ZXJuJywgJ21pbicsICdtYXgnLCAncmVxdWlyZWQnLCAnc3RlcCcsICdtaW5sZW5ndGgnLCAnbWF4bGVuZ3RoJyxcbl07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIGZyb20gJy4vaGVscGVyLXRleHQvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gZnJvbSAnLi9pY29uL2ZvdW5kYXRpb24nO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUZXh0RmllbGRBZGFwdGVyLCBOYXRpdmVJbnB1dFR5cGUsIEZvdW5kYXRpb25NYXBUeXBlfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNUfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGV4dEZpZWxkQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHNob3VsZFNoYWtlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc1ZhbGlkKCkgJiYgIXRoaXMuaXNGb2N1c2VkXztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgc2hvdWxkRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkXyB8fCAhIXRoaXMuZ2V0VmFsdWUoKSB8fCB0aGlzLmlzQmFkSW5wdXRfKCk7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZ2V0TmF0aXZlSW5wdXQ6ICgpID0+IHt9LFxuICAgICAgaXNGb2N1c2VkOiAoKSA9PiB7fSxcbiAgICAgIGlzUnRsOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge30sXG4gICAgICBkZWFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge30sXG4gICAgICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luOiAoKSA9PiB7fSxcbiAgICAgIHNoYWtlTGFiZWw6ICgpID0+IHt9LFxuICAgICAgZmxvYXRMYWJlbDogKCkgPT4ge30sXG4gICAgICBoYXNMYWJlbDogKCkgPT4ge30sXG4gICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGhhc091dGxpbmU6ICgpID0+IHt9LFxuICAgICAgbm90Y2hPdXRsaW5lOiAoKSA9PiB7fSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGV4dEZpZWxkQWRhcHRlcn0gYWRhcHRlclxuICAgKiBAcGFyYW0geyFGb3VuZGF0aW9uTWFwVHlwZT19IGZvdW5kYXRpb25NYXAgTWFwIGZyb20gc3ViY29tcG9uZW50IG5hbWVzIHRvIHRoZWlyIHN1YmZvdW5kYXRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciwgZm91bmRhdGlvbk1hcCA9IC8qKiBAdHlwZSB7IUZvdW5kYXRpb25NYXBUeXBlfSAqLyAoe30pKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUZXh0RmllbGRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oZWxwZXJUZXh0XyA9IGZvdW5kYXRpb25NYXAuaGVscGVyVGV4dDtcbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pY29uXyA9IGZvdW5kYXRpb25NYXAuaWNvbjtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzRm9jdXNlZF8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VDdXN0b21WYWxpZGl0eUNoZWNraW5nXyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzVmFsaWRfID0gdHJ1ZTtcbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuYWN0aXZhdGVGb2N1cygpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVGb2N1cygpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfID0gKCkgPT4gdGhpcy5hdXRvQ29tcGxldGVGb2N1cygpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuc2V0UG9pbnRlclhPZmZzZXRfID0gKGV2dCkgPT4gdGhpcy5zZXRUcmFuc2Zvcm1PcmlnaW4oZXZ0KTtcbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZVRleHRGaWVsZEludGVyYWN0aW9uKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighQXJyYXkpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy52YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8gPSAoYXR0cmlidXRlc0xpc3QpID0+IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZShhdHRyaWJ1dGVzTGlzdCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFNdXRhdGlvbk9ic2VydmVyfSAqL1xuICAgIHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVVBHUkFERUQpO1xuICAgIC8vIEVuc3VyZSBsYWJlbCBkb2VzIG5vdCBjb2xsaWRlIHdpdGggYW55IHByZS1maWxsZWQgdmFsdWUuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSAmJiAodGhpcy5nZXRWYWx1ZSgpIHx8IHRoaXMuaXNCYWRJbnB1dF8oKSkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzRm9jdXNlZCgpKSB7XG4gICAgICB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXygpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdpbnB1dCcsIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfKTtcbiAgICBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuc2V0UG9pbnRlclhPZmZzZXRfKTtcbiAgICB9KTtcbiAgICBbJ2NsaWNrJywgJ2tleWRvd24nXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfID1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKHRoaXMudmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXJfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVVBHUkFERUQpO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdpbnB1dCcsIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfKTtcbiAgICBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgIH0pO1xuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB1c2VyIGludGVyYWN0aW9ucyB3aXRoIHRoZSBUZXh0IEZpZWxkLlxuICAgKi9cbiAgaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7IUFycmF5PHN0cmluZz59IGF0dHJpYnV0ZXNMaXN0XG4gICAqL1xuICBoYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KSB7XG4gICAgYXR0cmlidXRlc0xpc3Quc29tZSgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgaWYgKFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QuaW5kZXhPZihhdHRyaWJ1dGVOYW1lKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zL2Nsb3NlcyB0aGUgbm90Y2hlZCBvdXRsaW5lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5Ob3RjaFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKG9wZW5Ob3RjaCkge1xuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNPdXRsaW5lKCkgfHwgIXRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcGVuTm90Y2gpIHtcbiAgICAgIGNvbnN0IGlzRGVuc2UgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuREVOU0UpO1xuICAgICAgY29uc3QgbGFiZWxTY2FsZSA9IGlzRGVuc2UgPyBudW1iZXJzLkRFTlNFX0xBQkVMX1NDQUxFIDogbnVtYmVycy5MQUJFTF9TQ0FMRTtcbiAgICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldExhYmVsV2lkdGgoKSAqIGxhYmVsU2NhbGU7XG4gICAgICBjb25zdCBpc1J0bCA9IHRoaXMuYWRhcHRlcl8uaXNSdGwoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgsIGlzUnRsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZU91dGxpbmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSB0ZXh0IGZpZWxkIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgYWN0aXZhdGVGb2N1cygpIHtcbiAgICB0aGlzLmlzRm9jdXNlZF8gPSB0cnVlO1xuICAgIHRoaXMuc3R5bGVGb2N1c2VkXyh0aGlzLmlzRm9jdXNlZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVMaW5lUmlwcGxlKCk7XG4gICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zaG93VG9TY3JlZW5SZWFkZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbGluZSByaXBwbGUncyB0cmFuc2Zvcm0gb3JpZ2luLCBzbyB0aGF0IHRoZSBsaW5lIHJpcHBsZSBhY3RpdmF0ZVxuICAgKiBhbmltYXRpb24gd2lsbCBhbmltYXRlIG91dCBmcm9tIHRoZSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIHNldFRyYW5zZm9ybU9yaWdpbihldnQpIHtcbiAgICBjb25zdCB0YXJnZXRDbGllbnRSZWN0ID0gZXZ0LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBldnRDb29yZHMgPSB7eDogZXZ0LmNsaWVudFgsIHk6IGV2dC5jbGllbnRZfTtcbiAgICBjb25zdCBub3JtYWxpemVkWCA9IGV2dENvb3Jkcy54IC0gdGFyZ2V0Q2xpZW50UmVjdC5sZWZ0O1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbihub3JtYWxpemVkWCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUgaW4gY2FzZXMgd2hlbiB0aGUgaW5wdXQgdmFsdWVcbiAgICogY2hhbmdlcyB3aXRob3V0IHVzZXIgaW5wdXQgKGUuZy4gcHJvZ3JhbWF0aWNhbGx5KS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZUZvY3VzKCkge1xuICAgIGlmICghdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8pIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgVGV4dCBGaWVsZCdzIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgZGVhY3RpdmF0ZUZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUxpbmVSaXBwbGUoKTtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCk7XG4gICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGFiZWxGbG9hdCA9ICFpbnB1dC52YWx1ZSAmJiAhdGhpcy5pc0JhZElucHV0XygpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgIHRoaXMuc3R5bGVGb2N1c2VkXyh0aGlzLmlzRm9jdXNlZF8pO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkUmVtb3ZlTGFiZWxGbG9hdCkge1xuICAgICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGlucHV0IEVsZW1lbnQuXG4gICAqL1xuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgaW5wdXQgRWxlbWVudC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWx1ZSA9IHZhbHVlO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBJZiBhIGN1c3RvbSB2YWxpZGl0eSBpcyBzZXQsIHJldHVybnMgdGhhdCB2YWx1ZS5cbiAgICogICAgIE90aGVyd2lzZSwgcmV0dXJucyB0aGUgcmVzdWx0IG9mIG5hdGl2ZSB2YWxpZGl0eSBjaGVja3MuXG4gICAqL1xuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnVzZUN1c3RvbVZhbGlkaXR5Q2hlY2tpbmdfXG4gICAgICA/IHRoaXMuaXNWYWxpZF8gOiB0aGlzLmlzTmF0aXZlSW5wdXRWYWxpZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWQgU2V0cyB0aGUgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIFRleHQgRmllbGQuXG4gICAqL1xuICBzZXRWYWxpZChpc1ZhbGlkKSB7XG4gICAgdGhpcy51c2VDdXN0b21WYWxpZGl0eUNoZWNraW5nXyA9IHRydWU7XG4gICAgdGhpcy5pc1ZhbGlkXyA9IGlzVmFsaWQ7XG4gICAgLy8gUmV0cmlldmUgZnJvbSB0aGUgZ2V0dGVyIHRvIGVuc3VyZSBjb3JyZWN0IGxvZ2ljIGlzIGFwcGxpZWQuXG4gICAgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkIFNldHMgdGhlIHRleHQtZmllbGQgZGlzYWJsZWQgb3IgZW5hYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5nZXROYXRpdmVJbnB1dF8oKS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMuc3R5bGVEaXNhYmxlZF8oZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGhlbHBlciB0ZXh0LlxuICAgKi9cbiAgc2V0SGVscGVyVGV4dENvbnRlbnQoY29udGVudCkge1xuICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRfLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0SWNvbkFyaWFMYWJlbChsYWJlbCkge1xuICAgIGlmICh0aGlzLmljb25fKSB7XG4gICAgICB0aGlzLmljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldEljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5pY29uXykge1xuICAgICAgdGhpcy5pY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlucHV0IGZhaWxzIGluIGNvbnZlcnRpbmcgdGhlXG4gICAqICAgICB1c2VyLXN1cHBsaWVkIHZhbHVlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNCYWRJbnB1dF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkuYmFkSW5wdXQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHJlc3VsdCBvZiBuYXRpdmUgdmFsaWRpdHkgY2hlY2tpbmdcbiAgICogICAgIChWYWxpZGl0eVN0YXRlLnZhbGlkKS5cbiAgICovXG4gIGlzTmF0aXZlSW5wdXRWYWxpZF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIHZhbGlkaXR5IHN0YXRlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpIHtcbiAgICBjb25zdCB7SU5WQUxJRH0gPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoSU5WQUxJRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoSU5WQUxJRCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KGlzVmFsaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgZm9jdXNlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0ZvY3VzZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlRm9jdXNlZF8oaXNGb2N1c2VkKSB7XG4gICAgY29uc3Qge0ZPQ1VTRUR9ID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRk9DVVNFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRk9DVVNFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0Rpc2FibGVkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdHlsZURpc2FibGVkXyhpc0Rpc2FibGVkKSB7XG4gICAgY29uc3Qge0RJU0FCTEVELCBJTlZBTElEfSA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhESVNBQkxFRCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKElOVkFMSUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKERJU0FCTEVEKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWNvbl8pIHtcbiAgICAgIHRoaXMuaWNvbl8uc2V0RGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFFbGVtZW50fCFOYXRpdmVJbnB1dFR5cGV9IFRoZSBuYXRpdmUgdGV4dCBpbnB1dCBmcm9tIHRoZVxuICAgKiBob3N0IGVudmlyb25tZW50LCBvciBhIGR1bW15IGlmIG5vbmUgZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TmF0aXZlSW5wdXRfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldE5hdGl2ZUlucHV0KCkgfHxcbiAgICAvKiogQHR5cGUgeyFOYXRpdmVJbnB1dFR5cGV9ICovICh7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB2YWxpZGl0eToge1xuICAgICAgICBiYWRJbnB1dDogZmFsc2UsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUZXh0IEZpZWxkIEhlbHBlciBUZXh0LlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRleHRGaWVsZCBoZWxwZXIgdGV4dCBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIHdpdGggYSBnaXZlbiB2YWx1ZSBvbiB0aGUgaGVscGVyIHRleHQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyKGF0dHIsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgcmVtb3ZlQXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0Q29udGVudChjb250ZW50KSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICBST0xFOiAncm9sZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEhFTFBFUl9URVhUX1BFUlNJU1RFTlQ6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tcGVyc2lzdGVudCcsXG4gIEhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHOiAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpc1BlcnNpc3RlbnQgU2V0cyB0aGUgcGVyc2lzdGVuY3kgb2YgdGhlIGhlbHBlciB0ZXh0LiAqL1xuICBzZXRQZXJzaXN0ZW50KGlzUGVyc2lzdGVudCkge1xuICAgIGlmIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRhdGlvbiBUcnVlIHRvIG1ha2UgdGhlIGhlbHBlciB0ZXh0IGFjdCBhcyBhblxuICAgKiAgIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICovXG4gIHNldFZhbGlkYXRpb24oaXNWYWxpZGF0aW9uKSB7XG4gICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgdGhlIGhlbHBlciB0ZXh0IHZpc2libGUgdG8gdGhlIHNjcmVlbiByZWFkZXIuICovXG4gIHNob3dUb1NjcmVlblJlYWRlcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsaWRpdHkgb2YgdGhlIGhlbHBlciB0ZXh0IGJhc2VkIG9uIHRoZSBpbnB1dCB2YWxpZGl0eS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpbnB1dElzVmFsaWRcbiAgICovXG4gIHNldFZhbGlkaXR5KGlucHV0SXNWYWxpZCkge1xuICAgIGNvbnN0IGhlbHBlclRleHRJc1BlcnNpc3RlbnQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgY29uc3QgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgY29uc3QgdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSA9IGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgJiYgIWlucHV0SXNWYWxpZDtcblxuICAgIGlmICh2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5ST0xFLCAnYWxlcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuUk9MRSk7XG4gICAgfVxuXG4gICAgaWYgKCFoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ICYmICF2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICB0aGlzLmhpZGVfKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBoZWxwIHRleHQgZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhpZGVfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfSElEREVOLCAndHJ1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcblxuaW1wb3J0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkSGVscGVyVGV4dCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRIZWxwZXJUZXh0fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHQocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0IGZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl87XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbigvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHRoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcbiAgICAgIHJlbW92ZUF0dHI6IChhdHRyKSA9PiB0aGlzLnJvb3RfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKSxcbiAgICAgIHNldENvbnRlbnQ6IChjb250ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGV4dEZpZWxkSGVscGVyVGV4dCwgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb259O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUZXh0IEZpZWxkIEljb24uXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgdGV4dCBmaWVsZCBpY29uIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRJY29uQWRhcHRlciB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgb24gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0QXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICovXG4gIHJlbW92ZUF0dHIoYXR0cikge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGljb24gZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENUZXh0RmllbGQ6aWNvblwiIGRlbm90aW5nIGEgdXNlciBoYXMgY2xpY2tlZCB0aGUgaWNvbi5cbiAgICovXG4gIG5vdGlmeUljb25BY3Rpb24oKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRJY29uQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIElDT05fRVZFTlQ6ICdNRENUZXh0RmllbGQ6aWNvbicsXG4gIElDT05fUk9MRTogJ2J1dHRvbicsXG59O1xuXG5leHBvcnQge3N0cmluZ3N9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25BZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUZXh0RmllbGRJY29uQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldEF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0QXR0cjogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHNldENvbnRlbnQ6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBub3RpZnlJY29uQWN0aW9uOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7c3RyaW5nP30gKi9cbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gbnVsbDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0QXR0cigndGFiaW5kZXgnKTtcblxuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5zYXZlZFRhYkluZGV4Xykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigncm9sZScsIHN0cmluZ3MuSUNPTl9ST0xFKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGxhYmVsICovXG4gIHNldEFyaWFMYWJlbChsYWJlbCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhbiBpbnRlcmFjdGlvbiBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycgfHwgZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SWNvbkFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCBNRENUZXh0RmllbGRJY29uQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEljb24gZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkSWNvbn1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRJY29uKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbn1cbiAgICovXG4gIGdldCBmb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIGdldEF0dHI6IChhdHRyKSA9PiB0aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShhdHRyKSxcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgcmVtb3ZlQXR0cjogKGF0dHIpID0+IHRoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgc2V0Q29udGVudDogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgbm90aWZ5SWNvbkFjdGlvbjogKCkgPT4gdGhpcy5lbWl0KFxuICAgICAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsIHt9IC8qIGV2dERhdGEgKi8sIHRydWUgLyogc2hvdWxkQnViYmxlICovKSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGV4dEZpZWxkSWNvbiwgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb259O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtnZXRNYXRjaGVzUHJvcGVydHl9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCc7XG5cblxuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIEZvdW5kYXRpb25NYXBUeXBlfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ0xpbmVSaXBwbGUsIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvbGluZS1yaXBwbGUvaW5kZXgnO1xuaW1wb3J0IHtNRENUZXh0RmllbGRIZWxwZXJUZXh0LCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbn0gZnJvbSAnLi9oZWxwZXItdGV4dC9pbmRleCc7XG5pbXBvcnQge01EQ1RleHRGaWVsZEljb24sIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufSBmcm9tICcuL2ljb24vaW5kZXgnO1xuaW1wb3J0IHtNRENGbG9hdGluZ0xhYmVsLCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2luZGV4JztcbmltcG9ydCB7TURDTm90Y2hlZE91dGxpbmUsIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDVGV4dEZpZWxkRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAcHJpdmF0ZSB7P0VsZW1lbnR9ICovXG4gICAgdGhpcy5pbnB1dF87XG4gICAgLyoqIEB0eXBlIHs/TURDUmlwcGxlfSAqL1xuICAgIHRoaXMucmlwcGxlO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ0xpbmVSaXBwbGV9ICovXG4gICAgdGhpcy5saW5lUmlwcGxlXztcbiAgICAvKiogQHByaXZhdGUgez9NRENUZXh0RmllbGRIZWxwZXJUZXh0fSAqL1xuICAgIHRoaXMuaGVscGVyVGV4dF87XG4gICAgLyoqIEBwcml2YXRlIHs/TURDVGV4dEZpZWxkSWNvbn0gKi9cbiAgICB0aGlzLmljb25fO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ0Zsb2F0aW5nTGFiZWx9ICovXG4gICAgdGhpcy5sYWJlbF87XG4gICAgLyoqIEBwcml2YXRlIHs/TURDTm90Y2hlZE91dGxpbmV9ICovXG4gICAgdGhpcy5vdXRsaW5lXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1JpcHBsZSk9fSByaXBwbGVGYWN0b3J5IEEgZnVuY3Rpb24gd2hpY2hcbiAgICogY3JlYXRlcyBhIG5ldyBNRENSaXBwbGUuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ0xpbmVSaXBwbGUpPX0gbGluZVJpcHBsZUZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaFxuICAgKiBjcmVhdGVzIGEgbmV3IE1EQ0xpbmVSaXBwbGUuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1RleHRGaWVsZEhlbHBlclRleHQpPX0gaGVscGVyVGV4dEZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaFxuICAgKiBjcmVhdGVzIGEgbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHQuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1RleHRGaWVsZEljb24pPX0gaWNvbkZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaFxuICAgKiBjcmVhdGVzIGEgbmV3IE1EQ1RleHRGaWVsZEljb24uXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ0Zsb2F0aW5nTGFiZWwpPX0gbGFiZWxGYWN0b3J5IEEgZnVuY3Rpb24gd2hpY2hcbiAgICogY3JlYXRlcyBhIG5ldyBNRENGbG9hdGluZ0xhYmVsLlxuICAgKiBAcGFyYW0geyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENOb3RjaGVkT3V0bGluZSk9fSBvdXRsaW5lRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoXG4gICAqIGNyZWF0ZXMgYSBuZXcgTURDTm90Y2hlZE91dGxpbmUuXG4gICAqL1xuICBpbml0aWFsaXplKFxuICAgIHJpcHBsZUZhY3RvcnkgPSAoZWwsIGZvdW5kYXRpb24pID0+IG5ldyBNRENSaXBwbGUoZWwsIGZvdW5kYXRpb24pLFxuICAgIGxpbmVSaXBwbGVGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDTGluZVJpcHBsZShlbCksXG4gICAgaGVscGVyVGV4dEZhY3RvcnkgPSAoZWwpID0+IG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0KGVsKSxcbiAgICBpY29uRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ1RleHRGaWVsZEljb24oZWwpLFxuICAgIGxhYmVsRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwoZWwpLFxuICAgIG91dGxpbmVGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDTm90Y2hlZE91dGxpbmUoZWwpKSB7XG4gICAgdGhpcy5pbnB1dF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5JTlBVVF9TRUxFQ1RPUik7XG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTEFCRUxfU0VMRUNUT1IpO1xuICAgIGlmIChsYWJlbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubGFiZWxfID0gbGFiZWxGYWN0b3J5KGxhYmVsRWxlbWVudCk7XG4gICAgfVxuICAgIGNvbnN0IGxpbmVSaXBwbGVFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTElORV9SSVBQTEVfU0VMRUNUT1IpO1xuICAgIGlmIChsaW5lUmlwcGxlRWxlbWVudCkge1xuICAgICAgdGhpcy5saW5lUmlwcGxlXyA9IGxpbmVSaXBwbGVGYWN0b3J5KGxpbmVSaXBwbGVFbGVtZW50KTtcbiAgICB9XG4gICAgY29uc3Qgb3V0bGluZUVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5PVVRMSU5FX1NFTEVDVE9SKTtcbiAgICBpZiAob3V0bGluZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMub3V0bGluZV8gPSBvdXRsaW5lRmFjdG9yeShvdXRsaW5lRWxlbWVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0Xy5oYXNBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0NPTlRST0xTKSkge1xuICAgICAgY29uc3QgaGVscGVyVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlucHV0Xy5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0NPTlRST0xTKSk7XG4gICAgICBpZiAoaGVscGVyVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0XyA9IGhlbHBlclRleHRGYWN0b3J5KGhlbHBlclRleHRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWNvbkVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5JQ09OX1NFTEVDVE9SKTtcbiAgICBpZiAoaWNvbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaWNvbl8gPSBpY29uRmFjdG9yeShpY29uRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5yaXBwbGUgPSBudWxsO1xuICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkJPWCkpIHtcbiAgICAgIGNvbnN0IE1BVENIRVMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgIGNvbnN0IGFkYXB0ZXIgPVxuICAgICAgICBPYmplY3QuYXNzaWduKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKC8qKiBAdHlwZSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSAqLyAodGhpcykpLCB7XG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB0aGlzLmlucHV0X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgICAgfSk7XG4gICAgICBjb25zdCBmb3VuZGF0aW9uID0gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICB0aGlzLnJpcHBsZSA9IHJpcHBsZUZhY3RvcnkodGhpcy5yb290XywgZm91bmRhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGUpIHtcbiAgICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgIHRoaXMubGluZVJpcHBsZV8uZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmljb25fKSB7XG4gICAgICB0aGlzLmljb25fLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxfKSB7XG4gICAgICB0aGlzLmxhYmVsXy5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm91dGxpbmVfKSB7XG4gICAgICB0aGlzLm91dGxpbmVfLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpbGlhemVzIHRoZSBUZXh0IEZpZWxkJ3MgaW50ZXJuYWwgc3RhdGUgYmFzZWQgb24gdGhlIGVudmlyb25tZW50J3NcbiAgICogc3RhdGUuXG4gICAqL1xuICBpbml0aWFsU3luY1dpdGhEb20oKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuaW5wdXRfLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbnB1dC5cbiAgICovXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIFRleHQgRmllbGQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNEaXNhYmxlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgU2V0cyB0aGUgVGV4dCBGaWVsZCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdmFsaWQgVHJ1ZSBpZiB0aGUgVGV4dCBGaWVsZCBpcyB2YWxpZC5cbiAgICovXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc1ZhbGlkKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxpZCBTZXRzIHRoZSBUZXh0IEZpZWxkIHZhbGlkIG9yIGludmFsaWQuXG4gICAqL1xuICBzZXQgdmFsaWQodmFsaWQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZhbGlkKHZhbGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0Xy5yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVpcmVkIFNldHMgdGhlIFRleHQgRmllbGQgdG8gcmVxdWlyZWQuXG4gICAqL1xuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQpIHtcbiAgICB0aGlzLmlucHV0Xy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGlucHV0IGVsZW1lbnQncyB2YWxpZGF0aW9uIHBhdHRlcm4uXG4gICAqL1xuICBnZXQgcGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF8ucGF0dGVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgdmFsaWRhdGlvbiBwYXR0ZXJuLlxuICAgKi9cbiAgc2V0IHBhdHRlcm4ocGF0dGVybikge1xuICAgIHRoaXMuaW5wdXRfLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGlucHV0IGVsZW1lbnQncyBtaW5MZW5ndGguXG4gICAqL1xuICBnZXQgbWluTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0Xy5taW5MZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbkxlbmd0aCBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgbWluTGVuZ3RoLlxuICAgKi9cbiAgc2V0IG1pbkxlbmd0aChtaW5MZW5ndGgpIHtcbiAgICB0aGlzLmlucHV0Xy5taW5MZW5ndGggPSBtaW5MZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5wdXQgZWxlbWVudCdzIG1heExlbmd0aC5cbiAgICovXG4gIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1heExlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGVuZ3RoIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtYXhMZW5ndGguXG4gICAqL1xuICBzZXQgbWF4TGVuZ3RoKG1heExlbmd0aCkge1xuICAgIC8vIENocm9tZSB0aHJvd3MgZXhjZXB0aW9uIGlmIG1heExlbmd0aCBpcyBzZXQgPCAwXG4gICAgaWYgKG1heExlbmd0aCA8IDApIHtcbiAgICAgIHRoaXMuaW5wdXRfLnJlbW92ZUF0dHJpYnV0ZSgnbWF4TGVuZ3RoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRfLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaW5wdXQgZWxlbWVudCdzIG1pbi5cbiAgICovXG4gIGdldCBtaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1pbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWluIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtaW4uXG4gICAqL1xuICBzZXQgbWluKG1pbikge1xuICAgIHRoaXMuaW5wdXRfLm1pbiA9IG1pbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBpbnB1dCBlbGVtZW50J3MgbWF4LlxuICAgKi9cbiAgZ2V0IG1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF8ubWF4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXggU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIG1heC5cbiAgICovXG4gIHNldCBtYXgobWF4KSB7XG4gICAgdGhpcy5pbnB1dF8ubWF4ID0gbWF4O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGlucHV0IGVsZW1lbnQncyBzdGVwLlxuICAgKi9cbiAgZ2V0IHN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRfLnN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ZXAgU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIHN0ZXAuXG4gICAqL1xuICBzZXQgc3RlcChzdGVwKSB7XG4gICAgdGhpcy5pbnB1dF8uc3RlcCA9IHN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0IGhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldEhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0IGljb25BcmlhTGFiZWwobGFiZWwpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldEljb25BcmlhTGFiZWwobGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldCBpY29uQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRJY29uQ29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbXB1dGVzIHRoZSBvdXRsaW5lIFNWRyBwYXRoIGZvciB0aGUgb3V0bGluZSBlbGVtZW50LlxuICAgKi9cbiAgbGF5b3V0KCkge1xuICAgIGNvbnN0IG9wZW5Ob3RjaCA9IHRoaXMuZm91bmRhdGlvbl8uc2hvdWxkRmxvYXQ7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5ub3RjaE91dGxpbmUob3Blbk5vdGNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkRm91bmRhdGlvbihcbiAgICAgIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBnZXRBdHRyaWJ1dGVzTGlzdCA9IChtdXRhdGlvbnNMaXN0KSA9PiBtdXRhdGlvbnNMaXN0Lm1hcCgobXV0YXRpb24pID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IGhhbmRsZXIoZ2V0QXR0cmlidXRlc0xpc3QobXV0YXRpb25zTGlzdCkpKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSU5QVVRfU0VMRUNUT1IpO1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHthdHRyaWJ1dGVzOiB0cnVlfTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgICAgICB9LFxuICAgICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLFxuICAgICAgICBpc0ZvY3VzZWQ6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSU5QVVRfU0VMRUNUT1IpO1xuICAgICAgICB9LFxuICAgICAgICBpc1J0bDogKCkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yb290XykuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgfSxcbiAgICAgIHRoaXMuZ2V0SW5wdXRBZGFwdGVyTWV0aG9kc18oKSxcbiAgICAgIHRoaXMuZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18oKSxcbiAgICAgIHRoaXMuZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzXygpLFxuICAgICAgdGhpcy5nZXRPdXRsaW5lQWRhcHRlck1ldGhvZHNfKCkpKSxcbiAgICAgIHRoaXMuZ2V0Rm91bmRhdGlvbk1hcF8oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IXtcbiAgICogICBzaGFrZUxhYmVsOiBmdW5jdGlvbihib29sZWFuKTogdW5kZWZpbmVkLFxuICAgKiAgIGZsb2F0TGFiZWw6IGZ1bmN0aW9uKGJvb2xlYW4pOiB1bmRlZmluZWQsXG4gICAqICAgaGFzTGFiZWw6IGZ1bmN0aW9uKCk6IGJvb2xlYW4sXG4gICAqICAgZ2V0TGFiZWxXaWR0aDogZnVuY3Rpb24oKTogbnVtYmVyLFxuICAgKiB9fVxuICAgKi9cbiAgZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYWtlTGFiZWw6IChzaG91bGRTaGFrZSkgPT4gdGhpcy5sYWJlbF8uc2hha2Uoc2hvdWxkU2hha2UpLFxuICAgICAgZmxvYXRMYWJlbDogKHNob3VsZEZsb2F0KSA9PiB0aGlzLmxhYmVsXy5mbG9hdChzaG91bGRGbG9hdCksXG4gICAgICBoYXNMYWJlbDogKCkgPT4gISF0aGlzLmxhYmVsXyxcbiAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHRoaXMubGFiZWxfLmdldFdpZHRoKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIGFjdGl2YXRlTGluZVJpcHBsZTogZnVuY3Rpb24oKTogdW5kZWZpbmVkLFxuICAgKiAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiBmdW5jdGlvbigpOiB1bmRlZmluZWQsXG4gICAqICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24obnVtYmVyKTogdW5kZWZpbmVkLFxuICAgKiB9fVxuICAgKi9cbiAgZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgdGhpcy5saW5lUmlwcGxlXy5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUxpbmVSaXBwbGU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVfLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW46IChub3JtYWxpemVkWCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgIHRoaXMubGluZVJpcHBsZV8uc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyF7XG4gICAqICAgbm90Y2hPdXRsaW5lOiBmdW5jdGlvbihudW1iZXIsIGJvb2xlYW4pOiB1bmRlZmluZWQsXG4gICAqICAgaGFzT3V0bGluZTogZnVuY3Rpb24oKTogYm9vbGVhbixcbiAgICogfX1cbiAgICovXG4gIGdldE91dGxpbmVBZGFwdGVyTWV0aG9kc18oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGNoT3V0bGluZTogKGxhYmVsV2lkdGgsIGlzUnRsKSA9PiB0aGlzLm91dGxpbmVfLm5vdGNoKGxhYmVsV2lkdGgsIGlzUnRsKSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4gdGhpcy5vdXRsaW5lXy5jbG9zZU5vdGNoKCksXG4gICAgICBoYXNPdXRsaW5lOiAoKSA9PiAhIXRoaXMub3V0bGluZV8sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKHN0cmluZywgZnVuY3Rpb24oKSk6IHVuZGVmaW5lZCxcbiAgICogICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKHN0cmluZywgZnVuY3Rpb24oKSk6IHVuZGVmaW5lZCxcbiAgICogICBnZXROYXRpdmVJbnB1dDogZnVuY3Rpb24oKTogP0VsZW1lbnQsXG4gICAqIH19XG4gICAqL1xuICBnZXRJbnB1dEFkYXB0ZXJNZXRob2RzXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZ2V0TmF0aXZlSW5wdXQ6ICgpID0+IHRoaXMuaW5wdXRfLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hcCBvZiBhbGwgc3ViY29tcG9uZW50cyB0byBzdWJmb3VuZGF0aW9ucy5cbiAgICogQHJldHVybiB7IUZvdW5kYXRpb25NYXBUeXBlfVxuICAgKi9cbiAgZ2V0Rm91bmRhdGlvbk1hcF8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlbHBlclRleHQ6IHRoaXMuaGVscGVyVGV4dF8gPyB0aGlzLmhlbHBlclRleHRfLmZvdW5kYXRpb24gOiB1bmRlZmluZWQsXG4gICAgICBpY29uOiB0aGlzLmljb25fID8gdGhpcy5pY29uXy5mb3VuZGF0aW9uIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHtNRENUZXh0RmllbGQsIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sXG4gIE1EQ1RleHRGaWVsZEhlbHBlclRleHQsIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLFxuICBNRENUZXh0RmllbGRJY29uLCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbn07XG4iXX0=
