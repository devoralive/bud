define('bud/insert', function () {
    'use strict';

    return {
        item: '',

        construct: function (chain) {
            this.item = chain;
        },

        in: function (selector) {
            var selected = document.querySelector(selector),
                block = document.createElement('div'),
                i,
                children;

            block.innerHTML = this.item;
            children = block.childNodes;

            for (var i = 0; i < children.length; i = i + 1) {
                selected.appendChild(block.children[i]);
            }
            this.item = '';
        },

        before: function (selector) {
            this.item = selector;

            return this;
        },

        after: function (selector) {
            this.item = selector;

            return this;
        }
    };
});