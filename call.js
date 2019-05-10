#!/usr/local/bin/node

var config = require('./config');

var pr = process.argv;
if(typeof pr[2]!=='undefined')
        var start;
	start = pr[2];

//console.log(start)

async function main() {
    var index;
    for (index = start ; 1 ;index++) {
       receipt = await config.contract.methods.getPhoto(index).call();
       if (receipt['1']==0x0000000000000000000000000000000000000000000000000000000000000000){
           console.log('Total '+ index +' photos on the blockchain.');
           console.log('Complete!!')
           break;
           }
       receipt['0']=parseInt(receipt['0'], 10);
       console.log(receipt);
    } 
}

module.exports = main;
if (!module.parent)
     main();
