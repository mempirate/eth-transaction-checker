'use strict';

module.exports = Web3 => ({
    web3http: new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_API_KEY')),
    web3: new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/YOUR_INFURA_API_KEY'))
})