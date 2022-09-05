const PostBuyTicket = async (lottery, account, data) => {
	const { buy, lotteryId } = data;

	return await lottery.methods
		.buyTicket(Number(lotteryId))
		.send({
			from: account,
		})
		.on('transactionHash', (txHash) => {
			alert('Transacción buy lottery enviada');
		})
		.on('receipt', () => {
			alert('Transacción buy lottery confirmada');
		})
		.on('error', (error) => {
			alert('Transacción buy lottery fallida');
		});
};

export default PostBuyTicket;
