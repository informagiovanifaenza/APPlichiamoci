var luogo = window.localStorage.getItem("luogo");
var tipologia = window.localStorage.getItem("tipologia");
var emozioni = window.localStorage.getItem("emozioni");
var indirizzo = window.localStorage.getItem("indirizzo");
var latitudine = window.localStorage.getItem("latitudine");
var longitudine = window.localStorage.getItem("longitudine");
var descrizione = window.localStorage.getItem("descrizione");
var curiosita = window.localStorage.getItem("curiosita");
var daProvare = window.localStorage.getItem("deviProvare");
var link = window.localStorage.getItem("link");
var url_img = window.localStorage.getItem("url_img");

var coord = new URL("http://maps.google.com/")
coord.searchParams.append("ie", "UTF8");
coord.searchParams.append("hq", "");
coord.searchParams.append("ll", latitudine+","+longitudine);


/*
window.localStorage.removeItem("luogo");
window.localStorage.removeItem("tipologia");
window.localStorage.removeItem("emozioni");
window.localStorage.removeItem("indirizzo");
window.localStorage.removeItem("latitudine");
window.localStorage.removeItem("longitudine");
window.localStorage.removeItem("curiosita");
window.localStorage.removeItem("deviProvare");
window.localStorage.removeItem("link");
window.localStorage.removeItem("url_img");
*/

document.getElementById("luogo").textContent = luogo;
document.getElementById("tipologia").textContent = tipologia;
document.getElementById("emozioni").textContent = emozioni;
document.getElementById("indirizzo").textContent = indirizzo;
/*document.getElementById("latitudine").textContent = latitudine;
document.getElementById("longitudine").textContent = longitudine;*/
document.getElementById("posizione").href = coord;
document.getElementById("posizione").textContent = longitudine+","+latitudine;
document.getElementById("descrizione").textContent = descrizione;
document.getElementById("curiosita").textContent = curiosita;
document.getElementById("daProvare").textContent = daProvare;
document.getElementById("link").href = link;
document.getElementById("link").textContent = link;
if (!(url_img === "")) {
    document.getElementById("img_info").style.display = "block";
    document.getElementById("img_info").src = url_img;
}