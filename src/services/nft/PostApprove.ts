const PostApprove = async (nft, account, data) => {
	const { address, tokenId } = data;
	return await nft.methods
		.approve(address, tokenId)
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
