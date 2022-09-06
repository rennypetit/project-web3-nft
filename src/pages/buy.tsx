/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useForm } from 'react-hook-form';
import { useNFT, useLottery } from 'hooks';
// import getLottery from '../services/lottery/getLottery';
import Services from 'services';

type IFormInput = {
	buy: number;
	lotteryId: number;
};
const startLottery = () => {
	const services = new Services(); // instance
	const lottery = useLottery();
	const { active, account } = useWeb3React();

	const handleBuy = (buyTicket, _lotteryId) => {
		const data = {
			buyTicket,
			_lotteryId,
		};
		services.methodBuyTicket(lottery, account, data);
	};

	return (
		<div className='text-white'>
			<button onClick={() => handleBuy('10000000000000000', '1')}>buy</button>
		</div>
	);
};

export default startLottery;
