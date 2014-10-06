doctored.element_config = {
    "Abreviation": {
        "kind": "block",
        "styles": {
            "color": "#000",
            "background-color": "#ccc",
            "fontFamily": "sans-serif",
            "fontSize": "16px",
            "fontWeight": "bold",
            "fontStyle": "normal"
        }
    },
    "Titre": {
        "kind": "block",
        "styles": {
            "fontSize": "26px",
            "fontWeight": "bold"
        }
    },
    "Professeur": {
        "kind": "container",
        "styles": {
            "background-color": "#ffe"
        }
    },
    "Nom": {
        "kind": "block",
        "styles": {
            "text-transform": "Uppercase"
        }
    }
};


document.addEventListener('document:loaded', function() {
    for (var key in doctored.element_config) {
       if (doctored.element_config.hasOwnProperty(key)) {
        var selector = "*[data-element="+key+"]";
        var els = document.querySelectorAll(selector);
            for (var style in doctored.element_config[key].styles) {
                for(var i=0; i<els.length; i++) {
                    els[i].style[style] = doctored.element_config[key].styles[style];
                }
            }
       }
    }
});
