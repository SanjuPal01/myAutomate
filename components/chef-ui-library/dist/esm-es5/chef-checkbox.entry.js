import { r as registerInstance, d as createEvent, h, H as Host } from './chunk-efdec40a.js';
var id = 0;
/**
 * @description
 * `<chef-checkbox>` is used to display checkbox inputs. Clicking the checkbox,
 * or pressing `space` while the checkbox is focused, will toggle the `checked`
 * property. A `change` event emits when the `checked` property is toggled.
 *
 * @example
 * <div class="form-field">
 *   <chef-checkbox>Label Text</chef-checkbox>
 * </div>
 * <div class="form-field">
 *   <chef-checkbox checked>Label Text</chef-checkbox>
 * </div>
 * <div class="form-field">
 *   <chef-checkbox disabled>Label Text</chef-checkbox>
 * </div>
 * <div class="form-field">
 *   <chef-checkbox indeterminate>Label Text</chef-checkbox>
 * </div>
 */
var ChefCheckbox = /** @class */ (function () {
    function ChefCheckbox(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.labelId = '';
        this.labelled = false;
        this.change = createEvent(this, "change", 7);
    }
    ChefCheckbox.prototype.handleKeydown = function (event) {
        if (event.key === ' ') {
            this.handleToggle(event);
        }
    };
    ChefCheckbox.prototype.handleToggle = function (event) {
        if (event.target.nodeName !== 'A') {
            this.toggle();
            event.preventDefault();
        }
    };
    ChefCheckbox.prototype.componentWillLoad = function () {
        this.labelId = "label-" + ++id;
    };
    ChefCheckbox.prototype.componentDidRender = function () {
        this.labelled = this.labelEl.innerHTML.trim().length > 0;
    };
    ChefCheckbox.prototype.toggle = function () {
        this.checked = !this.checked;
        this.indeterminate = false;
        this.change.emit(this.checked);
    };
    ChefCheckbox.prototype.render = function () {
        var _this = this;
        var checkIcon = this.checked ? 'check' : this.indeterminate ? 'remove' : 'close';
        var labelRef = function (el) { return _this.labelEl = el; };
        return (h(Host, { role: "checkbox", tabindex: this.disabled ? '-1' : '0', "aria-checked": this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false', "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": this.labelled ? this.labelId : null }, h("div", { class: "check-wrap" }, h("chef-icon", null, checkIcon)), h("div", { class: "label-wrap", id: this.labelId, ref: labelRef }, h("slot", null))));
    };
    Object.defineProperty(ChefCheckbox, "style", {
        get: function () { return "chef-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}chef-checkbox,chef-checkbox .check-wrap{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}chef-checkbox .check-wrap{width:20px;min-width:20px;height:20px;border:2px solid;border-radius:var(--chef-border-radius);color:var(--chef-white);-ms-flex-pack:center;justify-content:center}chef-checkbox .check-wrap chef-icon{color:var(--chef-white)}chef-checkbox .label-wrap{display:none;margin-left:14px;font-size:14px;color:var(--chef-primary-dark)}chef-checkbox[aria-labelledby] .label-wrap{display:block}chef-checkbox[aria-checked=true] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-checked=false] .check-wrap{border-color:var(--chef-dark-grey);background-color:var(--chef-white)}chef-checkbox[aria-checked=mixed] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-disabled]{border:var(--chef-grey);opacity:.5;cursor:default;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    return ChefCheckbox;
}());
export { ChefCheckbox as chef_checkbox };
