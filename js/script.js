
const key = "e26dd06c35bc75cac98248379fdd3be4"



function showDisplay(city){

  let h2 = document.querySelector('.name-city');
  let temp = document.querySelector('.temp');
  let icon = document.querySelector('.icon');
  let weathers = document.querySelector('.weather');
  let umidifity = document.querySelector('.umidifity');

  h2.innerHTML = ` ${city.name}`
  temp.innerHTML = `${Math.floor(city.main.temp)}ºC`
  // temp.innerHTML = `Atual ${Math.floor(city.main.temp)}ºC | Temp.Max ${Math.floor(city.main.temp_max)}ºC | Temp.Min ${Math.floor(city.main.temp_min)}ºC`
  if(city.weather[0].icon == '02d'){
    icon.src = `/nuvem.png`
  }else if(city.weather[0].icon == '01d'){
    icon.src = `/sol.png`
  }else if(city.weather[0].icon == '03d'){
    icon.src = `/nuvem (1).png`
  }else if(city.weather[0].icon == '10d'){
    icon.src = `/chuva.png`
  }else if(city.weather[0].icon == '04n'){
    icon.src = `/nublado.png`
  }
  // icon.src = `https://openweathermap.org/img/wn/${city.weather[0].icon}.png`
  weathers.innerHTML = `${city.weather[0].description}`
  umidifity.innerHTML = `${city.main.humidity}%`
  
}



async function searchcity() {

  let city = document.querySelector(".city");

  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

  city.value = '';

  console.log(data);

  showDisplay(data)

}