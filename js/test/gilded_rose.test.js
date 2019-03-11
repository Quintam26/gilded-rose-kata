const { expect } = require('chai');
const update_quality = require('../src/gilded_rose');
const Item = require('../src/gilded_rose');

describe('Gilded Rose', () => {

    it('Update quantity', () => {
        const items = [new Item('foo', 0, 0)];
        update_quality();
        expect(items[0].name).equal('foo');
    });

});
