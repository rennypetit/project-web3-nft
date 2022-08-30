import type { NextPage } from 'next';
import Button from '../components/Button';
import Card from '../components/Card';
const Lottery: NextPage = () => {
	return (
		<>
		<div className='w-11/12  text-white p-0 m-auto'>
			<h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>Need to know about</h2>
			<h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>HOW TO PLAY</h1>
			<h3 className='font-josef text-1xl m-0 pt-0 lg:text-2xl'>Follow these 3 easy steps!</h3>
			<div className="flex flex-wrap justify-around xl:mx-28 md:mx-auto sm:mx-auto xxs:mx-auto">
				<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-fit m-2 p-4 sm:w-1/2 xxs:w-full">
					<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>CHOOSE</h1>
					<img src="/images/1.png" alt="" className='mx-auto mb-10'/>
					<p className='text-center'>Register to RIFA & Choose your contest</p>
				</div>
				<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-fit m-2 p-4 sm:w-1/2 xxs:w-full">
					<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>BUY</h1>
					<img src="/images/2.png" alt="" className='mx-auto mb-10'/>
					<p className='text-center'>Pick Your Numbers & Complete your Purchase</p>
				</div>
				<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-fit m-2 p-4 sm:w-1/2 xxs:w-full">
					<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>WIN</h1>
					<img src="/images/3.png" alt="" className='mx-auto mb-10'/>
					<p className='text-center'>Start Dreaming, you're almost there</p>
				</div>
			</div>
			<div className='m-auto w-80 mt-10'>
				<Card />
				<div className='pt-6 text-center'>
				<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
					<span className="relative px-5 py-2.5 transition-all font-bold ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Mint
					</span>
				</button>
				</div>
			</div>
		</div>
		<img src="/images/map.png" className='w-full' alt="" />
		</>
	);
};

export default Lottery;
