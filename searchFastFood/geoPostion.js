const API_KEY = "8e2b685355708c21d9e1f1a291504cc6";
const CURRENT_POSITION = "current_position"


function getWeather(lat,long){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?&lang=kr&lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric
        `).then(function(response){
            console.log(response)
            return response.json() 
        }).then(function(json){
            console.log(json)
            const place = json.name
            console.log(place)

        })
}

function handleGeoError(info){
    console.log("error " + info)
}
function handleGeoSuccess(info){
    
    const latitude = info.coords.latitude;
    const longitude = info.coords.longitude;

    console.log("받은 지오코드 : " + latitude +"///" + longitude)
    getWeather(latitude,longitude)
}


function askGeoPostion(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}



function getGeoPostion(){
    const isGeo = localStorage.getItem(CURRENT_POSITION);
    if(isGeo===null) askGeoPostion()

}

function init(){
    getGeoPostion();
}

init();