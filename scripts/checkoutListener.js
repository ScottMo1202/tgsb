$(() => {
    const KEYWORDS = {
        singleWords: [
            'payment method', 
            'CVV number', 
            'CVV code',
            'card number'
        ],
        platforms: [
            'https://www.paypalobjects.com/',
            'https://checkout.stripe.com/',
        ],
        matchers: [
            //'checkout',
            'credit card',
            'creditcard',
            'billing',
            'place order',
            //'pay',
            'visa/mastercard',
            'visa / mastercard',
            'visa mastercard',
            'card number',
            'debit',
        ]
    };
    let checkers = []
    Object.keys(KEYWORDS).forEach(keywords => {
        checkers = checkers.concat(KEYWORDS[keywords]);
    });
    const found = checkers.any(keyword => 
        $(`*:Contains(${keyword})`).length
    );
    
    // const amounts = [];
    // var pattern = new RegExp(/^\$\d+(,\d{3})*\.?[0-9]?[0-9]?$/);
    // const allCurrOnPage = $(`*:Contains(${'$'})`).filter(
    //     allMatch => {
    //         let t = ''
    //         try {
    //             t = allMatch.text()
    //         } catch {
    //             t = ''
    //         }
    //         console.log(t.match(pattern))
    //         return t.match(pattern)
    //     }
    // );
    // console.log(allCurrOnPage);

    if (found) {
        if (confirm(`That's a lot of cash!!!  
Are you broke, get a personal loan!`)) {
            const message = {
                text: "detected",
                type: "detector"
            }
            chrome.runtime.sendMessage(message, function(response) {
                console.log(response.farewell);
            });
        }
    }
    console.log(found);
});