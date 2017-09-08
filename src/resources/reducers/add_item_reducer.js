import { ADD_ITEM } from '../actions/add_item'
//this is only sketch of this reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        item: [
          equipment,
          {
            brand: action.text.brand,
            model:action.text.model,
            serial: action.text.serial
          }
        ]
      })
    default:
      return state
  }
}
