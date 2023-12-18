// 1.1 Gradering av frukter (3p)
// Skriv en funktion gradeFruit som tar en frukt (som en sträng)
// och returnerar dess kvalitetsbetyg enligt följande kriterier:

// "Utmärkt" om frukten är "Mango" eller "Jordgubbe"
// "Bra" om frukten är "Äpple" eller "Apelsin"
// "Acceptabel" om frukten är "Kiwi" eller "Ananas"
// "Dålig" om frukten är "Citron" eller "Lime"
// "Okänd" för alla andra frukter

function gradeFruit(fruit) {
  switch (fruit.toLowerCase()) {
    case "mango":
    case "jordgubbe":
      return "Utmärkt";
    case "äpple":
    case "apelsin":
      return "Bra";
    case "kiwi":
    case "ananas":
      return "Acceptabel";
    case "citron":
    case "lime":
      return "Dålig";
    default:
      return "Okänd";
  }
}

console.log(gradeFruit("Mango"));
console.log(gradeFruit("Apelsin"));
console.log(gradeFruit("Kiwi"));
console.log(gradeFruit("Lime"));
console.log(gradeFruit("Banan"));
