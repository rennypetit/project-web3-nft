const PostApprove = async (nft, account, data) => {
	const { to, tokenId } = data;
	console.log(to, tokenId)
	return await nft.methods
		.approve(to, tokenId)
		.send({
			from: account,
		})
		.on('transactionHash', (txHash) => {
			alert('Transacción de nft enviada');
		})
		.on('receipt', () => {
			alert('Transacción de nft confirmada');
		})
		.on('error', (error) => {
			alert('Transacción de nft fallida');
		});
};

export default PostApprove;
