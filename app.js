import quoteController from "./controllers/quoteController.js";

import express from "express";

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Tell Express App to parse form-data in body
app.use(express.json()); // Tell Express App to parse json in body

app.get('/', quoteController.getAllQuotes);
app.get('/quotes', quoteController.getAllQuotes);

app.get('/search', quoteController.searchQuote);
app.post('/quotes', quoteController.createQuote);
app.put('/quotes/:id', quoteController.updateQuote);


app.delete('/quotes/:id', quoteController.removeQuote);

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
})

// // Varibles that captures the intent of the user
// const currentCommand = process.argv[2];
// const currentQuoteId = process.argv[3];

// // Our list of supported commands
// const supportedCommands = ['new', 'get', 'remove', 'search', 'help'];

// // check if currentCommand exists AND is not included in `supportedCommands`
// if (currentCommand && !supportedCommands.includes(currentCommand)) {
//     console.log("Here should be a view presented");
//     process.exit(1);
// }

// // TODO: make sure if running `remove` currentQuoteId is defined!

// // Router: Redirects to specific controller method based on currentCommand
// switch (currentCommand) {
//     case 'new':
//         // Method should create a new quote
//         quoteController.createQuote();
//         break;
//     case 'get':
//         // Method should get all quotes
//         quoteController.getAllQuotes();
//         break;
//     case 'remove':
//         // Method should remove a quote given id
//         quoteController.removeQuote(currentQuoteId);
//         break;
//     case 'search':
//         // Method should ask for search string then return results
//         quoteController.searchQuote();
//         break;
//     case 'help':
//         quoteController.printUsage();
//         break;
//     default:
//         quoteController.printUsage();
//         break;
// }


// console.log("----- TESTING ------")
// console.log(quoteModel.searchQuotes("hit me baby"));
