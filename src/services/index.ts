/* eslint-disable react-hooks/rules-of-hooks */
import { GetLottery, PostStartLottery, PostBuyTicket } from './lottery';
import { PostApprove, PostSafeMint } from './nft';

class Services {
	async methodGetLottery(lottery) {
		return await GetLottery(lottery);
	}

	async methodPostSafeMint(nft, account) {
		return await PostSafeMint(nft, account);
	}

	async methodPostApprove(nft, account, data) {
		return await PostApprove(nft, account, data);
	}

	async methodStartLottery(lottery, account, data) {
		return await PostStartLottery(lottery, account, data);
	}

	async methodBuyTicket(lottery, account, data) {
		return await PostBuyTicket(lottery, account, data);
	}
}

export default Services;
