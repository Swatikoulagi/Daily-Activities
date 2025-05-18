 var inputCity = document.querySelector('#cityName');
var btnSearch = document.querySelector('#btnsearch');
var weather = document.querySelector('#weather');
var temperature = document.querySelector('#temperature');
var nameEl = document.querySelector('#name');
var visibility = document.querySelector('#visibility');
var code = document.querySelector('#code');

btnSearch.addEventListener('click', async function (){
  var city = inputCity.value

  if (city === ''){
    alert('City is required.');
    return;
  }

  try{
    var apiKey = 'de6747a4331b0ec8cf07739dce4dbefc';
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    var data = await res.json();

    if (data.cod !== 200){
      alert(data.message || 'City not found');
      return;
    }

    weather.textContent = data.weather[0].description;
    temperature.textContent = data.main.temp + ' °C';
    nameEl.textContent = data.name;
    visibility.textContent = data.visibility + ' m';
    code.textContent = data.cod;

    var date = new Date();
    var hour = date.getHours();
    var body = document.body;

    if (hour >= 6 && hour <= 11){
      body.style.backgroundImage = "url('sunrise.png')";
    } else if (hour >= 12 && hour <= 17){
      body.style.backgroundImage = "url('afternoon.png')";
    } else if (hour > 17 && hour <= 19){
      body.style.backgroundImage = "url('mrg1.png')";
    } else if (hour >= 19 || hour < 6){
      body.style.backgroundImage = "url('night.png')";
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";

  } catch (err){
    alert('Something went wrong!');
    console.log(err);
  }
});
