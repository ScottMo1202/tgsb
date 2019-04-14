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
            'checkout',
            'credit card',
            'creditcard',
            'billing',
            'place order',
            'pay',
            'visa/mastercard',
            'visa / mastercard',
            'visa mastercard',
            'card number',
            'debit',
        ]
    };

    let checkers = [];
    Object.keys(KEYWORDS).forEach(keywords => {
        checkers = checkers.concat(KEYWORDS[keywords]);
    });
    const found = checkers.any(keyword => 
        $(`*:Contains(${keyword})`).length
    );
    console.log(found);
});
