import {restURL} from './constants'

export const listPersone = () => {
    new Promise((resolve, reject) => {
        $.get(restURL+'/persone').done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    }).then((data) => {
        for (let pers of data) {
            $("#main").append(`
            <div class="card">
            <div class="card-header">
              <h1>mi chiamo: ${pers.nome}</h1>
            </div>
            <div class="card-body">
              <b>eta: </b>${pers.codiceFiscale} <b> anni</b>
            </div>
            <div class="card-footer">
              <b>${pers.cognome}</b>
            </div>
          </div>`)
        }
    }).catch((e) => {
        console.log("Promise not ok " + e)
    }).finally(() =>{
        console.log("promise end");
    })
}

export const listVeicoli = () => {
    new Promise((resolve, reject) => {
        $.get(restURL+'/veicoli').done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    }).then((data) => {
        for (let veic of data) {
            $("#veicoli").append(`
            <div class="card">
            <div class="card-header">
              <h1>targa: ${veic.targa}</h1>
            </div>
            <div class="card-body">
              <b>telaio: </b>${veic.telaio} <b></b>
            </div>
            <div class="card-footer">
              <b>conducente: ${veic.conducente}</b>
            </div>
          </div>`)
        }
    }).catch((e) => {
        console.log("Promise not ok " + e)
    }).finally(() =>{
        console.log("promise end");
    })
}

export const addVeicolo = (veicolo) => {
    new Promise((resolve, reject) => {
        $.post(restURL+'/veicoli', veicolo).done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    }).then((data) => {
        console.log("Added :" + data)
    }).catch((e) => {
        console.log("Promise not ok " + e)
    }).finally(() =>{
        console.log("promise end");
    })
}
