import { h } from "@stencil/core";
/**
 * @description
 * Button that scrolls the user to the top of the page. The button is positioned
 * to be displayed after the user scrolls the equivalent of one viewport height.
 *
 * @example
 * <div style="height: 3000px">
 *  Scroll to see the button and try it out!
 *  <chef-scroll-top></chef-scroll-top>
 * </div>
 */
export class ChefScrollTop {
    render() {
        return (h("chef-scrollfader", null,
            h("chef-button", { class: "chef-scroll-button", onClick: () => this.scrollToTop(), primary: true },
                h("chef-icon", null, "arrow_upward"),
                h("span", { class: "visually-hidden" }, "Scroll to Top"))));
    }
    scrollToTop() {
        scrollTo(document.documentElement, 0, 1000);
        function scrollTo(element, to, duration) {
            if (duration < 0)
                return;
            // Calculates the difference between the current scroll point and the top of the document
            const difference = to - element.scrollTop;
            // Calculates how much the window should move
            const perTick = difference / duration * 10;
            // This fires every 10 milliseconds to move the window
            setTimeout(() => {
                element.scrollTop = element.scrollTop + perTick;
                scrollTo(element, 0, duration - 10);
            }, 10);
        }
    }
    static get is() { return "chef-scroll-top"; }
    static get originalStyleUrls() { return {
        "$": ["chef-scroll-top.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-scroll-top.css"]
    }; }
    static get elementRef() { return "el"; }
}
