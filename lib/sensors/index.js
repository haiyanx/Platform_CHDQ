import logger from "winston";
import dgram from "dgram";
import storage from "../storage";

let sensors = require("../../config/sensors");
if (sensors.default)
{
    // In ES6, use sensors.default
    sensors = sensors.default;
}


async function loadSensors()
{

    let serverSocket = null;
    serverSocket = dgram.createSocket('udp4');

    serverSocket.on('message', function(msg, rinfo){
          console.log('recv %s(%d bytes) ', msg, msg.length, rinfo.address, rinfo.port);});
          
    serverSocket.on('error', function(err){
          console.log('error, msg - %s, stack - %s', err.message, err.stack);
        });
     
    serverSocket.on('listening', function(){
          console.log('echo server is listening on port 5683.');})
     
    serverSocket.bind(5683);
    
    
    logger.info("Loading sensors...");
    
/*     if (msg !== JSON.stringify(sensors.meta.values))
    {
        sensors.meta.values = msg;
    } */
    
/*     const sensorStorage = new storage.SensorStorage(storage.connection);
    
    try
    {
        await sensorStorage.bind(sensor);
    }
    
    catch (err)
    {
        logger.error(err);
        throw new Error(`Error ocurs when binding SensorStorage to sensor "${s.name}".`);
    } */
}


sensors.load = loadSensors;
export default sensors;
