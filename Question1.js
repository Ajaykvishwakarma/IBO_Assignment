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

getUniqueProductCount (listOfProducts)

function getUniqueProductCount (listOfProducts) {

  let obj = {}

  listOfProducts.map((el) => {
    if(obj[el.productName] == undefined) {
      obj[el.productName] = 1;
    } else {
      obj[el.productName]++
    }
  })

   console.log(obj)

}