//Se crea una const para guardar la ciudad 
const ciudad = "Medellin"
const API_KEY = "1572a88f681166d30636774bee65467d";

const request = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
    const data = await response.json();
    console.log(response);
    console.log(data);
}

request()




const searchCity = () => {
    const ciudad = document.getElementById("city").value
    const API_KEY = "1572a88f681166d30636774bee65467d";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
    .then(reponse=>reponse.json())
    .then(data => {
        console.log(data.sys.country);
        newTitle= document.createElement('h1')// nombre de la ciudad
        newTitle.textContent=`${ciudad.toUpperCase()}, ${data.sys.country}`;
        info=document.getElementById("info");
        info.appendChild(newTitle);
        temperature=document.createElement('p');
        temperature.textContent=`Temperatura es de ${data.main.temp}°C`;
        info.appendChild(temperature);
        state=document.createElement('p');
        state.textContent=`Clima ${data.weather[0].main} `;
        info.appendChild(state);
    })
    .catch(error => {        
        error=document.createElement('h1');
        error.textContent="Error al obtener el clima: Intente con una ciudad válida", error;
        info.appendChild(error)
    });
}

