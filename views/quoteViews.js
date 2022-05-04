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
     questionQuote: chalk.blue(`What is the quote? `),
     questionAuthor: chalk.blue(`What is the author? `),
     quoteSaved: chalk.green("Quote has been saved"),
     quoteNotSaved: chalk.red("Quote has not been saved successfully"),
     allQuotes: (quotes) => quotes.map(quote => `${chalk.blue(quote.id)}. ${quote.author}: '${chalk.italic(quote.quote)}'`).join('\n')
}