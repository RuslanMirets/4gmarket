// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
/******/ (function () { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function () {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function (exports, definition) {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    }();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function () {
/******/ 		__webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
        /******/
    }();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function () {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function (exports) {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    }();
    /******/
    /************************************************************************/

    // UNUSED EXPORTS: Splide

    // NAMESPACE OBJECT: ./src/js/constants/states.js
    var states_namespaceObject = {};
    __webpack_require__.r(states_namespaceObject);
    __webpack_require__.d(states_namespaceObject, {
        "CREATED": function () { return CREATED; },
        "DESTROYED": function () { return DESTROYED; },
        "IDLE": function () { return IDLE; },
        "MOUNTED": function () { return MOUNTED; },
        "MOVING": function () { return MOVING; }
    });

    ;// CONCATENATED MODULE: ./src/js/core/event.js
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ var core_event = (function () {
        /**
         * Store all event data.
         *
         * @type {Array}
         */
        var data = [];
        var Event = {
            /**
             * Subscribe the given event(s).
             *
             * @param {string}   events  - An event name. Use space to separate multiple events.
             *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
             * @param {function} handler - A callback function.
             * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
             * @param {Object}   options - Optional. Options for addEventListener.
             */
            on: function on(events, handler, elm, options) {
                if (elm === void 0) {
                    elm = null;
                }

                if (options === void 0) {
                    options = {};
                }

                events.split(' ').forEach(function (event) {
                    if (elm) {
                        elm.addEventListener(event, handler, options);
                    }

                    data.push({
                        event: event,
                        handler: handler,
                        elm: elm,
                        options: options
                    });
                });
            },

            /**
             * Unsubscribe the given event(s).
             *
             * @param {string}  events - A event name or names split by space.
             * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
             */
            off: function off(events, elm) {
                if (elm === void 0) {
                    elm = null;
                }

                events.split(' ').forEach(function (event) {
                    data = data.filter(function (item) {
                        if (item && item.event === event && item.elm === elm) {
                            unsubscribe(item);
                            return false;
                        }

                        return true;
                    });
                });
            },

            /**
             * Emit an event.
             * This method is only for custom events.
             *
             * @param {string}  event - An event name.
             * @param {*}       args  - Any number of arguments passed to handlers.
             */
            emit: function emit(event) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                data.forEach(function (item) {
                    if (!item.elm && item.event.split('.')[0] === event) {
                        item.handler.apply(item, args);
                    }
                });
            },

            /**
             * Clear event data.
             */
            destroy: function destroy() {
                data.forEach(unsubscribe);
                data = [];
            }
        };
        /**
         * Remove the registered event listener.
         *
         * @param {Object} item - An object containing event data.
         */

        function unsubscribe(item) {
            if (item.elm) {
                item.elm.removeEventListener(item.event, item.handler, item.options);
            }
        }

        return Event;
    });
    ;// CONCATENATED MODULE: ./src/js/core/state.js
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ var state = (function (initialState) {
        /**
         * Store the current state.
         *
         * @type {string|number}
         */
        var curr = initialState;
        return {
            /**
             * Change state.
             *
             * @param {string|number} state - A new state.
             */
            set: function set(state) {
                curr = state;
            },

            /**
             * Verify if the current state is given one or not.
             *
             * @param {string|number} state - A state name to be verified.
             *
             * @return {boolean} - True if the current state is the given one.
             */
            is: function is(state) {
                return state === curr;
            }
        };
    });
    ;// CONCATENATED MODULE: ./src/js/utils/object.js
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

    /**
     * Some utility functions related with Object, supporting IE.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */
    var keys = Object.keys;
    /**
     * Iterate an object like Array.forEach.
     * IE doesn't support forEach of HTMLCollection.
     *
     * @param {Object}    obj       - An object.
     * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
     */

    function each(obj, callback) {
        keys(obj).some(function (key, index) {
            return callback(obj[key], key, index);
        });
    }
    /**
     * Return values of the given object as an array.
     * IE doesn't support Object.values.
     *
     * @param {Object} obj - An object.
     *
     * @return {Array} - An array containing all values of the given object.
     */

    function values(obj) {
        return keys(obj).map(function (key) {
            return obj[key];
        });
    }
    /**
     * Check if the given subject is object or not.
     *
     * @param {*} subject - A subject to be verified.
     *
     * @return {boolean} - True if object, false otherwise.
     */

    function isObject(subject) {
        return typeof subject === 'object';
    }
    /**
     * Merge two objects deeply.
     *
     * @param {Object} to   - An object where "from" is merged.
     * @param {Object} from - An object merged to "to".
     *
     * @return {Object} - A merged object.
     */

    function merge(_ref, from) {
        var to = _extends({}, _ref);

        each(from, function (value, key) {
            if (isObject(value)) {
                if (!isObject(to[key])) {
                    to[key] = {};
                }

                to[key] = merge(to[key], value);
            } else {
                to[key] = value;
            }
        });
        return to;
    }
    /**
     * Assign all properties "from" to "to" object.
     *
     * @param {Object} to   - An object where properties are assigned.
     * @param {Object} from - An object whose properties are assigned to "to".
     *
     * @return {Object} - An assigned object.
     */

    function object_assign(to, from) {
        keys(from).forEach(function (key) {
            if (!to[key]) {
                Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
            }
        });
        return to;
    }
    ;// CONCATENATED MODULE: ./src/js/utils/utils.js
    /**
     * A package of some miscellaneous utility functions.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Convert the given value to array.
     *
     * @param {*} value - Any value.
     *
     * @return {*[]} - Array containing the given value.
     */

    function toArray(value) {
        return Array.isArray(value) ? value : [value];
    }
    /**
     * Check if the given value is between min and max.
     * Min will be returned when the value is less than min or max will do when greater than max.
     *
     * @param {number} value - A number to be checked.
     * @param {number} m1    - Minimum or maximum number.
     * @param {number} m2    - Maximum or minimum number.
     *
     * @return {number} - A value itself, min or max.
     */

    function between(value, m1, m2) {
        return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
    }
    /**
     * The sprintf method with minimum functionality.
     *
     * @param {string}       format       - The string format.
     * @param {string|Array} replacements - Replacements accepting multiple arguments.
     *
     * @returns {string} - Converted string.
     */

    function sprintf(format, replacements) {
        var i = 0;
        return format.replace(/%s/g, function () {
            return toArray(replacements)[i++];
        });
    }
    /**
     * Append px unit to the given subject if necessary.
     *
     * @param {number|string} value - A value that may not include an unit.
     *
     * @return {string} - If the value is string, return itself.
     *                    If number, do value + "px". An empty string, otherwise.
     */

    function unit(value) {
        var type = typeof value;

        if (type === 'number' && value > 0) {
            return parseFloat(value) + 'px';
        }

        return type === 'string' ? value : '';
    }
    /**
     * Pad start with 0.
     *
     * @param {number} number - A number to be filled with 0.
     *
     * @return {string|number} - Padded number.
     */

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }
    /**
     * Convert the given value to pixel.
     *
     * @param {Element}       root  - Root element where a dummy div is appended.
     * @param {string|number} value - CSS value to be converted, such as 10rem.
     *
     * @return {number} - Pixel.
     */

    function toPixel(root, value) {
        if (typeof value === 'string') {
            var div = create('div', {});
            applyStyle(div, {
                position: 'absolute',
                width: value
            });
            append(root, div);
            value = div.clientWidth;
            dom_remove(div);
        }

        return +value || 0;
    }
    ;// CONCATENATED MODULE: ./src/js/utils/dom.js
    /**
     * Some utility functions related with DOM.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * Find the first element matching the given selector.
     * Be aware that all selectors after a space are ignored.
     *
     * @param {Element|Node}  elm       - An ancestor element.
     * @param {string}        selector  - DOMString.
     *
     * @return {Element|null} - A found element or null.
     */

    function find(elm, selector) {
        return elm ? elm.querySelector(selector.split(' ')[0]) : null;
    }
    /**
     * Find a first child having the given tag or class name.
     *
     * @param {Element} parent         - A parent element.
     * @param {string}  tagOrClassName - A tag or class name.
     *
     * @return {Element|undefined} - A found element on success or undefined on failure.
     */

    function child(parent, tagOrClassName) {
        return children(parent, tagOrClassName)[0];
    }
    /**
     * Return chile elements that matches the provided tag or class name.
     *
     * @param {Element} parent         - A parent element.
     * @param {string}  tagOrClassName - A tag or class name.
     *
     * @return {Element[]} - Found elements.
     */

    function children(parent, tagOrClassName) {
        if (parent) {
            return values(parent.children).filter(function (child) {
                return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
            });
        }

        return [];
    }
    /**
     * Create an element with some optional attributes.
     *
     * @param {string} tag   - A tag name.
     * @param {Object} attrs - An object any attribute pairs of name and value.
     *
     * @return {Element} - A created element.
     */

    function create(tag, attrs) {
        var elm = document.createElement(tag);
        each(attrs, function (value, key) {
            return setAttribute(elm, key, value);
        });
        return elm;
    }
    /**
     * Convert HTML string to DOM node.
     *
     * @param {string} html - HTML string.
     *
     * @return {Node} - A created node.
     */

    function domify(html) {
        var div = create('div', {});
        div.innerHTML = html;
        return div.firstChild;
    }
    /**
     * Remove a given element from a DOM tree.
     *
     * @param {Element|Element[]} elms - Element(s) to be removed.
     */

    function dom_remove(elms) {
        toArray(elms).forEach(function (elm) {
            if (elm) {
                var parent = elm.parentElement;
                parent && parent.removeChild(elm);
            }
        });
    }
    /**
     * Append a child to a given element.
     *
     * @param {Element} parent - A parent element.
     * @param {Element} child  - An element to be appended.
     */

    function append(parent, child) {
        if (parent) {
            parent.appendChild(child);
        }
    }
    /**
     * Insert an element before the reference element.
     *
     * @param {Element|Node} ref - A reference element.
     * @param {Element}      elm - An element to be inserted.
     */

    function before(elm, ref) {
        if (elm && ref) {
            var parent = ref.parentElement;
            parent && parent.insertBefore(elm, ref);
        }
    }
    /**
     * Apply styles to the given element.
     *
     * @param {Element} elm     - An element where styles are applied.
     * @param {Object}  styles  - Object containing styles.
     */

    function applyStyle(elm, styles) {
        if (elm) {
            each(styles, function (value, prop) {
                if (value !== null) {
                    elm.style[prop] = value;
                }
            });
        }
    }
    /**
     * Add or remove classes to/from the element.
     * This function is for internal usage.
     *
     * @param {Element}         elm     - An element where classes are added.
     * @param {string|string[]} classes - Class names being added.
     * @param {boolean}         remove  - Whether to remove or add classes.
     */

    function addOrRemoveClasses(elm, classes, remove) {
        if (elm) {
            toArray(classes).forEach(function (name) {
                if (name) {
                    elm.classList[remove ? 'remove' : 'add'](name);
                }
            });
        }
    }
    /**
     * Add classes to the element.
     *
     * @param {Element}          elm     - An element where classes are added.
     * @param {string|string[]}  classes - Class names being added.
     */


    function addClass(elm, classes) {
        addOrRemoveClasses(elm, classes, false);
    }
    /**
     * Remove a class from the element.
     *
     * @param {Element}         elm     - An element where classes are removed.
     * @param {string|string[]} classes - A class name being removed.
     */

    function removeClass(elm, classes) {
        addOrRemoveClasses(elm, classes, true);
    }
    /**
     * Verify if the provided element has the class or not.
     *
     * @param {Element} elm       - An element.
     * @param {string}  className - A class name.
     *
     * @return {boolean} - True if the element has the class or false if not.
     */

    function hasClass(elm, className) {
        return !!elm && elm.classList.contains(className);
    }
    /**
     * Set attribute to the given element.
     *
     * @param {Element}                 elm   - An element where an attribute is assigned.
     * @param {string}                  name  - Attribute name.
     * @param {string|number|boolean}   value - Attribute value.
     */

    function setAttribute(elm, name, value) {
        if (elm) {
            elm.setAttribute(name, value);
        }
    }
    /**
     * Get attribute from the given element.
     *
     * @param {Element} elm  - An element where an attribute is assigned.
     * @param {string}  name - Attribute name.
     *
     * @return {string} - The value of the given attribute if available. An empty string if not.
     */

    function getAttribute(elm, name) {
        return elm ? elm.getAttribute(name) : '';
    }
    /**
     * Remove attribute from the given element.
     *
     * @param {Element|Element[]} elms  - An element where an attribute is removed.
     * @param {string|string[]}      names - Attribute name.
     */

    function removeAttribute(elms, names) {
        toArray(names).forEach(function (name) {
            toArray(elms).forEach(function (elm) {
                return elm && elm.removeAttribute(name);
            });
        });
    }
    /**
     * Return the Rect object of the provided object.
     *
     * @param {Element} elm - An element.
     *
     * @return {ClientRect|DOMRect} - A rect object.
     */

    function getRect(elm) {
        return elm.getBoundingClientRect();
    }
    /**
     * Trigger the given callback after all images contained by the element are loaded.
     *
     * @param {Element}  elm      - Element that may contain images.
     * @param {Function} callback - Callback function fired right after all images are loaded.
     */

    function loaded(elm, callback) {
        var images = elm.querySelectorAll('img');
        var length = images.length;

        if (length) {
            var count = 0;
            each(images, function (img) {
                img.onload = img.onerror = function () {
                    if (++count === length) {
                        callback();
                    }
                };
            });
        } else {
            // Trigger the callback immediately if there is no image.
            callback();
        }
    }
    ;// CONCATENATED MODULE: ./src/js/constants/types.js
    /**
     * Export slider types.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Normal slider.
     *
     * @type {string}
     */
    var SLIDE = 'slide';
    /**
     * Loop after the last slide and before the first one.
     *
     * @type {string}
     */

    var LOOP = 'loop';
    /**
     * The track doesn't move.
     *
     * @type {string}
     */

    var FADE = 'fade';
    ;// CONCATENATED MODULE: ./src/js/transitions/slide/index.js
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var slide = (function (Splide, Components) {
        /**
         * Hold the list element.
         *
         * @type {Element}
         */
        var list;
        /**
         * Hold the onEnd callback function.
         *
         * @type {function}
         */

        var endCallback;
        return {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                list = Components.Elements.list;
                Splide.on('transitionend', function (e) {
                    if (e.target === list && endCallback) {
                        endCallback();
                    }
                }, list);
            },

            /**
             * Start transition.
             *
             * @param {number}   destIndex - Destination slide index that might be clone's.
             * @param {number}   newIndex  - New index.
             * @param {number}   prevIndex - Previous index.
             * @param {Object}   coord     - Destination coordinates.
             * @param {function} done      - Callback function must be invoked when transition is completed.
             */
            start: function start(destIndex, newIndex, prevIndex, coord, done) {
                var options = Splide.options;
                var edgeIndex = Components.Controller.edgeIndex;
                var speed = options.speed;
                endCallback = done;

                if (Splide.is(SLIDE)) {
                    if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
                        speed = options.rewindSpeed || speed;
                    }
                }

                applyStyle(list, {
                    transition: "transform " + speed + "ms " + options.easing,
                    transform: "translate(" + coord.x + "px," + coord.y + "px)"
                });
            }
        };
    });
    ;// CONCATENATED MODULE: ./src/js/transitions/fade/index.js
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var fade = (function (Splide, Components) {
        var Fade = {
            /**
             * Called when the component is mounted.
             * Apply transition style to the first slide.
             */
            mount: function mount() {
                apply(Splide.index);
            },

            /**
             * Start transition.
             *
             * @param {number}    destIndex - Destination slide index that might be clone's.
             * @param {number}    newIndex  - New index.
             * @param {number}    prevIndex - Previous index.
             * @param {Object}    coord     - Destination coordinates.
             * @param {function}  done      - Callback function must be invoked when transition is completed.
             */
            start: function start(destIndex, newIndex, prevIndex, coord, done) {
                var track = Components.Elements.track;
                applyStyle(track, {
                    height: unit(track.clientHeight)
                });
                apply(newIndex);
                setTimeout(function () {
                    done();
                    applyStyle(track, {
                        height: ''
                    });
                });
            }
        };
        /**
         * Apply transition style to the slide specified by the given index.
         *
         * @param {number} index - A slide index.
         */

        function apply(index) {
            var options = Splide.options;
            applyStyle(Components.Elements.slides[index], {
                transition: "opacity " + options.speed + "ms " + options.easing
            });
        }

        return Fade;
    });
    ;// CONCATENATED MODULE: ./src/js/transitions/index.js
    /**
     * Export transition components.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    ;// CONCATENATED MODULE: ./src/js/core/composer.js
    /**
     * Provide a function for composing components.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */



    /**
     * Compose components.
     *
     * @param {Splide}   Splide     - Splide instance.
     * @param {Object}   Components - Additional components.
     * @param {function} Transition - Change component for transition.
     *
     * @return {Object} - An object containing all components.
     */

    function compose(Splide, Components, Transition) {
        var components = {};
        each(Components, function (Component, name) {
            components[name] = Component(Splide, components, name.toLowerCase());
        });

        if (!Transition) {
            Transition = Splide.is(FADE) ? fade : slide;
        }

        components.Transition = Transition(Splide, components);
        return components;
    }
    ;// CONCATENATED MODULE: ./src/js/utils/error.js
    /**
     * Utility functions for outputting logs.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Prefix of an error massage.
     *
     * @type {string}
     */
    var MESSAGE_PREFIX = '[SPLIDE]';
    /**
     * Display an error message on the browser console.
     *
     * @param {string} message - An error message.
     */

    function error(message) {
        console.error(MESSAGE_PREFIX + " " + message);
    }
    /**
     * Check existence of the given object and throw an error if it doesn't.
     *
     * @throws {Error}
     *
     * @param {*}      subject - A subject to be confirmed.
     * @param {string} message - An error message.
     */

    function exist(subject, message) {
        if (!subject) {
            throw new Error(message);
        }
    }
    ;// CONCATENATED MODULE: ./src/js/constants/classes.js
    /**
     * Export class names.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * A root class name.
     *
     * @type {string}
     */
    var ROOT = 'splide';
    /**
     * The definition table of all classes for elements.
     * They might be modified by options.
     *
     * @type {Object}
     */

    var ELEMENT_CLASSES = {
        root: ROOT,
        slider: ROOT + "__slider",
        track: ROOT + "__track",
        list: ROOT + "__list",
        slide: ROOT + "__slide",
        container: ROOT + "__slide__container",
        arrows: ROOT + "__arrows",
        arrow: ROOT + "__arrow",
        prev: ROOT + "__arrow--prev",
        next: ROOT + "__arrow--next",
        pagination: ROOT + "__pagination",
        page: ROOT + "__pagination__page",
        clone: ROOT + "__slide--clone",
        progress: ROOT + "__progress",
        bar: ROOT + "__progress__bar",
        autoplay: ROOT + "__autoplay",
        play: ROOT + "__play",
        pause: ROOT + "__pause",
        spinner: ROOT + "__spinner",
        sr: ROOT + "__sr"
    };
    /**
     * Definitions of status classes.
     *
     * @type {Object}
     */

    var STATUS_CLASSES = {
        active: 'is-active',
        visible: 'is-visible',
        loading: 'is-loading'
    };
    ;// CONCATENATED MODULE: ./src/js/constants/i18n.js
    /**
     * Export i18n texts as object.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Texts for i18n.
     *
     * @type {Object}
     */
    var I18N = {
        prev: 'Previous slide',
        next: 'Next slide',
        first: 'Go to first slide',
        last: 'Go to last slide',
        slideX: 'Go to slide %s',
        pageX: 'Go to page %s',
        play: 'Start autoplay',
        pause: 'Pause autoplay'
    };
    ;// CONCATENATED MODULE: ./src/js/constants/defaults.js
    /**
     * Export default options.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    var DEFAULTS = {
        /**
         * Determine a slider type.
         * - 'slide': Regular slider.
         * - 'loop' : Carousel slider.
         * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
         *
         * @type {string}
         */
        type: 'slide',

        /**
         * Whether to rewind a slider before the first slide or after the last one.
         * In "loop" mode, this option is ignored.
         *
         * @type {boolean}
         */
        rewind: false,

        /**
         * Transition speed in milliseconds.
         *
         * @type {number}
         */
        speed: 400,

        /**
         * Transition speed on rewind in milliseconds.
         *
         * @type {number}
         */
        rewindSpeed: 0,

        /**
         * Whether to prevent any actions while a slider is transitioning.
         * If false, navigation, drag and swipe work while the slider is running.
         * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
         *
         * @type {boolean}
         */
        waitForTransition: true,

        /**
         * Define slider max width.
         *
         * @type {number}
         */
        width: 0,

        /**
         * Define slider height.
         *
         * @type {number}
         */
        height: 0,

        /**
         * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
         * perPage number will be ignored when this option is falsy.
         *
         * @type {number|string}
         */
        fixedWidth: 0,

        /**
         * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
         * heightRatio option will be ignored when this option is falsy.
         *
         * @type {number|string}
         */
        fixedHeight: 0,

        /**
         * Determine height of slides by ratio to a slider width.
         * This will be ignored when the fixedHeight is provided.
         *
         * @type {number}
         */
        heightRatio: 0,

        /**
         * If true, slide width will be determined by the element width itself.
         * - perPage/perMove should be 1.
         *
         * @type {boolean}
         */
        autoWidth: false,

        /**
         * If true, slide height will be determined by the element width itself.
         * - perPage/perMove should be 1.
         *
         * @type {boolean}
         */
        autoHeight: false,

        /**
         * Determine how many slides should be displayed per page.
         *
         * @type {number}
         */
        perPage: 1,

        /**
         * Determine how many slides should be moved when a slider goes to next or perv.
         *
         * @type {number}
         */
        perMove: 0,

        /**
         * Determine manually how many clones should be generated on the left and right side.
         * The total number of clones will be twice of this number.
         *
         * @type {number}
         */
        clones: 0,

        /**
         * Start index.
         *
         * @type {number}
         */
        start: 0,

        /**
         * Determine which slide should be focused if there are multiple slides in a page.
         * A string "center" is acceptable for centering slides.
         *
         * @type {boolean|number|string}
         */
        focus: false,

        /**
         * Gap between slides. CSS format is allowed such as 1em.
         *
         * @type {number|string}
         */
        gap: 0,

        /**
         * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
         * Give a single value to set a same size for both sides or
         * do an object for different sizes.
         * Also, CSS format is allowed such as 1em.
         *
         * @example
         * - 10: Number
         * - '1em': CSS format.
         * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
         * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
         *
         * @type {number|string|Object}
         */
        padding: 0,

        /**
         * Whether to append arrows.
         *
         * @type {boolean}
         */
        arrows: true,

        /**
         * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
         *
         * @type {string}
         */
        arrowPath: '',

        /**
         * Whether to append pagination(indicator dots) or not.
         *
         * @type {boolean}
         */
        pagination: true,

        /**
         * Activate autoplay.
         *
         * @type {boolean}
         */
        autoplay: false,

        /**
         * Autoplay interval in milliseconds.
         *
         * @type {number}
         */
        interval: 5000,

        /**
         * Whether to stop autoplay when a slider is hovered.
         *
         * @type {boolean}
         */
        pauseOnHover: true,

        /**
         * Whether to stop autoplay when a slider elements are focused.
         * True is recommended for accessibility.
         *
         * @type {boolean}
         */
        pauseOnFocus: true,

        /**
         * Whether to reset progress of the autoplay timer when resumed.
         *
         * @type {boolean}
         */
        resetProgress: true,

        /**
         * Loading images lazily.
         * Image src must be provided by a data-splide-lazy attribute.
         *
         * - false: Do nothing.
         * - 'nearby': Only images around an active slide will be loaded.
         * - 'sequential': All images will be sequentially loaded.
         *
         * @type {boolean|string}
         */
        lazyLoad: false,

        /**
         * This option works only when a lazyLoad option is "nearby".
         * Determine how many pages(not slides) around an active slide should be loaded beforehand.
         *
         * @type {number}
         */
        preloadPages: 1,

        /**
         * Easing for CSS transition. For example, linear, ease or cubic-bezier().
         *
         * @type {string}
         */
        easing: 'cubic-bezier(.42,.65,.27,.99)',

        /**
         * Whether to enable keyboard shortcuts
         * - true or 'global': Listen to keydown event of the document.
         * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
         * - false: Disable keyboard shortcuts.
         *
         * @type {boolean|string}
         */
        keyboard: 'global',

        /**
         * Whether to allow mouse drag and touch swipe.
         *
         * @type {boolean}
         */
        drag: true,

        /**
         * The angle threshold for drag.
         * The slider starts moving only when the drag angle is less than this threshold.
         *
         * @type {number}
         */
        dragAngleThreshold: 30,

        /**
         * Distance threshold for determining if the action is "flick" or "swipe".
         * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
         *
         * @type {number}
         */
        swipeDistanceThreshold: 150,

        /**
         * Velocity threshold for determining if the action is "flick" or "swipe".
         * Around 0.5 is recommended.
         *
         * @type {number}
         */
        flickVelocityThreshold: .6,

        /**
         * Determine power of flick. The larger number this is, the farther a slider runs by flick.
         * Around 500 is recommended.
         *
         * @type {number}
         */
        flickPower: 600,

        /**
         * Limit a number of pages to move by flick.
         *
         * @type {number}
         */
        flickMaxPages: 1,

        /**
         * Slider direction.
         * - 'ltr': Left to right.
         * - 'rtl': Right to left.
         * - 'ttb': Top to bottom.
         *
         * @type {string}
         */
        direction: 'ltr',

        /**
         * Set img src to background-image of its parent element.
         * Images with various sizes can be displayed as same dimension without cropping work.
         * fixedHeight or heightRatio is required.
         *
         * @type {boolean}
         */
        cover: false,

        /**
         * Whether to enable accessibility(aria and screen reader texts) or not.
         *
         * @type {boolean}
         */
        accessibility: true,

        /**
         * Whether to add tabindex="0" to visible slides or not.
         *
         * @type {boolean}
         */
        slideFocus: true,

        /**
         * Determine if a slider is navigation for another.
         * Use "sync" API to synchronize two sliders.
         *
         * @type {boolean}
         */
        isNavigation: false,

        /**
         * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
         *
         * @type {boolean}
         */
        trimSpace: true,

        /**
         * The "is-active" class is added after transition as default.
         * If true, it will be added before move.
         *
         * @type {boolean}
         */
        updateOnMove: false,

        /**
         * Throttle duration in milliseconds for the resize event.
         *
         * @type {number}
         */
        throttle: 100,

        /**
         * Whether to destroy a slider or not.
         *
         * @type {boolean}
         */
        destroy: false,

        /**
         * Options for specific breakpoints.
         *
         * @example
         * {
         *   1000: {
         *     perPage: 3,
         *     gap: 20
         *   },
         *   600: {
         *     perPage: 1,
         *     gap: 5,
         *   }
         * }
         *
         * @type {boolean|Object}
         */
        breakpoints: false,

        /**
         * Collection of class names.
         *
         * @see ./classes.js
         *
         * @type {Object}
         */
        classes: ELEMENT_CLASSES,

        /**
         * Collection of i18n texts.
         *
         * @see ./i18n.js
         *
         * @type {Object}
         */
        i18n: I18N
    };
    ;// CONCATENATED MODULE: ./src/js/constants/states.js
    /**
     * Export state constants.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Splide has been just created.
     *
     * @type {number}
     */
    var CREATED = 1;
    /**
     * All components have been mounted and initialized.
     *
     * @type {number}
     */

    var MOUNTED = 2;
    /**
     * Splide is ready for transition.
     *
     * @type {number}
     */

    var IDLE = 3;
    /**
     * Splide is moving.
     *
     * @type {number}
     */

    var MOVING = 4;
    /**
     * Splide is moving.
     *
     * @type {number}
     */

    var DESTROYED = 5;
    ;// CONCATENATED MODULE: ./src/js/splide.js
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    /**
     * The main class for applying Splide to an element.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */








    /**
     * The main class for applying Splide to an element,
     * providing some APIs to control the behavior.
     */

    var Splide = /*#__PURE__*/function () {
        /**
         * Splide constructor.
         *
         * @throws {Error} When the given root element or selector is invalid.
         *
         * @param {Element|string}  root       - A selector for a root element or an element itself.
         * @param {Object}          options    - Optional. Options to change default behaviour.
         * @param {Object}          Components - Optional. Components.
         */
        function Splide(root, options, Components) {
            if (options === void 0) {
                options = {};
            }

            if (Components === void 0) {
                Components = {};
            }

            this.root = root instanceof Element ? root : document.querySelector(root);
            exist(this.root, 'An invalid element/selector was given.');
            this.Components = null;
            this.Event = core_event();
            this.State = state(CREATED);
            this.STATES = states_namespaceObject;
            this._o = merge(DEFAULTS, options);
            this._i = 0;
            this._c = Components;
            this._e = {}; // Extensions

            this._t = null; // Transition
        }
        /**
         * Compose and mount components.
         *
         * @param {Object}   Extensions - Optional. Additional components.
         * @param {function} Transition - Optional. Set a custom transition component.
         *
         * @return {Splide|undefined} - This instance or undefined if an exception occurred.
         */


        var _proto = Splide.prototype;

        _proto.mount = function mount(Extensions, Transition) {
            var _this = this;

            if (Extensions === void 0) {
                Extensions = this._e;
            }

            if (Transition === void 0) {
                Transition = this._t;
            }

            // Reset the state.
            this.State.set(CREATED);
            this._e = Extensions;
            this._t = Transition;
            this.Components = compose(this, merge(this._c, Extensions), Transition);

            try {
                each(this.Components, function (component, key) {
                    var required = component.required;

                    if (required === undefined || required) {
                        component.mount && component.mount();
                    } else {
                        delete _this.Components[key];
                    }
                });
            } catch (e) {
                error(e.message);
                return;
            }

            var State = this.State;
            State.set(MOUNTED);
            each(this.Components, function (component) {
                component.mounted && component.mounted();
            });
            this.emit('mounted');
            State.set(IDLE);
            this.emit('ready');
            applyStyle(this.root, {
                visibility: 'visible'
            });
            this.on('move drag', function () {
                return State.set(MOVING);
            }).on('moved dragged', function () {
                return State.set(IDLE);
            });
            return this;
        }
            /**
             * Set sync target.
             *
             * @param {Splide} splide - A Splide instance.
             *
             * @return {Splide} - This instance.
             */
            ;

        _proto.sync = function sync(splide) {
            this.sibling = splide;
            return this;
        }
            /**
             * Register callback fired on the given event(s).
             *
             * @param {string}   events  - An event name. Use space to separate multiple events.
             *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
             * @param {function} handler - A callback function.
             * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
             * @param {Object}   options - Optional. Options for addEventListener.
             *
             * @return {Splide} - This instance.
             */
            ;

        _proto.on = function on(events, handler, elm, options) {
            if (elm === void 0) {
                elm = null;
            }

            if (options === void 0) {
                options = {};
            }

            this.Event.on(events, handler, elm, options);
            return this;
        }
            /**
             * Unsubscribe the given event.
             *
             * @param {string}  events - A event name.
             * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
             *
             * @return {Splide} - This instance.
             */
            ;

        _proto.off = function off(events, elm) {
            if (elm === void 0) {
                elm = null;
            }

            this.Event.off(events, elm);
            return this;
        }
            /**
             * Emit an event.
             *
             * @param {string} event - An event name.
             * @param {*}      args  - Any number of arguments passed to handlers.
             */
            ;

        _proto.emit = function emit(event) {
            var _this$Event;

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

            return this;
        }
            /**
             * Go to the slide specified by the given control.
             *
             * @param {string|number} control - A control pattern.
             * @param {boolean}       wait    - Optional. Whether to wait for transition.
             */
            ;

        _proto.go = function go(control, wait) {
            if (wait === void 0) {
                wait = this.options.waitForTransition;
            }

            if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
                this.Components.Controller.go(control, false);
            }

            return this;
        }
            /**
             * Verify whether the slider type is the given one or not.
             *
             * @param {string} type - A slider type.
             *
             * @return {boolean} - True if the slider type is the provided type or false if not.
             */
            ;

        _proto.is = function is(type) {
            return type === this._o.type;
        }
            /**
             * Insert a slide.
             *
             * @param {Element|string} slide - A slide element to be added.
             * @param {number}         index - A slide will be added at the position.
             */
            ;

        _proto.add = function add(slide, index) {
            if (index === void 0) {
                index = -1;
            }

            this.Components.Elements.add(slide, index, this.refresh.bind(this));
            return this;
        }
            /**
             * Remove the slide designated by the index.
             *
             * @param {number} index - A slide index.
             */
            ;

        _proto.remove = function remove(index) {
            this.Components.Elements.remove(index);
            this.refresh();
            return this;
        }
            /**
             * Destroy all Slide objects and clones and recreate them again.
             */
            ;

        _proto.refresh = function refresh() {
            this.emit('refresh:before').emit('refresh').emit('resize');
            return this;
        }
            /**
             * Destroy the Splide.
             * "Completely" boolean is mainly for breakpoints.
             *
             * @param {boolean} completely - Destroy completely.
             */
            ;

        _proto.destroy = function destroy(completely) {
            var _this2 = this;

            if (completely === void 0) {
                completely = true;
            }

            // Postpone destroy because it should be done after mount.
            if (this.State.is(CREATED)) {
                this.on('ready', function () {
                    return _this2.destroy(completely);
                });
                return;
            }

            values(this.Components).reverse().forEach(function (component) {
                component.destroy && component.destroy(completely);
            });
            this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

            this.Event.destroy();
            this.State.set(DESTROYED);
            return this;
        }
            /**
             * Return the current slide index.
             *
             * @return {number} - The current slide index.
             // */
            ;

        _createClass(Splide, [{
            key: "index",
            get: function get() {
                return this._i;
            }
            /**
             * Set the current slide index.
             *
             * @param {number|string} index - A new index.
             */
            ,
            set: function set(index) {
                this._i = parseInt(index);
            }
            /**
             * Return length of slides.
             * This is an alias of Elements.length.
             *
             * @return {number} - A number of slides.
             */

        }, {
            key: "length",
            get: function get() {
                return this.Components.Elements.length;
            }
            /**
             * Return options.
             *
             * @return {Object} - Options object.
             */

        }, {
            key: "options",
            get: function get() {
                return this._o;
            }
            /**
             * Set options with merging the given object to the current one.
             *
             * @param {Object} options - New options.
             */
            ,
            set: function set(options) {
                var created = this.State.is(CREATED);

                if (!created) {
                    this.emit('update');
                }

                this._o = merge(this._o, options);

                if (!created) {
                    this.emit('updated', this._o);
                }
            }
            /**
             * Return the class list.
             * This is an alias of Splide.options.classList.
             *
             * @return {Object} - An object containing all class list.
             */

        }, {
            key: "classes",
            get: function get() {
                return this._o.classes;
            }
            /**
             * Return the i18n strings.
             * This is an alias of Splide.options.i18n.
             *
             * @return {Object} - An object containing all i18n strings.
             */

        }, {
            key: "i18n",
            get: function get() {
                return this._o.i18n;
            }
        }]);

        return Splide;
    }();


    ;// CONCATENATED MODULE: ./src/js/components/options/index.js
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var options = (function (Splide) {
        /**
         * Retrieve options from the data attribute.
         * Note that IE10 doesn't support dataset property.
         *
         * @type {string}
         */
        var options = getAttribute(Splide.root, 'data-splide');

        if (options) {
            try {
                Splide.options = JSON.parse(options);
            } catch (e) {
                error(e.message);
            }
        }

        return {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                if (Splide.State.is(CREATED)) {
                    Splide.index = Splide.options.start;
                }
            }
        };
    });
    ;// CONCATENATED MODULE: ./src/js/constants/directions.js
    /**
     * Export layout modes.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Enumerate slides from left to right.
     *
     * @type {string}
     */
    var LTR = 'ltr';
    /**
     * Enumerate slides from right to left.
     *
     * @type {string}
     */

    var RTL = 'rtl';
    /**
     * Enumerate slides in a col.
     *
     * @type {string}
     */

    var TTB = 'ttb';
    ;// CONCATENATED MODULE: ./src/js/components/elements/slide.js
    /**
     * The sub component for handling each slide.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */






    /**
     * Events for restoring original styles.
     *
     * @type {string}
     */

    var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ var elements_slide = (function (Splide, index, realIndex, slide) {
        /**
         * Whether to update "is-active" class before or after transition.
         *
         * @type {boolean}
         */
        var updateOnMove = Splide.options.updateOnMove;
        /**
         * Events when the slide status is updated.
         * Append a namespace to remove listeners later.
         *
         * @type {string}
         */

        var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
        /**
         * Slide sub component object.
         *
         * @type {Object}
         */

        var Slide = {
            /**
             * Slide element.
             *
             * @type {Element}
             */
            slide: slide,

            /**
             * Slide index.
             *
             * @type {number}
             */
            index: index,

            /**
             * Real index for clones.
             *
             * @type {number}
             */
            realIndex: realIndex,

            /**
             * Container element if available.
             *
             * @type {Element|undefined}
             */
            container: child(slide, Splide.classes.container),

            /**
             * Whether this is a cloned slide or not.
             *
             * @type {boolean}
             */
            isClone: realIndex > -1,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                var _this = this;

                if (!this.isClone) {
                    slide.id = Splide.root.id + "-slide" + pad(index + 1);
                }

                Splide.on(STATUS_UPDATE_EVENTS, function () {
                    return _this.update();
                }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
                    return Splide.emit('click', _this);
                }, slide);
                /*
                 * Add "is-active" class to a clone element temporarily
                 * and it will be removed on "moved" event.
                 */

                if (updateOnMove) {
                    Splide.on('move.slide', function (newIndex) {
                        if (newIndex === realIndex) {
                            _update(true, false);
                        }
                    });
                } // Make sure the slide is shown.


                applyStyle(slide, {
                    display: ''
                }); // Hold the original styles.

                this.styles = getAttribute(slide, 'style') || '';
            },

            /**
             * Destroy.
             */
            destroy: function destroy() {
                Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
                removeClass(slide, values(STATUS_CLASSES));
                restoreStyles();
                removeAttribute(this.container, 'style');
            },

            /**
             * Update active and visible status.
             */
            update: function update() {
                _update(this.isActive(), false);

                _update(this.isVisible(), true);
            },

            /**
             * Check whether this slide is active or not.
             *
             * @return {boolean} - True if the slide is active or false if not.
             */
            isActive: function isActive() {
                return Splide.index === index;
            },

            /**
             * Check whether this slide is visible in the viewport or not.
             *
             * @return {boolean} - True if the slide is visible or false if not.
             */
            isVisible: function isVisible() {
                var active = this.isActive();

                if (Splide.is(FADE) || active) {
                    return active;
                }

                var ceil = Math.ceil;
                var trackRect = getRect(Splide.Components.Elements.track);
                var slideRect = getRect(slide);

                if (Splide.options.direction === TTB) {
                    return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
                }

                return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
            },

            /**
             * Calculate how far this slide is from another slide and
             * return true if the distance is within the given number.
             *
             * @param {number} from   - Index of a target slide.
             * @param {number} within - True if the slide is within this number.
             *
             * @return {boolean} - True if the slide is within the number or false otherwise.
             */
            isWithin: function isWithin(from, within) {
                var diff = Math.abs(from - index);

                if (!Splide.is(SLIDE) && !this.isClone) {
                    diff = Math.min(diff, Splide.length - diff);
                }

                return diff < within;
            }
        };
        /**
         * Update classes for activity or visibility.
         *
         * @param {boolean} active        - Is active/visible or not.
         * @param {boolean} forVisibility - Toggle classes for activity or visibility.
         */

        function _update(active, forVisibility) {
            var type = forVisibility ? 'visible' : 'active';
            var className = STATUS_CLASSES[type];

            if (active) {
                addClass(slide, className);
                Splide.emit("" + type, Slide);
            } else {
                if (hasClass(slide, className)) {
                    removeClass(slide, className);
                    Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
                }
            }
        }
        /**
         * Restore the original styles.
         */


        function restoreStyles() {
            setAttribute(slide, 'style', Slide.styles);
        }

        return Slide;
    });
    ;// CONCATENATED MODULE: ./src/js/components/elements/index.js
    /**
     * The component for main elements.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */





    /**
     * The property name for UID stored in a window object.
     *
     * @type {string}
     */

    var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var components_elements = (function (Splide, Components) {
        /**
         * Hold the root element.
         *
         * @type {Element}
         */
        var root = Splide.root;
        /**
         * Hold the class list.
         *
         * @type {Object}
         */

        var classes = Splide.classes;
        /**
         * Store Slide objects.
         *
         * @type {Array}
         */

        var Slides = [];
        /*
         * Assign unique ID to the root element if it doesn't have the one.
         * Note that IE doesn't support padStart() to fill the uid by 0.
         */

        if (!root.id) {
            window.splide = window.splide || {};
            var uid = window.splide[UID_NAME] || 0;
            window.splide[UID_NAME] = ++uid;
            root.id = "splide" + pad(uid);
        }
        /**
         * Elements component object.
         *
         * @type {Object}
         */


        var Elements = {
            /**
             * Called when the component is mounted.
             * Collect main elements and store them as member properties.
             */
            mount: function mount() {
                var _this = this;

                this.init();
                Splide.on('refresh', function () {
                    _this.destroy();

                    _this.init();
                }).on('updated', function () {
                    removeClass(root, getClasses());
                    addClass(root, getClasses());
                });
            },

            /**
             * Destroy.
             */
            destroy: function destroy() {
                Slides.forEach(function (Slide) {
                    Slide.destroy();
                });
                Slides = [];
                removeClass(root, getClasses());
            },

            /**
             * Initialization.
             */
            init: function init() {
                var _this2 = this;

                collect();
                addClass(root, getClasses());
                this.slides.forEach(function (slide, index) {
                    _this2.register(slide, index, -1);
                });
            },

            /**
             * Register a slide to create a Slide object and handle its behavior.
             *
             * @param {Element} slide     - A slide element.
             * @param {number}  index     - A unique index. This can be negative.
             * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
             */
            register: function register(slide, index, realIndex) {
                var SlideObject = elements_slide(Splide, index, realIndex, slide);
                SlideObject.mount();
                Slides.push(SlideObject);
            },

            /**
             * Return the Slide object designated by the index.
             * Note that "find" is not supported by IE.
             *
             * @return {Object|undefined} - A Slide object if available. Undefined if not.
             */
            getSlide: function getSlide(index) {
                return Slides.filter(function (Slide) {
                    return Slide.index === index;
                })[0];
            },

            /**
             * Return all Slide objects.
             *
             * @param {boolean} includeClones - Whether to include cloned slides or not.
             *
             * @return {Object[]} - Slide objects.
             */
            getSlides: function getSlides(includeClones) {
                return includeClones ? Slides : Slides.filter(function (Slide) {
                    return !Slide.isClone;
                });
            },

            /**
             * Return Slide objects belonging to the given page.
             *
             * @param {number} page - A page number.
             *
             * @return {Object[]} - An array containing Slide objects.
             */
            getSlidesByPage: function getSlidesByPage(page) {
                var idx = Components.Controller.toIndex(page);
                var options = Splide.options;
                var max = options.focus !== false ? 1 : options.perPage;
                return Slides.filter(function (_ref) {
                    var index = _ref.index;
                    return idx <= index && index < idx + max;
                });
            },

            /**
             * Insert a slide to a slider.
             * Need to refresh Splide after adding a slide.
             *
             * @param {Node|string} slide    - A slide element to be added.
             * @param {number}      index    - A slide will be added at the position.
             * @param {Function}    callback - Called right after the slide is added to the DOM tree.
             */
            add: function add(slide, index, callback) {
                if (typeof slide === 'string') {
                    slide = domify(slide);
                }

                if (slide instanceof Element) {
                    var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

                    applyStyle(slide, {
                        display: 'none'
                    });

                    if (ref) {
                        before(slide, ref);
                        this.slides.splice(index, 0, slide);
                    } else {
                        append(this.list, slide);
                        this.slides.push(slide);
                    }

                    loaded(slide, function () {
                        callback && callback(slide);
                    });
                }
            },

            /**
             * Remove a slide from a slider.
             * Need to refresh Splide after removing a slide.
             *
             * @param index - Slide index.
             */
            remove: function remove(index) {
                dom_remove(this.slides.splice(index, 1)[0]);
            },

            /**
             * Trigger the provided callback for each Slide object.
             *
             * @param {Function} callback - A callback function. The first argument will be the Slide object.
             */
            each: function each(callback) {
                Slides.forEach(callback);
            },

            /**
             * Return slides length without clones.
             *
             * @return {number} - Slide length.
             */
            get length() {
                return this.slides.length;
            },

            /**
             * Return "SlideObjects" length including clones.
             *
             * @return {number} - Slide length including clones.
             */
            get total() {
                return Slides.length;
            }

        };
        /**
         * Collect elements.
         */

        function collect() {
            Elements.slider = child(root, classes.slider);
            Elements.track = find(root, "." + classes.track);
            Elements.list = child(Elements.track, classes.list);
            exist(Elements.track && Elements.list, 'Track or list was not found.');
            Elements.slides = children(Elements.list, classes.slide);
            var arrows = findParts(classes.arrows);
            Elements.arrows = {
                prev: find(arrows, "." + classes.prev),
                next: find(arrows, "." + classes.next)
            };
            var autoplay = findParts(classes.autoplay);
            Elements.bar = find(findParts(classes.progress), "." + classes.bar);
            Elements.play = find(autoplay, "." + classes.play);
            Elements.pause = find(autoplay, "." + classes.pause);
            Elements.track.id = Elements.track.id || root.id + "-track";
            Elements.list.id = Elements.list.id || root.id + "-list";
        }
        /**
         * Return class names for the root element.
         */


        function getClasses() {
            var rootClass = classes.root;
            var options = Splide.options;
            return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
        }
        /**
         * Find parts only from children of the root or track.
         *
         * @return {Element} - A found element or undefined.
         */


        function findParts(className) {
            return child(root, className) || child(Elements.slider, className);
        }

        return Elements;
    });
    ;// CONCATENATED MODULE: ./src/js/components/controller/index.js
    /**
     * The component for controlling the track.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */



    var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var controller = (function (Splide, Components) {
        /**
         * Store current options.
         *
         * @type {Object}
         */
        var options;
        /**
         * True if the slide is LOOP mode.
         *
         * @type {boolean}
         */

        var isLoop;
        /**
         * Controller component object.
         *
         * @type {Object}
         */

        var Controller = {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                options = Splide.options;
                isLoop = Splide.is(LOOP);
                bind();
            },

            /**
             * Make track run by the given control.
             * - "+{i}" : Increment the slide index by i.
             * - "-{i}" : Decrement the slide index by i.
             * - "{i}"  : Go to the slide whose index is i.
             * - ">"    : Go to next page.
             * - "<"    : Go to prev page.
             * - ">{i}" : Go to page i.
             *
             * @param {string|number} control  - A control pattern.
             * @param {boolean}       silently - Go to the destination without event emission.
             */
            go: function go(control, silently) {
                var destIndex = this.trim(this.parse(control));
                Components.Track.go(destIndex, this.rewind(destIndex), silently);
            },

            /**
             * Parse the given control and return the destination index for the track.
             *
             * @param {string} control - A control target pattern.
             *
             * @return {number} - A parsed target.
             */
            parse: function parse(control) {
                var index = Splide.index;
                var matches = String(control).match(/([+\-<>]+)(\d+)?/);
                var indicator = matches ? matches[1] : '';
                var number = matches ? parseInt(matches[2]) : 0;

                switch (indicator) {
                    case '+':
                        index += number || 1;
                        break;

                    case '-':
                        index -= number || 1;
                        break;

                    case '>':
                    case '<':
                        index = parsePage(number, index, indicator === '<');
                        break;

                    default:
                        index = parseInt(control);
                }

                return index;
            },

            /**
             * Compute index from the given page number.
             *
             * @param {number} page - Page number.
             *
             * @return {number} - A computed page number.
             */
            toIndex: function toIndex(page) {
                if (hasFocus()) {
                    return page;
                }

                var length = Splide.length;
                var perPage = options.perPage;
                var index = page * perPage;
                index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

                if (length - perPage <= index && index < length) {
                    index = length - perPage;
                }

                return index;
            },

            /**
             * Compute page number from the given slide index.
             *
             * @param {number} index - Slide index.
             *
             * @return {number} - A computed page number.
             */
            toPage: function toPage(index) {
                if (hasFocus()) {
                    return index;
                }

                var length = Splide.length;
                var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

                if (length - perPage <= index && index < length) {
                    return floor((length - 1) / perPage);
                }

                return floor(index / perPage);
            },

            /**
             * Trim the given index according to the current mode.
             * Index being returned could be less than 0 or greater than the length in Loop mode.
             *
             * @param {number} index - An index being trimmed.
             *
             * @return {number} - A trimmed index.
             */
            trim: function trim(index) {
                if (!isLoop) {
                    index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
                }

                return index;
            },

            /**
             * Rewind the given index if it's out of range.
             *
             * @param {number} index - An index.
             *
             * @return {number} - A rewound index.
             */
            rewind: function rewind(index) {
                var edge = this.edgeIndex;

                if (isLoop) {
                    while (index > edge) {
                        index -= edge + 1;
                    }

                    while (index < 0) {
                        index += edge + 1;
                    }
                } else {
                    if (index > edge) {
                        index = 0;
                    } else if (index < 0) {
                        index = edge;
                    }
                }

                return index;
            },

            /**
             * Check if the direction is "rtl" or not.
             *
             * @return {boolean} - True if "rtl" or false if not.
             */
            isRtl: function isRtl() {
                return options.direction === RTL;
            },

            /**
             * Return the page length.
             *
             * @return {number} - Max page number.
             */
            get pageLength() {
                var length = Splide.length;
                return hasFocus() ? length : Math.ceil(length / options.perPage);
            },

            /**
             * Return the edge index.
             *
             * @return {number} - Edge index.
             */
            get edgeIndex() {
                var length = Splide.length;

                if (!length) {
                    return 0;
                }

                if (hasFocus() || options.isNavigation || isLoop) {
                    return length - 1;
                }

                return length - options.perPage;
            },

            /**
             * Return the index of the previous slide.
             *
             * @return {number} - The index of the previous slide if available. -1 otherwise.
             */
            get prevIndex() {
                var prev = Splide.index - 1;

                if (isLoop || options.rewind) {
                    prev = this.rewind(prev);
                }

                return prev > -1 ? prev : -1;
            },

            /**
             * Return the index of the next slide.
             *
             * @return {number} - The index of the next slide if available. -1 otherwise.
             */
            get nextIndex() {
                var next = Splide.index + 1;

                if (isLoop || options.rewind) {
                    next = this.rewind(next);
                }

                return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
            }

        };
        /**
         * Listen to some events.
         */

        function bind() {
            Splide.on('move', function (newIndex) {
                Splide.index = newIndex;
            }).on('updated refresh', function (newOptions) {
                options = newOptions || options;
                Splide.index = between(Splide.index, 0, Controller.edgeIndex);
            });
        }
        /**
         * Verify if the focus option is available or not.
         *
         * @return {boolean} - True if a slider has the focus option.
         */


        function hasFocus() {
            return options.focus !== false;
        }
        /**
         * Return the next or previous page index computed by the page number and current index.
         *
         * @param {number}  number - Specify the page number.
         * @param {number}  index  - Current index.
         * @param {boolean} prev   - Prev or next.
         *
         * @return {number} - Slide index.
         */


        function parsePage(number, index, prev) {
            if (number > -1) {
                return Controller.toIndex(number);
            }

            var perMove = options.perMove;
            var sign = prev ? -1 : 1;

            if (perMove) {
                return index + perMove * sign;
            }

            return Controller.toIndex(Controller.toPage(index) + sign);
        }

        return Controller;
    });
    ;// CONCATENATED MODULE: ./src/js/components/track/index.js
    /**
     * The component for moving list in the track.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */





    var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var track = (function (Splide, Components) {
        /**
         * Hold the Layout component.
         *
         * @type {Object}
         */
        var Layout;
        /**
         * Hold the Layout component.
         *
         * @type {Object}
         */

        var Elements;
        /**
         * Store the list element.
         *
         * @type {Element}
         */

        var list;
        /**
         * Whether the current direction is vertical or not.
         *
         * @type {boolean}
         */

        var isVertical = Splide.options.direction === TTB;
        /**
         * Whether the slider type is FADE or not.
         *
         * @type {boolean}
         */

        var isFade = Splide.is(FADE);
        /**
         * Whether the slider direction is RTL or not.
         *
         * @type {boolean}
         */

        var isRTL = Splide.options.direction === RTL;
        /**
         * This will be true while transitioning from the last index to the first one.
         *
         * @type {boolean}
         */

        var isLoopPending = false;
        /**
         * Sign for the direction. Only RTL mode uses the positive sign.
         *
         * @type {number}
         */

        var sign = isRTL ? 1 : -1;
        /**
         * Track component object.
         *
         * @type {Object}
         */

        var Track = {
            /**
             * Make public the sign defined locally.
             *
             * @type {number}
             */
            sign: sign,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                Elements = Components.Elements;
                Layout = Components.Layout;
                list = Elements.list;
            },

            /**
             * Called after the component is mounted.
             * The resize event must be registered after the Layout's one is done.
             */
            mounted: function mounted() {
                var _this = this;

                if (!isFade) {
                    this.jump(0);
                    Splide.on('mounted resize updated', function () {
                        _this.jump(Splide.index);
                    });
                }
            },

            /**
             * Go to the given destination index.
             * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
             *
             * @param {number}  destIndex - A destination index.
             *                              This can be negative or greater than slides length for reaching clones.
             * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
             * @param {boolean} silently  - If true, suppress emitting events.
             */
            go: function go(destIndex, newIndex, silently) {
                var newPosition = getTrimmedPosition(destIndex);
                var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

                if (Splide.State.is(MOVING) && isLoopPending) {
                    return;
                }

                isLoopPending = destIndex !== newIndex;

                if (!silently) {
                    Splide.emit('move', newIndex, prevIndex, destIndex);
                }

                if (Math.abs(newPosition - this.position) >= 1 || isFade) {
                    Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
                        onTransitionEnd(destIndex, newIndex, prevIndex, silently);
                    });
                } else {
                    if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
                        Components.Controller.go(destIndex + destIndex - prevIndex, silently);
                    } else {
                        onTransitionEnd(destIndex, newIndex, prevIndex, silently);
                    }
                }
            },

            /**
             * Move the track to the specified index.
             *
             * @param {number} index - A destination index where the track jumps.
             */
            jump: function jump(index) {
                this.translate(getTrimmedPosition(index));
            },

            /**
             * Set the list position by CSS translate property.
             *
             * @param {number} position - A new position value.
             */
            translate: function translate(position) {
                applyStyle(list, {
                    transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
                });
            },

            /**
             * Cancel the transition and set the list position.
             * Also, loop the slider if necessary.
             */
            cancel: function cancel() {
                if (Splide.is(LOOP)) {
                    this.shift();
                } else {
                    // Ensure the current position.
                    this.translate(this.position);
                }

                applyStyle(list, {
                    transition: ''
                });
            },

            /**
             * Shift the slider if it exceeds borders on the edge.
             */
            shift: function shift() {
                var position = abs(this.position);
                var left = abs(this.toPosition(0));
                var right = abs(this.toPosition(Splide.length));
                var innerSize = right - left;

                if (position < left) {
                    position += innerSize;
                } else if (position > right) {
                    position -= innerSize;
                }

                this.translate(sign * position);
            },

            /**
             * Trim redundant spaces on the left or right edge if necessary.
             *
             * @param {number} position - Position value to be trimmed.
             *
             * @return {number} - Trimmed position.
             */
            trim: function trim(position) {
                if (!Splide.options.trimSpace || Splide.is(LOOP)) {
                    return position;
                }

                var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
                return between(position, edge, 0);
            },

            /**
             * Calculate the closest slide index from the given position.
             *
             * @param {number} position - A position converted to an slide index.
             *
             * @return {number} - The closest slide index.
             */
            toIndex: function toIndex(position) {
                var _this2 = this;

                var index = 0;
                var minDistance = Infinity;
                Elements.getSlides(true).forEach(function (Slide) {
                    var slideIndex = Slide.index;
                    var distance = abs(_this2.toPosition(slideIndex) - position);

                    if (distance < minDistance) {
                        minDistance = distance;
                        index = slideIndex;
                    }
                });
                return index;
            },

            /**
             * Return coordinates object by the given position.
             *
             * @param {number} position - A position value.
             *
             * @return {Object} - A coordinates object.
             */
            toCoord: function toCoord(position) {
                return {
                    x: isVertical ? 0 : position,
                    y: isVertical ? position : 0
                };
            },

            /**
             * Calculate the track position by a slide index.
             *
             * @param {number} index - Slide index.
             *
             * @return {Object} - Calculated position.
             */
            toPosition: function toPosition(index) {
                var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
                return sign * (position + this.offset(index));
            },

            /**
             * Return the current offset value, considering direction.
             *
             * @return {number} - Offset amount.
             */
            offset: function offset(index) {
                var focus = Splide.options.focus;
                var slideSize = Layout.slideSize(index);

                if (focus === 'center') {
                    return -(Layout.size - slideSize) / 2;
                }

                return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
            },

            /**
             * Return the current position.
             * This returns the correct position even while transitioning by CSS.
             *
             * @return {number} - Current position.
             */
            get position() {
                var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
                return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
            }

        };
        /**
         * Called whenever slides arrive at a destination.
         *
         * @param {number}  destIndex - A destination index.
         * @param {number}  newIndex  - A new index.
         * @param {number}  prevIndex - A previous index.
         * @param {boolean} silently  - If true, suppress emitting events.
         */

        function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
            applyStyle(list, {
                transition: ''
            });
            isLoopPending = false;

            if (!isFade) {
                Track.jump(newIndex);
            }

            if (!silently) {
                Splide.emit('moved', newIndex, prevIndex, destIndex);
            }
        }
        /**
         * Convert index to the trimmed position.
         *
         * @return {number} - Trimmed position.
         */


        function getTrimmedPosition(index) {
            return Track.trim(Track.toPosition(index));
        }

        return Track;
    });
    ;// CONCATENATED MODULE: ./src/js/components/clones/index.js
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var clones = (function (Splide, Components) {
        /**
         * Store information of all clones.
         *
         * @type {Array}
         */
        var clones = [];
        /**
         * Store the current clone count on one side.
         *
         * @type {number}
         */

        var cloneCount = 0;
        /**
         * Keep Elements component.
         *
         * @type {Object}
         */

        var Elements = Components.Elements;
        /**
         * Clones component object.
         *
         * @type {Object}
         */

        var Clones = {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                var _this = this;

                if (Splide.is(LOOP)) {
                    init();
                    Splide.on('refresh:before', function () {
                        _this.destroy();
                    }).on('refresh', init).on('resize', function () {
                        if (cloneCount !== getCloneCount()) {
                            // Destroy before refresh not to collect clones by the Elements component.
                            _this.destroy();

                            Splide.refresh();
                        }
                    });
                }
            },

            /**
             * Destroy.
             */
            destroy: function destroy() {
                dom_remove(clones);
                clones = [];
            },

            /**
             * Return all clones.
             *
             * @return {Element[]} - Cloned elements.
             */
            get clones() {
                return clones;
            },

            /**
             * Return clone length.
             *
             * @return {number} - A length of clones.
             */
            get length() {
                return clones.length;
            }

        };
        /**
         * Initialization.
         */

        function init() {
            Clones.destroy();
            cloneCount = getCloneCount();
            generateClones(cloneCount);
        }
        /**
         * Generate and append/prepend clones.
         *
         * @param {number} count - The half number of clones.
         */


        function generateClones(count) {
            var length = Elements.length,
                register = Elements.register;

            if (length) {
                var slides = Elements.slides;

                while (slides.length < count) {
                    slides = slides.concat(slides);
                } // Clones after the last element.


                slides.slice(0, count).forEach(function (elm, index) {
                    var clone = cloneDeeply(elm);
                    append(Elements.list, clone);
                    clones.push(clone);
                    register(clone, index + length, index % length);
                }); // Clones before the first element.

                slides.slice(-count).forEach(function (elm, index) {
                    var clone = cloneDeeply(elm);
                    before(clone, slides[0]);
                    clones.push(clone);
                    register(clone, index - count, (length + index - count % length) % length);
                });
            }
        }
        /**
         * Return half count of clones to be generated.
         * Clone count is determined by:
         * - "clones" value in the options.
         * - Number of slides that can be placed in a view in "fixed" mode.
         * - Max pages a flick action can move.
         * - Whether the slide length is enough for perPage.
         *
         * @return {number} - Count for clones.
         */


        function getCloneCount() {
            var options = Splide.options;

            if (options.clones) {
                return options.clones;
            } // Use the slide length in autoWidth mode because the number cannot be calculated.


            var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
            var dimension = options.direction === TTB ? 'Height' : 'Width';
            var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

            if (fixedSize) {
                // Roughly calculate the count. This needs not to be strict.
                baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
            }

            return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
        }
        /**
         * Clone deeply the given element.
         *
         * @param {Element} elm - An element being duplicated.
         *
         * @return {Node} - A cloned node(element).
         */


        function cloneDeeply(elm) {
            var clone = elm.cloneNode(true);
            addClass(clone, Splide.classes.clone); // ID should not be duplicated.

            removeAttribute(clone, 'id');
            return clone;
        }

        return Clones;
    });
    ;// CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ var horizontal = (function (Splide, Components) {
        /**
         * Keep the Elements component.
         *
         * @type {string}
         */
        var Elements = Components.Elements;
        /**
         * Keep the root element.
         *
         * @type {Element}
         */

        var root = Splide.root;
        /**
         * Keep the track element.
         *
         * @type {Element}
         */

        var track;
        /**
         * Keep the latest options.
         *
         * @type {Element}
         */

        var options = Splide.options;
        return {
            /**
             * Margin property name.
             *
             * @type {string}
             */
            margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

            /**
             * Always 0 because the height will be determined by inner contents.
             *
             * @type {number}
             */
            height: 0,

            /**
             * Initialization.
             */
            init: function init() {
                this.resize();
            },

            /**
             * Resize gap and padding.
             * This must be called on init.
             */
            resize: function resize() {
                options = Splide.options;
                track = Elements.track;
                this.gap = toPixel(root, options.gap);
                var padding = options.padding;
                var left = toPixel(root, padding.left || padding);
                var right = toPixel(root, padding.right || padding);
                this.padding = {
                    left: left,
                    right: right
                };
                applyStyle(track, {
                    paddingLeft: unit(left),
                    paddingRight: unit(right)
                });
            },

            /**
             * Return total width from the left of the list to the right of the slide specified by the provided index.
             *
             * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
             *
             * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
             */
            totalWidth: function totalWidth(index) {
                if (index === void 0) {
                    index = Splide.length - 1;
                }

                var Slide = Elements.getSlide(index);
                var width = 0;

                if (Slide) {
                    var slideRect = getRect(Slide.slide);
                    var listRect = getRect(Elements.list);

                    if (options.direction === RTL) {
                        width = listRect.right - slideRect.left;
                    } else {
                        width = slideRect.right - listRect.left;
                    }

                    width += this.gap;
                }

                return width;
            },

            /**
             * Return the slide width in px.
             *
             * @param {number} index - Slide index.
             *
             * @return {number} - The slide width.
             */
            slideWidth: function slideWidth(index) {
                if (options.autoWidth) {
                    var Slide = Elements.getSlide(index);
                    return Slide ? Slide.slide.offsetWidth : 0;
                }

                var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
                return toPixel(root, width);
            },

            /**
             * Return the slide height in px.
             *
             * @return {number} - The slide height.
             */
            slideHeight: function slideHeight() {
                var height = options.height || options.fixedHeight || this.width * options.heightRatio;
                return toPixel(root, height);
            },

            /**
             * Return slider width without padding.
             *
             * @return {number} - Current slider width.
             */
            get width() {
                return track.clientWidth - this.padding.left - this.padding.right;
            }

        };
    });
    ;// CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ var vertical = (function (Splide, Components) {
        /**
         * Keep the Elements component.
         *
         * @type {string}
         */
        var Elements = Components.Elements;
        /**
         * Keep the root element.
         *
         * @type {Element}
         */

        var root = Splide.root;
        /**
         * Keep the track element.
         *
         * @type {Element}
         */

        var track;
        /**
         * Keep the latest options.
         *
         * @type {Element}
         */

        var options;
        return {
            /**
             * Margin property name.
             *
             * @type {string}
             */
            margin: 'marginBottom',

            /**
             * Initialization.
             */
            init: function init() {
                this.resize();
            },

            /**
             * Resize gap and padding.
             * This must be called on init.
             */
            resize: function resize() {
                options = Splide.options;
                track = Elements.track;
                this.gap = toPixel(root, options.gap);
                var padding = options.padding;
                var top = toPixel(root, padding.top || padding);
                var bottom = toPixel(root, padding.bottom || padding);
                this.padding = {
                    top: top,
                    bottom: bottom
                };
                applyStyle(track, {
                    paddingTop: unit(top),
                    paddingBottom: unit(bottom)
                });
            },

            /**
             * Return total height from the top of the list to the bottom of the slide specified by the provided index.
             *
             * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
             *
             * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
             */
            totalHeight: function totalHeight(index) {
                if (index === void 0) {
                    index = Splide.length - 1;
                }

                var Slide = Elements.getSlide(index);

                if (Slide) {
                    return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
                }

                return 0;
            },

            /**
             * Return the slide width in px.
             *
             * @return {number} - The slide width.
             */
            slideWidth: function slideWidth() {
                return toPixel(root, options.fixedWidth || this.width);
            },

            /**
             * Return the slide height in px.
             *
             * @param {number} index - Slide index.
             *
             * @return {number} - The slide height.
             */
            slideHeight: function slideHeight(index) {
                if (options.autoHeight) {
                    var Slide = Elements.getSlide(index);
                    return Slide ? Slide.slide.offsetHeight : 0;
                }

                var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
                return toPixel(root, height);
            },

            /**
             * Return slider width without padding.
             *
             * @return {number} - Current slider width.
             */
            get width() {
                return track.clientWidth;
            },

            /**
             * Return slide height without padding.
             *
             * @return {number} - Slider height.
             */
            get height() {
                var height = options.height || this.width * options.heightRatio;
                exist(height, '"height" or "heightRatio" is missing.');
                return toPixel(root, height) - this.padding.top - this.padding.bottom;
            }

        };
    });
    ;// CONCATENATED MODULE: ./src/js/utils/time.js
    /**
     * A package of utility functions related with time.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Simple throttle function that controls how often the given function is executed.
     *
     * @param {function} func - A function to be throttled.
     * @param {number}   wait - Time in millisecond for interval of execution.
     *
     * @return {Function} - A debounced function.
     */
    function throttle(func, wait) {
        var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

        return function () {
            if (!timeout) {
                timeout = setTimeout(function () {
                    func();
                    timeout = null;
                }, wait);
            }
        };
    }
    /**
     * Custom setInterval function that provides progress rate as callback.
     *
     * @param {function} callback - A callback function fired every time the interval time passes.
     * @param {number}   interval - Interval duration in milliseconds.
     * @param {function} progress - A callback function fired whenever the progress goes.
     *
     * @return {Object} - An object containing play() and pause() functions.
     */

    function createInterval(callback, interval, progress) {
        var _window = window,
            requestAnimationFrame = _window.requestAnimationFrame;
        var start,
            elapse,
            rate,
            _pause = true;

        var step = function step(timestamp) {
            if (!_pause) {
                if (!start) {
                    start = timestamp;

                    if (rate && rate < 1) {
                        start -= rate * interval;
                    }
                }

                elapse = timestamp - start;
                rate = elapse / interval;

                if (elapse >= interval) {
                    start = 0;
                    rate = 1;
                    callback();
                }

                if (progress) {
                    progress(rate);
                }

                requestAnimationFrame(step);
            }
        };

        return {
            pause: function pause() {
                _pause = true;
                start = 0;
            },
            play: function play(reset) {
                start = 0;

                if (reset) {
                    rate = 0;
                }

                if (_pause) {
                    _pause = false;
                    requestAnimationFrame(step);
                }
            }
        };
    }
    ;// CONCATENATED MODULE: ./src/js/components/layout/index.js
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var layout = (function (Splide, Components) {
        /**
         * Keep the Elements component.
         *
         * @type {string}
         */
        var Elements = Components.Elements;
        /**
         * Whether the slider is vertical or not.
         *
         * @type {boolean}
         */

        var isVertical = Splide.options.direction === TTB;
        /**
         * Layout component object.
         *
         * @type {Object}
         */

        var Layout = object_assign({
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                bind();
                init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

                this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
                this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
            },

            /**
             * Destroy the component.
             */
            destroy: function destroy() {
                removeAttribute([Elements.list, Elements.track], 'style');
            },

            /**
             * Return the slider height on the vertical mode or width on the horizontal mode.
             *
             * @return {number}
             */
            get size() {
                return isVertical ? this.height : this.width;
            }

        }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
        /**
         * Init slider styles according to options.
         */

        function init() {
            Layout.init();
            applyStyle(Splide.root, {
                maxWidth: unit(Splide.options.width)
            });
            Elements.each(function (Slide) {
                Slide.slide.style[Layout.margin] = unit(Layout.gap);
            });
            resize();
        }
        /**
         * Listen the resize native event with throttle.
         * Initialize when the component is mounted or options are updated.
         */


        function bind() {
            Splide.on('resize load', throttle(function () {
                Splide.emit('resize');
            }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
        }
        /**
         * Resize the track and slide elements.
         */


        function resize() {
            var options = Splide.options;
            Layout.resize();
            applyStyle(Elements.track, {
                height: unit(Layout.height)
            });
            var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
            Elements.each(function (Slide) {
                applyStyle(Slide.container, {
                    height: slideHeight
                });
                applyStyle(Slide.slide, {
                    width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
                    height: Slide.container ? null : slideHeight
                });
            });
            Splide.emit('resized');
        }

        return Layout;
    });
    ;// CONCATENATED MODULE: ./src/js/components/drag/index.js
    /**
     * The component for supporting mouse drag and swipe.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */





    var drag_abs = Math.abs;
    /**
     * If the absolute velocity is greater thant this value,
     * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
     */

    var MIN_VELOCITY = 0.1;
    /**
     * Adjust how much the track can be pulled on the first or last page.
     * The larger number this is, the farther the track moves.
     * This should be around 5 - 9.
     *
     * @type {number}
     */

    var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var drag = (function (Splide, Components) {
        /**
         * Store the Move component.
         *
         * @type {Object}
         */
        var Track = Components.Track;
        /**
         * Store the Controller component.
         *
         * @type {Object}
         */

        var Controller = Components.Controller;
        /**
         * Coordinate of the track on starting drag.
         *
         * @type {Object}
         */

        var startCoord;
        /**
         * Analyzed info on starting drag.
         *
         * @type {Object|null}
         */

        var startInfo;
        /**
         * Analyzed info being updated while dragging/swiping.
         *
         * @type {Object}
         */

        var currentInfo;
        /**
         * Determine whether slides are being dragged or not.
         *
         * @type {boolean}
         */

        var isDragging;
        /**
         * Whether the slider direction is vertical or not.
         *
         * @type {boolean}
         */

        var isVertical = Splide.options.direction === TTB;
        /**
         * Axis for the direction.
         *
         * @type {string}
         */

        var axis = isVertical ? 'y' : 'x';
        /**
         * Drag component object.
         *
         * @type {Object}
         */

        var Drag = {
            /**
             * Whether dragging is disabled or not.
             *
             * @type {boolean}
             */
            disabled: false,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                var _this = this;

                var Elements = Components.Elements;
                var track = Elements.track;
                Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
                    passive: false
                }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
                    // Prevent dragging an image or anchor itself.
                    each(Elements.list.querySelectorAll('img, a'), function (elm) {
                        Splide.off('dragstart', elm).on('dragstart', function (e) {
                            e.preventDefault();
                        }, elm, {
                            passive: false
                        });
                    });
                }).on('mounted updated', function () {
                    _this.disabled = !Splide.options.drag;
                });
            }
        };
        /**
         * Called when the track starts to be dragged.
         *
         * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
         */

        function start(e) {
            if (!Drag.disabled && !isDragging) {
                // These prams are used to evaluate whether the slider should start moving.
                init(e);
            }
        }
        /**
         * Initialize parameters.
         *
         * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
         */


        function init(e) {
            startCoord = Track.toCoord(Track.position);
            startInfo = analyze(e, {});
            currentInfo = startInfo;
        }
        /**
         * Called while the track being dragged.
         *
         * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
         */


        function move(e) {
            if (startInfo) {
                currentInfo = analyze(e, startInfo);

                if (isDragging) {
                    if (e.cancelable) {
                        e.preventDefault();
                    }

                    if (!Splide.is(FADE)) {
                        var position = startCoord[axis] + currentInfo.offset[axis];
                        Track.translate(resist(position));
                    }
                } else {
                    if (shouldMove(currentInfo)) {
                        Splide.emit('drag', startInfo);
                        isDragging = true;
                        Track.cancel(); // These params are actual drag data.

                        init(e);
                    }
                }
            }
        }
        /**
         * Determine whether to start moving the track or not by drag angle.
         *
         * @param {Object} info - An information object.
         *
         * @return {boolean} - True if the track should be moved or false if not.
         */


        function shouldMove(_ref) {
            var offset = _ref.offset;

            if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
                return false;
            }

            var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

            if (isVertical) {
                angle = 90 - angle;
            }

            return angle < Splide.options.dragAngleThreshold;
        }
        /**
         * Resist dragging the track on the first/last page because there is no more.
         *
         * @param {number} position - A position being applied to the track.
         *
         * @return {Object} - Adjusted position.
         */


        function resist(position) {
            if (Splide.is(SLIDE)) {
                var sign = Track.sign;

                var _start = sign * Track.trim(Track.toPosition(0));

                var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

                position *= sign;

                if (position < _start) {
                    position = _start - FRICTION_REDUCER * Math.log(_start - position);
                } else if (position > _end) {
                    position = _end + FRICTION_REDUCER * Math.log(position - _end);
                }

                position *= sign;
            }

            return position;
        }
        /**
         * Called when dragging ends.
         */


        function end() {
            startInfo = null;

            if (isDragging) {
                Splide.emit('dragged', currentInfo);
                go(currentInfo);
                isDragging = false;
            }
        }
        /**
         * Go to the slide determined by the analyzed data.
         *
         * @param {Object} info - An info object.
         */


        function go(info) {
            var velocity = info.velocity[axis];
            var absV = drag_abs(velocity);

            if (absV > 0) {
                var options = Splide.options;
                var index = Splide.index;
                var sign = velocity < 0 ? -1 : 1;
                var destIndex = index;

                if (!Splide.is(FADE)) {
                    var destination = Track.position;

                    if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
                        destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
                    }

                    destIndex = Track.toIndex(destination);
                }
                /*
                 * Do not allow the track to go to a previous position if there is enough velocity.
                 * Always use the adjacent index for the fade mode.
                 */


                if (destIndex === index && absV > MIN_VELOCITY) {
                    destIndex = index + sign * Track.sign;
                }

                if (Splide.is(SLIDE)) {
                    destIndex = between(destIndex, 0, Controller.edgeIndex);
                }

                Controller.go(destIndex, options.isNavigation);
            }
        }
        /**
         * Analyze the given event object and return important information for handling swipe behavior.
         *
         * @param {Event}   e          - Touch or Mouse event object.
         * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
         *
         * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
         */


        function analyze(e, startInfo) {
            var timeStamp = e.timeStamp,
                touches = e.touches;

            var _ref2 = touches ? touches[0] : e,
                clientX = _ref2.clientX,
                clientY = _ref2.clientY;

            var _ref3 = startInfo.to || {},
                _ref3$x = _ref3.x,
                fromX = _ref3$x === void 0 ? clientX : _ref3$x,
                _ref3$y = _ref3.y,
                fromY = _ref3$y === void 0 ? clientY : _ref3$y;

            var startTime = startInfo.time || 0;
            var offset = {
                x: clientX - fromX,
                y: clientY - fromY
            };
            var duration = timeStamp - startTime;
            var velocity = {
                x: offset.x / duration,
                y: offset.y / duration
            };
            return {
                to: {
                    x: clientX,
                    y: clientY
                },
                offset: offset,
                time: timeStamp,
                velocity: velocity
            };
        }

        return Drag;
    });
    ;// CONCATENATED MODULE: ./src/js/components/click/index.js
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ var click = (function (Splide, Components) {
        /**
         * Whether click is disabled or not.
         *
         * @type {boolean}
         */
        var disabled = false;
        /**
         * Click component object.
         *
         * @type {Object}
         */

        var Click = {
            /**
             * Mount only when the drag is activated and the slide type is not "fade".
             *
             * @type {boolean}
             */
            required: Splide.options.drag,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                Splide.on('click', onClick, Components.Elements.track, {
                    capture: true
                }).on('drag', function () {
                    disabled = true;
                }).on('dragged', function () {
                    // Make sure the flag is released after the click event is fired.
                    setTimeout(function () {
                        disabled = false;
                    });
                });
            }
        };
        /**
         * Called when a track element is clicked.
         *
         * @param {Event} e - A click event.
         */

        function onClick(e) {
            if (disabled) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }

        return Click;
    });
    ;// CONCATENATED MODULE: ./src/js/components/autoplay/index.js
    /**
     * The component for playing slides automatically.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * Set of pause flags.
     */

    var PAUSE_FLAGS = {
        HOVER: 1,
        FOCUS: 2,
        MANUAL: 3
    };
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var autoplay = (function (Splide, Components, name) {
        /**
         * Store pause flags.
         *
         * @type {Array}
         */
        var flags = [];
        /**
         * Store an interval object.
         *
         * @type {Object};
         */

        var interval;
        /**
         * Keep the Elements component.
         *
         * @type {string}
         */

        var Elements = Components.Elements;
        /**
         * Autoplay component object.
         *
         * @type {Object}
         */

        var Autoplay = {
            /**
             * Required only when the autoplay option is true.
             *
             * @type {boolean}
             */
            required: Splide.options.autoplay,

            /**
             * Called when the component is mounted.
             * Note that autoplay starts only if there are slides over perPage number.
             */
            mount: function mount() {
                var options = Splide.options;

                if (Elements.slides.length > options.perPage) {
                    interval = createInterval(function () {
                        Splide.go('>');
                    }, options.interval, function (rate) {
                        Splide.emit(name + ":playing", rate);

                        if (Elements.bar) {
                            applyStyle(Elements.bar, {
                                width: rate * 100 + "%"
                            });
                        }
                    });
                    bind();
                    this.play();
                }
            },

            /**
             * Start autoplay.
             *
             * @param {number} flag - A pause flag to be removed.
             */
            play: function play(flag) {
                if (flag === void 0) {
                    flag = 0;
                }

                flags = flags.filter(function (f) {
                    return f !== flag;
                });

                if (!flags.length) {
                    Splide.emit(name + ":play");
                    interval.play(Splide.options.resetProgress);
                }
            },

            /**
             * Pause autoplay.
             * Note that Array.includes is not supported by IE.
             *
             * @param {number} flag - A pause flag to be added.
             */
            pause: function pause(flag) {
                if (flag === void 0) {
                    flag = 0;
                }

                interval.pause();

                if (flags.indexOf(flag) === -1) {
                    flags.push(flag);
                }

                if (flags.length === 1) {
                    Splide.emit(name + ":pause");
                }
            }
        };
        /**
         * Listen some events.
         */

        function bind() {
            var options = Splide.options;
            var sibling = Splide.sibling;
            var elms = [Splide.root, sibling ? sibling.root : null];

            if (options.pauseOnHover) {
                switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
                switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
            }

            if (options.pauseOnFocus) {
                switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
                switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
            }

            if (Elements.play) {
                Splide.on('click', function () {
                    // Need to be removed a focus flag at first.
                    Autoplay.play(PAUSE_FLAGS.FOCUS);
                    Autoplay.play(PAUSE_FLAGS.MANUAL);
                }, Elements.play);
            }

            if (Elements.pause) {
                switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
            }

            Splide.on('move refresh', function () {
                Autoplay.play();
            }) // Rewind the timer.
                .on('destroy', function () {
                    Autoplay.pause();
                });
        }
        /**
         * Play or pause on the given event.
         *
         * @param {Element[]} elms  - Elements.
         * @param {string}    event - An event name or names.
         * @param {number}    flag  - A pause flag defined on the top.
         * @param {boolean}   play  - Determine whether to play or pause.
         */


        function switchOn(elms, event, flag, play) {
            elms.forEach(function (elm) {
                Splide.on(event, function () {
                    Autoplay[play ? 'play' : 'pause'](flag);
                }, elm);
            });
        }

        return Autoplay;
    });
    ;// CONCATENATED MODULE: ./src/js/components/cover/index.js
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var cover = (function (Splide, Components) {
        /**
         * Hold options.
         *
         * @type {Object}
         */
        var options = Splide.options;
        /**
         * Cover component object.
         *
         * @type {Object}
         */

        var Cover = {
            /**
             * Required only when "cover" option is true.
             *
             * @type {boolean}
             */
            required: options.cover,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                Splide.on('lazyload:loaded', function (img) {
                    cover(img, false);
                });
                Splide.on('mounted updated refresh', function () {
                    return apply(false);
                });
            },

            /**
             * Destroy.
             */
            destroy: function destroy() {
                apply(true);
            }
        };
        /**
         * Apply "cover" to all slides.
         *
         * @param {boolean} uncover - If true, "cover" will be clear.
         */

        function apply(uncover) {
            Components.Elements.each(function (Slide) {
                var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

                if (img && img.src) {
                    cover(img, uncover);
                }
            });
        }
        /**
         * Set background image of the parent element, using source of the given image element.
         *
         * @param {Element} img     - An image element.
         * @param {boolean} uncover - Reset "cover".
         */


        function cover(img, uncover) {
            applyStyle(img.parentElement, {
                background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
            });
            applyStyle(img, {
                display: uncover ? '' : 'none'
            });
        }

        return Cover;
    });
    ;// CONCATENATED MODULE: ./src/js/components/arrows/path.js
    /**
     * Export vector path for an arrow.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Namespace definition for SVG element.
     *
     * @type {string}
     */
    var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
    /**
     * The arrow vector path.
     *
     * @type {number}
     */

    var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
    /**
     * SVG width and height.
     *
     * @type {number}
     */

    var SIZE = 40;
    ;// CONCATENATED MODULE: ./src/js/components/arrows/index.js
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var arrows = (function (Splide, Components, name) {
        /**
         * Previous arrow element.
         *
         * @type {Element|undefined}
         */
        var prev;
        /**
         * Next arrow element.
         *
         * @type {Element|undefined}
         */

        var next;
        /**
         * Store the class list.
         *
         * @type {Object}
         */

        var classes = Splide.classes;
        /**
         * Hold the root element.
         *
         * @type {Element}
         */

        var root = Splide.root;
        /**
         * Whether arrows are created programmatically or not.
         *
         * @type {boolean}
         */

        var created;
        /**
         * Hold the Elements component.
         *
         * @type {Object}
         */

        var Elements = Components.Elements;
        /**
         * Arrows component object.
         *
         * @type {Object}
         */

        var Arrows = {
            /**
             * Required when the arrows option is true.
             *
             * @type {boolean}
             */
            required: Splide.options.arrows,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                // Attempt to get arrows from HTML source.
                prev = Elements.arrows.prev;
                next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

                if ((!prev || !next) && Splide.options.arrows) {
                    prev = createArrow(true);
                    next = createArrow(false);
                    created = true;
                    appendArrows();
                }

                if (prev && next) {
                    bind();
                }

                this.arrows = {
                    prev: prev,
                    next: next
                };
            },

            /**
             * Called after all components are mounted.
             */
            mounted: function mounted() {
                Splide.emit(name + ":mounted", prev, next);
            },

            /**
             * Destroy.
             */
            destroy: function destroy() {
                removeAttribute([prev, next], 'disabled');

                if (created) {
                    dom_remove(prev.parentElement);
                }
            }
        };
        /**
         * Listen to native and custom events.
         */

        function bind() {
            Splide.on('click', function () {
                Splide.go('<');
            }, prev).on('click', function () {
                Splide.go('>');
            }, next).on('mounted move updated refresh', updateDisabled);
        }
        /**
         * Update a disabled attribute.
         */


        function updateDisabled() {
            var _Components$Controlle = Components.Controller,
                prevIndex = _Components$Controlle.prevIndex,
                nextIndex = _Components$Controlle.nextIndex;
            var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
            prev.disabled = prevIndex < 0 || !isEnough;
            next.disabled = nextIndex < 0 || !isEnough;
            Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
        }
        /**
         * Create a wrapper element and append arrows.
         */


        function appendArrows() {
            var wrapper = create('div', {
                "class": classes.arrows
            });
            append(wrapper, prev);
            append(wrapper, next);
            var slider = Elements.slider;
            var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
            before(wrapper, parent.firstElementChild);
        }
        /**
         * Create an arrow element.
         *
         * @param {boolean} prev - Determine to create a prev arrow or next arrow.
         *
         * @return {Element} - A created arrow element.
         */


        function createArrow(prev) {
            var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
            return domify(arrow);
        }

        return Arrows;
    });
    ;// CONCATENATED MODULE: ./src/js/components/pagination/index.js
    /**
     * The component for handling pagination
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * The event name for updating some attributes of pagination nodes.
     *
     * @type {string}
     */

    var ATTRIBUTES_UPDATE_EVENT = 'move.page';
    /**
     * The event name for recreating pagination.
     *
     * @type {string}
     */

    var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var pagination = (function (Splide, Components, name) {
        /**
         * Store all data for pagination.
         * - list: A list element.
         * - items: An array that contains objects(li, button, index, page).
         *
         * @type {Object}
         */
        var data = {};
        /**
         * Hold the Elements component.
         *
         * @type {Object}
         */

        var Elements = Components.Elements;
        /**
         * Pagination component object.
         *
         * @type {Object}
         */

        var Pagination = {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                var pagination = Splide.options.pagination;

                if (pagination) {
                    data = createPagination();
                    var slider = Elements.slider;
                    var parent = pagination === 'slider' && slider ? slider : Splide.root;
                    append(parent, data.list);
                    Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
                }

                Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
                    Pagination.destroy();

                    if (Splide.options.pagination) {
                        Pagination.mount();
                        Pagination.mounted();
                    }
                });
            },

            /**
             * Called after all components are mounted.
             */
            mounted: function mounted() {
                if (Splide.options.pagination) {
                    var index = Splide.index;
                    Splide.emit(name + ":mounted", data, this.getItem(index));
                    updateAttributes(index, -1);
                }
            },

            /**
             * Destroy the pagination.
             * Be aware that node.remove() is not supported by IE.
             */
            destroy: function destroy() {
                dom_remove(data.list);

                if (data.items) {
                    data.items.forEach(function (item) {
                        Splide.off('click', item.button);
                    });
                } // Do not remove UPDATE_EVENT to recreate pagination if needed.


                Splide.off(ATTRIBUTES_UPDATE_EVENT);
                data = {};
            },

            /**
             * Return an item by index.
             *
             * @param {number} index - A slide index.
             *
             * @return {Object|undefined} - An item object on success or undefined on failure.
             */
            getItem: function getItem(index) {
                return data.items[Components.Controller.toPage(index)];
            },

            /**
             * Return object containing pagination data.
             *
             * @return {Object} - Pagination data including list and items.
             */
            get data() {
                return data;
            }

        };
        /**
         * Update attributes.
         *
         * @param {number} index     - Active index.
         * @param {number} prevIndex - Prev index.
         */

        function updateAttributes(index, prevIndex) {
            var prev = Pagination.getItem(prevIndex);
            var curr = Pagination.getItem(index);
            var active = STATUS_CLASSES.active;

            if (prev) {
                removeClass(prev.button, active);
            }

            if (curr) {
                addClass(curr.button, active);
            }

            Splide.emit(name + ":updated", data, prev, curr);
        }
        /**
         * Create a wrapper and button elements.
         *
         * @return {Object} - An object contains all data.
         */


        function createPagination() {
            var options = Splide.options;
            var classes = Splide.classes;
            var list = create('ul', {
                "class": classes.pagination
            });
            var items = Elements.getSlides(false).filter(function (Slide) {
                return options.focus !== false || Slide.index % options.perPage === 0;
            }).map(function (Slide, page) {
                var li = create('li', {});
                var button = create('button', {
                    "class": classes.page,
                    type: 'button'
                });
                append(li, button);
                append(list, li);
                Splide.on('click', function () {
                    Splide.go(">" + page);
                }, button);
                return {
                    li: li,
                    button: button,
                    page: page,
                    Slides: Elements.getSlidesByPage(page)
                };
            });
            return {
                list: list,
                items: items
            };
        }

        return Pagination;
    });
    ;// CONCATENATED MODULE: ./src/js/components/lazyload/index.js
    /**
     * The component for loading slider images lazily.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */



    /**
     * The name for a data attribute of src.
     *
     * @type {string}
     */

    var SRC_DATA_NAME = 'data-splide-lazy';
    /**
     * The name for a data attribute of srcset.
     *
     * @type {string}
     */

    var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var lazyload = (function (Splide, Components, name) {
        /**
         * Next index for sequential loading.
         *
         * @type {number}
         */
        var nextIndex;
        /**
         * Store objects containing an img element and a Slide object.
         *
         * @type {Object[]}
         */

        var images;
        /**
         * Store the options.
         *
         * @type {Object}
         */

        var options = Splide.options;
        /**
         * Whether to load images sequentially or not.
         *
         * @type {boolean}
         */

        var isSequential = options.lazyLoad === 'sequential';
        /**
         * Lazyload component object.
         *
         * @type {Object}
         */

        var Lazyload = {
            /**
             * Mount only when the lazyload option is provided.
             *
             * @type {boolean}
             */
            required: options.lazyLoad,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                Splide.on('mounted refresh', function () {
                    init();
                    Components.Elements.each(function (Slide) {
                        each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
                            if (!img.src && !img.srcset) {
                                images.push({
                                    img: img,
                                    Slide: Slide
                                });
                                applyStyle(img, {
                                    display: 'none'
                                });
                            }
                        });
                    });

                    if (isSequential) {
                        loadNext();
                    }
                });

                if (!isSequential) {
                    Splide.on("mounted refresh moved." + name, check);
                }
            },

            /**
             * Destroy.
             */
            destroy: init
        };
        /**
         * Initialize parameters.
         */

        function init() {
            images = [];
            nextIndex = 0;
        }
        /**
         * Check how close each image is from the active slide and
         * determine whether to start loading or not, according to the distance.
         *
         * @param {number} index - Current index.
         */


        function check(index) {
            index = isNaN(index) ? Splide.index : index;
            images = images.filter(function (image) {
                if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
                    load(image.img, image.Slide);
                    return false;
                }

                return true;
            }); // Unbind if all images are loaded.

            if (!images[0]) {
                Splide.off("moved." + name);
            }
        }
        /**
         * Start loading an image.
         * Creating a clone of the image element since setting src attribute directly to it
         * often occurs 'hitch', blocking some other processes of a browser.
         *
         * @param {Element} img   - An image element.
         * @param {Object}  Slide - A Slide object.
         */


        function load(img, Slide) {
            addClass(Slide.slide, STATUS_CLASSES.loading);
            var spinner = create('span', {
                "class": Splide.classes.spinner
            });
            append(img.parentElement, spinner);

            img.onload = function () {
                loaded(img, spinner, Slide, false);
            };

            img.onerror = function () {
                loaded(img, spinner, Slide, true);
            };

            setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
            setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
        }
        /**
         * Start loading a next image in images array.
         */


        function loadNext() {
            if (nextIndex < images.length) {
                var image = images[nextIndex];
                load(image.img, image.Slide);
            }

            nextIndex++;
        }
        /**
         * Called just after the image was loaded or loading was aborted by some error.
         *
         * @param {Element} img     - An image element.
         * @param {Element} spinner - A spinner element.
         * @param {Object}  Slide   - A Slide object.
         * @param {boolean} error   - True if the image was loaded successfully or false on error.
         */


        function loaded(img, spinner, Slide, error) {
            removeClass(Slide.slide, STATUS_CLASSES.loading);

            if (!error) {
                dom_remove(spinner);
                applyStyle(img, {
                    display: ''
                });
                Splide.emit(name + ":loaded", img).emit('resize');
            }

            if (isSequential) {
                loadNext();
            }
        }

        return Lazyload;
    });
    ;// CONCATENATED MODULE: ./src/js/constants/a11y.js
    /**
     * Export aria attribute names.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

    /**
     * Attribute name for aria-current.
     *
     * @type {string}
     */
    var ARIA_CURRENRT = 'aria-current';
    /**
     * Attribute name for aria-control.
     *
     * @type {string}
     */

    var ARIA_CONTROLS = 'aria-controls';
    /**
     * Attribute name for aria-control.
     *
     * @type {string}
     */

    var ARIA_LABEL = 'aria-label';
    /**
     * Attribute name for aria-labelledby.
     *
     * @type {string}
     */

    var ARIA_LABELLEDBY = 'aria-labelledby';
    /**
     * Attribute name for aria-hidden.
     *
     * @type {string}
     */

    var ARIA_HIDDEN = 'aria-hidden';
    /**
     * Attribute name for tab-index.
     *
     * @type {string}
     */

    var TAB_INDEX = 'tabindex';
    ;// CONCATENATED MODULE: ./src/js/components/keyboard/index.js
    /**
     * The component for controlling slides via keyboard.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * Map a key to a slide control.
     *
     * @type {Object}
     */

    var KEY_MAP = {
        ltr: {
            ArrowLeft: '<',
            ArrowRight: '>',
            // For IE.
            Left: '<',
            Right: '>'
        },
        rtl: {
            ArrowLeft: '>',
            ArrowRight: '<',
            // For IE.
            Left: '>',
            Right: '<'
        },
        ttb: {
            ArrowUp: '<',
            ArrowDown: '>',
            // For IE.
            Up: '<',
            Down: '>'
        }
    };
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var keyboard = (function (Splide) {
        /**
         * Hold the target element.
         *
         * @type {Element|Document|undefined}
         */
        var target;
        return {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                Splide.on('mounted updated', function () {
                    var options = Splide.options;
                    var root = Splide.root;
                    var map = KEY_MAP[options.direction];
                    var keyboard = options.keyboard;

                    if (target) {
                        Splide.off('keydown', target);
                        removeAttribute(root, TAB_INDEX);
                    }

                    if (keyboard) {
                        if (keyboard === 'focused') {
                            target = root;
                            setAttribute(root, TAB_INDEX, 0);
                        } else {
                            target = document;
                        }

                        Splide.on('keydown', function (e) {
                            if (map[e.key]) {
                                Splide.go(map[e.key]);
                            }
                        }, target);
                    }
                });
            }
        };
    });
    ;// CONCATENATED MODULE: ./src/js/components/a11y/index.js
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var a11y = (function (Splide, Components) {
        /**
         * Hold a i18n object.
         *
         * @type {Object}
         */
        var i18n = Splide.i18n;
        /**
         * Hold the Elements component.
         *
         * @type {Object}
         */

        var Elements = Components.Elements;
        /**
         * All attributes related with A11y.
         *
         * @type {string[]}
         */

        var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
        /**
         * A11y component object.
         *
         * @type {Object}
         */

        var A11y = {
            /**
             * Required only when the accessibility option is true.
             *
             * @type {boolean}
             */
            required: Splide.options.accessibility,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                Splide.on('visible', function (Slide) {
                    updateSlide(Slide.slide, true);
                }).on('hidden', function (Slide) {
                    updateSlide(Slide.slide, false);
                }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
                    removeAttribute(Components.Clones.clones, allAttributes);
                });

                if (Splide.options.isNavigation) {
                    Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
                        updateNavigation(Slide, true);
                    }).on('inactive', function (Slide) {
                        updateNavigation(Slide, false);
                    });
                }

                initAutoplay();
            },

            /**
             * Destroy.
             */
            destroy: function destroy() {
                var Arrows = Components.Arrows;
                var arrows = Arrows ? Arrows.arrows : {};
                removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
            }
        };
        /**
         * Update slide attributes when it gets visible or hidden.
         *
         * @param {Element} slide   - A slide element.
         * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
         */

        function updateSlide(slide, visible) {
            setAttribute(slide, ARIA_HIDDEN, !visible);

            if (Splide.options.slideFocus) {
                setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
            }
        }
        /**
         * Initialize arrows if they are available.
         * Append screen reader elements and add aria-controls attribute.
         *
         * @param {Element} prev - Previous arrow element.
         * @param {Element} next - Next arrow element.
         */


        function initArrows(prev, next) {
            var controls = Elements.track.id;
            setAttribute(prev, ARIA_CONTROLS, controls);
            setAttribute(next, ARIA_CONTROLS, controls);
        }
        /**
         * Update arrow attributes.
         *
         * @param {Element} prev      - Previous arrow element.
         * @param {Element} next      - Next arrow element.
         * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
         * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
         */


        function updateArrows(prev, next, prevIndex, nextIndex) {
            var index = Splide.index;
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            setAttribute(prev, ARIA_LABEL, prevLabel);
            setAttribute(next, ARIA_LABEL, nextLabel);
        }
        /**
         * Initialize pagination if it's available.
         * Append a screen reader element and add aria-controls/label attribute to each item.
         *
         * @param {Object} data       - Data object containing all items.
         * @param {Object} activeItem - An initial active item.
         */


        function initPagination(data, activeItem) {
            if (activeItem) {
                setAttribute(activeItem.button, ARIA_CURRENRT, true);
            }

            data.items.forEach(function (item) {
                var options = Splide.options;
                var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
                var label = sprintf(text, item.page + 1);
                var button = item.button;
                var controls = item.Slides.map(function (Slide) {
                    return Slide.slide.id;
                });
                setAttribute(button, ARIA_CONTROLS, controls.join(' '));
                setAttribute(button, ARIA_LABEL, label);
            });
        }
        /**
         * Update pagination attributes.
         *
         * @param {Object}  data - Data object containing all items.
         * @param {Element} prev - A previous active element.
         * @param {Element} curr - A current active element.
         */


        function updatePagination(data, prev, curr) {
            if (prev) {
                removeAttribute(prev.button, ARIA_CURRENRT);
            }

            if (curr) {
                setAttribute(curr.button, ARIA_CURRENRT, true);
            }
        }
        /**
         * Initialize autoplay buttons.
         */


        function initAutoplay() {
            ['play', 'pause'].forEach(function (name) {
                var elm = Elements[name];

                if (elm) {
                    if (!isButton(elm)) {
                        setAttribute(elm, 'role', 'button');
                    }

                    setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
                    setAttribute(elm, ARIA_LABEL, i18n[name]);
                }
            });
        }
        /**
         * Initialize navigation slider.
         * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
         *
         * @param {Splide} main - A main Splide instance.
         */


        function initNavigation(main) {
            Elements.each(function (Slide) {
                var slide = Slide.slide;
                var realIndex = Slide.realIndex;

                if (!isButton(slide)) {
                    setAttribute(slide, 'role', 'button');
                }

                var slideIndex = realIndex > -1 ? realIndex : Slide.index;
                var label = sprintf(i18n.slideX, slideIndex + 1);
                var mainSlide = main.Components.Elements.getSlide(slideIndex);
                setAttribute(slide, ARIA_LABEL, label);

                if (mainSlide) {
                    setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
                }
            });
        }
        /**
         * Update navigation attributes.
         *
         * @param {Object}  Slide  - A target Slide object.
         * @param {boolean} active - True if the slide is active or false if inactive.
         */


        function updateNavigation(_ref, active) {
            var slide = _ref.slide;

            if (active) {
                setAttribute(slide, ARIA_CURRENRT, true);
            } else {
                removeAttribute(slide, ARIA_CURRENRT);
            }
        }
        /**
         * Check if the given element is button or not.
         *
         * @param {Element} elm - An element to be checked.
         *
         * @return {boolean} - True if the given element is button.
         */


        function isButton(elm) {
            return elm.tagName === 'BUTTON';
        }

        return A11y;
    });
    ;// CONCATENATED MODULE: ./src/js/components/sync/index.js
    /**
     * The component for synchronizing a slider with another.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * The event name for sync.
     *
     * @type {string}
     */

    var SYNC_EVENT = 'move.sync';
    /**
     * The event names for click navigation.
     * @type {string}
     */

    var CLICK_EVENTS = 'mouseup touchend';
    /**
     * The keys for triggering the navigation button.
     *
     * @type {String[]}
     */

    var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var sync = (function (Splide) {
        /**
         * Keep the sibling Splide instance.
         *
         * @type {Splide}
         */
        var sibling = Splide.sibling;
        /**
         * Whether the sibling slider is navigation or not.
         *
         * @type {Splide|boolean}
         */

        var isNavigation = sibling && sibling.options.isNavigation;
        /**
         * Layout component object.
         *
         * @type {Object}
         */

        var Sync = {
            /**
             * Required only when the sub slider is available.
             *
             * @type {boolean}
             */
            required: !!sibling,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                syncMain();
                syncSibling();

                if (isNavigation) {
                    bind();
                    Splide.on('refresh', function () {
                        setTimeout(function () {
                            bind();
                            sibling.emit('navigation:updated', Splide);
                        });
                    });
                }
            },

            /**
             * Called after all components are mounted.
             */
            mounted: function mounted() {
                if (isNavigation) {
                    sibling.emit('navigation:mounted', Splide);
                }
            }
        };
        /**
         * Listen the primary slider event to move secondary one.
         * Must unbind a handler at first to avoid infinite loop.
         */

        function syncMain() {
            Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
                sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
                syncSibling();
            });
        }
        /**
         * Listen the secondary slider event to move primary one.
         * Must unbind a handler at first to avoid infinite loop.
         */


        function syncSibling() {
            sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
                Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
                syncMain();
            });
        }
        /**
         * Listen some events on each slide.
         */


        function bind() {
            sibling.Components.Elements.each(function (_ref) {
                var slide = _ref.slide,
                    index = _ref.index;

                /*
                 * Listen mouseup and touchend events to handle click.
                 */
                Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
                    // Ignore a middle or right click.
                    if (!e.button || e.button === 0) {
                        moveSibling(index);
                    }
                }, slide);
                /*
                 * Subscribe keyup to handle Enter and Space key.
                 * Note that Array.includes is not supported by IE.
                 */

                Splide.off('keyup', slide).on('keyup', function (e) {
                    if (TRIGGER_KEYS.indexOf(e.key) > -1) {
                        e.preventDefault();
                        moveSibling(index);
                    }
                }, slide, {
                    passive: false
                });
            });
        }
        /**
         * Move the sibling to the given index.
         * Need to check "IDLE" status because slides can be moving by Drag component.
         *
         * @param {number} index - Target index.
         */


        function moveSibling(index) {
            if (Splide.State.is(IDLE)) {
                sibling.go(index);
            }
        }

        return Sync;
    });
    ;// CONCATENATED MODULE: ./src/js/components/breakpoints/index.js
    /**
     * The component for updating options according to a current window width.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * Interval time for throttle.
     *
     * @type {number}
     */

    var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ var breakpoints = (function (Splide) {
        /**
         * Store breakpoints.
         *
         * @type {Object|boolean}
         */
        var breakpoints = Splide.options.breakpoints;
        /**
         * The check function whose frequency of call is reduced.
         *
         * @type {Function}
         */

        var throttledCheck = throttle(check, THROTTLE);
        /**
         * Keep initial options.
         *
         * @type {Object}
         */

        var initialOptions;
        /**
         * An array containing objects of point and MediaQueryList.
         *
         * @type {Object[]}
         */

        var map = [];
        /**
         * Hold the previous breakpoint.
         *
         * @type {number|undefined}
         */

        var prevPoint;
        /**
         * Breakpoints component object.
         *
         * @type {Object}
         */

        var Breakpoints = {
            /**
             * Required only when the breakpoints definition is provided and browser supports matchMedia.
             *
             * @type {boolean}
             */
            required: breakpoints && matchMedia,

            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
                map = Object.keys(breakpoints).sort(function (n, m) {
                    return +n - +m;
                }).map(function (point) {
                    return {
                        point: point,
                        mql: matchMedia("(max-width:" + point + "px)")
                    };
                });
                /*
                 * To keep monitoring resize event after destruction without "completely",
                 * use native addEventListener instead of Splide.on.
                 */

                this.destroy(true);
                addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

                initialOptions = Splide.options;
                check();
            },

            /**
             * Destroy.
             *
             * @param {boolean} completely - Whether to destroy Splide completely.
             */
            destroy: function destroy(completely) {
                if (completely) {
                    removeEventListener('resize', throttledCheck);
                }
            }
        };
        /**
         * Check the breakpoint.
         */

        function check() {
            var point = getPoint();

            if (point !== prevPoint) {
                prevPoint = point;
                var State = Splide.State;
                var options = breakpoints[point] || initialOptions;
                var destroy = options.destroy;

                if (destroy) {
                    Splide.options = initialOptions;
                    Splide.destroy(destroy === 'completely');
                } else {
                    if (State.is(DESTROYED)) {
                        Splide.mount();
                    }

                    Splide.options = options;
                }
            }
        }
        /**
         * Return the breakpoint matching current window width.
         * Note that Array.prototype.find is not supported by IE.
         *
         * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
         */


        function getPoint() {
            var item = map.filter(function (item) {
                return item.mql.matches;
            })[0];
            return item ? item.point : -1;
        }

        return Breakpoints;
    });
    ;// CONCATENATED MODULE: ./src/js/components/index.js
    /**
     * Export components.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */

















    var COMPLETE = {
        Options: options,
        Breakpoints: breakpoints,
        Controller: controller,
        Elements: components_elements,
        Track: track,
        Clones: clones,
        Layout: layout,
        Drag: drag,
        Click: click,
        Autoplay: autoplay,
        Cover: cover,
        Arrows: arrows,
        Pagination: pagination,
        LazyLoad: lazyload,
        Keyboard: keyboard,
        Sync: sync,
        A11y: a11y
    };
    var LIGHT = {
        Options: options,
        Controller: controller,
        Elements: components_elements,
        Track: track,
        Clones: clones,
        Layout: layout,
        Drag: drag,
        Click: click,
        Arrows: arrows,
        Pagination: pagination,
        A11y: a11y
    };
    ;// CONCATENATED MODULE: ./build/complete/complete.js
    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    /**
     * Export "Splide" class for frontend with full components.
     *
     * @author    Naotoshi Fujita
     * @copyright Naotoshi Fujita. All rights reserved.
     */


    /**
     * Export Splide with all components.
     */

    var complete_Splide = /*#__PURE__*/function (_Core) {
        _inheritsLoose(Splide, _Core);

        function Splide(root, options) {
            return _Core.call(this, root, options, COMPLETE) || this;
        }

        return Splide;
    }(Splide); // Register the class as a global variable for non-ES6 environment.

    window.Splide = complete_Splide;
    /******/
})()
    ;
