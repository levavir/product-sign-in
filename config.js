/* config.js: sign-in page settings for the new student launcher (product.aethos-ai.com). Nothing here is a secret.
clientId: the Google Cloud client id (same value as AUTH_CLIENT_ID in the app vault).
appUrls: allowed app addresses, each ending with /exec. The first one is the default.
The app that opens this page passes its own address in the app parameter; an address not in the list is rejected and the default is used. */
var SIGNIN_CONFIG = {
  clientId: '303839184577-ub974op8ki4qa3e5uhdr90ns4jhgg57b.apps.googleusercontent.com',
  appUrls: [
    'https://script.google.com/macros/s/AKfycbz9CK-ZaZuV_j9p6z2vmEI5AVRFiCMLhY3k9zmLKSYWB4pK1zUkcF2SRrr9myA3qeZw0w/exec',
    'https://script.google.com/macros/s/AKfycbwpRbasOjXfWuDobnwwFVstyl8sSXCJb-IbE2A3kXGYW0eJ9LyTDLlfDTsTNm3eF4qjvw/exec'
    ]
};
