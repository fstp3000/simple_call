var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://140.112.230.86:30400"));

var abi=[{"constant":false,"inputs":[{"name":"photohash","type":"bytes32"},{"name":"output","type":"bytes32"}],"name":"addPhoto","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"photoID","type":"uint256"}],"name":"getPhoto","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}];

//"0x07051e976a552ac6d3f908288b35dedb5ac9dc92"
//"0x132f98e1aa89ff2557f117906997d993fa33338f"
//"0xd2d2d32cef499aa3c4c3e912e6c364296f4f8461"
//"0x19d1eadf98abb997531f9402ee7c26342ad2beab"
var sc_address = "0xebfb59b2e1de60807411fb6a02538e1a20a394ac";
var sender_address = "0x07051e976a552ac6d3f908288b35dedb5ac9dc92";
//################################################
var photoNumber = 10;
//################################################
var contract = new web3.eth.Contract(abi, sc_address, {from: sender_address, gasPrice:'1000000',});

async function main() {
    var index;
    for (index = 0; index >= 0; index++) {
       receipt = await contract.methods.getPhoto(index).call();
       if (receipt['1']=='0x0000000000000000000000000000000000000000000000000000000000000000'){
           console.log('Total '+ index +' photos on the blockchain.');
           console.log('yaya^^')
           break;
           }
       receipt['0']=parseInt(receipt['0'], 10);
       console.log(receipt);
    } 
}

module.exports = main;
if (!module.parent)
     main();
