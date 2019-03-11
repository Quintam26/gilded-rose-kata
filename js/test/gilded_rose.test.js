const { expect } = require('chai');
const update_quality = require('../src/gilded_rose');
const Item = require('../src/gilded_rose');

describe('Gilded Rose', () => {

    it('Update quality', () => {
        let items = new Item('foo', 0, 0);
        update_quality();
        console.log('Data for items', items);
        expect(items[0].name).toEqual('fixme');
    });

});
