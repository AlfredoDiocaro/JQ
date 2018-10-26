
var faker = require('faker')
faker.locale = 'en';

function generateData() {
    const data = {
        persone: [],
        veicoli: [],
        notizie: []
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

    return data;
}

module.exports = generateData;
