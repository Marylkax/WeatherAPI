

// let datetime = document.querySelector(".weather__datetime");
const citysearch = document.getElementById('citysearch');

const button = document.getElementById('button');
button.addEventListener('click', () => getWeather(citysearch.value));

const APIkey= '';

  
const getWeather = async (cityname = "Barcelona") => {
try {
    // const weather =  ` https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric` ;
   const weather =  ` https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIkey}&units=metric` ;
   
    
    const {data} = await axios.get (weather);
    console.log(data);
   console.log(data.city.name); 
   console.log(data.list[0].dt_txt)
    console.log(data.list[0].main);
    console.log(data.list[0].main.temp_min);
    console.log(data.list[0].main.temp_max);
    console.log(data.list[0].weather[0].description);
    console.log(data.list[0].weather[0].icon);

    // console.log(data.weather[0].icon);
    console.log(data.city.sunrise );
    let sunrisetime = data.city.sunrise;
     let timestampsunrise = new Date (sunrisetime *1000).toLocaleTimeString();
    console.log(timestampsunrise);
    let suntime = document.querySelector(".sunrise");
    suntime.innerHTML = `Sunrise is at ${timestampsunrise} AM`;

   

    console.log(data.city.sunset );
    let sunsettime = data.city.sunset;
     let timestampsunset = new Date (sunsettime *1000).toLocaleTimeString();
    console.log(timestampsunset);
    let sunsettingtime = document.querySelector(".sunset");
    sunsettingtime.innerHTML = `Sunset is at ${timestampsunset} PM `;


 let city = document.querySelector(".city") ;
city.innerHTML = data.city.name;

 let weatherdescription = document.querySelector(".weatherdescription");
weatherdescription.innerHTML = data.list[0].weather[0].description;
 let temp_min = document.querySelector(".temp_min");
temp_min.innerHTML = `Min ${data.list[0].main.temp_min.toFixed()} &#8451 ` ;
let temp_max = document.querySelector(".temp_max");
temp_max.innerHTML = `Min ${data.list[0].main.temp_max.toFixed()} &#8451` ;
 let weathericon = document.querySelector(".weathericon");
 document.querySelector('.weathericon img').src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
// Trying to make background change for day and night
//  console.log(data.list[0].dt_txt);
//  let currentTime = new Date().getHours();
//  if (data.list[0].dt_txt <= currentTime) { document.body.style.backgroundColor  =  blue; } 
//  else { document.body.style.backgroundColor = "#AA0000"; }


const fiveDay = document.getElementById("forecast");


const midday = "12:00:00";
const weatherArray = data.list;
const mapArray = weatherArray.map (weatherItem => {

if (weatherItem.dt_txt.includes(midday)) {
    console.log(weatherItem.dt_txt);
    
    let itemDay= new Date(weatherItem.dt *1000).getDay();
    const weekArray =  ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // document.querySelector('.weathericon img').src = `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`
    // how to add in
    return `
    <h3> ${weekArray[itemDay]}  ${new Date(weatherItem.dt *1000).getDate()} / ${new Date(weatherItem.dt *1000).getMonth()} /  ${new Date(weatherItem.dt *1000).getFullYear()} </h3>
    <ul> <li> Temp : ${weatherItem.main.temp}  &#8451 </li>
    <li> ${weatherItem.weather[0].description}</li>
    <li> </li>
    </ul>
    `;

}

});
fiveDay.innerHTML = mapArray. join("");
//compare unix time stamps. or need to convert both values to have the same layout ?


}

catch (error)  {
    alert('An error occured!');
    console.log(error);


}
}

 document.body.addEventListener('load',getWeather());
