// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = "February 10 Weather Forecast, Seattle"
// Change the styling of every element with class "sun" to set the color to "orange"
document.getElementsByClassName('sun')[0].style.color = 'orange'
document.getElementsByClassName('sun')[1].style.color = 'orange'
// Change the class of the second <li> from to "sun" to "cloudy"
document.getElementsByClassName('sun')[0].setAttribute('class','cloudy')