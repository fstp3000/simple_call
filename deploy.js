var config = require('./config');
var contract = require('./contract')
var web3 = config.web3;
var sender = config.senderaddress;
var farmContract = new web3.eth.Contract(contract.abi);

async function main() {
       farmContract.deploy({data: contract.bytecode}).send({from: sender, gas: 1000000 ,gasPrice: 1000000})
       .on('receipt', function(receipt){
                                        console.log('Address: ' +receipt.contractAddress);
                                        console.log("****The contract has been deployed****");
                                        process.exit()
                                       })
       .on('transactionHash', function(hash){
                                             console.log('Hash: '+hash);
                                             console.log("****Please wait for the contract address****");
                                             //process.exit()
                                             })

}

module.exports = main;
if (!module.parent)
      main();

