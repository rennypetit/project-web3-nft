import type { NextPage } from 'next';
import Image from 'next/image';
import ContentLeft from '../components/ContentLeft';
const Home: NextPage = () => {
	return (
		<div className='grid grid-rows-1 gap-8 text-white p-0 pt-4 m-auto md:grid-cols-1 w-full'>
			<ContentLeft />
			<div className='w-1/2 mx-auto xl:w-4/5 md:w-4/5 xxs:w-4/5 mt-10'>
				<div className='w-11/12  text-white p-0 m-auto'>
					<h2 className='font-josef text-1xl m-0 pt-0 lg:text-2xl text-orange-500'>Need to know about</h2>
					<h1 className='text-2xl font-josef font-bold leading-1 md:text-6xl xxs:text-5xl'>HOW TO PLAY</h1>
					<h3 className='font-josef text-1xl m-0 pt-0 lg:text-2xl mb-5'>Follow these 3 easy steps!</h3>
					<div className="flex flex-wrap justify-around m-auto  mb-7">
						<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/4 m-2 p-4 sm:w-1/2 xxs:w-full">
							<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>CHOOSE</h1>
							<img src="/images/1.png" alt="" className='mx-auto mb-10'/>
							<p className='text-center'>Register to RIFA & Choose your contest</p>
						</div>
						<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/4 m-2 p-4 sm:w-1/2 xxs:w-full">
							<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>BUY</h1>
							<img src="/images/2.png" alt="" className='mx-auto mb-10'/>
							<p className='text-center'>Pick Your Numbers & Complete your Purchase</p>
						</div>
						<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/4 m-2 p-4 sm:w-1/2 xxs:w-full">
							<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>WIN</h1>
							<img src="/images/3.png" alt="" className='mx-auto mb-10'/>
							<p className='text-center'>Start Dreaming, you're almost there</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
