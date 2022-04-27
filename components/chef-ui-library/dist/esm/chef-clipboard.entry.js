import { r as registerInstance, h } from './chunk-efdec40a.js';

const preClickText = 'Copy to clipboard';
const postClickText = 'Copied!';
const postClickTime = 1500;
let id = 0;
/**
 * @description
 * The `<chef-clipboard>` atom is used to copy content into the user's clipboard.
 *
 * @example
 * <chef-input id="input" value="text to copy"></chef-input>
 * <chef-clipboard id="clipboard" value="text to copy"></chef-clipboard>
 * <script>
 *   const input = document.getElementById('input');
 *   const clipboard = document.getElementById('clipboard');
 *   input.addEventListener('input', e => clipboard.value = e.target.value);
 * </script>
 *
 * @example
 * <chef-table>
 *   <chef-tr>
 *     <chef-td>
 *       <chef-clipboard value="Linux Baseline"></chef-clipboard> Linux Baseline
 *     </chef-td>
 *     <chef-td>
 *       <chef-clipboard value="owner/linux-baseline"></chef-clipboard> owner/linux-baseline
 *     </chef-td>
 *     <chef-td>
 *       <chef-clipboard value="Linux Baseline" label="With Label and Icon"></chef-clipboard>
 *     </chef-td>
 *     <chef-td>
 *       <chef-clipboard value="owner/linux-baseline" label="Without Icon" icon=""></chef-clipboard>
 *     </chef-td>
 *   </chef-tr>
 * </chef-table>
 */
class ChefClipboard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The text to be copied to the clipboard.
         */
        this.value = '';
        /**
         * An optional icon that is displayed by default. To suppress the icon pass in the empty string.
         */
        this.icon = 'content_copy';
        /**
         * An optional label that is empty by default. When present, it appears to the right of the icon (if the icon is present).
         */
        this.label = '';
        /**
         * An optional attribute that creates a plain div instead of a chef-button as the carrier when set to true.
         */
        this.plain = false;
        this.tooltipText = preClickText;
    }
    handleClick() {
        // Without the setTimeout wrapper on `copy` a parent DOM element may not respond
        // properly to events. Specifically, selecting "Copy Token" inside a `<chef-control-menu>`
        // caused the `<chef-control-menu>` not to close.
        setTimeout(() => this.copy(this.value), 0);
        // This duplicate, immediate call is *also* necessary--without it the same "Copy Token" action
        // fails in Firefox: the clipboard never receives the copied text.
        this.copy(this.value);
        this.tooltipText = postClickText;
        setTimeout(() => this.tooltipText = preClickText, postClickTime);
    }
    async copy(value) {
        // setup
        const el = document.createElement('textarea');
        el.value = value;
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        // copy
        el.select();
        const copied = document.execCommand('copy');
        // cleanup
        document.body.removeChild(el);
        return Promise.resolve(copied);
    }
    get buttonProps() {
        return this.icon ? {
            tertiary: true
        } : {
            primary: true
        };
    }
    render() {
        const buttonId = `clipboard-btn-${++id}`;
        return (this.plain ?
            [
                h("div", Object.assign({ id: buttonId }, this.buttonProps), this.icon ? h("chef-icon", null, this.icon) : '', this.label ? h("span", { class: "clipboard-label" }, this.label) : '')
            ] :
            [
                h("chef-button", Object.assign({ id: buttonId }, this.buttonProps), this.icon ? h("chef-icon", null, this.icon) : '', this.label ? h("span", { class: "clipboard-label" }, this.label) : ''),
                h("chef-tooltip", { for: buttonId }, this.tooltipText)
            ]);
    }
}

export { ChefClipboard as chef_clipboard };
