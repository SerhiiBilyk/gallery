const ADD_TO_CART = 'ADD_TO_CART';
export function addToCart(product,quantity,unitCost){
  console.log('dispatched')
  return{
    type:ADD_TO_CART,
    payload:{product,quantity,unitCost}
  }
}
