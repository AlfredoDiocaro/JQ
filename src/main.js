$(document).ready(function () {
    console.log("JQUERY OK");

    var eseguiPromessa = function (valore) {
        var prom = new Promise(function (resolve, reject) {
            if (valore == "Sergio") {
                var data = "SONO SERGIO";
                resolve(data);
            } else {
                var error = new Error("NON MI CHIAMO SERGIO!");
                reject(error);
            }
        });
        return prom;
    }

    $('.mioBottone').on('click', function () {

        let promessa = eseguiPromessa();

        promessa.then(function (data) {
            console.log(data);
        }).catch(function (e) {
            console.log(e)
        }).finally(function () {
            console.log("END PROMISE");
        });
    })
})