const GetMetaData = async (nft, tokenURI) => {
	return await nft.methods.tokenURI(tokenURI).call();
};

export default GetMetaData;
