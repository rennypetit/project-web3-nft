import Services from '@services/index';
import { useWeb3React } from '@web3-react/core';
import { useLottery, useNFT } from 'hooks';
import React, { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import LotteryCard from './LotteryCard';

const BuyTicket = () => {
	const services = new Services(); // instance
	const lottery = useLottery();
	const nft = useNFT();
	const { active, account } = useWeb3React();
	const [data, setData] = useState(null);
	const [activeLotteries, setActiveLotteries] = useState([]);
	const [lottoToBuy, setLottoToBuy] = useState();
	const [lotteries, setLotteries] = useState<any>();

	const update = async () => {
		const lottosToSet = await services.methodGetLotteries(lottery);
		setLotteries(lottosToSet);
	}

	const getData = useCallback(async () => {
		if (lottery) {
			console.log("yes")
			const lottosToSet = await services.methodGetLotteries(lottery);
			setLotteries(lottosToSet);
			console.log(lotteries)
		}
	}, [lotteries, lottery, services])

	useEffect(() => {
		getData();
	}, []);

	/* five */
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		const response = await services.methodBuyTicket(lottery, account, data);
		console.log(response);
	};
	/* end five */

	const handleSelect = (event) => {
		event.preventDefault();
		setLottoToBuy(0);
	};

	return (
		<>
			<h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>
				Want to play?
			</h2>
			<h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>
				Buy ticket
			</h1>
			<div>
				<div className='mt-5  rounded-3xl'>
					<h1 className='pt-5 mb-5 text-center font-josef text-3xl m-0 pt-0 lg:text-2xl'>
						Active lotteries
					</h1>
						<div className='mt-10 flex flex-wrap'>
							{lotteries ? (lotteries.map((item, index) => {
								if (item.activeLottery) {
									return <LotteryCard key={index} lotto={item} update={update}/>;
								}
							})) : (<p className="text-white text-center">Loading ...</p>)}
						</div>
				</div>
			</div>
		</>
	);
};

export default BuyTicket;
