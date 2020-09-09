import { decreaseQuality, decreaseSellIn, isExpired } from '../operations/itemActions';

export default item => {
	decreaseSellIn(item);

	decreaseQuality(item);

	if (isExpired(item)) {
		decreaseQuality(item);
	}
};
