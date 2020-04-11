# vue-webcomponent

This is an example of vue UI components wrapped to use as generic UI component.

Thanks to vue is possible to use vue components in all ecosystems; react, angular, svelte...

See the examples folder for more details.

## library goal
It's just a demonstration library how is possible to implement reusable components in all ecosystems via Vue.js library.

It could be a good alternative to wrap vue components in a web component.

## Create your library

- Fork this project
- Create your own components in ```src/components```
- Publish it to npm
- Install it wherever you want

## Api
- embed(template: Element, props: Object, methods: Object); Embed Element component, see example below
- define(template: Element, props: Object, methods: Object); Register global component, see example below

## Examples
## Use a Vue component defined into this library in a Angular example:
```html
<div ng-app="app">
    <div ng-controller="ParentController as parent">
        <h1>Vue component:</h1>
        <wv-todo-list id="embed-list" @item-added="listenInput"></wv-todo-list>
        <h1>Angular app:</h1>
        {{ somePrimitive }}
    </div>
</div>
<script>
    function ParentController($scope) {
        $scope.somePrimitive = "Hi from Angular";
        $scope.updateValues = function(newItem) {
            $scope.$applyAsync(function() {
                $scope.somePrimitive = 'Listen Vue event from Angular, new item added: ' + newItem;
            });
        };
        const vueComponentMethod = {
            listenInput: $scope.updateValues.bind($scope)
        };
        window.vComponents.embed(document.querySelector("#embed-list"),undefined, vueComponentMethod);
    }
    angular.module('app', []).controller('ParentController', ParentController);
    const app = angular.module('myApp', []);
</script>
```

### Register a new components and use it:
```html
<!-- define template: -->
<template id="todo-list">
    <span>Write a text:</span>
    <input type="text" v-model="input">
    <h1>{{input}}</h1>
</template>

<!-- use it: -->
<wv-todo-list id="embed-list"></wv-todo-list>
<script>
    window.params = {
        input: ""
    };
    window.vComponents.define(document.querySelector("#todo-list"));
    window.instance = window.vComponents.embed(document.querySelector("#embed-list"), window.params);
</script>
```