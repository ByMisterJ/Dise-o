function getGet(a){
    for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){
        var e=c[d].split("=");if(e[0]==a)return e[1]
    }
};ƒ=eval;function getBiskuit(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){var e=c[d].trim();if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""}