import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import { G as toNumber, d as convert, r as require$$1 } from './chunk-6b826df5.js';
import { b as baseRest } from './chunk-397bf533.js';
/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    return setTimeout(function () { func.apply(undefined, args); }, wait);
}
var _baseDelay = baseDelay;
/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function (func, wait, args) {
    return _baseDelay(func, toNumber(wait) || 0, args);
});
var delay_1 = delay;
var func = convert('delay', delay_1);
func.placeholder = require$$1;
var delay$1 = func;
/**
 * @description
 * Scrollfader behavior. The element contained within the scrollfader will remain invisible until the page is scrolled to the scrollfader. The element will then fade in. This is generally used for elements that will have a fixed position on the page, otherwise they would never be visible.
 *
 * Note: IE11 Support is dependent on a polyfill.
 *
 * @example
 * <div style='height: 2000px'>
 *   <h1>Scroll to see the scrollfader in action</h1>
 *   <chef-scrollfader>
 *     <h2 style='position: fixed;'>I should fade in when the document is scrolled</h2>
 *   </chef-scrollfader>
 * </div>
 */
var ChefScrollfader = /** @class */ (function () {
    function ChefScrollfader(hostRef) {
        registerInstance(this, hostRef);
    }
    ChefScrollfader.prototype.render = function () {
        return [
            h("div", { class: "sentinel" }),
            h("slot", null)
        ];
    };
    ChefScrollfader.prototype.componentDidLoad = function () {
        var _this = this;
        var observer = new IntersectionObserver(function (sentinels) {
            var sentinel = sentinels[0];
            if (!sentinel.isIntersecting && sentinel.boundingClientRect.top <= 0) {
                _this.el.classList.add('visible');
            }
            else {
                _this.el.classList.remove('visible');
            }
        });
        // This isn't ideal, but when loading in angular, elements are hidden
        // until they all load and then displayed. Since this component uses
        // an animation to fade in, it flashes for a second on load and fades
        // out. The delay just prevents the IntersectionObserver from binding
        // until hopefully after angular has finished loading everything.
        // TODO: Find a better way to handle this.
        delay$1(2000, function () {
            observer.observe(_this.el.querySelector('.sentinel'));
        });
    };
    Object.defineProperty(ChefScrollfader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefScrollfader, "style", {
        get: function () { return "chef-scrollfader.hydrated{-webkit-transition:opacity .5s ease-out;transition:opacity .5s ease-out}chef-scrollfader.visible{opacity:1;pointer-events:auto}chef-scrollfader{display:block;opacity:0;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    return ChefScrollfader;
}());
export { ChefScrollfader as chef_scrollfader };
