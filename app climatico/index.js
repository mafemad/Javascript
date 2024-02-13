const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "7783b907905d7b55740ea16547b1eda2";

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();
    const city = cityInput.value;

    if(city){

        try {

            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

            
        } catch (error) {
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError('Ponha uma cidade meu brodinho')
    }

});

async function getWeatherData(city){

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);
    
    if(!response.ok){
        throw new Error("could not fetch data")
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const {name : city,
            main: {temp, humidity},
            weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    tempDisplay.textContent = `${(temp - 273).toFixed(1)}C°`;
    tempDisplay.classList.add("tempDisplay");

    humidityDisplay.textContent = `Humidade do ar:${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");

    descDisplay.textContent = ptbr(id);
    descDisplay.classList.add("descDisplay");

    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add("weatherEmoji")


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emojiDisplay)

}

function getWeatherEmoji(weatherId){

    switch(true){
        case(weatherId >=200 && weatherId < 300):
        return "⛈"
        
        case(weatherId >=300 && weatherId < 400):
        return "🌧"

        case(weatherId >=500 && weatherId < 600):
        return "🌧"

        case(weatherId >=600 && weatherId < 700):
        return "☃️"

        case(weatherId >=700 && weatherId < 801):
        return "💨"

        case(weatherId === 800):
        return "☀️"

        case(weatherId >= 801 && weatherId < 810):
        return "☁️"

        default:
             return "❓"
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

function ptbr(weatherId){

    switch(true){
        case(weatherId >=200 && weatherId < 300):
        return "Tempestade com raios"
        
        case(weatherId >=300 && weatherId < 400):
        return "chuva leve"

        case(weatherId >=500 && weatherId < 600):
        return "Chuvas volumosas"

        case(weatherId >=600 && weatherId < 700):
        return "Neve"

        case(weatherId >=700 && weatherId < 801):
        return "ventos Fortes ou condiçoes irregulares do ar"

        case(weatherId === 800):
        return "Ensolarado"

        case(weatherId >= 801 && weatherId < 810):
        return "Céu nublado"

        default:
             return "❓"

    }

}