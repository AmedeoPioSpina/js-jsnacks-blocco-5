let autoList = [
    {
        marca: "Fiat",
        modello: "Punto",
        alimentazione: "Diesel"
    },
    {
        marca: "Fiat",
        modello: "Tipo",
        alimentazione: "Benzina"
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "Gpl"
    },
    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Benzina"
    },
    {
        marca: "Renault",
        modello: "4",
        alimentazione: "Gpl"
    },
    {
        marca: "Renault",
        modello: "Arkana",
        alimentazione: "Metano"
    },
    {
        marca: "Audi",
        modello: "A4",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi",
        modello: "A6",
        alimentazione: "Elettrico"
    },
    {
        marca: "Audi",
        modello: "S3",
        alimentazione: "Benzina"
    },
    {
        marca: "Chevrolet",
        modello: "Camaro",
        alimentazione: "Benzina"
    },
]

let autoBenzina = autoList.filter((item) => item.alimentazione === "Benzina");
let autoDiesel = autoList.filter((item) => item.alimentazione === "Diesel");
let autoRimanenti = autoList.filter((item) => item.alimentazione !== "Diesel" && item.alimentazione !== "Benzina");


console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoRimanenti);