import readline from 'readline';
import express from "express";
import quoteViews from "../views/quoteViews.js";
import quoteModel from "../models/quoteModel.js";

export default {
    printUsage: function() {
        console.log(quoteViews.usage);
    },
    createQuote: (req, res) => {
        const quote = req.body.quote;
        const author = req.body.author;

        console.log(quote, author);
        // Controller Method for creating new quote
        const isOK = quoteModel.addQuote(quote, author);

        // Check if something went wrong
        if (!isOK) {
            res.render("error", { message: "Could not save quote" });
            return;
        }

        res.render("quotes", { quotes: quoteModel.getQuotes() });
    },
    getAllQuotes: (req, res) => {
        res.render("quotes", { quotes: quoteModel.getQuotes() });
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
    searchQuote: (req, res) => {
        const searchStr = req.query.searchStr;
        
        const matches = quoteModel.searchQuotes(searchStr);

        // TODO show different view if no matches found
        res.render("quotes", { quotes: matches });
    }
    // searchQuote: function() {
    //      // Start a read line interface to ask user for parameters
    //      const rl = readline.createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //     });

    //     rl.question(quoteViews.questionSearchString, (searchString) => {
    //         const matches = quoteModel.searchQuotes(searchString);

    //         if (matches.length <= 0) {
    //             console.log(quoteViews.noSearchMatches(searchString));
    //             rl.close();
    //             return;
    //         }

    //         const view = quoteViews.allQuotes(matches);

    //         console.log(quoteViews.matchesFound(searchString));
    //         console.log(view);
    //         rl.close();
    //     })
        
    // }
}