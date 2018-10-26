$(document).ready(function () {
    console.log("JQUERY OK");

    var eseguiPromessa = function (valore) {
        var prom = new Promise(function (resolve, reject) {
            if (valore == "Alfredo") {
                var data = {
                    user: "Alfredo",
                    age: "27"
                };
                resolve(data);
            } else {
                var error = new Error("NON MI CHIAMO Alfredo! SONO: " + valore);
                reject(error);
            }
        });
        return prom;
    }

    $('.mioBottone').on('click', function () {
        let val = $('#valore').val();
        if(val == ''){
            alert("Inserire una stringa");
            return;
        }
        let promessa = eseguiPromessa(val);

        promessa.then(function (data) {
            console.log(data);
            console.log("THEN: PROMESSA ANDATA A BUON FINE");
        }).catch(function (e) {
            console.log(e);
            console.log("CATCH: PROMESSA ANDATA MALE");
        }).finally(function () {
            console.log("FINALLY: END PROMISE");
        });
    })
})