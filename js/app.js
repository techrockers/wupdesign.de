require("../styles/style.scss");

const token = '6315711819.3bf767f.127684b13f6d4d4cbdf72a78b1f7d97c';
const url = 'https://api.instagram.com/v1/users/self/media/recent?access_token={token}';

const insta = fetch(url.replace('{token}', token))
    .then(resp => resp.json())
    .then(json => showInstaImages(json));

function showInstaImages(json) {
    console.log('data', json);

    const data = json.data;
    const $container = document.querySelector('.insta');

    for (let i=0; i < data.length; i+=1) {
        const date = data[i];

        const 
            card = document.createElement('div')
            inner = document.createElement('div'),
            front = document.createElement('div'),
            back = document.createElement('div');
            picture = document.createElement('picture');
            source = document.createElement('source');
            img = document.createElement('img');

        card.className = "col-xs-4 img-responsive card";
        inner.className = "card__container";
        front.className = "front";
        back.className = "back";

        back.appendChild(document.createTextNode(date.caption.text));

        source.srcset = date.images.standard_resolution.url;
        source.media = '(min-width: 769px)';

        img.src =  date.images.low_resolution.url;

        picture.appendChild(source)
        picture.appendChild(img);
        front.appendChild(picture);
        inner.appendChild(front)
        inner.appendChild(back);
        card.appendChild(inner);
        
        $container.appendChild(card);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Hier!");
});