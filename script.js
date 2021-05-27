let verse  = document.createElement('div');
let content = document.createElement('div');
let toggle  = document.createElement('button');
let show = document.querySelector('#show');

/**
 * add content to show
 */
verse.className = "verse";
content.className  = "content";
toggle.className  = "toggle";
toggle.textContent  = 'Start';
show.appendChild(verse);
show.appendChild(content);
show.appendChild(toggle);

/**
 * Variable versesList
 */
let versesList = [
    [
        "Psaumes(7:7)",
        "Lève-Toi, ô Eternel dans ta colère, Lève Toi contre la fureur de mes adversaires,Reveille-toi pour mesecourir, ordonne un jugement"
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
// Default verse value
verse.innerHTML = "<h2> "+ versesList[0][0]+" </h2>";
content.innerHTML  = "<h4> "+ versesList[0][1]+" </h4>";

let intervalId;
let isInterval  = false;




/***
 * Function random value
 */
function aleaVal(min, max){
    return Math.floor(Math.random()*(max-min));
}

// setInterval(()=>{
//     let vers = aleaVal(0,versesList.length);
//     verse.innerHTML = "<h2> "+ versesList[vers][0]+" </h2>";
//     content.innerHTML  = "<h4> "+ versesList[vers][1]+" </h4>";
// },2000)

toggle.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(isInterval){
        stopGet()
        e.target.textContent = "Start";
        e.target.style.backgroundColor = "lightgreen";
        console.log('is true, stopped');
        console.log(intervalId);
    }
    else{
        startGet(3);
        e.target.textContent = "Stop";
        e.target.style.backgroundColor = "crimson";
        console.log('is false, started');
        console.log(intervalId);
    }
    console.log('clicked');
})

/**
 * Get one verse
 */
function getVerse(){
    let vers = aleaVal(0,versesList.length);
    verse.innerHTML = "<h2> "+ versesList[vers][0]+" </h2>";
    content.innerHTML  = "<h4> "+ versesList[vers][1]+" </h4>";
}

/**
 * Function witch permit to get vers on a time
 */

function startGet(time = 1){
    intervalId = setInterval(getVerse,time*1000);
    isInterval = true;
}

/**
 * Function witch stop get Vers on time
 */

function stopGet(){
    clearInterval(intervalId);
    isInterval = false;
}