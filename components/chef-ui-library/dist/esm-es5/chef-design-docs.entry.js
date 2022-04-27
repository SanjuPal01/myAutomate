import { r as registerInstance, g as getContext, h } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-6b826df5.js';
import { m as map } from './chunk-ad917f49.js';
import { g as get, p as pipe } from './chunk-6bcd5f10.js';
import { a as filter, f as first } from './chunk-2436ce83.js';
import { g as getOr } from './chunk-c8bc95ed.js';
import './chunk-623280d3.js';
import './chunk-af13a544.js';
import { s as startCase } from './chunk-65c9e296.js';
var ChefDesignDocs = /** @class */ (function () {
    function ChefDesignDocs(hostRef) {
        registerInstance(this, hostRef);
        this.store = getContext(this, "store");
    }
    ChefDesignDocs.prototype.componentWillLoad = function () {
        var _this = this;
        this.store.mapStateToProps(this, function (state) {
            var docs = get(['docs', 'byId'], state);
            var docIds = pipe(get(['docs', 'allIds']), filter(function (id) { return get([id, 'docType'], docs) === _this.docType; }))(state);
            return {
                docs: docs,
                docIds: docIds
            };
        });
    };
    ChefDesignDocs.prototype.render = function () {
        var currentDoc = getOr(first(this.docIds), ['params', 'id'], this.match);
        return (h("chef-layout", null, h("chef-aside", { id: "sidebar-nav" }, h("nav", { "aria-labelledby": "nav2" }, h("h2", { id: "nav2", class: "visually-hidden" }, "Design Elements Navigation"), h("ul", null, this.nav(this.docType, this.docIds, this.docs)))), h("chef-main", { class: "doc" }, (function () {
            switch (currentDoc) {
                case 'chef-colors': return h("chef-colors", null);
                case 'chef-typography': return h("chef-typography", null);
                default: return 'component not found';
            }
        })())));
    };
    ChefDesignDocs.prototype.nav = function (docType, docNames, docs) {
        var link = function (doc) {
            return (h("li", null, h("stencil-route-link", { url: docType + "/" + doc }, pipe(get([doc, 'name']), startCase)(docs))));
        };
        return map(link, docNames);
    };
    Object.defineProperty(ChefDesignDocs, "style", {
        get: function () { return "chef-design-docs #sidebar-nav,chef-ui-docs #sidebar-nav{-ms-flex-order:1;order:1;margin-left:-1em;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em 1em;-ms-flex:1 0 150px;flex:1 0 150px}chef-design-docs nav,chef-ui-docs nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}chef-design-docs nav ul,chef-ui-docs nav ul{padding-left:0}chef-design-docs nav ul li,chef-ui-docs nav ul li{margin:0;list-style:none}chef-design-docs nav a,chef-ui-docs nav a{padding:.5em;display:block;text-decoration:none;color:inherit}chef-design-docs nav a.link-active,chef-ui-docs nav a.link-active{background:var(--chef-grey);-webkit-box-shadow:0 0 2px rgba(0,0,0,.2);box-shadow:0 0 2px rgba(0,0,0,.2)}chef-design-docs nav a:focus,chef-design-docs nav a:hover,chef-ui-docs nav a:focus,chef-ui-docs nav a:hover{color:var(--chef-primary-bright);border-right:2px solid var(--chef-primary-bright)}"; },
        enumerable: true,
        configurable: true
    });
    return ChefDesignDocs;
}());
export { ChefDesignDocs as chef_design_docs };
