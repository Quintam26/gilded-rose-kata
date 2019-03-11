const { expect } = require('chai');
const update_quality = require('../src/gilded_rose');

describe('Gilded Rose', () => {

    let items;

    it('should foo', function() {
        items = [new Item('foo', 0, 0)];
        update_quality();
        expect(items[0].name).toEqual('fixme');
    });

});
