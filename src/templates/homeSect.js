import '../scripts/constants'
import { restURL } from '../scripts/constants';
export class HomeSect {

    constructor() {

        console.log("Loading Homesect");
    }

    loadHome() {

        $('.container').append(`
            <div class="row">
                <div class="col-12">
                    <button class="fetch">FETCH PERSONE</button>
                </div>
            </div>
        `);

        $('.fetch').on('click', function () {
            console.log("fetching");
            new Promise(function (resolve, reject) {
                $.get(restURL+'/persone').done(function(data){
                    resolve(data);
                }).fail(function(e){
                    console.log(e);
                    reject(e);
                }); 
            }).then(function(data){
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
            }).catch(function(e){
                console.log("Promise not ok " + e)
            }).finally(function(){
                console.log("promise end");
            })
        })

    }


}