/*! UIkit 3.6.18 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('uikit', factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIkit = factory());
}(this, (function () { 'use strict';

    var objPrototype = Object.prototype;
    var hasOwnProperty = objPrototype.hasOwnProperty;

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    var hyphenateRe = /\B([A-Z])/g;

    var hyphenate = memoize(function (str) { return str
        .replace(hyphenateRe, '-$1')
        .toLowerCase(); }
    );

    var camelizeRe = /-(\w)/g;

    var camelize = memoize(function (str) { return str.replace(camelizeRe, toUpper); }
    );

    var ucfirst = memoize(function (str) { return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''; }
    );

    function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
    }

    var strPrototype = String.prototype;
    var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

    function startsWith(str, search) {
        return startsWithFn.call(str, search);
    }

    var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

    function endsWith(str, search) {
        return endsWithFn.call(str, search);
    }

    var arrPrototype = Array.prototype;

    var includesFn = function (search, i) { return !!~this.indexOf(search, i); };
    var includesStr = strPrototype.includes || includesFn;
    var includesArray = arrPrototype.includes || includesFn;

    function includes(obj, search) {
        return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
    }

    var findIndexFn = arrPrototype.findIndex || function (predicate) {
        var arguments$1 = arguments;

        for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };

    function findIndex(array, predicate) {
        return findIndexFn.call(array, predicate);
    }

    var isArray = Array.isArray;

    function isFunction(obj) {
        return typeof obj === 'function';
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    var toString = objPrototype.toString;
    function isPlainObject(obj) {
        return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
        return nodeType(obj) === 9;
    }

    function isNode(obj) {
        return nodeType(obj) >= 1;
    }

    function isElement(obj) {
        return nodeType(obj) === 1;
    }

    function nodeType(obj) {
        return !isWindow(obj) && isObject(obj) && obj.nodeType;
    }

    function isBoolean(value) {
        return typeof value === 'boolean';
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function isNumber(value) {
        return typeof value === 'number';
    }

    function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
        return !(isArray(obj)
            ? obj.length
            : isObject(obj)
                ? Object.keys(obj).length
                : false
        );
    }

    function isUndefined(value) {
        return value === void 0;
    }

    function toBoolean(value) {
        return isBoolean(value)
            ? value
            : value === 'true' || value === '1' || value === ''
                ? true
                : value === 'false' || value === '0'
                    ? false
                    : value;
    }

    function toNumber(value) {
        var number = Number(value);
        return !isNaN(number) ? number : false;
    }

    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    var toArray = Array.from || (function (value) { return arrPrototype.slice.call(value); });

    function toNode(element) {
        return toNodes(element)[0];
    }

    function toNodes(element) {
        return element && (isNode(element) ? [element] : toArray(element).filter(isNode)) || [];
    }

    function toWindow(element) {
        if (isWindow(element)) {
            return element;
        }

        element = toNode(element);

        return element
            ? (isDocument(element)
                ? element
                : element.ownerDocument
            ).defaultView
            : window;
    }

    function toMs(time) {
        return !time
            ? 0
            : endsWith(time, 'ms')
                ? toFloat(time)
                : toFloat(time) * 1000;
    }

    function isEqual(value, other) {
        return value === other
            || isObject(value)
            && isObject(other)
            && Object.keys(value).length === Object.keys(other).length
            && each(value, function (val, key) { return val === other[key]; });
    }

    function swap(value, a, b) {
        return value.replace(
            new RegExp((a + "|" + b), 'g'),
            function (match) { return match === a ? b : a; }
        );
    }

    var assign = Object.assign || function (target) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        target = Object(target);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source !== null) {
                for (var key in source) {
                    if (hasOwn(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };

    function last(array) {
        return array[array.length - 1];
    }

    function each(obj, cb) {
        for (var key in obj) {
            if (false === cb(obj[key], key)) {
                return false;
            }
        }
        return true;
    }

    function sortBy(array, prop) {
        return array.slice().sort(function (ref, ref$1) {
                var propA = ref[prop]; if ( propA === void 0 ) propA = 0;
                var propB = ref$1[prop]; if ( propB === void 0 ) propB = 0;

                return propA > propB
                ? 1
                : propB > propA
                    ? -1
                    : 0;
        }
        );
    }

    function uniqueBy(array, prop) {
        var seen = new Set();
        return array.filter(function (ref) {
            var check = ref[prop];

            return seen.has(check)
            ? false
            : seen.add(check) || true;
        } // IE 11 does not return the Set object
        );
    }

    function clamp(number, min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 1;

        return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect() {
        var rects = [], len = arguments.length;
        while ( len-- ) rects[ len ] = arguments[ len ];

        return [['bottom', 'top'], ['right', 'left']].every(function (ref) {
                var minProp = ref[0];
                var maxProp = ref[1];

                return Math.min.apply(Math, rects.map(function (ref) {
                var min = ref[minProp];

                return min;
                })) - Math.max.apply(Math, rects.map(function (ref) {
                var max = ref[maxProp];

                return max;
                })) > 0;
        }
        );
    }

    function pointInRect(point, rect) {
        return point.x <= rect.right &&
            point.x >= rect.left &&
            point.y <= rect.bottom &&
            point.y >= rect.top;
    }

    var Dimensions = {

        ratio: function(dimensions, prop, value) {
            var obj;


            var aProp = prop === 'width' ? 'height' : 'width';

            return ( obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj );
        },

        contain: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = assign({}, dimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        },

        cover: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = this.contain(dimensions, maxDimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        }

    };

    function getIndex(i, elements, current, finite) {
        if ( current === void 0 ) current = 0;
        if ( finite === void 0 ) finite = false;


        elements = toNodes(elements);

        var length = elements.length;

        i = isNumeric(i)
            ? toNumber(i)
            : i === 'next'
                ? current + 1
                : i === 'previous'
                    ? current - 1
                    : elements.indexOf(toNode(i));

        if (finite) {
            return clamp(i, 0, length - 1);
        }

        i %= length;

        return i < 0 ? i + length : i;
    }

    function memoize(fn) {
        var cache = Object.create(null);
        return function (key) { return cache[key] || (cache[key] = fn(key)); };
    }

    function attr(element, name, value) {

        if (isObject(name)) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
            return;
        }

        if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
        } else {
            toNodes(element).forEach(function (element) {

                if (isFunction(value)) {
                    value = value.call(element, attr(element, name));
                }

                if (value === null) {
                    removeAttr(element, name);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }

    }

    function hasAttr(element, name) {
        return toNodes(element).some(function (element) { return element.hasAttribute(name); });
    }

    function removeAttr(element, name) {
        element = toNodes(element);
        name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.hasAttribute(name) && element.removeAttribute(name); }
            ); }
        );
    }

    function data(element, attribute) {
        for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
                return attr(element, attrs[i]);
            }
        }
    }

    /* global DocumentTouch */

    var inBrowser = typeof window !== 'undefined';
    var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
    var isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';

    var hasTouchEvents = inBrowser && 'ontouchstart' in window;
    var hasPointerEvents = inBrowser && window.PointerEvent;
    var hasTouch = inBrowser && (hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.maxTouchPoints); // IE >=11

    var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
    var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
    var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
    var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
    var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
    var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    var voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    function isVoidElement(element) {
        return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
    }

    function isVisible(element) {
        return toNodes(element).some(function (element) { return element.offsetWidth || element.offsetHeight || element.getClientRects().length; });
    }

    var selInput = 'input,select,textarea,button';
    function isInput(element) {
        return toNodes(element).some(function (element) { return matches(element, selInput); });
    }

    function parent(element) {
        element = toNode(element);
        return element && isElement(element.parentNode) && element.parentNode;
    }

    function filter(element, selector) {
        return toNodes(element).filter(function (element) { return matches(element, selector); });
    }

    var elProto = inBrowser ? Element.prototype : {};
    var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;

    function matches(element, selector) {
        return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
    }

    var closestFn = elProto.closest || function (selector) {
        var ancestor = this;

        do {

            if (matches(ancestor, selector)) {
                return ancestor;
            }

        } while ((ancestor = parent(ancestor)));
    };

    function closest(element, selector) {

        if (startsWith(selector, '>')) {
            selector = selector.slice(1);
        }

        return isElement(element)
            ? closestFn.call(element, selector)
            : toNodes(element).map(function (element) { return closest(element, selector); }).filter(Boolean);
    }

    function within(element, selector) {
        return !isString(selector)
            ? element === selector || (isDocument(selector)
                ? selector.documentElement
                : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
            : matches(element, selector) || !!closest(element, selector);
    }

    function parents(element, selector) {
        var elements = [];

        while ((element = parent(element))) {
            if (!selector || matches(element, selector)) {
                elements.push(element);
            }
        }

        return elements;
    }

    function children(element, selector) {
        element = toNode(element);
        var children = element ? toNodes(element.children) : [];
        return selector ? filter(children, selector) : children;
    }

    function index(element, ref) {
        return ref
            ? toNodes(element).indexOf(toNode(ref))
            : children(parent(element)).indexOf(element);
    }

    function query(selector, context) {
        return toNode(selector) || find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
        var nodes = toNodes(selector);
        return nodes.length && nodes || findAll(selector, getContext(selector, context));
    }

    function getContext(selector, context) {
        if ( context === void 0 ) context = document;

        return isString(selector) && isContextSelector(selector) || isDocument(context)
            ? context
            : context.ownerDocument;
    }

    function find(selector, context) {
        return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
        return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    function _query(selector, context, queryFn) {
        if ( context === void 0 ) context = document;


        if (!selector || !isString(selector)) {
            return null;
        }

        selector = selector.replace(contextSanitizeRe, '$1 *');

        if (isContextSelector(selector)) {

            selector = splitSelector(selector).map(function (selector, i) {

                var ctx = context;

                if (selector[0] === '!') {

                    var selectors = selector.substr(1).trim().split(' ');
                    ctx = closest(parent(context), selectors[0]);
                    selector = selectors.slice(1).join(' ').trim();

                }

                if (selector[0] === '-') {

                    var selectors$1 = selector.substr(1).trim().split(' ');
                    var prev = (ctx || context).previousElementSibling;
                    ctx = matches(prev, selector.substr(1)) ? prev : null;
                    selector = selectors$1.slice(1).join(' ');

                }

                if (!ctx) {
                    return null;
                }

                return ((domPath(ctx)) + " " + selector);

            }).filter(Boolean).join(',');

            context = document;

        }

        try {

            return context[queryFn](selector);

        } catch (e) {

            return null;

        }

    }

    var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    var isContextSelector = memoize(function (selector) { return selector.match(contextSelectorRe); });

    var selectorRe = /.*?[^\\](?:,|$)/g;

    var splitSelector = memoize(function (selector) { return selector.match(selectorRe).map(function (selector) { return selector.replace(/,$/, '').trim(); }
        ); }
    );

    function domPath(element) {
        var names = [];
        while (element.parentNode) {
            if (element.id) {
                names.unshift(("#" + (escape(element.id))));
                break;
            } else {
                var tagName = element.tagName;
                if (tagName !== 'HTML') {
                    tagName += ":nth-child(" + (index(element) + 1) + ")";
                }
                names.unshift(tagName);
                element = element.parentNode;
            }
        }
        return names.join(' > ');
    }

    var escapeFn = inBrowser && window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
    function escape(css) {
        return isString(css) ? escapeFn.call(null, css) : '';
    }

    function on() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var targets = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];

        targets = toEventTargets(targets);

        if (listener.length > 1) {
            listener = detail(listener);
        }

        if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
        }

        if (selector) {
            listener = delegate(selector, listener);
        }

        useCapture = useCaptureFilter(useCapture);

        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.addEventListener(type, listener, useCapture); }
            ); }
        );
        return function () { return off(targets, type, listener, useCapture); };
    }

    function off(targets, type, listener, useCapture) {
        if ( useCapture === void 0 ) useCapture = false;

        useCapture = useCaptureFilter(useCapture);
        targets = toEventTargets(targets);
        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.removeEventListener(type, listener, useCapture); }
            ); }
        );
    }

    function once() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var element = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];
        var condition = ref[5];
        var off = on(element, type, selector, function (e) {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

        return off;
    }

    function trigger(targets, event, detail) {
        return toEventTargets(targets).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
            , true);
    }

    function createEvent(e, bubbles, cancelable, detail) {
        if ( bubbles === void 0 ) bubbles = true;
        if ( cancelable === void 0 ) cancelable = false;

        if (isString(e)) {
            var event = document.createEvent('CustomEvent'); // IE 11
            event.initCustomEvent(e, bubbles, cancelable, detail);
            e = event;
        }

        return e;
    }

    function getArgs(args) {
        if (isFunction(args[2])) {
            args.splice(2, 0, false);
        }
        return args;
    }

    function delegate(selector, listener) {
        var this$1 = this;

        return function (e) {

            var current = selector[0] === '>'
                ? findAll(selector, e.currentTarget).reverse().filter(function (element) { return within(e.target, element); })[0]
                : closest(e.target, selector);

            if (current) {
                e.current = current;
                listener.call(this$1, e);
            }

        };
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [ e ].concat( e.detail )) : listener(e); };
    }

    function selfFilter(listener) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return listener.call(null, e);
            }
        };
    }

    function useCaptureFilter(options) {
        return options && isIE && !isBoolean(options)
            ? !!options.capture
            : options;
    }

    function isEventTarget(target) {
        return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
        return isArray(target)
                ? target.map(toEventTarget).filter(Boolean)
                : isString(target)
                    ? findAll(target)
                    : isEventTarget(target)
                        ? [target]
                        : toNodes(target);
    }

    function isTouch(e) {
        return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e) {
        var touches = e.touches;
        var changedTouches = e.changedTouches;
        var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
        var x = ref.clientX;
        var y = ref.clientY;

        return {x: x, y: y};
    }

    /* global setImmediate */

    var Promise = inBrowser && window.Promise || PromiseFn;

    var Deferred = function() {
        var this$1 = this;

        this.promise = new Promise(function (resolve, reject) {
            this$1.reject = reject;
            this$1.resolve = resolve;
        });
    };

    /**
     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
     */

    var RESOLVED = 0;
    var REJECTED = 1;
    var PENDING = 2;

    var async = inBrowser && window.setImmediate || setTimeout;

    function PromiseFn(executor) {

        this.state = PENDING;
        this.value = undefined;
        this.deferred = [];

        var promise = this;

        try {
            executor(
                function (x) {
                    promise.resolve(x);
                },
                function (r) {
                    promise.reject(r);
                }
            );
        } catch (e) {
            promise.reject(e);
        }
    }

    PromiseFn.reject = function (r) {
        return new PromiseFn(function (resolve, reject) {
            reject(r);
        });
    };

    PromiseFn.resolve = function (x) {
        return new PromiseFn(function (resolve, reject) {
            resolve(x);
        });
    };

    PromiseFn.all = function all(iterable) {
        return new PromiseFn(function (resolve, reject) {
            var result = [];
            var count = 0;

            if (iterable.length === 0) {
                resolve(result);
            }

            function resolver(i) {
                return function (x) {
                    result[i] = x;
                    count += 1;

                    if (count === iterable.length) {
                        resolve(result);
                    }
                };
            }

            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
            }
        });
    };

    PromiseFn.race = function race(iterable) {
        return new PromiseFn(function (resolve, reject) {
            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolve, reject);
            }
        });
    };

    var p = PromiseFn.prototype;

    p.resolve = function resolve(x) {
        var promise = this;

        if (promise.state === PENDING) {
            if (x === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            var called = false;

            try {
                var then = x && x.then;

                if (x !== null && isObject(x) && isFunction(then)) {
                    then.call(
                        x,
                        function (x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;
                        },
                        function (r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        }
                    );
                    return;
                }
            } catch (e) {
                if (!called) {
                    promise.reject(e);
                }
                return;
            }

            promise.state = RESOLVED;
            promise.value = x;
            promise.notify();
        }
    };

    p.reject = function reject(reason) {
        var promise = this;

        if (promise.state === PENDING) {
            if (reason === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            promise.state = REJECTED;
            promise.value = reason;
            promise.notify();
        }
    };

    p.notify = function notify() {
        var this$1 = this;

        async(function () {
            if (this$1.state !== PENDING) {
                while (this$1.deferred.length) {
                    var ref = this$1.deferred.shift();
                    var onResolved = ref[0];
                    var onRejected = ref[1];
                    var resolve = ref[2];
                    var reject = ref[3];

                    try {
                        if (this$1.state === RESOLVED) {
                            if (isFunction(onResolved)) {
                                resolve(onResolved.call(undefined, this$1.value));
                            } else {
                                resolve(this$1.value);
                            }
                        } else if (this$1.state === REJECTED) {
                            if (isFunction(onRejected)) {
                                resolve(onRejected.call(undefined, this$1.value));
                            } else {
                                reject(this$1.value);
                            }
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }
        });
    };

    p.then = function then(onResolved, onRejected) {
        var this$1 = this;

        return new PromiseFn(function (resolve, reject) {
            this$1.deferred.push([onResolved, onRejected, resolve, reject]);
            this$1.notify();
        });
    };

    p.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };

    function ajax(url, options) {

        var env = assign({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ''
        }, options);

        return Promise.resolve()
            .then(function () { return env.beforeSend(env); })
            .then(function () { return send(url, env); });
    }

    function send(url, env) {
        return new Promise(function (resolve, reject) {
            var xhr = env.xhr;

            for (var prop in env) {
                if (prop in xhr) {
                    try {

                        xhr[prop] = env[prop];

                    } catch (e) {}
                }
            }

            xhr.open(env.method.toUpperCase(), url);

            for (var header in env.headers) {
                xhr.setRequestHeader(header, env.headers[header]);
            }

            on(xhr, 'load', function () {

                if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {

                    // IE 11 does not support responseType 'json'
                    if (env.responseType === 'json' && isString(xhr.response)) {
                        xhr = assign(copyXhr(xhr), {response: JSON.parse(xhr.response)});
                    }

                    resolve(xhr);

                } else {
                    reject(assign(Error(xhr.statusText), {
                        xhr: xhr,
                        status: xhr.status
                    }));
                }

            });

            on(xhr, 'error', function () { return reject(assign(Error('Network Error'), {xhr: xhr})); });
            on(xhr, 'timeout', function () { return reject(assign(Error('Network Timeout'), {xhr: xhr})); });

            xhr.send(env.data);
        });
    }

    function getImage(src, srcset, sizes) {

        return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onerror = function (e) { return reject(e); };
            img.onload = function () { return resolve(img); };

            sizes && (img.sizes = sizes);
            srcset && (img.srcset = srcset);
            img.src = src;
        });

    }

    function copyXhr(source) {
        var target = {};
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }

    function ready(fn) {

        if (document.readyState !== 'loading') {
            fn();
            return;
        }

        var unbind = on(document, 'DOMContentLoaded', function () {
            unbind();
            fn();
        });
    }

    function empty(element) {
        element = $(element);
        element.innerHTML = '';
        return element;
    }

    function html(parent, html) {
        parent = $(parent);
        return isUndefined(html)
            ? parent.innerHTML
            : append(parent.hasChildNodes() ? empty(parent) : parent, html);
    }

    function prepend(parent, element) {

        parent = $(parent);

        if (!parent.hasChildNodes()) {
            return append(parent, element);
        } else {
            return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); });
        }
    }

    function append(parent, element) {
        parent = $(parent);
        return insertNodes(element, function (element) { return parent.appendChild(element); });
    }

    function before(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); });
    }

    function after(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.nextSibling
            ? before(ref.nextSibling, element)
            : append(ref.parentNode, element); }
        );
    }

    function insertNodes(element, fn) {
        element = isString(element) ? fragment(element) : element;
        return element
            ? 'length' in element
                ? toNodes(element).map(fn)
                : fn(element)
            : null;
    }

    function remove(element) {
        toNodes(element).forEach(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
    }

    function wrapAll(element, structure) {

        structure = toNode(before(element, structure));

        while (structure.firstChild) {
            structure = structure.firstChild;
        }

        append(structure, element);

        return structure;
    }

    function wrapInner(element, structure) {
        return toNodes(toNodes(element).map(function (element) { return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure); }
        ));
    }

    function unwrap(element) {
        toNodes(element)
            .map(parent)
            .filter(function (value, index, self) { return self.indexOf(value) === index; })
            .forEach(function (parent) {
                before(parent, parent.childNodes);
                remove(parent);
            });
    }

    var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {

        var matches = singleTagRe.exec(html);
        if (matches) {
            return document.createElement(matches[1]);
        }

        var container = document.createElement('div');
        if (fragmentRe.test(html)) {
            container.insertAdjacentHTML('beforeend', html.trim());
        } else {
            container.textContent = html;
        }

        return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;

    }

    function apply(node, fn) {

        if (!isElement(node)) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            var next = node.nextElementSibling;
            apply(node, fn);
            node = next;
        }
    }

    function $(selector, context) {
        return !isString(selector)
            ? toNode(selector)
            : isHtml(selector)
                ? toNode(fragment(selector))
                : find(selector, context);
    }

    function $$(selector, context) {
        return !isString(selector)
            ? toNodes(selector)
            : isHtml(selector)
                ? toNodes(fragment(selector))
                : findAll(selector, context);
    }

    function isHtml(str) {
        return str[0] === '<' || str.match(/^\s*</);
    }

    function addClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'add');
    }

    function removeClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'remove');
    }

    function removeClasses(element, cls) {
        attr(element, 'class', function (value) { return (value || '').replace(new RegExp(("\\b" + cls + "\\b"), 'g'), ''); });
    }

    function replaceClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        args[0] && removeClass(element, args[0]);
        args[1] && addClass(element, args[1]);
    }

    function hasClass(element, cls) {
        var assign;

        (assign = getClasses(cls), cls = assign[0]);
        var nodes = toNodes(element);
        for (var n = 0; n < nodes.length; n++) {
            if (cls && nodes[n].classList.contains(cls)) {
                return true;
            }
        }
        return false;
    }

    function toggleClass(element, cls, force) {

        cls = getClasses(cls);

        var nodes = toNodes(element);
        for (var n = 0; n < nodes.length; n++) {
            var list = nodes[n].classList;
            for (var i = 0; i < cls.length; i++) {
                if (isUndefined(force)) {
                    list.toggle(cls[i]);
                } else if (supports.Force) {
                    list.toggle(cls[i], !!force);
                } else {
                    list[force ? 'add' : 'remove'](cls[i]);
                }
            }
        }
    }

    function apply$1(element, args, fn) {
        var ref;


        args = args.reduce(function (args, arg) { return args.concat(getClasses(arg)); }, []);

        var nodes = toNodes(element);
        var loop = function ( n ) {
            if (supports.Multiple) {
                (ref = nodes[n].classList)[fn].apply(ref, args);
            } else {
                args.forEach(function (cls) { return nodes[n].classList[fn](cls); });
            }
        };

        for (var n = 0; n < nodes.length; n++) loop( n );
    }

    function getClasses(str) {
        str = String(str);
        return (~str.indexOf(' ') ? str.split(' ') : [str]).filter(Boolean);
    }

    // IE 11
    var supports = {

        get Multiple() {
            return this.get('Multiple');
        },

        get Force() {
            return this.get('Force');
        },

        get: function(key) {

            var ref = document.createElement('_');
            var classList = ref.classList;
            classList.add('a', 'b');
            classList.toggle('c', false);
            supports = {
                Multiple: classList.contains('b'),
                Force: !classList.contains('c')
            };

            return supports[key];
        }

    };

    var cssNumber = {
        'animation-iteration-count': true,
        'column-count': true,
        'fill-opacity': true,
        'flex-grow': true,
        'flex-shrink': true,
        'font-weight': true,
        'line-height': true,
        'opacity': true,
        'order': true,
        'orphans': true,
        'stroke-dasharray': true,
        'stroke-dashoffset': true,
        'widows': true,
        'z-index': true,
        'zoom': true
    };

    function css(element, property, value, priority) {
        if ( priority === void 0 ) priority = '';


        return toNodes(element).map(function (element) {

            if (isString(property)) {

                property = propName(property);

                if (isUndefined(value)) {
                    return getStyle(element, property);
                } else if (!value && !isNumber(value)) {
                    element.style.removeProperty(property);
                } else {
                    element.style.setProperty(property, isNumeric(value) && !cssNumber[property] ? (value + "px") : value, priority);
                }

            } else if (isArray(property)) {

                var styles = getStyles(element);

                return property.reduce(function (props, property) {
                    props[property] = styles[propName(property)];
                    return props;
                }, {});

            } else if (isObject(property)) {
                priority = value;
                each(property, function (value, property) { return css(element, property, value, priority); });
            }

            return element;

        })[0];

    }

    function getStyles(element, pseudoElt) {
        return toWindow(element).getComputedStyle(element, pseudoElt);
    }

    function getStyle(element, property, pseudoElt) {
        return getStyles(element, pseudoElt)[property];
    }

    var parseCssVar = memoize(function (name) {
        /* usage in css: .uk-name:before { content:"xyz" } */

        var element = append(document.documentElement, document.createElement('div'));

        addClass(element, ("uk-" + name));

        name = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

        remove(element);

        return name;
    });

    function getCssVar(name) {
        return !isIE
            ? getStyles(document.documentElement).getPropertyValue(("--uk-" + name))
            : parseCssVar(name);
    }

    // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
    var propName = memoize(function (name) { return vendorPropName(name); });

    var cssPrefixes = ['webkit', 'moz', 'ms'];

    function vendorPropName(name) {

        name = hyphenate(name);

        var ref = document.documentElement;
        var style = ref.style;

        if (name in style) {
            return name;
        }

        var i = cssPrefixes.length, prefixedName;

        while (i--) {
            prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
            if (prefixedName in style) {
                return prefixedName;
            }
        }
    }

    function transition(element, props, duration, timing) {
        if ( duration === void 0 ) duration = 400;
        if ( timing === void 0 ) timing = 'linear';


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                for (var name in props) {
                    var value = css(element, name);
                    if (value === '') {
                        css(element, name, value);
                    }
                }

                var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);

                once(element, 'transitionend transitioncanceled', function (ref) {
                    var type = ref.type;

                    clearTimeout(timer);
                    removeClass(element, 'uk-transition');
                    css(element, {
                        transitionProperty: '',
                        transitionDuration: '',
                        transitionTimingFunction: ''
                    });
                    type === 'transitioncanceled' ? reject() : resolve(element);
                }, {self: true});

                addClass(element, 'uk-transition');
                css(element, assign({
                    transitionProperty: Object.keys(props).map(propName).join(','),
                    transitionDuration: (duration + "ms"),
                    transitionTimingFunction: timing
                }, props));

            }); }
        ));

    }

    var Transition = {

        start: transition,

        stop: function(element) {
            trigger(element, 'transitionend');
            return Promise.resolve();
        },

        cancel: function(element) {
            trigger(element, 'transitioncanceled');
        },

        inProgress: function(element) {
            return hasClass(element, 'uk-transition');
        }

    };

    var animationPrefix = 'uk-animation-';

    function animate(element, animation, duration, origin, out) {
        if ( duration === void 0 ) duration = 200;


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                trigger(element, 'animationcanceled');
                var timer = setTimeout(function () { return trigger(element, 'animationend'); }, duration);

                once(element, 'animationend animationcanceled', function (ref) {
                    var type = ref.type;


                    clearTimeout(timer);

                    type === 'animationcanceled' ? reject() : resolve(element);

                    css(element, 'animationDuration', '');
                    removeClasses(element, (animationPrefix + "\\S*"));

                }, {self: true});

                css(element, 'animationDuration', (duration + "ms"));
                addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

                if (startsWith(animation, animationPrefix)) {
                    origin && addClass(element, ("uk-transform-origin-" + origin));
                    out && addClass(element, (animationPrefix + "reverse"));
                }

            }); }
        ));

    }

    var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
    var Animation = {

        in: animate,

        out: function(element, animation, duration, origin) {
            return animate(element, animation, duration, origin, true);
        },

        inProgress: function(element) {
            return inProgress.test(attr(element, 'class'));
        },

        cancel: function(element) {
            trigger(element, 'animationcanceled');
        }

    };

    var dirs = {
        width: ['left', 'right'],
        height: ['top', 'bottom']
    };

    function dimensions(element) {

        var rect = isElement(element)
            ? toNode(element).getBoundingClientRect()
            : {height: height(element), width: width(element), top: 0, left: 0};

        return {
            height: rect.height,
            width: rect.width,
            top: rect.top,
            left: rect.left,
            bottom: rect.top + rect.height,
            right: rect.left + rect.width
        };
    }

    function offset(element, coordinates) {

        var currentOffset = dimensions(element);
        var ref = toWindow(element);
        var pageYOffset = ref.pageYOffset;
        var pageXOffset = ref.pageXOffset;
        var offsetBy = {height: pageYOffset, width: pageXOffset};

        for (var dir in dirs) {
            for (var i in dirs[dir]) {
                currentOffset[dirs[dir][i]] += offsetBy[dir];
            }
        }

        if (!coordinates) {
            return currentOffset;
        }

        var pos = css(element, 'position');

        each(css(element, ['left', 'top']), function (value, prop) { return css(element, prop, coordinates[prop]
                - currentOffset[prop]
                + toFloat(pos === 'absolute' && value === 'auto'
                    ? position(element)[prop]
                    : value)
            ); }
        );
    }

    function position(element) {

        var ref = offset(element);
        var top = ref.top;
        var left = ref.left;

        var ref$1 = toNode(element);
        var ref$1_ownerDocument = ref$1.ownerDocument;
        var body = ref$1_ownerDocument.body;
        var documentElement = ref$1_ownerDocument.documentElement;
        var offsetParent = ref$1.offsetParent;
        var parent = offsetParent || documentElement;

        while (parent && (parent === body || parent === documentElement) && css(parent, 'position') === 'static') {
            parent = parent.parentNode;
        }

        if (isElement(parent)) {
            var parentOffset = offset(parent);
            top -= parentOffset.top + toFloat(css(parent, 'borderTopWidth'));
            left -= parentOffset.left + toFloat(css(parent, 'borderLeftWidth'));
        }

        return {
            top: top - toFloat(css(element, 'marginTop')),
            left: left - toFloat(css(element, 'marginLeft'))
        };
    }

    function offsetPosition(element) {
        var offset = [0, 0];

        element = toNode(element);

        do {

            offset[0] += element.offsetTop;
            offset[1] += element.offsetLeft;

            if (css(element, 'position') === 'fixed') {
                var win = toWindow(element);
                offset[0] += win.pageYOffset;
                offset[1] += win.pageXOffset;
                return offset;
            }

        } while ((element = element.offsetParent));

        return offset;
    }

    var height = dimension('height');
    var width = dimension('width');

    function dimension(prop) {
        var propName = ucfirst(prop);
        return function (element, value) {

            if (isUndefined(value)) {

                if (isWindow(element)) {
                    return element[("inner" + propName)];
                }

                if (isDocument(element)) {
                    var doc = element.documentElement;
                    return Math.max(doc[("offset" + propName)], doc[("scroll" + propName)]);
                }

                element = toNode(element);

                value = css(element, prop);
                value = value === 'auto' ? element[("offset" + propName)] : toFloat(value) || 0;

                return value - boxModelAdjust(element, prop);

            } else {

                return css(element, prop, !value && value !== 0
                    ? ''
                    : +value + boxModelAdjust(element, prop) + 'px'
                );

            }

        };
    }

    function boxModelAdjust(element, prop, sizing) {
        if ( sizing === void 0 ) sizing = 'border-box';

        return css(element, 'boxSizing') === sizing
            ? dirs[prop].map(ucfirst).reduce(function (value, prop) { return value
                + toFloat(css(element, ("padding" + prop)))
                + toFloat(css(element, ("border" + prop + "Width"))); }
                , 0)
            : 0;
    }

    function flipPosition(pos) {
        for (var dir in dirs) {
            for (var i in dirs[dir]) {
                if (dirs[dir][i] === pos) {
                    return dirs[dir][1 - i];
                }
            }
        }
        return pos;
    }

    function toPx(value, property, element) {
        if ( property === void 0 ) property = 'width';
        if ( element === void 0 ) element = window;

        return isNumeric(value)
            ? +value
            : endsWith(value, 'vh')
                ? percent(height(toWindow(element)), value)
                : endsWith(value, 'vw')
                    ? percent(width(toWindow(element)), value)
                    : endsWith(value, '%')
                        ? percent(dimensions(element)[property], value)
                        : toFloat(value);
    }

    function percent(base, value) {
        return base * toFloat(value) / 100;
    }

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    var fastdom = {

        reads: [],
        writes: [],

        read: function(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
        },

        write: function(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
        },

        clear: function(task) {
            remove$1(this.reads, task);
            remove$1(this.writes, task);
        },

        flush: flush

    };

    function flush(recursion) {
        if ( recursion === void 0 ) recursion = 1;

        runTasks(fastdom.reads);
        runTasks(fastdom.writes.splice(0));

        fastdom.scheduled = false;

        if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(recursion + 1);
        }
    }

    var RECURSION_LIMIT = 4;
    function scheduleFlush(recursion) {

        if (fastdom.scheduled) {
            return;
        }

        fastdom.scheduled = true;
        if (recursion && recursion < RECURSION_LIMIT) {
            Promise.resolve().then(function () { return flush(recursion); });
        } else {
            requestAnimationFrame(function () { return flush(); });
        }

    }

    function runTasks(tasks) {
        var task;
        while ((task = tasks.shift())) {
            try {
                task();
            } catch (e) {
                console.error(e);
            }
        }
    }

    function remove$1(array, item) {
        var index = array.indexOf(item);
        return ~index && array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {

        positions: [],

        init: function() {
            var this$1 = this;


            this.positions = [];

            var position;
            this.unbind = on(document, 'mousemove', function (e) { return position = getEventPos(e); });
            this.interval = setInterval(function () {

                if (!position) {
                    return;
                }

                this$1.positions.push(position);

                if (this$1.positions.length > 5) {
                    this$1.positions.shift();
                }
            }, 50);

        },

        cancel: function() {
            this.unbind && this.unbind();
            this.interval && clearInterval(this.interval);
        },

        movesTo: function(target) {

            if (this.positions.length < 2) {
                return false;
            }

            var p = target.getBoundingClientRect();
            var left = p.left;
            var right = p.right;
            var top = p.top;
            var bottom = p.bottom;

            var ref = this.positions;
            var prevPosition = ref[0];
            var position = last(this.positions);
            var path = [prevPosition, position];

            if (pointInRect(position, p)) {
                return false;
            }

            var diagonals = [[{x: left, y: top}, {x: right, y: bottom}], [{x: left, y: bottom}, {x: right, y: top}]];

            return diagonals.some(function (diagonal) {
                var intersection = intersect(path, diagonal);
                return intersection && pointInRect(intersection, p);
            });
        }

    };

    // Inspired by http://paulbourke.net/geometry/pointlineplane/
    function intersect(ref, ref$1) {
        var ref_0 = ref[0];
        var x1 = ref_0.x;
        var y1 = ref_0.y;
        var ref_1 = ref[1];
        var x2 = ref_1.x;
        var y2 = ref_1.y;
        var ref$1_0 = ref$1[0];
        var x3 = ref$1_0.x;
        var y3 = ref$1_0.y;
        var ref$1_1 = ref$1[1];
        var x4 = ref$1_1.x;
        var y4 = ref$1_1.y;


        var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

        // Lines are parallel
        if (denominator === 0) {
            return false;
        }

        var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

        if (ua < 0) {
            return false;
        }

        // Return an object with the x and y coordinates of the intersection
        return {x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1)};
    }

    var strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy = concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
        return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
        return sortBy(concatStrat(parentVal, isFunction(childVal) ? {read: childVal} : childVal), 'order');
    };

    // property strategy
    strats.props = function (parentVal, childVal) {

        if (isArray(childVal)) {
            childVal = childVal.reduce(function (value, key) {
                value[key] = String;
                return value;
            }, {});
        }

        return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed =
    strats.methods = function (parentVal, childVal) {
        return childVal
            ? parentVal
                ? assign({}, parentVal, childVal)
                : childVal
            : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {

        if (!vm) {

            if (!childVal) {
                return parentVal;
            }

            if (!parentVal) {
                return childVal;
            }

            return function (vm) {
                return mergeFnData(parentVal, childVal, vm);
            };

        }

        return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
        return strats.computed(
            isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal,
            isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal
        );
    }

    // concat strategy
    function concatStrat(parentVal, childVal) {

        parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
        return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {

        var options = {};

        if (isFunction(child)) {
            child = child.options;
        }

        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }

        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }

        for (var key in parent) {
            mergeKey(key);
        }

        for (var key$1 in child) {
            if (!hasOwn(parent, key$1)) {
                mergeKey(key$1);
            }
        }

        function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
        }

        return options;
    }

    function parseOptions(options, args) {
        var obj;

        if ( args === void 0 ) args = [];

        try {

            return !options
                ? {}
                : startsWith(options, '{')
                    ? JSON.parse(options)
                    : args.length && !includes(options, ':')
                        ? (( obj = {}, obj[args[0]] = options, obj ))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.*)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && !isUndefined(value)) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    function play(el) {

        if (isIFrame(el)) {
            call(el, {func: 'playVideo', method: 'play'});
        }

        if (isHTML5(el)) {
            try {
                el.play().catch(noop);
            } catch (e) {}
        }

    }

    function pause(el) {

        if (isIFrame(el)) {
            call(el, {func: 'pauseVideo', method: 'pause'});
        }

        if (isHTML5(el)) {
            el.pause();
        }

    }

    function mute(el) {

        if (isIFrame(el)) {
            call(el, {func: 'mute', method: 'setVolume', value: 0});
        }

        if (isHTML5(el)) {
            el.muted = true;
        }

    }

    function isHTML5(el) {
        return el && el.tagName === 'VIDEO';
    }

    function isIFrame(el) {
        return el && el.tagName === 'IFRAME' && (isYoutube(el) || isVimeo(el));
    }

    function isYoutube(el) {
        return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }

    function isVimeo(el) {
        return !!el.src.match(/vimeo\.com\/video\/.*/);
    }

    function call(el, cmd) {
        enableApi(el).then(function () { return post(el, cmd); });
    }

    function post(el, cmd) {
        try {
            el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
        } catch (e) {}
    }

    var stateKey = '_ukPlayer';
    var counter = 0;
    function enableApi(el) {

        if (el[stateKey]) {
            return el[stateKey];
        }

        var youtube = isYoutube(el);
        var vimeo = isVimeo(el);

        var id = ++counter;
        var poller;

        return el[stateKey] = new Promise(function (resolve) {

            youtube && once(el, 'load', function () {
                var listener = function () { return post(el, {event: 'listening', id: id}); };
                poller = setInterval(listener, 100);
                listener();
            });

            once(window, 'message', resolve, false, function (ref) {
                var data = ref.data;


                try {
                    data = JSON.parse(data);
                    return data && (youtube && data.id === id && data.event === 'onReady' || vimeo && Number(data.player_id) === id);
                } catch (e) {}

            });

            el.src = "" + (el.src) + (includes(el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + id));

        }).then(function () { return clearInterval(poller); });
    }

    function isInView(element, offsetTop, offsetLeft) {
        if ( offsetTop === void 0 ) offsetTop = 0;
        if ( offsetLeft === void 0 ) offsetLeft = 0;


        if (!isVisible(element)) {
            return false;
        }

        return intersectRect.apply(void 0, scrollParents(element).map(function (parent) {

            var ref = offset(getViewport(parent));
            var top = ref.top;
            var left = ref.left;
            var bottom = ref.bottom;
            var right = ref.right;

            return {
                top: top - offsetTop,
                left: left - offsetLeft,
                bottom: bottom + offsetTop,
                right: right + offsetLeft
            };
        }).concat(offset(element)));
    }

    function scrollTop(element, top) {

        if (isWindow(element) || isDocument(element)) {
            element = getScrollingElement(element);
        } else {
            element = toNode(element);
        }

        element.scrollTop = top;
    }

    function scrollIntoView(element, ref) {
        if ( ref === void 0 ) ref = {};
        var offsetBy = ref.offset; if ( offsetBy === void 0 ) offsetBy = 0;


        if (!isVisible(element)) {
            return;
        }

        var parents = scrollParents(element);
        var diff = 0;
        return parents.reduce(function (fn, scrollElement, i) {

            var scrollTop = scrollElement.scrollTop;
            var scrollHeight = scrollElement.scrollHeight;
            var maxScroll = scrollHeight - getViewportClientHeight(scrollElement);

            var top = Math.ceil(
                offset(parents[i - 1] || element).top
                - offset(getViewport(scrollElement)).top
                - offsetBy
                + diff
                + scrollTop
            );

            if (top > maxScroll) {
                diff = top - maxScroll;
                top = maxScroll;
            } else {
                diff = 0;
            }

            return function () { return scrollTo(scrollElement, top - scrollTop).then(fn); };

        }, function () { return Promise.resolve(); })();

        function scrollTo(element, top) {
            return new Promise(function (resolve) {

                var scroll = element.scrollTop;
                var duration = getDuration(Math.abs(top));
                var start = Date.now();

                (function step() {

                    var percent = ease(clamp((Date.now() - start) / duration));

                    scrollTop(element, scroll + top * percent);

                    // scroll more if we have not reached our destination
                    if (percent !== 1) {
                        requestAnimationFrame(step);
                    } else {
                        resolve();
                    }

                })();
            });
        }

        function getDuration(dist) {
            return 40 * Math.pow(dist, .375);
        }

        function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }

    }

    function scrolledOver(element, heightOffset) {
        if ( heightOffset === void 0 ) heightOffset = 0;


        if (!isVisible(element)) {
            return 0;
        }

        var ref = scrollParents(element, /auto|scroll/, true);
        var scrollElement = ref[0];
        var scrollHeight = scrollElement.scrollHeight;
        var scrollTop = scrollElement.scrollTop;
        var clientHeight = getViewportClientHeight(scrollElement);
        var viewportTop = offsetPosition(element)[0] - scrollTop - offsetPosition(scrollElement)[0];
        var viewportDist = Math.min(clientHeight, viewportTop + scrollTop);

        var top = viewportTop - viewportDist;
        var dist = Math.min(
            element.offsetHeight + heightOffset + viewportDist,
            scrollHeight - (viewportTop + scrollTop),
            scrollHeight - clientHeight
        );

        return clamp(-1 * top / dist);
    }

    function scrollParents(element, overflowRe, scrollable) {
        if ( overflowRe === void 0 ) overflowRe = /auto|scroll|hidden/;
        if ( scrollable === void 0 ) scrollable = false;

        var scrollEl = getScrollingElement(element);

        var ancestors = parents(element).reverse();
        ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

        var fixedIndex = findIndex(ancestors, function (el) { return css(el, 'position') === 'fixed'; });
        if (~fixedIndex) {
            ancestors = ancestors.slice(fixedIndex);
        }

        return [scrollEl].concat(ancestors.filter(function (parent) { return overflowRe.test(css(parent, 'overflow')) && (!scrollable || parent.scrollHeight > getViewportClientHeight(parent)); })
        ).reverse();
    }

    function getViewport(scrollElement) {
        return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
    }

    // iOS 12 returns <body> as scrollingElement
    function getViewportClientHeight(scrollElement) {
        return (scrollElement === getScrollingElement(scrollElement) ? document.documentElement : scrollElement).clientHeight;
    }

    function getScrollingElement(element) {
        var ref = toWindow(element);
        var document = ref.document;
        return document.scrollingElement || document.documentElement;
    }

    var dirs$1 = {
        width: ['x', 'left', 'right'],
        height: ['y', 'top', 'bottom']
    };

    function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

        elAttach = getPos(elAttach);
        targetAttach = getPos(targetAttach);

        var flipped = {element: elAttach, target: targetAttach};

        if (!element || !target) {
            return flipped;
        }

        var dim = offset(element);
        var targetDim = offset(target);
        var position = targetDim;

        moveTo(position, elAttach, dim, -1);
        moveTo(position, targetAttach, targetDim, 1);

        elOffset = getOffsets(elOffset, dim.width, dim.height);
        targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

        elOffset['x'] += targetOffset['x'];
        elOffset['y'] += targetOffset['y'];

        position.left += elOffset['x'];
        position.top += elOffset['y'];

        if (flip) {

            var boundaries = scrollParents(element).map(getViewport);

            if (boundary && includes(boundaries, boundary)) {
                boundaries.unshift(boundary);
            }

            boundaries = boundaries.map(function (el) { return offset(el); });

            each(dirs$1, function (ref, prop) {
                var dir = ref[0];
                var align = ref[1];
                var alignFlip = ref[2];


                if (!(flip === true || includes(flip, dir))) {
                    return;
                }

                boundaries.some(function (boundary) {

                    var elemOffset = elAttach[dir] === align
                        ? -dim[prop]
                        : elAttach[dir] === alignFlip
                            ? dim[prop]
                            : 0;

                    var targetOffset = targetAttach[dir] === align
                        ? targetDim[prop]
                        : targetAttach[dir] === alignFlip
                            ? -targetDim[prop]
                            : 0;

                    if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                        var centerOffset = dim[prop] / 2;
                        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                        return elAttach[dir] === 'center' && (
                            apply(centerOffset, centerTargetOffset)
                            || apply(-centerOffset, -centerTargetOffset)
                        ) || apply(elemOffset, targetOffset);

                    }

                    function apply(elemOffset, targetOffset) {

                        var newVal = toFloat((position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4));

                        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                            position[align] = newVal;

                            ['element', 'target'].forEach(function (el) {
                                flipped[el][dir] = !elemOffset
                                    ? flipped[el][dir]
                                    : flipped[el][dir] === dirs$1[prop][1]
                                        ? dirs$1[prop][2]
                                        : dirs$1[prop][1];
                            });

                            return true;
                        }

                    }

                });

            });
        }

        offset(element, position);

        return flipped;
    }

    function moveTo(position, attach, dim, factor) {
        each(dirs$1, function (ref, prop) {
            var dir = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];

            if (attach[dir] === alignFlip) {
                position[align] += dim[prop] * factor;
            } else if (attach[dir] === 'center') {
                position[align] += dim[prop] * factor / 2;
            }
        });
    }

    function getPos(pos) {

        var x = /left|center|right/;
        var y = /top|center|bottom/;

        pos = (pos || '').split(' ');

        if (pos.length === 1) {
            pos = x.test(pos[0])
                ? pos.concat('center')
                : y.test(pos[0])
                    ? ['center'].concat(pos)
                    : ['center', 'center'];
        }

        return {
            x: x.test(pos[0]) ? pos[0] : 'center',
            y: y.test(pos[1]) ? pos[1] : 'center'
        };
    }

    function getOffsets(offsets, width, height) {

        var ref = (offsets || '').split(' ');
        var x = ref[0];
        var y = ref[1];

        return {
            x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
            y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
        };
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ajax: ajax,
        getImage: getImage,
        transition: transition,
        Transition: Transition,
        animate: animate,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        dimensions: dimensions,
        offset: offset,
        position: position,
        offsetPosition: offsetPosition,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        toPx: toPx,
        ready: ready,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply,
        $: $,
        $$: $$,
        inBrowser: inBrowser,
        isIE: isIE,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        parent: parent,
        filter: filter,
        matches: matches,
        closest: closest,
        within: within,
        parents: parents,
        children: children,
        index: index,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isNode: isNode,
        isElement: isElement,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toArray: toArray,
        toNode: toNode,
        toNodes: toNodes,
        toWindow: toWindow,
        toMs: toMs,
        isEqual: isEqual,
        swap: swap,
        assign: assign,
        last: last,
        each: each,
        sortBy: sortBy,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        getIndex: getIndex,
        memoize: memoize,
        MouseTracker: MouseTracker,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        play: play,
        pause: pause,
        mute: mute,
        positionAt: positionAt,
        Promise: Promise,
        Deferred: Deferred,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        escape: escape,
        css: css,
        getCssVar: getCssVar,
        propName: propName,
        isInView: isInView,
        scrollTop: scrollTop,
        scrollIntoView: scrollIntoView,
        scrolledOver: scrolledOver,
        scrollParents: scrollParents,
        getViewport: getViewport,
        getViewportClientHeight: getViewportClientHeight
    });

    function globalAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.use = function (plugin) {

            if (plugin.installed) {
                return;
            }

            plugin.call(null, this);
            plugin.installed = true;

            return this;
        };

        UIkit.mixin = function (mixin, component) {
            component = (isString(component) ? UIkit.component(component) : component) || this;
            component.options = mergeOptions(component.options, mixin);
        };

        UIkit.extend = function (options) {

            options = options || {};

            var Super = this;
            var Sub = function UIkitComponent(options) {
                this._init(options);
            };

            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);

            Sub.super = Super;
            Sub.extend = Super.extend;

            return Sub;
        };

        UIkit.update = function (element, e) {

            element = element ? toNode(element) : document.body;

            parents(element).reverse().forEach(function (element) { return update(element[DATA], e); });
            apply(element, function (element) { return update(element[DATA], e); });

        };

        var container;
        Object.defineProperty(UIkit, 'container', {

            get: function() {
                return container || document.body;
            },

            set: function(element) {
                container = $(element);
            }

        });

        function update(data, e) {

            if (!data) {
                return;
            }

            for (var name in data) {
                if (data[name]._connected) {
                    data[name]._callUpdate(e);
                }
            }

        }
    }

    function hooksAPI (UIkit) {

        UIkit.prototype._callHook = function (hook) {
            var this$1 = this;


            var handlers = this.$options[hook];

            if (handlers) {
                handlers.forEach(function (handler) { return handler.call(this$1); });
            }
        };

        UIkit.prototype._callConnected = function () {

            if (this._connected) {
                return;
            }

            this._data = {};
            this._computeds = {};

            this._initProps();

            this._callHook('beforeConnect');
            this._connected = true;

            this._initEvents();
            this._initObservers();

            this._callHook('connected');
            this._callUpdate();
        };

        UIkit.prototype._callDisconnected = function () {

            if (!this._connected) {
                return;
            }

            this._callHook('beforeDisconnect');
            this._disconnectObservers();
            this._unbindEvents();
            this._callHook('disconnected');

            this._connected = false;
            delete this._watch;

        };

        UIkit.prototype._callUpdate = function (e) {
            var this$1 = this;
            if ( e === void 0 ) e = 'update';


            if (!this._connected) {
                return;
            }

            if (e === 'update' || e === 'resize') {
                this._callWatches();
            }

            if (!this.$options.update) {
                return;
            }

            if (!this._updates) {
                this._updates = new Set();
                fastdom.read(function () {
                    runUpdates.call(this$1, this$1._updates);
                    delete this$1._updates;
                });
            }

            this._updates.add(e.type || e);
        };

        UIkit.prototype._callWatches = function () {
            var this$1 = this;


            if (this._watch) {
                return;
            }

            var initital = !hasOwn(this, '_watch');

            this._watch = fastdom.read(function () {

                var ref = this$1;
                var computed = ref.$options.computed;
                var _computeds = ref._computeds;

                for (var key in computed) {

                    var hasPrev = hasOwn(_computeds, key);
                    var prev = _computeds[key];

                    delete _computeds[key];

                    var ref$1 = computed[key];
                    var watch = ref$1.watch;
                    var immediate = ref$1.immediate;
                    if (watch && (
                        initital && immediate
                        || hasPrev && !isEqual(prev, this$1[key])
                    )) {
                        watch.call(this$1, this$1[key], prev);
                    }

                }

                this$1._watch = null;

            });

        };

        function runUpdates(types) {
            var this$1 = this;


            var updates = this.$options.update;

            var loop = function ( i ) {
                var ref = updates[i];
                var read = ref.read;
                var write = ref.write;
                var events = ref.events;

                if (!types.has('update') && (!events || !events.some(function (type) { return types.has(type); }))) {
                    return;
                }

                var result = (void 0);
                if (read) {

                    result = read.call(this$1, this$1._data, types);

                    if (result && isPlainObject(result)) {
                        assign(this$1._data, result);
                    }
                }

                if (write && result !== false) {
                    fastdom.write(function () { return write.call(this$1, this$1._data, types); });
                }

            };

            for (var i = 0; i < updates.length; i++) loop( i );
        }
    }

    function stateAPI (UIkit) {

        var uid = 0;

        UIkit.prototype._init = function (options) {

            options = options || {};
            options.data = normalizeData(options, this.constructor.options);

            this.$options = mergeOptions(this.constructor.options, options, this);
            this.$el = null;
            this.$props = {};

            this._uid = uid++;
            this._initData();
            this._initMethods();
            this._initComputeds();
            this._callHook('created');

            if (options.el) {
                this.$mount(options.el);
            }
        };

        UIkit.prototype._initData = function () {

            var ref = this.$options;
            var data = ref.data; if ( data === void 0 ) data = {};

            for (var key in data) {
                this.$props[key] = this[key] = data[key];
            }
        };

        UIkit.prototype._initMethods = function () {

            var ref = this.$options;
            var methods = ref.methods;

            if (methods) {
                for (var key in methods) {
                    this[key] = methods[key].bind(this);
                }
            }
        };

        UIkit.prototype._initComputeds = function () {

            var ref = this.$options;
            var computed = ref.computed;

            this._computeds = {};

            if (computed) {
                for (var key in computed) {
                    registerComputed(this, key, computed[key]);
                }
            }
        };

        UIkit.prototype._initProps = function (props) {

            var key;

            props = props || getProps(this.$options, this.$name);

            for (key in props) {
                if (!isUndefined(props[key])) {
                    this.$props[key] = props[key];
                }
            }

            var exclude = [this.$options.computed, this.$options.methods];
            for (key in this.$props) {
                if (key in props && notIn(exclude, key)) {
                    this[key] = this.$props[key];
                }
            }
        };

        UIkit.prototype._initEvents = function () {
            var this$1 = this;


            this._events = [];

            var ref = this.$options;
            var events = ref.events;

            if (events) {

                events.forEach(function (event) {

                    if (!hasOwn(event, 'handler')) {
                        for (var key in event) {
                            registerEvent(this$1, event[key], key);
                        }
                    } else {
                        registerEvent(this$1, event);
                    }

                });
            }
        };

        UIkit.prototype._unbindEvents = function () {
            this._events.forEach(function (unbind) { return unbind(); });
            delete this._events;
        };

        UIkit.prototype._initObservers = function () {
            this._observers = [
                initChildListObserver(this),
                initPropsObserver(this)
            ];
        };

        UIkit.prototype._disconnectObservers = function () {
            this._observers.forEach(function (observer) { return observer && observer.disconnect(); }
            );
        };

        function getProps(opts, name) {

            var data$1 = {};
            var args = opts.args; if ( args === void 0 ) args = [];
            var props = opts.props; if ( props === void 0 ) props = {};
            var el = opts.el;

            if (!props) {
                return data$1;
            }

            for (var key in props) {
                var prop = hyphenate(key);
                var value = data(el, prop);

                if (isUndefined(value)) {
                    continue;
                }

                value = props[key] === Boolean && value === ''
                    ? true
                    : coerce(props[key], value);

                if (prop === 'target' && (!value || startsWith(value, '_'))) {
                    continue;
                }

                data$1[key] = value;
            }

            var options = parseOptions(data(el, name), args);

            for (var key$1 in options) {
                var prop$1 = camelize(key$1);
                if (props[prop$1] !== undefined) {
                    data$1[prop$1] = coerce(props[prop$1], options[key$1]);
                }
            }

            return data$1;
        }

        function registerComputed(component, key, cb) {
            Object.defineProperty(component, key, {

                enumerable: true,

                get: function() {

                    var _computeds = component._computeds;
                    var $props = component.$props;
                    var $el = component.$el;

                    if (!hasOwn(_computeds, key)) {
                        _computeds[key] = (cb.get || cb).call(component, $props, $el);
                    }

                    return _computeds[key];
                },

                set: function(value) {

                    var _computeds = component._computeds;

                    _computeds[key] = cb.set ? cb.set.call(component, value) : value;

                    if (isUndefined(_computeds[key])) {
                        delete _computeds[key];
                    }
                }

            });
        }

        function registerEvent(component, event, key) {

            if (!isPlainObject(event)) {
                event = ({name: key, handler: event});
            }

            var name = event.name;
            var el = event.el;
            var handler = event.handler;
            var capture = event.capture;
            var passive = event.passive;
            var delegate = event.delegate;
            var filter = event.filter;
            var self = event.self;
            el = isFunction(el)
                ? el.call(component)
                : el || component.$el;

            if (isArray(el)) {
                el.forEach(function (el) { return registerEvent(component, assign({}, event, {el: el}), key); });
                return;
            }

            if (!el || filter && !filter.call(component)) {
                return;
            }

            component._events.push(
                on(
                    el,
                    name,
                    !delegate
                        ? null
                        : isString(delegate)
                            ? delegate
                            : delegate.call(component),
                    isString(handler) ? component[handler] : handler.bind(component),
                    {passive: passive, capture: capture, self: self}
                )
            );

        }

        function notIn(options, key) {
            return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
        }

        function coerce(type, value) {

            if (type === Boolean) {
                return toBoolean(value);
            } else if (type === Number) {
                return toNumber(value);
            } else if (type === 'list') {
                return toList(value);
            }

            return type ? type(value) : value;
        }

        function toList(value) {
            return isArray(value)
                ? value
                : isString(value)
                    ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                        ? toNumber(value)
                        : toBoolean(value.trim()); })
                    : [value];
        }

        function normalizeData(ref, ref$1) {
            var data = ref.data;
            var args = ref$1.args;
            var props = ref$1.props; if ( props === void 0 ) props = {};

            data = isArray(data)
                ? !isEmpty(args)
                    ? data.slice(0, args.length).reduce(function (data, value, index) {
                        if (isPlainObject(value)) {
                            assign(data, value);
                        } else {
                            data[args[index]] = value;
                        }
                        return data;
                    }, {})
                    : undefined
                : data;

            if (data) {
                for (var key in data) {
                    if (isUndefined(data[key])) {
                        delete data[key];
                    } else {
                        data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
                    }
                }
            }

            return data;
        }

        function initChildListObserver(component) {
            var ref = component.$options;
            var el = ref.el;

            var observer = new MutationObserver(function () { return component.$emit(); });
            observer.observe(el, {
                childList: true,
                subtree: true
            });

            return observer;
        }

        function initPropsObserver(component) {

            var $name = component.$name;
            var $options = component.$options;
            var $props = component.$props;
            var attrs = $options.attrs;
            var props = $options.props;
            var el = $options.el;

            if (!props || attrs === false) {
                return;
            }

            var attributes = isArray(attrs) ? attrs : Object.keys(props);
            var filter = attributes.map(function (key) { return hyphenate(key); }).concat($name);

            var observer = new MutationObserver(function (records) {
                var data = getProps($options, $name);
                if (records.some(function (ref) {
                    var attributeName = ref.attributeName;

                    var prop = attributeName.replace('data-', '');
                    return (prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).some(function (prop) { return !isUndefined(data[prop]) && data[prop] !== $props[prop]; }
                    );
                })) {
                    component.$reset();
                }
            });

            observer.observe(el, {
                attributes: true,
                attributeFilter: filter.concat(filter.map(function (key) { return ("data-" + key); }))
            });

            return observer;
        }
    }

    function instanceAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.prototype.$create = function (component, element, data) {
            return UIkit[component](element, data);
        };

        UIkit.prototype.$mount = function (el) {

            var ref = this.$options;
            var name = ref.name;

            if (!el[DATA]) {
                el[DATA] = {};
            }

            if (el[DATA][name]) {
                return;
            }

            el[DATA][name] = this;

            this.$el = this.$options.el = this.$options.el || el;

            if (within(el, document)) {
                this._callConnected();
            }
        };

        UIkit.prototype.$reset = function () {
            this._callDisconnected();
            this._callConnected();
        };

        UIkit.prototype.$destroy = function (removeEl) {
            if ( removeEl === void 0 ) removeEl = false;


            var ref = this.$options;
            var el = ref.el;
            var name = ref.name;

            if (el) {
                this._callDisconnected();
            }

            this._callHook('destroy');

            if (!el || !el[DATA]) {
                return;
            }

            delete el[DATA][name];

            if (!isEmpty(el[DATA])) {
                delete el[DATA];
            }

            if (removeEl) {
                remove(this.$el);
            }
        };

        UIkit.prototype.$emit = function (e) {
            this._callUpdate(e);
        };

        UIkit.prototype.$update = function (element, e) {
            if ( element === void 0 ) element = this.$el;

            UIkit.update(element, e);
        };

        UIkit.prototype.$getComponent = UIkit.getComponent;

        var componentName = memoize(function (name) { return UIkit.prefix + hyphenate(name); });
        Object.defineProperties(UIkit.prototype, {

            $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

            $name: {

                get: function() {
                    return componentName(this.$options.name);
                }

            }

        });

    }

    function componentAPI (UIkit) {

        var DATA = UIkit.data;

        var components = {};

        UIkit.component = function (name, options) {

            var id = hyphenate(name);

            name = camelize(id);

            if (!options) {

                if (isPlainObject(components[name])) {
                    components[name] = UIkit.extend(components[name]);
                }

                return components[name];

            }

            UIkit[name] = function (element, data) {
                var i = arguments.length, argsArray = Array(i);
                while ( i-- ) argsArray[i] = arguments[i];


                var component = UIkit.component(name);

                return component.options.functional
                    ? new component({data: isPlainObject(element) ? element : [].concat( argsArray )})
                    : !element ? init(element) : $$(element).map(init)[0];

                function init(element) {

                    var instance = UIkit.getComponent(element, name);

                    if (instance) {
                        if (!data) {
                            return instance;
                        } else {
                            instance.$destroy();
                        }
                    }

                    return new component({el: element, data: data});

                }

            };

            var opt = isPlainObject(options) ? assign({}, options) : options.options;

            opt.name = name;

            if (opt.install) {
                opt.install(UIkit, opt, name);
            }

            if (UIkit._initialized && !opt.functional) {
                fastdom.read(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
            }

            return components[name] = isPlainObject(options) ? opt : options;
        };

        UIkit.getComponents = function (element) { return element && element[DATA] || {}; };
        UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

        UIkit.connect = function (node) {

            if (node[DATA]) {
                for (var name in node[DATA]) {
                    node[DATA][name]._callConnected();
                }
            }

            for (var i = 0; i < node.attributes.length; i++) {

                var name$1 = getComponentName(node.attributes[i].name);

                if (name$1 && name$1 in components) {
                    UIkit[name$1](node);
                }

            }

        };

        UIkit.disconnect = function (node) {
            for (var name in node[DATA]) {
                node[DATA][name]._callDisconnected();
            }
        };

    }

    var getComponentName = memoize(function (attribute) {
        return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-')
            ? camelize(attribute.replace('data-uk-', '').replace('uk-', ''))
            : false;
    });

    var UIkit = function (options) {
        this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};
    UIkit.version = '3.6.18';

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    function Core (UIkit) {

        if (!inBrowser) {
            return;
        }

        // throttle 'resize'
        var pendingResize;
        var handleResize = function () {
            if (pendingResize) {
                return;
            }
            pendingResize = true;
            fastdom.write(function () { return pendingResize = false; });
            UIkit.update(null, 'resize');
        };

        on(window, 'load resize', handleResize);
        on(document, 'loadedmetadata load', handleResize, true);

        if ('ResizeObserver' in window) {
            (new ResizeObserver(handleResize)).observe(document.documentElement);
        }

        // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)
        var pending;
        on(window, 'scroll', function (e) {

            if (pending) {
                return;
            }
            pending = true;
            fastdom.write(function () { return pending = false; });

            UIkit.update(null, e.type);

        }, {passive: true, capture: true});

        var started = 0;
        on(document, 'animationstart', function (ref) {
            var target = ref.target;

            if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {

                started++;
                css(document.documentElement, 'overflowX', 'hidden');
                setTimeout(function () {
                    if (!--started) {
                        css(document.documentElement, 'overflowX', '');
                    }
                }, toMs(css(target, 'animationDuration')) + 100);
            }
        }, true);

        on(document, pointerDown, function (e) {

            if (!isTouch(e)) {
                return;
            }

            // Handle Swipe Gesture
            var pos = getEventPos(e);
            var target = 'tagName' in e.target ? e.target : parent(e.target);
            once(document, (pointerUp + " " + pointerCancel + " scroll"), function (e) {

                var ref = getEventPos(e);
                var x = ref.x;
                var y = ref.y;

                // swipe
                if (e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {

                    setTimeout(function () {
                        trigger(target, 'swipe');
                        trigger(target, ("swipe" + (swipeDirection(pos.x, pos.y, x, y))));
                    });

                }

            });

        }, {passive: true});

    }

    function swipeDirection(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
                ? 'Left'
                : 'Right'
            : y1 - y2 > 0
                ? 'Up'
                : 'Down';
    }

    function boot (UIkit) {

        var connect = UIkit.connect;
        var disconnect = UIkit.disconnect;

        if (!inBrowser || !window.MutationObserver) {
            return;
        }

        fastdom.read(function () {

            if (document.body) {
                apply(document.body, connect);
            }

            new MutationObserver(function (records) { return records.forEach(applyChildListMutation); }
            ).observe(document, {
                childList: true,
                subtree: true
            });

            new MutationObserver(function (records) { return records.forEach(applyAttributeMutation); }
            ).observe(document, {
                attributes: true,
                subtree: true
            });

            UIkit._initialized = true;
        });

        function applyChildListMutation(ref) {
            var addedNodes = ref.addedNodes;
            var removedNodes = ref.removedNodes;

            for (var i = 0; i < addedNodes.length; i++) {
                apply(addedNodes[i], connect);
            }

            for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
                apply(removedNodes[i$1], disconnect);
            }
        }

        function applyAttributeMutation(ref) {
            var target = ref.target;
            var attributeName = ref.attributeName;


            var name = getComponentName(attributeName);

            if (!name || !(name in UIkit)) {
                return;
            }

            if (hasAttr(target, attributeName)) {
                UIkit[name](target);
                return;
            }

            var component = UIkit.getComponent(target, name);

            if (component) {
                component.$destroy();
            }

        }

    }

    var Class = {

        connected: function() {
            !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
        }

    };

    var Togglable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String
        },

        data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            clsEnter: 'uk-togglabe-enter',
            clsLeave: 'uk-togglabe-leave',

            initProps: {
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
                marginTop: '',
                marginBottom: ''
            },

            hideProps: {
                overflow: 'hidden',
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }

        },

        computed: {

            hasAnimation: function(ref) {
                var animation = ref.animation;

                return !!animation[0];
            },

            hasTransition: function(ref) {
                var animation = ref.animation;

                return this.hasAnimation && animation[0] === true;
            }

        },

        methods: {

            toggleElement: function(targets, toggle, animate) {
                var this$1 = this;

                return new Promise(function (resolve) { return Promise.all(toNodes(targets).map(function (el) {

                        var show = isBoolean(toggle) ? toggle : !this$1.isToggled(el);

                        if (!trigger(el, ("before" + (show ? 'show' : 'hide')), [this$1])) {
                            return Promise.reject();
                        }

                        var promise = (
                            isFunction(animate)
                                ? animate
                                : animate === false || !this$1.hasAnimation
                                ? this$1._toggle
                                : this$1.hasTransition
                                    ? toggleHeight(this$1)
                                    : toggleAnimation(this$1)
                        )(el, show);

                        var cls = show ? this$1.clsEnter : this$1.clsLeave;

                        addClass(el, cls);

                        trigger(el, show ? 'show' : 'hide', [this$1]);

                        var done = function () {
                            removeClass(el, cls);
                            trigger(el, show ? 'shown' : 'hidden', [this$1]);
                            this$1.$update(el);
                        };

                        return promise ? promise.then(done, function () {
                            removeClass(el, cls);
                            return Promise.reject();
                        }) : done();

                    })).then(resolve, noop); }
                );
            },

            isToggled: function(el) {
                if ( el === void 0 ) el = this.$el;

                return hasClass(el, this.clsEnter)
                    ? true
                    : hasClass(el, this.clsLeave)
                        ? false
                        : this.cls
                            ? hasClass(el, this.cls.split(' ')[0])
                            : !hasAttr(el, 'hidden');
            },

            _toggle: function(el, toggled) {

                if (!el) {
                    return;
                }

                toggled = Boolean(toggled);

                var changed;
                if (this.cls) {
                    changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
                    changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
                } else {
                    changed = toggled === el.hidden;
                    changed && (el.hidden = !toggled);
                }

                $$('[autofocus]', el).some(function (el) { return isVisible(el) ? el.focus() || true : el.blur(); });

                if (changed) {
                    trigger(el, 'toggled', [toggled, this]);
                    this.$update(el);
                }
            }

        }

    };

    function toggleHeight(ref) {
        var isToggled = ref.isToggled;
        var duration = ref.duration;
        var initProps = ref.initProps;
        var hideProps = ref.hideProps;
        var transition = ref.transition;
        var _toggle = ref._toggle;

        return function (el, show) {

            var inProgress = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

            Transition.cancel(el);

            if (!isToggled(el)) {
                _toggle(el, true);
            }

            height(el, '');

            // Update child components first
            fastdom.flush();

            var endHeight = height(el) + (inProgress ? 0 : inner);
            height(el, currentHeight);

            return (show
                ? Transition.start(el, assign({}, initProps, {overflow: 'hidden', height: endHeight}), Math.round(duration * (1 - currentHeight / endHeight)), transition)
                : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () { return _toggle(el, false); })
            ).then(function () { return css(el, initProps); });

        };
    }

    function toggleAnimation(cmp) {
        return function (el, show) {

            Animation.cancel(el);

            var animation = cmp.animation;
            var duration = cmp.duration;
            var _toggle = cmp._toggle;

            if (show) {
                _toggle(el, true);
                return Animation.in(el, animation[0], duration, cmp.origin);
            }

            return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () { return _toggle(el, false); });
        };
    }

    var Accordion = {

        mixins: [Class, Togglable],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },

        data: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease',
            offset: 0
        },

        computed: {

            items: {

                get: function(ref, $el) {
                    var targets = ref.targets;

                    return $$(targets, $el);
                },

                watch: function(items, prev) {
                    var this$1 = this;


                    items.forEach(function (el) { return hide($(this$1.content, el), !hasClass(el, this$1.clsOpen)); });

                    if (prev || hasClass(items, this.clsOpen)) {
                        return;
                    }

                    var active = this.active !== false && items[Number(this.active)]
                        || !this.collapsible && items[0];

                    if (active) {
                        this.toggle(active, false);
                    }

                },

                immediate: true

            },

            toggles: function(ref) {
                var toggle = ref.toggle;

                return this.items.map(function (item) { return $(toggle, item); });
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function(e) {
                    e.preventDefault();
                    this.toggle(index(this.toggles, e.current));
                }

            }

        ],

        methods: {

            toggle: function(item, animate) {
                var this$1 = this;


                var items = [this.items[getIndex(item, this.items)]];
                var activeItems = filter(this.items, ("." + (this.clsOpen)));

                if (!this.multiple && !includes(activeItems, items[0])) {
                    items = items.concat(activeItems);
                }

                if (!this.collapsible && activeItems.length < 2 && !filter(items, (":not(." + (this.clsOpen) + ")")).length) {
                    return;
                }

                items.forEach(function (el) { return this$1.toggleElement(el, !hasClass(el, this$1.clsOpen), function (el, show) {

                    toggleClass(el, this$1.clsOpen, show);
                    attr($(this$1.$props.toggle, el), 'aria-expanded', show);

                    var content = $(("" + (el._wrapper ? '> * ' : '') + (this$1.content)), el);

                    if (animate === false || !this$1.hasTransition) {
                        hide(content, !show);
                        return;
                    }

                    if (!el._wrapper) {
                        el._wrapper = wrapAll(content, ("<div" + (show ? ' hidden' : '') + ">"));
                    }

                    hide(content, false);
                    return toggleHeight(this$1)(el._wrapper, show).then(function () {
                        hide(content, !show);
                        delete el._wrapper;
                        unwrap(content);

                        if (show) {
                            var toggle = $(this$1.$props.toggle, el);
                            if (!isInView(toggle)) {
                                scrollIntoView(toggle, {offset: this$1.offset});
                            }
                        }
                    });
                }); });
            }

        }

    };

    function hide(el, hide) {
        el && (el.hidden = hide);
    }

    var alert = {

        mixins: [Class, Togglable],

        args: 'animation',

        props: {
            close: String
        },

        data: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: assign({opacity: 0}, Togglable.data.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function() {
                var this$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
            }

        }

    };

    var Video = {

        args: 'autoplay',

        props: {
            automute: Boolean,
            autoplay: Boolean
        },

        data: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView: function(ref) {
                var autoplay = ref.autoplay;

                return autoplay === 'inview';
            }

        },

        connected: function() {

            if (this.inView && !hasAttr(this.$el, 'preload')) {
                this.$el.preload = 'none';
            }

            if (this.automute) {
                mute(this.$el);
            }

        },

        update: {

            read: function() {
                return {
                    visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
                    inView: this.inView && isInView(this.$el)
                };
            },

            write: function(ref) {
                var visible = ref.visible;
                var inView = ref.inView;


                if (!visible || this.inView && !inView) {
                    pause(this.$el);
                } else if (this.autoplay === true || this.inView && inView) {
                    play(this.$el);
                }

            },

            events: ['resize', 'scroll']

        }

    };

    var cover = {

        mixins: [Class, Video],

        props: {
            width: Number,
            height: Number
        },

        data: {
            automute: true
        },

        update: {

            read: function() {

                var el = this.$el;
                var ref = getPositionedParent(el) || parent(el);
                var height = ref.offsetHeight;
                var width = ref.offsetWidth;
                var dim = Dimensions.cover(
                    {
                        width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
                        height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
                    },
                    {
                        width: width + (width % 2 ? 1 : 0),
                        height: height + (height % 2 ? 1 : 0)
                    }
                );

                if (!dim.width || !dim.height) {
                    return false;
                }

                return dim;
            },

            write: function(ref) {
                var height = ref.height;
                var width = ref.width;

                css(this.$el, {height: height, width: width});
            },

            events: ['resize']

        }

    };

    function getPositionedParent(el) {
        while ((el = parent(el))) {
            if (css(el, 'position') !== 'static') {
                return el;
            }
        }
    }

    var Position = {

        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
        },

        data: {
            pos: ("bottom-" + (!isRtl ? 'left' : 'right')),
            flip: true,
            offset: false,
            clsPos: ''
        },

        computed: {

            pos: function(ref) {
                var pos = ref.pos;

                return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
            },

            dir: function() {
                return this.pos[0];
            },

            align: function() {
                return this.pos[1];
            }

        },

        methods: {

            positionAt: function(element, target, boundary) {

                removeClasses(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?"));

                var ref = this;
                var offset$1 = ref.offset;
                var axis = this.getAxis();

                if (!isNumeric(offset$1)) {
                    var node = $(offset$1);
                    offset$1 = node
                        ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
                        : 0;
                }

                var ref$1 = positionAt(
                    element,
                    target,
                    axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                    axis === 'x' ? ("" + (this.dir === 'left' ? -offset$1 : offset$1)) : (" " + (this.dir === 'top' ? -offset$1 : offset$1)),
                    null,
                    this.flip,
                    boundary
                ).target;
                var x = ref$1.x;
                var y = ref$1.y;

                this.dir = axis === 'x' ? x : y;
                this.align = axis === 'x' ? y : x;

                toggleClass(element, ((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

            },

            getAxis: function() {
                return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
            }

        }

    };

    var active;

    var drop = {

        mixins: [Position, Togglable],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        data: {
            mode: ['click', 'hover'],
            toggle: '- *',
            boundary: true,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;

                return boundary === true ? window : query(boundary, $el);
            },

            clsDrop: function(ref) {
                var clsDrop = ref.clsDrop;

                return clsDrop || ("uk-" + (this.$options.name));
            },

            clsPos: function() {
                return this.clsDrop;
            }

        },

        created: function() {
            this.tracker = new MouseTracker();
        },

        connected: function() {

            addClass(this.$el, this.clsDrop);

            var ref = this.$props;
            var toggle = ref.toggle;
            this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            });

        },

        disconnected: function() {
            if (this.isActive()) {
                active = null;
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var defaultPrevented = ref.defaultPrevented;
                    var hash = ref.current.hash;

                    if (!defaultPrevented && hash && !within(hash, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'beforescroll',

                handler: function() {
                    this.hide(false);
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle, false);
                    }
                }

            },

            {

                name: 'toggleshow',

                self: true,

                handler: function(e, toggle) {
                    e.preventDefault();
                    this.show(toggle);
                }

            },

            {

                name: 'togglehide',

                self: true,

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: pointerEnter,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.clearTimers();
                    }
                }

            },

            {

                name: pointerLeave,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e) && e.relatedTarget) {
                        this.hide();
                    }
                }

            },

            {

                name: 'toggled',

                self: true,

                handler: function(e, toggled) {

                    if (!toggled) {
                        return;
                    }

                    this.clearTimers();
                    this.position();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;


                    active = this;

                    this.tracker.init();

                    once(this.$el, 'hide', on(document, pointerDown, function (ref) {
                            var target = ref.target;

                            return !within(target, this$1.$el) && once(document, (pointerUp + " " + pointerCancel + " scroll"), function (ref) {
                            var defaultPrevented = ref.defaultPrevented;
                            var type = ref.type;
                            var newTarget = ref.target;

                            if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1.toggle && within(target, this$1.toggle.$el))) {
                                this$1.hide(false);
                            }
                        }, true);
                    }
                    ), {self: true});

                    once(this.$el, 'hide', on(document, 'keydown', function (e) {
                        if (e.keyCode === 27) {
                            this$1.hide(false);
                        }
                    }), {self: true});

                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function(ref) {
                    var target = ref.target;


                    if (this.$el !== target) {
                        active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                        return;
                    }

                    active = this.isActive() ? null : active;
                    this.tracker.cancel();
                }

            }

        ],

        update: {

            write: function() {

                if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function(toggle, delay) {
                var this$1 = this;
                if ( toggle === void 0 ) toggle = this.toggle;
                if ( delay === void 0 ) delay = true;


                if (this.isToggled() && toggle && this.toggle && toggle.$el !== this.toggle.$el) {
                    this.hide(false);
                }

                this.toggle = toggle;

                this.clearTimers();

                if (this.isActive()) {
                    return;
                }

                if (active) {

                    if (delay && active.isDelaying) {
                        this.showTimer = setTimeout(this.show, 10);
                        return;
                    }

                    var prev;
                    while (active && prev !== active && !within(this.$el, active.$el)) {
                        prev = active;
                        active.hide(false);
                    }

                }

                this.showTimer = setTimeout(function () { return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true); }, delay && this.delayShow || 0);

            },

            hide: function(delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1.toggleElement(this$1.$el, false, false); };

                this.clearTimers();

                this.isDelaying = getPositionedElements(this.$el).some(function (el) { return this$1.tracker.movesTo(el); });

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, 50);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function() {
                return active === this;
            },

            position: function() {

                removeClass(this.$el, ((this.clsDrop) + "-stack"));
                toggleClass(this.$el, ((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = offset(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    css(this.$el, prop, alignTo[prop]);
                } else if (this.boundary && this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    addClass(this.$el, ((this.clsDrop) + "-stack"));
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

            }

        }

    };

    function getPositionedElements(el) {
        var result = [];
        apply(el, function (el) { return css(el, 'position') !== 'static' && result.push(el); });
        return result;
    }

    var formCustom = {

        mixins: [Class],

        args: 'target',

        props: {
            target: Boolean
        },

        data: {
            target: false
        },

        computed: {

            input: function(_, $el) {
                return $(selInput, $el);
            },

            state: function() {
                return this.input.nextElementSibling;
            },

            target: function(ref, $el) {
                var target = ref.target;

                return target && (target === true
                    && parent(this.input) === $el
                    && this.input.nextElementSibling
                    || query(target, $el));
            }

        },

        update: function() {

            var ref = this;
            var target = ref.target;
            var input = ref.input;

            if (!target) {
                return;
            }

            var option;
            var prop = isInput(target) ? 'value' : 'textContent';
            var prev = target[prop];
            var value = input.files && input.files[0]
                ? input.files[0].name
                : matches(input, 'select') && (option = $$('option', input).filter(function (el) { return el.selected; })[0]) // eslint-disable-line prefer-destructuring
                    ? option.textContent
                    : input.value;

            if (prev !== value) {
                target[prop] = value;
            }

        },

        events: [

            {
                name: 'change',

                handler: function() {
                    this.$update();
                }
            },

            {
                name: 'reset',

                el: function() {
                    return closest(this.$el, 'form');
                },

                handler: function() {
                    this.$update();
                }
            }

        ]

    };

    // Deprecated
    var gif = {

        update: {

            read: function(data) {

                var inview = isInView(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write: function() {
                this.$el.src = '' + this.$el.src; // force self-assign
            },

            events: ['scroll', 'resize']
        }

    };

    var Margin = {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        data: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read: function() {

                var rows = getRows(this.$el.children);

                return {
                    rows: rows,
                    columns: getColumns(rows)
                };
            },

            write: function(ref) {
                var columns = ref.columns;
                var rows = ref.rows;

                for (var i = 0; i < rows.length; i++) {
                    for (var j = 0; j < rows[i].length; j++) {
                        toggleClass(rows[i][j], this.margin, i !== 0);
                        toggleClass(rows[i][j], this.firstColumn, !!~columns[0].indexOf(rows[i][j]));
                    }
                }
            },

            events: ['resize']

        }

    };

    function getRows(items) {
        return sortBy$1(items, 'top', 'bottom');
    }

    function getColumns(rows) {

        var columns = [];

        for (var i = 0; i < rows.length; i++) {
            var sorted = sortBy$1(rows[i], 'left', 'right');
            for (var j = 0; j < sorted.length; j++) {
                columns[j] = !columns[j] ? sorted[j] : columns[j].concat(sorted[j]);
            }
        }

        return isRtl
            ? columns.reverse()
            : columns;
    }

    function sortBy$1(items, startProp, endProp) {

        var sorted = [[]];

        for (var i = 0; i < items.length; i++) {

            var el = items[i];

            if (!isVisible(el)) {
                continue;
            }

            var dim = getOffset(el);

            for (var j = sorted.length - 1; j >= 0; j--) {

                var current = sorted[j];

                if (!current[0]) {
                    current.push(el);
                    break;
                }

                var startDim = (void 0);
                if (current[0].offsetParent === el.offsetParent) {
                    startDim = getOffset(current[0]);
                } else {
                    dim = getOffset(el, true);
                    startDim = getOffset(current[0], true);
                }

                if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
                    sorted.push([el]);
                    break;
                }

                if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
                    current.push(el);
                    break;
                }

                if (j === 0) {
                    sorted.unshift([el]);
                    break;
                }

            }

        }

        return sorted;
    }

    function getOffset(element, offset) {
        var assign;

        if ( offset === void 0 ) offset = false;

        var offsetTop = element.offsetTop;
        var offsetLeft = element.offsetLeft;
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth;

        if (offset) {
            (assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1]);
        }

        return {
            top: offsetTop,
            left: offsetLeft,
            bottom: offsetTop + offsetHeight,
            right: offsetLeft + offsetWidth
        };
    }

    var grid = {

        extends: Margin,

        mixins: [Class],

        name: 'grid',

        props: {
            masonry: Boolean,
            parallax: Number
        },

        data: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack',
            masonry: false,
            parallax: 0
        },

        connected: function() {
            this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
        },

        update: [

            {

                write: function(ref) {
                    var columns = ref.columns;

                    toggleClass(this.$el, this.clsStack, columns.length < 2);
                },

                events: ['resize']

            },

            {

                read: function(data) {

                    var columns = data.columns;
                    var rows = data.rows;

                    // Filter component makes elements positioned absolute
                    if (!columns.length || !this.masonry && !this.parallax || positionedAbsolute(this.$el)) {
                        data.translates = false;
                        return false;
                    }

                    var translates = false;

                    var nodes = children(this.$el);
                    var columnHeights = getColumnHeights(columns);
                    var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
                    var elHeight = Math.max.apply(Math, columnHeights) + margin;

                    if (this.masonry) {
                        columns = columns.map(function (column) { return sortBy(column, 'offsetTop'); });
                        translates = getTranslates(rows, columns);
                    }

                    var padding = Math.abs(this.parallax);
                    if (padding) {
                        padding = columnHeights.reduce(function (newPadding, hgt, i) { return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight); }
                            , 0);
                    }

                    return {padding: padding, columns: columns, translates: translates, height: translates ? elHeight : ''};

                },

                write: function(ref) {
                    var height = ref.height;
                    var padding = ref.padding;


                    css(this.$el, 'paddingBottom', padding || '');
                    height !== false && css(this.$el, 'height', height);

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var height$1 = ref.height;


                    if (positionedAbsolute(this.$el)) {
                        return false;
                    }

                    return {
                        scrolled: this.parallax
                            ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax)
                            : false
                    };
                },

                write: function(ref) {
                    var columns = ref.columns;
                    var scrolled = ref.scrolled;
                    var translates = ref.translates;


                    if (scrolled === false && !translates) {
                        return;
                    }

                    columns.forEach(function (column, i) { return column.forEach(function (el, j) { return css(el, 'transform', !scrolled && !translates ? '' : ("translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")); }
                        ); }
                    );

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    function positionedAbsolute(el) {
        return children(el).some(function (el) { return css(el, 'position') === 'absolute'; });
    }

    function getTranslates(rows, columns) {

        var rowHeights = rows.map(function (row) { return Math.max.apply(Math, row.map(function (el) { return el.offsetHeight; })); }
        );

        return columns.map(function (elements) {
            var prev = 0;
            return elements.map(function (element, row) { return prev += row
                    ? rowHeights[row - 1] - elements[row - 1].offsetHeight
                    : 0; }
            );
        });
    }

    function getMarginTop(nodes, cls) {

        var ref = nodes.filter(function (el) { return hasClass(el, cls); });
        var node = ref[0];

        return toFloat(node
            ? css(node, 'marginTop')
            : css(nodes[0], 'paddingLeft'));
    }

    function getColumnHeights(columns) {
        return columns.map(function (column) { return column.reduce(function (sum, el) { return sum + el.offsetHeight; }, 0); }
        );
    }

    // IE 11 fix (min-height on a flex container won't apply to its flex items)
    var FlexBug = isIE ? {

        props: {
            selMinHeight: String
        },

        data: {
            selMinHeight: false,
            forceHeight: false
        },

        computed: {

            elements: function(ref, $el) {
                var selMinHeight = ref.selMinHeight;

                return selMinHeight ? $$(selMinHeight, $el) : [$el];
            }

        },

        update: [

            {

                read: function() {
                    css(this.elements, 'height', '');
                },

                order: -5,

                events: ['resize']

            },

            {

                write: function() {
                    var this$1 = this;

                    this.elements.forEach(function (el) {
                        var height = toFloat(css(el, 'minHeight'));
                        if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust(el, 'height', 'content-box')) >= el.offsetHeight)) {
                            css(el, 'height', height);
                        }
                    });
                },

                order: 5,

                events: ['resize']

            }

        ]

    } : {};

    var heightMatch = {

        mixins: [FlexBug],

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        data: {
            target: '> *',
            row: true,
            forceHeight: true
        },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return $$(target, $el);
            }

        },

        update: {

            read: function() {
                return {
                    rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
                };
            },

            write: function(ref) {
                var rows = ref.rows;

                rows.forEach(function (ref) {
                        var heights = ref.heights;
                        var elements = ref.elements;

                        return elements.forEach(function (el, i) { return css(el, 'minHeight', heights[i]); }
                    );
                }
                );
            },

            events: ['resize']

        }

    };

    function match(elements) {

        if (elements.length < 2) {
            return {heights: [''], elements: elements};
        }

        var heights = elements.map(getHeight);
        var max = Math.max.apply(Math, heights);
        var hasMinHeight = elements.some(function (el) { return el.style.minHeight; });
        var hasShrunk = elements.some(function (el, i) { return !el.style.minHeight && heights[i] < max; });

        if (hasMinHeight && hasShrunk) {
            css(elements, 'minHeight', '');
            heights = elements.map(getHeight);
            max = Math.max.apply(Math, heights);
        }

        heights = elements.map(function (el, i) { return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max; }
        );

        return {heights: heights, elements: elements};
    }

    function getHeight(element) {

        var style = false;
        if (!isVisible(element)) {
            style = element.style.display;
            css(element, 'display', 'block', 'important');
        }

        var height = dimensions(element).height - boxModelAdjust(element, 'height', 'content-box');

        if (style !== false) {
            css(element, 'display', style);
        }

        return height;
    }

    var heightViewport = {

        mixins: [FlexBug],

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            read: function(ref) {
                var prev = ref.minHeight;


                if (!isVisible(this.$el)) {
                    return false;
                }

                var minHeight = '';
                var box = boxModelAdjust(this.$el, 'height', 'content-box');

                if (this.expand) {

                    minHeight = height(window) - (dimensions(document.documentElement).height - dimensions(this.$el).height) - box || '';

                } else {

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = 'calc(100vh';

                    if (this.offsetTop) {

                        var ref$1 = offset(this.$el);
                        var top = ref$1.top;
                        minHeight += top > 0 && top < height(window) / 2 ? (" - " + top + "px") : '';

                    }

                    if (this.offsetBottom === true) {

                        minHeight += " - " + (dimensions(this.$el.nextElementSibling).height) + "px";

                    } else if (isNumeric(this.offsetBottom)) {

                        minHeight += " - " + (this.offsetBottom) + "vh";

                    } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {

                        minHeight += " - " + (toFloat(this.offsetBottom)) + "px";

                    } else if (isString(this.offsetBottom)) {

                        minHeight += " - " + (dimensions(query(this.offsetBottom, this.$el)).height) + "px";

                    }

                    minHeight += (box ? (" - " + box + "px") : '') + ")";

                }

                return {minHeight: minHeight, prev: prev};
            },

            write: function(ref) {
                var minHeight = ref.minHeight;
                var prev = ref.prev;


                css(this.$el, {minHeight: minHeight});

                if (minHeight !== prev) {
                    this.$update(this.$el, 'resize');
                }

                if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
                    css(this.$el, 'minHeight', this.minHeight);
                }

            },

            events: ['resize']

        }

    };

    var SVG = {

        args: 'src',

        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean, // IE 11
            attributes: 'list'
        },

        data: {
            ratio: 1,
            include: ['style', 'class', 'focusable'],
            class: '',
            strokeAnimation: false
        },

        beforeConnect: function() {
            this.class += ' uk-svg';
        },

        connected: function() {
            var this$1 = this;
            var assign;


            if (!this.icon && includes(this.src, '#')) {
                (assign = this.src.split('#'), this.src = assign[0], this.icon = assign[1]);
            }

            this.svg = this.getSvg().then(function (el) {

                if (this$1._connected) {

                    var svg = insertSVG(el, this$1.$el);

                    if (this$1.svgEl && svg !== this$1.svgEl) {
                        remove(this$1.svgEl);
                    }

                    this$1.applyAttributes(svg, el);
                    this$1.$emit();
                    return this$1.svgEl = svg;
                }

            }, noop);

        },

        disconnected: function() {
            var this$1 = this;


            this.svg.then(function (svg) {
                if (!this$1._connected) {

                    if (isVoidElement(this$1.$el)) {
                        this$1.$el.hidden = false;
                    }

                    remove(svg);
                    this$1.svgEl = null;
                }
            });

            this.svg = null;

        },

        update: {

            read: function() {
                return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
            },

            write: function() {
                applyAnimation(this.svgEl);
            },

            type: ['resize']

        },

        methods: {

            getSvg: function() {
                var this$1 = this;

                return loadSVG(this.src).then(function (svg) { return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.'); }
                );
            },

            applyAttributes: function(el, ref) {
                var this$1 = this;


                for (var prop in this.$options.props) {
                    if (includes(this.include, prop) && (prop in this)) {
                        attr(el, prop, this[prop]);
                    }
                }

                for (var attribute in this.attributes) {
                    var ref$1 = this.attributes[attribute].split(':', 2);
                    var prop$1 = ref$1[0];
                    var value = ref$1[1];
                    attr(el, prop$1, value);
                }

                if (!this.id) {
                    removeAttr(el, 'id');
                }

                var props = ['width', 'height'];
                var dimensions = props.map(function (prop) { return this$1[prop]; });

                if (!dimensions.some(function (val) { return val; })) {
                    dimensions = props.map(function (prop) { return attr(ref, prop); });
                }

                var viewBox = attr(ref, 'viewBox');
                if (viewBox && !dimensions.some(function (val) { return val; })) {
                    dimensions = viewBox.split(' ').slice(2);
                }

                dimensions.forEach(function (val, i) { return attr(el, props[i], toFloat(val) * this$1.ratio || null); }
                );

            }

        }

    };

    var loadSVG = memoize(function (src) { return new Promise(function (resolve, reject) {

            if (!src) {
                reject();
                return;
            }

            if (startsWith(src, 'data:')) {
                resolve(decodeURIComponent(src.split(',')[1]));
            } else {

                ajax(src).then(
                    function (xhr) { return resolve(xhr.response); },
                    function () { return reject('SVG not found.'); }
                );

            }
        }); }
    );

    function parseSVG(svg, icon) {

        if (icon && includes(svg, '<symbol')) {
            svg = parseSymbols(svg, icon) || svg;
        }

        svg = $(svg.substr(svg.indexOf('<svg')));
        return svg && svg.hasChildNodes() && svg;
    }

    var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            symbolRe.lastIndex = 0;

            var match;
            while ((match = symbolRe.exec(svg))) {
                symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + (match[1]) + "svg>";
            }

        }

        return symbols[svg][icon];
    }

    function applyAnimation(el) {

        var length = getMaxPathLength(el);

        if (length) {
            el.style.setProperty('--uk-animation-stroke', length);
        }

    }

    function getMaxPathLength(el) {
        return Math.ceil(Math.max.apply(Math, [ 0 ].concat( $$('[stroke]', el).map(function (stroke) {
            try {
                return stroke.getTotalLength();
            } catch (e) {
                return 0;
            }
        }) )));
    }

    function insertSVG(el, root) {

        if (isVoidElement(root) || root.tagName === 'CANVAS') {

            root.hidden = true;

            var next = root.nextElementSibling;
            return equals(el, next)
                ? next
                : after(root, el);

        }

        var last = root.lastElementChild;
        return equals(el, last)
            ? last
            : append(root, el);
    }

    function equals(el, other) {
        return isSVG(el) && isSVG(other) && innerHTML(el) === innerHTML(other);
    }

    function isSVG(el) {
        return el && el.tagName === 'svg';
    }

    function innerHTML(el) {
        return (el.innerHTML || (new XMLSerializer()).serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, '$1')).replace(/\s/g, '');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    var icons = {
        spinner: spinner,
        totop: totop,
        marker: marker,
        'close-icon': closeIcon,
        'close-large': closeLarge,
        'navbar-toggle-icon': navbarToggleIcon,
        'overlay-icon': overlayIcon,
        'pagination-next': paginationNext,
        'pagination-previous': paginationPrevious,
        'search-icon': searchIcon,
        'search-large': searchLarge,
        'search-navbar': searchNavbar,
        'slidenav-next': slidenavNext,
        'slidenav-next-large': slidenavNextLarge,
        'slidenav-previous': slidenavPrevious,
        'slidenav-previous-large': slidenavPreviousLarge
    };

    var Icon = {

        install: install,

        extends: SVG,

        args: 'icon',

        props: ['icon'],

        data: {
            include: ['focusable']
        },

        isIcon: true,

        beforeConnect: function() {
            addClass(this.$el, 'uk-icon');
        },

        methods: {

            getSvg: function() {

                var icon = getIcon(this.icon);

                if (!icon) {
                    return Promise.reject('Icon not found.');
                }

                return Promise.resolve(icon);
            }

        }

    };

    var IconComponent = {

        args: false,

        extends: Icon,

        data: function (vm) { return ({
            icon: hyphenate(vm.constructor.options.name)
        }); },

        beforeConnect: function() {
            addClass(this.$el, this.$name);
        }

    };

    var Slidenav = {

        extends: IconComponent,

        beforeConnect: function() {
            addClass(this.$el, 'uk-slidenav');
        },

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-slidenav-large')
                    ? (icon + "-large")
                    : icon;
            }

        }

    };

    var Search = {

        extends: IconComponent,

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length
                    ? 'search-large'
                    : parents($el, '.uk-search-navbar').length
                        ? 'search-navbar'
                        : icon;
            }

        }

    };

    var Close = {

        extends: IconComponent,

        computed: {

            icon: function() {
                return ("close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon'));
            }

        }

    };

    var Spinner = {

        extends: IconComponent,

        connected: function() {
            var this$1 = this;

            this.svg.then(function (svg) { return svg && this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio); });
        }

    };

    var parsed = {};
    function install(UIkit) {
        UIkit.icon.add = function (name, svg) {
            var obj;


            var added = isString(name) ? (( obj = {}, obj[name] = svg, obj )) : name;
            each(added, function (svg, name) {
                icons[name] = svg;
                delete parsed[name];
            });

            if (UIkit._initialized) {
                apply(document.body, function (el) { return each(UIkit.getComponents(el), function (cmp) {
                        cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                    }); }
                );
            }
        };
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
        }

        return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
        return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    var img = {

        args: 'dataSrc',

        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },

        data: {
            dataSrc: '',
            dataSrcset: false,
            sizes: false,
            width: false,
            height: false,
            offsetTop: '50vh',
            offsetLeft: '50vw',
            target: false
        },

        computed: {

            cacheKey: function(ref) {
                var dataSrc = ref.dataSrc;

                return ((this.$name) + "." + dataSrc);
            },

            width: function(ref) {
                var width = ref.width;
                var dataWidth = ref.dataWidth;

                return width || dataWidth;
            },

            height: function(ref) {
                var height = ref.height;
                var dataHeight = ref.dataHeight;

                return height || dataHeight;
            },

            sizes: function(ref) {
                var sizes = ref.sizes;
                var dataSizes = ref.dataSizes;

                return sizes || dataSizes;
            },

            isImg: function(_, $el) {
                return isImg($el);
            },

            target: {

                get: function(ref) {
                    var target = ref.target;

                    return [this.$el ].concat( queryAll(target, this.$el));
                },

                watch: function() {
                    this.observe();
                }

            },

            offsetTop: function(ref) {
                var offsetTop = ref.offsetTop;

                return toPx(offsetTop, 'height');
            },

            offsetLeft: function(ref) {
                var offsetLeft = ref.offsetLeft;

                return toPx(offsetLeft, 'width');
            }

        },

        connected: function() {

            if (!window.IntersectionObserver) {
                setSrcAttrs(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
                return;
            }

            if (storage[this.cacheKey]) {
                setSrcAttrs(this.$el, storage[this.cacheKey], this.dataSrcset, this.sizes);
            } else if (this.isImg && this.width && this.height) {
                setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
            }

            this.observer = new IntersectionObserver(this.load, {
                rootMargin: ((this.offsetTop) + "px " + (this.offsetLeft) + "px")
            });

            requestAnimationFrame(this.observe);

        },

        disconnected: function() {
            this.observer && this.observer.disconnect();
        },

        update: {

            read: function(ref) {
                var this$1 = this;
                var image = ref.image;


                if (!this.observer) {
                    return false;
                }

                if (!image && document.readyState === 'complete') {
                    this.load(this.observer.takeRecords());
                }

                if (this.isImg) {
                    return false;
                }

                image && image.then(function (img) { return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img)); });

            },

            write: function(data) {

                if (this.dataSrcset && window.devicePixelRatio !== 1) {

                    var bgSize = css(this.$el, 'backgroundSize');
                    if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
                        data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
                        css(this.$el, 'backgroundSize', ((data.bgSize) + "px"));
                    }

                }

            },

            events: ['resize']

        },

        methods: {

            load: function(entries) {
                var this$1 = this;


                // Old chromium based browsers (UC Browser) did not implement `isIntersecting`
                if (!entries.some(function (entry) { return isUndefined(entry.isIntersecting) || entry.isIntersecting; })) {
                    return;
                }

                this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {

                    setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
                    storage[this$1.cacheKey] = currentSrc(img);
                    return img;

                }, function (e) { return trigger(this$1.$el, new e.constructor(e.type, e)); });

                this.observer.disconnect();
            },

            observe: function() {
                var this$1 = this;

                if (this._connected && !this._data.image) {
                    this.target.forEach(function (el) { return this$1.observer.observe(el); });
                }
            }

        }

    };

    function setSrcAttrs(el, src, srcset, sizes) {

        if (isImg(el)) {
            sizes && (el.sizes = sizes);
            srcset && (el.srcset = srcset);
            src && (el.src = src);
        } else if (src) {

            var change = !includes(el.style.backgroundImage, src);
            if (change) {
                css(el, 'backgroundImage', ("url(" + (escape(src)) + ")"));
                trigger(el, createEvent('load', false));
            }

        }

    }

    function getPlaceholderImage(width, height, sizes) {
        var assign;


        if (sizes) {
            ((assign = Dimensions.ratio({width: width, height: height}, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height));
        }

        return ("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>");
    }

    var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function sizesToPixel(sizes) {
        var matches;

        sizesRe.lastIndex = 0;

        while ((matches = sizesRe.exec(sizes))) {
            if (!matches[1] || window.matchMedia(matches[1]).matches) {
                matches = evaluateSize(matches[2]);
                break;
            }
        }

        return matches || '100vw';
    }

    var sizeRe = /\d+(?:\w+|%)/g;
    var additionRe = /[+-]?(\d+)/g;
    function evaluateSize(size) {
        return startsWith(size, 'calc')
            ? size
                .slice(5, -1)
                .replace(sizeRe, function (size) { return toPx(size); })
                .replace(/ /g, '')
                .match(additionRe)
                .reduce(function (a, b) { return a + +b; }, 0)
            : size;
    }

    var srcSetRe = /\s+\d+w\s*(?:,|$)/g;
    function getSourceSize(srcset, sizes) {
        var srcSize = toPx(sizesToPixel(sizes));
        var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) { return a - b; });

        return descriptors.filter(function (size) { return size >= srcSize; })[0] || descriptors.pop() || '';
    }

    function isImg(el) {
        return el.tagName === 'IMG';
    }

    function currentSrc(el) {
        return el.currentSrc || el.src;
    }

    var key = '__test__';
    var storage;

    // workaround for Safari's private browsing mode and accessing sessionStorage in Blink
    try {
        storage = window.sessionStorage || {};
        storage[key] = 1;
        delete storage[key];
    } catch (e) {
        storage = {};
    }

    var Media = {

        props: {
            media: Boolean
        },

        data: {
            media: false
        },

        computed: {

            matchMedia: function() {
                var media = toMedia(this.media);
                return !media || window.matchMedia(media).matches;
            }

        }

    };

    function toMedia(value) {

        if (isString(value)) {
            if (value[0] === '@') {
                var name = "breakpoint-" + (value.substr(1));
                value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

    var leader = {

        mixins: [Class, Media],

        props: {
            fill: String
        },

        data: {
            fill: '',
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function(ref) {
                var fill = ref.fill;

                return fill || getCssVar('leader-fill-content');
            }

        },

        connected: function() {
            var assign;

            (assign = wrapInner(this.$el, ("<span class=\"" + (this.clsWrapper) + "\">")), this.wrapper = assign[0]);
        },

        disconnected: function() {
            unwrap(this.wrapper.childNodes);
        },

        update: {

            read: function(ref) {
                var changed = ref.changed;
                var width = ref.width;


                var prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width: width,
                    fill: this.fill,
                    changed: changed || prev !== width,
                    hide: !this.matchMedia
                };
            },

            write: function(data) {

                toggleClass(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
                }

            },

            events: ['resize']

        }

    };

    var Container = {

        props: {
            container: Boolean
        },

        data: {
            container: true
        },

        computed: {

            container: function(ref) {
                var container = ref.container;

                return container === true && this.$container || container && $(container);
            }

        }

    };

    var active$1 = [];

    var Modal = {

        mixins: [Class, Container, Togglable],

        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },

        data: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
        },

        computed: {

            panel: function(ref, $el) {
                var selPanel = ref.selPanel;

                return $(selPanel, $el);
            },

            transitionElement: function() {
                return this.panel;
            },

            bgClose: function(ref) {
                var bgClose = ref.bgClose;

                return bgClose && this.panel;
            }

        },

        beforeDisconnect: function() {
            if (this.isToggled()) {
                this.toggleElement(this.$el, false, false);
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    e.preventDefault();

                    if (this.isToggled() === includes(active$1, this)) {
                        this.toggle();
                    }
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function(e) {

                    if (includes(active$1, this)) {
                        return false;
                    }

                    if (!this.stack && active$1.length) {
                        Promise.all(active$1.map(function (modal) { return modal.hide(); })).then(this.show);
                        e.preventDefault();
                    } else {
                        active$1.push(this);
                    }
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;


                    var docEl = document.documentElement;

                    if (width(window) > docEl.clientWidth && this.overlay) {
                        css(document.body, 'overflowY', 'scroll');
                    }

                    if (this.stack) {
                        css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active$1.length);
                    }

                    addClass(docEl, this.clsPage);

                    if (this.bgClose) {
                        once(this.$el, 'hide', on(document, pointerDown, function (ref) {
                            var target = ref.target;


                            if (last(active$1) !== this$1 || this$1.overlay && !within(target, this$1.$el) || within(target, this$1.panel)) {
                                return;
                            }

                            once(document, (pointerUp + " " + pointerCancel + " scroll"), function (ref) {
                                var defaultPrevented = ref.defaultPrevented;
                                var type = ref.type;
                                var newTarget = ref.target;

                                if (!defaultPrevented && type === pointerUp && target === newTarget) {
                                    this$1.hide();
                                }
                            }, true);

                        }), {self: true});
                    }

                    if (this.escClose) {
                        once(this.$el, 'hide', on(document, 'keydown', function (e) {
                            if (e.keyCode === 27 && last(active$1) === this$1) {
                                this$1.hide();
                            }
                        }), {self: true});
                    }
                }

            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    var this$1 = this;


                    if (includes(active$1, this)) {
                        active$1.splice(active$1.indexOf(this), 1);
                    }

                    if (!active$1.length) {
                        css(document.body, 'overflowY', '');
                    }

                    css(this.$el, 'zIndex', '');

                    if (!active$1.some(function (modal) { return modal.clsPage === this$1.clsPage; })) {
                        removeClass(document.documentElement, this.clsPage);
                    }

                }

            }

        ],

        methods: {

            toggle: function() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function() {
                var this$1 = this;

                if (this.container && parent(this.$el) !== this.container) {
                    append(this.container, this.$el);
                    return new Promise(function (resolve) { return requestAnimationFrame(function () { return this$1.show().then(resolve); }
                        ); }
                    );
                }

                return this.toggleElement(this.$el, true, animate$1(this));
            },

            hide: function() {
                return this.toggleElement(this.$el, false, animate$1(this));
            }

        }

    };

    function animate$1(ref) {
        var transitionElement = ref.transitionElement;
        var _toggle = ref._toggle;

        return function (el, show) { return new Promise(function (resolve, reject) { return once(el, 'show hide', function () {
                    el._reject && el._reject();
                    el._reject = reject;

                    _toggle(el, show);

                    var off = once(transitionElement, 'transitionstart', function () {
                        once(transitionElement, 'transitionend transitioncancel', resolve, {self: true});
                        clearTimeout(timer);
                    }, {self: true});

                    var timer = setTimeout(function () {
                        off();
                        resolve();
                    }, toMs(css(transitionElement, 'transitionDuration')));

                }); }
            ).then(function () { return delete el._reject; }); };
    }

    var modal = {

        install: install$1,

        mixins: [Modal],

        data: {
            clsPage: 'uk-modal-page',
            selPanel: '.uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                        addClass(this.$el, 'uk-flex');
                    } else {
                        css(this.$el, 'display', 'block');
                    }

                    height(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    css(this.$el, 'display', '');
                    removeClass(this.$el, 'uk-flex');

                }
            }

        ]

    };

    function install$1(ref) {
        var modal = ref.modal;


        modal.dialog = function (content, options) {

            var dialog = modal(
                ("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div>"),
                options
            );

            dialog.show();

            on(dialog.$el, 'hidden', function () { return Promise.resolve().then(function () { return dialog.$destroy(true); }
                ); }, {self: true}
            );

            return dialog;
        };

        modal.alert = function (message, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (labels.ok) + "</button> </div>");
            },
                options,
                function (deferred) { return deferred.resolve(); }
            );
        };

        modal.confirm = function (message, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + (labels.ok) + "</button> </div> </form>");
            },
                options,
                function (deferred) { return deferred.reject(); }
            );
        };

        modal.prompt = function (message, value, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\">" + (labels.ok) + "</button> </div> </form>");
            },
                options,
                function (deferred) { return deferred.resolve(null); },
                function (dialog) { return $('input', dialog.$el).value; }
            );
        };

        modal.labels = {
            ok: 'Ok',
            cancel: 'Cancel'
        };

        function openDialog(tmpl, options, hideFn, submitFn) {

            options = assign({bgClose: false, escClose: true, labels: modal.labels}, options);

            var dialog = modal.dialog(tmpl(options), options);
            var deferred = new Deferred();

            var resolved = false;

            on(dialog.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                deferred.resolve(submitFn && submitFn(dialog));
                resolved = true;
                dialog.hide();
            });

            on(dialog.$el, 'hide', function () { return !resolved && hideFn(deferred); });

            deferred.promise.dialog = dialog;

            return deferred.promise;
        }

    }

    var nav = {

        extends: Accordion,

        data: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    };

    var navbar = {

        mixins: [Class, FlexBug],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },

        data: {
            dropdown: '.uk-navbar-nav > li',
            align: !isRtl ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200,
            forceHeight: true,
            selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;
                var boundaryAlign = ref.boundaryAlign;

                return (boundary === true || boundaryAlign) ? $el : boundary;
            },

            dropbarAnchor: function(ref, $el) {
                var dropbarAnchor = ref.dropbarAnchor;

                return query(dropbarAnchor, $el);
            },

            pos: function(ref) {
                var align = ref.align;

                return ("bottom-" + align);
            },

            dropbar: {

                get: function(ref) {
                    var dropbar = ref.dropbar;


                    if (!dropbar) {
                        return null;
                    }

                    dropbar = this._dropbar || query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el);

                    return dropbar ? dropbar : (this._dropbar = $('<div></div>'));

                },

                watch: function(dropbar) {
                    addClass(dropbar, 'uk-navbar-dropbar');
                },

                immediate: true

            },

            dropdowns: {

                get: function(ref, $el) {
                    var dropdown = ref.dropdown;
                    var clsDrop = ref.clsDrop;

                    return $$((dropdown + " ." + clsDrop), $el);
                },

                watch: function(dropdowns) {
                    var this$1 = this;

                    this.$create(
                        'drop',
                        dropdowns.filter(function (el) { return !this$1.getDropdown(el); }),
                        assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
                    );
                },

                immediate: true

            }

        },

        disconnected: function() {
            this.dropbar && remove(this.dropbar);
            delete this._dropbar;
        },

        events: [

            {
                name: 'mouseover',

                delegate: function() {
                    return this.dropdown;
                },

                handler: function(ref) {
                    var current = ref.current;

                    var active = this.getActive();
                    if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            },

            {
                name: 'mouseleave',

                el: function() {
                    return this.dropbar;
                },

                handler: function() {
                    var active = this.getActive();

                    if (active && !this.dropdowns.some(function (el) { return matches(el, ':hover'); })) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                capture: true,

                filter: function() {
                    return this.dropbar;
                },

                handler: function() {

                    if (!parent(this.dropbar)) {
                        after(this.dropbarAnchor || this.$el, this.dropbar);
                    }

                }
            },

            {
                name: 'show',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;
                    var dir = ref.dir;

                    if (!hasClass($el, this.clsDrop)) {
                        return;
                    }

                    if (this.dropbarMode === 'slide') {
                        addClass(this.dropbar, 'uk-navbar-dropbar-slide');
                    }

                    this.clsDrop && addClass($el, ((this.clsDrop) + "-dropbar"));

                    if (dir === 'bottom') {
                        this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
                    }
                }
            },

            {
                name: 'beforehide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(e, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                        e.preventDefault();
                    }
                }
            },

            {
                name: 'hide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;

                    if (!hasClass($el, this.clsDrop)) {
                        return;
                    }

                    var active = this.getActive();

                    if (!active || active && active.$el === $el) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            getActive: function() {
                var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) { return drop && drop.isActive(); });
                var active = ref[0];
                return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
            },

            transitionTo: function(newHeight, el) {
                var this$1 = this;


                var ref = this;
                var dropbar = ref.dropbar;
                var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

                el = oldHeight < newHeight && el;

                css(el, 'clip', ("rect(0," + (el.offsetWidth) + "px," + oldHeight + "px,0)"));

                height(dropbar, oldHeight);

                Transition.cancel([el, dropbar]);
                return Promise.all([
                    Transition.start(dropbar, {height: newHeight}, this.duration),
                    Transition.start(el, {clip: ("rect(0," + (el.offsetWidth) + "px," + newHeight + "px,0)")}, this.duration)
                ])
                    .catch(noop)
                    .then(function () {
                        css(el, {clip: ''});
                        this$1.$update(dropbar);
                    });
            },

            getDropdown: function(el) {
                return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
            }

        }

    };

    var offcanvas = {

        mixins: [Modal],

        args: 'mode',

        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        data: {
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            selPanel: '.uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContainerAnimation: 'uk-offcanvas-container-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close',
            container: false
        },

        computed: {

            clsFlip: function(ref) {
                var flip = ref.flip;
                var clsFlip = ref.clsFlip;

                return flip ? clsFlip : '';
            },

            clsOverlay: function(ref) {
                var overlay = ref.overlay;
                var clsOverlay = ref.clsOverlay;

                return overlay ? clsOverlay : '';
            },

            clsMode: function(ref) {
                var mode = ref.mode;
                var clsMode = ref.clsMode;

                return (clsMode + "-" + mode);
            },

            clsSidebarAnimation: function(ref) {
                var mode = ref.mode;
                var clsSidebarAnimation = ref.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },

            clsContainerAnimation: function(ref) {
                var mode = ref.mode;
                var clsContainerAnimation = ref.clsContainerAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
            },

            transitionElement: function(ref) {
                var mode = ref.mode;

                return mode === 'reveal' ? parent(this.panel) : this.panel;
            }

        },

        update: {

            read: function() {
                if (this.isToggled() && !isVisible(this.$el)) {
                    this.hide();
                }
            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var hash = ref.current.hash;
                    var defaultPrevented = ref.defaultPrevented;

                    if (!defaultPrevented && hash && $(hash, document.body)) {
                        this.hide();
                    }
                }

            },

            {
                name: 'touchstart',

                passive: true,

                el: function() {
                    return this.panel;
                },

                handler: function(ref) {
                    var targetTouches = ref.targetTouches;


                    if (targetTouches.length === 1) {
                        this.clientY = targetTouches[0].clientY;
                    }

                }

            },

            {
                name: 'touchmove',

                self: true,
                passive: false,

                filter: function() {
                    return this.overlay;
                },

                handler: function(e) {
                    e.cancelable && e.preventDefault();
                }

            },

            {
                name: 'touchmove',

                passive: false,

                el: function() {
                    return this.panel;
                },

                handler: function(e) {

                    if (e.targetTouches.length !== 1) {
                        return;
                    }

                    var clientY = event.targetTouches[0].clientY - this.clientY;
                    var ref = this.panel;
                    var scrollTop = ref.scrollTop;
                    var scrollHeight = ref.scrollHeight;
                    var clientHeight = ref.clientHeight;

                    if (clientHeight >= scrollHeight
                        || scrollTop === 0 && clientY > 0
                        || scrollHeight - scrollTop <= clientHeight && clientY < 0
                    ) {
                        e.cancelable && e.preventDefault();
                    }

                }

            },

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
                        wrapAll(this.panel, '<div>');
                        addClass(parent(this.panel), this.clsMode);
                    }

                    css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
                    addClass(document.body, this.clsContainer, this.clsFlip);
                    css(document.body, 'touch-action', 'pan-y pinch-zoom');
                    css(this.$el, 'display', 'block');
                    addClass(this.$el, this.clsOverlay);
                    addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');

                    height(document.body); // force reflow
                    addClass(document.body, this.clsContainerAnimation);

                    this.clsContainerAnimation && suppressUserScale();


                }
            },

            {
                name: 'hide',

                self: true,

                handler: function() {
                    removeClass(document.body, this.clsContainerAnimation);
                    css(document.body, 'touch-action', '');
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    this.clsContainerAnimation && resumeUserScale();

                    if (this.mode === 'reveal') {
                        unwrap(this.panel);
                    }

                    removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                    removeClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', '');
                    removeClass(document.body, this.clsContainer, this.clsFlip);

                    css(document.documentElement, 'overflowY', '');

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function(e) {

                    if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
                        this.hide();
                    }

                }
            }

        ]

    };

    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
        getViewport$1().content += ',user-scalable=0';
    }

    function resumeUserScale() {
        var viewport = getViewport$1();
        viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport$1() {
        return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
    }

    var overflowAuto = {

        mixins: [Class],

        props: {
            selContainer: String,
            selContent: String
        },

        data: {
            selContainer: '.uk-modal',
            selContent: '.uk-modal-dialog'
        },

        computed: {

            container: function(ref, $el) {
                var selContainer = ref.selContainer;

                return closest($el, selContainer);
            },

            content: function(ref, $el) {
                var selContent = ref.selContent;

                return closest($el, selContent);
            }

        },

        connected: function() {
            css(this.$el, 'minHeight', 150);
        },

        update: {

            read: function() {

                if (!this.content || !this.container || !isVisible(this.$el)) {
                    return false;
                }

                return {
                    current: toFloat(css(this.$el, 'maxHeight')),
                    max: Math.max(150, height(this.container) - (dimensions(this.content).height - height(this.$el)))
                };
            },

            write: function(ref) {
                var current = ref.current;
                var max = ref.max;

                css(this.$el, 'maxHeight', max);
                if (Math.round(current) !== Math.round(max)) {
                    trigger(this.$el, 'resize');
                }
            },

            events: ['resize']

        }

    };

    var responsive = {

        props: ['width', 'height'],

        connected: function() {
            addClass(this.$el, 'uk-responsive-width');
        },

        update: {

            read: function() {
                return isVisible(this.$el) && this.width && this.height
                    ? {width: width(parent(this.$el)), height: this.height}
                    : false;
            },

            write: function(dim) {
                height(this.$el, Dimensions.contain({
                    height: this.height,
                    width: this.width
                }, dim).height);
            },

            events: ['resize']

        }

    };

    var scroll = {

        props: {
            offset: Number
        },

        data: {
            offset: 0
        },

        methods: {

            scrollTo: function(el) {
                var this$1 = this;


                el = el && $(el) || document.body;

                if (trigger(this.$el, 'beforescroll', [this, el])) {
                    scrollIntoView(el, {offset: this.offset}).then(function () { return trigger(this$1.$el, 'scrolled', [this$1, el]); }
                    );
                }

            }

        },

        events: {

            click: function(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(("#" + (escape(decodeURIComponent((this.$el.hash || '').substr(1))))));
            }

        }

    };

    var stateKey$1 = '_ukScrollspy';
    var scrollspy = {

        args: 'cls',

        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        data: function () { return ({
            cls: false,
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        }); },

        computed: {

            elements: {

                get: function(ref, $el) {
                    var target = ref.target;

                    return target ? $$(target, $el) : [$el];
                },

                watch: function(elements) {
                    if (this.hidden) {
                        css(filter(elements, (":not(." + (this.inViewClass) + ")")), 'visibility', 'hidden');
                    }
                },

                immediate: true

            }

        },

        disconnected: function() {
            var this$1 = this;

            this.elements.forEach(function (el) {
                removeClass(el, this$1.inViewClass, el[stateKey$1] ? el[stateKey$1].cls : '');
                delete el[stateKey$1];
            });
        },

        update: [

            {

                read: function(ref) {
                    var this$1 = this;
                    var update = ref.update;


                    if (!update) {
                        return;
                    }

                    this.elements.forEach(function (el) {

                        if (!el[stateKey$1]) {
                            el[stateKey$1] = {cls: data(el, 'uk-scrollspy-class') || this$1.cls};
                        }

                        el[stateKey$1].show = isInView(el, this$1.offsetTop, this$1.offsetLeft);

                    });

                },

                write: function(data) {
                    var this$1 = this;


                    // Let child components be applied at least once first
                    if (!data.update) {
                        this.$emit();
                        return data.update = true;
                    }

                    this.elements.forEach(function (el) {

                        var state = el[stateKey$1];
                        var toggle = function (inview) {

                            css(el, 'visibility', !inview && this$1.hidden ? 'hidden' : '');

                            toggleClass(el, this$1.inViewClass, inview);
                            toggleClass(el, state.cls);

                            trigger(el, inview ? 'inview' : 'outview');

                            state.inview = inview;

                            this$1.$update(el);

                        };

                        if (state.show && !state.inview && !state.queued) {

                            state.queued = true;

                            data.promise = (data.promise || Promise.resolve()).then(function () { return new Promise(function (resolve) { return setTimeout(resolve, this$1.delay); }
                                ); }
                            ).then(function () {
                                toggle(true);
                                setTimeout(function () {
                                    state.queued = false;
                                    this$1.$emit();
                                }, 300);
                            });

                        } else if (!state.show && state.inview && !state.queued && this$1.repeat) {

                            toggle(false);

                        }

                    });

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var scrollspyNav = {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        data: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: {

                get: function(_, $el) {
                    return $$('a[href^="#"]', $el).filter(function (el) { return el.hash; });
                },

                watch: function(links) {
                    if (this.scroll) {
                        this.$create('scroll', links, {offset: this.offset || 0});
                    }
                },

                immediate: true

            },

            targets: function() {
                return $$(this.links.map(function (el) { return escape(el.hash).substr(1); }).join(','));
            },

            elements: function(ref) {
                var selector = ref.closest;

                return closest(this.links, selector || '*');
            }

        },

        update: [

            {

                read: function() {
                    var this$1 = this;


                    var ref = this.targets;
                    var length = ref.length;

                    if (!length || !isVisible(this.$el)) {
                        return false;
                    }

                    var ref$1 = scrollParents(this.targets, /auto|scroll/, true);
                    var scrollElement = ref$1[0];
                    var scrollTop = scrollElement.scrollTop;
                    var scrollHeight = scrollElement.scrollHeight;
                    var max = scrollHeight - getViewportClientHeight(scrollElement);
                    var active = false;

                    if (scrollTop === max) {
                        active = length - 1;
                    } else {

                        this.targets.every(function (el, i) {
                            if (offset(el).top - offset(getViewport(scrollElement)).top - this$1.offset <= 0) {
                                active = i;
                                return true;
                            }
                        });

                        if (active === false && this.overflow) {
                            active = 0;
                        }
                    }

                    return {active: active};
                },

                write: function(ref) {
                    var active = ref.active;


                    this.links.forEach(function (el) { return el.blur(); });
                    removeClass(this.elements, this.cls);

                    if (active !== false) {
                        trigger(this.$el, 'active', [active, addClass(this.elements[active], this.cls)]);
                    }

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var sticky = {

        mixins: [Class, Media],

        props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
        },

        data: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            targetOffset: false
        },

        computed: {

            offset: function(ref) {
                var offset = ref.offset;

                return toPx(offset);
            },

            selTarget: function(ref, $el) {
                var selTarget = ref.selTarget;

                return selTarget && $(selTarget, $el) || $el;
            },

            widthElement: function(ref, $el) {
                var widthElement = ref.widthElement;

                return query(widthElement, $el) || this.placeholder;
            },

            isActive: {

                get: function() {
                    return hasClass(this.selTarget, this.clsActive);
                },

                set: function(value) {
                    if (value && !this.isActive) {
                        replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                        trigger(this.$el, 'active');
                    } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
                        replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                        trigger(this.$el, 'inactive');
                    }
                }

            }

        },

        connected: function() {
            this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.isActive = false;
        },

        disconnected: function() {

            if (this.isFixed) {
                this.hide();
                removeClass(this.selTarget, this.clsInactive);
            }

            remove(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        events: [

            {

                name: 'load hashchange popstate',

                el: function() {
                    return window;
                },

                handler: function() {
                    var this$1 = this;


                    if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
                        return;
                    }

                    var target = $(location.hash);

                    if (target) {
                        fastdom.read(function () {

                            var ref = offset(target);
                            var top = ref.top;
                            var elTop = offset(this$1.$el).top;
                            var elHeight = this$1.$el.offsetHeight;

                            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                                scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
                            }

                        });
                    }

                }

            }

        ],

        update: [

            {

                read: function(ref, types) {
                    var height = ref.height;


                    this.inactive = !this.matchMedia || !isVisible(this.$el);

                    if (this.inactive) {
                        return false;
                    }

                    if (this.isActive && types.has('resize')) {
                        this.hide();
                        height = this.$el.offsetHeight;
                        this.show();
                    }

                    height = !this.isActive ? this.$el.offsetHeight : height;

                    this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
                    this.bottomOffset = this.topOffset + height;

                    var bottom = parseProp('bottom', this);

                    this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                    this.bottom = bottom && bottom - this.$el.offsetHeight;
                    this.width = dimensions(isVisible(this.widthElement) ? this.widthElement : this.$el).width;

                    return {
                        height: height,
                        top: offsetPosition(this.placeholder)[0],
                        margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    };
                },

                write: function(ref) {
                    var height = ref.height;
                    var margins = ref.margins;


                    var ref$1 = this;
                    var placeholder = ref$1.placeholder;

                    css(placeholder, assign({height: height}, margins));

                    if (!within(placeholder, document)) {
                        after(this.$el, placeholder);
                        placeholder.hidden = true;
                    }

                    this.isActive = !!this.isActive; // force self-assign

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var scroll = ref.scroll; if ( scroll === void 0 ) scroll = 0;


                    this.scroll = window.pageYOffset;

                    return {
                        dir: scroll <= this.scroll ? 'down' : 'up',
                        scroll: this.scroll
                    };
                },

                write: function(data, types) {
                    var this$1 = this;


                    var now = Date.now();
                    var isScrollUpdate = types.has('scroll');
                    var initTimestamp = data.initTimestamp; if ( initTimestamp === void 0 ) initTimestamp = 0;
                    var dir = data.dir;
                    var lastDir = data.lastDir;
                    var lastScroll = data.lastScroll;
                    var scroll = data.scroll;
                    var top = data.top;

                    data.lastScroll = scroll;

                    if (scroll < 0 || scroll === lastScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
                        return;
                    }

                    if (now - initTimestamp > 300 || dir !== lastDir) {
                        data.initScroll = scroll;
                        data.initTimestamp = now;
                    }

                    data.lastDir = dir;

                    if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' && isScrollUpdate || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isFixed) {

                            if (Animation.inProgress(this.$el) && top > scroll) {
                                Animation.cancel(this.$el);
                                this.hide();
                            }

                            return;
                        }

                        this.isFixed = false;

                        if (this.animation && scroll > this.topOffset) {
                            Animation.cancel(this.$el);
                            Animation.out(this.$el, this.animation).then(function () { return this$1.hide(); }, noop);
                        } else {
                            this.hide();
                        }

                    } else if (this.isFixed) {

                        this.update();

                    } else if (this.animation) {

                        Animation.cancel(this.$el);
                        this.show();
                        Animation.in(this.$el, this.animation).catch(noop);

                    } else {
                        this.show();
                    }

                },

                events: ['resize', 'scroll']

            }

        ],

        methods: {

            show: function() {

                this.isFixed = true;
                this.update();
                this.placeholder.hidden = false;

            },

            hide: function() {

                this.isActive = false;
                removeClass(this.$el, this.clsFixed, this.clsBelow);
                css(this.$el, {position: '', top: '', width: ''});
                this.placeholder.hidden = true;

            },

            update: function() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);

                if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                css(this.$el, {
                    position: 'fixed',
                    top: (top + "px"),
                    width: this.width
                });

                this.isActive = active;
                toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                addClass(this.$el, this.clsFixed);

            }

        }

    };

    function parseProp(prop, ref) {
        var $props = ref.$props;
        var $el = ref.$el;
        var propOffset = ref[(prop + "Offset")];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (isString(value) && value.match(/^-?\d/)) {

            return propOffset + toPx(value);

        } else {

            return offset(value === true ? parent($el) : query(value, $el)).bottom;

        }
    }

    var Switcher = {

        mixins: [Togglable],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        data: {
            connect: '~.uk-switcher',
            toggle: '> * > :first-child',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            attrItem: 'uk-switcher-item'
        },

        computed: {

            connects: {

                get: function(ref, $el) {
                    var connect = ref.connect;

                    return queryAll(connect, $el);
                },

                watch: function(connects) {
                    var this$1 = this;


                    if (this.swiping) {
                        css(connects, 'touch-action', 'pan-y pinch-zoom');
                    }

                    var index = this.index();
                    this.connects.forEach(function (el) { return children(el).forEach(function (child, i) { return toggleClass(child, this$1.cls, i === index); }
                        ); }
                    );

                },

                immediate: true

            },

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el).filter(function (el) { return !matches(el, '.uk-disabled *, .uk-disabled, [disabled]'); });
                },

                watch: function(toggles) {
                    var active = this.index();
                    this.show(~active ? active : toggles[this.active] || toggles[0]);
                },

                immediate: true

            },

            children: function() {
                var this$1 = this;

                return children(this.$el).filter(function (child) { return this$1.toggles.some(function (toggle) { return within(toggle, child); }); });
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.toggle;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            },

            {
                name: 'click',

                el: function() {
                    return this.connects;
                },

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function() {
                    return this.swiping;
                },

                el: function() {
                    return this.connects;
                },

                handler: function(ref) {
                    var type = ref.type;

                    this.show(endsWith(type, 'Left') ? 'next' : 'previous');
                }
            }

        ],

        methods: {

            index: function() {
                var this$1 = this;

                return findIndex(this.children, function (el) { return hasClass(el, this$1.cls); });
            },

            show: function(item) {
                var this$1 = this;


                var prev = this.index();
                var next = getIndex(
                    this.children[getIndex(item, this.toggles, prev)],
                    children(this.$el)
                );

                if (prev === next) {
                    return;
                }

                this.children.forEach(function (child, i) {
                    toggleClass(child, this$1.cls, next === i);
                    attr(this$1.toggles[i], 'aria-expanded', next === i);
                });

                this.connects.forEach(function (ref) {
                        var children = ref.children;

                        return this$1.toggleElement(toNodes(children).filter(function (child) { return hasClass(child, this$1.cls); }
                    ), false, prev >= 0).then(function () { return this$1.toggleElement(children[next], true, prev >= 0); }
                    );
                }
                );
            }

        }

    };

    var tab = {

        mixins: [Class],

        extends: Switcher,

        props: {
            media: Boolean
        },

        data: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        connected: function() {

            var cls = hasClass(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : hasClass(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                this.$create('toggle', this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    };

    var toggle = {

        mixins: [Media, Togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            queued: Boolean
        },

        data: {
            href: false,
            target: false,
            mode: 'click',
            queued: true
        },

        computed: {

            target: {

                get: function(ref, $el) {
                    var href = ref.href;
                    var target = ref.target;

                    target = queryAll(target || href, $el);
                    return target.length && target || [$el];
                },

                watch: function() {
                    this.updateAria();
                },

                immediate: true

            }

        },

        events: [

            {

                name: (pointerEnter + " " + pointerLeave),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
                    }
                }

            },

            {

                name: 'click',

                filter: function() {
                    return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
                },

                handler: function(e) {

                    var link;
                    if (closest(e.target, 'a[href="#"], a[href=""]')
                        || (link = closest(e.target, 'a[href]')) && (
                            !isToggled(this.target, this.cls)
                            || link.hash && matches(this.target, link.hash)
                        )
                    ) {
                        e.preventDefault();
                    }

                    this.toggle();
                }

            },

            {

                name: 'toggled',

                self: true,

                el: function() {
                    return this.target;
                },

                handler: function(e, toggled) {
                    this.updateAria(toggled);
                }
            }

        ],

        update: {

            read: function() {
                return includes(this.mode, 'media') && this.media
                    ? {match: this.matchMedia}
                    : false;
            },

            write: function(ref) {
                var match = ref.match;


                var toggled = this.isToggled(this.target);
                if (match ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['resize']

        },

        methods: {

            toggle: function(type) {
                var this$1 = this;


                if (!trigger(this.target, type || 'toggle', [this])) {
                    return;
                }

                if (!this.queued) {
                    return this.toggleElement(this.target);
                }

                var leaving = this.target.filter(function (el) { return hasClass(el, this$1.clsLeave); });

                if (leaving.length) {
                    this.target.forEach(function (el) {
                        var isLeaving = includes(leaving, el);
                        this$1.toggleElement(el, isLeaving, isLeaving);
                    });
                    return;
                }

                var toggled = this.target.filter(this.isToggled);
                this.toggleElement(toggled, false).then(function () { return this$1.toggleElement(this$1.target.filter(function (el) { return !includes(toggled, el); }
                    ), true); }
                );

            },

            updateAria: function(toggled) {
                attr(this.$el, 'aria-expanded', isBoolean(toggled)
                    ? toggled
                    : isToggled(this.target, this.cls)
                );
            }

        }

    };

    // TODO improve isToggled handling
    function isToggled(target, cls) {
        return cls
            ? hasClass(target, cls.split(' ')[0])
            : isVisible(target);
    }

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Accordion: Accordion,
        Alert: alert,
        Cover: cover,
        Drop: drop,
        Dropdown: drop,
        FormCustom: formCustom,
        Gif: gif,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightViewport: heightViewport,
        Icon: Icon,
        Img: img,
        Leader: leader,
        Margin: Margin,
        Modal: modal,
        Nav: nav,
        Navbar: navbar,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        Sticky: sticky,
        Svg: SVG,
        Switcher: Switcher,
        Tab: tab,
        Toggle: toggle,
        Video: Video,
        Close: Close,
        Spinner: Spinner,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        SearchIcon: Search,
        Marker: IconComponent,
        NavbarToggleIcon: IconComponent,
        OverlayIcon: IconComponent,
        PaginationNext: IconComponent,
        PaginationPrevious: IconComponent,
        Totop: IconComponent
    });

    // register components
    each(components, function (component, name) { return UIkit.component(name, component); }
    );

    // core functionality
    UIkit.use(Core);

    boot(UIkit);

    var countdown = {

        mixins: [Class],

        props: {
            date: String,
            clsWrapper: String
        },

        data: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date: function(ref) {
                var date = ref.date;

                return Date.parse(date);
            },

            days: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },

            hours: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },

            minutes: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },

            seconds: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },

            units: function() {
                var this$1 = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit]; });
            }

        },

        connected: function() {
            this.start();
        },

        disconnected: function() {
            var this$1 = this;

            this.stop();
            this.units.forEach(function (unit) { return empty(this$1[unit]); });
        },

        events: [

            {

                name: 'visibilitychange',

                el: function() {
                    return document;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }

            }

        ],

        update: {

            write: function() {
                var this$1 = this;


                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days
                        = timespan.hours
                        = timespan.minutes
                        = timespan.seconds
                        = 0;
                }

                this.units.forEach(function (unit) {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? ("0" + digits) : digits;

                    var el = this$1[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(function () { return '<span></span>'; }).join(''));
                        }

                        digits.forEach(function (digit, i) { return el.children[i].textContent = digit; });
                    }

                });

            }

        },

        methods: {

            start: function() {

                this.stop();

                if (this.date && this.units.length) {
                    this.$update();
                    this.timer = setInterval(this.$update, 1000);
                }

            },

            stop: function() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    };

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total: total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }

    var clsLeave = 'uk-transition-leave';
    var clsEnter = 'uk-transition-enter';

    function fade(action, target, duration, stagger) {
        if ( stagger === void 0 ) stagger = 0;


        var index = transitionIndex(target, true);
        var propsIn = {opacity: 1};
        var propsOut = {opacity: 0};

        var wrapIndexFn = function (fn) { return function () { return index === transitionIndex(target) ? fn() : Promise.reject(); }; };

        var leaveFn = wrapIndexFn(function () {

            addClass(target, clsLeave);

            return Promise.all(getTransitionNodes(target).map(function (child, i) { return new Promise(function (resolve) { return setTimeout(function () { return Transition.start(child, propsOut, duration / 2, 'ease').then(resolve); }, i * stagger); }
                ); }
            )).then(function () { return removeClass(target, clsLeave); });

        });

        var enterFn = wrapIndexFn(function () {

            var oldHeight = height(target);

            addClass(target, clsEnter);
            action();

            css(children(target), {opacity: 0});

            // Ensure UIkit updates have propagated
            return new Promise(function (resolve) { return requestAnimationFrame(function () {

                    var nodes = children(target);
                    var newHeight = height(target);

                    // Ensure Grid cells do not stretch when height is applied
                    css(target, 'alignContent', 'flex-start');
                    height(target, oldHeight);

                    var transitionNodes = getTransitionNodes(target);
                    css(nodes, propsOut);

                    var transitions = transitionNodes.map(function (child, i) { return new Promise(function (resolve) { return setTimeout(function () { return Transition.start(child, propsIn, duration / 2, 'ease').then(resolve); }, i * stagger); }
                        ); }
                    );

                    if (oldHeight !== newHeight) {
                        transitions.push(Transition.start(target, {height: newHeight}, duration / 2 + transitionNodes.length * stagger, 'ease'));
                    }

                    Promise.all(transitions).then(function () {
                        removeClass(target, clsEnter);
                        if (index === transitionIndex(target)) {
                            css(target, {height: '', alignContent: ''});
                            css(nodes, {opacity: ''});
                            delete target.dataset.transition;
                        }
                        resolve();
                    });
                }); }
            );
        });

        return hasClass(target, clsLeave)
            ? waitTransitionend(target).then(enterFn)
            : hasClass(target, clsEnter)
                ? waitTransitionend(target).then(leaveFn).then(enterFn)
                : leaveFn().then(enterFn);
    }

    function transitionIndex(target, next) {
        if (next) {
            target.dataset.transition = 1 + transitionIndex(target);
        }

        return toNumber(target.dataset.transition) || 0;
    }

    function waitTransitionend(target) {
        return Promise.all(children(target).filter(Transition.inProgress).map(function (el) { return new Promise(function (resolve) { return once(el, 'transitionend transitioncanceled', resolve); }); }
        ));
    }

    function getTransitionNodes(target) {
        return getRows(children(target)).reduce(function (nodes, row) { return nodes.concat(sortBy(row.filter(function (el) { return isInView(el); }), 'offsetLeft')); }, []);
    }

    function slide (action, target, duration) {

        return new Promise(function (resolve) { return requestAnimationFrame(function () {

                var nodes = children(target);

                // Get current state
                var currentProps = nodes.map(function (el) { return getProps(el, true); });
                var targetProps = css(target, ['height', 'padding']);

                // Cancel previous animations
                Transition.cancel(target);
                nodes.forEach(Transition.cancel);
                reset(target);

                // Adding, sorting, removing nodes
                action();

                // Find new nodes
                nodes = nodes.concat(children(target).filter(function (el) { return !includes(nodes, el); }));

                // Wait for update to propagate
                Promise.resolve().then(function () {

                    // Force update
                    fastdom.flush();

                    // Get new state
                    var targetPropsTo = css(target, ['height', 'padding']);
                    var ref = getTransitionProps(target, nodes, currentProps);
                    var propsTo = ref[0];
                    var propsFrom = ref[1];

                    // Reset to previous state
                    nodes.forEach(function (el, i) { return propsFrom[i] && css(el, propsFrom[i]); });
                    css(target, assign({display: 'block'}, targetProps));

                    // Start transitions on next frame
                    requestAnimationFrame(function () {

                        var transitions = nodes.map(function (el, i) { return parent(el) === target && Transition.start(el, propsTo[i], duration, 'ease'); }
                            ).concat(Transition.start(target, targetPropsTo, duration, 'ease'));

                        Promise.all(transitions).then(function () {
                            nodes.forEach(function (el, i) { return parent(el) === target && css(el, 'display', propsTo[i].opacity === 0 ? 'none' : ''); });
                            reset(target);
                        }, noop).then(resolve);

                    });
                });
            }); });
    }

    function getProps(el, opacity) {

        var zIndex = css(el, 'zIndex');

        return isVisible(el)
            ? assign({
                display: '',
                opacity: opacity ? css(el, 'opacity') : '0',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: zIndex === 'auto' ? index(el) : zIndex
            }, getPositionWithMargin(el))
            : false;
    }

    function getTransitionProps(target, nodes, currentProps) {

        var propsTo = nodes.map(function (el, i) { return parent(el) && i in currentProps
                ? currentProps[i]
                ? isVisible(el)
                    ? getPositionWithMargin(el)
                    : {opacity: 0}
                : {opacity: isVisible(el) ? 1 : 0}
                : false; });

        var propsFrom = propsTo.map(function (props, i) {

            var from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));

            if (!from) {
                return false;
            }

            if (!props) {
                delete from.opacity;
            } else if (!('opacity' in props)) {
                var opacity = from.opacity;

                if (opacity % 1) {
                    props.opacity = 1;
                } else {
                    delete from.opacity;
                }
            }

            return from;
        });

        return [propsTo, propsFrom];
    }

    function reset(el) {
        css(el.children, {
            height: '',
            left: '',
            opacity: '',
            pointerEvents: '',
            position: '',
            top: '',
            marginTop: '',
            marginLeft: '',
            transform: '',
            width: '',
            zIndex: ''
        });
        css(el, {height: '', display: '', padding: ''});
    }

    function getPositionWithMargin(el) {
        var ref = offset(el);
        var height = ref.height;
        var width = ref.width;
        var ref$1 = position(el);
        var top = ref$1.top;
        var left = ref$1.left;
        var ref$2 = css(el, ['marginTop', 'marginLeft']);
        var marginLeft = ref$2.marginLeft;
        var marginTop = ref$2.marginTop;

        return {top: top, left: left, height: height, width: width, marginLeft: marginLeft, marginTop: marginTop, transform: ''};
    }

    var Animate = {

        props: {
            duration: Number,
            animation: String
        },

        data: {
            duration: 150,
            animation: 'slide'
        },

        methods: {

            animate: function(action, target) {
                var this$1 = this;
                if ( target === void 0 ) target = this.$el;


                var name = this.animation;
                var animationFn = name === 'fade'
                    ? fade
                    : name === 'delayed-fade'
                        ? function () {
                            var args = [], len = arguments.length;
                            while ( len-- ) args[ len ] = arguments[ len ];

                            return fade.apply(void 0, args.concat( [40] ));
                }
                        : slide;

                return animationFn(action, target, this.duration)
                    .then(function () { return this$1.$update(target, 'resize'); }, noop);
            }

        }
    };

    var filter$1 = {

        mixins: [Animate],

        args: 'target',

        props: {
            target: Boolean,
            selActive: Boolean
        },

        data: {
            target: null,
            selActive: false,
            attrItem: 'uk-filter-control',
            cls: 'uk-active',
            duration: 250
        },

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var attrItem = ref.attrItem;

                    return $$(("[" + attrItem + "],[data-" + attrItem + "]"), $el);
                },

                watch: function() {
                    var this$1 = this;


                    this.updateState();

                    if (this.selActive !== false) {
                        var actives = $$(this.selActive, this.$el);
                        this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, includes(actives, el)); });
                    }

                },

                immediate: true

            },

            children: {

                get: function(ref, $el) {
                    var target = ref.target;

                    return $$((target + " > *"), $el);
                },

                watch: function(list, old) {
                    if (old && !isEqualList(list, old)) {
                        this.updateState();
                    }
                },

                immediate: true

            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {

                    e.preventDefault();
                    this.apply(e.current);

                }

            }

        ],

        methods: {

            apply: function(el) {
                var prevState = this.getState();
                var newState = mergeState(el, this.attrItem, this.getState());

                if (!isEqualState(prevState, newState)) {
                    this.setState(newState);
                }
            },

            getState: function() {
                var this$1 = this;

                return this.toggles
                    .filter(function (item) { return hasClass(item, this$1.cls); })
                    .reduce(function (state, el) { return mergeState(el, this$1.attrItem, state); }, {filter: {'': ''}, sort: []});
            },

            setState: function(state, animate) {
                var this$1 = this;
                if ( animate === void 0 ) animate = true;


                state = assign({filter: {'': ''}, sort: []}, state);

                trigger(this.$el, 'beforeFilter', [this, state]);

                this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state)); });

                Promise.all($$(this.target, this.$el).map(function (target) {
                    var filterFn = function () {
                        applyState(state, target, children(target));
                        this$1.$update(this$1.$el);
                    };
                    return animate ? this$1.animate(filterFn, target) : filterFn();
                })).then(function () { return trigger(this$1.$el, 'afterFilter', [this$1]); });

            },

            updateState: function() {
                var this$1 = this;

                fastdom.write(function () { return this$1.setState(this$1.getState(), false); });
            }

        }

    };

    function getFilter(el, attr) {
        return parseOptions(data(el, attr), ['filter']);
    }

    function isEqualState(stateA, stateB) {
        return ['filter', 'sort'].every(function (prop) { return isEqual(stateA[prop], stateB[prop]); });
    }

    function applyState(state, target, children) {
        var selector = getSelector(state);

        children.forEach(function (el) { return css(el, 'display', selector && !matches(el, selector) ? 'none' : ''); });

        var ref = state.sort;
        var sort = ref[0];
        var order = ref[1];

        if (sort) {
            var sorted = sortItems(children, sort, order);
            if (!isEqual(sorted, children)) {
                append(target, sorted);
            }
        }
    }

    function mergeState(el, attr, state) {

        var filterBy = getFilter(el, attr);
        var filter = filterBy.filter;
        var group = filterBy.group;
        var sort = filterBy.sort;
        var order = filterBy.order; if ( order === void 0 ) order = 'asc';

        if (filter || isUndefined(sort)) {

            if (group) {

                if (filter) {
                    delete state.filter[''];
                    state.filter[group] = filter;
                } else {
                    delete state.filter[group];

                    if (isEmpty(state.filter) || '' in state.filter) {
                        state.filter = {'': filter || ''};
                    }

                }

            } else {
                state.filter = {'': filter || ''};
            }

        }

        if (!isUndefined(sort)) {
            state.sort = [sort, order];
        }

        return state;
    }

    function matchFilter(el, attr, ref) {
        var stateFilter = ref.filter; if ( stateFilter === void 0 ) stateFilter = {'': ''};
        var ref_sort = ref.sort;
        var stateSort = ref_sort[0];
        var stateOrder = ref_sort[1];


        var ref$1 = getFilter(el, attr);
        var filter = ref$1.filter; if ( filter === void 0 ) filter = '';
        var group = ref$1.group; if ( group === void 0 ) group = '';
        var sort = ref$1.sort;
        var order = ref$1.order; if ( order === void 0 ) order = 'asc';

        return isUndefined(sort)
            ? group in stateFilter && filter === stateFilter[group]
                || !filter && group && !(group in stateFilter) && !stateFilter['']
            : stateSort === sort && stateOrder === order;
    }

    function isEqualList(listA, listB) {
        return listA.length === listB.length
            && listA.every(function (el) { return ~listB.indexOf(el); });
    }

    function getSelector(ref) {
        var filter = ref.filter;

        var selector = '';
        each(filter, function (value) { return selector += value || ''; });
        return selector;
    }

    function sortItems(nodes, sort, order) {
        return assign([], nodes).sort(function (a, b) { return data(a, sort).localeCompare(data(b, sort), undefined, {numeric: true}) * (order === 'asc' || -1); });
    }

    var Animations = {

        slide: {

            show: function(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent: function(current) {
                return translated(current);
            },

            translate: function(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        }

    };

    function translated(el) {
        return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {
        if ( value === void 0 ) value = 0;
        if ( unit === void 0 ) unit = '%';

        value += value ? unit : '';
        return isIE ? ("translateX(" + value + ")") : ("translate3d(" + value + ", 0, 0)"); // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
    }

    function scale3d(value) {
        return ("scale3d(" + value + ", " + value + ", 1)");
    }

    var Animations$1 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 - .2)},
                    {opacity: 1, transform: scale3d(1)}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 - .2 * percent)},
                    {opacity: percent, transform: scale3d(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

    function Transitioner(prev, next, dir, ref) {
        var animation = ref.animation;
        var easing = ref.easing;


        var percent = animation.percent;
        var translate = animation.translate;
        var show = animation.show; if ( show === void 0 ) show = noop;
        var props = show(dir);
        var deferred = new Deferred();

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                var this$1 = this;
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Promise.all([
                    Transition.start(next, props[1], duration, timing),
                    Transition.start(prev, props[0], duration, timing)
                ]).then(function () {
                    this$1.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },

            cancel: function() {
                Transition.cancel([next, prev]);
            },

            reset: function() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                this.reset();

                var props = translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent: percent, dir: dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir: dir});

            },

            percent: function() {
                return percent(prev || next, next, dir);
            },

            getDistance: function() {
                return prev && prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    var SliderAutoplay = {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        data: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function() {
            this.autoplay && this.startAutoplay();
        },

        disconnected: function() {
            this.stopAutoplay();
        },

        update: function() {
            attr(this.slides, 'tabindex', '-1');
        },

        events: [

            {

                name: 'visibilitychange',

                el: function() {
                    return document;
                },

                filter: function() {
                    return this.autoplay;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            }

        ],

        methods: {

            startAutoplay: function() {
                var this$1 = this;


                this.stopAutoplay();

                this.interval = setInterval(
                    function () { return (!this$1.draggable || !$(':focus', this$1.$el))
                        && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover'))
                        && !this$1.stack.length
                        && this$1.show('next'); },
                    this.autoplayInterval
                );

            },

            stopAutoplay: function() {
                this.interval && clearInterval(this.interval);
            }

        }

    };

    var SliderDrag = {

        props: {
            draggable: Boolean
        },

        data: {
            draggable: true,
            threshold: 10
        },

        created: function() {
            var this$1 = this;


            ['start', 'move', 'end'].forEach(function (key) {

                var fn = this$1[key];
                this$1[key] = function (e) {

                    var pos = getEventPos(e).x * (isRtl ? -1 : 1);

                    this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
                    this$1.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: pointerDown,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (!this.draggable
                        || !isTouch(e) && hasTextNodesOnly(e.target)
                        || closest(e.target, selInput)
                        || e.button > 0
                        || this.length < 2
                    ) {
                        return;
                    }

                    this.start(e);
                }

            },

            {
                name: 'dragstart',

                handler: function(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start: function() {

                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.cancel();
                    this._transitioner.translate(this.percent);

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                on(document, pointerMove, this.move, {passive: false});

                // 'input' event is triggered by video controls
                on(document, (pointerUp + " " + pointerCancel + " input"), this.end, true);

                css(this.list, 'userSelect', 'none');

            },

            move: function(e) {
                var this$1 = this;


                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                // prevent click event
                css(this.list, 'pointerEvents', 'none');

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var ref = this;
                var slides = ref.slides;
                var ref$1 = this;
                var prevIndex = ref$1.prevIndex;
                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var itemShown;

                [this.index, this.prevIndex].filter(function (i) { return !includes([nextIndex, prevIndex], i); }).forEach(function (i) {
                    trigger(slides[i], 'itemhidden', [this$1]);

                    if (edge) {
                        itemShown = true;
                        this$1.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }

            },

            end: function() {

                off(document, pointerMove, this.move, {passive: false});
                off(document, (pointerUp + " " + pointerCancel + " input"), this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                }

                css(this.list, {userSelect: '', pointerEvents: ''});

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {

        data: {
            selNav: false
        },

        computed: {

            nav: function(ref, $el) {
                var selNav = ref.selNav;

                return $(selNav, $el);
            },

            selNavItem: function(ref) {
                var attrItem = ref.attrItem;

                return ("[" + attrItem + "],[data-" + attrItem + "]");
            },

            navItems: function(_, $el) {
                return $$(this.selNavItem, $el);
            }

        },

        update: {

            write: function() {
                var this$1 = this;


                if (this.nav && this.length !== this.nav.children.length) {
                    html(this.nav, this.slides.map(function (_, i) { return ("<li " + (this$1.attrItem) + "=\"" + i + "\"><a href></a></li>"); }).join(''));
                }

                this.navItems.concat(this.nav).forEach(function (el) { return el && (el.hidden = !this$1.maxIndex); });

                this.updateNav();

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selNavItem;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',
                handler: 'updateNav'

            }

        ],

        methods: {

            updateNav: function() {
                var this$1 = this;


                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = data(el, this$1.attrItem);

                    toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
                    toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
                });

            }

        }

    };

    var Slider = {

        mixins: [SliderAutoplay, SliderDrag, SliderNav],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },

        data: function () { return ({
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        }); },

        connected: function() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.$props.index);
            this.stack = [];
        },

        disconnected: function() {
            removeClass(this.slides, this.clsActive);
        },

        computed: {

            duration: function(ref, $el) {
                var velocity = ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },

            list: function(ref, $el) {
                var selList = ref.selList;

                return $(selList, $el);
            },

            maxIndex: function() {
                return this.length - 1;
            },

            selSlides: function(ref) {
                var selList = ref.selList;
                var selSlides = ref.selSlides;

                return (selList + " " + (selSlides || '> *'));
            },

            slides: {

                get: function() {
                    return $$(this.selSlides, this.$el);
                },

                watch: function() {
                    this.$reset();
                }

            },

            length: function() {
                return this.slides.length;
            }

        },

        events: {

            itemshown: function() {
                this.$update(this.list);
            }

        },

        methods: {

            show: function(index, force) {
                var this$1 = this;
                if ( force === void 0 ) force = false;


                if (this.dragging || !this.length) {
                    return;
                }

                var ref = this;
                var stack = ref.stack;
                var queueIndex = force ? 0 : stack.length;
                var reset = function () {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        this$1.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.getIndex(this.index);
                var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                if (prev && !trigger(prev, 'beforeitemhide', [this])
                    || !trigger(next, 'beforeitemshow', [this, prev])
                ) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && trigger(prev, 'itemhidden', [this$1]);
                    trigger(next, 'itemshown', [this$1]);

                    return new Promise(function (resolve) {
                        fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                this$1.show(stack.shift(), true);
                            } else {
                                this$1._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex: function(index, prev) {
                if ( index === void 0 ) index = this.index;
                if ( prev === void 0 ) prev = this.index;

                return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;

                return this.getIndex(index, prevIndex);
            },

            _show: function(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    assign({
                        easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing
                    }, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._translate(1);
                    return Promise.resolve();
                }

                var ref = this.stack;
                var length = ref.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance: function(prev, next) {
                return this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate: function(percent, prev, next) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner: function(prev, next, dir, options) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;
                if ( dir === void 0 ) dir = this.dir || 1;
                if ( options === void 0 ) options = this.transitionOptions;

                return new this.Transitioner(
                    isNumber(prev) ? this.slides[prev] : prev,
                    isNumber(next) ? this.slides[next] : next,
                    dir * (isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

    function speedUp(x) {
        return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {

        mixins: [Slider],

        props: {
            animation: String
        },

        data: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations,
            Transitioner: Transitioner
        },

        computed: {

            animation: function(ref) {
                var animation = ref.animation;
                var Animations = ref.Animations;

                return assign(Animations[animation] || Animations.slide, {name: animation});
            },

            transitionOptions: function() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden': function(ref) {
                var target = ref.target;

                this.$update(target);
            },

            beforeitemshow: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActive);
            },

            itemshown: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActivated);
            },

            itemhidden: function(ref) {
                var target = ref.target;

                removeClass(target, this.clsActive, this.clsActivated);
            }

        }

    };

    var LightboxPanel = {

        mixins: [Container, Modal, Togglable, Slideshow],

        functional: true,

        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },

        data: function () { return ({
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            selCaption: '.uk-lightbox-caption',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations$1,
            template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
        }); },

        created: function() {

            var $el = $(this.template);
            var list = $(this.selList, $el);
            this.items.forEach(function () { return append(list, '<li>'); });

            this.$mount(append(this.container, $el));

        },

        computed: {

            caption: function(ref, $el) {
                var selCaption = ref.selCaption;

                return $(selCaption, $el);
            }

        },

        events: [

            {

                name: (pointerMove + " " + pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: function() {
                    this.showControls();
                }

            },

            {

                name: 'hide',

                self: true,

                handler: function() {

                    this.hideControls();

                    removeClass(this.slides, this.clsActive);
                    Transition.stop(this.slides);

                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    this.$destroy(true);
                }

            },

            {

                name: 'keyup',

                el: function() {
                    return document;
                },

                handler: function(e) {

                    if (!this.isToggled(this.$el) || !this.draggable) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'beforeitemshow',

                handler: function(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.draggable = false;

                    e.preventDefault();

                    this.toggleElement(this.$el, true, false);

                    this.animation = Animations$1['scale'];
                    removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                }

            },

            {

                name: 'itemshow',

                handler: function() {

                    html(this.caption, this.getItem().caption || '');

                    for (var j = -this.preload; j <= this.preload; j++) {
                        this.loadItem(this.index + j);
                    }

                }

            },

            {

                name: 'itemshown',

                handler: function() {
                    this.draggable = this.$props.draggable;
                }

            },

            {

                name: 'itemload',

                handler: function(_, item) {
                    var this$1 = this;


                    var src = item.source;
                    var type = item.type;
                    var alt = item.alt; if ( alt === void 0 ) alt = '';
                    var poster = item.poster;
                    var attrs = item.attrs; if ( attrs === void 0 ) attrs = {};

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!src) {
                        return;
                    }

                    var matches;
                    var iframeAttrs = {
                        frameborder: '0',
                        allow: 'autoplay',
                        allowfullscreen: '',
                        style: 'max-width: 100%; box-sizing: border-box;',
                        'uk-responsive': '',
                        'uk-video': ("" + (this.videoAutoplay))
                    };

                    // Image
                    if (type === 'image' || src.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) {

                        getImage(src, attrs.srcset, attrs.size).then(
                            function (ref) {
                                var width = ref.width;
                                var height = ref.height;

                                return this$1.setItem(item, createEl('img', assign({src: src, width: width, height: height, alt: alt}, attrs)));
                        },
                            function () { return this$1.setError(item); }
                        );

                    // Video
                    } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {

                        var video = createEl('video', assign({
                            src: src,
                            poster: poster,
                            controls: '',
                            playsinline: '',
                            'uk-video': ("" + (this.videoAutoplay))
                        }, attrs));

                        on(video, 'loadedmetadata', function () {
                            attr(video, {width: video.videoWidth, height: video.videoHeight});
                            this$1.setItem(item, video);
                        });
                        on(video, 'error', function () { return this$1.setError(item); });

                    // Iframe
                    } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {

                        this.setItem(item, createEl('iframe', assign({
                            src: src,
                            frameborder: '0',
                            allowfullscreen: '',
                            class: 'uk-lightbox-iframe'
                        }, attrs)));

                    // YouTube
                    } else if ((matches = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))) {

                        this.setItem(item, createEl('iframe', assign({
                            src: ("https://www.youtube" + (matches[1] || '') + ".com/embed/" + (matches[2]) + (matches[3] ? ("?" + (matches[3])) : '')),
                            width: 1920,
                            height: 1080
                        }, iframeAttrs, attrs)));

                    // Vimeo
                    } else if ((matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))) {

                        ajax(("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + (encodeURI(src))), {
                            responseType: 'json',
                            withCredentials: false
                        }).then(
                            function (ref) {
                                var ref_response = ref.response;
                                var height = ref_response.height;
                                var width = ref_response.width;

                                return this$1.setItem(item, createEl('iframe', assign({
                                src: ("https://player.vimeo.com/video/" + (matches[1]) + (matches[2] ? ("?" + (matches[2])) : '')),
                                width: width,
                                height: height
                            }, iframeAttrs, attrs)));
                        },
                            function () { return this$1.setError(item); }
                        );

                    }

                }

            }

        ],

        methods: {

            loadItem: function(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (!this.getSlide(item).childElementCount) {
                    trigger(this.$el, 'itemload', [item]);
                }
            },

            getItem: function(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[getIndex(index, this.slides)];
            },

            setItem: function(item, content) {
                trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content) ]);
            },

            getSlide: function(item) {
                return this.slides[this.items.indexOf(item)];
            },

            setError: function(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls: function() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    };

    function createEl(tag, attrs) {
        var el = fragment(("<" + tag + ">"));
        attr(el, attrs);
        return el;
    }

    var lightbox = {

        install: install$2,

        props: {toggle: String},

        data: {toggle: 'a'},

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el);
                },

                watch: function() {
                    this.hide();
                }

            }

        },

        disconnected: function() {
            this.hide();
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            }

        ],

        methods: {

            show: function(index) {
                var this$1 = this;


                var items = uniqueBy(this.toggles.map(toItem), 'source');

                if (isElement(index)) {
                    var ref = toItem(index);
                    var source = ref.source;
                    index = findIndex(items, function (ref) {
                        var src = ref.source;

                        return source === src;
                    });
                }

                this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {items: items}));

                on(this.panel.$el, 'hidden', function () { return this$1.panel = false; });

                return this.panel.show(index);

            },

            hide: function() {

                return this.panel && this.panel.hide();

            }

        }

    };

    function install$2(UIkit, Lightbox) {

        if (!UIkit.lightboxPanel) {
            UIkit.component('lightboxPanel', LightboxPanel);
        }

        assign(
            Lightbox.props,
            UIkit.component('lightboxPanel').options.props
        );

    }

    function toItem(el) {

        var item = {};

        ['href', 'caption', 'type', 'poster', 'alt', 'attrs'].forEach(function (attr) {
            item[attr === 'href' ? 'source' : attr] = data(el, attr);
        });

        item.attrs = parseOptions(item.attrs);

        return item;
    }

    var obj;

    var notification = {

        mixins: [Container],

        functional: true,

        args: ['message', 'status'],

        data: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsContainer: 'uk-notification',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        install: install$3,

        computed: {

            marginProp: function(ref) {
                var pos = ref.pos;

                return ("margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom'));
            },

            startProps: function() {
                var obj;

                return ( obj = {opacity: 0}, obj[this.marginProp] = -this.$el.offsetHeight, obj );
            }

        },

        created: function() {

            var container = $(("." + (this.clsContainer) + "-" + (this.pos)), this.container)
                || append(this.container, ("<div class=\"" + (this.clsContainer) + " " + (this.clsContainer) + "-" + (this.pos) + "\" style=\"display: block\"></div>"));

            this.$mount(append(container,
                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\"> <a href class=\"" + (this.clsClose) + "\" data-uk-close></a> <div>" + (this.message) + "</div> </div>")
            ));

        },

        connected: function() {
            var this$1 = this;
            var obj;


            var margin = toFloat(css(this.$el, this.marginProp));
            Transition.start(
                css(this.$el, this.startProps),
                ( obj = {opacity: 1}, obj[this.marginProp] = margin, obj )
            ).then(function () {
                if (this$1.timeout) {
                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
                }
            });

        },

        events: ( obj = {

            click: function(e) {
                if (closest(e.target, 'a[href="#"],a[href=""]')) {
                    e.preventDefault();
                }
                this.close();
            }

        }, obj[pointerEnter] = function () {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }, obj[pointerLeave] = function () {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            }, obj ),

        methods: {

            close: function(immediate) {
                var this$1 = this;


                var removeFn = function (el) {

                    var container = parent(el);

                    trigger(el, 'close', [this$1]);
                    remove(el);

                    if (container && !container.hasChildNodes()) {
                        remove(container);
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn(this.$el);
                } else {
                    Transition.start(this.$el, this.startProps).then(removeFn);
                }
            }

        }

    };

    function install$3(UIkit) {
        UIkit.notification.closeAll = function (group, immediate) {
            apply(document.body, function (el) {
                var notification = UIkit.getComponent(el, 'notification');
                if (notification && (!group || group === notification.group)) {
                    notification.close(immediate);
                }
            });
        };
    }

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];

    var Parallax = {

        mixins: [Media],

        props: props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {}),

        data: props.reduce(function (data, prop) {
            data[prop] = undefined;
            return data;
        }, {}),

        computed: {

            props: function(properties, $el) {
                var this$1 = this;


                return props.reduce(function (props, prop) {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i);
                    var isCssProp = isColor || prop === 'opacity';

                    var pos, bgPos, diff;
                    var steps = properties[prop].slice();

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale'
                            ? 1
                            : isCssProp
                                ? css($el, prop)
                                : 0) || 0);
                    }

                    var unit = getUnit(steps);

                    if (isColor) {

                        var ref = $el.style;
                        var color = ref.color;
                        steps = steps.map(function (step) { return parseColor($el, step); });
                        $el.style.color = color;

                    } else if (startsWith(prop, 'bg')) {

                        var attr = prop === 'bgy' ? 'height' : 'width';
                        steps = steps.map(function (step) { return toPx(step, attr, this$1.$el); });

                        css($el, ("background-position-" + (prop[2])), '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this$1.covers) {

                            var min = Math.min.apply(Math, steps);
                            var max = Math.max.apply(Math, steps);
                            var down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(function (step) { return step - (down ? min : max); });
                            pos = (down ? -diff : 0) + "px";

                        } else {

                            pos = bgPos;

                        }

                    } else {

                        steps = steps.map(toFloat);

                    }

                    if (prop === 'stroke') {

                        if (!steps.some(function (step) { return step; })) {
                            return props;
                        }

                        var length = getMaxPathLength(this$1.$el);
                        css($el, 'strokeDasharray', length);

                        if (unit === '%') {
                            steps = steps.map(function (step) { return step * length / 100; });
                        }

                        steps = steps.reverse();

                        prop = 'strokeDashoffset';
                    }

                    props[prop] = {steps: steps, unit: unit, pos: pos, bgPos: bgPos, diff: diff};

                    return props;

                }, {});

            },

            bgProps: function() {
                var this$1 = this;

                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
            },

            covers: function(_, $el) {
                return covers($el);
            }

        },

        disconnected: function() {
            delete this._image;
        },

        update: {

            read: function(data) {
                var this$1 = this;


                if (!this.matchMedia) {
                    return;
                }

                if (!data.image && this.covers && this.bgProps.length) {
                    var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (src) {
                        var img = new Image();
                        img.src = src;
                        data.image = img;

                        if (!img.naturalWidth) {
                            img.onload = function () { return this$1.$update(); };
                        }
                    }

                }

                var image = data.image;

                if (!image || !image.naturalWidth) {
                    return;
                }

                var dimEl = {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight
                };
                var dimImage = {
                    width: image.naturalWidth,
                    height: image.naturalHeight
                };

                var dim = Dimensions.cover(dimImage, dimEl);

                this.bgProps.forEach(function (prop) {

                    var ref = this$1.props[prop];
                    var diff = ref.diff;
                    var bgPos = ref.bgPos;
                    var steps = ref.steps;
                    var attr = prop === 'bgy' ? 'height' : 'width';
                    var span = dim[attr] - dimEl[attr];

                    if (span < diff) {
                        dimEl[attr] = dim[attr] + diff - span;
                    } else if (span > diff) {

                        var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

                        if (posPercentage) {
                            this$1.props[prop].steps = steps.map(function (step) { return step - (span - diff) / posPercentage; });
                        }
                    }

                    dim = Dimensions.cover(dimImage, dimEl);
                });

                data.dim = dim;
            },

            write: function(ref) {
                var dim = ref.dim;


                if (!this.matchMedia) {
                    css(this.$el, {backgroundSize: '', backgroundRepeat: ''});
                    return;
                }

                dim && css(this.$el, {
                    backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
                    backgroundRepeat: 'no-repeat'
                });

            },

            events: ['resize']

        },

        methods: {

            reset: function() {
                var this$1 = this;

                each(this.getCss(0), function (_, prop) { return css(this$1.$el, prop, ''); });
            },

            getCss: function(percent) {

                var ref = this;
                var props = ref.props;
                return Object.keys(props).reduce(function (css, prop) {

                    var ref = props[prop];
                    var steps = ref.steps;
                    var unit = ref.unit;
                    var pos = ref.pos;
                    var value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y': {
                            unit = unit || 'px';
                            css.transform += " translate" + (ucfirst(prop)) + "(" + (toFloat(value).toFixed(unit === 'px' ? 0 : 2)) + unit + ")";
                            break;
                        }
                        case 'rotate':
                            unit = unit || 'deg';
                            css.transform += " rotate(" + (value + unit) + ")";
                            break;
                        case 'scale':
                            css.transform += " scale(" + value + ")";
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[("background-position-" + (prop[2]))] = "calc(" + pos + " + " + value + "px)";
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor': {

                            var ref$1 = getStep(steps, percent);
                            var start = ref$1[0];
                            var end = ref$1[1];
                            var p = ref$1[2];

                            css[prop] = "rgba(" + (start.map(function (value, i) {
                                    value = value + p * (end[i] - value);
                                    return i === 3 ? toFloat(value) : parseInt(value, 10);
                                }).join(',')) + ")";
                            break;
                        }
                        // CSS Filter
                        case 'blur':
                            unit = unit || 'px';
                            css.filter += " blur(" + (value + unit) + ")";
                            break;
                        case 'hue':
                            unit = unit || 'deg';
                            css.filter += " hue-rotate(" + (value + unit) + ")";
                            break;
                        case 'fopacity':
                            unit = unit || '%';
                            css.filter += " opacity(" + (value + unit) + ")";
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            unit = unit || '%';
                            css.filter += " " + prop + "(" + (value + unit) + ")";
                            break;
                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color')
            .split(/[(),]/g)
            .slice(1, -1)
            .concat(1)
            .slice(0, 4)
            .map(toFloat);
    }

    function getStep(steps, percent) {
        var count = steps.length - 1;
        var index = Math.min(Math.floor(count * percent), count - 1);
        var step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent, digits) {
        if ( digits === void 0 ) digits = 2;

        var ref = getStep(steps, percent);
        var start = ref[0];
        var end = ref[1];
        var p = ref[2];
        return (isNumber(start)
            ? start + Math.abs(start - end) * p * (start < end ? 1 : -1)
            : +end
        ).toFixed(digits);
    }

    function getUnit(steps) {
        return steps.reduce(function (unit, step) { return isString(step) && step.replace(/-|\d/g, '').trim() || unit; }, '');
    }

    function covers(el) {
        var ref = el.style;
        var backgroundSize = ref.backgroundSize;
        var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
        el.style.backgroundSize = backgroundSize;
        return covers;
    }

    var parallax = {

        mixins: [Parallax],

        props: {
            target: String,
            viewport: Number,
            easing: Number
        },

        data: {
            target: false,
            viewport: 1,
            easing: 1
        },

        computed: {

            target: function(ref, $el) {
                var target = ref.target;

                return getOffsetElement(target && query(target, $el) || $el);
            }

        },

        update: {

            read: function(ref, types) {
                var percent = ref.percent;


                if (!types.has('scroll')) {
                    percent = false;
                }

                if (!this.matchMedia) {
                    return;
                }

                var prev = percent;
                percent = ease(scrolledOver(this.target) / (this.viewport || 1), this.easing);

                return {
                    percent: percent,
                    style: prev !== percent ? this.getCss(percent) : false
                };
            },

            write: function(ref) {
                var style = ref.style;


                if (!this.matchMedia) {
                    this.reset();
                    return;
                }

                style && css(this.$el, style);

            },

            events: ['scroll', 'resize']
        }

    };

    function ease(percent, easing) {
        return clamp(percent * (1 - (easing - easing * percent)));
    }

    // SVG elements do not inherit from HTMLElement
    function getOffsetElement(el) {
        return el
            ? 'offsetTop' in el
                ? el
                : getOffsetElement(parent(el))
            : document.body;
    }

    var SliderReactive = {

        update: {

            write: function() {

                if (this.stack.length || this.dragging) {
                    return;
                }

                var index = this.getValidIndex(this.index);

                if (!~this.prevIndex || this.index !== index) {
                    this.show(index);
                }

            },

            events: ['resize']

        }

    };

    function Transitioner$1 (prev, next, dir, ref) {
        var center = ref.center;
        var easing = ref.easing;
        var list = ref.list;


        var deferred = new Deferred();

        var from = prev
            ? getLeft(prev, list, center)
            : getLeft(next, list, center) + dimensions(next).width * dir;
        var to = next
            ? getLeft(next, list, center)
            : from + dimensions(prev).width * dir * (isRtl ? -1 : 1);

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                prev && this.updateTranslates();
                percent = prev ? percent : clamp(percent, 0, 1);
                triggerUpdate$1(this.getItemIn(), 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Transition
                    .start(list, {transform: translate(-to * (isRtl ? -1 : 1), 'px')}, duration, timing)
                    .then(deferred.resolve, noop);

                return deferred.promise;

            },

            cancel: function() {
                Transition.cancel(list);
            },

            reset: function() {
                css(list, 'transform', '');
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel(list);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', translate(clamp(
                    -to + (distance - distance * percent),
                    -getWidth(list),
                    dimensions(list).width
                ) * (isRtl ? -1 : 1), 'px'));

                this.updateTranslates();

                if (prev) {
                    percent = clamp(percent, -1, 1);
                    triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {percent: percent, dir: dir});
                    triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {percent: 1 - percent, dir: dir});
                }

            },

            percent: function() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },

            getDistance: function() {
                return Math.abs(to - from);
            },

            getItemIn: function(out) {
                if ( out === void 0 ) out = false;


                var actives = sortBy(this.getActives(), 'offsetLeft');
                var all = sortBy(children(list), 'offsetLeft');
                var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);

                return ~i && all[i + (prev && !out ? dir : 0)];

            },

            getActives: function() {
                return [prev || next].concat(children(list).filter(function (slide) {
                    var slideLeft = getElLeft(slide, list);
                    return slideLeft > from && slideLeft + dimensions(slide).width <= dimensions(list).width + from;
                }));
            },

            updateTranslates: function() {

                var actives = this.getActives();

                children(list).forEach(function (slide) {
                    var isActive = includes(actives, slide);

                    triggerUpdate$1(slide, ("itemtranslate" + (isActive ? 'in' : 'out')), {
                        percent: isActive ? 1 : 0,
                        dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
                    });
                });
            }

        };

    }

    function getLeft(el, list, center) {

        var left = getElLeft(el, list);

        return center
            ? left - centerEl(el, list)
            : Math.min(left, getMax(list));

    }

    function getMax(list) {
        return Math.max(0, getWidth(list) - dimensions(list).width);
    }

    function getWidth(list) {
        return children(list).reduce(function (right, el) { return dimensions(el).width + right; }, 0);
    }

    function centerEl(el, list) {
        return dimensions(list).width / 2 - dimensions(el).width / 2;
    }

    function getElLeft(el, list) {
        return el && (position(el).left + (isRtl ? dimensions(el).width - dimensions(list).width : 0)) * (isRtl ? -1 : 1) || 0;
    }

    function triggerUpdate$1(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    var slider = {

        mixins: [Class, Slider, SliderReactive],

        props: {
            center: Boolean,
            sets: Boolean
        },

        data: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner: Transitioner$1
        },

        computed: {

            avgWidth: function() {
                return getWidth(this.list) / this.length;
            },

            finite: function(ref) {
                var finite = ref.finite;

                return finite || Math.ceil(getWidth(this.list)) < dimensions(this.list).width + getMaxElWidth(this.list) + this.center;
            },

            maxIndex: function() {

                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return last(this.sets);
                }

                var lft = 0;
                var max = getMax(this.list);
                var index = findIndex(this.slides, function (el) {

                    if (lft >= max) {
                        return true;
                    }

                    lft += dimensions(el).width;

                });

                return ~index ? index : this.length - 1;
            },

            sets: function(ref) {
                var this$1 = this;
                var sets = ref.sets;


                if (!sets) {
                    return;
                }

                var width = dimensions(this.list).width / (this.center ? 2 : 1);

                var left = 0;
                var leftCenter = width;
                var slideLeft = 0;

                sets = sortBy(this.slides, 'offsetLeft').reduce(function (sets, slide, i) {

                    var slideWidth = dimensions(slide).width;
                    var slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!this$1.center && i > this$1.maxIndex) {
                            i = this$1.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = this$1.slides[i + 1];
                            if (this$1.center && cmp && slideWidth < leftCenter - dimensions(cmp).width / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
                            }

                        }
                    }

                    slideLeft += slideWidth;

                    return sets;

                }, []);

                return !isEmpty(sets) && sets;

            },

            transitionOptions: function() {
                return {
                    center: this.center,
                    list: this.list
                };
            }

        },

        connected: function() {
            toggleClass(this.$el, this.clsContainer, !$(("." + (this.clsContainer)), this.$el));
        },

        update: {

            write: function() {
                var this$1 = this;

                this.navItems.forEach(function (el) {
                    var index = toNumber(data(el, this$1.attrItem));
                    if (index !== false) {
                        el.hidden = !this$1.maxIndex || index > this$1.maxIndex || this$1.sets && !includes(this$1.sets, index);
                    }
                });

                if (this.length && !this.dragging && !this.stack.length) {
                    this.reorder();
                    this._translate(1);
                }

                var actives = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActive, includes(actives, slide)); });

                if (this.clsActivated && (!this.sets || includes(this.sets, toFloat(this.index)))) {
                    this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActivated || '', includes(actives, slide)); });
                }
            },

            events: ['resize']

        },

        events: {

            beforeitemshow: function(e) {

                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(
                    this.index
                    - this.prevIndex
                    + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
                );

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                var index = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = speedUp(this.avgWidth / this.velocity) * (dimensions(this.slides[index]).width / this.avgWidth);

                this.reorder();

            },

            itemshow: function() {
                ~this.prevIndex && addClass(this._getTransitioner().getItemIn(), this.clsActive);
            }

        },

        methods: {

            reorder: function() {
                var this$1 = this;


                if (this.finite) {
                    css(this.slides, 'order', '');
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

                this.slides.forEach(function (slide, i) { return css(slide, 'order', this$1.dir > 0 && i < index
                        ? 1
                        : this$1.dir < 0 && i >= this$1.index
                            ? -1
                            : ''
                    ); }
                );

                if (!this.center) {
                    return;
                }

                var next = this.slides[index];
                var width = dimensions(this.list).width / 2 - dimensions(next).width / 2;
                var j = 0;

                while (width > 0) {
                    var slideIndex = this.getIndex(--j + index, index);
                    var slide = this.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= dimensions(slide).width;
                }

            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;


                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev;

                do {

                    if (includes(this.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this.getIndex(index + this.dir, prevIndex);

                } while (index !== prev);

                return index;
            }

        }

    };

    function getMaxElWidth(list) {
        return Math.max.apply(Math, [ 0 ].concat( children(list).map(function (el) { return dimensions(el).width; }) ));
    }

    var sliderParallax = {

        mixins: [Parallax],

        data: {
            selItem: '!li'
        },

        computed: {

            item: function(ref, $el) {
                var selItem = ref.selItem;

                return query(selItem, $el);
            }

        },

        events: [

            {
                name: 'itemin itemout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var this$1 = this;
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var duration = ref_detail.duration;
                    var timing = ref_detail.timing;
                    var dir = ref_detail.dir;


                    fastdom.read(function () {
                        var propsFrom = this$1.getCss(getCurrentPercent(type, dir, percent));
                        var propsTo = this$1.getCss(isIn(type) ? .5 : dir > 0 ? 1 : 0);
                        fastdom.write(function () {
                            css(this$1.$el, propsFrom);
                            Transition.start(this$1.$el, propsTo, duration, timing).catch(noop);
                        });
                    });

                }
            },

            {
                name: 'transitioncanceled transitionend',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function() {
                    Transition.cancel(this.$el);
                }

            },

            {
                name: 'itemtranslatein itemtranslateout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var this$1 = this;
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var dir = ref_detail.dir;

                    fastdom.read(function () {
                        var props = this$1.getCss(getCurrentPercent(type, dir, percent));
                        fastdom.write(function () { return css(this$1.$el, props); });
                    });
                }
            }

        ]

    };

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrentPercent(type, dir, percent) {

        percent /= 2;

        return !isIn(type)
            ? dir < 0
                ? percent
                : 1 - percent
            : dir < 0
                ? 1 - percent
                : percent;
    }

    var Animations$2 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0, zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 + .5), zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 + .5 * percent), zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        pull: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ];
            },

            percent: function(current, next, dir) {
                return dir < 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(30 * percent), zIndex: -1},
                        {transform: translate(-100 * (1 - percent)), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-percent * 100), zIndex: 0},
                        {transform: translate(30 * (1 - percent)), zIndex: -1}
                    ];
            }

        },

        push: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ];
            },

            percent: function(current, next, dir) {
                return dir > 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(percent * 100), zIndex: 0},
                        {transform: translate(-30 * (1 - percent)), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30 * percent), zIndex: -1},
                        {transform: translate(100 * (1 - percent)), zIndex: 0}
                    ];
            }

        }

    });

    var slideshow = {

        mixins: [Class, Slideshow, SliderReactive],

        props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
        },

        data: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations: Animations$2
        },

        update: {

            read: function() {

                var ref = this.ratio.split(':').map(Number);
                var width = ref[0];
                var height = ref[1];

                height = height * this.list.offsetWidth / width || 0;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return {height: height - boxModelAdjust(this.list, 'height', 'content-box')};
            },

            write: function(ref) {
                var height = ref.height;

                height > 0 && css(this.list, 'minHeight', height);
            },

            events: ['resize']

        }

    };

    var sortable = {

        mixins: [Class, Animate],

        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },

        data: {
            group: false,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false,
            pos: {}
        },

        created: function() {
            var this$1 = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {
                    assign(this$1.pos, getEventPos(e));
                    fn(e);
                };
            });
        },

        events: {

            name: pointerDown,
            passive: false,
            handler: 'init'

        },

        computed: {

            target: function() {
                return (this.$el.tBodies || [this.$el])[0];
            },

            items: function() {
                return children(this.target);
            },

            isEmpty: {

                get: function() {
                    return isEmpty(this.items);
                },

                watch: function(empty) {
                    toggleClass(this.target, this.clsEmpty, empty);
                },

                immediate: true

            },

            handles: {

                get: function(ref, el) {
                    var handle = ref.handle;

                    return handle ? $$(handle, el) : this.items;
                },

                watch: function(handles, prev) {
                    css(prev, {touchAction: '', userSelect: ''});
                    css(handles, {touchAction: hasTouch ? 'none' : '', userSelect: 'none'}); // touchAction set to 'none' causes a performance drop in Chrome 80
                },

                immediate: true

            }

        },

        update: {

            write: function(data) {

                if (!this.drag || !parent(this.placeholder)) {
                    return;
                }

                var ref = this;
                var ref_pos = ref.pos;
                var x = ref_pos.x;
                var y = ref_pos.y;
                var ref_origin = ref.origin;
                var offsetTop = ref_origin.offsetTop;
                var offsetLeft = ref_origin.offsetLeft;
                var placeholder = ref.placeholder;

                css(this.drag, {
                    top: y - offsetTop,
                    left: x - offsetLeft
                });

                var sortable = this.getSortable(document.elementFromPoint(x, y));

                if (!sortable) {
                    return;
                }

                var items = sortable.items;

                if (items.some(Transition.inProgress)) {
                    return;
                }

                var target = findTarget(items, {x: x, y: y});

                if (items.length && (!target || target === placeholder)) {
                    return;
                }

                var previous = this.getSortable(placeholder);
                var insertTarget = findInsertTarget(sortable.target, target, placeholder, x, y, sortable === previous && data.moved !== target);

                if (insertTarget === false) {
                    return;
                }

                if (insertTarget && placeholder === insertTarget) {
                    return;
                }

                if (sortable !== previous) {
                    previous.remove(placeholder);
                    data.moved = target;
                } else {
                    delete data.moved;
                }

                sortable.insert(placeholder, insertTarget);

                this.touched.add(sortable);
            },

            events: ['move']

        },

        methods: {

            init: function(e) {

                var target = e.target;
                var button = e.button;
                var defaultPrevented = e.defaultPrevented;
                var ref = this.items.filter(function (el) { return within(target, el); });
                var placeholder = ref[0];

                if (!placeholder
                    || defaultPrevented
                    || button > 0
                    || isInput(target)
                    || within(target, ("." + (this.clsNoDrag)))
                    || this.handle && !within(target, this.handle)
                ) {
                    return;
                }

                e.preventDefault();

                this.touched = new Set([this]);
                this.placeholder = placeholder;
                this.origin = assign({target: target, index: index(placeholder)}, this.pos);

                on(document, pointerMove, this.move);
                on(document, pointerUp, this.end);

                if (!this.threshold) {
                    this.start(e);
                }

            },

            start: function(e) {

                this.drag = appendDrag(this.$container, this.placeholder);
                var ref = this.placeholder.getBoundingClientRect();
                var left = ref.left;
                var top = ref.top;
                assign(this.origin, {offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top});

                addClass(this.drag, this.clsDrag, this.clsCustom);
                addClass(this.placeholder, this.clsPlaceholder);
                addClass(this.items, this.clsItem);
                addClass(document.documentElement, this.clsDragState);

                trigger(this.$el, 'start', [this, this.placeholder]);

                trackScroll(this.pos);

                this.move(e);
            },

            move: function(e) {

                if (this.drag) {
                    this.$emit('move');
                } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                    this.start(e);
                }

            },

            end: function() {
                var this$1 = this;


                off(document, pointerMove, this.move);
                off(document, pointerUp, this.end);
                off(window, 'scroll', this.scroll);

                if (!this.drag) {
                    return;
                }

                untrackScroll();

                var sortable = this.getSortable(this.placeholder);

                if (this === sortable) {
                    if (this.origin.index !== index(this.placeholder)) {
                        trigger(this.$el, 'moved', [this, this.placeholder]);
                    }
                } else {
                    trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                    trigger(this.$el, 'removed', [this, this.placeholder]);
                }

                trigger(this.$el, 'stop', [this, this.placeholder]);

                remove(this.drag);
                this.drag = null;

                this.touched.forEach(function (ref) {
                        var clsPlaceholder = ref.clsPlaceholder;
                        var clsItem = ref.clsItem;

                        return this$1.touched.forEach(function (sortable) { return removeClass(sortable.items, clsPlaceholder, clsItem); }
                    );
                }
                );
                this.touched = null;
                removeClass(document.documentElement, this.clsDragState);

            },

            insert: function(element, target) {
                var this$1 = this;


                addClass(this.items, this.clsItem);

                var insert = function () { return target
                    ? before(target, element)
                    : append(this$1.target, element); };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }

            },

            remove: function(element) {

                if (!within(element, this.target)) {
                    return;
                }

                if (this.animation) {
                    this.animate(function () { return remove(element); });
                } else {
                    remove(element);
                }

            },

            getSortable: function(element) {
                do {
                    var sortable = this.$getComponent(element, 'sortable');

                    if (sortable && (sortable === this || this.group !== false && sortable.group === this.group)) {
                        return sortable;
                    }
                } while ((element = parent(element)));
            }

        }

    };

    var trackTimer;
    function trackScroll(pos) {

        var last = Date.now();
        trackTimer = setInterval(function () {

            var x = pos.x;
            var y = pos.y;
            y += window.pageYOffset;

            var dist = (Date.now() - last) * .3;
            last = Date.now();

            scrollParents(document.elementFromPoint(x, pos.y)).reverse().some(function (scrollEl) {

                var scroll = scrollEl.scrollTop;
                var scrollHeight = scrollEl.scrollHeight;

                var ref = offset(getViewport(scrollEl));
                var top = ref.top;
                var bottom = ref.bottom;
                var height = ref.height;

                if (top < y && top + 35 > y) {
                    scroll -= dist;
                } else if (bottom > y && bottom - 35 < y) {
                    scroll += dist;
                } else {
                    return;
                }

                if (scroll > 0 && scroll < scrollHeight - height) {
                    scrollTop(scrollEl, scroll);
                    return true;
                }

            });

        }, 15);

    }

    function untrackScroll() {
        clearInterval(trackTimer);
    }

    function appendDrag(container, element) {
        var clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));

        css(clone, 'margin', '0', 'important');
        css(clone, assign({
            boxSizing: 'border-box',
            width: element.offsetWidth,
            height: element.offsetHeight
        }, css(element, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));

        height(clone.firstElementChild, height(element.firstElementChild));

        return clone;
    }

    function findTarget(items, point) {
        return items[findIndex(items, function (item) { return pointInRect(point, item.getBoundingClientRect()); })];
    }

    function findInsertTarget(list, target, placeholder, x, y, sameList) {

        if (!children(list).length) {
            return;
        }

        var rect = target.getBoundingClientRect();
        if (!sameList) {

            if (!isHorizontal(list, placeholder)) {
                return y < rect.top + rect.height / 2
                    ? target
                    : target.nextElementSibling;
            }

            return target;
        }

        var placeholderRect = placeholder.getBoundingClientRect();
        var sameRow = linesIntersect(
            [rect.top, rect.bottom],
            [placeholderRect.top, placeholderRect.bottom]
        );

        var pointerPos = sameRow ? x : y;
        var lengthProp = sameRow ? 'width' : 'height';
        var startProp = sameRow ? 'left' : 'top';
        var endProp = sameRow ? 'right' : 'bottom';

        var diff = placeholderRect[lengthProp] < rect[lengthProp] ? rect[lengthProp] - placeholderRect[lengthProp] : 0;

        if (placeholderRect[startProp] < rect[startProp]) {

            if (diff && pointerPos < rect[startProp] + diff) {
                return false;
            }

            return target.nextElementSibling;
        }

        if (diff && pointerPos > rect[endProp] - diff) {
            return false;
        }

        return target;
    }

    function isHorizontal(list, placeholder) {

        var single = children(list).length === 1;

        if (single) {
            append(list, placeholder);
        }

        var items = children(list);
        var isHorizontal = items.some(function (el, i) {
            var rectA = el.getBoundingClientRect();
            return items.slice(i + 1).some(function (el) {
                var rectB = el.getBoundingClientRect();
                return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
            });
        });

        if (single) {
            remove(placeholder);
        }

        return isHorizontal;
    }

    function linesIntersect(lineA, lineB) {
        return lineA[1] > lineB[0] && lineB[1] > lineA[0];
    }

    var obj$1;

    var tooltip = {

        mixins: [Container, Togglable, Position],

        args: 'title',

        props: {
            delay: Number,
            title: String
        },

        data: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect: function() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, 'title', '');
            this.updateAria(false);
            makeFocusable(this.$el);
        },

        disconnected: function() {
            this.hide();
            attr(this.$el, 'title', this._hasTitle ? this.title : null);
        },

        methods: {

            show: function() {
                var this$1 = this;


                if (this.isToggled(this.tooltip) || !this.title) {
                    return;
                }

                this._unbind = once(document, ("show keydown " + pointerDown), this.hide, false, function (e) { return e.type === pointerDown && !within(e.target, this$1.$el)
                    || e.type === 'keydown' && e.keyCode === 27
                    || e.type === 'show' && e.detail[0] !== this$1 && e.detail[0].$name === this$1.$name; }
                );

                clearTimeout(this.showTimer);
                this.showTimer = setTimeout(this._show, this.delay);
            },

            hide: function() {
                var this$1 = this;


                if (matches(this.$el, 'input:focus')) {
                    return;
                }

                clearTimeout(this.showTimer);

                if (!this.isToggled(this.tooltip)) {
                    return;
                }

                this.toggleElement(this.tooltip, false, false).then(function () {
                    this$1.tooltip = remove(this$1.tooltip);
                    this$1._unbind();
                });
            },

            _show: function() {
                var this$1 = this;


                this.tooltip = append(this.container,
                    ("<div class=\"" + (this.clsPos) + "\"> <div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div> </div>")
                );

                on(this.tooltip, 'toggled', function (e, toggled) {

                    this$1.updateAria(toggled);

                    if (!toggled) {
                        return;
                    }

                    this$1.positionAt(this$1.tooltip, this$1.$el);

                    this$1.origin = this$1.getAxis() === 'y'
                        ? ((flipPosition(this$1.dir)) + "-" + (this$1.align))
                        : ((this$1.align) + "-" + (flipPosition(this$1.dir)));
                });

                this.toggleElement(this.tooltip, true);

            },

            updateAria: function(toggled) {
                attr(this.$el, 'aria-expanded', toggled);
            }

        },

        events: ( obj$1 = {

            focus: 'show',
            blur: 'hide'

        }, obj$1[(pointerEnter + " " + pointerLeave)] = function (e) {
                if (!isTouch(e)) {
                    this[e.type === pointerEnter ? 'show' : 'hide']();
                }
            }, obj$1[pointerDown] = function (e) {
                if (isTouch(e)) {
                    this.show();
                }
            }, obj$1 )

    };

    function makeFocusable(el) {
        if (!isFocusable(el)) {
            attr(el, 'tabindex', '0');
        }
    }

    function isFocusable(el) {
        return isInput(el) || matches(el, 'a,button') || hasAttr(el, 'tabindex');
    }

    var upload = {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },

        data: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            maxSize: 0,
            method: 'POST',
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
            multiple: false,
            name: 'files[]',
            params: {},
            type: '',
            url: '',
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
        },

        events: {

            change: function(e) {

                if (!matches(e.target, 'input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },

            drop: function(e) {
                stop(e);

                var transfer = e.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                removeClass(this.$el, this.clsDragover);

                this.upload(transfer.files);
            },

            dragenter: function(e) {
                stop(e);
            },

            dragover: function(e) {
                stop(e);
                addClass(this.$el, this.clsDragover);
            },

            dragleave: function(e) {
                stop(e);
                removeClass(this.$el, this.clsDragover);
            }

        },

        methods: {

            upload: function(files) {
                var this$1 = this;


                if (!files.length) {
                    return;
                }

                trigger(this.$el, 'upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this.maxSize && this.maxSize * 1000 < files[i].size) {
                        this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
                        return;
                    }

                    if (this.allow && !match$1(this.allow, files[i].name)) {
                        this.fail(this.msgInvalidName.replace('%s', this.allow));
                        return;
                    }

                    if (this.mime && !match$1(this.mime, files[i].type)) {
                        this.fail(this.msgInvalidMime.replace('%s', this.mime));
                        return;
                    }

                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent);
                var upload = function (files) {

                    var data = new FormData();

                    files.forEach(function (file) { return data.append(this$1.name, file); });

                    for (var key in this$1.params) {
                        data.append(key, this$1.params[key]);
                    }

                    ajax(this$1.url, {
                        data: data,
                        method: this$1.method,
                        responseType: this$1.type,
                        beforeSend: function (env) {

                            var xhr = env.xhr;
                            xhr.upload && on(xhr.upload, 'progress', this$1.progress);
                            ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) { return on(xhr, type.toLowerCase(), this$1[type]); }
                            );

                            return this$1.beforeSend(env);

                        }
                    }).then(
                        function (xhr) {

                            this$1.complete(xhr);

                            if (chunks.length) {
                                upload(chunks.shift());
                            } else {
                                this$1.completeAll(xhr);
                            }

                        },
                        function (e) { return this$1.error(e); }
                    );

                };

                upload(chunks.shift());

            }

        }

    };

    function match$1(pattern, path) {
        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var chunk = [];
            for (var j = 0; j < size; j++) {
                chunk.push(files[i + j]);
            }
            chunks.push(chunk);
        }
        return chunks;
    }

    function stop(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    var components$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Countdown: countdown,
        Filter: filter$1,
        Lightbox: lightbox,
        LightboxPanel: LightboxPanel,
        Notification: notification,
        Parallax: parallax,
        Slider: slider,
        SliderParallax: sliderParallax,
        Slideshow: slideshow,
        SlideshowParallax: sliderParallax,
        Sortable: sortable,
        Tooltip: tooltip,
        Upload: upload
    });

    each(components$1, function (component, name) { return UIkit.component(name, component); }
    );

    return UIkit;

})));

