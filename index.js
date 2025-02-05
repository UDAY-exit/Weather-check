const apikey = "1e982dcaf21de7ad7fea84803af6c114";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weadthericon = document.querySelector(".weather-icon");


async function checkweather(city) { 
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
         weadthericon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weadthericon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
    weadthericon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weadthericon.src = "rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weadthericon.src = "mist.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";
}
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});



