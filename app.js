const argv = require('yargs').options({
    descripcion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


const getInfo = async ( direccion ) => {

    try {
        const coordenadas = await lugar.getLugarLatLng( direccion );
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
    
        return `El clima de ${ coordenadas.dir } es de ${ temperatura } grados centigrados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`; 
    }

}

getInfo(argv.descripcion).then(console.log);

