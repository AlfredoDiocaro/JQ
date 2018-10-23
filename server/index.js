
var faker = require('faker')
faker.locale = 'en';

function generateData() {
    const data = {
        persone: [],
        veicoli: [],
        sinistri: [],
        notizie: [],
        reports: [],
        blacklist: [],
        whitelist: [],
        logelab: [],
        useractivities: [],
        indicatori: [],
        settings: {
            "environment": "SERVERLESS",
            "username": "LocalUser",
            "roles": [
                "ADMIN",
                "MANAGER"
            ]
        }
    };

    // Crea 1000 persone
    for (let i = 0; i < 1000; i++) {
        let persona = {
            id: i,
            nome: faker.name.firstName(),
            cognome: faker.name.lastName(),
            codiceFiscale: faker.random.alphaNumeric(16).toUpperCase(),
            partitaIva: faker.random.number(),
            luogoNascita: faker.address.city(),
            dataNascita: faker.date.past()
        };
        data.persone.push(persona);
    }

    // Crea 1000 veicoli
    for (let i = 0; i < 1000; i++) {
        let veicolo = {
            'targa': faker.random.alphaNumeric(8).toUpperCase(),
            'telaio': faker.random.alphaNumeric(20).toUpperCase(),
            'conducente': data.persone[faker.random.number(1000)],
            'proprietario': data.persone[faker.random.number(1000)],
            'contraente': data.persone[faker.random.number(1000)],
            'ricorrenze': faker.random.number(10),
            'cue': faker.random.number(12)
        };
        data.veicoli.push(veicolo);
    }
    // Aggiungi un veicolo per la ricerca test
    let veicolo = {
        'targa': 'FK894ZM',
        'telaio': faker.random.alphaNumeric(20).toUpperCase(),
        'conducente': data.persone[faker.random.number(1000)],
        'proprietario': data.persone[faker.random.number(1000)],
        'contraente': data.persone[faker.random.number(1000)],
        'ricorrenze': faker.random.number(10),
        'cue': '111'
    }
    data.veicoli.push(veicolo);


    // Crea 1000 sinistri
    for (let i = 0; i < 1000; i++) {
        let sinistro = {
            'id': faker.random.alphaNumeric(8),
            'cue': faker.random.alphaNumeric(20),
            'dataAccadimento': faker.date.past(),
            'dataDenuncia': faker.date.past(),
            'dataDefinizione': faker.date.past()
        };
        data.sinistri.push(sinistro);
    }

    // Crea 1000 blacklist
    for (let i = 0; i < 1000; i++) {
        let black = {
            'id': faker.random.alphaNumeric(8),
            'valoreEscl': faker.random.alphaNumeric(7),
            'codTipo': faker.random.alphaNumeric(1)
        };
        data.blacklist.push(black);
    }

    // Crea 1000 whitelist
    for (let i = 0; i < 1000; i++) {
        let white = {
            'id': faker.random.alphaNumeric(8),
            'idWhite': faker.random.alphaNumeric(7),
            'ultimoAgg': faker.date.past(),
            'tags': [
                faker.random.alphaNumeric(1),
                faker.random.alphaNumeric(1),
                faker.random.alphaNumeric(1),
            ],
            'flag': faker.random.alphaNumeric(1),
            'tipoWhite': faker.random.alphaNumeric(1),
        };
        data.whitelist.push(white);
    }

    // Crea 5 notizie
    for (let i = 0; i < 5; i++) {
        let notizia = {
            "idNotizia": faker.random.alphaNumeric(8),
            "titolo": faker.random.words(2),
            "testo": faker.random.words(30),
            "dataInizio": faker.date.past(),
            "dataFine": faker.date.past(),
            "sottoscrittori": [
                faker.name.lastName(),
                faker.name.lastName(),
                faker.name.lastName()
            ]
        };
        data.notizie.push(notizia);
    }

    // Crea 100 reports
    for (let i = 0; i < 100; i++) {
        let report = {
            "id": i,
            "data": faker.date.past(),
            "descrizione": faker.random.words(25)
        };
        data.reports.push(report);
    }

    // Crea 100 useractivities
    for (let i = 0; i < 100; i++) {
        let act = {
            "id": i,
            "itemCtx": 'ctx'+ i,
            "itemId": 'itemID'+ i,
            "rev": faker.random.arrayElement('s','t','p'),
            "revtime": faker.date.past(),
            "revtype": faker.random.word(),
            "utente": faker.name.lastName()
        };
        data.useractivities.push(act);
    }

    // Crea 100 logelab
    for (let i = 0; i < 100; i++) {
        let log = {
            "idProcess": i,
            "step": 's'+ i,
            "dtStart": faker.date.past(),
            "dtEnd": faker.date.past(),
            "msg": faker.random.words(5),
            "detElab": faker.random.word(5)
        };
        data.logelab.push(log);
    }

    // Crea 15 indicatori
    for (let i = 0; i < 15; i++) {
        let ind = {
            "id": i,
            "nomeIndicator": 'sco'+ i,
            "propCode": 'propcode' + i,
            "currCode": 'currcode' + i,
            "descrizione": faker.lorem.sentence(),
            "stato": faker.random.arrayElement('s','t','p'),
            "startDate": faker.date.past(),
            "peso": faker.random.number(2),
        };
        data.indicatori.push(ind);
    }

    return data;
}

module.exports = generateData;
