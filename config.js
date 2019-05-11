var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://140.112.230.86:30400"));

var abi=[{"constant": false,"inputs": [{"name": "photohash","type": "bytes32"},{"name": "output","type": "uint256"}],"name": "addPhoto","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "photoID","type": "uint256"}],"name": "getPhoto","outputs": [{"name": "","type": "uint256"},{"name": "","type": "bytes32"},{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}];

var sc_address = "0xebfb59b2e1de60807411fb6a02538e1a20a394ac";

var sender_address = "0x132f98e1aa89ff2557f117906997d993fa33338f";

var contract = new web3.eth.Contract(abi, sc_address, {from: sender_address, gasPrice:1000000});

module.exports = {
    contract : contract,
    web3 : web3,
    senderaddress : sender_address
};
