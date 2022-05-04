import chalk from 'chalk';

export default {
    usage: `
Welcome to Quotes app.
Save your favorite quotes here.

Usage:
    new:        used to create new quote
    get:        used to get all quotes
    remove <id>: used to remove quote given id
    search:     used to search quote by text or author
    help:       used to display instructions
     `,
     errorInvalidId: chalk.red("Error, Invalid id specified"),
     errorQuoteNotRemoved: chalk.red("Error, quote was not removed successfully"),
     errorQuoteNotSaved: chalk.red("Quote has not been saved successfully"),
     matchesFound: (serachStr) => chalk.green(`Matches found for ${serachStr}: `),
     noSearchMatches: (serachStr) => chalk.blue(`No matches found for ${serachStr}`),
     questionQuote: chalk.blue(`What is the quote? `),
     questionAuthor: chalk.blue(`What is the author? `),
     questionSearchString: chalk.blue(`What do you want to search for? `),
     quoteSaved: chalk.green("Quote has been saved"),
     quoteRemoved: (quote) => chalk.green(`'${quote.quote}' by ${quote.author} has been removed`),
     allQuotes: (quotes) => quotes.map(quote => `id: ${chalk.blue(quote.id)} - ${quote.author}: '${chalk.italic(quote.quote)}'`).join('\n')
}