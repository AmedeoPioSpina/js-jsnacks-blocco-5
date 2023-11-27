let persons = [
    {
        nome: "Aldo",
        cognome: "Moro",
        età: "30"
    },
    {
        nome: "Silvio",
        cognome: "Scala",
        età: "14"
    },
    {
        nome: "Simona",
        cognome: "Colalillo",
        età: "18"
    },
    {
        nome: "Piero",
        cognome: "Ciccone",
        età: "9"
    },
    {
        nome: "Barbara",
        cognome: "Spina",
        età: "21"
    },
    {
        nome: "Marco",
        cognome: "Rossi",
        età: "70"
    },
]

let newAry = persons.map(element => {
    if(element.età >= 18){
        element.frase = `${element.nome} ${element.cognome} può guidare`;
    }
    else{
        element.frase = `${element.nome} ${element.cognome} non può guidare`;
    }
    return element;
})

console.log(newAry);