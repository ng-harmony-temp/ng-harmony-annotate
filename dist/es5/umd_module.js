(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.ng_harmony_annotate = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Directive = Directive;
    exports.Controller = Controller;
    exports.Service = Service;

    function Directive(val) {
        return function decorator(target) {
            angular.module(val.module).directive(val.selector, function () {
                return {
                    controller: target,
                    restrict: val.restrict || "A",
                    replace: val.replace || false,
                    templateUrl: val.templateUrl || null,
                    template: val.template || null,
                    scope: val.scope === true ? {} : val.scope || null
                };
            });
        };
    }

    function Controller(val) {
        return function decorator(target) {
            var r = {};
            r[val.module] = {
                type: "controller",
                name: val.name
            };
            target.$register = r;
        };
    }

    function Service(val) {
        return function decorator(target) {
            var r = {};
            r[val.module] = {
                type: "service",
                name: val.name
            };
            target.$register = r;
        };
    }
});

//# sourceMappingURL=umd_module.js.map