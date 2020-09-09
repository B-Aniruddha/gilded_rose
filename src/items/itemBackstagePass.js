import { increaseQuality, decreaseSellIn, setQualityToMin, isExpired } from '../operations/itemActions';

const FIRST_BOUNDARY_BACKSTAGE_SELL = 10;
const SECOND_BOUNDARY_BACKSTAGE_SELL_IN = 5;
const BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';

const isCorrectUpdateAction = item => item.name === BACKSTAGE_PASS;

const update = item => {
	decreaseSellIn(item);

	if (isExpired(item)) {
		setQualityToMin(item);
		return;
	}

	increaseQuality(item);

	if (item.sellIn < FIRST_BOUNDARY_BACKSTAGE_SELL) {
		increaseQuality(item);
	}
	if (item.sellIn < SECOND_BOUNDARY_BACKSTAGE_SELL_IN) {
		increaseQuality(item);
	}
};

export default { isCorrectUpdateAction, update };