// Dynamic Adapt 
"use strict";

(function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = [];
    //Заполняем массивы
    if (daElements.length > 0) {
        let number = 0;
        for (let index = 0; index < daElements.length; index++) {
            const daElement = daElements[index];
            const daMove = daElement.getAttribute('data-da');
            if (daMove != '') {
                const daArray = daMove.split(',');
                const daPlace = daArray[1] ? daArray[1].trim() : 'last';
                const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
                const daDestination = document.querySelector('.' + daArray[0].trim())
                if (daArray.length > 0 && daDestination) {
                    daElement.setAttribute('data-da-index', number);
                    //Заполняем массив первоначальных позиций
                    originalPositions[number] = {
                        "parent": daElement.parentNode,
                        "index": indexInParent(daElement)
                    };
                    //Заполняем массив элементов 
                    daElementsArray[number] = {
                        "element": daElement,
                        "destination": document.querySelector('.' + daArray[0].trim()),
                        "place": daPlace,
                        "breakpoint": daBreakpoint
                    }
                    number++;
                }
            }
        }
        dynamicAdaptSort(daElementsArray);

        //Создаем события в точке брейкпоинта
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daBreakpoint = el.breakpoint;
            const daType = "max"; //Для MobileFirst поменять на min

            daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
            daMatchMedia[index].addListener(dynamicAdapt);
        }
    }
    //Основная функция
    function dynamicAdapt(e) {
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daElement = el.element;
            const daDestination = el.destination;
            const daPlace = el.place;
            const daBreakpoint = el.breakpoint;
            const daClassname = "_dynamic_adapt_" + daBreakpoint;

            if (daMatchMedia[index].matches) {
                //Перебрасываем элементы
                if (!daElement.classList.contains(daClassname)) {
                    let actualIndex = indexOfElements(daDestination)[daPlace];
                    if (daPlace === 'first') {
                        actualIndex = indexOfElements(daDestination)[0];
                    } else if (daPlace === 'last') {
                        actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                    }
                    daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                    daElement.classList.add(daClassname);
                }
            } else {
                //Возвращаем на место
                if (daElement.classList.contains(daClassname)) {
                    dynamicAdaptBack(daElement);
                    daElement.classList.remove(daClassname);
                }
            }
        }
        customAdapt();
    }

    //Вызов основной функции
    dynamicAdapt();

    //Функция возврата на место
    function dynamicAdaptBack(el) {
        const daIndex = el.getAttribute('data-da-index');
        const originalPlace = originalPositions[daIndex];
        const parentPlace = originalPlace['parent'];
        const indexPlace = originalPlace['index'];
        const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
        parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    }
    //Функция получения индекса внутри родителя
    function indexInParent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }
    //Функция получения массива индексов элементов внутри родителя 
    function indexOfElements(parent, back) {
        const children = parent.children;
        const childrenArray = [];
        for (let i = 0; i < children.length; i++) {
            const childrenElement = children[i];
            if (back) {
                childrenArray.push(i);
            } else {
                //Исключая перенесенный элемент
                if (childrenElement.getAttribute('data-da') == null) {
                    childrenArray.push(i);
                }
            }
        }
        return childrenArray;
    }
    //Сортировка объекта
    function dynamicAdaptSort(arr) {
        arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
        });
        arr.sort(function (a, b) {
            if (a.place > b.place) { return 1 } else { return -1 }
        });
    }
    //Дополнительные сценарии адаптации
    function customAdapt() {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
}());

document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
        fixedWidth: 100,
        height: 425,
        autoWidth: true,
        gap: 10,
        rewind: true,
        cover: true,
        isNavigation: true,
        focus: 'center',
        pagination: false,
        direction: 'ttb',
        perPage: 4,
        breakpoints: {
            '1400': {
                fixedWidth: 66,
                hheight: 425,
            },
            '1200': {
                fixedWidth: 60,
                hheight: 350,
            },
        },
    }).mount();

    var primarySlider = new Splide('#primary-slider', {
        type: 'slide',
        fixedWidth: 390,
        height: 390,
        heightRatio: 1,
        pagination: false,
        arrows: false,
        cover: true,
        direction: 'ttb',
        breakpoints: {
            '1400': {
                fixedWidth: 316,
                height: 316,
            },
            '1200': {
                fixedWidth: 228,
                height: 228,
            },
        },
    });

    primarySlider.sync(secondarySlider).mount();
});