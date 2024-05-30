let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i2 = 0; i2 < products.length; i2++) {
    if (products[i2].price == 900)
        break;
}

// show the products
console.log(products[i2]);
