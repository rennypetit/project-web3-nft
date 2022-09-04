import type { NextPage } from 'next';
import StartLottery from '../components/StartLottery';
import Card from '../components/Card';
const Lottery: NextPage = () => {
	const items = Array(4).fill(0);
	return (
		<>
		<StartLottery />
		<div className='w-11/12  text-white p-0 m-auto'>
			<h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>Need to know about</h2>
			<h1 className='text-2xl font-josef font-bold leading-1 md:text-8xl xxs:text-5xl'>HOW TO PLAY</h1>
			<h3 className='font-josef text-1xl m-0 pt-0 lg:text-2xl'>Follow these 3 easy steps!</h3>
			<div className="flex flex-wrap justify-around xl:mx-28 md:mx-auto sm:mx-auto xxs:mx-auto mb-7">
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
			<div className='container-card-collection w-4/5 z-10'>
				{items.map((item, index) => (
					<Card key={index} name={'Pikatchu'} price={0.1} number={10} end={5}/>
				))}
			</div>
		</div>
		<img src="/images/map.png" className='w-full' alt="" />
		</>
	);
};

export default Lottery;
