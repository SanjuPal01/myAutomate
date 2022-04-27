import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
/**
 * @description
 * A wrapper element that fires an event when a user clicks outside of the wrapper. This can be used
 * within modals/dialogs for closing the element when a user clicks outside of it, for example.
 *
 * The 'omit' property allows you to prevent the 'clickOutside' event from being dispatched if a
 * user clicks on or within an element that contains the provided class name. This is useful if you
 * want to use `chef-click-outside` within a modal but you don't want the event to fire when the
 * user clicks on the button to open the modal.
 *
 * @example
 * <chef-click-outside id="wrapper" omit="omitted">
 *   <chef-markdown id="content" text="# Click outside of me."></chef-markdown>
 * </chef-click-outside>
 * <chef-button class="omitted" primary>An omitted click target</chef-button>
 * <chef-button class="omitted" primary>Another omitted click target</chef-button>
 *
 * <script>
 *   const wrapper = document.getElementById('wrapper');
 *   const content = document.getElementById('content');
 *   wrapper.addEventListener('clickOutside', () => {
 *     content.text = '# Thanks!';
 *     setTimeout(() => content.text = '# Click outside of me.', 1000);
 *   });
 * </script>
 *
 * <style>
 *   #wrapper { display: block; background: var(--chef-white); }
 *   #content { padding: 1em; border: 1px solid; border-color: var(--chef-grey); }
 *   .omitted { margin: 1em 1em 0 0; }
 * </style>
 */
var ChefClickOutside = /** @class */ (function () {
    function ChefClickOutside(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Class name to omit. Any click event targets that are on or within an element that has this
         * class name will not dispatch a `clickOutside` event.
         */
        this.omit = '';
        this.clickOutside = createEvent(this, "clickOutside", 7);
    }
    ChefClickOutside.prototype.render = function () {
        return (h("slot", null));
    };
    ChefClickOutside.prototype.onDocumentClick = function (event) {
        var clickedInside = this.el.contains(event.target);
        var clickedOmitted = this.omit && this.omit.length && event.target.closest("." + this.omit);
        if (!clickedInside && !clickedOmitted) {
            this.clickOutside.emit(null);
        }
    };
    Object.defineProperty(ChefClickOutside.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ChefClickOutside;
}());
export { ChefClickOutside as chef_click_outside };
