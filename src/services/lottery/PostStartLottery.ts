const PostStartLottery = async (lottery, account, data) => {
	const {
		nftContractAddress,
		bettingPrice,
		beneficiaryAddress,
		tokenId,
		endDate,
	} = data;

	return await lottery.methods
		.startLottery(
			Number(tokenId),
			nftContractAddress,
			Number(bettingPrice),
			beneficiaryAddress,
			Number(endDate)
		)
		.send({
			from: account,
		})
		.on('transactionHash', (txHash) => {
			alert('Transacción register lottery enviada');
		})
		.on('receipt', () => {
			alert('Transacción register lottery confirmada');
		})
		.on('error', (error) => {
			alert('Transacción register lottery fallida');
		});
};

export default PostStartLottery;
