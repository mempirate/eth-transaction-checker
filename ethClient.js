'use strict'

module.exports = Web3 => ({
    web3http: new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/0e4e7262741e4db18a020768e66f018e')),
    web3: new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/0e4e7262741e4db18a020768e66f018e'))
})