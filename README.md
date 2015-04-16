# Ng-Harmony-Annotate
=====================

## Concept

A (sample) ES7-proposal (babel-feature) annotation collection mimicking the upcoming Angular 2.0 code-style.
Write your own, contribute, and feel like a hero ... it's easy!

Use:
* [literate-programming](http://npmjs.org/packages/literate-programming "click for npm-package-homepage") to write markdown-flavored literate JS, HTML and CSS
* [jspm](https://www.npmjs.com/package/jspm "click for npm-package-homepage") for a nice solution to handle npm-modules with ES6-Module-Format-Loading ...

* * *

## Files

This serves as literate-programming compiler-directive

[dist/raw/ng_harmony_annotate.js](#Compilation "save:| jstidy")

## Compilation

To Compile this package please run `npm run all` from a proper shell;

The Decorator foos are annotation-driving translators that allow you to use Angular 2.0 like styles!

```javascript
    export function Directive(val) {
        return function decorator(target) {
            angular.module(val.module).directive(val.selector, () => {
                return {
                    controller: target,
                    restrict: val.restrict || "A",
                    replace: val.replace || false,
                    templateUrl: val.templateUrl || null,
                    template: val.template || null,
                    scope: val.scope === true ? {} : (val.scope || null)
                };
            })
        }
    }

    export function Controller(val) {
        return function decorator(target) {
            let r = {};
            r[val.module] = {
                type: "controller",
                name: val.name
            }
            target.$register = r;
        }
    }

    export function Service(val) {
        return function decorator(target) {
            let r = {};
            r[val.module] = {
                type: "service",
                name: val.name
            }
            target.$register = r;
        }
    }
```
