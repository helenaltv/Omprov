// 9. Hitta den längsta strängen (3p)
// Skriv en funktion findLongestString som tar en array av
// strängar som input och returnerar den längsta strängen från arrayen.

function findLongestString(strings) {
  let longestString = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  return longestString;
}

console.log(findLongestString(["apple", "banana", "orange", "kiwi"]));
// Ska logga: "banana"
console.log(findLongestString(["dog", "cat", "elephant", "lion"]));
// Ska logga: "elephant"
