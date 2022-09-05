/* eslint-disable react-hooks/rules-of-hooks */
import { GetLottery, PostStartLottery } from './lottery';
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
}

export default Services;
