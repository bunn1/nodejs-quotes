import fs from 'fs';

const dbPath = "./quoteDB.json";

const quoteModel = {
    getQuotes: function() {
        return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    },
    saveQuotes: function(quotes) {
        return fs.writeFileSync(dbPath, JSON.stringify(quotes));
    },
    addQuote: function (quote, author) {
        // Model Method to write new quote into database
        const allQuotes = this.getQuotes();

        // if quotes are not defined we return false
        // to signal that something went wrong
        if (!allQuotes) {
            return false;
        }

        const lastQuote = allQuotes[allQuotes.length - 1];
        const newId = (lastQuote?.id || 0) + 1;
        
        // Create new quote object
        const newQuote = {id: newId, quote, author}
        
        // Update Javascript array with new quote
        allQuotes.push(newQuote);

        // Write new state to DB
        this.saveQuotes(allQuotes);

        return true;
    }
}

export default quoteModel;