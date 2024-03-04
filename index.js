export function getParameterValueByName(name) {
   name = name.replace(/[\[\]]/g, '\\$&');
   var params = location.search.substring(1).split('&');
   for (var i = 0; i < params.length; i++) {
       var pair = params[i].split('=');
       if (pair[0] === name) {
           return decodeURIComponent(pair[1].replace(/\+/g, ' '));
       }
   }
   return null;
}
