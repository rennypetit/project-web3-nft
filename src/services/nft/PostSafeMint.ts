const PostSafeMint = async (nft, account) => {
	return await nft.methods
		.safeMint()
		.send({
			from: account,
		})
		.on('transactionHash', (txHash) => {
			localStorage.setItem('safeMint', 'send');
			alert('Transacción enviada');
		})
		.on('receipt', () => {
			localStorage.setItem('safeMint', 'confirmed');
			alert('Transacción confirmada');
		})
		.on('error', (error) => {
			localStorage.setItem('safeMint', 'error');
			alert('Transacción fallida');
		});
};

export default PostSafeMint;
