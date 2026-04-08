const outfitDisp =document.getElementById("outfit")

async function getWeather(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=33.3167&longitude=130.5167&hourly=temperature_2m,rain";
    const res=await fetch(url)
    console.log(res);
    const data = await res.json();
    const temp = data.current_weather.temperature;

    const temDisp = document.getElementById("temperature")

    temDisp.textContent = temp;

    console.log("今の気温は:", temp);

    if(temp>=25){
        outfitDisp.textContent="Tシャツ";
    }if(temp>=20){
        outfitDisp.textContent="Tシャツor薄手の長袖";
    }if(temp>=15){
        outfitDisp.textContent="スウェットor軽めのアウター";
    }if(temp>=10){
        outfitDisp.textContent="ニットorパーカーorジャケット";
    }if(temp>=5){
        outfitDisp.textContent="厚手コートorヒートテック";
    }else{
        outfitDisp.textContent="ダウンコート";
    }
    
}

getWeather();



