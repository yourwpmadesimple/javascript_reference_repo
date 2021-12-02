/**
 * Passing data to functions with paramaters via arguments
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 * 
 * List of ISO language code:
 * @link http://lingoes.net/en/translator/langcode.htm
 */



const tipCalculator = function(sum, percentage) {
    let tip = sum * (percentage / 100)
    let total = sum + tip
    if (prefix) {
        console.log(`
        Sum before tip: ${currency}${sum.toFixed(2)}
        Tip percentage: ${percentage}%
        Tip: ${currency}${tip.toFixed(2)}
        Total: ${currency}${total.toFixed()}
        `)
    } else {
        console.log(`
        Sum before tip: ${sum.toFixed(2)}${currency}
        Tip percentage: ${percentage}%
        Tip: ${tip.toFixed(2)}${currency}
        Total: ${total.toFixed()}${currency}
`)
    }

}
tipCalculator(34.50, 10)