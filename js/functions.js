const config = {
    classes: {
        card: ".card",
        img: "img",
        back: ".card__back",
        container: ".insta-cards",
        template: ".card-template"
    }, 
    status: {
        flipped: "flipped"
    }
}

function setFlipEffectHandler() {
    const $container = document.querySelector(config.classes.container);
    const cards = $container.querySelectorAll(config.classes.card);

    for(let i=0; i < cards.length; i+=1) {
        const card = cards[i];
        const classes = card.className.split(" ");

        card.addEventListener('click', function(e) {
            const el = e.target;
            const index = classes.indexOf(config.status.flipped);
            
            if(index >= 0) {
                classes.splice(index, 1);
            } else {
                classes.push(config.status.flipped);
            }
            card.className = classes.join(" ");
        });
    }
}

export function showInstaImages(json) {
    const data = json.data;
    const $container = document.querySelector(config.classes.container);

    for (let i=0; i < data.length; i+=1) {
        const 
            date = data[i],
            card = document.createElement('div'),
            text = document.createElement('span'),
            template = document.querySelector(config.classes.template).innerHTML;
        
        text.innerHTML = date.caption.text.replace(/(?:\r\n|\r|\n)/g, '<br />');
        
        card.insertAdjacentHTML('beforeend', template);
        card.querySelector(config.classes.back).appendChild(text);
        card.querySelector("img").src = date.images.low_resolution.url;
        card.querySelector("source").srcset = date.images.standard_resolution.url;
        
        $container.appendChild(card.querySelector(config.classes.card));
    }

    setFlipEffectHandler();
}