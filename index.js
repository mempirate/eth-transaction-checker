const Web3 = require('web3')

const BuildTransactionChecker = require('./transactionChecker')
const BuildTransactionChecker2 = require('./transactionChecker2')
const CreateClient = require('./ethClient')

const { web3http, web3 } = CreateClient(Web3)
const { checkLastBlock, checkBlocks } = BuildTransactionChecker(web3)
const watchTransactions = BuildTransactionChecker2({ web3, web3http })

setInterval(() => {
    checkLastBlock()
}, 2000)

watchTransactions()