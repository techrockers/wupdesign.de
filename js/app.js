require("../styles/style.scss");

const Instafeed = require("../node_modules/instafeed.js/instafeed.js");

const feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    clientId: 'YOUR_CLIENT_ID'
});
