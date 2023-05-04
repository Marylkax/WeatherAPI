const weather = 'https://api.openweathermap.org/data/2.5/forecast?lat=48&lon=2&appid=5171327bdd09563727455d439de111c8&units=metric'


const getWeather = async () => {
    try {
    const {data} = await axios.get (weather);
     console.log(data)
    console.log (data.list)
   const html = data.list.map (item => {
        return `<div> 
    <h1>${(new Date(item.dt * 1000).toLocaleString())}</h1>
    <p>${(item.main.temp)} &#8451 </p> 
    <p>${(item.weather[0].description)}</p>
        </div>`
    });
   document.getElementById("root").innerHTML = html.join("");
// document.querySelector(".temp").innerHTML = item.main.temp;
}
catch (error)  {
    alert('An error occured!');


}
 }
 getWeather();