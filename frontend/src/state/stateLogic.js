const selectedItem = (items, selID) => items?.length
	? items?.find(acct => acct._id === selID) : {};

const stateLogic = {
    getSelectedItem: (items, selID) => {
        if(!items?.length) return null;
        return selID ? selectedItem(items, selID) : items[0]
    }
}

export default stateLogic
