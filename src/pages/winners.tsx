import Services from '@services/index';
import { useLottery } from 'hooks';
import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import CardsWon from '../components/CardsWon';

const Winners: NextPage = () => {
	const items = Array(8).fill(0);
	const services = new Services(); // instance
	const lottery = useLottery();
	const [lotteries, setLotteries] = useState<any>();

	const getData = useCallback(async () => {
		if (lottery) {
			console.log("yes")
			const lottosToSet = await services.methodGetLotteries(lottery);
			setLotteries(lottosToSet);
			console.log(lotteries)
		}
	}, [lottery, services])

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='w-full  p-0 m-auto'>
			<div className='z-20'>
				<h1 className='text-center font-josef mb-2 text-orange-500 font-semibold z-20'>Meet the latest winners from your favorite contest</h1>
				<h1 className='text-2xl text-white text-center font-josef font-bold leading-1 md:text-6xl xxs:text-5xl mb-10'>LATEST WINNERS</h1>
				<div className='container-card-collection w-4/5 z-10'>
					{/* {items.map((item, index) => (
						<CardsWon key={index} name={'Pikatchu'} price={0.6} WinName={"Anthony"} ParNum={26} />
					))} */}
					{lotteries ? lotteries.map((item, index) => {
						if (!item.activeLottery) {
							return <CardsWon key={index} name={item.lotteryWinner} beneficiary={item.beneficiaryAddress} nftContract={item.nftContractAddress}/>
						}
					}) : <p className='text-center text-white'>Loading ...</p> }
				</div>
			</div>

		</div>
	);
};

export default Winners;
