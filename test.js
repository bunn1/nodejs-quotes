import quoteModel from "./models/quoteModel.js";


// Testing my model to see if the methods work as expected

console.log(quoteModel.getQuotes());
console.log(quoteModel.updateQuote(3, "Hit me UPDATE one more time" , "Britney UPDATEs"));
console.log(quoteModel.getQuotes());
