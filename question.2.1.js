// 2 Räkna ord (3p)
// Skriv en funktion word count som tar en mening
// och returnerar antal ord som en siffra.
// Ledtråd: Använd sträng-funktionen split.

function wordCount(sentence) {
  var words = sentence.split(/\s+/);
  return words.length;
}

console.log(wordCount("hur mår du?")); //ska logga 3
