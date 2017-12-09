var config = {
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
    var $container = document.querySelector(config.classes.container);
    var cards = $container.querySelectorAll(config.classes.card);

    for(var i=0; i < cards.length; i+=1) {
        var card = cards[i];
        
        card.addEventListener('click', function(e) {
            var classes = this.className.split(" ");
            var index = classes.indexOf(config.status.flipped);
            
            if(index >= 0) {
                classes.splice(index, 1);
            } else {
                classes.push(config.status.flipped);
            }
            this.className = classes.join(" ");
        });
    }
}

export function showInstaImages(json) {
    var data = json.data;
    var $container = document.querySelector(config.classes.container);

    for (var i=0; i < data.length; i+=1) {
        var 
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