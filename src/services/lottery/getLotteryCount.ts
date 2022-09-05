const getLotteryCount = async (lottery: any) => {
	return await lottery.methods.getLotteryCount().call();
};

export default getLotteryCount;
