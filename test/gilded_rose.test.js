const { Store, Item } = require("../src/gilded_rose");

describe("gilded rose", function () {
    describe("item creation test", function () {
        it("should be default", function () {
            const item = new Item("default", 0, 0);
            expect(item.name).toBe("default");
        });
    });
});