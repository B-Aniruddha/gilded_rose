import agedBrie from '../items/itemAgedBrie';
import backstagePass from '../items/itemBackstagePass';
import updateDefaultItem from '../items/itemDefault';
import sulfuras from '../items/itemSulfuras';

const updateActions = [agedBrie, backstagePass, sulfuras];

export default item => {
	const updateAction = updateActions.find(update =>
		update.isCorrectUpdateAction(item)
	);

	if (updateAction) {
		updateAction.update(item);
	} else updateDefaultItem(item);
};
