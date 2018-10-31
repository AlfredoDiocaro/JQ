import { addVeicolo, listVeicoli } from '../scripts/services';

export class VeicoliSect {

    constructor() {
        console.log("Loading Veicolisect");

    }

    loadVeic() {

        $('.container').html(`
            <div class="row">
                <div class="col-6">
                    <input type="text" class="targa" placeholder="inserisci targa" minlength="8" maxlength="8">
                    <hr>
                    <input type="text" class="telaio" placeholder="inserisci telaio" minlength="8" maxlength="8">
                    <hr>
                    <input type="text" class="conducente" placeholder="inserisci conducente">
                    <button class="insVeic">INSERISCI</button>
                </div>
                <div class="col-6" id="veicoli">

                </div>
            </div>
        `);
        listVeicoli();

        $('.insVeic').on('click', () => {
            let veicoloDaInserire = {
                id: Math.random()*100,
                targa: $('.targa').val(),
                telaio: $('.telaio').val(),
                conducente: $('.conducente').val()
            };
            console.log(veicoloDaInserire);
            addVeicolo(veicoloDaInserire);
        });

    }

}