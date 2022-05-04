import quoteController from "./controllers/quoteController.js";


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
        // ------- BEGIN HERE ----------
        // TODO: Access a method from quotes controller
        // Method should create a new quote
        console.log('Not implemented yet');
        break;
    case 'get':
        // TODO: Access a method from quotes controller
        // Method should get all quotes
        console.log('Not implemented yet');
        break;
    case 'remove':
        // TODO: Access a method from quotes controller
        // Method should remove a quote given id
        console.log('Not implemented yet');
        break;
    case 'search':
        // TODO: Access a method from quotes controller
        // Method should ask for search string then return results
        console.log('Not implemented yet');
        break;
    case 'help':
        quoteController.printUsage();
        break;
    default:
        quoteController.printUsage();
        break;
}