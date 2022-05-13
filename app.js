import quoteController from "./controllers/quoteController.js";
import quoteModel from "./models/quoteModel.js";


// Varibles that captures the intent of the user
const currentCommand = process.argv[2];
const currentQuoteId = process.argv[3];

// Our list of supported commands
const supportedCommands = ['new', 'get', 'remove', 'search', 'help'];

// check if currentCommand exists AND is not included in `supportedCommands`
if (currentCommand && !supportedCommands.includes(currentCommand)) {
    console.log("Here should be a view presented");
    process.exit(1);
}

// TODO: make sure if running `remove` currentQuoteId is defined!

// Router: Redirects to specific controller method based on currentCommand
switch (currentCommand) {
    case 'new':
        // Method should create a new quote
        quoteController.createQuote();
        break;
    case 'get':
        // Method should get all quotes
        quoteController.getAllQuotes();
        break;
    case 'remove':
        // Method should remove a quote given id
      
        quoteController.removeQuote(currentQuoteId);
        break;
    case 'search':
        // Method should ask for search string then return results
        quoteController.searchQuote();
        break;
    case 'help':
        quoteController.printUsage();
        break;
    default:
        quoteController.printUsage();
        break;
}


// console.log("----- TESTING ------")
// console.log(quoteModel.searchQuotes("hit me baby"));
