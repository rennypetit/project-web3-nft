const PostStartLottery = async (lottery, account, data) => {
	const { nftContractAddress, bettingPrice, beneficiaryAddress, tokenId } =
		data;
	return await lottery.methods
		.startLottery(
			nftContractAddress,
			bettingPrice,
			beneficiaryAddress,
			tokenId,
			6000
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
