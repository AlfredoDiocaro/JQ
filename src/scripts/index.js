import * as CONSTANTS from './constants';

$(document).ready(function () {

    console.log("JQUERY OK");

    var onComplete = function () {
        console.log("CHIAMATA AJAX COMPLETATA");
    }

    var chiamaPersone = function (valore) {
        let ritorno = $.ajax({
            url: CONSTANTS.restURL + '/' + valore,
            method: 'GET',
            accepts: 'application/json',
            complete: onComplete
        });
        return ritorno;
    };

    var eseguiPromessa = function (valore) {
        var prom = new Promise(function (resolve, reject) {
            chiamaPersone(valore).then(function (data) {
                resolve(data);
            }).fail(function(err){
                reject(err);
            })
        });
        return prom;
    }

    $('.mioBottone').on('click', function () {
        let val = $('#valore').val();
        if (val == '') {
            alert("Inserire una stringa");
            return;
        }
        let promessa = eseguiPromessa(val);

        promessa.then(function (data) { //callback di resolve che incapsula body.responseJSON
            console.log(data[0]);
            for (let obj of data) {
                $('.risultati').append(obj.nome + '\n');
            }
            console.log("THEN: PROMESSA ANDATA A BUON FINE");
        }).catch(function (e) {  //callback di reject che incapsula body.statusText
            console.log(e);
            console.log("CATCH: PROMESSA ANDATA MALE");
        }).finally(function () {
            console.log("FINALLY: END PROMISE");
        });
    })
})