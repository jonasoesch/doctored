!function(e){"use strict";importScripts("../libs/xml.js/xmllint.js");var r,t="document.xml",s="schema.rng",n="schema.xsd",l={},a=0,i={log:function(t){r||(r={index:-1}),e.postMessage({type:"debug",index:r.index,message:t})}},u=function g(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),m(r.responseText)},m=function(e){var r="",t,s;for(t=0;t<e.toString().length;t++)s=e.charCodeAt(t),r+=s>127?"&#"+s+";":e.charAt(t);return r},o=function(e,r,t){var s={line_number:void 0,target:void 0,message:void 0,type:void 0};return i.log(e),e.substr(0,r.length+1)===r+":"&&-1!==e.indexOf("Relax-NG validity error")?(s.type="error_line",e=e.substr(r.length+1).trim(),s.line_number=parseInt(e.substr(0,e.indexOf(":")),10)-1,e=e.substr(e.indexOf(":")+1).trim(),"element "===e.substr(0,"element ".length)?(e=e.substr("element ".length).trim(),s.target=e.substr(0,e.indexOf(":"))):i.log("Lint weirdness. Bug in the code? "+e),e=e.substr(e.indexOf(":")+1).trim(),"Relax-NG validity error :"===e.substr(0,"Relax-NG validity error :".length)&&(e=e.substr("Relax-NG validity error :".length).trim()),s.message=e):e.substr(0,r.length+1)===r+" "&&-1!==e.indexOf("fails to validate")?(s.type="error_summary",s.message=e.substr(r.length+1)):e.indexOf("parser error : Start tag expected")>=0?(s.type="error_summary",s.message="Malformed document."):e.indexOf("document.xml validates")>=0?(s.type="valid_document",s.message="Document is valid"):i.log("Unable to parse xmlline_line: "+e),s.line_number&&(a=s.line_number),s},d=function(e){return l[r.schema_url]||(l[r.schema_url]=u(r.schema_url)),l[r.schema_url]};e.onmessage=function(l){var a,u,g,c,x,h,p=[],b="",f;switch(r=l.data,h=r.schema_url.substr(r.schema_url.lastIndexOf(".")),a={xml:m(r.xml),schema:d(r.schema_url)},h){case".xsd":a.arguments=["--noout","--schema",n,t];break;case".rng":a.arguments=["--noout","--relaxng",s,t];break;default:i.log("Error. Schema URL must end in either RNG or XSD.")}for(u=validateXML(a).split("\n"),x=0;x<u.length;x++)g=u[x],g.length&&(c=o(g,t,s),"error_line"===c.type?p.push(c):"error_summary"===c.type?b=c:i.log("New Line.type = "+c.type));e.postMessage({type:"result",index:r.index,result:{error_lines:p,error_summary:b}})}}(self);