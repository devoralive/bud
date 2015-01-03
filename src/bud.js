define('bud', ['doa!class:bud/insert'], function (Insert) {
    'use strict';

    return {
        insert: function (chain) {
            return new Insert(chain);
        }
    };
});
