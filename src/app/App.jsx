import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.jsx';
import { SearchTerm } from '../features/searchTerm/SearchTerm.jsx';
// Render the Cart component below <Inventory />
import '../App.css'

export function App(props) {
  const { state, dispatch } = props;

  const visibleInventory = getFilteredItems(state.inventory, state.searchTerm);

  return (
    <>
      <div>
        <CurrencyFilter
          currencyFilter={state.currencyFilter}
          dispatch={dispatch}
        />

        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />

        <Inventory
          inventory={visibleInventory}
          currencyFilter={state.currencyFilter}
          dispatch={dispatch}
        />

        <Cart
          cart={state.cart}
          currencyFilter={state.currencyFilter}
          dispatch={dispatch}
        />
      </div>
    </>
  )
}

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}