import { useWeb3React } from '@web3-react/core';
import React, { useEffect } from 'react';
import Image from 'next/image';
import truncated from 'utils/truncateAddress';
import Services from '@services/index';
import { useLottery } from 'hooks';

const LotteryCard = (props: any) => {
	// const newLotto = { nftOwner, nftContractAddress, bettingPrice, activeLottery, players, lotteryBalance, lotteryWinner, endDate }
	const { library, account } = useWeb3React();
	const services = new Services(); // instance
	const lottery = useLottery();
	
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

	const handleBuy = () => {
		let buyTicket = props.lotto.bettingPrice
		let _lotteryId = props.lotto.id
		console.log(">id",props.lotto)
		// const data = {
		// 	buyTicket,
		// 	_lotteryId,
		// };
		// services.methodBuyTicket(lottery, account, data);
	};

	return (
		<>
			<div className='Card xxs:mx-8 md:w-1/2 m-2 p-4 sm:w-full xxs:w-full'>
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
				<p>Nft contract: {truncated(props.lotto.nftContractAddress)}</p>
				<p>Betting price: {bettingPrice} eth</p>
				<p>Is active: {props.lotto.activeLottery ? 'true' : 'false'}</p>
				<p>Players: {props.lotto.players.length}</p>
				<p>Balance: {lotteryBalance} eth</p>
				{props.lotto.lotteryWinner ===
				'0x0000000000000000000000000000000000000000' ? (
					<p>Winner: No winner </p>
				) : (
					<p>Winner: {props.lotto.lotteryWinner}</p>
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
