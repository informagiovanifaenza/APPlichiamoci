# APPlichiamoci

App di [Informagiovani Romagna Faentina](https://www.informagiovanifaenza.it/) basata su [Cordova](https://cordova.apache.org/), sviluppata dagli studenti di ITCG Oriani e ITIP Bucci di Faenza, con la collaborazione di [Cimatti Consulting](https://www.cimatti.it/)

## Inizializzazione

```shell
cordova prepare
```

## Aggiornamento/installazione piattaforme

```shell
cordova platform remove browser
cordova platform add browser

cordova platform remove android
cordova platform add android

cordova platform remove electron
cordova platform add electron
```

## Esecuzione

```shell
cordova run browser

cordova run android --emulator

cordova run android --device

cordova run electron
```

## Ripristino

Le cartelle `node_modules`, `platforms` e `plugins`, e il file `package-lock.json` possono essere rimossi, e verranno rigenerati eseguendo il comando `cordova prepare`
