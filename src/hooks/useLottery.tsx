import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import LotteryArtifact from '@config/web3/artifacts/Lottery';

const { address, abi } = LotteryArtifact;

const useLottery = () => {
	const { active, library, chainId } = useWeb3React();

	const lottery = useMemo(() => {
		if (active) return new library.eth.Contract(abi, address[chainId]);
	}, [active, chainId, library?.eth?.Contract]);

	return lottery;
};

export default useLottery;
