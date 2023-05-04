
let cityname= 'London';
// let datetime = document.querySelector(".weather__datetime");


const APIkey= '5171327bdd09563727455d439de111c8';
const weather =  ` https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric` ;
  
const getWeather = async () => {
try {
    const {data} = await axios.get (weather);
    console.log(data);
    console.log(data.name);

//    city.innerHTML = data.name;
}

let city = document.querySelector(".city") 

catch (error)  {
    alert('An error occured!');


}
}
 document.body.addEventListener('load',getWeather());