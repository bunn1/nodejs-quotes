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
                    console.log(quoteViews.quoteNotSaved);
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
    }
}