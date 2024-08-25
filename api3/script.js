document.getElementById('get-weather').addEventListener('click', function() {
     const apiKey = '98e27e1f07704530a2a182529242408'; // Replace with your WeatherAPI.com API key
     const location = document.getElementById('location').value;
     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
 
     fetch(url)
         .then(response => {
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .then(data => {
             const weatherInfo = document.getElementById('weather-info');
             if (data) {
                 weatherInfo.innerHTML = `
                     <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                     <p>Temperature: ${data.current.temp_c} °C</p>
                     <p>Condition: ${data.current.condition.text}</p>
                     <p>Humidity: ${data.current.humidity}%</p>
                     <p>Wind Speed: ${data.current.wind_kph} kph</p>
                 `;
             } else {
                 weatherInfo.innerHTML = '<p>No data available</p>';
             }
         })
         .catch(error => {
             const weatherInfo = document.getElementById('weather-info');
             weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
         });
 });
 