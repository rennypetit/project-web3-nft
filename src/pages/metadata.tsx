/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm } from 'react-hook-form';
import { useNFT, useLottery } from 'hooks';
// import getLottery from '../services/lottery/getLottery';
import Services from 'services';
import GetMetaData from '../services/nft/GetMetaData';

const startLottery = () => {
	const services = new Services(); // instance
	const nft = useNFT();
	const [data, setData] = useState(false);

	useEffect(() => {
		if (nft) {
			const MetaData = async (tokenURI = 1) => {
				const dataTokenURI = await services.methodMetaData(nft, tokenURI);
				const res = await fetch(dataTokenURI);
				const dataNFT = await res.json();
				console.log(dataNFT);
				setData(dataNFT);
			};
			MetaData();
		}
	}, [nft]);

	return <div className='text-white'>{data.name}</div>;
};

export default startLottery;
