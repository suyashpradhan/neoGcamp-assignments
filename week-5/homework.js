const fruitBasket = [
  { id: 1, name: "mango", quantity: 5 },
  { id: 2, name: "apple", quantity: 4 },
  { id: 3, name: "banana", quantity: 12 },
  { id: 4, name: "strawberry", quantity: 4 }, // aah! ameeri!
];

// ! Write a function updateBasketQuantity() which takes the fruitBasket array, an id, and the inc/dec flag. Return a new basket with the updated quantity

const updateBasketQuantity = (fruitsBasketArr, index, flag) => {
  if (flag == true) {
    return fruitsBasketArr.map((item, idx) => {
      if (idx == index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  }
};

console.log(updateBasketQuantity(fruitBasket, "2", true));

// ! Write a function `removeFromBasket()` which takes the fruitBasket array, an id, and the inc/dec flag. Return a new basket with the updated basket.

const removeFromBasket = (fruitsBasketArr, index, flag) => {
  if (flag == true) {
    /*  return fruitsBasketArr.filter((item, idx) => {
      if (idx == index) {
        return {
          ...item,
        };
      }
    }); */
    return fruitsBasketArr.map((item, idx) => {
      if (idx == index) {
        return {
          ...item,
        };
      }
    });
  }
};

console.log(removeFromBasket(fruitBasket, "2", true));
