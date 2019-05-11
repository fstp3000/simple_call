#!/usr/local/bin/node

var config = require('./config');

//default setting
var photoHash = "0x1500000000000000000000000000000000000000000000000000000000000000";
var photoInfo = "0x1100000000000000000000000000000000000000000000000000000000000000";
var pr = process.argv

if(typeof pr[2]!=='undefined' && pr[2].length == 66 && pr[2].substring(0,2) == "0x")
	photoHash = pr[2]
if(typeof pr[3]!=='undefined' && pr[3].length == 66 && pr[3].substring(0,2) == "0x")
	photoInfo = pr[3]

async function main() {
    config.contract.methods.addPhoto(photoHash,photoInfo).send()
    .on('transactionHash', function(hash){
	    				  console.log('Hash: '+hash);
	    			 	  console.log("****The picture has been uploaded****");
    	    				  process.exit()})    
}
module.exports = main;
if (!module.parent)
     main();

