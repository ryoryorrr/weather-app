


async function getWeather(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=33.31&longitude=130.50&current_weather=true";
    const res=await fetch(url)
    console.log(res);
    const data = await res.json();
    const temp = data.current_weather.temperature;

    const temDisp = document.getElementById("temperature")

    temDisp.textContent = temp;

    console.log("今の気温は:", temp);
    
}

const btn = document.getElementById("btn");
btn.addEventListener("click", getWeather);

