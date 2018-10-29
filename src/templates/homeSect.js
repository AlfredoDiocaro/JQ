export class HomeSect{
    constructor(){
        console.log("Loading Homesect");
    }

    loadHome(){
        $('#main').html(`
            <div class="row">
                <div class="col-6">
                    <h1>BELLA</h1>
                </div>
                <div class="col-6">
                    <h1>PETE</h1>
                </div>
            </div>
        `);
    }
}