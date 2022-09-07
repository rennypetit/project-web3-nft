import type { NextPage } from 'next';
import ContentLeft from '../components/ContentLeft';
import StartLottery from '../components/StartLottery';
import Card from '../components/Card';
const Home: NextPage = () => {
	const items = Array(4).fill(0);
	return (
		<div className=' w-full'>
			<StartLottery />
			<ContentLeft />
			
			<div className='w-1/2 mx-auto xl:w-4/5 md:w-4/5 xxs:w-4/5 mt-10'>
				<div className='w-11/12  text-white p-0 m-auto'>
							
							<h3 className='font-josef text-1xl m-0 pt-0 lg:text-2xl mb-5'>There is 3 ways to be solidary</h3>
							<div className="flex flex-wrap justify-around m-auto  mb-7">
								<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/4 m-2 p-4 sm:w-1/2 xxs:w-full">
									<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>NFT GIVEWAY</h1>
									<img src="/images/1.png" alt="" className='mx-auto mb-10'/>
									<p className='text-center'>Design the NFT and place it on the platform for the giveaway.</p>
								</div>
								<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/4 m-2 p-4 sm:w-1/2 xxs:w-full">
									<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>WHIS ME LUCK</h1>
									<img src="/images/2.png" alt="" className='mx-auto mb-10'/>
									<p className='text-center'>Select the giveaway with your favorite NFT and pay the ticket from your wallet.</p>
								</div>
								<div className="bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl  md:w-1/4 m-2 p-4 sm:w-1/2 xxs:w-full">
									<h1 className='mb-5 text-center font-josef text-1xl m-0 pt-0 lg:text-2xl'>THANK YOU</h1>
									<img src="/images/3.png" alt="" className='mx-auto mb-10'/>
									<p className='text-center'>The Charity Foundation receives the benefit of the raffle directly in its address.</p>
								</div>
							</div>
						</div>
			</div>
		</div>
	);
};

export default Home;
