'use strict'

module.exports = ({ web3, web3http }) => {
    const account = '0xe1Dd30fecAb8a63105F2C035B084BfC6Ca5B1493'.toLowerCase()
    const subscription = web3.eth.subscribe('pendingTransactions', (err, res) => {
        if (err) console.error(err)
    })

    return function watchTransactions() {
            console.log('[+] Watching transactions...')
            subscription.on('data', (txHash) => {
                setTimeout(async () => {
                    try {
                        let tx = await web3http.eth.getTransaction(txHash)
                        if (tx) {
                            if (tx.to.toLowerCase() === account) {
                                console.log({ address: tx.from, value: web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date() })
                            }
                        }
                    } catch (err) {
                        console.error(err)
                    }
                })
            })
        }
    
}