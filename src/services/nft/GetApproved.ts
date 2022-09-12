const GetApproved = async (nft, tokenId) => {
	return await nft.methods.getApproved(tokenId).call();
};

export default GetApproved;
