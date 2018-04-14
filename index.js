var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random()*100+1);
  var itemObject = {
    itemName: item,
    itemPrice: price
  };
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length < 1) {
    return 'Your shopping cart is empty.';
  }
  var cartString = 'In your cart, you have';
  for (var itemNumber = 0; itemNumber < cart.length; itemNumber++) {
    if (itemNumber === cart.length-1 && itemNumber !== 0) {
      cartString = `${cartString}, and`;
    } else if (itemNumber > 0) {
      cartString = `${cartString},`;
    }
    cartString = `${cartString} ${cart[itemNumber].itemName} at $${cart[itemNumber].itemPrice}`;
  }
  cartString = `${cartString}.`;
  return cartString;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
