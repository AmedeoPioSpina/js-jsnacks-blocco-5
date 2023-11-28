const squads = [
    {
        "nome": "VolleyRoma"
    },
    {
        "nome": "VolleyMilano"
    },
    {
        "nome": "VolleyBologna"
    },
]

const generateRandomNum = (maxLimit, minLimit) => {
    return Math.floor(Math.random() * maxLimit + minLimit);
}

squads.forEach((item) => {
    item.puntiSegnati = generateRandomNum(100, 0); 
    item.falliSubiti = generateRandomNum(10, 0);
})

console.log(squads);