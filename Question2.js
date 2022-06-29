const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

getUniquePrducts(listOfProducts)

function getUniquePrducts (listOfProducts) {

  let obj = {}

  listOfProducts.map((el) => {
    if(obj[el.productName] == undefined) {
        obj[el.productName] = el;
    } else {
        obj[el.productName].quantity = obj[el.productName].quantity + el.quantity;
    }
})

console.log(Object.values(obj))

}

