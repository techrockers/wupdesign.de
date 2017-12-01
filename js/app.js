require("../styles/style.scss");

const token = '6315711819.3bf767f.127684b13f6d4d4cbdf72a78b1f7d97c';
const url = 'https://api.instagram.com/v1/users/self/media/recent?access_token={token}';

const insta = fetch(url.replace('{token}', token))
    .then(resp => resp.json())
    .then(json => showInstaImages(json));


function showInstaImages(json) {
    const data = json.data;
    const $container = document.querySelector('.insta');

    for (let i=0; i < data.length; i+=1) {
        const date = data[i];

        const card = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');

        const picture = document.createElement('picture');
        const source = document.createElement('source');
        const img = document.createElement('img');

        card.className = "col-xs-4 col-sm-4 card";
        front.className = "front";
        back.className = "back";

        source.srcset = date.images.standard_resolution.url;
        source.media = '(min-width: 769px)';

        img.src =  date.images.low_resolution.url;
        img.className = 'img-responsive';

        picture.appendChild(source);
        picture.appendChild(img);

        front.appendChild(picture);
        card.appendChild(front);
        card.appendChild(back);

        $container.appendChild(card);
    }
}