require("../styles/style.scss");

import { 
    showInstaImages
} from "./functions";

const token = '6315711819.3bf767f.127684b13f6d4d4cbdf72a78b1f7d97c';
const url = 'https://api.instagram.com/v1/users/self/media/recent?access_token={token}';

const insta = fetch(url.replace('{token}', token))
    .then(resp => resp.json())
    .then(json => showInstaImages(json));
