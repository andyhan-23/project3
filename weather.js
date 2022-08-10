const api_key = "7d82b30ab1937ccf6f6b6259a3a42391";

function ongeook(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText  = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function ongeoerror(){
    alert("can't find you");
}


navigator.geolocation.getCurrentPosition(ongeook, ongeoerror);



