import { listPersone } from '../scripts/services';

export class HomeSect {

    constructor() {
        console.log("Loading Homesect");

    }

    loadHome() {

        $('.container').append(`
            <div class="row">
                <div class="col-12">
                    <button class="fetchPeople">FETCH PERSONE</button>
                </div>
            </div>
        `);
            
        $('.fetchPeople').on('click', () => {
            listPersone();
        });

    }

}
