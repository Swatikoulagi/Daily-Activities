var inputCity = document.querySelector('#cityName');
var btnSearch = document.querySelector('#btnsearch');
var weather = document.querySelector('#weather');
var temperature = document.querySelector('#temperature');
var nameEl = document.querySelector('#name');
var visibility = document.querySelector('#visibility');
var code = document.querySelector('#code');

btnSearch.addEventListener('click', async () =>{
    if (cityName.value === ''){
        alert('City name is required!')
        return;
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=a36d09d101196199bff4634669dc80a5`)
    const resData = await res.json()
    console.log(resData)

    loc.textContent = resData.name
    weather.textContent = resData.weather[0].main
    temp.textContent = (Number(resData.main.temp) - 272.15).toFixed(3) + "°C"
})
