const COORDS = "coords";
const API_KEY = "8e2b685355708c21d9e1f1a291504cc6";

const weather = document.querySelector('.js-weather');

function getWeather(lat,long){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric
        `).then(function(response){
            console.log(response)
            return response.json() 
        }).then(function(json){
            console.log(json)
            const temp = json.main.temp
            const place = json.name
            weather.innerText = `${temp} @ ${place}`

        })
}

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
    getWeather(lati,longi)
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
        const parseCoords = JSON.parse(loadcord)
        console.log(parseCoords)
        getWeather(parseCoords.latitude,parseCoords.longitude)
    }
}

function init(){
    loadCoords()
}

init();