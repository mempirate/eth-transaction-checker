'use strict';

module.exports = web3 => {
    const account = 'YOUR_ETH_ADDRESS'.toLowerCase();

    return {
        checkLastBlock: async () => {
            let block = await web3.eth.getBlock('latest');
            console.log(`[*] Searching block ${ block.number }...`);
            if (block && block.transactions) {
                for (let tx of block.transactions) {
                    let transaction = await web3.eth.getTransaction(tx);
                    if (account === transaction.to.toLowerCase()) {
                        console.log(`[+] Transaction found on block ${ lastBlockNumber }`);
                        console.log({ address: transaction.from, value: web3.utils.fromWei(transaction.value, 'ether'), timestamp: new Date() });
                    }
                }
            }
        },

        checkBlocks: async (start, end) => {
            for (let i = start; i < end; i++) {
                let block = await web3.eth.getBlock(i)
                console.log(`[*] Searching block ${ i }`);
                if (block && block.transactions) {
                    for (let tx of block.transactions) {
                        let transaction = await web3.eth.getTransaction(tx);
                        if (account === transaction.to.toLowerCase()) {
                            console.log(`[+] Transaction found on block ${ lastBlockNumber }`);
                            console.log({ address: transaction.from, value: web3.utils.fromWei(transaction.value, 'ether'), timestamp: new Date() });
                        }
                    }
                }
            }       
        }
    }
}

