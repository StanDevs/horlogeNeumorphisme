var trotteuse = document.getElementById('trotteuse');
var aiguilleMinutes = document.getElementById('aiguilleMinutes');
var aiguilleHeures = document.getElementById('aiguilleHeures');

function setRotationTrotteuse(sec){
    var rotation = (sec % 60 * 360 / 60);
    trotteuse.style.transform = 'rotate('+rotation+'deg)';
}

function setRotationAiguilleMinutes(minutes){
    var rotation = (minutes % 60 * 360 / 60);
    aiguilleMinutes.style.transform = 'rotate('+rotation+'deg)';
}

function setRotationAiguilleHeures(heures){
    var rotation = (heures % 12) * (360 / 12);
    console.log(rotation);
    aiguilleHeures.style.transform = 'rotate('+rotation+'deg)';
}

function setRotation(date){
    var secondes = date.getSeconds();
    var minutes = date.getMinutes();
    var heures = date.getHours();

    var rotationSecondes = (secondes % 60 * 360 / 60);
    var rotationMinutes = ((minutes % 60) * (360 / 60)) + ((secondes / 60) * (360 / 60));
    var rotationHeures = (heures % 12) * (360 / 12) + ((minutes / 60) * (360 / 24));

    trotteuse.style.transform = 'rotate(' + rotationSecondes + 'deg)';
    aiguilleMinutes.style.transform = 'rotate('+ rotationMinutes +'deg)';
    aiguilleHeures.style.transform = 'rotate('+rotationHeures+'deg)';

    return {minutes: minutes, secondes: secondes, heures: heures, rotationSecondes: rotationSecondes, rotationMinutes: rotationMinutes, rotationHeures: rotationHeures};

}

function init(){
    console.log((23 % 12) * (360 / 12) + ((59 / 60) * (360 / 24)));

    setInterval(() => {
        var date = new Date();
        /*var secondes = setRotationTrotteuse(date.getSeconds());
        var minutes = setRotationAiguilleMinutes(date.getMinutes())
        var heures = setRotationAiguilleHeures(date.getHours())*/
        var rota = setRotation(date);
        
    }, 100);
}

init();

/*
var secondes = [] ;
for(var i = 0 ; i < 61; i++){
    secondes.push(i);
}

secondes.forEach((seconde, i) =>{
    setTimeout(()=>{
        setRotationTrotteuse(seconde);
    }, i * 100);
});

var minutes = [] ;
for(var i = 0 ; i < 61; i++){
    minutes.push(i);
}

minutes.forEach((minute, i) =>{
    setTimeout(()=>{
        setRotationAiguilleMinutes(minute);
    }, i * 200);
});


var heures = [] ;
for(var i = 0 ; i < 13; i++){
    heures.push(i);
}

heures.forEach((heure, i) =>{
    setTimeout(()=>{
        setRotationAiguilleHeures(heure);
        console.log('rotation heure')
    }, i * 600);
});
*/