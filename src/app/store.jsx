// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
import { inventoryReducer } from '../features/inventory/inventorySlice.jsx';
import { cartReducer } from '../features/cart/cartSlice.jsx';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.jsx';
import { searchTermReducer } from '../features/searchTerm/seacrhTermSlice.jsx';
// Create and export the store here.
export const store = createStore(combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer
}))