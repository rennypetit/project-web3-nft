import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import LotteryArtifact from '../config/artifacts/Lottery'

const { address, abi } = LotteryArtifact;

const useLotterySC = () => {
	const { active, library, chainId } = useWeb3React();

	const lotterySC = useMemo(() => {
		if (active) {
			return new library.eth.Contract(abi, address[chainId as keyof typeof address]);
		}
	}, [active, chainId, library?.eth?.Contract]);

    return lotterySC
};

export default useLotterySC;