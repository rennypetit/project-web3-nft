import Image from 'next/image';
import truncated from 'utils/truncateAddress';
import React, { useEffect, useState } from 'react';
import { useLottery, useNFT } from 'hooks';
import Services from '@services/index';
import { useWeb3React } from '@web3-react/core';

const CardsWon = (props: any) => {
	const { library, account } = useWeb3React();
	const services = new Services(); // instance
	const lottery = useLottery();
	const nft = useNFT(props.nftContractAddress);
	const [data, setData] = useState(false);
	const [img, setImg] = useState();

	useEffect(() => {
		if (nft) {
			const MetaData = async (tokenURI = 1) => {
				const dataTokenURI = await services.methodMetaData(nft, tokenURI);
				const res = await fetch(dataTokenURI);
				const dataNFT = await res.json();
				if (dataNFT.image) {
					let imgToSet = await fetch(dataNFT.image)
					let blob = await imgToSet.blob()
					var urlCreator = window.URL || window.webkitURL;
					var imageUrl = urlCreator.createObjectURL(blob);
					console.log(imageUrl)
					setImg(imageUrl)
				}
				console.log(dataNFT);
				setData(dataNFT);
			};
			MetaData(props.nftTokenId);
		}
	}, [nft]);

	return (
		<>
			<div className='Card xxs:mx-8'>
				{img ? (<Image
						src={img}
						alt='nft'
						width={200}
						height={200}
					/>) : ("")}
				<p className='text-white text-center pt-4 font-poppins font-medium'>Winner</p>
				<p className='text-white text-center pt-4 font-poppins font-medium pb-3'>{truncated(props.name)}</p>
				<p className='text-white'>Beneficiary: {truncated(props.beneficiary)}</p>
				<p className='text-white'>Nft Contract: {truncated(props.nftContract)}</p>
			</div>
		</>
	);
};

export default CardsWon;