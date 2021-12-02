/**
 * Passing data to functions with paramaters via arguments
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 * 
 * List of ISO language code:
 * @link http://lingoes.net/en/translator/langcode.htm
 * 
 * 
 * Country currency codes
 * @link https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html
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