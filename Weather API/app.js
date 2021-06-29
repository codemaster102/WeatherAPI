var header = document.querySelector('.header');
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8ac80f9a96e20266674ae577d21d29ed')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - " + descValue;
  temp.innerHTML = "Temp - " + (tempValue-273.5).toFixed(2) + "°C";
  input.value ="";
  
  if (descValue.includes("clear")){
    document.body.style.backgroundImage = "url('img/clear-sky.jpg')";
    header.style.color = "lightblue";
  }
  if (descValue == "few clouds"){
    document.body.style.backgroundImage = "url('img/few-clouds.jpg')";
    header.style.color = "lightblue";
  }
  if (descValue == "scattered clouds"){
    document.body.style.backgroundImage = "url('img/scattered-clouds.jpg')";
    header.style.color = "blue";
  }
  if (descValue === "broken clouds"){
    document.body.style.backgroundImage = "url('img/broken-clouds.jpg')";
    header.style.color = "blue";
  }
  if (descValue === "overcast clouds"){
    document.body.style.backgroundImage = "url('img/overcast-clouds.jpg')";
    header.style.color = "#9d9693";
  }
  if (descValue.includes("rain")){
    document.body.style.backgroundImage = "url('img/rain.jpg')";
    header.style.color = "#afc3cc";
  }
  if (descValue.includes("thunderstorm")){
    document.body.style.backgroundImage = "url('img/thunderstorm.jpg')";
    header.style.color = "#252e0c";
  }
  if (descValue.includes("snow")){
    document.body.style.backgroundImage = "url('img/snow.jpg')";
    header.style.color = "#fffafa";
  }
  if (descValue == "mist"){
    document.body.style.backgroundImage = "url('img/mist.jpg')";
    header.style.color = "#b4bbb4";
  }
})

.catch(err => alert("Sorry something went wrong! Try checking the city/town name"));
})