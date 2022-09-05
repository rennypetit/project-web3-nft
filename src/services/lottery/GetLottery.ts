const GetLottery = async (lottery) => {
	return await lottery.methods.getLottery(0).call();
};

export default GetLottery;
