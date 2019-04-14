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

    if (found) {
        chrome.storage.sync.get(["check"], function (data) {
            if (data.check) {
                if (confirm(`That's a lot of cash!!!  
                Are you broke, get a personal loan!`)) {
                    const message = {
                        text: "detected",
                        type: "detector"
                    }
                    chrome.runtime.sendMessage(message, function (response) {});
                }
            }
        });
    }
});