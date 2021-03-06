import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-6b826df5.js';
import { f as find } from './chunk-b5533944.js';
/**
 * @description
 * A toggle button. Uses the chef-option atom to define it's different states.
 *
 * @example
 * <chef-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-radio>
 */
var ChefRadio = /** @class */ (function () {
    function ChefRadio(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        this.change = createEvent(this, "change", 7);
        this.input = createEvent(this, "input", 7);
    }
    ChefRadio.prototype.handleClick = function (event) {
        this.value = event.target.closest('chef-option').value;
        this.change.emit();
        this.input.emit();
    };
    ChefRadio.prototype.componentDidLoad = function () {
        var options = this.clearOptions();
        this.selected = find(['value', this.value], options);
        if (!this.selected) {
            this.selected = this.el.querySelector('chef-option[selected]') || options[0];
            this.value = this.selected.value;
        }
        this.selected.selected = true;
    };
    ChefRadio.prototype.componentDidUpdate = function () {
        this.clearOptions();
        this.selected = this.el.querySelector("chef-option[value='" + this.value + "']");
        this.selected.selected = true;
    };
    ChefRadio.prototype.render = function () {
        return (h("slot", null));
    };
    ChefRadio.prototype.clearOptions = function () {
        var options = Array.from(this.el.querySelectorAll('chef-option'));
        options.forEach(function (opt) { return opt.selected = false; });
        return options;
    };
    Object.defineProperty(ChefRadio.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefRadio, "style", {
        get: function () { return "\@charset \"UTF-8\";chef-radio{--active-color:var(--toggle-active-color,var(--chef-primary-bright))}chef-radio chef-option{display:block;cursor:pointer;padding:.5em .75em;-webkit-transition:color .5s ease;transition:color .5s ease}chef-radio chef-option .option-content{padding-left:.5em}chef-radio chef-option:before{font-family:Material Icons;content:\"???\";color:var(--chef-grey);vertical-align:-2px}chef-radio chef-option:hover,chef-radio chef-option:hover:before{color:var(--active-color);-webkit-transition:color 1s ease;transition:color 1s ease}chef-radio chef-option.selected{color:var(--active-color)}chef-radio chef-option.selected:before{font-family:Material Icons;content:\"???\";color:var(--active-color)}"; },
        enumerable: true,
        configurable: true
    });
    return ChefRadio;
}());
export { ChefRadio as chef_radio };
