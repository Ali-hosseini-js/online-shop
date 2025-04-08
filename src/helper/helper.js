const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  const discountCounter = products
    .reduce(
      (discountCounter, product) =>
        discountCounter + product.discountPrice * product.quantity,
      0
    )
    .toFixed(2);

  return { itemsCounter, total, discountCounter };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export { sumProducts, productQuantity };
