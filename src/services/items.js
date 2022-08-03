import items from '../items.json' assert {type: 'json'}
export const itemsService = {
    getItems
}
function getItems() {
    return items
}