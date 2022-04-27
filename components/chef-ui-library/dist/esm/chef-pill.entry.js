import { r as registerInstance, h } from './chunk-efdec40a.js';

/**
 * @description
 * Displays text in pill form. Used for tagging things and whatnot.
 * You can set the background color and text color with css when using
 * the atom directly. When the atom is part of another molecule there
 * are two css variables provided.
 * --pill-background-color
 * --pill-text-color
 *
 * @example
 * <chef-pill>Some Pill Text</chef-pill>
 *
 * @example
 * <chef-pill style="background-color: blue; color: white">Some Pill Text</chef-pill>
 *
 * @example
 * <div style="--pill-background-color: black; --pill-text-color: white">
 *   <chef-input type='key-value' value='foobar:bizbang'></chef-input>
 * </div>
 */
class ChefPill {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("slot", null);
    }
    static get style() { return "chef-pill{--background-color:var(--pill-background-color,var(--chef-light-grey));--text-color:var(--pill-text-color,var(--chef-dark-grey));display:inline-block;white-space:nowrap;background-color:var(--background-color);color:var(--text-color);padding:.5em;border-radius:1em}"; }
}

export { ChefPill as chef_pill };
