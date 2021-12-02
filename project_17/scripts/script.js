/**
 * Callback functions
 * @link hhttps://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value)
    return formattedValue
}

const tipCalculator = function(sum, percentage, locale, currency) {
    let tip = sum * (percentage / 100)
    let total = sum + tip
    console.log(`
    Sum before tip: ${formatter(locale, currency, sum)}
    Tip percentage: ${percentage}
    Tip: ${formatter(locale, currency, tip)}
    Total: ${formatter(locale, currency, total)}
    `)


}
tipCalculator(34.50, 10, 'en-US', 'USD')