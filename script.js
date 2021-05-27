let verse  = document.createElement('div');
let content = document.createElement('div');
let show = document.querySelector('#show');


let versesList = [
    [
        "Psaumes(7:7)",
        "Lève-Toi, ô Eternel dans ta colère, Lève Toi contre lz fureur de mes adversaires,Reveille-toi pour mesecourir, ordonne un jugement"
    ],
    [
        "Ephésiens(1:4)",
        "En lui Dieu nous a elus avant la fondation du monde pour que nous, pour que nous soyons saints et irrprehensibles devant lui,"

    ],
    [
        "Psaumes(1:6)",
        "Car l'Eternel connaît la voie des justes, Et la voie des pécheurs mène à la ruine"
    ]
]


function aleaVal(min, max){
    return Math.floor(Math.random()*(max-min));
}

versesList.forEach((el)=>{
    console.log(aleaVal(0,versesList.length));
})