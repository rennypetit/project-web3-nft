const GetLottery = async (lottery: any, i: any) => {
	return await lottery.methods.getLottery(i).call();
};

export default GetLottery;
