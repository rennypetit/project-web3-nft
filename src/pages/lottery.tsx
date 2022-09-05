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
				<h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>
					Need to know about
				</h2>
				<h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>
					HOW TO PLAY
				</h1>
				<h3 className='font-josef text-1xl m-0 pt-0 lg:text-2xl'>
					Follow these 3 easy steps!
				</h3>
				<div className='flex flex-wrap justify-around xl:mx-28 md:mx-auto sm:mx-auto xxs:mx-auto'>
					<div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-fit m-2 p-4 sm:w-1/2 xxs:w-full'>
						<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
							CHOOSE
						</h1>
						<img src='/images/1.png' alt='' className='mx-auto mb-10' />
						<p className='text-center'>
							Register to RIFA & Choose your contest
						</p>
					</div>
					<div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-fit m-2 p-4 sm:w-1/2 xxs:w-full'>
						<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
							BUY
						</h1>
						<img src='/images/2.png' alt='' className='mx-auto mb-10' />
						<p className='text-center'>
							Pick Your Numbers & Complete your Purchase
						</p>
					</div>
					<div className='bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-fit m-2 p-4 sm:w-1/2 xxs:w-full'>
						<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>
							WIN
						</h1>
						<img src='/images/3.png' alt='' className='mx-auto mb-10' />
						<p className='text-center'>Start Dreaming, you're almost there</p>
					</div>
				</div>
				{!active ? (
					<div className="text-center py-4 lg:px-4">
					<div className="p-2 bg-orange-100 items-center border-orange-500 text-orange-500 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
					  <span className="font-semibold mr-2 text-left flex-auto">First connect your wallet</span>
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
