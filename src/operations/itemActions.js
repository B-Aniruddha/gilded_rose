import { MAX_QUALITY, MIN_QUALITY, MIN_SELL } from '../gilded_rose';

export const decreaseSellIn = item => (item.sellIn -= 1);

export const isExpired = item => item.sellIn < MIN_SELL;

export const setQualityToMin = item => (item.quality = MIN_QUALITY);

export const decreaseQuality = item => {
	if (item.quality > MIN_QUALITY) {
		item.quality = item.quality - 1;
	}
};

export const increaseQuality = item => {
	if (item.quality < MAX_QUALITY) {
		item.quality = item.quality + 1;
	}
};
