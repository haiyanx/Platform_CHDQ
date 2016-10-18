import logger from "winston";
import dgram from "dgram";
import app from "../../server/app";
import Sensor from "../Sensor";

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

export default class udp extends Sensor
{

    const value = msg;
    this.setValue(value);

}


 
