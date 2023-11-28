const squads = [
    {
        "nome": "VolleyRoma",
        "puntiSegnati": [],
        "falliSubiti": []
    },
    {
        "nome": "VolleyMilano",
        "puntiSegnati": [],
        "falliSubiti": []
    },
    {
        "nome": "VolleyBologna",
        "puntiSegnati": [],
        "falliSubiti": []
    },
]

const generateRandomNum = (maxLimit, minLimit) => {
    return Math.floor(Math.random() * maxLimit + minLimit);
}