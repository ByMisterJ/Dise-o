async function ip() {
    const ip = prompt("introduce tu ip publica")
    const token = '1988be4215e18e'
    const url = `https://ipinfo.io/${ip}?token=${token}`

    const res = await fetch(url)
    const json = await res.json()

    console.log(json)
}

ip()

var idx = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var pwd = ' 8 5 37 7 39 8 2 2 13 1 40 2 9 36 1 2 4 2 12 12';
var tmp = "";

for (var i = 0; i < idx.length; i++) {
    tmp += " " + pwd.charAt(parseInt(idx[i]));
}
console.log(tmp.trim());
if (tmp.trim() == " 8 5 37 7 39 8 2 2 13 1 40 2 9 36 1 2 4 2 12 12") {
    console.log(tmp.trim());
}