require("../styles/style.scss");

const token = '6315711819.3bf767f.127684b13f6d4d4cbdf72a78b1f7d97c';
const url = 'https://api.instagram.com/v1/users/self/media/recent?access_token={token}';

const insta = fetch(url.replace('{token}', token))
    .then(resp => resp.json())
    .then(json => showInstaImages(json));


function showInstaImages(json) {
    const data = json.data;
    const $container = document.querySelector('.insta');
    console.log($container);

    for(let i=0; i < data.length; i+=1) {
        const date = data[i];
        const img = document.createElement('img');
        img.src =  date.images.standard_resolution.url;
        img.className = 'col-xs-4 col-sm-4 img-responsive img-1';
        $container.appendChild(img);
    }
}