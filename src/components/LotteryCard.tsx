import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import truncated from 'utils/truncateAddress';
import Services from '@services/index';
import { useLottery, useNFT } from 'hooks';

const LotteryCard = (props: any) => {
	// const newLotto = { nftOwner, nftContractAddress, bettingPrice, activeLottery, players, lotteryBalance, lotteryWinner, endDate }
	const { library, account } = useWeb3React();
	const services = new Services(); // instance
	const lottery = useLottery();
	const nft = useNFT(props.lotto.nftContractAddress);
	const [data, setData] = useState(false);
	const [img, setImg] = useState();
	const update = props.update

	let bettingPrice = library.utils.fromWei(
		props.lotto.bettingPrice.toString(),
		'ether'
	);
	let lotteryBalance = library.utils.fromWei(
		props.lotto.lotteryBalance.toString(),
		'ether'
	);
	const newDate = new Date();
	newDate.setTime(props.lotto.endDate * 1000);
	const dateString = newDate.toUTCString();
	//

	const handleSelect = (event: any) => {
		event.preventDefault();
	};

	const handleBuy = async () => {
		let buyTicket = props.lotto.bettingPrice
		let _lotteryId = props.lotto.id
		const data = {
			buyTicket,
			_lotteryId,
		};
		let response = await services.methodBuyTicket(lottery, account, data);
		if(response.status) {
			await update();
		}
		// await test();
	};



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
			MetaData(props.lotto.nftTokenId);
		}
	}, [nft]);

	return (
		<>
			<div className='Card xxs:mx-8 md:w-1/3 m-2 p-4 sm:w-full xxs:w-full'>
				{props.lotto.activeLottery ? (
					<div className='text-xs px-3 bg-green-500 text-gray-800 rounded-full'>
						Active
					</div>
				) : (
					<div className='text-xs px-3 bg-red-500 text-gray-800 rounded-full'>
						Inactive
					</div>
				)}
				<p>Owner: {truncated(props.lotto.nftOwner)}</p>
				<p>Nft: {data.name}</p>
				{/* {img ? (<img src={img} width={50} height={50}/>):("")} */}
				{img ? (<Image
					src={img}
					alt='nft'
					width={200}
					height={200}
				/>) : ("")}
				<p>Betting price: {bettingPrice} eth</p>
				<p>Players: {props.lotto.players.length}</p>
				<p>Balance: {lotteryBalance} eth</p>
				{props.lotto.lotteryWinner ===
					'0x0000000000000000000000000000000000000000' ? (
					<p>Winner: No winner </p>
				) : (
					<p>Winner: {truncated(props.lotto.lotteryWinner)}</p>
				)}
				<p>End date: {dateString}</p>
				<p>Beneficiary {truncated(props.lotto.beneficiaryAddress)}</p>
				{props.lotto.activeLottery ? (
					<button
						onClick={handleBuy}
						className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
						<span className='relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Buy ticket
						</span>
					</button>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default LotteryCard;
