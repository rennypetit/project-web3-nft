import type { NextPage } from 'next';
import { useWeb3React } from '@web3-react/core';
// import Button from '../components/Button';
import Card from '../components/Card';
import BuyTicket from '@components/BuyTicket';
import CreateLottery from '@components/CreateLottery';

const Lottery: NextPage = () => {
	const { active } = useWeb3React();

	return (
		<>
			<div className='w-11/12  text-white p-0 m-auto'>
				<h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl mb-10'>PLAY NOW!</h1>


				{!active ? (
					<div className='text-center py-4 lg:px-4'>
						<div
							className='p-2 bg-orange-100 items-center border-orange-500 text-orange-500 leading-none lg:rounded-full flex lg:inline-flex'
							role='alert'
						>
							<span className='font-semibold mr-2 text-left flex-auto'>
								First connect your wallet
							</span>
						</div>
					</div>
				) : (
					<>
						<CreateLottery />
						<BuyTicket />
					</>
				)}
			</div>
			<img src='/images/map.png' className='w-full' alt='' />
		</>
	);
};

export default Lottery;
