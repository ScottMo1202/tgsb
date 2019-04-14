KEYWORDS = {
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
}


$(() => {
    let checkers = KEYWORDS.singleWords
        .concat(KEYWORDS.platforms)
        .concat(KEYWORDS.matchers);
    let found = checkers.any((keyword) => { 
        console.log($(`*:Contains(${keyword})`).length)
        console.log(keyword)
        return $(`*:Contains(${keyword})`).length}
    );
    console.log(found);
});
