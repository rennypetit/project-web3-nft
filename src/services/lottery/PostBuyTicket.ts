const PostBuyTicket = async (lottery, account, data) => {
	const { buyTicket, _lotteryId } = data;
	return await lottery.methods
		.buyTicket(_lotteryId)
		.send({
			from: account,
			value: Number(buyTicket),
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
