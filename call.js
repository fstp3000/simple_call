var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://140.112.230.86:30400"));

var abi=[{"constant":false,"inputs":[{"name":"photohash","type":"bytes32"},{"name":"output","type":"bytes32"}],"name":"addPhoto","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"photoID","type":"uint256"}],"name":"getPhoto","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}];

var sc_address = "0xebfb59b2e1de60807411fb6a02538e1a20a394ac";

var contract = new web3.eth.Contract(abi, sc_address);

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
