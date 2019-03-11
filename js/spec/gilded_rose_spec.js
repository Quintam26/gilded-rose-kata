describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  // it("Once the sell by date has passed, quality degrades twice as fast", function() {
  //   items = [ new Item("foo", 0, 0) ];
  //   update_quality();
  //   expect(items[0].name).toEqual("foo");
  // });

  // it("The quality of an item is never negative", function() {
  //   items = [ new Item("foo", 0, 0) ];
  //   update_quality();
  //   expect(items[0].name).toEqual("foo");
  // });

  // it("'Aged Brie' actually increases in quality the older it gets", function() {
  //   items = [ new Item("foo", 0, 0) ];
  //   update_quality();
  //   expect(items[0].name).toEqual("foo");
  // });

  it("The quality of an item is never more than 50", function() {
    items = [ new Item("foo", 4, 51) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
    expect(items[0].sell_in).toEqual(3);
  });

  // it("'Sulfuras', being a legendary item, never has to be sold or decreases in quality", function() {
  //   items = [ new Item("foo", 0, 0) ];
  //   update_quality();
  //   expect(items[0].name).toEqual("foo");
  // });

  // it("'Backstage passes', like aged brie, increases in quality as it's sell-in value approaches; quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert", function() {
  //   items = [ new Item("foo", 0, 0) ];
  //   update_quality();
  //   expect(items[0].name).toEqual("foo");
  // });

  // it("'Conjured' items degrade in quality twice as fast as normal items", function() {
  //   items = [ new Item("foo", 0, 0) ];
  //   update_quality();
  //   expect(items[0].name).toEqual("foo");
  // });

});
