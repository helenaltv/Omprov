// 3. Filtrera produkter efter prisintervall (3p)
// Skriv en funktion filterProductsByPriceRange som tar en array
//  av produkter som input samt två siffror, minPrice och maxPrice,
// och returnerar en ny array med produkter som har ett pris inom det
// givna intervallet (inklusive gränserna).

// Exempel: Om input-arrayen är som nedan och minPrice = 80 och maxPrice = 150,
// så ska din funktion returnera produkterna med priserna 100 och 120.

const products = [
  { name: "Headphones", brand: "Sony", price: 80 },
  { name: "Speakers", brand: "Bose", price: 100 },
  { name: "Smartwatch", brand: "Samsung", price: 150 },
  { name: "Tablet", brand: "Apple", price: 120 },
];

function filterProductsByPriceRange(productList, minPrice, maxPrice) {
  return productList.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
}

console.log(filterProductsByPriceRange(products, 110, 160));
// Ska logga:
// [
//   { name: "Smartwatch", brand: "Samsung", price: 150 },
//   { name: "Tablet", brand: "Apple", price: 120 },
// ]
