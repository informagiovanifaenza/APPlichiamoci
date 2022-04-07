var mapArray;

readFromFile();

var mymap = L.map('Map').setView([44.285268464566485, 11.882925129689992], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

function readFromFile() {
    d3.tsv("https://www.informagiovanifaenza.it/applichiamoci_map_points/mappa.tsv", function(d) {
        mapArray = d;
    });
}

function mostraTipologia(tipologia) {
    mymap.remove();
    mymap = null;
    mymap = L.map('Map').setView([44.285268464566485, 11.882925129689992], 13);
    var cluster = L.markerClusterGroup();
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
    var toAddToList = [];
    i = 0;
    j = 0; // conta il numero di elementi della tipologia. Inizialmente è a 0.
    while (i < mapArray.length) {
        if (mapArray[i].CODICE.includes(tipologia)) {
            var lat = mapArray[i].LATITUDINE;
            var lon = mapArray[i].LONGITUDINE;
            var luogo = mapArray[i].LUOGO;
            if (tipologia === '') {
                var codice = mapArray[i].CODICE;
            } else {
                var codice = tipologia;
            }
            try {
                j++;
                var marker = createMarker(lat, lon, luogo, j, codice);
                cluster.addLayer(marker);
            } catch (e) {
                console.error(e.message);
            }
            toAddToList.push(mapArray[i]);
        }
        i++;
    }
    mymap.addLayer(cluster);
    makeUL(toAddToList, tipologia);
}

function createMarker(lat, lon, luogo, numero, tipologia) {
    tipologia = tipologia.charAt(0);
    switch (tipologia) {
        case 'B':
            var ColorIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            break;
        case 'C':
            var ColorIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            break;
        case 'S':
            var ColorIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            break;
        case 'G':
            var ColorIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            break;
        case 'U':
            var ColorIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            break;


        default:
            var ColorIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
    }
    return L.marker([lat, lon], { icon: ColorIcon }).bindPopup("<b>" + numero + ": " + luogo + "</b>");
}

function makeUL(array, tipologia) {

    var pageBody = document.getElementById("mapPage");

    // Create the list element:
    try {
        pageBody.removeChild(document.getElementById("list"));
    } catch (e) {}

    var list = document.createElement('ol');

    list.id = "list";

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        var link = document.createElement('button');

        // prova
        // array[i].IMMAGINE = "img/carlo.png";

        var img = "";

        if (!(typeof array[i].IMMAGINE === "undefined")) {
            img = array[i].IMMAGINE;
        }

        link.setAttribute("onclick", 'newPage("' + array[i].LUOGO + '", "' + array[i].TIPOLOGIA + '", "' + array[i].EMOZIONI + '", "' + array[i].INDIRIZZO + '", "' + array[i].LATITUDINE + '", "' + array[i].LONGITUDINE + '", "' + array[i].DESCRIZIONE + '", "' + array[i].CURIOSITA + '", "' + array[i].DEVIPROVARE + '", "' + array[i].LINK + '", "' + img + '");');

        link.class = "listElement";

        link.innerHTML = array[i].LUOGO;

        if (tipologia === '') {
            var codice = mapArray[i].CODICE;
        } else {
            var codice = tipologia;
        }

        switch (codice.charAt(0)) {
            case 'B':
                link.style.backgroundColor = "#e40f76";
                break;
            case 'C':
                link.style.backgroundColor = "#ffc70a";
                break;
            case 'S':
                link.style.backgroundColor = "#2085b1";
                break;
            case 'G':
                link.style.backgroundColor = "#68830e";
                break;
            case 'U':
                link.style.backgroundColor = "#94271f";
                break;
            default:
                link.style.backgroundColor = "#b26c01";
        }

        link.style.color = "#FFFFFF";
        link.style.fontWeight = "bold";
        link.style.padding = "20px";


        item.appendChild(link);


        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    pageBody.appendChild(list);
}

function newPage(luogo, tipologia, emozioni, indirizzo, latitudine, longitudine, descrizione, curiosita, deviProvare, link, url_img) {

    window.localStorage.removeItem("luogo");
    window.localStorage.removeItem("tipologia");
    window.localStorage.removeItem("emozioni");
    window.localStorage.removeItem("indirizzo");
    window.localStorage.removeItem("latitudine");
    window.localStorage.removeItem("longitudine");
    window.localStorage.removeItem("descrizione");
    window.localStorage.removeItem("curiosita");
    window.localStorage.removeItem("deviProvare");
    window.localStorage.removeItem("link");
    window.localStorage.removeItem("url_img");

    window.localStorage.setItem("luogo", luogo);
    window.localStorage.setItem("tipologia", tipologia);
    window.localStorage.setItem("emozioni", emozioni);
    window.localStorage.setItem("indirizzo", indirizzo);
    window.localStorage.setItem("latitudine", latitudine);
    window.localStorage.setItem("longitudine", longitudine);
    window.localStorage.setItem("descrizione", descrizione);
    window.localStorage.setItem("curiosita", curiosita);
    window.localStorage.setItem("deviProvare", deviProvare);
    window.localStorage.setItem("link", link);
    window.localStorage.setItem("url_img", url_img);

    window.open("dettagli.html", "_self");
}