import { h } from './chunk-efdec40a.js';
var createProviderConsumer = function (defaultState, consumerRender) {
    var listeners = new Map();
    var currentState = defaultState;
    var updateListener = function (fields, instance) {
        if (Array.isArray(fields)) {
            fields.slice().forEach(function (fieldName) {
                instance[fieldName] = currentState[fieldName];
            });
        }
        else {
            instance[fields] = Object.assign({}, currentState);
        }
    };
    var subscribe = function (instance, propList) {
        if (!listeners.has(instance)) {
            listeners.set(instance, propList);
            updateListener(propList, instance);
        }
        return function () {
            if (listeners.has(instance)) {
                listeners.delete(instance);
            }
        };
    };
    var Provider = function (_a, children) {
        var state = _a.state;
        currentState = state;
        listeners.forEach(updateListener);
        return children;
    };
    var Consumer = function (props, children) {
        // The casting on subscribe is to allow for crossover through the stencil compiler
        // In the future we should allow for generics in components.
        return consumerRender(subscribe, children[0]);
    };
    var injectProps = function (Cstr, fieldList) {
        var CstrPrototype = Cstr.prototype;
        var cstrConnectedCallback = CstrPrototype.connectedCallback;
        var cstrDisconnectedCallback = CstrPrototype.disconnectedCallback;
        CstrPrototype.connectedCallback = function () {
            subscribe(this, fieldList);
            if (cstrConnectedCallback) {
                return cstrConnectedCallback.call(this);
            }
        };
        CstrPrototype.disconnectedCallback = function () {
            listeners.delete(this);
            if (cstrDisconnectedCallback) {
                cstrDisconnectedCallback.call(this);
            }
        };
    };
    return {
        Provider: Provider,
        Consumer: Consumer,
        injectProps: injectProps
    };
};
var ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: function () { }
}, function (subscribe, child) { return (h("context-consumer", { subscribe: subscribe, renderer: child })); });
export { ActiveRouter as A };
