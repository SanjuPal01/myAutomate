import { h } from "@stencil/core";
import find from 'lodash/fp/find';
/**
 * @description
 * A group of status filters. Uses the chef-option atom to render the status filters.
 *
 * @example
 * <chef-status-filter-group id="filters-example">
 *   <chef-option class="filter general" value="general">
 *     <chef-icon class="filter-icon">group_work</chef-icon>
 *     <div class="filter-label">Total</div>
 *     <div class="filter-total">30</div>
 *   </chef-option>
 *   <chef-option class="filter critical" value='critical'>
 *     <chef-icon class="filter-icon">warning</chef-icon>
 *     <div class="filter-label">Critical</div>
 *     <div class="filter-total">10</div>
 *   </chef-option>
 *   <chef-option class="filter warning" value='warning'>
 *     <chef-icon class="filter-icon">error</chef-icon>
 *     <div class="filter-label">Warning</div>
 *     <div class="filter-total">5</div>
 *   </chef-option>
 *   <chef-option class="filter success" value='success'>
 *     <chef-icon class="filter-icon">check_circle</chef-icon>
 *     <div class="filter-label">OK</div>
 *     <div class="filter-total">5</div>
 *   </chef-option>
 *   <chef-option class="filter disconnected" value='disconnected'>
 *     <chef-icon class="filter-icon"></chef-icon>
 *     <div class="filter-label">Disconnected</div>
 *     <div class="filter-total">8</div>
 *   </chef-option>
 *   <chef-option class="filter connected" value='connected'>
 *     <chef-icon class="filter-icon">link</chef-icon>
 *     <div class="filter-label">Connected</div>
 *     <div class="filter-total">22</div>
 *   </chef-option>
 *   <chef-option class="filter unknown" value='unknown'>
 *     <chef-icon class="filter-icon">help</chef-icon>
 *     <div class="filter-label">Unknown</div>
 *     <div class="filter-total">10</div>
 *   </chef-option>
 * </chef-status-filter-group>
 *
 * <chef-button id="lean-toggle" primary>Toggle lean attribute</chef-button>
 *
 * <script>
 *   const button = document.getElementById('lean-toggle');
 *   const filters = document.getElementById('filters-example');
 *   button.addEventListener('click', () => filters.toggleAttribute('lean'));
 * </script>
 *
 * <style>
 *   #lean-toggle { margin-left: 0; }
 * </style>
 */
export class ChefStatusFilterGroup {
    constructor() {
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
    }
    handleClick(event) {
        const option = event.target.closest('chef-option');
        if (option) {
            this.value = option.value;
            this.change.emit();
            this.input.emit();
        }
    }
    componentDidLoad() {
        const options = this.clearOptions();
        this.selected = find(['value', this.value], options);
        if (!this.selected) {
            this.selected = this.el.querySelector('chef-option[selected]') || options[0];
            this.value = this.selected.value;
        }
        this.selected.selected = true;
        // add keypress listeners to all the child options
        options.forEach(option => {
            option.addEventListener('keypress', event => this.handleKeypress(event));
            option.setAttribute('tabindex', '0');
        });
    }
    componentDidUpdate() {
        this.clearOptions();
        this.selected = this.el.querySelector(`chef-option[value='${this.value}']`);
        this.selected.selected = true;
    }
    render() {
        return (h("slot", null));
    }
    clearOptions() {
        const options = Array.from(this.el.querySelectorAll('chef-option'));
        options.forEach((opt) => opt.selected = false);
        return options;
    }
    handleKeypress(event) {
        if (event.key === 'Enter') {
            this.handleClick(event);
        }
    }
    static get is() { return "chef-status-filter-group"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-status-filter-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-status-filter-group.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the currently toggled option."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "input",
            "name": "input",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
