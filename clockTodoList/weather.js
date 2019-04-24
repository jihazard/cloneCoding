const COORDS = "coords";
const API_KEY = "8e2b685355708c21d9e1f1a291504cc6";
function saveCoords(obj){
    localStorage.setItem(COORDS,JSON.stringify(obj))
}
function handleGeoSuccess(postion){
    const lati = postion.coords.latitude;
    const longi = postion.coords.longitude;
    
    const coordsObj= {
        latitude: lati,
        longitude:longi
    }

    saveCoords(coordsObj)
    console.log(postion);
}
function handleGeoError(){
    console.log("can't load geo cords")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadcord = localStorage.getItem(COORDS)

    if(loadcord==null){
        askForCoords();
    }else {

    }
}

function init(){
    loadCoords()
}

init();