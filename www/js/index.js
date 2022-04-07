/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


function interazione_menu() {

    (".cross").hide(); //Cross è la croce di chiusura del menù
    (".menu").hide(); //Menù è una classe dei link del menù
    (".hamburger").click(function() { //Bottone che cliccandolo mostra il menù
        (".menu").slideToggle("fast", function() { //Funzione slide del menù
            (".hamburger").hide(); //Nasconde "l'icona" dell'hamburger
            (".cross").show(); //Mostra la croce per chiudere
        });
    });
    //Simile per chiudere il menu e far riapparire l'hamburger
    (".cross").click(function() {
        (".menu").slideToggle("fast", function() {
            (".cross").hide();
            (".hamburger").show();
        });
    });
}



function rindirzzamento_pagina(link) //Da associare ad un bottone entrambe le funzioni, cambiare il percorso del file
{

    location.replace("link");

}

function rindirzzamento_al_menu() {

    location.replace("./index.html");

}

//--------------------------------------------------------------------------

/* vecchia versione
function showMenu(elem) {
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}
*/

// modifica Bucci
function showMenu(elem) {
    if (elem.style.display === "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}