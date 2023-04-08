import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
  const loaderProducts = await fetch('products.json');
  const products = await loaderProducts.json();
  
  
  const storedCart = getShoppingCart();
  const savedCart = [];
  
  for (const id in storedCart) {
    // if (storedCart.hasOwnProperty(id)) {
      const addedProduct = products.find((pd) => pd.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = parseInt(quantity);
        savedCart.push(addedProduct);
      }
    // }
    
  }
  return savedCart;
};

export default cartProductsLoader;
