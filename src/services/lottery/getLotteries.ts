const getLotteries = async (lottery: any) => {
	console.log('getting lotteries');
	const count = await lottery.methods.getLotteryCount().call();
	let res = [];
	for (let i = 0; i < count; i++) {
		let response = await lottery.methods.getLottery(i).call();
		const nftOwner = response[0];
		const nftContractAddress = response[1];
		const bettingPrice = response[2];
		const activeLottery = response[3];
		const players = response[4];
		const lotteryBalance = response[5];
		const lotteryWinner = response[6];
		const endDate = response[7];
        const beneficiaryAddress = response[8];
		const newLotto = {
			nftOwner,
			nftContractAddress,
			bettingPrice,
			activeLottery,
			players,
			lotteryBalance,
			lotteryWinner,
			endDate,
            beneficiaryAddress
		};
		res.push(newLotto);
        // res.push(response)
	}
	return await Promise.all(res);
};

export default getLotteries;
