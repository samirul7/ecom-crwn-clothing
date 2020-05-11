import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, { quantity }) => accumulatedQuantity + quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cardItems) =>
  cardItems.reduce(
    (accumulatedPrice, { quantity, price }) =>
      accumulatedPrice + quantity * price,
    0
  )
);
