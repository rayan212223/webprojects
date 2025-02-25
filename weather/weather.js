const apikey="17c0e2bf47d45f08be6dacb34fe47def";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.querySelector("#enter");
const searchbtn=document.querySelector("#btn");

async function checkweather(city){
    const response=await fetch(apiurl+ city + `&appid=${apikey}`);
    var data=await response.json(); 

    console.log(data);

    document.querySelector("#citytxt").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector("#humiditytxt").innerHTML=data.main.humidity + "%";
    document.querySelector("#windspeedtxt").innerHTML=data.wind.speed + " km/h";
    document.querySelector("#feelsliketxt").innerHTML=Math.round(data.main.feels_like) + "°C";
    document.querySelector("#descriptiontxt").innerHTML=data.weather[0].description;;
}

searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
})

checkweather("delhi");