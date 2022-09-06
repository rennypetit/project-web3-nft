const getLotteries = async (lottery: any) => {
	console.log('getting lotteries');
	const count = await lottery.methods.getLotteryCount().call();
	let res = [];
	for (let i = 0; i < count; i++) {
		let id = i;
		let response = await lottery.methods.getLottery(i).call();
		const nftOwner = response[0];
		const nftContractAddress = response[1];
		const bettingPrice = response[2];
		const activeLottery = response[3];
		const players = response[4];
		const lotteryBalance = response[5];
        const beneficiaryAddress = response[6];
		const lotteryWinner = response[7];
		const endDate = response[8];
		const nftTokenId = response[9]
		const newLotto = {
			id,
			nftOwner,
			nftContractAddress,
			bettingPrice,
			activeLottery,
			players,
			lotteryBalance,
			lotteryWinner,
			endDate,
            beneficiaryAddress,
			nftTokenId
		};
		res.push(newLotto);
		console.log(response)
        // res.push(response)
	}
	return await Promise.all(res);
};

export default getLotteries;
