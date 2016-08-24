export function Component(val) {
	return function decorator(target) {
		if (typeof val.ctrl === "undefined") {
			if (val.deps !== null && typeof val.deps !== "undefined") {
				target.$inject = val.deps;
			}
		}
		let mod = angular.module(val.module) || angular.module(val.module, []);
		mod.directive(val.selector, () => {
			return {
				controller: val.ctrl || target,
				restrict: val.restrict || "A",
				replace: val.replace || false,
				templateUrl: val.templateUrl || null,
				template: val.template || null,
				scope: val.scope === true ? {} : val.scope || null
			};
		});
	};
}

export function Controller(val) {
	return function decorator(target) {
		let r = {};
		r[val.module] = {
			type: "controller",
			name: val.name
		};
		target.$register = r;
		if (val.deps !== null && typeof val.deps !== "undefined") {
			target.$inject = val.deps;
		}
	};
}

export function Service(val) {
	return function decorator(target) {
		let r = {};
		r[val.module] = {
			type: "service",
			name: val.name
		};
		target.$register = r;
		if (val.deps !== null && typeof val.deps !== "undefined") {
			target.$inject = val.deps;
		}
	};
}

export function Transient(val) {
	return function decorator(target) {
		target.LISTENERS = val;
	};
}

export function Mixin(val) {
	return function decorator(target) {
		target.mixin(...val);
	};
}

//# sourceMappingURL=common_module.js.map