require("../styles/style.scss");

import 'whatwg-fetch';
import { 
    showInstaImages
} from "./functions";

var token = '6315711819.3bf767f.127684b13f6d4d4cbdf72a78b1f7d97c';
var url = 'https://api.instagram.com/v1/users/self/media/recent?access_token={token}';

var insta = fetch(url.replace('{token}', token))
    .then(function(resp) {
        return resp.json();
    })
    .then(function(json) { 
        showInstaImages(json) 
    });