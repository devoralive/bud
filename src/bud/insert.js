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

        hasFirstChildOf: function (selector) {
            var selected = document.querySelector(selector);

            selected.insertAdjacentHTML('afterbegin', this.item);
            this.item = '';
        },

        hasLastChildOf: function (selector) {
            var selected = document.querySelector(selector);

            selected.insertAdjacentHTML('beforeend', this.item);
            this.item = '';
        },

        before: function (selector) {
            var selected = document.querySelector(selector);

            selected.insertAdjacentHTML('beforebegin', this.item);
            this.item = '';
        },

        after: function (selector) {
            var selected = document.querySelector(selector);

            selected.insertAdjacentHTML('afterend', this.item);
            this.item = '';
        }
    };
});