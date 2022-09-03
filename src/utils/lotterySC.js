import Web3 from 'web3'
import LotteryArtifact from '../config/artifacts/Lottery'

export class Web3Proposal {
  constructor(chainId, provider) {
    const {address, abi} = LotteryArtifact
    const contractAddress = address[chainId] 
    this.web3 = new Web3(provider)

    this.lotteryContract = new this.web3.eth.Contract(
        abi,
        contractAddress
    )
  }

  async startLottery(tokenId, nftContractAddress, bettingPrice, beneficiaryAddress) {
    const accounts = await this.web3.eth.getAccounts()
    const receipt = await this.lotteryContract.methods
      .startLottery(tokenId, nftContractAddress, bettingPrice, beneficiaryAddress)
      .send({
        from: accounts[0]
      })

    return receipt
  }
}