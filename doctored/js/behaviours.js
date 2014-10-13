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

doctored.element_styles = "doctored/schemas/UniteEnseignement/UE.css";

document.addEventListener('document:loaded', function() {

     var xhReq = new XMLHttpRequest();
     xhReq.open("GET", "doctored/schemas/UniteEnseignement/UE.css", false);
     xhReq.send(null);
     var styleSheet = xhReq.responseText;
       
     styleSheet = styleSheet.replace(/\n/gm, "").replace(/((^|[}])\s*)([\w\W_-]+?)(\s*{)/gm, "$2 .doctored .doctored-block[data-element=$3], .style_select .style[data-element=$3]$4", "m");

    head = document.head || document.getElementsByTagName('head')[0];
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = styleSheet;
} else {
  style.appendChild(document.createTextNode(styleSheet));
}

head.appendChild(style);
    });
