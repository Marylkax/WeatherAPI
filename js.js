

// let datetime = document.querySelector(".weather__datetime");
const citysearch = document.getElementById('citysearch');

const button = document.getElementById('button');
button.addEventListener('click', () => getWeather(citysearch.value));

const APIkey= '5171327bdd09563727455d439de111c8';

  
const getWeather = async (cityname = "Barcelona") => {
try {
    const weather =  ` https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric` ;
    // const weather =  ` https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIkey}&units=metric` ;
   
    
    const {data} = await axios.get (weather);
    console.log(data);
    console.log(data.name);
    console.log(data.weather[0].main);
    console.log(data.weather[0].icon);
    console.log(data.sys.sunrise );


let city = document.querySelector(".city") ;
 city.innerHTML = data.name;

 let weatherdescription = document.querySelector(".weatherdescription");
 weatherdescription.innerHTML = data.weather[0].main;
 let temp_min = document.querySelector(".temp_min");
 temp_min.innerHTML = `Min ${data.main.temp_min.toFixed()} &#8451 ` ;
 let temp_max = document.querySelector(".temp_max");
 temp_max.innerHTML = `Min ${data.main.temp_max.toFixed()} &#8451` ;
let weathericon = document.querySelector(".weathericon");
document.querySelector('.weathericon img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
// weathericon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
// 

  //This part is giving me an error
let sunrisetime = data.sys.sunrise;
 let timestampsunrise = new Date (sunrisetime *1000);
console.log(timestampsunrise);
let suntime = document.querySelector("sunrise");
suntime.innerHTML = timestampsunrise;

}


catch (error)  {
    alert('An error occured!');


}
}
 document.body.addEventListener('load',getWeather());
