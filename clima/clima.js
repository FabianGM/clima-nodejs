const axios = require("axios");

const getClima = async ( lat, lng ) => {

    const resp = await axios({
        "method":"GET",
        "url":"https://api.openweathermap.org/data/2.5/weather",
        "params":{
            "lat": lat,
            "lon": lng,
            "units" : "metric",
            "appid" : "6796db0f0a4b525aceb6ca638ce7175f"
        }
    });

    if( resp.data.weather.lenght === 0) {
        throw new Error(`No se pudo determinar el clima de ${ resp.data.name }`);
    }
    return resp.data.main.temp;

}

module.exports = {
    getClima
}