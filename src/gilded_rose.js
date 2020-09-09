import updateItem from './operations/itemUpdates';

export const MIN_SELL = 0;
export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

export class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class Store {
	constructor(items = []) {
		this.items = items;
	}

	updateQuality() {
		this.items.forEach(updateItem);
		return this.items;
	}
}

export const Items = [
	new Item("+5 Dexterity Vest", 10, 20),
	new Item("Aged Brie", 2, 0),
	new Item("Elixir of the Mongoose", 5, 7),
	new Item("Sulfuras, Hand of Ragnaros", 0, 80),
	new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
	new Item("Conjured Mana Cake", 3, 6)
];
