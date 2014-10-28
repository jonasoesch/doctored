window.doctored.behaviours = {
    style_elements: function() {
    var stylesheet = stylesheet || "doctored/schemas/UniteEnseignement/styles.css";

    var style_contents = load_stylesheet(stylesheet); 
    style_contents = style_contents.replace(/\n/gm, "").replace(/((^|[}])\s*)([\w\W_-]+?)(\s*{)/gm, "$2 .doctored .doctored-block[data-element=$3], .style_select .style[data-element=$3]$4", "m");
    add_styles_to_document(style_contents);

    function load_stylesheet(stylesheet) {
         var xhReq = new XMLHttpRequest();
         xhReq.open("GET", stylesheet, false);
         xhReq.send(null);
         return xhReq.responseText;
    }

    function add_styles_to_document(styles) {
        head = document.head || document.getElementsByTagName('head')[0];
        style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = styles;
        } else {
          style.appendChild(document.createTextNode(styles));
        }

        head.appendChild(style);
    }
}
}
