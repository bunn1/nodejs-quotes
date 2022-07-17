import readline from 'readline';
import quoteViews from "../views/quoteViews.js";
import quoteModel from "../models/quoteModel.js";

export default {
    printUsage: function() {
        console.log(quoteViews.usage);
    },
    createQuote: function () {
        // Controller Method for creating new quote

        // Start a read line interface to ask user for parameters
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(quoteViews.questionQuote, (quoteAnswer) => {
            rl.question(quoteViews.questionAuthor, (authorAnswer) => {
                // Save quote via quoteModel
                const isOK = quoteModel.addQuote(quoteAnswer, authorAnswer);

                // Check if something went wrong
                if (!isOK) {
                    console.log(quoteViews.errorQuoteNotSaved);
                    return;
                }

                // Notify user
                console.log(quoteViews.quoteSaved);

                // Close readline interface
                rl.close();
            })
        })
    },
    getAllQuotes: function () {
        const allQuotes = quoteModel.getQuotes();

        const view = quoteViews.allQuotes(allQuotes);

        console.log(view);
    },
    removeQuote: function(idStr) {
        const id = Number(idStr);

        if (id < 0) {
            console.log(quoteViews.errorInvalidId);
            return;
        }
        const quoteToBeRemoved = quoteModel.getQuote(id);
        const isOK = quoteModel.removeQuote(quoteToBeRemoved.id);

        if (!isOK) {
            console.log(quoteViews.errorQuoteNotRemoved);
            return;
        }

        console.log(quoteViews.quoteRemoved(quoteToBeRemoved));
    },
    searchQuote: function() {
         // Start a read line interface to ask user for parameters
         const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(quoteViews.questionSearchString, (searchString) => {
            const matches = quoteModel.searchQuotes(searchString);

            if (matches.length <= 0) {
                console.log(quoteViews.noSearchMatches(searchString));
                rl.close();
                return;
            }

            const view = quoteViews.allQuotes(matches);

            console.log(quoteViews.matchesFound(searchString));
            console.log(view);
            rl.close();
        })
        
    }
}