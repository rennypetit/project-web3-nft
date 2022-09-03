import Web3 from 'web3';
import LotteryArtifact from '../config/artifacts/Lottery';

export class Web3Proposal {
	constructor(chainId, provider) {
		const { address, abi } = LotteryArtifact;
		const contractAddress = address[chainId];
		this.web3 = new Web3(provider);
		this.lotteryContract = new this.web3.eth.Contract(abi, contractAddress);
	}

	// Write Contract
	async buyTicket() {
    // TODO
  }
	async onERC721Received() {
    // TODO
  }
	async pickTheWinner(lotteryId) {
		const accounts = await this.web3.eth.getAccounts();
		const receipt = await this.lotteryContract.methods
			.pickTheWinner(lotteryId)
			.send({ from: accounts[0] });
		return receipt;
	}
	async rawFulfillRandomWords() {
    // TODO
  }
	async requestRandomWords() {
    // TODO
  }
	async startLottery(
		tokenId,
		nftContractAddress,
		bettingPrice,
		beneficiaryAddress
	) {
		const accounts = await this.web3.eth.getAccounts();
		const receipt = await this.lotteryContract.methods
			.startLottery(
				tokenId,
				nftContractAddress,
				bettingPrice,
				beneficiaryAddress
			)
			.send({
				from: accounts[0],
			});
		return receipt;
	}

	async buyTicket(payableAmount, lotteryId) {
		const accounts = await this.web3.eth.getAccounts();
		const receipt = await this.lotteryContract.methods
			.buyTicket(payableAmount, lotteryId)
			.send({
				from: accounts[0],
			});
		return receipt;
	}

	// Read Contract
	async getContractBalance() {
    // TODO
  }
	async getLottery() {
    // TODO
  }
	async owner() {
    // TODO
  }
	async s_randomWords() {
    // TODO
  }
	async s_requestId() {
    // TODO
  }
}
