import quoteViews from "../views/quoteViews.js";
import quoteModel from "../models/quoteModel.js";

export default {
    printUsage: function() {
        console.log(quoteViews.usage);
    },
    createQuote: (req, res) => {
        const quote = req.body.quote;
        const author = req.body.author;
        const date = req.body.date;

        console.log('MODEL: TRYING TO CREATE QUOTE', quote, author, date);
        // Controller Method for creating new quote
        const isOK = quoteModel.addQuote(quote, author, date);

        // Check if something went wrong
        if (!isOK) {
            res.render("error", { message: "Could not save quote" });
            return;
        }

        res.render("quotes", { quotes: quoteModel.getQuotes() });
    },
    getAllQuotes: (req, res) => {
        const startDate = req.query.start;
        const endDate = req.query.end;

        console.log("getAllQuotes Was called with query", req.query)
        res.render("quotes", { quotes: quoteModel.getQuotes(startDate, endDate) });
    },
    removeQuote: (req, res) => {
        const id = Number(req.params.id);

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
        res.redirect('/');
    },
    updateQuote: (req, res) => {
        const id = Number(req.params.id);
        const quote = req.body.quote;
        const date = req.body.date;
        const author = req.body.author;
        
        if (id < 0) {
            console.log(quoteViews.errorInvalidId);
            return;
        }

        if (!quote || !author || !date) {
            console.log("Quote, Author or is not defined", quote, author, date);
            return;
        }

        const isOK = quoteModel.updateQuote(id, quote, author, date);

        if (!isOK) {
            console.log("Quote not Updated");
            return;
        }

        console.log("Quote Updated");

        res.redirect('/');
    },
    searchQuote: (req, res) => {
        const searchStr = req.query.searchStr;
        
        const matches = quoteModel.searchQuotes(searchStr);

        // TODO show different view if no matches found
        res.render("quotes", { quotes: matches });
    }
    
}