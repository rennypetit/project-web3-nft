import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import NFTArtifact from '@config/artifacts/NFT';

const { address, abi } = NFTArtifact;

const useNFT = (newAddress=null) => {
	const { active, library, chainId } = useWeb3React();
	let addr;
	if(newAddress) {
		addr = newAddress
	} else {
		addr = address[chainId]
	}
	const NFT = useMemo(() => {
		if (active) return new library.eth.Contract(abi, addr);
	}, [active, chainId, library?.eth?.Contract]);

	return NFT;
};

export default useNFT;
