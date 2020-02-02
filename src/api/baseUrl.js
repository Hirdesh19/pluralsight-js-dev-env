// export default function(){
//   const inDevelopment =window.location.hostname==='localhost';
//   return inDevelopment?'http://localhost:2201/':'/';
// }

export default function(){
  return getQueryStringParameterByName('useMockApi')? 'http://localhost:2201/':'/';

}
function getQueryStringParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
     results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
     return results;
}
