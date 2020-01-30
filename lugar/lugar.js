const axios = require("axios");


const getLugarLatLng = async ( direccion ) => {
    const resp = await axios({
        "method":"GET",
        "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key":"a893474679msh25dd76472c39840p1ed318jsn8e77fa160749"
        },
        "params":{
            "location": direccion
        }
    });

    if(resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data      = resp.data.Results[0];
    const dir       = data.name;
    const lat       = data.lat;
    const lng       = data.lon;
    
    return {
        dir,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
}

